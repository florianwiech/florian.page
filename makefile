REGION='eu-central-1'
export

deploy-hosted-zone:
	aws cloudformation deploy \
		--template-file ./infrastructure/hosted-zone.yml \
		--stack-name florian-page-hosted-zone \
		--region $(REGION)
