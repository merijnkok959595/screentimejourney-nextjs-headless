// AWS Amplify Configuration for Screen Time Journey
import { Amplify } from 'aws-amplify';

const awsConfig = {
  Auth: {
    region: process.env.REACT_APP_AWS_REGION || 'us-east-1',
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    mandatorySignIn: true,
    cookieStorage: {
      domain: process.env.REACT_APP_COOKIE_DOMAIN || '.vercel.app',
      path: '/',
      expires: 365,
      sameSite: 'strict',
      secure: true
    },
    authenticationFlowType: 'USER_SRP_AUTH',
    oauth: {
      domain: process.env.REACT_APP_OAUTH_DOMAIN,
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: process.env.REACT_APP_REDIRECT_SIGN_IN || window.location.origin,
      redirectSignOut: process.env.REACT_APP_REDIRECT_SIGN_OUT || window.location.origin,
      responseType: 'code'
    }
  },
  API: {
    endpoints: [
      {
        name: 'screentimeAPI',
        endpoint: process.env.REACT_APP_API_ENDPOINT || 'https://your-api-gateway-url',
        region: process.env.REACT_APP_AWS_REGION || 'us-east-1'
      }
    ]
  }
};

// Configure Amplify
Amplify.configure(awsConfig);

export default awsConfig;