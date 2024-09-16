# Serverless Framework Compose: Multiframework Deployment

Deploying multiple services in a monorepository is a common pattern in larger teams. Serverless Framework Compose simplifies the deployment and orchestration of these services by offering:

1. Parallel deployment of multiple services
2. Ordered deployment of services
3. Support for deploying different types of services (e.g., Traditional, SAM, CloudFormation) together
4. Sharing outputs between services
5. Running commands across multiple services

In this example, we demonstrate how to use Serverless Compose to deploy three types of services together:

1. AWS CloudFormation Service: Deploys shared resources with outputs that are referenced by the other services.
2. Serverless Framework Traditional Service
3. AWS SAM Template Service

The AWS CloudFormation service is deployed first to create shared resources, followed by the parallel deployment of the Traditional and AWS SAM services.

This example also illustrates how to use Serverless Variables with Serverless Compose for organizing and structuring your application, as well as managing different stages.

For more information about Serverless Compose, please see the [Serverless Compose docs](https://www.serverless.com/framework/docs/guides/compose)

For more information about using AWS SAM and or AWS CloudFormation templates with the Serverless Framework, please see the [AWS SAM/CFN docs](https://www.serverless.com/framework/docs/guides/sam)

For more information about Serverless Variables, please see the [Serverless Variables docs](https://www.serverless.com/framework/docs/guides/variables)
