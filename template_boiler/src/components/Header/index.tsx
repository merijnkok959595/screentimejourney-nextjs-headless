"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerAnimate, setHeaderAnimate] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Initialize transparent state - start as true if on home page
  const [isTransparent, setIsTransparent] = useState(isHomePage);
  
  // Scroll detectie (Hero trigger) + Shopify header appear effect + Logo animation
  useEffect(() => {
    if (!isHomePage) {
      setIsTransparent(false);
      return;
    }

    let lastScrollTop = 0;
    let ticking = false;
    let lastLogoState = 'normal'; // Track logo state to avoid redundant animations

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const header = document.querySelector('.header');
          const logo = document.querySelector('.header-logo');
          
          // Transparent state
          const wasTransparent = isTransparent;
          const nowTransparent = scrollTop < 80;
          setIsTransparent(nowTransparent);
          
          // Scrolled state for header shrinking
          if (scrollTop > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
            setHeaderHidden(false);
            setHeaderAnimate(false);
            if (header) {
              header.classList.remove('shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
            }
          }

          // ===== LOGO ANIMATION LOGIC =====
          if (logo) {
            // Crossing the 80px threshold
            if (wasTransparent !== nowTransparent) {
              // Remove any existing animation classes
              logo.classList.remove('logo-animate-shrink', 'logo-animate-grow');
              
              // Force reflow to restart animation
              void logo.offsetWidth;
              
              if (scrollTop > lastScrollTop && scrollTop >= 80) {
                // Scrolling DOWN past 80px: Logo shrinks (big → normal)
                console.log('🔽 Animating logo SHRINK (big → normal)');
                logo.classList.add('logo-animate-shrink');
                lastLogoState = 'shrink';
              } else if (scrollTop < lastScrollTop && scrollTop < 80) {
                // Scrolling UP past 80px: Logo grows (small → normal)
                console.log('🔼 Animating logo GROW (small → normal)');
                logo.classList.add('logo-animate-grow');
                lastLogoState = 'grow';
              }
            }
          }

          // Shopify header appear effect (hide on scroll down, reveal on scroll up)
          if (header) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
              // Scrolling down - hide header
              header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
              header.classList.remove('animate');
              setHeaderHidden(true);
              setHeaderAnimate(false);
            } else if (scrollTop < lastScrollTop && scrollTop > 100) {
              // Scrolling up - reveal header
              header.classList.add('shopify-section-header-sticky', 'animate');
              header.classList.remove('shopify-section-header-hidden');
              setHeaderHidden(false);
              setHeaderAnimate(true);
            }
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // ✅ direct bij load correct
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isTransparent]); // Add isTransparent to dependencies

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.header-mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Logo switching handled entirely by CSS - no React state needed

  return (
    <header 
      className={`
        fixed left-0 w-full z-50 transition-transform duration-300 ease-in-out
        top-[42px]
        ${isTransparent && isHomePage ? "bg-transparent text-white header-transparent" : "bg-[#f9f9f9] text-[#0F172A]"}
        ${scrolled ? "scrolled" : ""}
        ${headerHidden ? "shopify-section-header-hidden -translate-y-full" : ""}
        ${headerAnimate ? "animate translate-y-0" : ""}
      `}
    >
      <div className="header-inner">
        {/* Mobile hamburger menu (Grid Column 1) */}
        <div className="header-mobile-menu">
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={`icon icon-hamburger ${isTransparent && isHomePage ? 'text-white' : 'text-[#2E0456]'}`} viewBox="0 0 18 16">
                <path fill="currentColor" d="M1 .5a.5.5 0 1 0 0 1h15.71a.5.5 0 0 0 0-1zM.5 8a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1A.5.5 0 0 1 .5 8m0 7a.5.5 0 0 1 .5-.5h15.71a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={`icon icon-close ${isTransparent && isHomePage ? 'text-white' : 'text-[#2E0456]'}`} viewBox="0 0 18 17">
                <path fill="currentColor" d="M.865 15.978a.5.5 0 0 0 .707.707l7.433-7.431 7.579 7.282a.501.501 0 0 0 .846-.37.5.5 0 0 0-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 1 0-.707-.708L8.991 7.853 1.413.573a.5.5 0 1 0-.693.72l7.563 7.268z"></path>
              </svg>
            )}
          </button>
          
          <div className={`mobile-menu-dropdown ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-nav">
              <Link 
                className="mobile-menu-item" 
                href="https://www.screentimejourney.com/pages/about-me" 
                target="_self" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                className="mobile-menu-item" 
                href="https://www.screentimejourney.com/products/screentimejourney" 
                target="_self" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Now
              </Link>
              <Link 
                className="mobile-menu-item" 
                href="https://www.screentimejourney.com/pages/milestones" 
                target="_self" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Milestones
              </Link>
              <Link 
                className="mobile-menu-item" 
                href="https://www.screentimejourney.com/pages/leaderboard" 
                target="_self" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
            </div>
            <div className="mobile-menu-actions">
              <Link 
                className="btn-primary" 
                href="https://www.screentimejourney.com" 
                target="_self" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </div>
          </div>
        </div>

        {/* Logo (Grid Column 2 - CENTERED) */}
        <Link className="header-logo" href="https://www.screentimejourney.com" target="_self" rel="noopener noreferrer">
          {/* Dark logo */}
          <img
            src="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_png.png?v=1757864303"
            alt="Screen Time Journey Logo"
            className="logo-dark"
          />
          
          {/* Inverted logo */}
          <img
            src="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_inverted_yellow.png?v=1757864433"
            alt="Screen Time Journey Logo"
            className="logo-inverted"
          />
        </Link>
        
        {/* Desktop Navigation + Actions (Grid Column 3) */}
        <div className="header-desktop-wrapper">
          {/* Desktop Navigation Links */}
          <nav className="header-nav">
            <Link 
              href="https://www.screentimejourney.com/pages/about-me" 
              target="_self" 
              rel="noopener noreferrer"
              className={isTransparent && isHomePage ? 'text-white' : 'text-[#0F172A]'}
            >
              About Me
            </Link>
            <Link 
              href="https://www.screentimejourney.com/products/screentimejourney" 
              target="_self" 
              rel="noopener noreferrer"
              className={isTransparent && isHomePage ? 'text-white' : 'text-[#0F172A]'}
            >
              Start Now
            </Link>
            <Link 
              href="https://www.screentimejourney.com/pages/milestones" 
              target="_self" 
              rel="noopener noreferrer"
              className={isTransparent && isHomePage ? 'text-white' : 'text-[#0F172A]'}
            >
              Milestones
            </Link>
            <Link 
              href="https://www.screentimejourney.com/pages/leaderboard" 
              target="_self" 
              rel="noopener noreferrer"
              className={isTransparent && isHomePage ? 'text-white' : 'text-[#0F172A]'}
            >
              Leaderboard
            </Link>
          </nav>

          {/* Desktop actions */}
          <div className="header-actions">
            <div className="header-buttons-desktop">
              <Link 
                className={`btn-outline-primary ${isTransparent && isHomePage ? 'btn-inverted-primary' : ''}`}
                href="https://www.screentimejourney.com" 
                target="_self" 
                rel="noopener noreferrer"
              >
                Home
              </Link>
              <button 
                className={`btn-outline-secondary ${isTransparent && isHomePage ? 'btn-inverted-secondary' : ''}`}
                onClick={() => {
                  window.location.href = 'https://xpvznx-9w.myshopify.com/account/logout?return_url=/';
                }}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
