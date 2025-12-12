import React from 'react';
import Footer from '../../../components/Common/Footer';

const TermsOfServicePage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Terms of Service</h1>
            <p className="policy-date">Last updated: December 7, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using Screen Time Journey, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>

            <section>
              <h2>2. Service Description</h2>
              <p>Screen Time Journey is a digital wellness platform that provides:</p>
              <ul>
                <li>Screen time tracking and reduction tools</li>
                <li>Content blocking and filtering capabilities</li>
                <li>Progress tracking through milestone systems</li>
                <li>Community features including leaderboards</li>
                <li>Educational content and support resources</li>
              </ul>
            </section>

            <section>
              <h2>3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information when creating your account</li>
                <li>Maintain the security of your password and account</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to circumvent blocking or filtering systems</li>
                <li>Respect other community members in all interactions</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section>
              <h2>4. Subscription and Payment</h2>
              <ul>
                <li>Subscription fees are charged in advance on a recurring basis</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We may change subscription fees with 30 days notice</li>
                <li>You can cancel your subscription at any time</li>
                <li>Upon cancellation, access continues until the end of the billing period</li>
              </ul>
            </section>

            <section>
              <h2>5. Privacy and Data</h2>
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
            </section>

            <section>
              <h2>6. Intellectual Property</h2>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of Screen Time Journey and its licensors. The service is protected by copyright, trademark, and other laws.</p>
            </section>

            <section>
              <h2>7. Prohibited Uses</h2>
              <p>You may not use our service:</p>
              <ul>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2>8. Termination</h2>
              <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>In no event shall Screen Time Journey, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.</p>
            </section>

            <section>
              <h2>10. Contact Information</h2>
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></li>
                <li><strong>Address:</strong> Linnaeusstraat 35F-14, Amsterdam, Netherlands</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default TermsOfServicePage;