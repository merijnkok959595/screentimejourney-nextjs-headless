import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const StripeProvider = ({ children }) => {
  const options = {
    // Stripe Elements options
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#2E0456', // Purple brand color
        colorBackground: '#ffffff',
        colorText: '#1a1a1a',
        colorDanger: '#ef4444',
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px'
      },
      rules: {
        '.Label': {
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '6px'
        },
        '.Input': {
          padding: '12px',
          fontSize: '16px',
          border: '1px solid #d1d5db',
          borderRadius: '8px'
        },
        '.Input:focus': {
          borderColor: '#7c3aed',
          boxShadow: '0 0 0 2px rgba(124, 58, 237, 0.2)'
        }
      }
    }
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};

export default StripeProvider;

