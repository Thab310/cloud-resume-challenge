.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec Thabelo --no-session -- sam deploy

deploy-site:
	aws-vault exec Thabelo --no-session -- aws s3 sync ./portfolio-site s3://www.thabeloramabulana.com

