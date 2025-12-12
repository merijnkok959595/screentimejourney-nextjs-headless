"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageMobileUrl?: string;
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title = "Quit Porn, Stop Doomscrolling",
  subtitle,
  ctaText = "Start now",
  ctaLink = "/product/screentimejourney",
  imageUrl = "https://cdn.shopify.com/s/files/1/0866/6749/3623/files/Untitled-20250823-050134-2733-4x-2.webp?v=1762880326",
  imageMobileUrl,
  overlayOpacity = 0.3,
}) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure hero section is properly identified
    if (heroRef.current) {
      heroRef.current.classList.add('hero-section');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section dbtfy-image-banner dbtfy-image-bannner__height--medium dbtfy-image-bannner__mobile-height--medium"
    >
      <div className="dbtfy-image-block">
        {/* Desktop Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="dbtfy-image-banner__image--desktop"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            onError={(e) => {
              console.error('Hero image failed to load:', imageUrl);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
        {/* Mobile Image */}
        {imageMobileUrl ? (
          <img
            src={imageMobileUrl}
            alt={title}
            className="dbtfy-image-banner__image--mobile show-on--mobile-only"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          />
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="dbtfy-image-banner__image--mobile show-on--mobile-only"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          />
        ) : null}
      </div>
      
      {/* Content */}
      <div className="dbtfy-image-content dbtfy-image-content__desktop--middle-center dbtfy-image-content__mobile--middle-center">
        <div className="banner__box content-container content-container--full-width-mobile">
          {title && (
            <h1 className="hero-title title inline-richtext text-center">
              Quit Porn,<br /><span style={{ whiteSpace: 'nowrap' }}>Stop Doomscrolling</span>
            </h1>
          )}
          {subtitle && (
            <p className="hero-subtitle text-center">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="hero-cta dbtfy-button--block justify-content-center">
              <Link href={ctaLink} className="btn-primary hero-cta-button">
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
