function Home() {
  return (
    <section id="home" className="max-w-6xl mx-auto mt-32 px-4">
      <div>
        <h1 className="text-5xl font-extralight py-2 text-[#9E8D73]">Welcome to</h1>
        <h1 className="text-5xl font-black text-[#0860a1] py-1">Esemje Appliances Pvt. Ltd.</h1>
      </div>

      <div className="mt-8">
        <p className="text-lg font-bold text-[#9E8D73] mb-2">
          Your one-stop shop for high-quality home appliances and toys.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Esemje Appliances Pvt. Ltd. is a leading wholesaler of home appliances and toys, based in Ahmedabad, Gujarat. We are committed to providing top-notch products and exceptional customer service.
        </p>
      </div>

      <div className="mt-8">
        <button className="bg-[#0860a1] py-3 px-6 text-white text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          About Us
        </button>
      </div>
    </section>
  );
}

export default Home;
