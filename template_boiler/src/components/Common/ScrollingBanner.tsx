"use client";
import React, { useEffect, useRef } from "react";

interface ScrollingBannerItem {
  text: string;
  href?: string;
  isStroke?: boolean;
}

interface ScrollingBannerProps {
  items?: ScrollingBannerItem[];
  animationDuration?: number; // in seconds
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  backgroundColor?: string;
  textColor?: string;
  gap?: number; // spacing between items in px
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  items = [
    { text: "The average person spends 7+ hours daily on screens" },
    { text: "80% of phone checks are unconscious habits" }, 
    { text: "Social media triggers dopamine addiction" },
    { text: "Digital wellness starts with awareness" },
    { text: "Take control of your screen time" },
  ],
  animationDuration = 20,
  pauseOnHover = true,
  direction = "left",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  gap = 60,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current || !bannerRef.current) return;

    const list = listRef.current;
    const banner = bannerRef.current;
    
    // Always duplicate items for seamless infinite scroll
    const originalItems = Array.from(list.children);
    const duplicateCount = 4; // Always create 4 copies for smooth infinite loop
    
    // Clear the list and rebuild with duplicated items
    list.innerHTML = '';
    
    for (let cycle = 0; cycle < duplicateCount; cycle++) {
      originalItems.forEach((originalItem) => {
        const clonedItem = originalItem.cloneNode(true) as HTMLElement;
        
        // Set appropriate padding for seamless looping  
        clonedItem.style.paddingLeft = `${gap}px`;
        clonedItem.style.paddingRight = `${gap}px`;
        
        // Add aria-hidden to duplicated items for accessibility
        if (cycle > 0) {
          clonedItem.setAttribute('aria-hidden', 'true');
        }
        
        list.appendChild(clonedItem);
      });
    }

    // Calculate the width of one complete set of items
    const singleSetWidth = list.scrollWidth / duplicateCount;
    
    // Create dynamic CSS animation
    const sectionId = `scrolling-banner-${Date.now()}`;
    banner.id = sectionId;
    
    const animationDirection = direction === "right" ? "reverse" : "normal";
    const translateDistance = direction === "right" ? singleSetWidth : -singleSetWidth;
    
    const style = document.createElement('style');
    style.textContent = `
      #${sectionId} ul {
        animation-name: scrolling-banner-animation-${sectionId};
        animation-duration: ${animationDuration}s;
        animation-direction: ${animationDirection};
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      
      @keyframes scrolling-banner-animation-${sectionId} {
        0% { 
          transform: translateX(0); 
        }
        100% { 
          transform: translateX(${translateDistance}px); 
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [items, animationDuration, direction]);

  return (
    <div
      ref={bannerRef}
      className={`dbtfy-scrolling-banner overflow-hidden relative block ${pauseOnHover ? 'hover-pause' : ''}`}
      style={{
        backgroundColor,
        color: textColor,
        padding: '30px 0',
      }}
    >
      <ul
        ref={listRef}
        className="inline-flex items-center list-none m-0 p-0"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex-shrink-0 relative"
            style={{
              paddingLeft: `${gap}px`,
              paddingRight: `${gap}px`,
            }}
          >
{item.href ? (
              <a
                href={item.href}
                className="transition-all duration-200 ease-out hover:opacity-75 focus:opacity-75"
              >
                <div 
                  className={`banner-item ${item.isStroke ? 'text-stroke' : ''}`}
                >
                  {item.text}
                </div>
              </a>
            ) : (
              <div 
                className={`banner-item ${item.isStroke ? 'text-stroke' : ''}`}
              >
                {item.text}
              </div>
            )}
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        .hover-pause:hover ul {
          animation-play-state: paused;
        }
        
        .text-stroke {
          -webkit-text-stroke: 1px currentColor;
          -webkit-text-fill-color: transparent;
        }
        
        .banner-text {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        
        .banner-emoji {
          display: inline-block;
          margin-right: 12px;
          flex-shrink: 0;
        }
        
        .banner-text-content {
          display: inline-block;
          white-space: nowrap;
        }
        
        .banner-item {
          font-family: 'DM Serif Display', serif;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .banner-item {
            font-size: 18px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          ul {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;





