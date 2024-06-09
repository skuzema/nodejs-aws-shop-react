import * as s3 from "@aws-cdk/aws-s3";
import { Construct, Stack } from "@aws-cdk/core";

export class StaticSite extends Construct {
  constructor(parent: Stack, name: string) {
    super(parent, name);

    const siteBucket = new s3.Bucket(this, "sk-nodejs-aws-shop-react", {
      bucketName: "sk-nodejs-aws-shop-react",
      websiteIndexDocument: "index.html",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    siteBucket.addToResourcePolicy;
  }
}
