
'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particle styles only on the client-side
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${Math.random() * 2 + 1.5}s`,
    }));
    setParticles(generatedParticles);

    // Handle mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      name: 'X',
      href: 'https://x.com/kotaclouddotcom',
      icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zM16.61 20.644h2.039L7.486 3.24H5.397l11.213 17.404z',
      gradient: 'from-gray-800 to-black',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.691 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.228-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.148-3.227 1.691-4.771 4.919-4.919 1.265-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.948-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.948-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      gradient: 'from-blue-700 to-blue-900',
    },
  ];

  const quickLinks = [
    { to: 'home', label: 'Beranda' },
    { to: 'services', label: 'Layanan' },
    { to: 'faq', label: 'FAQ' },
    { to: 'contact', label: 'Kontak' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0D89CA]/20 via-purple-600/15 to-pink-600/15"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 137, 202, 0.1), transparent 40%)`,
          }}
        ></div>
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-pulse"
              style={particle}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-white via-blue-200 to-[#0D89CA] bg-clip-text text-transparent">
                Kota Cloud
              </h3>
              <p className="text-sm text-white leading-relaxed font-light">
                Revolusi digital dimulai dari sini.{' '}
                <span className="block mt-1 text-[#0D89CA] font-medium">
                  Ekosistem teknologi masa depan.
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0D89CA] uppercase tracking-[0.15em]">
                Connect With Future
              </h4>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.gradient} p-0.5 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg`}
                    >
                      <div className="w-full h-full bg-black rounded-xl flex items-center justify-center group-hover:bg-transparent">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </div>
                    </div>
                    <span
                      className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-medium text-[#0D89CA] transition-all duration-300 ${
                        hoveredSocial === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold mb-3 text-white">Quick Access</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index} className="group">
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="flex items-center space-x-2 text-white hover:text-[#0D89CA] cursor-pointer transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-[#0D89CA] rounded-full group-hover:w-3 transition-all duration-300"></div>
                      <span className="text-sm font-medium">{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-3 text-white">Let's Talk</h4>
              <div className="space-y-3">
                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0D89CA]/50 hover:bg-[#0D89CA]/10 transition-all duration-300">
                    <div className="bg-[#0D89CA]/20 rounded-lg p-2 group-hover:bg-[#0D89CA]">
                      <Mail className="w-4 h-4 text-[#0D89CA] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#0D89CA] uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm text-white font-medium">admin@kotacloud.com</p>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0D89CA]/50 hover:bg-[#0D89CA]/10 transition-all duration-300">
                    <div className="bg-[#0D89CA]/20 rounded-lg p-2 group-hover:bg-[#0D89CA]">
                      <Phone className="w-4 h-4 text-[#0D89CA] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#0D89CA] uppercase tracking-wider mb-1">Call</p>
                      <p className="text-sm text-white font-medium">+62 812-8871-9249</p>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#0D89CA]/50 hover:bg-[#0D89CA]/10 transition-all duration-300">
                    <div className="bg-[#0D89CA]/20 rounded-lg p-2 group-hover:bg-[#0D89CA]">
                      <MapPin className="w-4 h-4 text-[#0D89CA] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#0D89CA] uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm text-white font-medium leading-relaxed">
                        Jl. Mon. Emmy Saelan III<br />
                        Makassar, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-white text-xs font-medium">
              © 2025 Kota Cloud. Building tomorrow's infrastructure.
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <a href="#" className="text-white hover:text-[#0D89CA] transition-colors duration-200 flex items-center space-x-1">
                <span>Privacy Policy</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a href="#" className="text-white hover:text-[#0D89CA] transition-colors duration-200 flex items-center space-x-1">
                <span>Terms</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <div className="flex items-center space-x-1 text-white">
                <span>Crafted in</span>
                <span className="text-red-500 animate-pulse">🇮🇩</span>
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
