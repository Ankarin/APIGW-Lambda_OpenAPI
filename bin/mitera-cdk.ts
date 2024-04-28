#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MiteraCdkStack } from '../lib/mitera-cdk-stack';

const app = new cdk.App();
new MiteraCdkStack(app, 'MiteraCdkStack');
