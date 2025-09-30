import Link from 'next/link';

export default function AutoClaimsAICaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full mb-5">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              AutoClaims AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionizing insurance claims processing with computer vision and NLP
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00f0ff] mb-2">CLIENT</h3>
              <p className="text-lg">Leading Insurance Provider</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00f0ff] mb-2">INDUSTRY</h3>
              <p className="text-lg">Insurance</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00f0ff] mb-2">TECHNOLOGIES</h3>
              <p className="text-lg">Computer Vision, NLP, ML</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00f0ff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Our client, a leading insurance provider, was facing significant challenges with their claims processing pipeline. The manual review of vehicle damage claims was time-consuming, averaging 3-5 days per claim, and prone to human error. The process involved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manual review of damage photos by claims adjusters</li>
              <li>Error-prone data entry from claim forms</li>
              <li>Inefficient routing of claims based on complexity</li>
              <li>Lack of standardization in damage assessment</li>
            </ul>
            <p>
              This resulted in delayed claim resolutions, customer dissatisfaction, and increased operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00f0ff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Automated Damage Assessment</h3>
                <p className="text-gray-300">
                  We developed a computer vision system that automatically analyzes vehicle damage photos to identify and classify damage types, severity, and estimated repair costs. The system can detect dents, scratches, broken parts, and other common forms of vehicle damage with over 95% accuracy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00f0ff] to-[#00a8ff] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Damage Assessment Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">Intelligent Document Processing</h3>
                <p className="text-gray-300">
                  Our NLP pipeline extracts and validates information from claim forms, police reports, and other documents. The system automatically populates claim fields, verifies information consistency, and flags potential fraud indicators for further review.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#b22cff] to-[#8a2be2] p-0.5 rounded-xl md:order-1">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Document Processing Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Smart Claim Routing</h3>
                <p className="text-gray-300">
                  Based on the analysis, claims are automatically routed to the appropriate team or adjuster based on complexity, estimated cost, and required expertise. Simple claims can be processed automatically, while complex cases are prioritized and assigned to senior adjusters.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#ff4d8d] to-[#ff1493] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Workflow Automation Demo]
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
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00f0ff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#00f0ff] to-[#00a8ff] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">60%</div>
                <p className="text-gray-300">Reduction in claims processing time</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#b22cff] to-[#8a2be2] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">45%</div>
                <p className="text-gray-300">Reduction in operational costs</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ff4d8d] to-[#ff1493] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-gray-300">Accuracy in damage assessment</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00e676] to-[#00c853] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">4.8/5</div>
                <p className="text-gray-300">Customer satisfaction rating</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
            <p className="text-gray-300 italic mb-6">
              &ldquo;The AutoClaims AI solution has transformed our claims processing operations. What used to take days now happens in hours, and our customers are thrilled with the speed and accuracy. The system has paid for itself many times over in operational savings and improved customer satisfaction.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#00a8ff] flex items-center justify-center text-xl font-bold mr-4">
                JD
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-400">Chief Claims Officer, [Client Name]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Claims Process?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can streamline your insurance operations and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
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
