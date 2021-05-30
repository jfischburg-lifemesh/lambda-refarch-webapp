// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2mjqem1ptau509ucr5s48u53cd",     // CognitoClientID
  "api_base_url": "https://ph6bwukb22.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-deploy-serverless-reference-architecture.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "http://127.0.0.1:8080" //"https://master.d13e807wuq3bhd.amplifyapp.com"                                      // AmplifyURL
};

export default config;
