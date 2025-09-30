import { getBlogPostBySlug } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { components } from '@/components/PortableTextComponent';
import type { SanityImage, Category } from '@/types/sanity';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Helper function to format dates
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Helper function to get image URL
function getImageUrl(image: SanityImage | undefined): string | null {
  if (!image) return null;
  const imageUrl = urlFor(image);
  return imageUrl && typeof imageUrl === 'object' && 'url' in imageUrl 
    ? imageUrl.url() 
    : null;
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The requested blog post could not be found.</p>
        <Link 
          href="/blog" 
          className="px-6 py-2 bg-[#b22c6c] text-white rounded-md hover:bg-[#8a2052] transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const imageUrl = getImageUrl(post.mainImage);
  const authorImageUrl = post.author?.image ? getImageUrl(post.author.image) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            {post.author?.name && (
              <span className="mx-2">•</span>
            )}
            {post.author?.name && (
              <span>By {post.author.name}</span>
            )}
          </div>

          {imageUrl && (
            <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
              {post.mainImage?.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-sm">
                  {post.mainImage.caption}
                </div>
              )}
            </div>
          )}

          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category: Category) => (
                <Link
                  key={category._id}
                  href={`/blog/category/${category.slug}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose dark:prose-invert max-w-none">
          {post.body && (
            <PortableText
              value={post.body}
              components={components}
            />
          )}
        </div>
        
        {(post.author?.name || post.author?.bio) && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">About the Author</h2>
            <div className="flex items-start gap-4">
              {authorImageUrl ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={authorImageUrl}
                    alt={post.author.name || 'Author'}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-500 dark:text-gray-400 text-xl">
                    {post.author?.name?.charAt(0).toUpperCase() || 'A'}
                  </span>
                </div>
              )}
              <div>
                <h3 className="font-medium text-lg">{post.author?.name || 'Author'}</h3>
                {post.author?.bio && (
                  <div className="prose dark:prose-invert max-w-none mt-1">
                    <PortableText
                      value={post.author.bio}
                      components={components}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#b22c6c] hover:text-[#8a2052] dark:hover:text-[#d13a80] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  );
}
