'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import BlogPosts from '@/components/BlogPosts';

// Dynamically import TypeAnimation with SSR disabled
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
);

const galleryImages = [
  "/images/ai1.jpg",
  "/images/ai2.jpg",
  "/images/ai3.jpg",
  "/images/ai4.jpg",
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden scroll-smooth bg-white dark:bg-neutral-950">
      {/* Hero Section - Biz4Group Inspired */}
  <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#2d0a3a]">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#ef7358]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-[#b22c6c]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      </div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-block px-4 py-2 mb-6 bg-[#b22c6c]/20 backdrop-blur-md rounded-full border border-[#b22c6c]/30">
            <span className="text-sm font-medium text-[#ffefa6] uppercase tracking-wider">Innovating with AI & ML</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We Build 
            <div className="relative inline-block min-w-[300px] ml-2">
              <div className="absolute -left-2 -top-1 w-2 h-2 rounded-full bg-[#ef7358] animate-pulse"></div>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-[length:200%_auto] animate-textShimmer">
                <TypeAnimation
                  sequence={[
                    'AI Solutions',
                    2000,
                    'Machine Learning Models',
                    2000,
                    'Intelligent Systems',
                    2000,
                    'Automation Tools',
                    2000
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block min-w-[300px]"
                />
              </span>
            </div>
            <br />
            <span className="text-white/80">That Drive Business Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Transform your business with cutting-edge AI solutions tailored to your unique needs. 
            From concept to deployment, we deliver intelligent systems that solve real-world challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">n            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-[#ef7358] to-[#b22c6c] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#b22c6c]/30 hover:scale-105 transition-all duration-300 text-center"
            >
              Start Your Project
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-transparent text-white font-semibold border-2 border-[#b22c6c] rounded-lg hover:bg-[#b22c6c]/20 hover:border-transparent transition-all duration-300 text-center"
            >
              Explore Services
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <span>AI Experts</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Technical Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#b22c6c]/30 rounded-2xl z-0"></div>
              <div className="relative bg-gradient-to-br from-[#1a0a2e] to-[#2d0a3a] p-1 rounded-2xl shadow-2xl border border-[#b22c6c]/20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/tech-grid.svg')] opacity-10"></div>
                <Image 
                  src="/images/ai-dashboard.svg" 
                  alt="AI Solutions Dashboard" 
                  width={600} 
                  height={500}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ef7358]/10 rounded-full filter blur-2xl animate-float"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#b22c6c]/10 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
            
            {/* Animated Code Block */}
            <div className="absolute -bottom-12 right-0 bg-[#0a0a1a] border border-[#b22c6c]/30 rounded-lg p-4 shadow-xl max-w-xs backdrop-blur-sm">
              <div className="flex space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-xs text-green-400 font-mono">
                <code>
                  {`// AI Model Training
const model = trainAI({
  dataset: "your_data",
  epochs: 100,
  accuracy: "98.7%"
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 border-2 border-[#b22c6c] rounded-full flex justify-center p-1">
        <div className="w-1 h-3 bg-[#ef7358] rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-10">
        <div className="h-1 w-32 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-40" />
      </div>
      {/* Services Section - Biz4Group Inspired */}
      <section id="services" className="min-h-[400px] py-16 px-4 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent drop-shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-300 cursor-pointer">AI Development Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {[
      {title: "AI Development", desc: "Bespoke AI solutions for your business.", icon: "🤖"},
      {title: "AI Agent Development", desc: "Intelligent agents to automate and enhance.", icon: "🧠"},
      {title: "Enterprise AI Solutions", desc: "Unlock insights and automate workflows.", icon: "🏢"}
    ].map((s, i) => (
      <div key={i} className="relative bg-white/30 dark:bg-black/40 backdrop-blur-lg border border-[#ef7358]/30 dark:border-[#ef7358]/30 rounded-3xl shadow-xl p-10 flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#b22c6c] glassmorphism-card">
        <div className="text-6xl mb-5 group-hover:animate-bounce-slow group-hover:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent transition-transform duration-200">
          {s.icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent group-hover:underline drop-shadow-md">{s.title}</h3>
        <p className="text-neutral-800 dark:text-neutral-200 mb-5 text-base font-medium">{s.desc}</p>
        <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] text-white font-semibold shadow hover:scale-105 hover:brightness-110 transition-all duration-200">Talk to Expert</a>
        {/* Decorative floating shape */}
        <span className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#ffefa6]/60 blur-md opacity-70 group-hover:scale-125 transition-transform duration-300" />
      </div>
    ))}
  </div>
</section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-10 mt-10">
        <div className="h-1 w-24 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-40" />
      </div>
      {/* Video Section */}
      <section className="w-full flex justify-center mb-12">
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-[#ef7358] bg-black/70 flex items-center justify-center">
          <video className="w-full h-full object-cover" src="/videos/intro.mp4" autoPlay loop muted playsInline poster="/images/ai1.jpg">
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </section>
      {/* Image Gallery Slider */}
      <section className="w-full max-w-5xl mx-auto mb-16">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#b22c6c] scrollbar-track-[#ef7358]">
          <div className="flex gap-6 min-w-[600px]">
            {galleryImages.map((src, i) => (
              <div key={i} className="min-w-[320px] h-52 rounded-xl overflow-hidden shadow-lg border-2 border-[#ef7358] bg-black/40 flex items-center justify-center">
                <Image src={src} alt={`AI Gallery ${i+1}`} width={320} height={208} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">About Us</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left: Mission and Counters */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-6 font-medium animate-fade-in-up">
              We are a passionate team of AI experts, engineers, and designers dedicated to building impactful solutions for modern businesses.
            </p>
            <div className="flex gap-10 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent animate-pulse">10+</span>
                <span className="text-xs text-neutral-500 mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#b22c6c] via-[#ef7358] to-[#ffefa6] bg-clip-text text-transparent animate-bounce-slow">25+</span>
                <span className="text-xs text-neutral-500 mt-1">Projects Delivered</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ffefa6] via-[#b22c6c] to-[#ef7358] bg-clip-text text-transparent animate-fade-in">100%</span>
                <span className="text-xs text-neutral-500 mt-1">Client Satisfaction</span>
              </div>
            </div>
          </div>
          {/* Right: Team Illustration */}
          <div className="flex-1 flex justify-center">
            {/* Replace with <Image /> for optimization later */}
            <Image 
  src="/images/team.jpg" 
  alt="Our Team" 
  width={320}
  height={256}
  className="rounded-3xl shadow-2xl w-80 h-64 object-cover border-4 border-[#b22c6c]/30"
/>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-8 bg-gradient-to-r from-[#b22c6c] via-[#ef7358] to-[#ffefa6] bg-clip-text text-transparent drop-shadow-md animate-fade-in-up">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {name: "Priya S.", role: "Lead AI Engineer", img: "/images/team1.jpg"},
            {name: "Alex R.", role: "AI Product Designer", img: "/images/team2.jpg"},
            {name: "Jordan W.", role: "ML Researcher", img: "/images/team3.jpg"}
          ].map((m, i) => (
            <div key={i} className="relative bg-white/30 dark:bg-black/40 backdrop-blur-lg border border-[#b22c6c]/30 rounded-2xl shadow-xl p-8 flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#ef7358] glassmorphism-card">
              {/* Replace with <Image /> for optimization later */}
              <Image 
  src={m.img} 
  alt={m.name} 
  width={96}
  height={96}
  className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-[#ef7358] shadow-lg group-hover:scale-110 transition-transform duration-300"
/>
              <div className="font-bold text-xl mb-1 group-hover:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent transition-all">{m.name}</div>
              <div className="text-sm font-semibold mb-2 text-[#b22c6c]">{m.role}</div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              {/* Decorative shape */}
              <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#ffefa6]/60 blur-md opacity-70 group-hover:scale-125 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-70 animate-pulse" />
      </div>
      {/* Services Section */}
      <section id="services" className="min-h-[400px] py-20 px-4 max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">Our AI Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {title: "AI Consultancy", desc: "Strategic guidance for AI adoption.", img: "/images/service1.png"},
            {title: "Custom AI Development", desc: "End-to-end ML models & AI apps.", img: "/images/service2.png"},
            {title: "Automation & Optimization", desc: "Process automation with AI.", img: "/images/service3.png"},
            {title: "NLP & Chatbots", desc: "Conversational AI.", img: "/images/service4.png"},
            {title: "Computer Vision", desc: "Image recognition & analytics.", img: "/images/service5.png"}
          ].map((s, i) => (
            <div key={i} className="bg-white/20 dark:bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 flex flex-col items-center hover:scale-105 transition-transform group">
              <Image 
                src={s.img} 
                alt={s.title} 
                width={64}
                height={64}
                className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent group-hover:underline">{s.title}</h3>
              <p className="text-center text-white/80 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-70 animate-pulse" />
      </div>
      {/* Projects Section */}
      <section id="projects" className="min-h-[400px] py-20 px-4 max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {title: "Retail AI Chatbot that increased sales by 30%", desc: "Deployed an AI-powered chatbot for a retail client, boosting sales and customer engagement.", img: "/images/project1.jpg"},
            {title: "Predictive Analytics for Manufacturing Efficiency", desc: "Implemented predictive analytics to optimize manufacturing processes and reduce downtime.", img: "/images/project2.jpg"},
            {title: "Computer Vision for Healthcare Diagnostics", desc: "Developed a computer vision system for faster and more accurate healthcare diagnostics.", img: "/images/project3.jpg"}
          ].map((p, i) => (
            <div key={i} className="bg-white/20 dark:bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 flex flex-col items-center hover:scale-105 transition-transform group">
              <Image 
                src={p.img} 
                alt={p.title} 
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded-xl mb-4 drop-shadow-lg group-hover:rotate-2 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent group-hover:underline">{p.title}</h3>
              <p className="text-center text-white/80 dark:text-gray-300 mb-2">{p.desc}</p>
              <a href="#" className="underline hover:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent transition">
                <span className="text-[#b22c6c] hover:text-transparent">Read More</span>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-70 animate-pulse" />
      </div>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-6xl mx-auto animate-fade-in">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-[#ef7358] dark:border-[#ef7358] p-8 md:p-14 flex flex-col md:flex-row gap-12 items-center">
          {/* Contact Info */}
          <div className="flex-1 w-full md:w-auto mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent text-left">Contact Us</h2>
            <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-200 text-left">Let&apos;s build the future of AI together. Reach out to our experts for a free consultation or any inquiries.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5v7a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-7"/><path d="M12 3v10.5"/><path d="M7.5 7.5l4.5 4.5 4.5-4.5"/></svg>
                <span className="font-medium">contact@moderntechlap.com</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2 2H4a2 2 0 01-2-2v-2.08a9.94 9.94 0 018-4.92 9.94 9.94 0 018 4.92z"/><circle cx="12" cy="7" r="4"/></svg>
                <span className="font-medium">+1-234-567-8901</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="8" r="4"/></svg>
                <span className="font-medium">123 AI Avenue, Innovation City</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 w-full md:w-auto bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6]/40 dark:bg-neutral-800 rounded-2xl shadow p-8 grid gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold dark:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                <span className="text-[#b22c6c] dark:text-transparent">Name</span>
              </label>
              <input id="name" type="text" placeholder="Your Name" className="p-3 rounded border border-[#b22c6c] dark:border-[#ef7358] bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-[#ef7358] outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold dark:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                <span className="text-[#b22c6c] dark:text-transparent">Email</span>
              </label>
              <input id="email" type="email" placeholder="Your Email" className="p-3 rounded border border-[#b22c6c] dark:border-[#ef7358] bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-[#ef7358] outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-semibold dark:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                <span className="text-[#b22c6c] dark:text-transparent">Company</span>
              </label>
              <input id="company" type="text" placeholder="Your Company" className="p-3 rounded border border-[#b22c6c] dark:border-[#ef7358] bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-[#ef7358] outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold dark:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                <span className="text-[#b22c6c] dark:text-transparent">Message</span>
              </label>
              <textarea id="message" placeholder="How can we help you?" rows={4} className="p-3 rounded border border-[#b22c6c] dark:border-[#ef7358] bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-[#ef7358] outline-none transition" />
            </div>
            <button type="submit" className="mt-2 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] text-white font-bold py-3 rounded-full shadow transition-transform hover:scale-105">Send Message</button>
          </form>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center mb-8 mt-8">
        <div className="h-1 w-24 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-70 animate-pulse" />
      </div>
      {/* Blog Section */}
      <section id="blog" className="min-h-[400px] py-20 px-4 max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 mt-10 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">Latest Insights</h2>
        <BlogPosts />
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-transparent to-[#ef7358]/10 dark:to-black/70 relative overflow-hidden py-16 px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#b22c6c]/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#ffefa6]/10 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.svg" 
                  alt="Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                  Modern Tech
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                Empowering businesses with cutting-edge AI solutions that drive innovation and growth. Let&apos;s build the future together.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin', 'facebook'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-xl">
                      {social === 'twitter' ? '𝕏' : social === 'github' ? '⌨️' : social === 'linkedin' ? '👔' : 'f'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-neutral-600 dark:text-neutral-300 hover:text-[#ef7358] dark:hover:text-[#ffefa6] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#ef7358] mr-3 mt-1">📍</span>
                  <span className="text-neutral-600 dark:text-neutral-300">123 AI Street, Tech Valley, CA 94025</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#b22c6c] mr-3">✉️</span>
                  <a href="mailto:hello@moderntech.ai" className="text-neutral-600 dark:text-neutral-300 hover:text-[#ef7358] transition-colors duration-200">
                    hello@moderntech.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#ffefa6] mr-3">📞</span>
                  <a href="tel:+11234567890" className="text-neutral-600 dark:text-neutral-300 hover:text-[#b22c6c] transition-colors duration-200">
                    +1 (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-neutral-800 dark:text-white">Newsletter</h4>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#ef7358] focus:border-transparent text-neutral-800 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    required
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Modern Tech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#ef7358] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#b22c6c] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#ffefa6] transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
