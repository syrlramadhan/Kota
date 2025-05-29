'use client';

import { Link } from 'react-scroll';

export default function Hero({ typingRef }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-2xl mx-4 hero-text-container">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Kota Cloud
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[#0D89CA] mb-8">
          <span className="typing-text" ref={typingRef}></span>
        </h2>
        <p
          className="text-md md:text-lg text-gray-600 mb-8 max-w-md mx-auto animate__animated animate__fadeIn"
          style={{ animationDelay: '2s' }}
        >
          Powering business with IoT-web solutions.

        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cta-button inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg animate__animated animate__bounceIn cursor-pointer"
          style={{ animationDelay: '2.5s' }}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}