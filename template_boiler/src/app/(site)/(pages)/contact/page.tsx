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
      <div style={{ padding: '60px 0 60px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '700', 
            color: '#111827',
            marginBottom: '0',
            fontFamily: 'DM Serif Display, serif'
          }}>
            Get In Touch
          </h1>
        </div>
      </div>
      
      {/* Contact Information Section - Using existing grey background pattern */}
      <div style={{ 
        padding: '40px 0 80px 0', 
        background: '#f9f9f9',
        minHeight: '200px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Contact Information */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #f3f4f6'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#111827',
                margin: '0',
                fontFamily: 'DM Serif Display, serif'
              }}>
                Contact Information
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              
              {/* Email */}
              <div style={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#111827', 
                    margin: '0',
                    fontFamily: 'DM Serif Display, serif'
                  }}>Email</h3>
                </div>
                <a 
                  href="mailto:info@screentimejourney.com"
                  style={{ 
                    color: '#111827', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem', 
                    fontWeight: '400',
                    wordBreak: 'break-all',
                    display: 'block',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  info@screentimejourney.com
                </a>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.9rem', 
                  margin: '8px 0 0 0', 
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  We typically respond within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div style={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#111827', 
                    margin: '0',
                    fontFamily: 'DM Serif Display, serif'
                  }}>Phone</h3>
                </div>
                <a 
                  href="tel:+31649232152"
                  style={{ 
                    color: '#111827', 
                    textDecoration: 'none', 
                    fontSize: '1.1rem', 
                    fontWeight: '400',
                    display: 'block',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  +31 6 49232152
                </a>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '0.9rem', 
                  margin: '8px 0 0 0', 
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Available Monday-Friday, 9AM-6PM CET
                </p>
              </div>

              {/* Address */}
              <div style={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#111827', 
                    margin: '0',
                    fontFamily: 'DM Serif Display, serif'
                  }}>Address</h3>
                </div>
                <p style={{ 
                  color: '#111827', 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  margin: '0', 
                  fontWeight: '400',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Linnaeusstraat 35F-14<br />
                  Amsterdam, Netherlands
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #f3f4f6'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#111827',
                margin: '0',
                fontFamily: 'DM Serif Display, serif'
              }}>
                Send us a Message
              </h2>
            </div>

            <div style={{
              background: '#ffffff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              padding: '32px'
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.9rem', 
                      fontWeight: '600', 
                      color: '#374151', 
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      First Name
                    </label>
                    <input 
                      type="text"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.9rem', 
                      fontWeight: '600', 
                      color: '#374151', 
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      Last Name
                    </label>
                    <input 
                      type="text"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '6px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Email
                  </label>
                  <input 
                    type="email"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '6px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Subject
                  </label>
                  <input 
                    type="text"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      boxSizing: 'border-box',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    color: '#374151', 
                    marginBottom: '6px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      fontFamily: 'Inter, sans-serif'
                    }}
                    placeholder="Tell us how we can help you on your digital wellness journey..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start', marginTop: '8px' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <Footer />
    </main>
  );
};

export default ContactPage;