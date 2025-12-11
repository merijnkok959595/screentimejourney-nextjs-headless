import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Logo and Contact Column */}
        <div className="footer-column footer-logo-column">
          <Link href="https://www.screentimejourney.com" target="_self" rel="noopener noreferrer">
            <img 
              src="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_footer_v2.png?v=1757876933" 
              alt="Screen Time Journey Logo" 
              className="footer-logo"
            />
          </Link>
          <div className="footer-contact">
            <a href="mailto:info@screentimejourney.com" className="footer-contact-link">info@screentimejourney.com</a>
            <a href="tel:+31649232152" className="footer-contact-link">+31 6 49232152</a>
            <div className="footer-address">Linnaeusstraat 35F-14, Amsterdam, Netherlands</div>
          </div>
        </div>

        {/* About Menu Column */}
        <div className="footer-column">
          <h4 className="footer-title">About</h4>
          <div className="footer-links">
            <a className="footer-link" href="https://www.screentimejourney.com/pages/faq">FAQ</a>
            <a className="footer-link" href="https://www.screentimejourney.com/pages/contact">Contact</a>
            <a className="footer-link" href="https://www.screentimejourney.com/pages/about-me">About Me</a>
            <a className="footer-link" href="https://www.screentimejourney.com/pages/milestones">Milestones</a>
            <a className="footer-link" href="https://www.screentimejourney.com/pages/leaderboard">Leaderboard</a>
            <a className="footer-link" href="https://www.screentimejourney.com/pages/job-opportunities">Job Opportunities</a>
          </div>
        </div>

        {/* Blog Posts Menu Column */}
        <div className="footer-column">
          <h4 className="footer-title">Blog Posts</h4>
          <div className="footer-links">
            <a className="footer-link" href="https://www.screentimejourney.com/blogs/screentime-journey/why-quitting-porn-is-the-first-step-to-beating-screen-addiction">Why Quitting Porn Is the ...</a>
            <a className="footer-link" href="https://www.screentimejourney.com/blogs/screentime-journey/the-dopamine-reset-how-to-break-free-from-endless-scrolling">The Dopamine Reset: How to Break ...</a>
            <a className="footer-link" href="https://www.screentimejourney.com/blogs/screentime-journey/from-screen-addiction-to-freedom-my-screen-time-journey">From Screen Addiction to Freedom ...</a>
            <a className="footer-link" href="https://www.screentimejourney.com/blogs/screentime-journey/10-proven-strategies-to-build-discipline-and-reduce-screen-time">10 Proven Strategies to Build Discipline ...</a>
            <a className="footer-link" href="https://www.screentimejourney.com/blogs/screentime-journey/how-to-take-control-of-your-screen-time-a-complete-step-by-step-guide">How to Take Control of Your Screen Time ...</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Policies */}
      <div className="container footer-bottom">
        <div className="footer-policies">
          <span>2025, SCREENTIMEJOURNEY ©</span>
          <div className="footer-policy-links">
            <a href="https://www.screentimejourney.com/policies/privacy-policy" className="footer-policy-link">Privacy policy</a>
            <a href="https://www.screentimejourney.com/policies/terms-of-service" className="footer-policy-link">Terms of service</a>
            <a href="https://www.screentimejourney.com/policies/refund-policy" className="footer-policy-link">Refund policy</a>
            <a href="https://www.screentimejourney.com/policies/shipping-policy" className="footer-policy-link">Shipping policy</a>
            <a href="https://www.screentimejourney.com/policies/contact-information" className="footer-policy-link">Contact information</a>
            <a href="https://www.screentimejourney.com/policies/#shopifyReshowConsentBanner" className="footer-policy-link">Cookie preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;