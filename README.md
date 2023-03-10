# cloud-resume-challenge

My website portfolio that has my resume in it, built using AWS resources. Inspired by "Cloud Resume Challenge" by Forrest Brazeal

# Architecture:
![architecture diagram](crc-architecture.drawio%20(1).png)

All services were configured and provisioned using AWS SAM IaC, from the beginning. I started by building 3 services in the AWS Console before realizing it would be better for to do it all in IaC from the start.
# How the project works

Github actions workflow is used to automatically provision all resources (CI/CD) for the website on AWS on a code change to the default branch on this respository.

# High level description of functionality
* S3 bucket hosts the website
* certificates and permissions configured in AWS Route53, ACM, Policies
* Cloudfront used high availibility and security in transit (HTTPS)
* DynamoDB and Lambda function used to implement visitor counter.
* JS used to retreive counter value from API and display on site
* APIGateway used to implement an API endpoint

# Challenges encountered

1. Sam deploy was not working because I was not choosing the run time that matched my system's runtime `(python3.9)`
2. My biggest challenge was a silly one to say the least. It took me a long time to figure out why my build and deploy test was failing, I was getting a `code uri error` from my `template.yaml` file. I finally found out that I didnt use the correct URI path.

# What I could have done better
1. Use SAM CLI + AWS Toolkits to test my function locally before actually deploying it live.

# What I learned

1. It is better to keep your aws credentials in "github action secrets" rather than in my code for security reasons.