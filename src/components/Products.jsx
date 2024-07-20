function Products() {
  return (
    <section id="products" className="max-w-6xl mx-auto mt-32 px-4">
      <h2 className="text-4xl font-extrabold mb-6 text-[#0860a1]">Our Products</h2>
      <p className="text-lg text-gray-600 mb-8">Discover a wide selection of high-quality products, from home appliances to educational toys, designed to enhance your lifestyle and enrich your experiences.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img className="mb-4 w-full h-auto rounded-lg" src="https://images.pexels.com/photos/23428079/pexels-photo-23428079/free-photo-of-close-up-of-a-pasta-dish-served-in-a-pan.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Home Appliances" />
          <h3 className="text-2xl font-bold mb-2">Home Appliances</h3>
          <p className="text-sm text-gray-700">Explore our diverse selection of home appliances, featuring mixer grinders, microwave ovens, and a wide array of small kitchen essentials from spoons and knives to pans, kadai, tiffins, and water bottles.</p>
          {/* <button className="bg-[#0860a1] w-full p-3 text-white">View</button> */}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img className="mb-4 w-full h-auto rounded-lg" src="https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Toys" />
          <h3 className="text-2xl font-bold mb-2">Toys</h3>
          <p className="text-sm text-gray-700">Discover our diverse range of educational and entertaining toys designed for children of all ages, offering both learning and enjoyment.</p>
          {/* <button className="bg-[#0860a1] w-full p-3 text-white">View</button> */}
        </div>
      </div>
    </section>
  );
}

export default Products;
