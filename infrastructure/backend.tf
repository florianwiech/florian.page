terraform {
  backend "s3" {
    region         = "eu-central-1"
    bucket         = "terraform-state-backend-flow"
    key            = "florian.page/terraform.tfstate"
    dynamodb_table = "terraform-state-backend-lock-flow"
    encrypt        = "true"
  }
}
