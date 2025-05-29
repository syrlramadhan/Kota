export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate__animated animate__fadeIn">
          Our Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="instagram-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-full aspect-square bg-gray-300 flex items-center justify-center">
              [Instagram Post 1]
            </div>
            <div className="overlay">
              <span className="text-sm">@kotacloud</span>
              <div className="flex space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-14h14v14h-4M9 16l3 3m0 0l3-3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="instagram-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-full aspect-square bg-gray-300 flex items-center justify-center">
              [Instagram Post 2]
            </div>
            <div className="overlay">
              <span className="text-sm">@kotacloud</span>
              <div className="flex space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-14h14v14h-4M9 16l3 3m0 0l3-3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="instagram-card animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-full aspect-square bg-gray-300 flex items-center justify-center">
              [Instagram Post 3]
            </div>
            <div className="overlay">
              <span className="text-sm">@kotacloud</span>
              <div className="flex space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-14h14v14h-4M9 16l3 3m0 0l3-3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}