import React from 'react';
import ImageWithText from '@/components/Common/ImageWithText';
import Separator from '@/components/Common/Separator';
import Footer from '@/components/Common/Footer';

const AboutMePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <div style={{ padding: '80px 0 80px 0', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '700', 
            color: '#111827',
            marginBottom: '0',
            fontFamily: 'DM Serif Display, serif'
          }}>
            About Me
          </h1>
        </div>
      </div>
      
      {/* Main About Section */}
      <ImageWithText 
        subtitle="My Story"
        description="I built Screen Time Journey to help you break free from endless scrolling, porn, reset your dopamine, and take back control of your focus + energy. After struggling with digital addiction for years, I discovered the path to true digital wellness and want to share it with you."
        imageUrl="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_founder_image.webp?v=1762952871"
        imageAlt="Screen Time Journey Founder"
        layout="image_first"
        imageSize="medium"
        contentPosition="middle"
      />

      <Separator />

      {/* Second Image with Text Section - Image on right */}
      <ImageWithText 
        subtitle="Breaking Free"
        description="After years of endless scrolling and digital overwhelm, I discovered the key to lasting freedom. Through proven techniques and mindful awareness, you can reclaim your focus and energy for what truly matters."
        imageUrl="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/Screenshot_2025-09-08_at_12.40.56.png?v=1757328080"
        imageAlt="Breaking Free from Digital Addiction"
        layout="text_first"
        imageSize="medium"
        contentPosition="middle"
      />

      <Separator />

      {/* Third Image with Text Section - With Start Now Button */}
      <ImageWithText 
        subtitle="Take Action Today"
        description="Don't let another day pass trapped in endless scrolling and digital overwhelm. Join thousands who have transformed their lives with Screen Time Journey."
        primaryButtonText="Start Now"
        primaryButtonLink="/product/screentimejourney"
        imageUrl="https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2.png?v=1757864301"
        imageAlt="Take Action Today"
        layout="image_first"
        imageSize="medium"
        contentPosition="middle"
      />

      <Separator />

      <Footer />
    </main>
  );
};

export default AboutMePage;