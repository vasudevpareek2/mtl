import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FinTech Mobile App | Case Study',
  description: 'How we built a secure mobile banking app that acquired 1M+ users in the first year',
};

export default function FintechMobileApp() {
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
              src="/images/fintech-app.jpg"
              alt="FinTech Mobile App"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#b22c6c] dark:text-[#ef7358] bg-[#f8e1eb] dark:bg-gray-700 rounded-full">
                FinTech
              </span>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Launched: June 2023
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Building the Future of Mobile Banking</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                How we developed a secure, user-friendly mobile banking app that acquired over 1 million users in its first year.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">1M+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Active users in first year</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">4.9★</h3>
                  <p className="text-gray-600 dark:text-gray-300">App Store rating</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">$500M+</h3>
                  <p className="text-gray-600 dark:text-gray-300">In transactions processed</p>
                </div>
              </div>
              
              <h2>The Challenge</h2>
              <p>Our client, an innovative financial services company, wanted to create a mobile banking app that would stand out in a crowded market. They needed a solution that was not only secure and compliant with financial regulations but also provided an exceptional user experience that would drive adoption and engagement.</p>
              
              <h2>Our Approach</h2>
              <p>We took a user-centered approach to design and development, focusing on:</p>
              <ul>
                <li>Biometric authentication for enhanced security</li>
                <li>Intuitive UI/UX with a focus on accessibility</li>
                <li>Real-time transaction processing and notifications</li>
                <li>Personalized financial insights and budgeting tools</li>
                <li>Robust backend infrastructure for scalability</li>
              </ul>
              
              <h2>The Results</h2>
              <p>The app exceeded all expectations and achieved remarkable success:</p>
              <ul>
                <li><strong>1 million+ active users</strong> within the first year of launch</li>
                <li><strong>4.9★ rating</strong> on both App Store and Google Play</li>
                <li><strong>$500M+</strong> in transactions processed in the first year</li>
                <li><strong>40% month-over-month growth</strong> in user acquisition</li>
                <li>Featured as <strong>App of the Day</strong> in 12 countries</li>
              </ul>
              
              <h2>Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Jest', 'Detox'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Ready to build your next FinTech solution?</h3>
                <p className="mb-6">Let&apos;s discuss how we can help you create a secure, user-friendly financial application.</p>
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
