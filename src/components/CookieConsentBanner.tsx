'use client';

import { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="modern-tech-lap-cookie-consent"
      style={{ 
        background: '#0a0a1a',
        color: '#ffffff',
        padding: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '14px',
        zIndex: '9999'
      }}
      buttonStyle={{
        background: '#00f0ff',
        color: '#0a0a1a',
        fontSize: '14px',
        padding: '8px 20px',
        borderRadius: '6px',
        fontWeight: '600',
        margin: '0 10px'
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        fontSize: '14px',
        padding: '8px 20px',
        borderRadius: '6px',
        fontWeight: '500',
        margin: '0 10px'
      }}
      enableDeclineButton
      expires={365}
      onAccept={() => {
        // Add your analytics or other cookie-related code here
        console.log('User accepted cookies');
      }}
      onDecline={() => {
        // Handle decline if needed
        console.log('User declined cookies');
      }}
    >
      We use cookies to enhance your experience, analyze site traffic, and serve tailored content. By continuing to use our site, you consent to our use of cookies in accordance with our{' '}
      <a 
        href="/privacy-policy" 
        style={{ 
          color: '#00f0ff',
          textDecoration: 'underline',
          marginLeft: '4px'
        }}
      >
        Privacy Policy
      </a>.
    </CookieConsent>
  );
}
