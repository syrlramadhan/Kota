'use client';

import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Wifi, Cloud, ShoppingBag, BarChart, Shield, Users, Signal } from 'lucide-react';

// Floating decorative elements
const FloatingMockups = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icon Circles - Kanan */}
      <div 
        className="absolute top-20 right-12 sm:right-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(to bottom right, #46B1CF, #3a8fa8)',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 6s ease-in-out infinite'
        }}
      >
        <Wifi className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
      </div>

      <div 
        className="absolute top-1/3 right-8 sm:right-16 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: 'linear-gradient(to bottom right, #E80035, #b30028)',
          transform: `translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '1s'
        }}
      >
        <Cloud className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
      </div>

      <div 
        className="absolute top-2/3 right-16 sm:right-24 w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: 'linear-gradient(to bottom right, #46B1CF, #3090ad)',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s'
        }}
      >
        <ShoppingBag className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
      </div>

      {/* Floating Icon Circles - Kiri */}
      <div 
        className="absolute top-24 left-8 sm:left-16 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: 'linear-gradient(to bottom right, #46B1CF, #2d92b3)',
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '0.5s'
        }}
      >
        <BarChart className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
      </div>

      <div 
        className="absolute top-1/2 left-12 sm:left-20 w-16 sm:w-18 h-16 sm:h-18 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(to bottom right, #E80035, #a8002a)',
          transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * 0.25}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 6.5s ease-in-out infinite',
          animationDelay: '1.5s'
        }}
      >
        <Shield className="w-8 sm:w-9 h-8 sm:h-9 text-white" />
      </div>

      <div 
        className="absolute bottom-32 left-8 sm:left-12 w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: 'linear-gradient(to bottom right, #46B1CF, #3a8fa8)',
          transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2.5s'
        }}
      >
        <Users className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
      </div>

      {/* Glowing Orbs */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full opacity-20 blur-3xl"
        style={{
          background: '#46B1CF',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/4 w-40 sm:w-48 h-40 sm:h-48 rounded-full opacity-20 blur-3xl"
        style={{
          background: '#E80035',
          animation: 'pulse 5s ease-in-out infinite',
          animationDelay: '1s'
        }}
      ></div>

      {/* Decorative Lines */}
      <div 
        className="absolute top-1/3 right-1/3 w-24 sm:w-32 h-0.5 opacity-40"
        style={{
          background: 'linear-gradient(to right, transparent, #46B1CF, transparent)',
          transform: `rotate(45deg) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 left-1/3 w-20 sm:w-28 h-0.5 opacity-40"
        style={{
          background: 'linear-gradient(to right, transparent, #E80035, transparent)',
          transform: `rotate(-45deg) translate(${mousePosition.x * -0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>

      {/* Small floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{ background: '#46B1CF' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E80035', animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full animate-pulse" style={{ background: '#46B1CF', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full animate-pulse" style={{ background: '#E80035', animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-pulse" style={{ background: '#46B1CF', animationDelay: '2s' }}></div>
    </div>
  );
};

export default function MinimalistHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-white font-inter"
    >
      <FloatingMockups />

      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-48 sm:w-56 h-48 sm:h-56 border rounded-full" style={{ borderColor: '#46B1CF' }}></div>
        <div className="absolute bottom-24 sm:bottom-32 right-16 sm:right-20 w-32 sm:w-40 h-32 sm:h-40 border border-gray-100 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 border rounded-full" style={{ borderColor: '#46B1CF' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top announcement banner */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(to right, #e0f7fa, #fff)',
              borderColor: '#46B1CF'
            }}
          >
            <span className="font-medium text-sm" style={{ color: '#46B1CF' }}>Launch of Kota Cloud Platform - Explore Now</span>
            <Cloud className="w-3.5 h-3.5" style={{ color: '#46B1CF' }} />
          </div>

          {/* Main headline */}
          <div className={`space-y-3 mb-6 ${isVisible ? 'animate-fadeIn delay-100' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900">Empower Your Business</span>
              <br />
              <span className="text-gray-900">with Seamless</span>{' '}
              <span className="relative inline-block">
                <span className="text-gray-900">Connectivity and Ordering</span>
                <div className="absolute -bottom-1.5 left-0 right-0 h-2 opacity-30 rounded-full" style={{ background: 'linear-gradient(to right, #46B1CF, #3a8fa8)' }}></div>
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`max-w-2xl mx-auto mb-8 ${isVisible ? 'animate-fadeIn delay-200' : 'opacity-0'}`}>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Transform your operations with Kota Cloud's integrated Wi-Fi and cloud solutions, designed to boost efficiency, gather valuable insights, and drive business growth across industries.
            </p>
          </div>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ background: 'linear-gradient(to right, #46B1CF, #3a8fa8)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #3a8fa8, #2d92b3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #46B1CF, #3a8fa8)'}
            >
              Start Your Journey
              <Wifi className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Link>
          
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 640px) {
          h1 { font-size: 2rem !important; }
          .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}