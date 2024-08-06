# Task 10 (Backend For Frontend)

1. Task: [Task 10 (Backend For Frontend)](https://github.com/rolling-scopes-school/aws/blob/main/aws-developer/10_backend_for_frontend/task.md)
2. Screenshot:
3. Deploy:
   **FrontEnd: https://dygwcz719ldx7.cloudfront.net/**
   **FrontEnd PR: https://github.com/skuzema/nodejs-aws-shop-react/pull/3**
4. Done 11.08.2024 / deadline 12.08.2024
5. Score: 100 / 100

- [x] Evaluation criteria (80 points for covering all criteria)
  - [x] link to the repo
  - [x] Product Service API URL
  - [x] Cart Service API URL
  - [x] BFF Service API URL
  - [x] example of how to call createProduct lambda with all needed information: URL, payload, headers, etc.
  - [x] example how to call Product Service and Cart Service via BFF Service URL
- [x] Additional (optional) tasks (20 points)
  - [x] _+20 (All languages)_ - Add a cache at the BFF Service level for a request to the getProductsList lambda function of the Product Service. The cache should expire in 2 minutes.

## How to start

- clone repository
- `npm i` install packages
- `npm run build` compile typescript to js
- `cdk deploy` deploy this stack to your default AWS account/region
- `npm test` run unit test
