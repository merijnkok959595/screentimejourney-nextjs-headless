import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

const PaymentModal = ({ isOpen, onClose, subscriptionType = 'premium' }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Subscription plans
  const plans = {
    premium: {
      name: 'Premium Plan',
      price: '$9.99',
      priceId: process.env.REACT_APP_STRIPE_PREMIUM_PRICE_ID,
      features: [
        'Unlimited milestone tracking',
        'Advanced analytics',
        'Priority support',
        'Custom goal setting'
      ]
    },
    pro: {
      name: 'Pro Plan', 
      price: '$19.99',
      priceId: process.env.REACT_APP_STRIPE_PRO_PRICE_ID,
      features: [
        'Everything in Premium',
        'Family account sharing',
        'Advanced reporting',
        'Personal coaching calls',
        'Custom milestone videos'
      ]
    }
  };

  const selectedPlan = plans[subscriptionType];

  React.useEffect(() => {
    if (isOpen && user && selectedPlan) {
      createPaymentIntent();
    }
  }, [isOpen, user, selectedPlan]);

  const createPaymentIntent = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/create-subscription`,
        {
          priceId: selectedPlan.priceId,
          customerId: user.username
        },
        {
          headers: {
            'Authorization': `Bearer ${await user.getSession().getAccessToken().getJwtToken()}`
          }
        }
      );

      if (response.data.clientSecret) {
        setClientSecret(response.data.clientSecret);
      } else {
        throw new Error('Failed to create payment intent');
      }
    } catch (err) {
      console.error('Payment intent error:', err);
      setError(err.response?.data?.message || 'Failed to initialize payment');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError('');

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: 'if_required'
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setPaymentSuccess(true);
      setTimeout(() => {
        onClose();
        // Refresh user data or redirect
        window.location.reload();
      }, 2000);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setError('');
      setPaymentSuccess(false);
      setClientSecret('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {paymentSuccess ? 'Payment Successful!' : `Upgrade to ${selectedPlan?.name}`}
            </h2>
            <button
              onClick={handleClose}
              disabled={loading}
              className="text-gray-400 hover:text-gray-600 text-xl disabled:opacity-50"
            >
              ×
            </button>
          </div>

          {paymentSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-6xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to {selectedPlan?.name}!
              </h3>
              <p className="text-gray-600">
                Your subscription is now active. Enjoy your premium features!
              </p>
            </div>
          ) : (
            <>
              {/* Plan Details */}
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">{selectedPlan?.name}</h3>
                  <span className="text-2xl font-bold text-purple-900">{selectedPlan?.price}/month</span>
                </div>
                <ul className="space-y-2">
                  {selectedPlan?.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Payment Form */}
              {clientSecret ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <PaymentElement />
                  
                  <button
                    type="submit"
                    disabled={loading || !stripe || !elements}
                    className="w-full bg-purple-900 text-white py-3 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50 font-medium"
                  >
                    {loading ? 'Processing...' : `Subscribe for ${selectedPlan?.price}/month`}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Secure payment powered by Stripe. Cancel anytime.
                  </p>
                </form>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-900"></div>
                  <span className="ml-2 text-gray-600">Loading payment form...</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

