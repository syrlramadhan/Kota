'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Wifi, TrendingUp, Shield, Cloud, Zap, ArrowRight } from 'lucide-react';

export default function BrandSection() {
  const features = [
    { 
      icon: Wifi,
      title: "Smart Connectivity", 
      description: "Teknologi captive portal yang mengubah Wi-Fi menjadi aset strategis bisnis Anda",
      color: "#46B1CF"
    },
    { 
      icon: TrendingUp,
      title: "Data-Driven Growth", 
      description: "Kumpulkan insights berharga untuk analitik dan kampanye marketing yang tepat sasaran",
      color: "#E80035"
    },
    {
      icon: Shield,
      title: "Secure & Scalable", 
      description: "Infrastruktur aman dengan pemisahan jaringan dan proteksi enterprise-grade",
      color: "#46B1CF"
    },
    {
      icon: Cloud,
      title: "Seamless Integration", 
      description: "Platform terintegrasi yang menghubungkan perangkat dan pengguna dalam satu ekosistem",
      color: "#E80035"
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #46B1CF, transparent)' }}></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #E80035, transparent)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #46B1CF, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 border-2 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #fff5f8, #e6f7fb)',
              borderColor: '#46B1CF'
            }}
          >
            <Zap className="w-5 h-5" style={{ color: '#46B1CF' }} />
            <span className="font-bold text-sm tracking-wide" style={{ color: '#46B1CF' }}>
              PLATFORM INOVATIF UNTUK BISNIS MASA DEPAN
            </span>
          </div>

          {/* Brand Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-gray-900">Kota Cloud:</span>
            <br />
            <span className="bg-gradient-to-r from-[#46B1CF] to-[#3a8fa8] bg-clip-text text-transparent">
              Connecting Your Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 font-semibold max-w-4xl mx-auto mb-8">
            Memberdayakan Bisnis dengan Konektivitas Cerdas dan Solusi Cloud Terintegrasi
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-24 h-1 rounded-full" style={{ background: '#46B1CF' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#E80035' }}></div>
            <div className="w-24 h-1 rounded-full" style={{ background: '#E80035' }}></div>
          </div>
        </motion.div>

        {/* Brand Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="text-justify">
                <strong className="font-extrabold text-gray-900">Kota Cloud</strong> adalah platform perintis yang mengubah cara bisnis terhubung dengan pelanggan. Dengan mengintegrasikan jaringan canggih dan cloud computing, kami menciptakan ekosistem digital yang seamless—seperti kota pintar di era digital. Solusi kami menggabungkan <span className="font-bold" style={{ color: '#46B1CF' }}>sistem pemesanan intuitif</span> dengan <span className="font-bold" style={{ color: '#E80035' }}>alat Wi-Fi marketing yang powerful</span>, memungkinkan bisnis mendorong revenue langsung dan pertumbuhan jangka panjang melalui insights berbasis data.
              </p>
              <p className="text-justify">
                Visi kami adalah memimpin secara global dalam solusi jaringan dan cloud terintegrasi, memberdayakan bisnis di Indonesia dan seluruh dunia dengan teknologi inovatif dan berkelanjutan. Dari hospitality hingga healthcare, retail hingga sektor publik, Kota Cloud menghadirkan solusi yang <span className="font-bold text-gray-900">aman, scalable, dan user-friendly</span> yang mendefinisikan ulang efisiensi operasional dan customer engagement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Keunggulan Platform Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empat pilar utama yang menjadikan Kota Cloud solusi terdepan untuk transformasi digital bisnis Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-10 py-5 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
            >
              <span>Hubungi Kami Sekarang</span>
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-10 py-5 bg-white font-bold text-lg rounded-xl border-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ borderColor: '#46B1CF', color: '#46B1CF' }}
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}