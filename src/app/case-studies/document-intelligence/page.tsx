import Link from 'next/link';

export default function DocumentIntelligenceCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00bcd4] bg-[#00bcd4]/10 rounded-full mb-5">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Document Intelligence AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Automating document processing with AI-powered intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00bcd4] mb-2">CLIENT</h3>
              <p className="text-lg">Global Financial Services Firm</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00bcd4] mb-2">INDUSTRY</h3>
              <p className="text-lg">Financial Services</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00bcd4] mb-2">TECHNOLOGIES</h3>
              <p className="text-lg">NLP, Computer Vision, ML</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00bcd4] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Our client, a leading financial services firm, was facing significant challenges with their document-intensive processes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Over 10,000 documents processed monthly across multiple departments</li>
              <li>Manual data entry leading to errors and inconsistencies</li>
              <li>Average processing time of 15-20 minutes per document</li>
              <li>Difficulty in extracting and validating information from various document formats</li>
              <li>High operational costs and compliance risks</li>
            </ul>
            <p>
              These challenges were causing delays in customer onboarding, loan processing, and other critical business functions.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00bcd4] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Document Processing</h3>
                <p className="text-gray-300">
                  We developed an AI-powered document processing system that can understand, extract, and validate information from various document types including PDFs, scanned images, emails, and forms. The system uses advanced OCR, computer vision, and natural language processing to achieve human-level accuracy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00bcd4] to-[#0097a7] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Document Processing Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">Automated Workflow Integration</h3>
                <p className="text-gray-300">
                  The solution integrates seamlessly with existing business systems and workflows. It automatically routes documents for approval, flags discrepancies, and updates relevant systems with extracted data. The system also includes a human-in-the-loop interface for validation and correction when needed.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0097a7] to-[#00838f] p-0.5 rounded-xl md:order-1">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Workflow Integration Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Advanced Analytics & Insights</h3>
                <p className="text-gray-300">
                  The platform provides real-time analytics and dashboards to track document processing metrics, identify bottlenecks, and optimize workflows. It also includes AI-powered anomaly detection to flag potential fraud or compliance issues.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00838f] to-[#006064] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Analytics Dashboard Demo]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00bcd4] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#00bcd4] to-[#0097a7] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">80%</div>
                <p className="text-gray-300">Faster document processing</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0097a7] to-[#00838f] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">99%</div>
                <p className="text-gray-300">Data extraction accuracy</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00838f] to-[#006064] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">60%</div>
                <p className="text-gray-300">Reduction in processing costs</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#006064] to-[#00363a] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-gray-300">Compliance with audit requirements</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
            <p className="text-gray-300 italic mb-6">
: &ldquo;The document intelligence solution has transformed our operations. We&apos;ve been able to process documents in minutes instead of hours, with greater accuracy and at a fraction of the cost. The system has also given us valuable insights into our processes, helping us identify areas for further optimization. It&apos;s been a game-changer for our business.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00bcd4] to-[#0097a7] flex items-center justify-center text-xl font-bold mr-4">
                RK
              </div>
              <div>
                <div className="font-medium">Robert Kim</div>
                <div className="text-sm text-gray-400">Chief Operations Officer, [Client Name]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Document Processing?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our document intelligence solutions can transform your business processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#00bcd4] to-[#00838f] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/case-studies" 
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
