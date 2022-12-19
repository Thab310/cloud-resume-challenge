# cloud-resume-challenge

My website portfolio that has my resume in it, built using AWS resources. Inspired by "Cloud Resume Challenge" by Forrest Brazeal

# Architecture:
![architecture diagram](crc-architecture.drawio%20(1).png)
All services were configured and provisioned by AWS SAM IaC, from the beginning. I started by building 3 services in the AWS Console before realizing it would be better for to do it all in IaC from the start.

# Builds Provisioning:
Github actions workflow is used to automatically provision all resources for the website on AWS on a code change to the default branch on this respository. 