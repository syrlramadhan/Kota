'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ formData, shakeFields, handleFormSubmit, handleInputChange }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      handleFormSubmit(e);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_t1l2699',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_thg1d55',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'PG8UlB83rv3KBwZDr'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          handleInputChange({ target: { id: 'name', value: '' } });
          handleInputChange({ target: { id: 'email', value: '' } });
          handleInputChange({ target: { id: 'message', value: '' } });
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#F9FAFB] text-[#0D1B2A] overflow-hidden"
    >
      {/* Animated background wave */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,137,202,0.1),rgba(59,190,249,0.05),rgba(13,137,202,0.1))] animate-[wave_12s_ease_infinite] bg-[length:200%_200%] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-12 animate__animated animate__zoomIn">
          Start the Conversation
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="animate__animated animate__slideInLeft" style={{ animationDelay: '0.2s' }}>
            <form ref={formRef} className="space-y-6 flex flex-col">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D89CA] focus:shadow-[0_0_8px_rgba(13,137,202,0.3)] transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    shakeFields.name ? 'animate__animated animate__shakeX' : ''
                  }`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-[#0D89CA] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D89CA] focus:shadow-[0_0_8px_rgba(13,137,202,0.3)] transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    shakeFields.email ? 'animate__animated animate__shakeX' : ''
                  }`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4B5563] group-focus-within:text-[#0D89CA] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
              </div>
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  className={`w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0D89CA] focus:shadow-[0_0_8px_rgba(13,137,202,0.3)] transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    shakeFields.message ? 'animate__animated animate__shakeX' : ''
                  }`}
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <svg
                  className="absolute right-4 top-4 w-5 h-5 text-[#4B5563] group-focus-within:text-[#0D89CA] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-[#0D89CA] to-[#3ABEF9] text-white font-semibold rounded-lg hover:from-[#3ABEF9] hover:to-[#0D89CA] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,190,249,0.5)] animate__animated animate__pulse animate__infinite animate__slow"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="animate__animated animate__slideInRight" style={{ animationDelay: '0.4s' }}>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-extrabold text-[#0D1B2A] mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 group hover:text-[#0D89CA] transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2 text-[#0D89CA] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  </svg>
                  <span>admin@kotacloud.com</span>
                </p>
                <p className="flex items-center text-gray-600 group hover:text-[#0D89CA] transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2 text-[#0D89CA] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+62 812-8871-9249</span>
                </p>
                <p className="flex items-center text-gray-600 group hover:text-[#0D89CA] transition-colors duration-300">
                  <svg className="w-5 h-5 mr-2 text-[#0D89CA] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span>Jl. Mon. Emmy Saelan III, Makassar</span>
                </p>
              </div>
              <div className="h-64 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1750308631270!6m8!1m7!1samvkcRjfs2zoIa_3y2-2gw!2m2!1d-5.176820337970915!2d119.4501674742598!3f97.10036459205142!4f-1.1303750972096651!5f1.3800324185612702"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS keyframes for wave animation */}
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}