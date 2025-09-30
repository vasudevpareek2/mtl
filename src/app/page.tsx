'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import BlogPosts from '@/components/BlogPosts';
import { useEffect, useState, useRef } from 'react';

// Dynamically import TypeAnimation with SSR disabled
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
);

const ShootingStar = () => {
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 5;
  const rotation = Math.random() * 45 - 22.5; // -22.5 to 22.5 degrees
  
  const starStyle = {
    '--star-size': `${size}px`,
    '--star-duration': `${duration}s`,
    '--star-delay': `${delay}s`,
    '--star-x': `${Math.random() * 100}%`,
    '--star-y': `${Math.random() * 100}%`,
    '--star-rotation': `${rotation}deg`,
  } as React.CSSProperties;

  // Create a trail that follows the star
  const trailStyle = {
    '--trail-width': `${size * 10}px`,
    '--trail-height': `${size * 0.5}px`,
    '--trail-duration': `${duration}s`,
    '--trail-delay': `${delay}s`,
    '--trail-rotation': `${rotation}deg`,
  } as React.CSSProperties;

  return (
    <div 
      className="absolute left-[var(--star-x)] top-[var(--star-y)] -translate-x-1/2 -translate-y-1/2 animate-shooting-star"
      style={starStyle}
    >
      <div className="relative">
        <div className="absolute w-[var(--star-size)] h-[var(--star-size)] bg-white rounded-full z-10" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent h-[1px] animate-shooting-star-trail"
          style={trailStyle}
        />
      </div>
    </div>
  );
};

const BackgroundAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shootingStars, setShootingStars] = useState<number[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Add initial shooting stars (increased from 5 to 15)
    const initialStars = Array.from({ length: 15 }, () => counter.current++);
    setShootingStars(initialStars);
    
    // Add new shooting stars more frequently (reduced interval from 2000ms to 500ms)
    const interval = setInterval(() => {
      // Add 1-3 new stars at a time
      const newStars = Array.from(
        { length: Math.floor(Math.random() * 3) + 1 }, 
        () => counter.current++
      );
      setShootingStars(prev => [...prev, ...newStars]);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Remove stars after animation completes (increased max from 10 to 25)
  useEffect(() => {
    if (shootingStars.length > 25) {
      setShootingStars(prev => prev.slice(-25));
    }
  }, [shootingStars.length]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {shootingStars.map((id) => (
          <ShootingStar key={id} />
        ))}
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => {
          const style = {
            width: `${Math.random() * 20 + 10}%`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `-${Math.random() * 10}s`,
            opacity: Math.random() * 0.5 + 0.1
          };
          return (
            <div 
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={style}
            />
          );
        })}
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const style = {
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
            animationDelay: `-${Math.random() * 5}s`
          };
          return (
            <div 
              key={i}
              className="absolute rounded-full bg-white/5"
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden scroll-smooth bg-white dark:bg-neutral-950">
      {/* Hero Section - Indatalabs Inspired */}
  <section id="home" className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
    {/* Animated Background Elements */}
    <BackgroundAnimation />

    {/* Hero Content */}
    <div className="relative z-10 container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
          </span>
          <span className="text-sm font-medium text-[#00f0ff] uppercase tracking-wider">AI FOR YOUR BUSINESS</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          <div className="text-2xl md:text-3xl font-medium text-[#00f0ff] mb-4">Welcome to the Future of</div>
          <div className="relative inline-block">
            <TypeAnimation
              sequence={[
                'AI Solutions',
                2000,
                'Machine Learning',
                2000,
                'Intelligent Systems',
                2000,
                'Automation Tools',
                2000
              ]}
              wrapper="span"
              style={{ 
                display: 'inline-block',
                background: 'linear-gradient(90deg, #00f0ff, #b22cff, #ff4d8d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
              }}
              cursor={true}
              repeat={Infinity}
              className="whitespace-nowrap"
            />
          </div>
          <div className="mt-4 text-2xl md:text-4xl font-medium text-white/70">
            That Drive <span className="font-bold text-white">Business Growth</span>
          </div>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI solutions tailored to your unique needs. 
          From concept to deployment, we deliver intelligent systems that solve real-world challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#contact" 
            className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#b22cff] text-white font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#b22cff]/30 hover:scale-105"
          >
            <span className="relative z-10">Start Your Project</span>
          </a>
          <a 
            href="#services" 
            className="group relative px-8 py-4 overflow-hidden rounded-lg bg-transparent text-white font-semibold border-2 border-white/10 text-center transition-all duration-300 hover:bg-white/5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Explore Services</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          {['Values', 'Consistency', 'Perfection'].map((item, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
        <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center my-4">
        <div className="h-0.5 w-16 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-40" />
      </div>
      {/* Services Section - Updated to match style */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
          Our Services / What We Offer
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          We deliver end-to-end AI capabilities to accelerate your digital transformation
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#00f0ff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00f0ff]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ef7358] via-[#b22c6c] to-[#ffefa6] flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">AI Strategy & Consulting</h3>
              <p className="text-gray-300">
                Align AI with your business goals — prioritize use cases, plan data readiness, and design an AI roadmap.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#b22cff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b22cff]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#b22cff] to-[#8a2be2] flex items-center justify-center text-2xl">
                🤖
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">Custom AI & ML Development</h3>
              <p className="text-gray-300">
                Build tailored models and systems across domains: time series, recommendation engines, anomaly detection, etc.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#ff4d8d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff4d8d]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4d8d] to-[#ff1493] flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">Conversational AI & NLP</h3>
              <p className="text-gray-300">
                Chatbots, virtual assistants, document understanding, semantic search, language translation — enhancing user interaction.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Service 4 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#00e676]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00e676]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00e676] to-[#00c853] flex items-center justify-center text-2xl">
                👁️
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">Computer Vision & Visual Intelligence</h3>
              <p className="text-gray-300">
                Deploy object detection, image segmentation, OCR, video analytics for industries like healthcare, retail, manufacturing.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#ff9800]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff9800]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff9800] to-[#f57c00] flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">Intelligent Automation & Workflow</h3>
              <p className="text-gray-300">
                Embed AI into your business processes: approvals, robotic process automation (RPA) + AI, decision routing.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-[#00bcd4]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00bcd4]/10">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00bcd4] to-[#0097a7] flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-3 pl-10">Enterprise Deployment & MLOps</h3>
              <p className="text-gray-300">
                Scalable architecture, model monitoring, retraining pipelines, drift detection, logging, version control.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center my-2">
        <div className="h-0.5 w-12 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-60" />
      </div>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="pt-20 pb-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#ff4d8d] via-[#b22cff] to-[#00f0ff] bg-clip-text text-transparent drop-shadow-2xl animate-fade-in leading-none py-4 my-0">
          Why Choose Us?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Domain-Centric AI Expertise",
              description: "We blend AI research with practical business acumen to deliver solutions that drive real value.",
              icon: "🧠",
              gradient: "from-[#8a2be2] to-[#4b0082]"
            },
            {
              title: "Scalable & Secure Architecture",
              description: "We build systems ready to grow and integrate with your enterprise stack, ensuring security at every level.",
              icon: "🛡️",
              gradient: "from-[#00bcd4] to-[#00796b]"
            },
            {
              title: "Outcome-Focused Delivery",
              description: "Our success is measured by business metrics: cost reduction, revenue lift, and time saved.",
              icon: "📈",
              gradient: "from-[#ff9800] to-[#f44336]"
            },
            {
              title: "Transparent Collaboration",
              description: "You stay informed at every step with clear milestones, dashboards, and governance.",
              icon: "🤝",
              gradient: "from-[#9c27b0] to-[#673ab7]"
            },
            {
              title: "Long-Term Partnership",
              description: "Beyond launch, we support evolution, maintenance, and expansion of your AI ecosystem.",
              icon: "🚀",
              gradient: "from-[#ff4d8d] to-[#ff1493]"
            },
            {
              title: "Cutting-Edge Innovation",
              description: "We stay ahead of the curve with the latest AI advancements to keep you competitive.",
              icon: "✨",
              gradient: "from-[#00c853] to-[#1b5e20]"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, ${item.gradient.split('from-')[1].split(' to-')[0]}, ${item.gradient.split('to-')[1]})`
              }}></div>
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-3xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item.description}</p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full flex justify-center my-2">
        <div className="h-0.5 w-12 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-60" />
      </div>
      {/* Portfolio Section - Full Width */}
      <section id="portfolio" className="relative w-screen -mx-[calc(50vw-50%)] py-24 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f23] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b22cff10] via-transparent to-transparent opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full mb-5 leading-normal">CASE STUDIES</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Our <span className="bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed pb-1">Transforming businesses with cutting-edge AI solutions that deliver measurable impact.</p>
          </div>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl flex items-center justify-center text-gray-600">
                    <span className="text-sm">AutoClaims AI</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">1. AutoClaims AI for Insurance</h3>
                  <p className="text-gray-300 mb-4">
                    Computer vision + NLP pipeline for assessing damage photos, extracting form data, and routing claims.
                  </p>
                  <div className="bg-[#00f0ff]/10 border-l-4 border-[#00f0ff] px-4 py-2 rounded-r">
                    <p className="text-[#00f0ff] font-medium">Impact:</p>
                    <p className="text-white">Claims cycle time cut by ~60%, manual review workload reduced significantly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl flex items-center justify-center text-gray-600">
                    <span className="text-sm">SmartInbox AI</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">2. SmartInbox AI Assistant for Corporate Email</h3>
                  <p className="text-gray-300 mb-4">
                    An intelligent assistant that reads, categorizes, drafts replies, schedules tasks, and auto-responds when appropriate.
                  </p>
                  <div className="bg-[#b22cff]/10 border-l-4 border-[#b22cff] px-4 py-2 rounded-r">
                    <p className="text-[#b22cff] font-medium">Impact:</p>
                    <p className="text-white">Saves ~2–4 hours per user/week, improves SLAs, reduces missed responses.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl flex items-center justify-center text-gray-600">
                    <span className="text-sm">Predictive Maintenance</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">3. Predictive Maintenance Platform for Manufacturing</h3>
                  <p className="text-gray-300 mb-4">
                    Real-time sensor analytics predicting equipment failure, scheduling preventive action.
                  </p>
                  <div className="bg-[#ff4d8d]/10 border-l-4 border-[#ff4d8d] px-4 py-2 rounded-r">
                    <p className="text-[#ff4d8d] font-medium">Impact:</p>
                    <p className="text-white">Downtime reduced by 40%, maintenance costs down by 25%, yield improved.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl flex items-center justify-center text-gray-600">
                    <span className="text-sm">Demand Forecasting</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">4. Demand Forecasting & Inventory Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Time series modeling and reinforcement policies optimizing reorder points across SKUs and locations.
                  </p>
                  <div className="bg-[#00e676]/10 border-l-4 border-[#00e676] px-4 py-2 rounded-r">
                    <p className="text-[#00e676] font-medium">Impact:</p>
                    <p className="text-white">Inventory waste reduced by 30%, stock-outs declined, working capital freed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121a2e] to-[#0f172a] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl flex items-center justify-center text-gray-600">
                    <span className="text-sm">Document Intelligence</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-3">5. Enterprise Document Intelligence Suite</h3>
                  <p className="text-gray-300 mb-4">
                    OCR + NLP engine for document ingestion, classification (invoices, contracts, reports), extraction and semantic search.
                  </p>
                  <div className="bg-[#ff9800]/10 border-l-4 border-[#ff9800] px-4 py-2 rounded-r">
                    <p className="text-[#ff9800] font-medium">Impact:</p>
                    <p className="text-white">Manual processing reduced by 80%, compliance checks automated, audit readiness improved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Highlights */}
      <section id="case-studies" className="py-16 px-4 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full mb-5 leading-normal">CLIENT SUCCESS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Impact <span className="bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">See how our AI solutions are driving measurable business outcomes for our clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "60% Faster Claims Processing",
              desc: "Reduced insurance claims processing time with our AI-powered AutoClaims solution.",
              icon: "⚡",
              gradient: "from-[#00f0ff] to-[#00a8ff]"
            },
            {
              title: "4 Hours/Week Saved",
              desc: "Average time saved per employee with our SmartInbox AI email assistant.",
              icon: "⏱️",
              gradient: "from-[#b22cff] to-[#8a2be2]"
            },
            {
              title: "40% Less Downtime",
              desc: "Reduction in manufacturing downtime with our Predictive Maintenance platform.",
              icon: "🏭",
              gradient: "from-[#ff4d8d] to-[#ff1493]"
            },
            {
              title: "30% Less Waste",
              desc: "Inventory waste reduction through our Demand Forecasting solution.",
              icon: "📦",
              gradient: "from-[#00e676] to-[#00c853]"
            },
            {
              title: "80% Faster Processing",
              desc: "Document processing time reduced with our Document Intelligence Suite.",
              icon: "📄",
              gradient: "from-[#ff9800] to-[#f57c00]"
            },
            {
              title: "25% Cost Reduction",
              desc: "Average maintenance cost savings across our manufacturing clients.",
              icon: "💰",
              gradient: "from-[#00bcd4] to-[#0097a7]"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b22cff]/10"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-4 mx-auto`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] rounded-lg hover:opacity-90 transition-all duration-300 group"
          >
            View All Case Studies
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
      {/* Section Divider */}
      <div className="w-full flex justify-center my-1">
        <div className="h-0.5 w-8 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-60" />
      </div>
      {/* Blog Section */}
      <section id="blog" className="min-h-[250px] py-6 px-4 max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 mt-6 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent pb-1">Latest Insights</h2>
        <BlogPosts />
      </section>
      
      {/* Section Divider */}
      <div className="w-full flex justify-center my-1">
        <div className="h-0.5 w-8 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] rounded-full opacity-60" />
      </div>
      {/* Contact Section */}
      <section id="contact" className="py-6 px-4 max-w-6xl mx-auto animate-fade-in">
        <div className="relative bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#b22c6c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00f0ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#ffefa6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10 p-4 md:p-6 lg:flex">
            {/* Contact Info */}
            <div className="lg:w-2/5 mb-6 lg:mb-0 lg:pr-6">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] bg-clip-text text-transparent">
                Let&apos;s explore how AI can accelerate and transform your business.
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-[#ef7358]/20 to-[#b22c6c]/20 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</h4>
                    <a href="mailto:contact@moderntechlap.com" className="text-base font-medium text-white hover:text-[#00f0ff] transition-colors">contact@moderntechlap.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#ef7358]/20 to-[#b22c6c]/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-[#b22cff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:+12345678901" className="text-lg font-medium text-white hover:text-[#b22cff] transition-colors">+1 (234) 567-8901</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#ef7358]/20 to-[#b22c6c]/20 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-[#ff4d8d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Visit Us</h4>
                    <p className="text-gray-300">123 AI Innovation Drive<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    {name: 'twitter', icon: '𝕏', label: 'X (Twitter)'},
                    {name: 'linkedin', icon: '👔', label: 'LinkedIn'}
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] hover:text-white transition-all duration-300 hover:rotate-12 hover:scale-110"
                      aria-label={social.label}
                    >
                      <span className="text-lg">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-3/5 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      className="block px-3 py-2.5 w-full text-white bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent outline-none transition-all duration-200 peer text-sm"
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-2 -top-2 px-1 text-xs font-medium text-gray-400 bg-[#0a0a1a] transition-all duration-200 peer-focus:text-[#00f0ff] pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      className="block px-3 py-2.5 w-full text-white bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#b22cff] focus:border-transparent outline-none transition-all duration-200 peer text-sm"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-2 -top-2 px-1 text-xs font-medium text-gray-400 bg-[#0a0a1a] transition-all duration-200 peer-focus:text-[#b22cff] pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    id="company" 
                    className="block px-3 py-2.5 w-full text-white bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#ff4d8d] focus:border-transparent outline-none transition-all duration-200 peer text-sm"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="company" 
                    className="absolute left-2 -top-2 px-1 text-xs font-medium text-gray-400 bg-[#0a0a1a] transition-all duration-200 peer-focus:text-[#ff4d8d] pointer-events-none"
                  >
                    Company (Optional)
                  </label>
                </div>
                
                <div className="relative group">
                  <select 
                    id="service" 
                    className="block px-3 py-2.5 w-full text-white bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#b22cff] focus:border-transparent outline-none appearance-none transition-all duration-200 peer text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled> </option>
                    <option value="ai-development">AI Development</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="consulting">Consulting</option>
                  </select>
                  <label 
                    htmlFor="service" 
                    className="absolute left-2 -top-2 px-1 text-xs font-medium text-gray-400 bg-[#0a0a1a] transition-all duration-200 peer-focus:text-[#b22cff] pointer-events-none"
                  >
                    Service Interest
                  </label>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="block px-3 py-2.5 w-full text-white bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent outline-none resize-none transition-all duration-200 peer text-sm"
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-2 -top-2 px-1 text-xs font-medium text-gray-400 bg-[#0a0a1a] transition-all duration-200 peer-focus:text-[#00f0ff] pointer-events-none"
                  >
                    Your Message
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 w-3.5 h-3.5 rounded border-white/20 bg-white/5 focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2 focus:ring-offset-[#0a0a1a] text-[#00f0ff] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="ml-2 text-xs text-gray-300">
                    I agree to the <a href="#" className="text-[#00f0ff] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#00f0ff] hover:underline">Terms of Service</a>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#00f0ff] via-[#b22cff] to-[#ff4d8d] text-white font-medium rounded-lg shadow hover:shadow-md hover:shadow-[#b22cff]/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a1a] focus:ring-[#00f0ff] flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-transparent to-[#ef7358]/10 dark:to-black/70 relative overflow-hidden py-10 px-4">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#b22c6c]/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#ffefa6]/10 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.svg" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="rounded-full"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] bg-clip-text text-transparent">
                  Modern Tech
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                Empowering businesses with cutting-edge AI solutions that drive innovation and growth.
              </p>
              <div className="flex space-x-3">
                {[
                  {name: 'twitter', icon: '𝕏', label: 'X (Twitter)'},
                  {name: 'linkedin', icon: '👔', label: 'LinkedIn'}
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] hover:text-white transition-all duration-300 hover:scale-110 text-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-bold mb-4 text-neutral-800 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-[#ef7358] dark:hover:text-[#ffefa6] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-bold mb-4 text-neutral-800 dark:text-white">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#ef7358] mr-2 mt-0.5 text-sm">📍</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">123 AI Street, Tech Valley, CA</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#b22c6c] mr-2 text-sm">✉️</span>
                  <a href="mailto:hello@moderntech.ai" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-[#ef7358] transition-colors duration-200">
                    hello@moderntech.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#ffefa6] mr-2 text-sm">📞</span>
                  <a href="tel:+11234567890" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-[#b22c6c] transition-colors duration-200">
                    +1 (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base font-bold mb-4 text-neutral-800 dark:text-white">Newsletter</h4>
              <p className="text-neutral-600 dark:text-neutral-300 text-xs mb-3">
                Subscribe for the latest updates and insights.
              </p>
              <form className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#ef7358] focus:border-transparent text-neutral-800 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    required
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ef7358] via-[#b22c6c] to-[#ffefa6] text-white px-3 py-1 rounded-md text-xs font-medium hover:opacity-90 transition-opacity"
                  >
                    Join
                  </button>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Unsubscribe anytime
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Modern Tech. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#ef7358] transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#b22c6c] transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-[#ffefa6] transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
