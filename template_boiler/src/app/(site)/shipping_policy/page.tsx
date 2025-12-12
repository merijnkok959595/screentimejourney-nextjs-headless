import React from 'react';
import Footer from '../../../components/Common/Footer';

const ShippingPolicyPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Shipping Policy</h1>
            <p className="policy-date">Last updated: December 7, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>Digital Service Delivery</h2>
              <p>Screen Time Journey is a digital service delivered electronically. There are no physical products to ship.</p>
            </section>

            <section>
              <h2>Instant Access</h2>
              <p>Upon successful payment and account creation, you will receive:</p>
              <ul>
                <li>Immediate access to your Screen Time Journey dashboard</li>
                <li>Download links for device protection software</li>
                <li>Setup guides and onboarding materials</li>
                <li>Access to community features and leaderboards</li>
              </ul>
            </section>

            <section>
              <h2>Account Activation</h2>
              <p>Your account is activated automatically after:</p>
              <ol>
                <li>Completing the registration process</li>
                <li>Confirming your email address</li>
                <li>Processing of payment (for paid plans)</li>
              </ol>
              <p>This typically takes less than 5 minutes.</p>
            </section>

            <section>
              <h2>Software Downloads</h2>
              <p>Protection software and mobile apps are available for download immediately:</p>
              <ul>
                <li><strong>iOS App:</strong> Available via App Store</li>
                <li><strong>Android App:</strong> Direct download from your dashboard</li>
                <li><strong>Desktop Software:</strong> Available for Windows and macOS</li>
                <li><strong>Router Configurations:</strong> Provided as downloadable files</li>
              </ul>
            </section>

            <section>
              <h2>Setup Support</h2>
              <p>We provide comprehensive setup assistance:</p>
              <ul>
                <li>Step-by-step installation guides</li>
                <li>Video tutorials for each device type</li>
                <li>Live chat support during business hours</li>
                <li>Email support for detailed technical questions</li>
              </ul>
            </section>

            <section>
              <h2>Access Issues</h2>
              <p>If you experience problems accessing your account or downloads:</p>
              <ul>
                <li>Check your spam folder for the welcome email</li>
                <li>Verify your payment was processed successfully</li>
                <li>Contact support at <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></li>
                <li>Include your email address and order confirmation number</li>
              </ul>
            </section>

            <section>
              <h2>Technical Requirements</h2>
              <p>Ensure your devices meet minimum requirements:</p>
              <ul>
                <li><strong>iOS:</strong> iOS 12.0 or later</li>
                <li><strong>Android:</strong> Android 8.0 or later</li>
                <li><strong>Windows:</strong> Windows 10 or later</li>
                <li><strong>macOS:</strong> macOS 10.14 or later</li>
                <li><strong>Internet:</strong> Stable internet connection required</li>
              </ul>
            </section>

            <section>
              <h2>Multiple Devices</h2>
              <p>Your subscription includes protection for:</p>
              <ul>
                <li>Up to 5 devices per account (standard plan)</li>
                <li>Unlimited devices (premium plans)</li>
                <li>Easy device management from your dashboard</li>
                <li>Instant sync across all connected devices</li>
              </ul>
            </section>

            <section>
              <h2>Contact Support</h2>
              <p>For technical assistance or access issues:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></li>
                <li><strong>Response Time:</strong> Within 12 hours</li>
                <li><strong>Priority Support:</strong> Available for premium subscribers</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default ShippingPolicyPage;