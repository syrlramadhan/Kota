'use client';

import { useEffect, useState } from 'react';
import { Wifi, Cloud, TrendingUp, Shield, Zap, Users } from 'lucide-react';

// Enhanced floating decorative elements
const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #46B1CF, transparent)',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-32 left-16 w-40 h-40 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #E80035, transparent)',
          transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * 0.25}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'pulse 5s ease-in-out infinite',
          animationDelay: '1s'
        }}
      ></div>
      
      {/* Floating geometric shapes */}
      <div 
        className="absolute top-1/3 left-10 w-16 h-16 border-2 rounded-lg opacity-10"
        style={{
          borderColor: '#46B1CF',
          transform: `rotate(45deg) translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 7s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-16 w-12 h-12 border-2 rounded-full opacity-10"
        style={{
          borderColor: '#E80035',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s'
        }}
      ></div>
    </div>
  );
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: Wifi,
      title: 'Smart Connectivity',
      description: 'Teknologi captive portal yang mengubah Wi-Fi menjadi aset strategis bisnis'
    },
    {
      icon: Cloud,
      title: 'Cloud Ecosystem',
      description: 'Platform terintegrasi yang menghubungkan perangkat, pengguna, dan data dalam satu sistem'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Growth',
      description: 'Analitik mendalam dan otomatisasi pemasaran untuk mendorong pertumbuhan bisnis'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Infrastruktur aman dengan pemisahan jaringan dan proteksi kelas dunia'
    }
  ];

  return (
    <>
      <style jsx global>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-40px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fadeInRight {
          from { 
            opacity: 0; 
            transform: translateX(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ceo-badge {
          background: linear-gradient(135deg, #46B1CF 0%, #E80035 100%);
          box-shadow: 0 4px 15px rgba(70, 177, 207, 0.3);
        }

        .ceo-badge-shimmer {
          background: linear-gradient(90deg, 
            #46B1CF 0%, 
            #E80035 25%, 
            #46B1CF 50%, 
            #E80035 75%, 
            #46B1CF 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .image-glow {
          box-shadow: 0 0 40px rgba(70, 177, 207, 0.2);
        }
      `}</style>

      <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <FloatingElements />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
          
          {/* Main Content: Image + Description */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            
            {/* Left: CEO Image with Badge */}
            <div className={`${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="relative max-w-md mx-auto lg:mx-0">
                
                {/* CEO Badge - Positioned Above Image */}
                <div className="flex justify-center mb-6">
                  <div className="ceo-badge inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-xl">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-base tracking-wide">CEO KOTA CLOUD</span>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* CEO Image - Smaller Size */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden image-glow border-4 border-white">
                    <img 
                      src="/sahrul.png" 
                      alt="Syahrul Ramadhan - CEO Kota Cloud"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* CEO Name Card - Positioned Over Bottom of Image */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                      <h3 className="ceo-badge-shimmer text-xl font-extrabold text-center mb-1">
                        Syahrul Ramadhan
                      </h3>
                      {/* <p className="text-gray-600 text-center text-sm font-medium">
                        CEO
                      </p> */}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-30" 
                    style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-30" 
                    style={{ background: 'linear-gradient(135deg, #E80035, #b30028)' }}></div>
                </div>
              </div>
            </div>

            {/* Right: Brand Description */}
            <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 mb-8 shadow-md"
                style={{
                  background: 'linear-gradient(to right, #fff5f8, #e6f7fb)',
                  borderColor: '#E80035'
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#E80035' }}></div>
                <span className="font-bold text-sm tracking-wide" style={{ color: '#E80035' }}>TENTANG KOTA CLOUD</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Platform Wi-Fi Marketing Terpadu dengan Sistem Pemesanan Otomatis
              </h2>

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed text-justify mb-8">
                <p className="font-medium">
                  <strong className="text-gray-900 font-extrabold">Kota Cloud</strong> adalah platform solusi jaringan dan cloud computing yang merepresentasikan ekosistem digital terintegrasi seperti kota pintar di era teknologi modern.
                </p>
                <p>
                  Lebih dari sekadar konektivitas, Kota Cloud memberdayakan bisnis dengan <span className="font-semibold text-gray-800">analitik mendalam</span>, <span className="font-semibold text-gray-800">otomatisasi pemasaran</span>, dan <span className="font-semibold text-gray-800">keamanan enterprise-grade</span> yang mengubah setiap interaksi pelanggan menjadi peluang pertumbuhan.
                </p>
              </div>

            

              {/* CTA Button */}
              <button 
                className="inline-flex items-center justify-center px-10 py-5 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #3a8fa8, #2d92b3)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #46B1CF, #3a8fa8)'}
              >
                Pelajari Lebih Lanjut
                <Cloud className="w-6 h-6 ml-2" />
              </button>
            </div>
          </div>

        

        </div>
      </section>
    </>
  );
}