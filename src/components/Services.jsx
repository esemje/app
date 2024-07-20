function Services() {
  return (
    <section id="services" className="max-w-sm md:max-w-6xl mx-auto mt-32">
      <h2 className="text-4xl font-extrabold mb-6 text-[#0860a1]">Our Services</h2>
      <p className="mb-8">We provide excellent after-sales support, including warranty, repair, and installation services for all our products.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Warranty</h3>
          <p className="text-sm">We provide comprehensive warranty coverage to protect your purchase.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Repair</h3>
          <p className="text-sm">Our skilled technicians are available for repairs to keep your products in top condition.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Installation</h3>
          <p className="text-sm">We offer professional installation services to ensure your products are set up correctly.</p>
        </div>
      </div>
    </section>
  )
}

export default Services