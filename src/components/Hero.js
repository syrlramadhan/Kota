'use client';

import { Link } from 'react-scroll';
import { useEffect, useRef } from 'react';

export default function Hero({ typingRef }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Efek parallax ringan
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#f9fafb]"
    >
      <div className="text-center max-w-4xl mx-4 hero-text-container z-10">
        {/* Garis Dekoratif Atas dengan Efek Glowing */}
        <div className="w-24 h-1 bg-[#0D89CA] mx-auto mb-6 animate__animated animate__fadeInDown glowing-line"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wide animate__animated animate__zoomIn">
          Kota Cloud
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D89CA] mb-6 animate__animated animate__zoomIn" style={{ animationDelay: '0.3s' }}>
          <span className="typing-text glowing-text" ref={typingRef}></span>
        </h2>
        <p
          className="text-base md:text-xl text-gray-600 mb-8 max-w-lg mx-auto animate__animated animate__fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          Secret Currents Kota Cloud
        </p>
        <div className="flex justify-center gap-4 animate__animated animate__fadeInUp" style={{ animationDelay: '1s' }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cta-button relative inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg cursor-pointer overflow-hidden transition-transform transform hover:scale-105"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-[#0D89CA] opacity-0 hover:opacity-50 transition-opacity ripple-effect"></span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="inline-block px-6 py-3 text-[#0D89CA] border-2 border-[#0D89CA] text-lg font-semibold rounded-lg hover:bg-[#0D89CA] hover:text-white transition-colors cursor-pointer"
          >
            Learn More
          </Link>
        </div>
        {/* Garis Dekoratif Bawah dengan Efek Glowing */}
        <div className="w-24 h-1 bg-[#0D89CA] mx-auto mt-12 animate__animated animate__fadeInUp glowing-line"></div>
      </div>
    </section>
  );
}