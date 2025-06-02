'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { Link } from 'react-scroll'; // Tambahkan impor ini

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Kota Cloud?',
      answer: 'Kota Cloud weaves visionary devices with artful web applications, forging seamless pathways to unparalleled digital experiences.',
    },
    {
      question: 'How secure is your technology?',
      answer: 'Our devices harness cutting-edge encryption and relentless monitoring for unmatched security and reliability.',
    },
    {
      question: 'When will the devices be available?',
      answer: 'Our revolutionary devices are on the horizon. Sign up to uncover the latest.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#f9fafb] relative overflow-hidden">
      {/* Latar Belakang Dekoratif */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#0D89CA"
            fillOpacity="0.1"
            d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,186.7C672,171,768,149,864,149.3C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Judul dengan Garis Dekoratif */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 animate__animated animate__fadeInDown">
            Frequently Asked Questions
          </h2>
          <div className="w-32 h-1 bg-[#0D89CA] mx-auto glowing-line animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-gray-600 text-lg mt-4 max-w-xl mx-auto animate__animated animate__fadeIn" style={{ animationDelay: '0.5s' }}>
            Unveil the mysteries behind Kota Cloud’s transformative solutions.
          </p>
        </div>

        {/* Daftar FAQ */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                index={index}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
              />
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}