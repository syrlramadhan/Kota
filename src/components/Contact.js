'use client';

import { Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import { useRef, useState } from 'react';

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
    if (handleInputChange) handleInputChange(e);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 bg-white/70 backdrop-blur mb-4">
            <Mail className="w-4 h-4 text-cyan-600" />
            <span className="text-xs font-medium text-cyan-700">Contact Us</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Let’s Collaborate
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Ready to transform your business with Kota Cloud technology?{' '}
          </p>
          <span className="text-cyan-600 font-medium">Our team of experts is ready to discuss this with you.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Tell Us About Your Needs</h3>
                <p className="text-sm text-gray-600">
                  We will respond within <span className="font-semibold text-cyan-600">24 hours</span> with the best solution
                </p>
              </div>

              <div ref={formRef} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 text-sm border rounded-xl bg-gray-50 transition focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500 ${shakeFields?.name ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Enter your full name"
                      value={formData?.name || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 text-sm border rounded-xl bg-gray-50 transition focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500 ${shakeFields?.email ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="name@company.com"
                      value={formData?.email || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-2">
                    Your message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`w-full px-4 py-3 text-sm border rounded-xl bg-gray-50 resize-none transition focus:bg-white focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500 ${shakeFields?.message ? 'border-red-300' : 'border-gray-200'}`}
                      placeholder="Tell us about your business and how Kota Cloud can help..."
                      value={formData?.message || ''}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <MessageCircle className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  onClick={sendEmail}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send a Message Now</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info Card */}
            <div className="rounded-2xl bg-cyan-600 text-white p-5 shadow-sm">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Direct Contact
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase mb-0.5">Email</p>
                    <p className="font-semibold">admin@kotacloud.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase mb-0.5">Phone</p>
                    <p className="font-semibold">+62 812-8871-9249</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs uppercase mb-0.5">Address</p>
                    <p className="font-semibold leading-snug">
                      Jl. Mon. Emmy Saelan III<br />Makassar, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}