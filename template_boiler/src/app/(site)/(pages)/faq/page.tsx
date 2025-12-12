"use client";

import React, { useState } from 'react';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      questions: [
        {
          question: "What is Screen Time Journey?",
          answer: "Screen Time Journey is a comprehensive digital wellness program designed to help you break free from endless scrolling, reset your dopamine system, and build sustainable focus habits. Our milestone-based approach provides a clear path from digital addiction to digital freedom."
        },
        {
          question: "How do I get started?",
          answer: "Simply sign up for an account and begin your journey at Ground Zero. We'll guide you through setting up your goals and understanding the milestone system."
        },
        {
          question: "Can I use this if I'm not tech-savvy?",
          answer: "Yes! Screen Time Journey is designed to be simple and accessible for everyone. Our intuitive interface and clear guidance make it easy for anyone to start their digital wellness journey, regardless of technical experience."
        }
      ]
    },
    {
      category: "How It Works",
      icon: "⚙️",
      questions: [
        {
          question: "How does the milestone system work?",
          answer: "Our milestone system tracks your progress through meaningful stages of transformation. Starting from 'Ground Zero', you'll progress through levels like 'Fighter', 'Warrior', 'Guardian', and ultimately reach 'King' or 'Queen' status. Each milestone represents specific achievements and days of focused living."
        },
        {
          question: "What makes this different from other digital wellness apps?",
          answer: "Unlike other apps that focus solely on blocking or time limits, Screen Time Journey addresses the root psychological causes of digital addiction. We combine dopamine reset protocols, community support, meaningful milestones, and practical tools for lasting change."
        },
        {
          question: "How long does it take to see results?",
          answer: "Many users report feeling more focused within the first week. Significant improvements in attention span and reduced urges typically occur within 2-4 weeks. Remember, this is a journey of continuous growth and improvement."
        }
      ]
    },
    {
      category: "Privacy & Security",
      icon: "🔒",
      questions: [
        {
          question: "Is my data private and secure?",
          answer: "Absolutely. We take your privacy seriously. We never sell your data, and your journey is entirely private. You control what information you share with the community, and all personal tracking data remains secure and confidential."
        },
        {
          question: "Do I need special equipment or software?",
          answer: "No special equipment needed! Screen Time Journey works with your existing devices. We provide guidance on built-in tools and recommend privacy-focused solutions that work across all major platforms (iOS, Android, Mac, PC)."
        }
      ]
    },
    {
      category: "Community & Support",
      icon: "👥",
      questions: [
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
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const globalIndex = categoryIndex * 100 + questionIndex;
    setOpenQuestion(openQuestion === globalIndex ? null : globalIndex);
  };

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
            FAQ
          </h1>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div style={{ padding: '40px 0 80px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '48px' }}>
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px',
                paddingBottom: '12px',
                borderBottom: '2px solid #f3f4f6'
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '12px' }}>
                  {category.icon}
                </span>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#111827',
                  margin: '0',
                  fontFamily: 'DM Serif Display, serif'
                }}>
                  {category.category}
                </h2>
              </div>

              {/* Questions in Category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openQuestion === globalIndex;
                  
                  return (
                    <div key={questionIndex} style={{
                      background: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    }}>
                      {/* Question Button */}
                      <button 
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        style={{
                          width: '100%',
                          padding: '20px 24px',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#111827',
                          transition: 'background-color 0.2s ease',
                          fontFamily: 'DM Serif Display, serif'
                        }}
                        onMouseOver={(e) => {
                          const target = e.target as HTMLButtonElement;
                          target.style.backgroundColor = '#f9fafb';
                        }}
                        onMouseOut={(e) => {
                          const target = e.target as HTMLButtonElement;
                          target.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span>{faq.question}</span>
                        <span style={{
                          fontSize: '1.5rem',
                          color: '#6b7280',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          lineHeight: '1'
                        }}>
                          +
                        </span>
                      </button>

                      {/* Answer Dropdown */}
                      {isOpen && (
                        <div style={{
                          padding: '0 24px 24px 24px',
                          borderTop: '1px solid #f3f4f6',
                          backgroundColor: '#ffffff'
                        }}>
                          <p style={{
                            color: '#6b7280',
                            lineHeight: '1.7',
                            fontSize: '1rem',
                            margin: '16px 0 0 0',
                            fontFamily: 'Inter, sans-serif'
                          }}>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <Footer />
    </main>
  );
};

export default FAQPage;