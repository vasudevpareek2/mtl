'use client';

import { useState, useEffect, useCallback } from 'react';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { components } from './PortableTextComponent';
import type { BlogPost, SanityImage } from '@/types/sanity';

// Custom hook to manage blog posts state and actions
const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogPosts();
      if (!data || data.length === 0) {
        setPosts([]);
        return;
      }
      setPosts(data);
    } catch (err) {
      console.error('Failed to fetch blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  const openModal = useCallback(async (post: BlogPost) => {
    try {
      const fullPost = await getBlogPostBySlug(post.slug.current);
      setSelectedPost(fullPost);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } catch (err) {
      console.error('Failed to fetch blog post:', err);
      setError('Failed to load blog post. Please try again.');
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  return {
    posts,
    loading,
    error,
    selectedPost,
    isModalOpen,
    fetchPosts,
    openModal,
    closeModal,
    handleBackdropClick
  };
};

// Main component
export default function BlogPosts() {
  // Get all necessary values and functions from the custom hook
  const {
    posts,
    loading,
    error,
    selectedPost,
    isModalOpen,
    fetchPosts,
    openModal,
    closeModal,
    handleBackdropClick
  } = useBlogPosts();

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 overflow-hidden">
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
          <svg className="w-8 h-8 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Something went wrong</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try again
        </button>
      </div>
    );
  }

  // Empty state - removed duplicate

  // Format date helper function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get image URL helper function
  const getImageUrl = (image: SanityImage | undefined) => {
    if (!image) return null;
    const imgUrl = urlFor(image);
    return imgUrl && typeof imgUrl === 'object' && 'url' in imgUrl 
      ? imgUrl.url() 
      : null;
  };


  if (posts.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No blog posts yet</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">We&apos;re working on some great content. Check back soon for updates!</p>
        <div className="flex justify-center space-x-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Return loading state if loading
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 overflow-hidden">
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Render empty state
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No blog posts found</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Check back later for new content.</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Render blog posts grid
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const imageUrl = post.mainImage ? getImageUrl(post.mainImage) : null;
        const authorImageUrl = post.author?.image ? getImageUrl(post.author.image) : null;
        const authorInitial = post.author?.name?.charAt(0).toUpperCase() || 'A';

        const postUrl = post.slug?.current ? `/blog/post/${post.slug.current}` : '#';
        
        const handleCardClick = (e: React.MouseEvent) => {
          // Don't do anything if the click was on a link or button
          if ((e.target as HTMLElement).closest('a, button, [role="button"]')) {
            return;
          }
          openModal(post);
        };
        
        return (
          <article
            key={post._id}
            onClick={handleCardClick}
            className="bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 hover:scale-105 transition-transform flex flex-col h-full overflow-hidden hover:shadow-lg hover:shadow-[#b22c6c]/10 dark:hover:shadow-[#b22c6c]/20 cursor-pointer"
            role="article"
            aria-label={`View blog post: ${post.title}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = postUrl;
              }
            }}
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title || 'Blog post image'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-400">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">No image available</span>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-col space-y-4 h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <time 
                      dateTime={post.publishedAt} 
                      className="text-xs font-medium text-gray-500 dark:text-gray-400"
                      title={new Date(post.publishedAt).toLocaleString()}
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {post.categories.slice(0, 2).map((category) => (
                          <Link
                            key={category._id}
                            href={`/blog/category/${category.slug}`}
                            className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/70 transition-colors z-10 relative"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {category.title}
                          </Link>
                        ))}
                        {post.categories.length > 2 && (
                          <span 
                            className="text-xs text-gray-500 dark:text-gray-400 self-center"
                            title={post.categories.slice(2).map(c => c.title).join(', ')}
                          >
                            +{post.categories.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                  )}
                </div>
                
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between">
                    {post.author?.name && (
                      <div className="flex items-center space-x-2 group/author">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-[#b22c6c] dark:group-hover:border-[#b22c6c] transition-colors">
                          {authorImageUrl ? (
                            <Image
                              src={authorImageUrl}
                              alt={post.author.name}
                              width={28}
                              height={28}
                              className="object-cover w-full h-full"
                              sizes="28px"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-[#b22c6c] transition-colors">
                                {authorInitial}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#b22c6c] transition-colors line-clamp-1">
                          {post.author.name}
                        </span>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(post);
                      }}
                      className="inline-flex items-center text-[#b22c6c] hover:text-[#ef7358] font-medium text-sm transition-colors focus:outline-none"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
      </div>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-post-title"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8">
              <h2 id="blog-post-title" className="text-3xl font-bold mb-4">
                {selectedPost.title}
              </h2>
              
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                <time dateTime={selectedPost.publishedAt}>
                  {formatDate(selectedPost.publishedAt)}
                </time>
                {selectedPost.author?.name && (
                  <span className="mx-2">•</span>
                )}
                {selectedPost.author?.name && (
                  <span>By {selectedPost.author.name}</span>
                )}
              </div>

              {selectedPost.mainImage && (
                <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(selectedPost.mainImage).url() || '/placeholder-image.jpg'}
                    alt={selectedPost.mainImage.alt || selectedPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              )}

              <div className="prose dark:prose-invert max-w-none">
                {selectedPost.body && (
                  <PortableText
                    value={selectedPost.body}
                    components={components}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
