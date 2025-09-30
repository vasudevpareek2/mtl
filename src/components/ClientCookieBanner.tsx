'use client';

import dynamic from 'next/dynamic';

// This is a client component that will be rendered on the client side only
const CookieConsentBanner = dynamic(
  () => import('./CookieConsentBanner'),
  { 
    ssr: false,
    loading: () => null // Don't show anything while loading
  }
);

export default function ClientCookieBanner() {
  return <CookieConsentBanner />;
}
