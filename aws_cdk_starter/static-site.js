#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticSite = void 0;
const s3 = __importStar(require("@aws-cdk/aws-s3"));
const s3deploy = __importStar(require("@aws-cdk/aws-s3-deployment"));
const cloudfront = __importStar(require("@aws-cdk/aws-cloudfront"));
const iam = __importStar(require("@aws-cdk/aws-iam"));
const core_1 = require("@aws-cdk/core");
class StaticSite extends core_1.Construct {
    constructor(parent, name) {
        super(parent, name);
        const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, "JSCC-OAI");
        const siteBucket = new s3.Bucket(this, "JSCCStaticBucket", {
            bucketName: "sk-nodejs-aws-shop-react",
            websiteIndexDocument: "index.html",
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
        });
        siteBucket.addToResourcePolicy(new iam.PolicyStatement({
            actions: ["S3:GetObject"],
            resources: [siteBucket.arnForObjects("*")],
            principals: [
                new iam.CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId),
            ],
        }));
        const distribution = new cloudfront.CloudFrontWebDistribution(this, "JSCC-distribution", {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: siteBucket,
                        originAccessIdentity: cloudfrontOAI,
                    },
                    behaviors: [
                        {
                            isDefaultBehavior: true,
                        },
                    ],
                },
            ],
        });
        new s3deploy.BucketDeployment(this, "JSCC-Bucket-Deployment", {
            sources: [s3deploy.Source.asset("../dist")],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ["/*"],
        });
    }
}
exports.StaticSite = StaticSite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aWMtc2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLG9EQUFzQztBQUN0QyxxRUFBdUQ7QUFDdkQsb0VBQXNEO0FBQ3RELHNEQUF3QztBQUN4Qyx3Q0FBaUQ7QUFFakQsTUFBYSxVQUFXLFNBQVEsZ0JBQVM7SUFDdkMsWUFBWSxNQUFhLEVBQUUsSUFBWTtRQUNyQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBCLE1BQU0sYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU1RSxNQUFNLFVBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQ3pELFVBQVUsRUFBRSwwQkFBMEI7WUFDdEMsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO1NBQ2xELENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxtQkFBbUIsQ0FDNUIsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxzQkFBc0IsQ0FDNUIsYUFBYSxDQUFDLCtDQUErQyxDQUM5RDthQUNGO1NBQ0YsQ0FBQyxDQUNILENBQUM7UUFFRixNQUFNLFlBQVksR0FBRyxJQUFJLFVBQVUsQ0FBQyx5QkFBeUIsQ0FDM0QsSUFBSSxFQUNKLG1CQUFtQixFQUNuQjtZQUNFLGFBQWEsRUFBRTtnQkFDYjtvQkFDRSxjQUFjLEVBQUU7d0JBQ2QsY0FBYyxFQUFFLFVBQVU7d0JBQzFCLG9CQUFvQixFQUFFLGFBQWE7cUJBQ3BDO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxpQkFBaUIsRUFBRSxJQUFJO3lCQUN4QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FDRixDQUFDO1FBRUYsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQzVELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsWUFBWTtZQUNaLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXBERCxnQ0FvREMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXHJcbi8vQHRzLW5vY2hlY2tcclxuaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHMzIGZyb20gXCJAYXdzLWNkay9hd3MtczNcIjtcclxuaW1wb3J0ICogYXMgczNkZXBsb3kgZnJvbSBcIkBhd3MtY2RrL2F3cy1zMy1kZXBsb3ltZW50XCI7XHJcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSBcIkBhd3MtY2RrL2F3cy1jbG91ZGZyb250XCI7XHJcbmltcG9ydCAqIGFzIGlhbSBmcm9tIFwiQGF3cy1jZGsvYXdzLWlhbVwiO1xyXG5pbXBvcnQgeyBDb25zdHJ1Y3QsIFN0YWNrIH0gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNTaXRlIGV4dGVuZHMgQ29uc3RydWN0IHtcclxuICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFN0YWNrLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHBhcmVudCwgbmFtZSk7XHJcblxyXG4gICAgY29uc3QgY2xvdWRmcm9udE9BSSA9IG5ldyBjbG91ZGZyb250Lk9yaWdpbkFjY2Vzc0lkZW50aXR5KHRoaXMsIFwiSlNDQy1PQUlcIik7XHJcblxyXG4gICAgY29uc3Qgc2l0ZUJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgXCJKU0NDU3RhdGljQnVja2V0XCIsIHtcclxuICAgICAgYnVja2V0TmFtZTogXCJzay1ub2RlanMtYXdzLXNob3AtcmVhY3RcIixcclxuICAgICAgd2Vic2l0ZUluZGV4RG9jdW1lbnQ6IFwiaW5kZXguaHRtbFwiLFxyXG4gICAgICBwdWJsaWNSZWFkQWNjZXNzOiBmYWxzZSxcclxuICAgICAgYmxvY2tQdWJsaWNBY2Nlc3M6IHMzLkJsb2NrUHVibGljQWNjZXNzLkJMT0NLX0FMTCxcclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGVCdWNrZXQuYWRkVG9SZXNvdXJjZVBvbGljeShcclxuICAgICAgbmV3IGlhbS5Qb2xpY3lTdGF0ZW1lbnQoe1xyXG4gICAgICAgIGFjdGlvbnM6IFtcIlMzOkdldE9iamVjdFwiXSxcclxuICAgICAgICByZXNvdXJjZXM6IFtzaXRlQnVja2V0LmFybkZvck9iamVjdHMoXCIqXCIpXSxcclxuICAgICAgICBwcmluY2lwYWxzOiBbXHJcbiAgICAgICAgICBuZXcgaWFtLkNhbm9uaWNhbFVzZXJQcmluY2lwYWwoXHJcbiAgICAgICAgICAgIGNsb3VkZnJvbnRPQUkuY2xvdWRGcm9udE9yaWdpbkFjY2Vzc0lkZW50aXR5UzNDYW5vbmljYWxVc2VySWRcclxuICAgICAgICAgICksXHJcbiAgICAgICAgXSxcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uID0gbmV3IGNsb3VkZnJvbnQuQ2xvdWRGcm9udFdlYkRpc3RyaWJ1dGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJKU0NDLWRpc3RyaWJ1dGlvblwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JpZ2luQ29uZmlnczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzM09yaWdpblNvdXJjZToge1xyXG4gICAgICAgICAgICAgIHMzQnVja2V0U291cmNlOiBzaXRlQnVja2V0LFxyXG4gICAgICAgICAgICAgIG9yaWdpbkFjY2Vzc0lkZW50aXR5OiBjbG91ZGZyb250T0FJLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWhhdmlvcnM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHRCZWhhdmlvcjogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIG5ldyBzM2RlcGxveS5CdWNrZXREZXBsb3ltZW50KHRoaXMsIFwiSlNDQy1CdWNrZXQtRGVwbG95bWVudFwiLCB7XHJcbiAgICAgIHNvdXJjZXM6IFtzM2RlcGxveS5Tb3VyY2UuYXNzZXQoXCIuLi9kaXN0XCIpXSxcclxuICAgICAgZGVzdGluYXRpb25CdWNrZXQ6IHNpdGVCdWNrZXQsXHJcbiAgICAgIGRpc3RyaWJ1dGlvbixcclxuICAgICAgZGlzdHJpYnV0aW9uUGF0aHM6IFtcIi8qXCJdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==