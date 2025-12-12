import React from 'react';
import Footer from '../../../components/Common/Footer';

const JobOpportunitiesPage = () => {
  return (
    <main>
      <div className="page-header-section">
        <div className="page-width">
          <div className="page-header-content">
            <h1 className="page-title">Job Opportunities</h1>
          </div>
        </div>
      </div>
      
      <div className="jobs-content-section">
        <div className="page-width">
          <div className="jobs-content">
            <section>
              <h2>Wanna work here?</h2>
              <p>We're building a movement to help people reclaim their digital freedom. If you're passionate about making a positive impact and want to be part of something meaningful, we'd love to hear from you.</p>
              
              <div className="contact-form">
                <form>
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="position">Position of Interest</label>
                    <input type="text" id="position" name="position" placeholder="e.g., Developer, Designer, Marketing" />
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="message">Tell us about yourself</label>
                    <textarea id="message" name="message" rows={5} placeholder="What makes you excited about working with us?" required></textarea>
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="resume">Resume/CV Link</label>
                    <input type="url" id="resume" name="resume" placeholder="https://..." />
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    Send Application
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default JobOpportunitiesPage;




