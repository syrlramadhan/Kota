export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate__animated animate__fadeIn">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
         
          {/* Card 2 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.3s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/Syahrul1.png"
                alt="Syahrul Ramadhan"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Syahrul Ramadhan</h3>
              <p className="text-sm mb-3">Chief Executive Officer</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-400 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

           {/* Card 1 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.2s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/kakdayat.png"
                alt="Nurhidayat"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Nur Hidayat</h3>
              <p className="text-sm mb-3">Commissioner</p>
              <a href="https://www.linkedin.com/in/xiners?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.4s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/musdalipa.png"
                alt="Musdalipa"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Musdalipa</h3>
              <p className="text-sm mb-3">Chief Financial Officer</p>
              <a href="https://www.linkedin.com/in/musdalipa-said-729997343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.5s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/path/to/emily-johnson-photo.jpg"
                alt="Mustika"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Mustika</h3>
              <p className="text-sm mb-3">Chief Human Resource</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 5 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.6s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/Amelia.png"
                alt="Michael Lee"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Amelia</h3>
              <p className="text-sm mb-3">Chief Marketing Officer</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 6 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.7s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/yusuf1.png"
                alt="Jennifer Clark"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Yusuf Marcelino Ishak</h3>
              <p className="text-sm mb-3">Chief Operating Officer</p>
              <a href="https://www.linkedin.com/in/yusuf-marcelino-9b5725304/" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 7 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.8s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/aksan.png"
                alt="Muhammad Aksan"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Muhammad Aksan</h3>
              <p className="text-sm mb-3">Chief Technology Officer</p>
              <a href="https://www.linkedin.com/in/muhammad-aksan-78a0b5317" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Card 8 */}
          <div
            className="team-card relative text-center rounded-xl shadow-lg transition-all duration-300 animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.9s', height: '400px' }}
          >
            <div className="team-photo-container w-full h-full">
              <img
                src="/path/to/lisa-thompson-photo.jpg"
                alt="Muh. Hasrul"
                className="team-photo w-full h-full rounded-xl object-cover transition-transform duration-300"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">Muh. Hasrul</h3>
              <p className="text-sm mb-3">-</p>
              <a href="www.linkedin.com/in/muh-hasrul-7aa586292" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-blue-300 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}