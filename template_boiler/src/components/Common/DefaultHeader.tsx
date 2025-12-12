"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const DefaultHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink header on scroll (Screen Time Journey method)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.default-header');
      const announcementBar = document.querySelector('.announcement-bar');
      
      if (header && announcementBar) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
          announcementBar.classList.add('scrolled');
          setIsScrolled(true);
        } else {
          header.classList.remove('scrolled');
          announcementBar.classList.remove('scrolled');
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="default-header header">
      <div className="header-inner">
        {/* Logo */}
        <Link className="header-logo" href="/">
          <img 
            src="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_trimmed_png.png?v=1757864303" 
            alt="Screen Time Journey Logo"
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className="header-nav">
          <Link href="/about-me">About Me</Link>
          <Link href="/product/screentimejourney">Start Now</Link>
          <Link href="/milestones">Milestones</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="header-actions">
          <div className="header-buttons-desktop">
            <Link className="btn-outline-primary" href="/">Home</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;