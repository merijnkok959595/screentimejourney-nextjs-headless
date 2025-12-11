import React from 'react';
import Leaderboard from '@/components/Common/Leaderboard';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const LeaderboardPage = () => {
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
            Community Leaderboard
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Join thousands of warriors on their journey to digital freedom. See where you stand and get inspired by the community.
          </p>
        </div>
      </div>

      <Separator />
      
      {/* Stats Section */}
      <div style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2e0456', marginBottom: '8px' }}>
                2,847
              </div>
              <div style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>
                Active Warriors
              </div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2e0456', marginBottom: '8px' }}>
                156,234
              </div>
              <div style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>
                Days in Focus
              </div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2e0456', marginBottom: '8px' }}>
                89%
              </div>
              <div style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>
                Success Rate
              </div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#2e0456', marginBottom: '8px' }}>
                42
              </div>
              <div style={{ fontSize: '1rem', color: '#6b7280', fontWeight: '500' }}>
                Kings & Queens
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />
      
      {/* Leaderboard Section Header */}
      <div className="section-header">
        <div className="page-width">
          <div className="section-header-content">
            <p className="section-badge">SCREEN TIME JOURNEY ©</p>
            <h2 className="section-title">The Leaderboard</h2>
          </div>
        </div>
      </div>

      {/* Full Leaderboard Component */}
      <Leaderboard 
        title="Journey Leaderboard"
        subtitle="Top performers on their Screen Time Journey"
        maleLabel="Men"
        femaleLabel="Women"
      />
      
      <Separator />

      {/* About Leaderboard Section */}
      <div style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#111827',
              marginBottom: '2rem',
              fontFamily: 'DM Serif Display, serif'
            }}>
              Why Join the Leaderboard?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏆</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Community Support
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Connect with like-minded individuals who understand your journey. Get inspired by others' success stories.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Stay Accountable
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Public progress tracking helps you stay committed to your goals and maintain consistency in your journey.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔥</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Healthy Competition
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Channel your competitive spirit into positive change. See how you rank among your peers and strive for improvement.
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
            Ready to Climb the Leaderboard?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Join our community of digital warriors and start building your streak today. Your future self will thank you.
          </p>
          <a 
            href="https://www.screentimejourney.com/products/screentimejourney"
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
            Join the Community
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default LeaderboardPage;