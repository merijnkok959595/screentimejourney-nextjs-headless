"use client";
import React, { useEffect } from 'react';

const WatiWidget: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Clear any existing WATI instances
    const existingWidget = document.getElementById('whatsapp-chat-widget');
    if (existingWidget) {
      existingWidget.remove();
    }

    // Add the WATI script directly to document head
    const script = document.createElement('script');
    script.innerHTML = `
      var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?17273';
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = url;
      var options = {
        "enabled": true,
        "chatButtonSetting": {
          "backgroundColor": "#2E0456",
          "ctaText": "WhatsApp Us",
          "ctaTextColor": "#2E0456",
          "ctaBackgroundColor": "#2E0456",
          "borderRadius": "25",
          "marginLeft": "0",
          "marginRight": "20",
          "marginBottom": "20",
          "ctaIconWATI": false,
          "position": "right"
        },
        "brandSetting": {
          "brandName": "SCREENTIMEJOURNEY",
          "brandSubTitle": "undefined",
          "brandImg": "https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2_88201cb7-2b7e-4561-985b-63eac6448748.png?v=1758635920",
          "welcomeText": "Hi there!\\nHow can I help you?",
          "messageText": "Hello, %0A I have a question about {{page_link}}",
          "backgroundColor": "#2E0456",
          "ctaText": "WhatsApp Us",
          "ctaTextColor": "#0F172A",
          "borderRadius": "25",
          "autoShow": false,
          "phoneNumber": "31649232152"
        }
      };
      s.onload = function() { 
        CreateWhatsappChatWidget(options); 
        console.log('WATI Widget Loaded Successfully');
      };
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    `;
    document.head.appendChild(script);

    // Add custom CSS styles
    const style = document.createElement('style');
    style.innerHTML = `
      /* WATI Widget Custom Styles */
      #whatsapp-chat-widget > div.wa-chat-box.wa-chat-box-transition.wa-chat-box-visible > a {
        background-color: #2E0456 !important;
        margin-bottom: 20px;
      }
      
      .wa-chat-box-poweredby {
        display: none;
      }
      
      .wa-widget-send-button {
        background-color: #25D366 !important;
      }

      /* Hide text and close button on mobile */
      @media (max-width: 767px) {
        #whatsapp-chat-widget .wa-chat-bubble-text,
        #whatsapp-chat-widget .wa-chat-bubble-close-button {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default WatiWidget;



