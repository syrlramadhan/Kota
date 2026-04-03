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
      question: 'What is Kota Cloud??',
      answer:
        'Kota Cloud is a network and cloud computing solutions platform that brings together devices (routers, servers, applications) and users within a single connected digital ecosystem. We provide a captive portal-based system that automatically directs customers to the appropriate web applications such as ordering menus, internal dashboards, or learning portals based on your business needs.',
    },
    {
      question: 'How does Kota Cloud’s captive portal technology work?',
      answer:
        'When customers connect to Wi-Fi, our captive portal automatically redirects them to a customized splash page which could be a booking page, promotional information, or a data collection form. The system works without requiring any additional app downloads, providing a seamless experience for users.',
    },
    {
      question: 'Which industries are best suited for Kota Cloud?',
      answer:
        'Kota Cloud is designed for a variety of sectors: restaurants and cafes (automated digital menus), hotels (bookings and services), shopping centers (interactive maps and promotions), educational institutions (learning portals), healthcare facilities (patient information systems), public transportation (advertisements and information), and events and venues (registration and event information).',
    },
    {
      question: 'What are Kota Cloud’s advantages over its competitors?',
      answer:
        'Our key differentiator is the integration of direct ordering into a single system. Unlike other Wi-Fi marketing platforms that focus solely on data collection, Kota Cloud enables customers to make purchases on the spot via a captive portal, driving revenue immediately while still collecting valuable data for business analysis.',
    },
    {
      question: 'When will the Kota Cloud service be available?',
      answer:
        'The Kota Cloud platform is currently undergoing intensive development and testing. We are preparing for the launch phase with several pilot projects across various industries. Subscribe to our newsletter to receive exclusive updates on availability and early access programs.',
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
            <span className="text-xs font-medium text-cyan-700">FAQ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Have a Question?
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">We Have the Answer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn everything you need to know about the Kota Cloud platform from captive portal technology to implementations across various industries.
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
            <p className="text-sm text-gray-600 mb-4">Do you have any other questions? Our team is here to help.</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors">
              Contact Us
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