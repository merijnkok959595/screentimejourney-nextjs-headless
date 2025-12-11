import React from 'react';
import ImageWithText from '@/components/Common/ImageWithText';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const AboutMePage = () => {
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
            About Me
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            My personal journey from digital addiction to freedom, and why I built Screen Time Journey.
          </p>
        </div>
      </div>

      <Separator />
      
      {/* Main About Section */}
      <ImageWithText 
        title="SCREEN TIME JOURNEY ©"
        subtitle="My Story"
        description="I built Screen Time Journey to help you break free from endless scrolling, porn, reset your dopamine, and take back control of your focus + energy. After struggling with digital addiction for years, I discovered the path to true digital wellness and want to share it with you."
        imageUrl="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_founder_image.webp?v=1762952871"
        imageAlt="Screen Time Journey Founder"
        layout="image_first"
        imageSize="medium"
        contentPosition="middle"
      />

      <Separator />

      {/* Mission Section */}
      <div style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem', 
              fontWeight: '500', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              marginBottom: '0.5rem' 
            }}>
              SCREEN TIME JOURNEY ©
            </p>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#111827',
              marginBottom: '2rem',
              fontFamily: 'DM Serif Display, serif'
            }}>
              My Mission
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Break Digital Addiction
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Help you recognize and overcome the patterns that keep you trapped in endless scrolling and digital overwhelm.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🧠</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Reset Your Dopamine
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Restore your brain's natural reward system and rediscover the joy in simple, meaningful activities.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💪</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Build Real Focus
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Develop the deep focus and sustained attention that modern life demands, without digital distractions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* CTA Section */}
      <div style={{ padding: '80px 0', background: '#f9f9f9', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            fontFamily: 'DM Serif Display, serif',
            color: '#111827'
          }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Join thousands of others who have taken control of their digital habits and transformed their lives.
          </p>
          <a 
            href="https://www.screentimejourney.com/products/screentimejourney"
            className="btn-primary"
            style={{ 
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: '#2e0456',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.125rem'
            }}
          >
            Start Your Journey Today
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AboutMePage;