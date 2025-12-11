import React from 'react';
import Footer from '../../../components/Common/Footer';

const ContactInformationPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Contact Information</h1>
            <p className="page-subtitle">How to reach Screen Time Journey</p>
          </div>
        </div>
      </div>
      
      <div className="contact-info-content-section">
        <div className="page-width">
          <div className="contact-info-content">
            <section>
              <h2>Business Information</h2>
              <div className="business-details">
                <p><strong>Company Name:</strong> Screen Time Journey</p>
                <p><strong>Business Registration:</strong> Netherlands</p>
                <p><strong>VAT Number:</strong> Available upon request</p>
              </div>
            </section>

            <section>
              <h2>Contact Details</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>📧 Email Support</h3>
                  <p><strong>General Inquiries:</strong> <a href="mailto:info@screentimejourney.com">info@screentimejourney.com</a></p>
                  <p><strong>Technical Support:</strong> <a href="mailto:support@screentimejourney.com">support@screentimejourney.com</a></p>
                  <p><strong>Billing Questions:</strong> <a href="mailto:billing@screentimejourney.com">billing@screentimejourney.com</a></p>
                  <p><strong>Partnerships:</strong> <a href="mailto:partnerships@screentimejourney.com">partnerships@screentimejourney.com</a></p>
                </div>

                <div className="contact-method">
                  <h3>📞 Phone Support</h3>
                  <p><strong>Phone:</strong> <a href="tel:+31649232152">+31 6 49232152</a></p>
                  <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (CET)</p>
                  <p><strong>Emergency:</strong> Email support available 24/7</p>
                </div>

                <div className="contact-method">
                  <h3>📍 Physical Address</h3>
                  <address>
                    Screen Time Journey<br />
                    Linnaeusstraat 35F-14<br />
                    Amsterdam, Netherlands<br />
                    Postal Code: Available upon request
                  </address>
                </div>
              </div>
            </section>

            <section>
              <h2>Response Times</h2>
              <div className="response-times">
                <div className="response-item">
                  <h4>🕐 General Inquiries</h4>
                  <p>Within 24 hours</p>
                </div>
                <div className="response-item">
                  <h4>🛠️ Technical Support</h4>
                  <p>Within 12 hours</p>
                </div>
                <div className="response-item">
                  <h4>💳 Billing Issues</h4>
                  <p>Within 8 hours</p>
                </div>
                <div className="response-item">
                  <h4>🚨 Urgent Issues</h4>
                  <p>Within 4 hours</p>
                </div>
              </div>
            </section>

            <section>
              <h2>Social Media</h2>
              <p>Follow us for updates, tips, and community highlights:</p>
              <div className="social-links">
                <p><strong>Website:</strong> <a href="https://www.screentimejourney.com" target="_blank" rel="noopener noreferrer">www.screentimejourney.com</a></p>
                <p><strong>Support Portal:</strong> Available through your account dashboard</p>
              </div>
            </section>

            <section>
              <h2>Legal Notices</h2>
              <p>For legal matters, compliance issues, or formal notices:</p>
              <ul>
                <li><strong>Legal Email:</strong> <a href="mailto:legal@screentimejourney.com">legal@screentimejourney.com</a></li>
                <li><strong>GDPR Requests:</strong> <a href="mailto:privacy@screentimejourney.com">privacy@screentimejourney.com</a></li>
                <li><strong>Copyright Issues:</strong> <a href="mailto:copyright@screentimejourney.com">copyright@screentimejourney.com</a></li>
              </ul>
            </section>

            <section>
              <h2>Business Hours</h2>
              <div className="business-hours">
                <p><strong>Customer Support:</strong></p>
                <ul>
                  <li>Monday - Friday: 9:00 AM - 6:00 PM (CET)</li>
                  <li>Saturday: 10:00 AM - 4:00 PM (CET)</li>
                  <li>Sunday: Closed</li>
                  <li>Email support: Available 24/7</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>Accessibility</h2>
              <p>We are committed to making our services accessible to everyone. If you need assistance or have accessibility concerns:</p>
              <ul>
                <li>Email: <a href="mailto:accessibility@screentimejourney.com">accessibility@screentimejourney.com</a></li>
                <li>We will work with you to find solutions that meet your needs</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default ContactInformationPage;