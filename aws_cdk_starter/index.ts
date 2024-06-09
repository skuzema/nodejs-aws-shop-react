#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { StaticSite } from "./StaticSite";

import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Access environment variables
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
// const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;

class MyStaticSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new StaticSite(this, "JSCCStaticWebsite");
  }
}

const app = new cdk.App();

new MyStaticSiteStack(app, "MyJSCCStaticWebsite");

app.synth();
