'use client';

import { useEffect, useState, useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Modal from '@/components/Modal';

export default function Home() {
  const [modal, setModal] = useState({ isOpen: false, title: '', message: '' });
  const typingRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [shakeFields, setShakeFields] = useState({ name: false, email: false, message: false });

  useEffect(() => {
    const typingText = typingRef.current;
    const text = 'Secret Currents Kota Cloud';
    let index = 0;

    function type() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      } else {
        typingText.style.borderRight = 'none';
        setTimeout(() => {
          typingText.textContent = '';
          index = 0;
          typingText.style.borderRight = '2px solid #1f2937';
          setTimeout(type, 500);
        }, 2000);
      }
    }

    setTimeout(type, 500);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      setModal({
        isOpen: true,
        title: 'Message Sent!',
        message: 'Thank you for your message. We will respond soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setShakeFields({ name: false, email: false, message: false });
    } else {
      setModal({
        isOpen: true,
        title: 'Error',
        message: 'Please complete all fields.',
      });
      setShakeFields({
        name: !name,
        email: !email,
        message: !message,
      });
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <Hero typingRef={typingRef} />
      <About />
      <Services />
      <Team />
      <FAQ />
      <CTA />
      <Contact
        formData={formData}
        shakeFields={shakeFields}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}