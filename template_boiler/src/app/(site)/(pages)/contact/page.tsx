import React from 'react';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Screen Time Journey",
  description: "Get in touch with the Screen Time Journey team for support on your digital wellness journey.",
};

const ContactPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <div style={{ padding: '80px 0 60px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '700', 
            color: '#111827',
            marginBottom: '1.5rem',
            fontFamily: 'DM Serif Display, serif'
          }}>
            Get In Touch
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We're here to support you on your digital wellness journey. Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
      </div>

      <Separator />
      
      {/* Contact Information */}
      <div style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: '#111827',
                marginBottom: '2rem',
                fontFamily: 'DM Serif Display, serif'
              }}>
                Contact Information
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '1.5rem' }}>✉️</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Email
                    </h3>
                    <a 
                      href="mailto:info@screentimejourney.com" 
                      style={{ color: '#2e0456', textDecoration: 'none', fontSize: '1rem' }}
                    >
                      info@screentimejourney.com
                    </a>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '4px 0 0 0' }}>
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Phone
                    </h3>
                    <a 
                      href="tel:+31649232152" 
                      style={{ color: '#2e0456', textDecoration: 'none', fontSize: '1rem' }}
                    >
                      +31 6 49232152
                    </a>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '4px 0 0 0' }}>
                      Available Monday-Friday, 9AM-6PM CET
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                      Address
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
                      Linnaeusstraat 35F-14<br />
                      Amsterdam, Netherlands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: '#f9f9f9',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: '#111827',
                marginBottom: '2rem',
                fontFamily: 'DM Serif Display, serif'
              }}>
                Send us a Message
              </h2>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                      First Name
                    </label>
                    <input 
                      type="text"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                      Last Name
                    </label>
                    <input 
                      type="text"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Email
                  </label>
                  <input 
                    type="email"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Subject
                  </label>
                  <input 
                    type="text"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Tell us how we can help you on your digital wellness journey..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '16px 32px',
                    backgroundColor: '#2e0456',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Additional Support */}
      <div style={{ padding: '80px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '2rem',
            fontFamily: 'DM Serif Display, serif',
            color: '#111827'
          }}>
            Other Ways to Get Support
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>❓</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                FAQ
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '20px' }}>
                Find quick answers to common questions about Screen Time Journey.
              </p>
              <a 
                href="/faq"
                style={{ 
                  color: '#2e0456',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Browse FAQ →
              </a>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Community
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '20px' }}>
                Join thousands of others on their digital wellness journey.
              </p>
              <a 
                href="/leaderboard"
                style={{ 
                  color: '#2e0456',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Join Community →
              </a>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Get Started
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '20px' }}>
                Ready to begin your transformation? Start your journey today.
              </p>
              <a 
                href="/start-now"
                style={{ 
                  color: '#2e0456',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Start Journey →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;