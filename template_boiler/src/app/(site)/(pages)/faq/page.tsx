import React from 'react';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Screen Time Journey?",
      answer: "Screen Time Journey is a comprehensive digital wellness program designed to help you break free from endless scrolling, reset your dopamine system, and build sustainable focus habits. Our milestone-based approach provides a clear path from digital addiction to digital freedom."
    },
    {
      question: "How does the milestone system work?",
      answer: "Our milestone system tracks your progress through meaningful stages of transformation. Starting from 'Ground Zero', you'll progress through levels like 'Fighter', 'Warrior', 'Guardian', and ultimately reach 'King' or 'Queen' status. Each milestone represents specific achievements and days of focused living."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. We take your privacy seriously. We never sell your data, and your journey is entirely private. You control what information you share with the community, and all personal tracking data remains secure and confidential."
    },
    {
      question: "Can I use this if I'm not tech-savvy?",
      answer: "Yes! Screen Time Journey is designed to be simple and accessible for everyone. Our intuitive interface and clear guidance make it easy for anyone to start their digital wellness journey, regardless of technical experience."
    },
    {
      question: "What makes this different from other digital wellness apps?",
      answer: "Unlike other apps that focus solely on blocking or time limits, Screen Time Journey addresses the root psychological causes of digital addiction. We combine dopamine reset protocols, community support, meaningful milestones, and practical tools for lasting change."
    },
    {
      question: "Do I need special equipment or software?",
      answer: "No special equipment needed! Screen Time Journey works with your existing devices. We provide guidance on built-in tools and recommend privacy-focused solutions that work across all major platforms (iOS, Android, Mac, PC)."
    },
    {
      question: "How long does it take to see results?",
      answer: "Many users report feeling more focused within the first week. Significant improvements in attention span and reduced urges typically occur within 2-4 weeks. Remember, this is a journey of continuous growth and improvement."
    },
    {
      question: "Can I compete with others on the leaderboard?",
      answer: "Yes! Our community leaderboard lets you see how you're progressing compared to others on similar journeys. This creates healthy accountability and motivation while maintaining privacy about your specific challenges."
    },
    {
      question: "What if I relapse or have setbacks?",
      answer: "Setbacks are part of the journey. Our system is designed to help you get back on track quickly. We provide specific protocols for handling relapses and maintaining long-term progress. The community is also there to support you."
    },
    {
      question: "Is there ongoing support after I start?",
      answer: "Yes! You'll have access to our community, regular updates to the program, and ongoing resources. Plus, the milestone system provides continuous motivation and clear next steps throughout your entire journey."
    }
  ];

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
            Frequently Asked Questions
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Find answers to common questions about Screen Time Journey and digital wellness.
          </p>
        </div>
      </div>

      <Separator />
      
      {/* FAQ Section */}
      <div style={{ padding: '80px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: '#f9f9f9',
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '16px',
                  lineHeight: '1.4'
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.7',
                  fontSize: '1rem',
                  margin: '0'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Still Have Questions Section */}
      <div style={{ padding: '80px 0', background: '#f9f9f9', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            fontFamily: 'DM Serif Display, serif',
            color: '#111827'
          }}>
            Still Have Questions?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            We're here to help you succeed on your digital wellness journey. Reach out to our team for personalized support.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/contact"
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
              Contact Us
            </a>
            <a 
              href="mailto:info@screentimejourney.com"
              style={{ 
                display: 'inline-block',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#2e0456',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.125rem',
                border: '2px solid #2e0456'
              }}
            >
              Email Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FAQPage;