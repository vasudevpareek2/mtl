import Link from 'next/link';

export default function SmartInboxAICaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#b22cff] bg-[#b22cff]/10 rounded-full mb-5">
              CASE STUDY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              SmartInbox AI
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming enterprise email management with AI-powered automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#b22cff] mb-2">CLIENT</h3>
              <p className="text-lg">Fortune 500 Enterprise</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#b22cff] mb-2">INDUSTRY</h3>
              <p className="text-lg">Enterprise Technology</p>
            </div>
            <div className="bg-gradient-to-br from-[#121a2e] to-[#0f172a] p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-medium text-[#b22cff] mb-2">TECHNOLOGIES</h3>
              <p className="text-lg">NLP, ML, RPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#b22cff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Challenge</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Our enterprise client was struggling with email overload, with employees spending an average of 3.5 hours per day managing their inboxes. Key challenges included:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Missed important messages in overflowing inboxes</li>
              <li>Time wasted on low-priority emails and spam</li>
              <li>Inconsistent response times to customer inquiries</li>
              <li>Difficulty in tracking action items and follow-ups</li>
              <li>Lack of standardization in email responses</li>
            </ul>
            <p>
              These issues were impacting productivity, customer satisfaction, and employee morale.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#b22cff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">Our Solution</h2>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Email Processing</h3>
                <p className="text-gray-300">
                  We developed an AI system that automatically categorizes incoming emails by priority, intent, and required action. The system uses natural language understanding to extract key information, detect sentiment, and identify urgent requests.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#b22cff] to-[#8a2be2] p-0.5 rounded-xl">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [Email Processing Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold mb-4">AI-Powered Drafting</h3>
                <p className="text-gray-300">
                  The system suggests context-aware email responses, meeting times, and action items based on email content and user history. Users can send, edit, or discard suggestions with a single click.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#8a2be2] to-[#4b0082] p-0.5 rounded-xl md:order-1">
                <div className="bg-[#0f172a] p-6 rounded-xl h-full">
                  <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg flex items-center justify-center text-gray-600">
                    [AI Drafting Demo]
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Automated Workflows</h3>
                <p className="text-gray-300">
                  SmartInbox automates routine tasks such as scheduling meetings, setting reminders, and following up on unanswered emails. It integrates with existing calendar and task management tools to create a seamless workflow.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#4b0082] to-[#2d004d] p-0.5 rounded-xl">
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
            <div className="h-0.5 w-20 bg-gradient-to-r from-[#b22cff] to-transparent mr-4"></div>
            <h2 className="text-3xl font-bold">The Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#b22cff] to-[#8a2be2] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">4h</div>
                <p className="text-gray-300">Weekly time saved per employee</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#8a2be2] to-[#4b0082] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">65%</div>
                <p className="text-gray-300">Reduction in email response time</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4b0082] to-[#2d004d] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">90%</div>
                <p className="text-gray-300">Reduction in missed emails</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d004d] to-[#1a002e] p-0.5 rounded-xl">
              <div className="bg-[#0f172a] p-8 rounded-xl h-full">
                <div className="text-5xl font-bold mb-2">4.7/5</div>
                <p className="text-gray-300">User satisfaction rating</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">Client Testimonial</h3>
            <p className="text-gray-300 italic mb-6">
              &ldquo;SmartInbox AI has transformed how our organization handles email. The time savings alone have been game-changing, but the real value is in the improved responsiveness to our customers and the reduction in employee stress. It&apos;s like having a personal assistant for every team member.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b22cff] to-[#8a2be2] flex items-center justify-center text-xl font-bold mr-4">
                SJ
              </div>
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-gray-400">VP of Operations, [Client Name]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Email Workflow?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how SmartInbox AI can boost productivity and reduce email overload in your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#b22cff] to-[#4b0082] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
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
