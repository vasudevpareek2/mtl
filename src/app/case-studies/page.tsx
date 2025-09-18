import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Our Work',
  description: 'Explore our portfolio of successful projects and see how we help businesses transform through technology',
};

const caseStudies = [
  {
    id: 'ecommerce-transformation',
    title: 'E-commerce Platform Transformation',
    description: 'How we helped a retail giant transform their e-commerce platform with modern technologies and increased their revenue by 150%',
    category: 'E-commerce',
    image: '/images/ecommerce-platform.jpg',
    stats: [
      { value: '150%', label: 'Revenue Increase' },
      { value: '3x', label: 'Faster Load Times' },
      { value: '40%', label: 'Higher Conversions' },
    ],
  },
  {
    id: 'healthcare-analytics',
    title: 'Healthcare Analytics Platform',
    description: 'Building a secure, HIPAA-compliant analytics platform that improved patient outcomes by 35%',
    category: 'Healthcare',
    image: '/images/healthcare-analytics.jpg',
    stats: [
      { value: '35%', label: 'Better Outcomes' },
      { value: '28%', label: 'Cost Reduction' },
      { value: '99.99%', label: 'Uptime' },
    ],
  },
  {
    id: 'fintech-mobile-app',
    title: 'FinTech Mobile Banking App',
    description: 'Developing a secure mobile banking app that acquired over 1 million users in its first year',
    category: 'FinTech',
    image: '/images/fintech-app.jpg',
    stats: [
      { value: '1M+', label: 'Users' },
      { value: '4.9★', label: 'Rating' },
      { value: '$500M+', label: 'Transactions' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#b22c6c] dark:text-[#ef7358] bg-[#f8e1eb] dark:bg-gray-700 rounded-full">
                    {study.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{study.title}</h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold text-[#b22c6c] dark:text-[#ef7358]">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={`/case-studies/${study.id}`}
                  className="mt-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
                >
                  Read Case Study
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to start your project?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#b22c6c] hover:bg-[#ef7358] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22c6c] transition-colors"
          >
            Get in Touch
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
