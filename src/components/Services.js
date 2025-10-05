'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Wifi, Cloud, Shield } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const servicesData = [
    {
      icon: Wifi,
      title: 'Smart Wi-Fi for Business',
      description: 'Turn Wi-Fi into a promotional tool! Every connected customer sees a custom page for ordering food, drinks, or services.',
    },
    {
      icon: Shield,
      title: 'Guaranteed Security',
      description: 'Customer networks are isolated from your business systems, protected with strong encryption for data security and compliance.',
    },
    {
      icon: Cloud,
      title: 'On-Premise Cloud System',
      description: 'Run applications directly from our device without external internet. The system is fast, reliable, and works offline.',
    },
  ];

  return (
    <section
      id="services"
      className={`min-h-screen bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full">
                <span className="text-sm font-semibold text-cyan-600 tracking-wide uppercase">Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Digital Transformation
                <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-[#46B1CF] bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                Smart Wi-Fi solutions that turn every connection into a business opportunity. Boost customer engagement and optimize operations with cutting-edge cloud technology.
              </p>
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div className="space-y-4 scale-95 mt-8 lg:mt-8 lg:ml-16">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-3 md:p-4 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-[#46B1CF] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}