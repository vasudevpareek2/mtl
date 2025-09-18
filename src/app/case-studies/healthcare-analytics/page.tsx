import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Analytics Platform | Case Study',
  description: 'How we built a secure, HIPAA-compliant healthcare analytics platform that improved patient outcomes by 35%',
};

export default function HealthcareAnalytics() {
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
              src="/images/healthcare-analytics.jpg"
              alt="Healthcare Analytics Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#b22c6c] dark:text-[#ef7358] bg-[#f8e1eb] dark:bg-gray-700 rounded-full">
                Healthcare
              </span>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Completed: November 2023
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Revolutionizing Healthcare with Advanced Analytics</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Building a secure, HIPAA-compliant analytics platform that improved patient outcomes by 35% and reduced operational costs by 28%.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">35%</h3>
                  <p className="text-gray-600 dark:text-gray-300">Improvement in patient outcomes</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">28%</h3>
                  <p className="text-gray-600 dark:text-gray-300">Reduction in operational costs</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-4xl font-bold text-[#b22c6c] dark:text-[#ef7358] mb-2">99.99%</h3>
                  <p className="text-gray-600 dark:text-gray-300">System uptime</p>
                </div>
              </div>
              
              <h2>The Challenge</h2>
              <p>A major healthcare provider was struggling with siloed patient data, inefficient processes, and a lack of real-time insights. Their existing systems couldn&apos;t provide the analytics needed to improve patient care while maintaining strict HIPAA compliance.</p>
              
              <h2>Our Approach</h2>
              <p>We developed a comprehensive healthcare analytics platform with the following features:</p>
              <ul>
                <li>Secure, HIPAA-compliant data infrastructure</li>
                <li>Real-time patient monitoring and alerts</li>
                <li>Predictive analytics for early intervention</li>
                <li>Custom dashboards for different healthcare roles</li>
                <li>Integration with existing EMR/EHR systems</li>
              </ul>
              
              <h2>The Results</h2>
              <p>The platform delivered significant improvements across key metrics:</p>
              <ul>
                <li><strong>35% improvement</strong> in patient outcomes through data-driven care</li>
                <li><strong>28% reduction</strong> in operational costs through process optimization</li>
                <li><strong>99.99% system uptime</strong> ensuring continuous patient care</li>
                <li><strong>Real-time alerts</strong> reduced critical response time by 65%</li>
                <li>Improved staff satisfaction with intuitive interfaces and workflows</li>
              </ul>
              
              <h2>Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python', 'FastAPI', 'PostgreSQL', 'Apache Kafka', 'React', 'TypeScript', 'AWS', 'Terraform', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Ready to transform your healthcare organization?</h3>
                <p>Let&apos;s discuss how we can help you leverage data to improve patient care and operational efficiency.</p>
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
