'use client';

import { Link } from 'react-scroll';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__fadeIn">
          Ready to Simplify Your Business? 
        </h2>
        <p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate__animated animate__fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Unlock seamless connectivity with Kota Cloud’s IoT-powered web solutions.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cta-button inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg animate__animated animate__bounceIn cursor-pointer"
          style={{ animationDelay: '0.4s' }}
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}