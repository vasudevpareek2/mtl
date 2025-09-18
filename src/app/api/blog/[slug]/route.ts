import { NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/lib/sanity';

interface Context {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  request: Request,
  context: Context
) {
  try {
    const params = await context.params;
    
    if (!params?.slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// This tells Next.js to use dynamic rendering
export const dynamic = 'force-dynamic';

// This tells Next.js to revalidate this route every 60 seconds
export const revalidate = 60;
