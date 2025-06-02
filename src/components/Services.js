'use client';

import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaNetworkWired, FaLaptopCode, FaHandsHelping } from 'react-icons/fa'; // Ikon dari react-icons (opsional)

export default function Services() {
  useEffect(() => {
    const sections = document.querySelectorAll('#services .card');
    sections.forEach((section, index) => {
      section.classList.add('visible');
    });
  }, []);

  return (
    <section id="services" className="py-24 bg-[#f9fafb] relative overflow-hidden">
      {/* Garis Dekoratif Kiri dan Kanan */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#0D89CA] opacity-10"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-[#0D89CA] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 animate__animated animate__fadeInDown">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card p-8 text-center rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <FaNetworkWired className="text-4xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Intelligent Connectivity</h3>
            <p className="text-gray-600 leading-relaxed">
              Visionary devices linking businesses directly to tailored web applications.{' '}
              <span className="text-primary font-semibold">Available Soon!</span>
            </p>
          </div>
          <div className="card p-8 text-center rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-6">
              <FaLaptopCode className="text-4xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Web Innovation</h3>
            <p className="text-gray-600 leading-relaxed">Crafted web applications designed to redefine your business operations.</p>
          </div>
          <div className="card p-8 text-center rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center mb-6">
              <FaHandsHelping className="text-4xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Consulting Mastery</h3>
            <p className="text-gray-600 leading-relaxed">Expert guidance to unleash the power of your digital connections. </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cta-button inline-block px-10 py-4 text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all animate__animated animate__bounceIn"
            style={{ animationDelay: '0.8s' }}
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}