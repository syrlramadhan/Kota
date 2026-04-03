'use client';

import { ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { DotScreenShader } from '@/components/ui/dot-shader-background';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50" />
      
      {/* Organic gradient blobs - mimicking neural network effect */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-cyan-200/40 via-teal-100/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="pointer-events-none absolute top-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-sky-200/30 via-cyan-100/20 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-200/30 via-cyan-100/20 to-transparent blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-sky-100/40 via-cyan-50/30 to-transparent blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
      
      {/* Animated Dot Shader Background - On top for interactivity */}
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      
      {/* Gradient overlay untuk transisi halus ke section berikutnya */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 pointer-events-none">
        <div className="text-center">
          {/* Small badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 backdrop-blur border border-gray-200 rounded-full mb-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Zap className="w-4 h-4" style={{ color: '#46B1CF' }} />
            <span className="text-xs font-semibold text-gray-700">Smart Network Solutions</span>
          </div>

          {/* Headline */}
          <h1
            className={`mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Simple and Effective
            {' '}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-9 leading-relaxed transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Integrated Wi-Fi and cloud solutions to drive efficiency, enhance the customer experience, and accelerate your business growth.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center items-center transition-all duration-500 delay-150 pointer-events-auto ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white text-sm font-normal shadow-sm hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-200 cursor-pointer transition-all"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-700 text-sm font-normal border border-gray-200 hover:border-gray-300 hover:shadow-md cursor-pointer transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Compact stats */}
          <div
            className={`mt-12 grid grid-cols-3 max-w-md mx-auto items-center border border-gray-100 rounded-xl bg-white/60 backdrop-blur p-3 text-center text-xs text-gray-600 transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="px-2 py-1">500+ bisnis</div>
            <div className="px-2 py-1 border-l border-r border-gray-100">99.9% uptime</div>
            <div className="px-2 py-1">Dukungan 24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
}