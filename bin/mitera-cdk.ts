#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { appCdkStack } from "../lib/app-cdk-stack";

const app = new cdk.App();
new appCdkStack(app, "appCdkStack");
