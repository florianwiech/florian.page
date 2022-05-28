#!/bin/bash

# exit when any command fails
set -e

REGION='eu-central-1'

ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text)

BUCKET="$ACCOUNT_ID.florian.page"

aws s3 sync out s3://"$BUCKET" --delete --region $REGION

DISTRIBUTION=$(aws ssm get-parameter --name "/florian.page/distribution/id" --query Parameter.Value --output text --region $REGION)

aws cloudfront create-invalidation \
    --region $REGION \
    --distribution-id "$DISTRIBUTION" \
    --paths "/*.html"
