import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const StickyStartButton = ({ 
  onGetStarted, 
  onSignUpFirst, 
  isVisible = true, 
  text = "Get Started Now",
  className = "" 
}) => {
  const { isAuthenticated } = useAuth();

  if (!isVisible) return null;

  const handleClick = () => {
    if (isAuthenticated) {
      // User is authenticated, go straight to payment
      onGetStarted();
    } else {
      // User needs to sign up first, then payment
      onSignUpFirst();
    }
  };

  return (
    <div 
      className={`sticky-start-button ${className}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        padding: '0 20px',
        maxWidth: '400px',
        width: 'calc(100% - 40px)'
      }}
    >
      <button
        onClick={handleClick}
        className="btn-primary"
        style={{
          width: '100%',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '50px',
          border: 'none',
          background: 'linear-gradient(135deg, var(--brand-primary) 0%, #7c3aed 100%)',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4), 0 4px 12px rgba(139, 92, 246, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse-glow 2s infinite',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.5), 0 6px 18px rgba(139, 92, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0px)';
          e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4), 0 4px 12px rgba(139, 92, 246, 0.3)';
        }}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>
          {text}
        </span>
        
        {/* Animated background effect */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.5s',
            zIndex: 0
          }}
          className="button-shine"
        />
      </button>
      
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4), 0 4px 12px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 8px 30px rgba(139, 92, 246, 0.6), 0 4px 15px rgba(139, 92, 246, 0.5);
          }
        }
        
        .btn-primary:hover .button-shine {
          left: 100%;
        }
        
        @media (max-width: 768px) {
          .sticky-start-button {
            bottom: 15px;
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default StickyStartButton;

