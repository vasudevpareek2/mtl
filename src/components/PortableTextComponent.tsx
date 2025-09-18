'use client';

import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      
      const imageUrl = urlFor(value);
      if (!imageUrl) return null;
      
      const imageUrlString = typeof imageUrl === 'object' && 'url' in imageUrl 
        ? imageUrl.url() 
        : '';
      
      if (!imageUrlString) return null;
      
      return (
        <div className="my-6">
          <Image
            src={imageUrlString}
            alt={value.alt || 'Image'}
            width={1200}
            height={Math.floor((9 / 16) * 1200)}
            className="rounded-lg"
          />
          {value.caption && (
            <div className="text-sm text-gray-500 mt-2 text-center">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
};
