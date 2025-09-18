import type { PortableTextBlock } from '@portabletext/types';

// Sanity Image Type
export interface SanityImage {
  _type: 'image';
  _key?: string;
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
  alt?: string;
  caption?: string;
  crop?: {
    _type: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
  [key: string]: unknown; // Allow additional properties
}

// Category Type
export interface Category {
  _id: string;
  title: string;
  slug: string;
  [key: string]: unknown; // Allow additional properties
}

// Author Type
export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: SanityImage;
  bio?: PortableTextBlock[]; // PortableText content
  [key: string]: unknown; // Allow additional properties
}

// Blog Post Type
export interface BlogPost {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
  _type: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: SanityImage;
  publishedAt: string;
  categories?: Category[];
  author?: Author;
  body?: PortableTextBlock[]; // PortableText content
  [key: string]: unknown; // Allow additional properties
}

// Query Result Types
export interface BlogPostQueryResult {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: SanityImage;
  publishedAt: string;
  categories?: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
  author?: {
    name: string;
    bio?: PortableTextBlock[];
    image?: SanityImage;
  };
  body?: PortableTextBlock[];
}

// Image URL Builder
type FitMode = 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
type ImageFormat = 'jpg' | 'png' | 'webp' | 'avif';

export interface ImageUrlBuilder {
  url: () => string | null;
  width: (width: number) => ImageUrlBuilder;
  height: (height: number) => ImageUrlBuilder;
  fit: (fit: FitMode) => ImageUrlBuilder;
  quality: (q: number) => ImageUrlBuilder;
  crop: (value: string) => ImageUrlBuilder;
  auto: (format: string) => ImageUrlBuilder;
  format: (format: ImageFormat) => ImageUrlBuilder;
}
