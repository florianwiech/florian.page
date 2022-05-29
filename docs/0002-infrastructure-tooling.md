# Infrastructure tooling

* Status: accepted
* Deciders: Florian Wiech
* Date: 10th May 2022

## Context and Problem Statement

To be able to build the [Infrastructure Architecture](0001-infrastructure-architecture.md), I need some IaC tooling that helps me with automation.

Here are certain aspects we should take into account when choosing a specific tool:
- CloudFront needs Certificate deployed in *us-east-1* region.
- To be able to verify Certificates via DNS, we ned the Route53 Hosted Zone to be the active DNS for that domain. Otherwise the verification does not work. The name server setup for the domain is a manual process.

Which IaC Tooling setup should we use to build the infrastructure?

## Decision Drivers

* cross-region deployment
* less maintenance for infrastructure files -> stable API, low-frequency changes on dependencies

## Considered Options

* SAM
* aws-cdk
* CloudFormation
* Terraform

## Decision Outcome

Chosen option: "Terraform", because it is the only tool that offers cross-region deployments with linking dependencies.
It has a stable api where dependency updates not that frequent (compared to aws-cdk).
