import React from 'react';
import Footer from '../../../components/Common/Footer';

const RefundPolicyPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Refund Policy</h1>
            <p className="policy-date">Last updated: December 7, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>30-Day Money-Back Guarantee</h2>
              <p>We offer a 30-day money-back guarantee for new subscribers. If you're not satisfied with Screen Time Journey within the first 30 days of your subscription, you can request a full refund.</p>
            </section>

            <section>
              <h2>Eligibility for Refunds</h2>
              <p>You are eligible for a refund if:</p>
              <ul>
                <li>You request the refund within 30 days of your initial subscription</li>
                <li>You have not previously received a refund for Screen Time Journey</li>
                <li>Your account is in good standing with no violations of our Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2>What's Not Eligible</h2>
              <p>Refunds are not available for:</p>
              <ul>
                <li>Subscriptions older than 30 days</li>
                <li>Renewal payments (only initial subscriptions)</li>
                <li>Accounts that have violated our Terms of Service</li>
                <li>Partial month refunds for cancelled subscriptions</li>
                <li>Add-on services or premium features purchased separately</li>
              </ul>
            </section>

            <section>
              <h2>How to Request a Refund</h2>
              <ol>
                <li>Contact our support team at <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></li>
                <li>Include your account email and reason for requesting the refund</li>
                <li>We'll respond within 24 hours to process your request</li>
                <li>Refunds are processed back to your original payment method</li>
              </ol>
            </section>

            <section>
              <h2>Processing Time</h2>
              <ul>
                <li><strong>Credit Cards:</strong> 5-7 business days</li>
                <li><strong>PayPal:</strong> 3-5 business days</li>
                <li><strong>Bank Transfers:</strong> 7-10 business days</li>
              </ul>
              <p>Processing times may vary depending on your financial institution.</p>
            </section>

            <section>
              <h2>Subscription Cancellation</h2>
              <p>You can cancel your subscription at any time:</p>
              <ul>
                <li>Log into your account and go to subscription settings</li>
                <li>Click "Cancel Subscription"</li>
                <li>Your access continues until the end of your billing period</li>
                <li>No refund is provided for the remaining subscription period</li>
              </ul>
            </section>

            <section>
              <h2>Free Trial Periods</h2>
              <p>If we offer a free trial period:</p>
              <ul>
                <li>You can cancel anytime during the trial without charge</li>
                <li>Your subscription will automatically begin after the trial ends</li>
                <li>Cancel before the trial ends to avoid being charged</li>
              </ul>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>For refund requests or questions about this policy:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></li>
                <li><strong>Subject Line:</strong> "Refund Request"</li>
                <li><strong>Response Time:</strong> Within 24 hours</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default RefundPolicyPage;