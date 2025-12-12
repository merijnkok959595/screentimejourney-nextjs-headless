import React from "react";
import Link from "next/link";

interface ImageWithTextProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  imageAlt?: string;
  layout?: "image_first" | "text_first";
  imageSize?: "small" | "medium" | "large";
  contentPosition?: "top" | "middle" | "bottom";
  className?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  title = "SCREEN TIME JOURNEY ©",
  subtitle = "About me",
  description = "I built Screen Time Journey to help you break free from endless scrolling, porn, reset your dopamine, and take back control of your focus + energy.",
  buttonText,
  buttonLink,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl = "https://cdn.shopify.com/s/files/1/0866/6749/3623/files/about-me-image.jpg?v=1757864303",
  imageAlt = "Screen Time Journey About Me",
  layout = "image_first",
  imageSize = "medium",
  contentPosition = "middle",
  className = "",
}) => {
  const gridClass = `image-with-text__grid grid grid--gapless grid--1-col grid--${imageSize === "medium" ? "2-col-tablet" : "3-col-tablet"}${layout === "text_first" ? " image-with-text__grid--reverse" : ""}`;

  return (
    <section className={`image-with-text-section ${className}`}>
      <div className="page-width">
        <div className={`image-with-text image-with-text--no-overlap`}>
          <div className={gridClass}>
            {/* Image Section */}
            <div className={`image-with-text__media-item image-with-text__media-item--${imageSize} image-with-text__media-item--${contentPosition} grid__item`}>
              <div className="image-with-text__media image-with-text__media--adapt global-media-settings media">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    objectPosition: "center",
                    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
                    borderRadius: "8px",
                    width: "100%",
                    height: "100%",
                    display: "block"
                  }}
                />
              </div>
            </div>
            
            {/* Text Content Section */}
            <div className="image-with-text__text-item grid__item">
              <div className={`image-with-text__content image-with-text__content--${contentPosition} image-with-text__content--adapt content-container`}
                   style={{ transform: 'translateY(-40px)' }}>
                <div className="image-with-text__text rte">
                  {title && (
                    <p className="image-with-text__title text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                      {title}
                    </p>
                  )}
                  
                  {subtitle && (
                    <h2 className="image-with-text__heading h2 mb-4 text-3xl font-bold text-gray-900">
                      {subtitle}
                    </h2>
                  )}
                  
                  {description && (
                    <p className="image-with-text__text mb-6 text-lg leading-relaxed text-gray-700">
                      {description}
                    </p>
                  )}
                  
                  {(primaryButtonText || secondaryButtonText || (buttonText && buttonLink)) && (
                    <div className="image-with-text__buttons">
                      {/* Primary Button */}
                      {primaryButtonText && primaryButtonLink && (
                        <Link 
                          href={primaryButtonLink}
                          className="button button--primary default"
                        >
                          <span>{primaryButtonText}</span>
                        </Link>
                      )}
                      
                      {/* Secondary Button */}
                      {secondaryButtonText && secondaryButtonLink && (
                        <Link 
                          href={secondaryButtonLink}
                          className="button button--secondary default"
                        >
                          <span>{secondaryButtonText}</span>
                        </Link>
                      )}
                      
                      {/* Legacy single button support */}
                      {buttonText && buttonLink && !primaryButtonText && (
                        <Link 
                          href={buttonLink}
                          className="btn-primary"
                        >
                          {buttonText}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;