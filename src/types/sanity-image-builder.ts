import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import type { ImageUrlBuilder } from './sanity';

// Define the shape of the Sanity image builder
export interface SanityImageBuilder extends Omit<ImageUrlBuilder, 'format'> {
  url: () => string | null;
  width: (width: number) => SanityImageBuilder;
  height: (height: number) => SanityImageBuilder;
  fit: (fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min') => SanityImageBuilder;
  quality: (q: number) => SanityImageBuilder;
  crop: (value: string) => SanityImageBuilder;
  auto: (format: string) => SanityImageBuilder;
  format: (format: string) => SanityImageBuilder;
}

// Extend the Window interface to include the image builder
declare global {
  interface Window {
    sanityImageBuilder?: (source: SanityImageSource) => SanityImageBuilder;
  }
}
