import Link from 'next/link';

export default function PredictiveMaintenanceCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00e676] bg-[#00e676]/10 rounded-full mb-5">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Predictive Maintenance AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reducing downtime and maintenance costs with AI-powered predictive analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00e676] mb-2">CLIENT</h3>
              <p className="text-lg">Global Manufacturing Leader</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00e676] mb-2">INDUSTRY</h3>
              <p className="text-lg">Industrial Manufacturing</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#00e676] mb-2">TECHNOLOGIES</h3>
              <p className="text-lg">IoT, ML, Time Series Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00e676] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Our client, a global manufacturing leader, was facing significant challenges with unplanned equipment downtime and inefficient maintenance practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Average of 15% unplanned downtime across production lines</li>
              <li>Reactive maintenance approach leading to costly emergency repairs</li>
              <li>Inefficient use of maintenance resources and parts inventory</li>
              <li>Lack of visibility into equipment health and performance trends</li>
              <li>Difficulty predicting equipment failures before they occurred</li>
            </ul>
            <p>
              These issues were resulting in millions of dollars in lost productivity and maintenance costs annually.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00e676] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">IoT Sensor Network</h3>
                <p className="text-gray-300">
                  We deployed a comprehensive IoT sensor network across critical equipment to monitor vibration, temperature, pressure, and other key performance indicators in real-time. The system collects data at high frequency to detect even subtle anomalies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00e676] to-[#00c853] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [IoT Sensor Dashboard]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-300">
                  Our machine learning models analyze sensor data to identify patterns and predict equipment failures before they occur. The system continuously learns from new data to improve prediction accuracy over time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#00c853] to-[#2e7d32] p-0.5 rounded-xl md:order-1">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Analytics Dashboard]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Maintenance Optimization</h3>
                <p className="text-gray-300">
                  The system generates prioritized work orders and maintenance schedules based on actual equipment condition rather than fixed intervals. It also optimizes spare parts inventory levels based on predicted maintenance needs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Maintenance Dashboard]
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
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#00e676] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#00e676] to-[#00c853] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">40%</div>
                <p className="text-gray-300">Reduction in unplanned downtime</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00c853] to-[#2e7d32] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">25%</div>
                <p className="text-gray-300">Reduction in maintenance costs</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2e7d32] to-[#1b5e20] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">90%</div>
                <p className="text-gray-300">Prediction accuracy for failures</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1b5e20] to-[#0d3011] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">15%</div>
                <p className="text-gray-300">Increase in equipment lifespan</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
            <p className="text-gray-300 italic mb-6">
              &ldquo;The predictive maintenance solution has transformed our operations. We&apos;ve gone from reacting to equipment failures to predicting and preventing them. The system has paid for itself many times over in reduced downtime and maintenance costs, and our maintenance team can now focus on strategic improvements rather than emergency repairs.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00e676] to-[#00c853] flex items-center justify-center text-xl font-bold mr-4">
                MR
              </div>
              <div>
                <div className="font-medium">Michael Rodriguez</div>
                <div className="text-sm text-gray-400">Director of Operations, [Client Name]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Maintenance Operations?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our predictive maintenance solutions can reduce downtime and maintenance costs in your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#00e676] to-[#1b5e20] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
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
