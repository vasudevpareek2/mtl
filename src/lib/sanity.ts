import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { projectId, dataset, apiVersion } from '../sanity/env';
import type { BlogPost } from '@/types/sanity';

// Define the shape of the image builder methods
type ImageBuilderMethods = {
  url: () => string;
  width: (width: number) => ImageBuilderMethods;
  height: (height: number) => ImageBuilderMethods;
  fit: (fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min') => ImageBuilderMethods;
  quality: (q: number) => ImageBuilderMethods;
  crop: (value: string) => ImageBuilderMethods;
  auto: (format: string) => ImageBuilderMethods;
  format: (format: 'jpg' | 'png' | 'webp' | 'avif') => ImageBuilderMethods;
};

// Define our own ImageUrlBuilder interface
export interface ImageUrlBuilder {
  url: () => string | null;
  width: (width: number) => ImageUrlBuilder;
  height: (height: number) => ImageUrlBuilder;
  fit: (fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min') => ImageUrlBuilder;
  quality: (q: number) => ImageUrlBuilder;
  crop: (value: string) => ImageUrlBuilder;
  auto: (format: string) => ImageUrlBuilder;
  format: (format: 'jpg' | 'png' | 'webp' | 'avif') => ImageUrlBuilder;
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to `false` to bypass the edge cache
  token: process.env.SANITY_API_TOKEN, // only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

// Create a simple wrapper around the image builder
export function urlFor(source: SanityImageSource | null | undefined): ImageUrlBuilder {
  if (!source) {
    return createEmptyBuilder();
  }

  // Create the image URL builder with proper typing
  const img = builder.image(source) as unknown as ImageBuilderMethods;
  
  // Create a simple wrapper that implements the ImageUrlBuilder interface
  const wrapper: ImageUrlBuilder = {
    url: () => {
      try {
        const url = img.url();
        return url || null;
      } catch (error) {
        console.error('Error building image URL:', error);
        return null;
      }
    },
    width: (width: number) => createWrapperForImage(img.width(width)),
    height: (height: number) => createWrapperForImage(img.height(height)),
    fit: (fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min') => 
      createWrapperForImage(img.fit(fit)),
    quality: (q: number) => createWrapperForImage(img.quality(q)),
    crop: (value: string) => createWrapperForImage(img.crop(value)),
    auto: (format: string) => createWrapperForImage(img.auto(format)),
    format: (format: 'jpg' | 'png' | 'webp' | 'avif') => 
      createWrapperForImage(img.format(format))
  };
  
  return wrapper;
}

// Helper function to create a wrapper for an image builder
function createWrapperForImage(img: ImageBuilderMethods): ImageUrlBuilder {
  return {
    url: () => {
      try {
        const url = img.url();
        return url || null;
      } catch (error) {
        console.error('Error building image URL:', error);
        return null;
      }
    },
    width: (width: number) => createWrapperForImage(img.width(width)),
    height: (height: number) => createWrapperForImage(img.height(height)),
    fit: (fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min') => 
      createWrapperForImage(img.fit(fit)),
    quality: (q: number) => createWrapperForImage(img.quality(q)),
    crop: (value: string) => createWrapperForImage(img.crop(value)),
    auto: (format: string) => createWrapperForImage(img.auto(format)),
    format: (format: 'jpg' | 'png' | 'webp' | 'avif') => 
      createWrapperForImage(img.format(format))
  };
}

// Create an empty builder for null/undefined sources
const createEmptyBuilder = (): ImageUrlBuilder => ({
  url: () => null,
  width: () => createEmptyBuilder(),
  height: () => createEmptyBuilder(),
  fit: () => createEmptyBuilder(),
  quality: () => createEmptyBuilder(),
  crop: () => createEmptyBuilder(),
  auto: () => createEmptyBuilder(),
  format: () => createEmptyBuilder()
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        _createdAt,
        _updatedAt,
        _rev,
        _type,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "categories": categories[]->{
          _id,
          title,
          "slug": slug.current
        },
        "author": author->{
          name,
          bio,
          image
        }
      }
    `);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// This function is only used server-side now, as client-side will use the API route
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await client.fetch<BlogPost | null>(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        _createdAt,
        _updatedAt,
        _rev,
        _type,
        title,
        slug,
        excerpt,
        mainImage,
        body,
        publishedAt,
        "categories": categories[]->{
          _id,
          title,
          "slug": slug.current
        },
        "author": author->{
          name,
          bio,
          image
        }
      }`,
      { slug }
    );
    
    return post;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

// Client-side function to fetch a single blog post
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`/api/blog/${slug}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
