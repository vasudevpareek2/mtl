import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies | Our Work',
  description: 'Explore our portfolio of successful AI implementations and see how we help businesses transform through technology',
};

const caseStudies = [
  {
    id: 'autoclaims-ai',
    title: 'AutoClaims AI',
    description: 'Reducing claims processing time by 60% with computer vision and NLP',
    category: 'Insurance',
    icon: '🚗',
    stats: [
      { value: '60%', label: 'Faster Processing' },
      { value: '95%', label: 'Accuracy' },
      { value: '45%', label: 'Cost Reduction' },
    ],
    gradient: 'from-[#00f0ff] to-[#00a8ff]',
  },
  {
    id: 'smartinbox-ai',
    title: 'SmartInbox AI',
    description: 'Saving 4 hours per week per employee with AI-powered email management',
    category: 'Enterprise',
    icon: '📧',
    stats: [
      { value: '4h', label: 'Weekly Time Saved' },
      { value: '65%', label: 'Faster Responses' },
      { value: '90%', label: 'Less Missed Emails' },
    ],
    gradient: 'from-[#b22cff] to-[#8a2be2]',
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    description: 'Reducing equipment downtime by 40% with IoT and machine learning',
    category: 'Manufacturing',
    icon: '⚙️',
    stats: [
      { value: '40%', label: 'Less Downtime' },
      { value: '25%', label: 'Cost Savings' },
      { value: '15%', label: 'Longer Lifespan' },
    ],
    gradient: 'from-[#00e676] to-[#00c853]',
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting',
    description: 'Reducing inventory waste by 30% with AI-powered demand prediction',
    category: 'Retail',
    icon: '📈',
    stats: [
      { value: '30%', label: 'Less Waste' },
      { value: '15%', label: 'More Sales' },
      { value: '25%', label: 'Lower Costs' },
    ],
    gradient: 'from-[#ff9800] to-[#f57c00]',
  },
  {
    id: 'document-intelligence',
    title: 'Document Intelligence',
    description: 'Automating 80% of document processing with AI and computer vision',
    category: 'Financial Services',
    icon: '📑',
    stats: [
      { value: '80%', label: 'Faster Processing' },
      { value: '99%', label: 'Accuracy' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    gradient: 'from-[#00bcd4] to-[#0097a7]',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full mb-5">
            OUR WORK
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform with AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-opacity-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-opacity-10"
              style={{
                '--tw-shadow-colored': `0 25px 50px -12px rgb(0 0 0 / 0.25), 0 0 15px -3px ${study.gradient.split(' ')[1]}`,
              } as React.CSSProperties}
            >
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
                <span className="text-6xl">{study.icon}</span>
              </div>
              
              <div className="p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold text-${study.gradient.split(' ')[1].substring(3)} bg-${study.gradient.split(' ')[1].substring(3)}/10 rounded-full`}>
                    {study.category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3">{study.title}</h2>
                
                <p className="text-gray-400 mb-6">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link
                  href={`/case-studies/${study.id}`}
                  className={`mt-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r ${study.gradient} hover:opacity-90 transition-opacity`}
                >
                  Read Case Study
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center p-12 text-center h-full min-h-[500px]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Your Success Story</h3>
            <p className="text-gray-400 mb-8 max-w-xs mx-auto">Be our next case study and transform your business with AI.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22cff] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your success story?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b22cff] transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-base font-medium rounded-lg text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
