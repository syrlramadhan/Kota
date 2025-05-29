'use client';

export default function Contact({ formData, shakeFields, handleFormSubmit, handleInputChange }) {
  return (
    <section id="contact" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate__animated animate__fadeIn">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="animate__animated animate__zoomIn" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-6 flex flex-col" onSubmit={handleFormSubmit}>
              <div className="input-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 ${
                    shakeFields.name ? 'animate__animated animate__shakeX' : ''
                  }`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l9-6 9 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                </svg>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 ${
                    shakeFields.email ? 'animate__animated animate__shakeX' : ''
                  }`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <textarea
                  id="message"
                  className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 ${
                    shakeFields.message ? 'animate__animated animate__shakeX' : ''
                  }`}
                  rows="7"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button type="submit" className="cta-button w-full p-4 text-white font-semibold rounded-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="animate__animated animate__zoomIn" style={{ animationDelay: '0.4s' }}>
            <div className="contact-card p-6 bg-white rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> admin@kotacloud.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +62 831-3620-1962
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> Jl. Karunrung Asri Utama
                </p>
              </div>
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1748536095848!6m8!1m7!1sVqZedh7lCJ-P8djoAt586A!2m2!1d-5.182180756919967!2d119.4526687993037!3f55.914260695522145!4f-2.77831488981181!5f0.7820865974627469"
                  width="600"
                  height="450"
                  style={{ border: '0', width: '100%', height: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}