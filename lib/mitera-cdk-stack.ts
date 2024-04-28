import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Asset } from "aws-cdk-lib/aws-s3-assets";
import * as path from "path";
import { OpenApiGatewayToLambda } from "@aws-solutions-constructs/aws-openapigateway-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class appCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const newApi = new OpenApiGatewayToLambda(this, "OpenApiGatewayToLambda", {
      apiDefinitionAsset: new Asset(this, "ApiDefinitionAsset", {
        path: path.join(`api`, "api.yaml"),
      }),
      apiIntegrations: [
        {
          id: "CreateAdminHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "create.handler",
            code: lambda.Code.fromAsset("lambda/admin"),
          },
        },
        {
          id: "ReadAdminHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "read.handler",
            code: lambda.Code.fromAsset("lambda/admin"),
          },
        },
        {
          id: "ReadAllAdminHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "readAll.handler",
            code: lambda.Code.fromAsset("lambda/admin"),
          },
        },
        {
          id: "UpdateAdminHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "update.handler",
            code: lambda.Code.fromAsset("lambda/admin"),
          },
        },
        {
          id: "DeleteAdminHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "delete.handler",
            code: lambda.Code.fromAsset("lambda/admin"),
          },
        },

        {
          id: "CreatePartnerHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "create.handler",
            code: lambda.Code.fromAsset("lambda/partner"),
          },
        },
        {
          id: "ReadPartnerHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "read.handler",
            code: lambda.Code.fromAsset("lambda/partner"),
          },
        },
        {
          id: "ReadAllPartnerHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "readAll.handler",
            code: lambda.Code.fromAsset("lambda/partner"),
          },
        },
        {
          id: "UpdatePartnerHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "update.handler",
            code: lambda.Code.fromAsset("lambda/partner"),
          },
        },
        {
          id: "DeletePartnerHandler",
          lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: "delete.handler",
            code: lambda.Code.fromAsset("lambda/partner"),
          },
        },
      ],
    });
  }
}
