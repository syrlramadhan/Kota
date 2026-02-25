'use client';

import { Cloud, Shield, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const servicesData = [
    {
      icon: Wifi,
      title: 'Smart Wi-Fi untuk Bisnis',
      description: 'Ubah Wi-Fi menjadi alat promosi! Setiap pelanggan yang terhubung akan melihat halaman khusus untuk memesan makanan, minuman, atau layanan.',
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Jaringan pelanggan terisolasi dari sistem bisnis Anda, dilindungi dengan enkripsi kuat untuk keamanan data dan kepatuhan.',
    },
    {
      icon: Cloud,
      title: 'Sistem Cloud On-Premise',
      description: 'Jalankan aplikasi langsung dari perangkat kami tanpa internet eksternal. Sistem cepat, andal, dan bekerja secara offline.',
    },
  ];

  return (
    <section
      id="services"
      className={`bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full">
                <span className="text-sm font-semibold text-cyan-600 tracking-wide">Layanan Kami</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                Transformasi Digital
                <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-[#46B1CF] bg-clip-text text-transparent">
                  Dimulai dari Sini
                </span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Solusi Smart Wi-Fi yang mengubah setiap koneksi menjadi peluang bisnis. Tingkatkan keterlibatan pelanggan dan optimalkan operasi dengan teknologi cloud terdepan.
              </p>
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div className="space-y-4 scale-95 mt-8 lg:mt-8 lg:ml-16">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-3 md:p-4 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-[#46B1CF] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}