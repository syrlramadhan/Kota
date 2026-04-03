'use client';

import { useEffect, useState } from 'react';
import { Wifi, Cloud, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: Wifi,
      title: 'Smart WiFi',
      description: 'A captive portal that turns WiFi into a strategic business asset'
    },
    {
      icon: Cloud,
      title: 'Cloud Platform',
      description: 'An integrated system for devices, users, and data'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'In-depth insights to drive business growth'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure infrastructure with world-class protection'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-rose-100/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-200 bg-rose-50 mb-4">
            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
            <span className="text-xs font-medium text-rose-600">About Kota Cloud</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Integrated WiFi Marketing &
            <br />
            <span className="text-cyan-600">Cloud Computing Platform</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kota Cloud offers integrated connectivity solutions that empower businesses with in-depth analytics, marketing automation, and enterprise-grade security.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-5 bg-white rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-3 group-hover:bg-cyan-100 transition-colors">
                <feature.icon className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-200">
            Learn More
            <Cloud className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}