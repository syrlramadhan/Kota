'use client';

import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Zap, Building2 } from 'lucide-react';

export default function Contact({ formData, shakeFields, handleFormSubmit, handleInputChange }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData?.name || !formData?.email || !formData?.message) {
      if (handleFormSubmit) handleFormSubmit(e);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate email sending
    setTimeout(() => {
      alert('Message sent successfully!');
      if (handleInputChange) {
        handleInputChange({ target: { id: 'name', value: '' } });
        handleInputChange({ target: { id: 'email', value: '' } });
        handleInputChange({ target: { id: 'message', value: '' } });
      }
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e) => {
    if (handleInputChange) {
      handleInputChange(e);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #46B1CF 1.5px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #46B1CF, transparent)' }}></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E80035, transparent)' }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border-2 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #fff5f8, #e6f7fb)',
              borderColor: '#46B1CF'
            }}
          >
            <Mail className="w-5 h-5" style={{ color: '#46B1CF' }} />
            <span className="font-bold text-sm tracking-wide" style={{ color: '#46B1CF' }}>GET IN TOUCH</span>
            <Zap className="w-5 h-5" style={{ color: '#E80035' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Mari Berkolaborasi
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Siap mentransformasi bisnis Anda dengan teknologi Kota Cloud?
            <span className="block mt-2 font-bold bg-gradient-to-r from-[#46B1CF] to-[#3a8fa8] bg-clip-text text-transparent">
              Tim ahli kami menunggu untuk berdiskusi dengan Anda
            </span>
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-20 h-1 rounded-full" style={{ background: '#46B1CF' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#E80035' }}></div>
            <div className="w-20 h-1 rounded-full" style={{ background: '#E80035' }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  Ceritakan Kebutuhan Anda
                </h3>
                <p className="text-base text-gray-600">
                  Kami akan merespon dalam <span className="font-bold" style={{ color: '#46B1CF' }}>24 jam</span> dengan solusi terbaik
                </p>
              </div>

              <div ref={formRef} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    Nama Lengkap <span style={{ color: '#E80035' }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-5 py-4 text-base border-2 rounded-xl transition-all duration-300 bg-gray-50/50 
                        ${
                          focusedField === 'name'
                            ? 'bg-white shadow-lg ring-4'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                        ${shakeFields?.name ? 'animate-pulse border-red-300' : ''}`}
                      style={{
                        borderColor: focusedField === 'name' ? '#46B1CF' : undefined,
                        ringColor: focusedField === 'name' ? 'rgba(70, 177, 207, 0.1)' : undefined
                      }}
                      placeholder="Masukkan nama lengkap Anda"
                      value={formData?.name || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <User
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300`}
                      style={{ color: focusedField === 'name' ? '#46B1CF' : '#9ca3af' }}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    Alamat Email <span style={{ color: '#E80035' }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-5 py-4 text-base border-2 rounded-xl transition-all duration-300 bg-gray-50/50
                        ${
                          focusedField === 'email'
                            ? 'bg-white shadow-lg ring-4'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                        ${shakeFields?.email ? 'animate-pulse border-red-300' : ''}`}
                      style={{
                        borderColor: focusedField === 'email' ? '#46B1CF' : undefined,
                        ringColor: focusedField === 'email' ? 'rgba(70, 177, 207, 0.1)' : undefined
                      }}
                      placeholder="nama@perusahaan.com"
                      value={formData?.email || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <Mail
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300`}
                      style={{ color: focusedField === 'email' ? '#46B1CF' : '#9ca3af' }}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    Pesan Anda <span style={{ color: '#E80035' }}>*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className={`w-full px-5 py-4 text-base border-2 rounded-xl transition-all duration-300 bg-gray-50/50 resize-none
                        ${
                          focusedField === 'message'
                            ? 'bg-white shadow-lg ring-4'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                        ${shakeFields?.message ? 'animate-pulse border-red-300' : ''}`}
                      style={{
                        borderColor: focusedField === 'message' ? '#46B1CF' : undefined,
                        ringColor: focusedField === 'message' ? 'rgba(70, 177, 207, 0.1)' : undefined
                      }}
                      placeholder="Ceritakan tentang bisnis Anda dan bagaimana Kota Cloud dapat membantu..."
                      value={formData?.message || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    ></textarea>
                    <MessageCircle
                      className={`absolute right-4 top-4 w-5 h-5 transition-colors duration-300`}
                      style={{ color: focusedField === 'message' ? '#46B1CF' : '#9ca3af' }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={sendEmail}
                  disabled={loading}
                  className="w-full text-white text-base font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  style={{ background: loading ? '#9ca3af' : 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.background = 'linear-gradient(135deg, #3a8fa8, #2d92b3)')}
                  onMouseLeave={(e) => !loading && (e.currentTarget.style.background = 'linear-gradient(135deg, #46B1CF, #3a8fa8)')}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Card */}
            <div className="rounded-3xl p-8 text-white shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #46B1CF, #3a8fa8)' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-6 h-6" />
                <h3 className="text-xl font-extrabold">Kontak Langsung</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Email</p>
                    <p className="text-base font-bold">admin@kotacloud.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Telepon</p>
                    <p className="text-base font-bold">+62 812-8871-9249</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Alamat</p>
                    <p className="text-sm font-semibold leading-relaxed">
                      Jl. Mon. Emmy Saelan III<br />
                      Makassar, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1750308631270!6m8!1m7!1samvkcRjfs2zoIa_3y2-2gw!2m2!1d-5.176820337970915!2d119.4501674742598!3f97.10036459205142!4f-1.1303750972096651!5f1.3800324185612702"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}