import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce Platform Transformation | Case Study',
  description: 'How we helped a retail giant transform their e-commerce platform with modern technologies and increased their revenue by 150%',
};

export default function EcommerceTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center text-[#b22c6c] hover:text-[#ef7358] dark:text-[#ef7358] dark:hover:text-[#b22c6c] mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Case Studies
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/ecommerce-platform.jpg"
              alt="E-commerce Platform Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#b22c6c] dark:text-[#ef7358] bg-[#f8e1eb] dark:bg-gray-700 rounded-full">
                E-commerce
              </span>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Completed: March 2023
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Transforming Retail with a Modern E-commerce Platform</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we helped a leading retail brand modernize their e-commerce platform, resulting in a 150% increase in revenue and 3x faster page loads.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">150%</h3>
                  <p className="text-gray-600 dark:text-gray-300">Increase in revenue</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">3x</h3>
                  <p className="text-gray-600 dark:text-gray-300">Faster page loads</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">40%</h3>
                  <p className="text-gray-600 dark:text-gray-300">Higher conversion rate</p>
                </div>
              </div>
              
              <h2>The Challenge</h2>
              <p>Our client, a well-established retail brand, was struggling with an outdated e-commerce platform that couldn&apos;t handle their growing customer base. Their legacy system was slow, difficult to maintain, and couldn&apos;t support modern e-commerce features that their competitors were offering.</p>
              
              <h2>Our Approach</h2>
              <p>We conducted a comprehensive audit of their existing platform and identified several key areas for improvement:</p>
              <ul>
                <li>Implemented a modern, headless e-commerce architecture</li>
                <li>Migrated to a cloud-native infrastructure for better scalability</li>
                <li>Redesigned the user experience with a mobile-first approach</li>
                <li>Integrated advanced search and recommendation systems</li>
                <li>Implemented robust analytics and A/B testing capabilities</li>
              </ul>
              
              <h2>The Results</h2>
              <p>The new platform delivered exceptional results from day one:</p>
              <ul>
                <li><strong>150% increase in revenue</strong> within the first six months</li>
                <li><strong>3x faster page load times</strong> across all devices</li>
                <li><strong>40% higher conversion rates</strong> through improved UX and personalization</li>
                <li><strong>99.99% uptime</strong> with the new cloud infrastructure</li>
                <li>Significantly reduced maintenance costs and time-to-market for new features</li>
              </ul>
              
              <h2>Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Node.js', 'MongoDB', 'AWS', 'GraphQL', 'Tailwind CSS', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Ready to transform your business?</h3>
                <p>Let&apos;s discuss how we can help you achieve similar results for your business.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
                >
                  Contact Us
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
