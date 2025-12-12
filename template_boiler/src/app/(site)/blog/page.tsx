import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Common/Footer';

const BlogIndexPage = () => {
  const blogPosts = [
    {
      title: "Why Quitting Porn Is the Key to Digital Freedom",
      slug: "why-quitting-porn-is-the-key-to-digital-freedom",
      excerpt: "Discover the hidden connection between pornography addiction and digital overwhelm, and learn how breaking free from one leads to freedom from both.",
      date: "December 10, 2025",
      readTime: "5 min read"
    },
    {
      title: "The Dopamine Reset: How to Break Free from Digital Addiction",
      slug: "dopamine-reset-how-to-break-free",
      excerpt: "A comprehensive 30-day protocol to reset your brain's reward system and break free from the cycle of digital addiction.",
      date: "December 9, 2025",
      readTime: "8 min read"
    },
    {
      title: "From Screen Addiction to Freedom: A Complete Transformation Guide",
      slug: "from-screen-addiction-to-freedom",
      excerpt: "Your complete roadmap from recognizing screen addiction to achieving lasting digital freedom through proven frameworks.",
      date: "December 8, 2025",
      readTime: "10 min read"
    },
    {
      title: "10 Proven Strategies to Build Discipline and Break Digital Habits",
      slug: "10-proven-strategies-build-discipline",
      excerpt: "Discover the most effective strategies used by thousands to build unbreakable discipline and overcome digital distractions.",
      date: "December 7, 2025",
      readTime: "7 min read"
    },
    {
      title: "How to Take Control of Your Screen Time: A Practical Action Plan",
      slug: "how-to-take-control-screen-time",
      excerpt: "Step-by-step instructions to audit, limit, and optimize your screen time for better focus and life satisfaction.",
      date: "December 6, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Blog</h1>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#6b7280', 
              marginTop: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              Insights, strategies, and guides for your digital freedom journey
            </p>
          </div>
        </div>
      </div>
      
      <div className="policy-content-section">
        <div className="page-width">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug}
                style={{
                  marginBottom: '3rem',
                  padding: '2rem',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
                className="blog-post-card"
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '0.5rem'
                  }}>
                    {post.date} • {post.readTime}
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    fontFamily: 'DM Serif Display, serif',
                    color: '#111827'
                  }}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      style={{ 
                        textDecoration: 'none', 
                        color: 'inherit',
                        transition: 'color 0.3s ease'
                      }}
                      className="blog-post-link"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#2e0456',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'opacity 0.3s ease'
                    }}
                    className="read-more-link"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      style={{ width: '16px', height: '16px' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default BlogIndexPage;
