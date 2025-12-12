import React from 'react';
import Link from 'next/link';
import Leaderboard from '@/components/Common/Leaderboard';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const LeaderboardPage = () => {
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
            Leaderboard
          </h1>
        </div>
      </div>

      {/* Full Leaderboard Component */}
      <Leaderboard 
        title="Journey Leaderboard"
        subtitle="Top performers on their Screen Time Journey"
        maleLabel="Men"
        femaleLabel="Women"
      />

      <Footer />
    </main>
  );
};

export default LeaderboardPage;