import React from 'react';
import Footer from '@/components/Common/Footer';

const BlogPost2 = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">The Dopamine Reset: How to Break Free from Digital Addiction</h1>
            <p className="policy-date">Published: December 9, 2025</p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div className="policy-content">
            <section>
              <h2>Understanding Dopamine</h2>
              <p>Dopamine is your brain's "reward chemical" that drives motivation and pleasure-seeking behavior. Modern technology exploits this system, creating artificial highs that make normal activities feel boring and unrewarding.</p>
            </section>

            <section>
              <h2>Signs You Need a Dopamine Reset</h2>
              <ul>
                <li>Constantly reaching for your phone without thinking</li>
                <li>Feeling bored or restless without digital stimulation</li>
                <li>Difficulty focusing on books, conversations, or work</li>
                <li>Loss of interest in hobbies you used to enjoy</li>
                <li>Feeling anxious when away from devices</li>
              </ul>
            </section>

            <section>
              <h2>The 30-Day Dopamine Reset Protocol</h2>
              <h3>Week 1: Digital Detox Foundation</h3>
              <ul>
                <li>Remove social media apps from your phone</li>
                <li>Set specific times for checking email</li>
                <li>Use airplane mode during meals and sleep</li>
                <li>Replace scrolling with walking or reading</li>
              </ul>

              <h3>Week 2: Rebuilding Natural Rewards</h3>
              <ul>
                <li>Engage in physical exercise daily</li>
                <li>Practice mindfulness or meditation</li>
                <li>Reconnect with nature and real-world activities</li>
                <li>Have device-free conversations with loved ones</li>
              </ul>

              <h3>Week 3-4: Establishing New Patterns</h3>
              <ul>
                <li>Create structured daily routines</li>
                <li>Set meaningful goals and work toward them</li>
                <li>Practice delayed gratification exercises</li>
                <li>Build habits that provide natural dopamine</li>
              </ul>
            </section>

            <section>
              <h2>Long-term Success</h2>
              <p>A successful dopamine reset isn't just about restriction—it's about rediscovering what truly matters to you and building a life that doesn't depend on digital stimulation for happiness.</p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default BlogPost2;