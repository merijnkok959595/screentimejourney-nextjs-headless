import React from 'react';
import Footer from '../../../components/Common/Footer';

const JobOpportunitiesPage = () => {
  const currentOpenings = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / Amsterdam",
      type: "Full-time",
      description: "Help build the user interfaces that empower people to reclaim their digital freedom. Work with React, TypeScript, and modern web technologies."
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time",
      description: "Foster our growing community of digital wellness warriors. Create content, moderate discussions, and help build supportive connections."
    },
    {
      title: "Content Creator",
      department: "Marketing",
      location: "Remote",
      type: "Part-time / Contract",
      description: "Create compelling content that educates and inspires people on their journey to digital wellness. Blog posts, videos, social media, and more."
    }
  ];

  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Job Opportunities</h1>
            <p className="page-subtitle">Join our mission to help people reclaim their digital freedom</p>
          </div>
        </div>
      </div>
      
      <div className="jobs-content-section">
        <div className="page-width">
          <div className="jobs-intro">
            <h2>Work With Purpose</h2>
            <p>At Screen Time Journey, we're building more than just a product—we're building a movement. Every day, we help thousands of people break free from digital distractions and build more intentional relationships with technology.</p>
            <p>If you're passionate about making a positive impact in people's lives and want to be part of something meaningful, we'd love to hear from you.</p>
          </div>
          
          <div className="company-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-emoji">🎯</span>
                <h4>Purpose-Driven</h4>
                <p>Everything we do is focused on helping people live more intentionally</p>
              </div>
              <div className="value-item">
                <span className="value-emoji">🤝</span>
                <h4>Community First</h4>
                <p>We build with and for our community, listening to real needs</p>
              </div>
              <div className="value-item">
                <span className="value-emoji">🚀</span>
                <h4>Continuous Growth</h4>
                <p>We're always learning, improving, and pushing boundaries</p>
              </div>
              <div className="value-item">
                <span className="value-emoji">⚖️</span>
                <h4>Work-Life Balance</h4>
                <p>We practice what we preach about healthy digital habits</p>
              </div>
            </div>
          </div>
          
          <div className="current-openings">
            <h3>Current Openings</h3>
            {currentOpenings.length > 0 ? (
              <div className="jobs-list">
                {currentOpenings.map((job, index) => (
                  <div key={index} className="job-listing">
                    <div className="job-header">
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-meta">
                        <span className="job-department">{job.department}</span>
                        <span className="job-location">{job.location}</span>
                        <span className="job-type">{job.type}</span>
                      </div>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <a href={`mailto:info@screentimejourney.com?subject=Application for ${job.title}`} className="btn-secondary">
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-openings">
                <p>We don't have any open positions at the moment, but we're always interested in hearing from talented people who share our mission.</p>
                <p>Feel free to reach out and introduce yourself!</p>
              </div>
            )}
          </div>
          
          <div className="general-application">
            <h3>Don't see the right role?</h3>
            <p>We're always looking for passionate people who want to make a difference. If you think you'd be a great fit for our team, we'd love to hear from you.</p>
            <a href="mailto:info@screentimejourney.com?subject=General Application" className="btn-primary">
              Send us your info
            </a>
          </div>
          
          <div className="benefits">
            <h3>Why You'll Love Working Here</h3>
            <ul>
              <li>🏠 <strong>Remote-first culture</strong> with flexible working hours</li>
              <li>💰 <strong>Competitive salary</strong> and equity opportunities</li>
              <li>🌱 <strong>Professional development</strong> budget for learning and growth</li>
              <li>🏥 <strong>Health benefits</strong> including mental health support</li>
              <li>🏖️ <strong>Generous PTO</strong> and digital detox days</li>
              <li>🎯 <strong>Meaningful work</strong> that directly helps people improve their lives</li>
              <li>👥 <strong>Small team</strong> where your contributions make a big impact</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default JobOpportunitiesPage;