'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Zap } from 'lucide-react';

const AccordionItem = ({ question, answer, index, openAccordion, toggleAccordion }) => {
  const isOpen = openAccordion === index;
  
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full py-7 px-8 text-left flex justify-between items-start group hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent transition-all duration-300"
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0 mt-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{ 
                background: isOpen ? 'linear-gradient(135deg, #46B1CF, #3a8fa8)' : '#f3f4f6'
              }}
            >
              <span className="text-sm font-bold transition-colors duration-300"
                style={{ color: isOpen ? '#ffffff' : '#6b7280' }}
              >
                {index + 1}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 pr-4"
            style={{ color: isOpen ? '#46B1CF' : '#111827' }}
          >
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <ChevronDown 
            className="w-6 h-6 transition-all duration-300"
            style={{ 
              color: isOpen ? '#46B1CF' : '#9ca3af',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-7 ml-12">
          <div className="pl-4 border-l-2" style={{ borderColor: '#46B1CF' }}>
            <p className="text-gray-600 leading-relaxed text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(0); // Default first item open

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apa itu Kota Cloud?',
      answer: 'Kota Cloud adalah platform solusi jaringan dan cloud computing yang menyatukan perangkat (router, server, aplikasi) dan pengguna dalam satu ekosistem digital yang terhubung. Kami menyediakan sistem berbasis captive portal yang secara otomatis mengarahkan pelanggan ke aplikasi web yang tepat seperti menu pemesanan, dashboard internal, atau portal pembelajaran sesuai kebutuhan bisnis Anda.',
    },
    {
      question: 'Bagaimana cara kerja teknologi captive portal Kota Cloud?',
      answer: 'Ketika pelanggan terhubung ke Wi-Fi, captive portal kami secara otomatis mengarahkan mereka ke splash page yang disesuaikan - bisa berupa halaman pemesanan, informasi promosi, atau formulir pengumpulan data. Sistem ini bekerja tanpa memerlukan unduhan aplikasi tambahan, memberikan pengalaman yang seamless bagi pengguna.',
    },
    {
      question: 'Industri apa saja yang cocok menggunakan Kota Cloud?',
      answer: 'Kota Cloud dirancang untuk berbagai sektor: restoran dan kafe (menu digital otomatis), hotel (booking dan layanan), pusat perbelanjaan (peta interaktif dan promosi), institusi pendidikan (portal pembelajaran), fasilitas kesehatan (sistem informasi pasien), transportasi publik (iklan dan informasi), serta acara dan venue (registrasi dan informasi event).',
    },
    {
      question: 'Apa keunggulan Kota Cloud dibanding kompetitor?',
      answer: 'Diferensiator utama kami adalah integrasi pemesanan langsung dalam satu sistem. Berbeda dengan platform Wi-Fi marketing lain yang hanya fokus pengumpulan data, Kota Cloud memungkinkan pelanggan melakukan pembelian saat itu juga melalui captive portal, langsung mendorong revenue sambil tetap mengumpulkan data berharga untuk analisis bisnis.',
    },
    {
      question: 'Kapan layanan Kota Cloud akan tersedia?',
      answer: 'Platform Kota Cloud sedang dalam tahap pengembangan dan testing intensif. Kami sedang mempersiapkan launching phase dengan beberapa pilot project di berbagai industri. Subscribe ke newsletter kami untuk mendapatkan update eksklusif tentang availability dan early access program.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #46B1CF, transparent)' }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #E80035, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border-2 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #fff5f8, #e6f7fb)',
              borderColor: '#46B1CF'
            }}
          >
            <HelpCircle className="w-5 h-5" style={{ color: '#46B1CF' }} />
            <span className="font-bold text-sm tracking-wide" style={{ color: '#46B1CF' }}>FREQUENTLY ASKED QUESTIONS</span>
            <Zap className="w-5 h-5" style={{ color: '#E80035' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Ada Pertanyaan?
            <br />
            <span className="bg-gradient-to-r from-[#46B1CF] to-[#3a8fa8] bg-clip-text text-transparent">
              Kami Punya Jawabannya
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Temukan semua yang perlu Anda ketahui tentang platform Kota Cloud - 
            dari teknologi captive portal hingga implementasi di berbagai industri
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-20 h-1 rounded-full" style={{ background: '#46B1CF' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#E80035' }}></div>
            <div className="w-20 h-1 rounded-full" style={{ background: '#E80035' }}></div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-2 overflow-hidden"
            style={{ borderColor: '#f3f4f6' }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Masih ada pertanyaan lain? Tim kami siap membantu Anda
            </p>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #3a8fa8, #2d92b3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #46B1CF, #3a8fa8)'}
            >
              Hubungi Kami
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}