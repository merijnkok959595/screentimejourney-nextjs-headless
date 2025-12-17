# Environment Variables Setup

Create a `.env.local` file in your project root with these variables:

```env
# AWS Cognito Configuration
REACT_APP_AWS_REGION=us-east-1
REACT_APP_USER_POOL_ID=us-east-1_xxxxxxxxx
REACT_APP_USER_POOL_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_OAUTH_DOMAIN=your-domain.auth.us-east-1.amazoncognito.com
REACT_APP_COOKIE_DOMAIN=.vercel.app
REACT_APP_REDIRECT_SIGN_IN=https://screentimejourney.vercel.app
REACT_APP_REDIRECT_SIGN_OUT=https://screentimejourney.vercel.app

# API Configuration
REACT_APP_API_ENDPOINT=https://your-api-gateway-url/prod

# Stripe Configuration
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_STRIPE_PREMIUM_PRICE_ID=price_xxxxxxxxxxxxxxxxx
REACT_APP_STRIPE_PRO_PRICE_ID=price_xxxxxxxxxxxxxxxxx

# Environment
REACT_APP_ENVIRONMENT=development
```

## Setup Instructions

1. **AWS Cognito**: Create a User Pool in AWS Cognito and get the IDs
2. **Stripe**: Create a Stripe account and get your publishable key and price IDs
3. **API Gateway**: Set up your Lambda API endpoint URL
4. **Vercel**: Add these environment variables to your Vercel project settings

## Vercel Environment Variables

In your Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add each variable with appropriate values for Production/Preview/Development

