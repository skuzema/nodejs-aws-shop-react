#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { StaticSite } from "./StaticSite";

class MyStaticSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new StaticSite(this, "JSCCStaticWebsite");
  }
}

const app = new cdk.App();

new MyStaticSiteStack(app, "MyJSCCStaticWebsite");

app.synth();
