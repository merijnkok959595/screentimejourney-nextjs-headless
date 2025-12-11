import React from 'react';
import Milestones from '@/components/Common/Milestones';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const MilestonesPage = () => {
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
            Journey Milestones
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Track your progress through meaningful stages of digital transformation and personal growth.
          </p>
        </div>
      </div>

      <Separator />
      
      {/* Milestones Section Header */}
      <div className="section-header">
        <div className="page-width">
          <div className="section-header-content">
            <p className="section-badge">SCREEN TIME JOURNEY ©</p>
            <h2 className="section-title">The Milestones</h2>
          </div>
        </div>
      </div>

      {/* Full Milestones Component */}
      <Milestones 
        maleLabel="Men's Journey"
        femaleLabel="Women's Journey"
      />
      
      <Separator />

      {/* About Milestones Section */}
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
              How Milestones Work
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Track Your Progress
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Each milestone represents a significant achievement in your journey to digital freedom. See exactly where you are and what comes next.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Stay Motivated
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                Visual representations and meaningful descriptions help you stay focused on your goals and celebrate every victory along the way.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👑</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Reach Your Potential
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.7' }}>
                From Ground Zero to King/Queen level, each milestone brings you closer to complete mastery over your digital habits.
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
            Ready to Reach Your First Milestone?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Every king was once a beginner. Start your journey today and take the first step towards digital freedom.
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
            Begin Your Journey
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default MilestonesPage;