'use client';

import { Link } from 'react-scroll';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#F9FAFB] to-[#E5E7EB] text-[#0D1B2A] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle animated line accent */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#0D89CA] to-transparent opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate__animated animate__fadeInDown">
          Launch Your Future
        </h2>
        <p
          className="text-lg md:text-xl text-[#4B5563] mb-10 max-w-3xl mx-auto animate__animated animate__fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          Transform your business with Kota Cloud’s cutting-edge connectivity solutions.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="relative inline-block px-10 py-4 bg-[#0D89CA] text-white text-lg font-semibold rounded-full hover:bg-[#3ABEF9] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,190,249,0.5)] animate__animated animate__pulse animate__infinite animate__slow cursor-pointer"
        >
          Start Now
          <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
        </Link>
      </div>
    </section>
  );
}