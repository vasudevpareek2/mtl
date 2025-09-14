import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { projectId, dataset, apiVersion } from '../sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set to `false` to bypass the edge cache
  token: process.env.SANITY_API_TOKEN, // only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource | null | undefined) {
  // Return null if no source or invalid source
  if (!source) return { url: () => null };
  
  // Handle the case where source is an object with _type 'image' and asset property
  if (typeof source === 'object' && source !== null && '_type' in source && source._type === 'image') {
    if (!source.asset) return { url: () => null };
    try {
      return builder.image(source);
    } catch (error) {
      console.error('Error building image URL:', error);
      return { url: () => null };
    }
  }
  
  try {
    return builder.image(source);
  } catch (error) {
    console.error('Error building image URL:', error);
    return { url: () => null };
  }
}

export async function getBlogPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        "categories": categories[]->title
      }
    `);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
