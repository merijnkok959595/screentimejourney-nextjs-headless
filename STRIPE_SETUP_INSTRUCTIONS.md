# 🔥 URGENT: Stripe Setup with Your Keys

## **✅ Your Stripe Publishable Key:**
```
pk_live_51Rd76LCVD9tkw4fnw1IXXdpLUbxSVNpPME4P4BSqNNToapQhfhJ6SWUszE5jcqoW1NVSE7fWqCZeyCD0MxHqipzp00LHVNoOh9
```

## **🚀 Step 1: Create Products in Stripe Dashboard**

1. **Go to Stripe Dashboard**: https://dashboard.stripe.com/products
2. **Create Premium Plan**:
   - Click "Add Product"
   - Name: "Screen Time Journey Premium"
   - Description: "Premium plan with advanced features"
   - Price: $9.99 USD
   - Billing: Recurring monthly
   - Copy the **Price ID** (starts with `price_`)

3. **Create Pro Plan**:
   - Click "Add Product"
   - Name: "Screen Time Journey Pro" 
   - Description: "Pro plan with all features"
   - Price: $19.99 USD
   - Billing: Recurring monthly
   - Copy the **Price ID** (starts with `price_`)

## **🔧 Step 2: Add to Vercel Environment Variables**

**Go to**: https://vercel.com/merijnkok959595s-projects/app-screentimejourney-com/settings/environment-variables

**Add these variables:**

```bash
# Stripe Configuration (LIVE KEYS)
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_51Rd76LCVD9tkw4fnw1IXXdpLUbxSVNpPME4P4BSqNNToapQhfhJ6SWUszE5jcqoW1NVSE7fWqCZeyCD0MxHqipzp00LHVNoOh9

# Replace with your actual Price IDs from Step 1
REACT_APP_STRIPE_PREMIUM_PRICE_ID=price_YOUR_PREMIUM_PRICE_ID
REACT_APP_STRIPE_PRO_PRICE_ID=price_YOUR_PRO_PRICE_ID

# Set environment for all: Production, Preview, Development
```

## **⚡ Step 3: Deploy Changes**

After adding the environment variables to Vercel:
1. **Trigger Redeploy**: Go to Vercel → Deployments → Click "Redeploy"
2. **Test**: Visit https://screentimejourney.vercel.app
3. **Click Start Now** → Should open payment modal (not redirect to Shopify)

## **🎯 What Happens Next:**

**Before (Now):**
- Start Now → Redirects to Shopify (fallback)

**After (With Stripe Keys):**
- Start Now → Opens beautiful payment modal
- Users can subscribe directly in your app
- Seamless payment experience

## **📋 Need Help?**

1. **Products not showing?** Make sure Price IDs are correct
2. **Payment not working?** Check Stripe webhooks (we'll set up later)
3. **Still redirecting?** Clear browser cache after redeployment

**This will fix the "This page could not be found" error immediately!** 🚀

