'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Kota Cloud?',
      answer: 'Kota Cloud provides smart IoT routers and custom web applications, seamlessly connecting businesses to tailored digital solutions.',
    },
    {
      question: 'How secure is your technology?',
      answer: 'Our IoT routers employ robust encryption and real-time monitoring to ensure secure and reliable connectivity.',
    },
    {
      question: 'When will the routers be available?',
      answer: 'Our smart IoT routers are coming soon. Sign up to receive the latest updates.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate__animated animate__fadeIn">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
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
      </div>
    </section>
  );
}