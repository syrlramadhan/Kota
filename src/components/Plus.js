'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Wifi, TrendingUp, Shield, Cloud, Zap, ArrowRight } from 'lucide-react';

export default function BrandSection() {
  const features = [
    { 
      icon: Wifi,
      title: "Smart Connectivity", 
      description: "Captive portal technology that turns Wi-Fi into a strategic business asset",
      color: "#46B1CF"
    },
    { 
      icon: TrendingUp,
      title: "Data-Driven Growth", 
      description: "Gather valuable insights for analytics and targeted marketing campaigns",
      color: "#E80035"
    },
    {
      icon: Shield,
      title: "Secure & Scalable", 
      description: "Secure infrastructure with network segmentation and enterprise-grade protection",
      color: "#46B1CF"
    },
    {
      icon: Cloud,
      title: "Seamless Integration", 
      description: "An integrated platform that connects devices and users within a single ecosystem",
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
            <Zap className="w-4 h-4" style={{ color: '#46B1CF' }} />
            <span className="font-semibold text-xs tracking-wide" style={{ color: '#46B1CF' }}>
              An Innovative Platform for the Business of the Future
            </span>
          </div>

          {/* Brand Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-gray-900">Kota Cloud:</span>
            <br />
            <span className="bg-gradient-to-r from-[#46B1CF] to-[#3a8fa8] bg-clip-text text-transparent">
              Connecting Your Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 font-normal max-w-4xl mx-auto mb-8">
            Empowering Businesses with Smart Connectivity and Integrated Cloud Solutions
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
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p className="text-justify">
                <strong className="font-medium text-gray-900">Kota Cloud</strong> is a pioneering platform that is transforming the way businesses connect with customers. By integrating advanced networks and cloud computing, we create a seamless digital ecosystem—much like a smart city in the digital age. Our solutions combine an <span className="font-normal" style={{ color: '#46B1CF' }}>intuitive ordering system</span> with <span className="font-normal" style={{ color: '#E80035' }}>powerful Wi-Fi marketing tools</span>, enabling businesses to drive immediate revenue and long-term growth through data-driven insights.
              </p>
              <p className="text-justify">
                Our vision is to be a global leader in integrated networking and cloud solutions, empowering businesses in Indonesia and around the world with innovative and sustainable technology. From hospitality to healthcare, retail to the public sector, Kota Cloud delivers <span className="font-normal text-gray-900">secure, scalable, and user-friendly</span> solutions that redefine operational efficiency and customer engagement.
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              The Benefits of Our Platform
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              The four key pillars that make Kota Cloud the leading solution for your business’s digital transformation
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
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
              className="inline-flex items-center justify-center px-6 py-3 text-white font-normal text-sm rounded-full shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-6 py-3 bg-white font-normal text-sm rounded-full border shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ borderColor: '#46B1CF', color: '#46B1CF' }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}