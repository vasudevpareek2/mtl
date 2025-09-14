'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getBlogPosts, urlFor } from '@/lib/sanity';

interface SanityImage {
  asset: {
    _ref: string;
  };
  alt?: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImage;
  publishedAt: string;
  categories?: string[];
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ef7358]"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400">No blog posts found. Check back later for updates!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <div 
          key={post._id} 
          className="bg-white/20 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 hover:scale-105 transition-transform group"
        >
          <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            {(() => {
              const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null;
              
              if (!imageUrl) {
                return (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>No image available</span>
                  </div>
                );
              }
              
              return (
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a placeholder if the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-image.jpg';
                    target.onerror = null; // Prevent infinite loop if placeholder also fails
                  }}
                />
              );
            })()}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories?.map((category, i) => (
              <span 
                key={i} 
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white group-hover:text-[#ef7358] transition-colors">
            {post.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            {post.excerpt}
          </p>
          <a 
            href={`/blog/${post.slug.current}`}
            className="inline-flex items-center text-sm font-medium text-[#b22c6c] hover:text-[#ef7358] transition-colors"
          >
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
