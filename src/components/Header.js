'use client';

import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const navLinks = [
    { 
      href: '/', 
      label: 'Home', 
      shortLabel: 'Home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      color: '#46B1CF'
    },
    { 
      href: '/informasi', 
      label: 'Tentang Kami', 
      shortLabel: 'About',
      icon: 'M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z',
      color: '#46B1CF'
    },
    { 
      href: '/#services', 
      label: 'Layanan', 
      shortLabel: 'Services',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      color: '#46B1CF'
    },
    { 
      href: '/#contact', 
      label: 'Kontak', 
      shortLabel: 'Contact',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: '#46B1CF'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId === 'home') {
              setActiveSection('home');
            } else if (sectionId === 'services') {
              setActiveSection('services');
            } else if (sectionId === 'contact') {
              setActiveSection('contact');
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const isActive = (href) => {
    if (pathname !== '/') {
      // If not on home page, only match exact pathname
      return pathname === href;
    }
    
    // On home page, check active section
    if (href === '/') {
      return activeSection === 'home';
    }
    if (href === '/#services') {
      return activeSection === 'services';
    }
    if (href === '/#contact') {
      return activeSection === 'contact';
    }
    
    return false;
  };

  return (
    <>
      {/* Desktop Header - Ultra Modern */}
      <header className="hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Floating Navigation Container */}
        <div className="container mx-auto px-6 lg:px-10 py-4">
          <div className={`relative rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ${
            isScrolled ? 'bg-white/70 backdrop-blur-md border-gray-300' : 'bg-white shadow-lg'
          }`}>
            {/* Navigation Content */}
            <div className="relative flex items-center justify-between px-3 py-2">
              {/* Logo Section - Enhanced */}
              <div className="flex-shrink-0">
                <NextLink href="/" className="group flex items-center gap-4 transition-all duration-300">
                  <div className="relative">
                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#46B1CF] to-[#E80035] rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-white p-1 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 w-10 h-10 flex items-center justify-center">
                      <Image
                        src="/logofix.png"
                        alt="Kota Cloud Logo"
                        width={34}
                        height={34}
                        className="relative z-10 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black bg-gradient-to-r from-[#46B1CF] to-[#E80035] bg-clip-text text-transparent leading-tight">
                      Kota Cloud
                    </span>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-[#46B1CF] transition-colors duration-300">
                      Digital Innovation Hub
                    </span>
                  </div>
                </NextLink>
              </div>

              {/* Navigation Menu - Ultra Modern */}
              <nav className="flex items-center space-x-2">
                {navLinks.map((link, index) => (
                  <div key={link.href} className="relative group">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-[#46B1CF] opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300 blur-sm"></div>
                    <NextLink
                      href={link.href}
                      className={`relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-white bg-[#46B1CF] shadow-lg shadow-[#46B1CF]/25 transform scale-105'
                          : 'text-gray-700 hover:text-white hover:bg-[#46B1CF] hover:shadow-lg'
                      }`}
                    >
                      <div className="relative">
                        <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                        </svg>
                        {isActive(link.href) && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#46B1CF] rounded-full animate-ping"></div>
                        )}
                      </div>
                      <span className="relative">
                        {link.label}
                        {isActive(link.href) && (
                          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/50 rounded-full"></div>
                        )}
                      </span>
                    </NextLink>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Header - Floating Logo */}
      <header className="lg:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative group">
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#46B1CF] to-[#E80035] rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
          
          {/* Logo Container */}
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-lg shadow-2xl border border-white/30 transition-all duration-300 p-3 inline-block">
            <NextLink href="/">
              <Image
                src="/logofix.png"
                alt="Kota Cloud Logo"
                width={44}
                height={44}
                className="transition-transform duration-300 block"
              />
            </NextLink>
          </div>
        </div>
      </header>

      {/* Bottom Navigation - Futuristic Glass Design */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[#46B1CF]/20 rounded-lg blur-lg"></div>
          
          {/* Navigation Container */}
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-lg border border-white/20 shadow-2xl p-2">
            <div className="flex items-center justify-around">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative group flex-1 max-w-14">
                  {/* Active Background */}
                  {isActive(link.href) && (
                    <div className="absolute inset-0 bg-[#46B1CF] rounded-xl opacity-90 shadow-lg"></div>
                  )}
                  
                  <NextLink
                    href={link.href}
                    className={`relative flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      isActive(link.href)
                        ? 'text-white transform scale-105'
                        : 'text-gray-600 hover:text-white hover:bg-[#46B1CF]'
                    }`}
                  >
                    <div className="relative mb-1">
                      <svg 
                        className={`h-5 w-5 transition-all duration-300 ${
                          isActive(link.href) ? '' : 'group-hover:rotate-12'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                      </svg>
                      {/* Active Indicator */}
                      {isActive(link.href) && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#46B1CF] rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <span className={`text-[10px] font-bold truncate transition-all duration-300 ${
                      isActive(link.href) ? 'text-white' : 'text-gray-700'
                    }`}>
                      {link.shortLabel}
                    </span>
                  </NextLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Safe Area */}
        <div className="h-safe-area-inset-bottom"></div>
      </nav>

      {/* Spacer untuk mobile */}
      <div className="lg:hidden h-20"></div>

      {/* CSS Animations */}
      <style jsx>{`        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}