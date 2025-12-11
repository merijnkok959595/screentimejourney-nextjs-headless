"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DefaultHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header shrinking
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.default-header');
      
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
          setIsScrolled(true);
        } else {
          header.classList.remove('scrolled');
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="default-header header">
      <div className="header-inner">
        {/* Logo */}
        <Link className="header-logo" href="https://www.screentimejourney.com" target="_self" rel="noopener noreferrer">
          <img 
            src="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_trimmed_png.png?v=1757864303" 
            alt="Screen Time Journey Logo"
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className="header-nav">
          <a href="https://www.screentimejourney.com/pages/about-me" target="_self" rel="noopener noreferrer">About Me</a>
          <a href="https://www.screentimejourney.com/products/screentimejourney" target="_self" rel="noopener noreferrer">Start Now</a>
          <a href="https://www.screentimejourney.com/pages/milestones" target="_self" rel="noopener noreferrer">Milestones</a>
          <a href="https://www.screentimejourney.com/pages/leaderboard" target="_self" rel="noopener noreferrer">Leaderboard</a>
        </nav>
        
        {/* Action Buttons */}
        <div className="header-actions">
          <div className="header-buttons-desktop">
            <a className="btn-outline-primary" href="https://www.screentimejourney.com" target="_self" rel="noopener noreferrer">Home</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;