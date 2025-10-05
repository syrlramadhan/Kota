'use client';

import { Users, Award } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#46B1CF"
            d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,170.7C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Floating Decorative Orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #46B1CF, transparent)' }}></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E80035, transparent)' }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border-2 shadow-lg"
            style={{
              background: 'linear-gradient(to right, #fff5f8, #e6f7fb)',
              borderColor: '#46B1CF'
            }}
          >
            <Users className="w-5 h-5" style={{ color: '#46B1CF' }} />
            <span className="font-bold text-sm tracking-wide" style={{ color: '#46B1CF' }}>OUR LEADERSHIP TEAM</span>
            <Award className="w-5 h-5" style={{ color: '#E80035' }} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Meet Our Team
          </h2>
          
          {/* Subtitle with Enhanced Typography */}
          <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
            The innovators behind Kota Cloud, driving the future of <span className="font-bold" style={{ color: '#46B1CF' }}>connectivity</span> and <span className="font-bold" style={{ color: '#E80035' }}>cloud innovation</span>.
          </p>
          
          {/* Enhanced Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to right, #46B1CF, #3a8fa8)' }}></div>
            <div className="w-3 h-3 rounded-full" style={{ background: '#E80035' }}></div>
            <div className="w-24 h-1 rounded-full" style={{ background: 'linear-gradient(to left, #E80035, #b30028)' }}></div>
          </div>
        </div>

        {/* Team Grid - Original Layout Preserved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1: Nurhidayat */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="https://ucarecdn.com/d42216fa-102c-40af-92c4-a0e4385d9362/kakdayat.png"
                alt="Nurhidayat"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Nur Hidayat</h3>
              <p className="text-xs mb-2">Commissioner</p>
              <a href="https://www.linkedin.com/in/xiners?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Syahrul */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="https://ucarecdn.com/70cd5451-6b23-4003-b095-a5f99900595f/sahrul.png"
                alt="Syahrul Ramadhan"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Syahrul Ramadhan</h3>
              <p className="text-xs mb-2">Chief Executive Officer</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Musdalipa */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="https://ucarecdn.com/9e78644d-710a-4929-9ebb-033b18177247/musdalipa.png"
                alt="Musdalipa"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Musdalipa</h3>
              <p className="text-xs mb-2">Chief Financial Officer</p>
              <a href="https://www.linkedin.com/in/musdalipa-said-729997343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 4: Yusuf */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="/yusuf1.png"
                alt="Yusuf Marcelino Ishak"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Yusuf Marcelino Ishak</h3>
              <p className="text-xs mb-2">Chief Operating Officer</p>
              <a href="https://www.linkedin.com/in/yusuf-marcelino-9b5725304/" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 5: Hasrul */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="/kakhasrul.png"
                alt="Muh. Hasrul"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Muh. Hasrul</h3>
              <p className="text-xs mb-2">Chief Development Officer</p>
              <a href="https://www.linkedin.com/in/muh-hasrul-7aa586292" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 6: Amelia */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="/Amelia.png"
                alt="Amelia"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Amelia</h3>
              <p className="text-xs mb-2">Chief Marketing Officer</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 7: Aksan */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="/aksan.png"
                alt="Muhammad Aksan"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Muhammad Aksan</h3>
              <p className="text-xs mb-2">Chief Technology Officer</p>
              <a href="https://www.linkedin.com/in/muhammad-aksan-78a0b5317" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.478-2.246-1.677-2.246-.916 0-1.462.614-1.702 1.207-.087.214-.109.514-.109.814v5.829h-3s.038-9.462 0-10.443h3v1.479c.398-.614 1.109-1.489 2.697-1.489 1.969 0 3.447 1.286 3.447 4.047v6.406z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 8: Mustika */}
          <div className="team-card relative text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 hover:border-[#46B1CF]/50" style={{ height: '360px' }}>
            <div className="team-photo-container w-full h-full">
              <img
                src="/tik.png"
                alt="Mustika"
                className="team-photo w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="team-overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">Mustika</h3>
              <p className="text-xs mb-2">Chief Human Resource</p>
              <a href="#" className="team-linkedin inline-block">
                <svg className="w-5 h-5 text-white hover:text-[#46B1CF] transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
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