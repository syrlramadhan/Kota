'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const AccordionItem = ({ question, answer, index, openAccordion, toggleAccordion }) => {
  const isOpen = openAccordion === index;

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full py-5 px-5 text-left flex justify-between items-start group hover:bg-gray-50 transition-colors"
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="flex-shrink-0 mt-0.5">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold transition-colors ${
                isOpen ? 'bg-cyan-600 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
          </div>
          <h3
            className={`pr-4 text-sm md:text-base font-semibold transition-colors ${
              isOpen ? 'text-cyan-600' : 'text-gray-900'
            }`}
          >
            {question}
          </h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <ChevronDown
            className="w-5 h-5 transition-transform"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isOpen ? '#0891b2' : '#9ca3af' }}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 ml-10">
          <div className="pl-4 border-l border-cyan-100">
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  const faqs = [
    {
      question: 'Apa itu Kota Cloud?',
      answer:
        'Kota Cloud adalah platform solusi jaringan dan cloud computing yang menyatukan perangkat (router, server, aplikasi) dan pengguna dalam satu ekosistem digital yang terhubung. Kami menyediakan sistem berbasis captive portal yang secara otomatis mengarahkan pelanggan ke aplikasi web yang tepat seperti menu pemesanan, dashboard internal, atau portal pembelajaran sesuai kebutuhan bisnis Anda.',
    },
    {
      question: 'Bagaimana cara kerja teknologi captive portal Kota Cloud?',
      answer:
        'Ketika pelanggan terhubung ke Wi‑Fi, captive portal kami secara otomatis mengarahkan mereka ke splash page yang disesuaikan — bisa berupa halaman pemesanan, informasi promosi, atau formulir pengumpulan data. Sistem ini bekerja tanpa memerlukan unduhan aplikasi tambahan, memberikan pengalaman yang seamless bagi pengguna.',
    },
    {
      question: 'Industri apa saja yang cocok menggunakan Kota Cloud?',
      answer:
        'Kota Cloud dirancang untuk berbagai sektor: restoran dan kafe (menu digital otomatis), hotel (booking dan layanan), pusat perbelanjaan (peta interaktif dan promosi), institusi pendidikan (portal pembelajaran), fasilitas kesehatan (sistem informasi pasien), transportasi publik (iklan dan informasi), serta acara dan venue (registrasi dan informasi event).',
    },
    {
      question: 'Apa keunggulan Kota Cloud dibanding kompetitor?',
      answer:
        'Diferensiator utama kami adalah integrasi pemesanan langsung dalam satu sistem. Berbeda dengan platform Wi‑Fi marketing lain yang hanya fokus pengumpulan data, Kota Cloud memungkinkan pelanggan melakukan pembelian saat itu juga melalui captive portal, langsung mendorong revenue sambil tetap mengumpulkan data berharga untuk analisis bisnis.',
    },
    {
      question: 'Kapan layanan Kota Cloud akan tersedia?',
      answer:
        'Platform Kota Cloud sedang dalam tahap pengembangan dan testing intensif. Kami sedang mempersiapkan launching phase dengan beberapa pilot project di berbagai industri. Subscribe ke newsletter kami untuk mendapatkan update eksklusif tentang availability dan early access program.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 bg-white/70 backdrop-blur mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span className="text-xs font-medium text-cyan-700">Pertanyaan Umum</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Ada Pertanyaan?
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">Kami Punya Jawabannya</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan semua yang perlu Anda ketahui tentang platform Kota Cloud — dari teknologi captive portal hingga implementasi di berbagai industri.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur shadow-sm overflow-hidden">
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

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600 mb-4">Masih ada pertanyaan lain? Tim kami siap membantu Anda.</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors">
              Hubungi Kami
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}