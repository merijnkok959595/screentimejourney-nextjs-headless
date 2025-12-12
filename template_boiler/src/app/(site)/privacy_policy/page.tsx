import React from 'react';
import Footer from '../../../components/Common/Footer';

const PrivacyPolicyPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="policy-date">Last updated: December 7, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support.</p>
              <ul>
                <li><strong>Account Information:</strong> Username, email address, password</li>
                <li><strong>Profile Information:</strong> Gender preference for milestone tracking, progress data</li>
                <li><strong>Usage Information:</strong> Device activity, screen time data, blocked content attempts</li>
                <li><strong>Communication:</strong> Support requests, feedback, community interactions</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our service</li>
                <li>Process transactions and manage subscriptions</li>
                <li>Track your progress and display milestones</li>
                <li>Show leaderboard rankings (with anonymized data)</li>
                <li>Send important service updates and notifications</li>
                <li>Provide customer support</li>
                <li>Improve our service and develop new features</li>
              </ul>
            </section>

            <section>
              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our service</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or asset sale</li>
                <li><strong>Anonymized Data:</strong> We may share aggregated, anonymized statistics</li>
              </ul>
            </section>

            <section>
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure data centers with physical access controls</li>
              </ul>
            </section>

            <section>
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>We retain your information for as long as your account is active or as needed to provide services. When you delete your account, we will delete your personal information within 30 days, except where retention is required by law.</p>
            </section>

            <section>
              <h2>7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicyPage;