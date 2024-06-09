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
const cdk = __importStar(require("@aws-cdk/core"));
const StaticSite_1 = require("./StaticSite");
class MyStaticSiteStack extends cdk.Stack {
    constructor(parent, name) {
        super(parent, name);
        new StaticSite_1.StaticSite(this, "JSCCStaticWebsite");
    }
}
const app = new cdk.App();
new MyStaticSiteStack(app, "MyJSCCStaticWebsite");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQXFDO0FBQ3JDLDZDQUEwQztBQUUxQyxNQUFNLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3ZDLFlBQVksTUFBZSxFQUFFLElBQVk7UUFDdkMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUVsRCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNTaXRlIH0gZnJvbSBcIi4vU3RhdGljU2l0ZVwiO1xyXG5cclxuY2xhc3MgTXlTdGF0aWNTaXRlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogY2RrLkFwcCwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihwYXJlbnQsIG5hbWUpO1xyXG5cclxuICAgIG5ldyBTdGF0aWNTaXRlKHRoaXMsIFwiSlNDQ1N0YXRpY1dlYnNpdGVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5cclxubmV3IE15U3RhdGljU2l0ZVN0YWNrKGFwcCwgXCJNeUpTQ0NTdGF0aWNXZWJzaXRlXCIpO1xyXG5cclxuYXBwLnN5bnRoKCk7XHJcbiJdfQ==