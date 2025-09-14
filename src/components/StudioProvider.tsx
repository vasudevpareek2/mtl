'use client';

import dynamic from 'next/dynamic';
import config from '../../sanity.config';

const Studio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { 
    ssr: false, 
    loading: () => <div>Loading Studio...</div> 
  }
);

export function StudioProvider() {
  return <Studio config={config} />;
}
