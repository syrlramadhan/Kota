'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { Link } from 'react-scroll';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Kota Cloud?',
      answer: 'Kota Cloud is a smart router-based system that automatically directs connected devices to the right web applications such as ordering menus, internal dashboards, or learning portals based on your business needs.',
    },
    {
      question: 'How secure is your technology?',
      answer: 'Our devices run on a Linux-based system and use secure, encrypted communication protocols. Because applications are hosted locally, your data stays within your environment, reducing external exposure.',
    },
    {
      question: 'Who is Kota Cloud designed for?',
      answer: 'Kota Cloud is built for businesses, schools, institutions, and public services that want to simplify user access to specific tools — like digital menus, class portals, or internal systems — without requiring users to search, download, or log in manually.',
    },
    {
      question: 'When will the devices be available?',
      answer: 'Our smart devices are currently in development and testing. Subscribe to our updates to be the first to know when we launch.',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#0D89CA"
            d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,170.7C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            Discover how Kota Cloud is redefining connectivity for startups and beyond.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0D89CA] to-[#3b82f6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#0D89CA]/50"
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                index={index}
                openAccordion={openAccordion}
                toggleAccordion={toggleAccordion}
                className="p-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}