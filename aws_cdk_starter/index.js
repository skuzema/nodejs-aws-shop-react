#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = __importStar(require("aws-cdk-lib"));
const StaticSite_1 = require("./StaticSite");
const dotenv = __importStar(require("dotenv"));
// Load environment variables from .env file
dotenv.config();
// Access environment variables
// const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
// const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
// const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
class MyStaticSiteStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new StaticSite_1.StaticSite(this, "JSCCStaticWebsite");
    }
}
const app = new cdk.App();
new MyStaticSiteStack(app, "MyJSCCStaticWebsite");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUFtQztBQUVuQyw2Q0FBMEM7QUFFMUMsK0NBQWlDO0FBRWpDLDRDQUE0QztBQUM1QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsK0JBQStCO0FBQy9CLDJEQUEyRDtBQUMzRCxtRUFBbUU7QUFDbkUsNkRBQTZEO0FBRTdELE1BQU0saUJBQWtCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUVsRCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0IHsgU3RhdGljU2l0ZSB9IGZyb20gXCIuL1N0YXRpY1NpdGVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XHJcblxyXG4vLyBMb2FkIGVudmlyb25tZW50IHZhcmlhYmxlcyBmcm9tIC5lbnYgZmlsZVxyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG4vLyBBY2Nlc3MgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbi8vIGNvbnN0IEFXU19BQ0NFU1NfS0VZX0lEID0gcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQ7XHJcbi8vIGNvbnN0IEFXU19TRUNSRVRfQUNDRVNTX0tFWSA9IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWTtcclxuLy8gY29uc3QgQVdTX0RFRkFVTFRfUkVHSU9OID0gcHJvY2Vzcy5lbnYuQVdTX0RFRkFVTFRfUkVHSU9OO1xyXG5cclxuY2xhc3MgTXlTdGF0aWNTaXRlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIG5ldyBTdGF0aWNTaXRlKHRoaXMsIFwiSlNDQ1N0YXRpY1dlYnNpdGVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5cclxubmV3IE15U3RhdGljU2l0ZVN0YWNrKGFwcCwgXCJNeUpTQ0NTdGF0aWNXZWJzaXRlXCIpO1xyXG5cclxuYXBwLnN5bnRoKCk7XHJcbiJdfQ==