data "aws_route53_zone" "zone" {
  name = var.domain_name
}

resource "aws_acm_certificate" "certificate" {
  provider          = aws.us
  domain_name       = var.domain_name
  validation_method = "DNS"
}

resource "aws_route53_record" "certificate_record" {
  provider = aws.us
  for_each = {
  for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {
    name   = dvo.resource_record_name
    record = dvo.resource_record_value
    type   = dvo.resource_record_type
  }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.zone.zone_id
}

resource "aws_acm_certificate_validation" "certificate_validation" {
  provider                = aws.us
  certificate_arn         = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_record : record.fqdn]
}

data "aws_caller_identity" "current" {}

resource "aws_s3_bucket" "bucket" {
  bucket = "${data.aws_caller_identity.current.account_id}.florian.page"

  tags = {
    Name        = "florian.page"
    Project     = "florian.page"
    Environment = "production"
    ManagedBy   = "terraform"
    Role        = "public"
  }
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.bucket.id
  acl    = "private"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "example" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}


resource "aws_cloudfront_function" "url_rewrite_function" {
  name    = "nextjs-export-url-rewrite"
  runtime = "cloudfront-js-1.0"
  publish = true
  code    = file("${path.module}/url-rewrite.js")
}

locals {
  s3_origin_id = "s3-origin"
}

resource "aws_cloudfront_distribution" "distribution" {
  enabled         = true
  is_ipv6_enabled = true

  origin {
    domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  aliases = [var.domain_name]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewrite_function.arn
    }

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn            = aws_acm_certificate_validation.certificate_validation.certificate_arn
    ssl_support_method             = "sni-only"
  }

  custom_error_response {
    error_code = 404
    response_page_path = "/404.html"
    response_code = 404
  }

  tags = {
    Name        = "florian.page"
    Project     = "florian.page"
    Environment = "production"
    ManagedBy   = "terraform"
    Role        = "public"
  }
}

resource "aws_route53_record" "apex" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.distribution.domain_name
    zone_id                = aws_cloudfront_distribution.distribution.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_ssm_parameter" "distribution_id_parameter" {
  name  = "/florian.page/distribution/id"
  type  = "String"
  value = aws_cloudfront_distribution.distribution.id
}
