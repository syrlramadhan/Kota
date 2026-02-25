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
    },
    { 
      href: '/informasi', 
      label: 'Tentang Kami', 
      shortLabel: 'About',
    },
    { 
      href: '/#services', 
      label: 'Layanan', 
      shortLabel: 'Services',
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
      {/* Desktop Header - Simple & Clean */}
      <header className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        {/* Navigation Content */}
        <div className="container mx-auto px-6 lg:px-10">
          <div className="relative flex items-center justify-between py-4">
            {/* Logo Section - Left */}
            <div className="flex-shrink-0">
              <NextLink href="/" className="group flex items-center gap-3 transition-all duration-300">
                <Image
                  src="/logofix.png"
                  alt="Kota Cloud Logo"
                  width={60}
                  height={60}
                  className="transition-transform duration-300"
                />
              </NextLink>
            </div>

            {/* Navigation Menu - Center */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              {navLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-normal transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-[#46B1CF]'
                      : isScrolled ? 'text-gray-700 hover:text-[#46B1CF]' : 'text-gray-700 hover:text-[#46B1CF]'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#46B1CF] rounded-full"></div>
                  )}
                </NextLink>
              ))}
            </nav>

            {/* Contact Button - Right */}
            <div className="flex-shrink-0">
              <NextLink
                href="/#contact"
                className="px-5 py-2.5 bg-[#46B1CF] text-white text-sm font-normal rounded-lg hover:bg-[#3a9ab5] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Hubungi Kami
              </NextLink>
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
                width={60}
                height={60}
                className="transition-transform duration-300 block"
              />
            </NextLink>
          </div>
        </div>
      </header>

      {/* Bottom Navigation - Simple Design */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="relative">
          {/* Navigation Container */}
          <div className="relative bg-white backdrop-blur-2xl rounded-lg border border-gray-200 shadow-xl p-2">
            <div className="flex items-center justify-around">
              {navLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-[#46B1CF]'
                      : 'text-gray-600 hover:text-[#46B1CF]'
                  }`}
                >
                  <span className={`text-xs font-semibold transition-all duration-300`}>
                    {link.shortLabel}
                  </span>
                  {isActive(link.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#46B1CF] rounded-full"></div>
                  )}
                </NextLink>
              ))}
              {/* Contact Button for Mobile */}
              <NextLink
                href="/#contact"
                className="px-3 py-2 bg-[#46B1CF] text-white text-xs font-semibold rounded-lg"
              >
                Kontak
              </NextLink>
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