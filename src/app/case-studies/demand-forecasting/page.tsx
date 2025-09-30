import Link from 'next/link';

export default function DemandForecastingCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#ff9800] bg-[#ff9800]/10 rounded-full mb-5">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Demand Forecasting AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Optimizing inventory and reducing waste with AI-powered demand forecasting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#ff9800] mb-2">CLIENT</h3>
              <p className="text-lg">National Retail Chain</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#ff9800] mb-2">INDUSTRY</h3>
              <p className="text-lg">Retail & E-commerce</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#ff9800] mb-2">TECHNOLOGIES</h3>
              <p className="text-lg">Time Series, ML, Big Data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff9800] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Our client, a national retail chain with over 500 locations, was struggling with inventory management challenges that were impacting both profitability and customer satisfaction:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>30% of perishable inventory was being written off due to spoilage</li>
              <li>Frequent stockouts of popular items led to lost sales</li>
              <li>Inefficient allocation of inventory across locations</li>
              <li>Inability to account for external factors like weather and local events</li>
              <li>Excessive working capital tied up in slow-moving inventory</li>
            </ul>
            <p>
              These issues were resulting in significant revenue loss and reduced customer loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff9800] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Advanced Demand Forecasting</h3>
                <p className="text-gray-300">
                  We developed a machine learning model that analyzes historical sales data, seasonality, promotions, and external factors (weather, local events, economic indicators) to predict demand with high accuracy. The model continuously learns and adapts to changing patterns.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#ff9800] to-[#f57c00] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Forecasting Dashboard]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">Automated Inventory Optimization</h3>
                <p className="text-gray-300">
                  The system generates optimized inventory orders and allocation plans for each store, considering shelf life, storage constraints, and supplier lead times. It also provides dynamic pricing recommendations for items approaching their shelf life.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#f57c00] to-[#e65100] p-0.5 rounded-xl md:order-1">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Inventory Optimization Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Supplier Collaboration Portal</h3>
                <p className="text-gray-300">
                  We implemented a supplier portal that shares forecasted demand, enabling suppliers to better plan production and deliveries. The system also provides real-time visibility into inventory levels and movement across the supply chain.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#e65100] to-[#bf360c] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Supplier Portal Demo]
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
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff9800] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#ff9800] to-[#f57c00] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">30%</div>
                <p className="text-gray-300">Reduction in inventory waste</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#f57c00] to-[#e65100] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">15%</div>
                <p className="text-gray-300">Increase in sales from better stock availability</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#e65100] to-[#bf360c] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">25%</div>
                <p className="text-gray-300">Reduction in working capital tied to inventory</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#bf360c] to-[#8d1b00] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-gray-300">Forecast accuracy for key product categories</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
            <p className="text-gray-300 italic mb-6">
              &ldquo;The demand forecasting solution has been a game-changer for our business. We&apos;ve significantly reduced waste, improved product availability, and made our supply chain more responsive. The AI&apos;s ability to account for external factors like weather and local events has been particularly impressive, helping us stay ahead of demand fluctuations.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9800] to-[#f57c00] flex items-center justify-center text-xl font-bold mr-4">
                AL
              </div>
              <div>
                <div className="font-medium">Amanda Lee</div>
                <div className="text-sm text-gray-400">Chief Supply Chain Officer, [Client Name]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Inventory?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our demand forecasting solutions can reduce waste and increase sales in your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#ff9800] to-[#e65100] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Request a Demo
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
