import React from 'react';
import Footer from '../../../components/Common/Footer';

const CookiePreferencesPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Cookie Preferences</h1>
            <p className="policy-date">Last updated: December 7, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>What Are Cookies?</h2>
              <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and understanding how you interact with our service.</p>
            </section>

            <section>
              <h2>Types of Cookies We Use</h2>
              
              <h3>Essential Cookies (Always Active)</h3>
              <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
              <ul>
                <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
                <li><strong>Preferences:</strong> Remember your language and region settings</li>
                <li><strong>Session Management:</strong> Maintain your session across pages</li>
              </ul>

              <h3>Analytics Cookies (Optional)</h3>
              <p>These cookies help us understand how users interact with our website.</p>
              <ul>
                <li><strong>Google Analytics:</strong> Track page views, user behavior, and site performance</li>
                <li><strong>User Experience:</strong> Identify areas for improvement</li>
                <li><strong>Performance Monitoring:</strong> Track loading times and errors</li>
              </ul>

              <h3>Marketing Cookies (Optional)</h3>
              <p>These cookies are used to show you relevant advertisements.</p>
              <ul>
                <li><strong>Ad Targeting:</strong> Show relevant ads based on your interests</li>
                <li><strong>Conversion Tracking:</strong> Measure the effectiveness of our marketing</li>
                <li><strong>Social Media:</strong> Enable sharing and social media integration</li>
              </ul>

              <h3>Functional Cookies (Optional)</h3>
              <p>These cookies enhance functionality and personalization.</p>
              <ul>
                <li><strong>Personalization:</strong> Remember your dashboard layout preferences</li>
                <li><strong>Features:</strong> Enable advanced features like dark mode</li>
                <li><strong>Support:</strong> Improve customer support interactions</li>
              </ul>
            </section>

            <section>
              <h2>Managing Your Preferences</h2>
              
              <h4>Cookie Banner</h4>
              <p>When you first visit our site, you'll see a cookie banner where you can accept or customize your preferences.</p>

              <h4>Browser Settings</h4>
              <p>You can also manage cookies through your browser settings:</p>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>

              <h4>Account Settings</h4>
              <p>Logged-in users can manage cookie preferences from their account dashboard under Privacy Settings.</p>
            </section>

            <section>
              <h2>Third-Party Cookies</h2>
              <p>We use some third-party services that may set their own cookies:</p>
              
              <h4>Google Analytics</h4>
              <p>Helps us understand website usage and improve user experience.</p>
              <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>

              <h4>Payment Processors</h4>
              <p>Secure payment processing requires cookies for fraud prevention and security.</p>
            </section>

            <section>
              <h2>Cookie Retention</h2>
              <p><strong>Session Cookies:</strong> Deleted when you close your browser</p>
              <p><strong>Persistent Cookies:</strong> Stored for up to 2 years or until you delete them</p>
              <p><strong>Analytics Cookies:</strong> Stored for up to 24 months</p>
              <p><strong>Marketing Cookies:</strong> Stored for up to 12 months</p>
            </section>

            <section>
              <h2>Impact of Disabling Cookies</h2>
              <p>If you disable certain cookies, some features may not work properly:</p>
              <ul>
                <li>You may need to log in more frequently</li>
                <li>Personalization features may not work</li>
                <li>Some pages may load slower</li>
                <li>We may not be able to remember your preferences</li>
              </ul>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>If you have questions about our cookie policy:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:privacy@screentimejourney.com">privacy@screentimejourney.com</a></li>
                <li><strong>Subject:</strong> Cookie Policy Question</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default CookiePreferencesPage;