'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaNetworkWired, FaLaptopCode, FaHandsHelping, FaTimes } from 'react-icons/fa';

export default function Services() {
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('#services .card');
    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      setTimeout(() => {
        section.style.transition = 'all 0.5s ease-in-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, []);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const servicesData = [
    {
      icon: <FaNetworkWired className="text-5xl text-primary" />,
      title: 'Instant App Access',
      shortDesc: 'Connect to Wi-Fi and get instantly redirected to the app that matters. No setup, no delay',
      longDesc: 'With Instant App Access, every device that connects to the router is automatically routed to the correct web application. Customers see digital menus. Staff get access to dashboards. Students enter learning platforms all without typing links or asking for help. It’s seamless, smart, and built for real-world efficiency.',
    },
    {
      icon: <FaLaptopCode className="text-5xl text-primary" />,
      title: 'Built-in Web System',
      shortDesc: 'Your essential tools run directly from the router. Even when offline.',
      longDesc: 'The router is powered by a Linux-based system with embedded hardware like Banana Pi. Applications like ordering systems, dashboards, or learning platforms are hosted locally inside the router, so they’re always accessible. No internet? No problem. Your operations continue without interruption.',
    },
    {
      icon: <FaHandsHelping className="text-5xl text-primary" />,
      title: 'Industry-Ready Deployment ',
      shortDesc: 'Preconfigured to support restaurants, schools, offices, and more.',
      longDesc: 'Designed for plug-and-play simplicity, this router adapts to your business instantly. Whether it’s a café with digital ordering, a school with an e-learning portal, or an office with internal tools — everything is set up and ready to run. Just power it on and watch your space go smart.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-[#f9fafb] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#0D89CA] opacity-20"></div>
      <div className="absolute top-0 right-0 w-2 h-full bg-[#0D89CA] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 tracking-tight">
          Our Product
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="card bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">{service.shortDesc}</p>
              <button
                onClick={() => openPopup(service)}
                className="mx-auto block px-6 py-2 text-primary font-medium rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                More
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block px-10 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all"
          >
            Explore More
          </Link>
        </div>
      </div>

      {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999999]">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full mx-4 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="flex justify-center mb-6">{popupContent.icon}</div>
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">{popupContent.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed text-center">{popupContent.longDesc}</p>
            <button
              onClick={closePopup}
              className="mt-6 mx-auto block px-6 py-2 text-primary font-medium rounded-full border border-primary hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}