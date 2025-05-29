export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate__animated animate__fadeIn">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-primary mb-4">IoT Connectivity </h3>
            <p className="text-gray-600">
              IoT Connectivity Smart IoT routers connecting businesses directly to custom web applications.{' '}
              <span className="text-primary font-semibold">Available Soon!</span>
            </p>
          </div>
          <div className="card p-6 text-center rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-primary mb-4">Custom Web Development</h3>
            <p className="text-gray-600">Bespoke web applications tailored to elevate your business operations.</p>
          </div>
          <div className="card p-6 text-center rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold text-primary mb-4">Consulting Expert</h3>
            <p className="text-gray-600">support for optimizing IoT and web integration for your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}