"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDark(true);
    
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between sticky top-0 z-50 bg-white/30 dark:bg-black/40 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-[#b22c6c]/30 glassmorphism-nav transition-all duration-300">
      <a 
        href="#home" 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
        className="flex items-center gap-2"
      >
        <Image src="/logo.svg" alt="Logo" width={40} height={40} className="rounded-full" priority />
        <span className="sr-only">Home</span>
      </a>
      
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
            className={`${
              activeSection === id 
                ? 'text-blue-700 dark:text-blue-400 font-semibold' 
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400'
            } transition font-medium`}
          >
            {label}
          </a>
        ))}
        
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="ml-2 px-5 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold shadow transition hidden sm:inline-block"
        >
          Get in Touch
        </a>
        
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setDark(d => !d)}
          className="ml-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {dark ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.classList.toggle('hidden');
            }
          }}
          className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
