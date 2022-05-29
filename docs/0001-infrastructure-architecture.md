# Infrastructure architecture

* Status: accepted
* Deciders: Florian Wiech
* Date: 10th May 2022

## Context and Problem Statement

The website needs infrastructure it can run on and is accessible via a domain.
Where shall we host the website? Which infrastructure should we use?

## Decision Drivers

* low on maintenance
* no dependency overhead
* quick support for new cloud infrastructure features
* personally financeable

## Considered Options

* AWS Cloud - static file serve
* AWS Cloud - Amplify
* Hosted Provider

## Decision Outcome

Chosen option: "AWS Cloud - static file serve", because cheapest option that I can maintain and should be future-proof without having to wait for a provider to support new versions.

## Pros and Cons of the Options

### AWS Cloud - static file serve

Services:
* S3: serverless static file serve that is cheap and scalable
* CloudFront: CDN Cache, edge locations for faster feedback
* Hosted zone: because it enables us to have the website at the apex domain. no `www` subdomain prefix required.
* Maybe CloudWatch RUM: Analytics

* Good, because excellent pricing
* Good, because IaC compatible
* Good, because a lot of options on how to build the site
* Bad, because manual setup takes more time

### AWS Cloud - Amplify

* Good, because excellent pricing
* Good, because no custom deployment setup
* Bad, because lacks support of [latest Next.js versions](https://github.com/aws-amplify/amplify-hosting/issues/2343) (they are always really late)

### Hosted Provider

Examples would be Vercel or Netlify.
When using NextJs Vercel would be the best option with direct Next.js support, because they build it.
Netlify also supports it, but it often takes some time until the latest version is supported.

* Good, because no custom deployment setup
* Bad, because often limited free plan, pricing for personal things quite expensive
