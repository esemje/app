function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto mt-32 px-4">
      <h2 className="text-4xl font-extrabold mb-6 text-[#0860a1]">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="mb-8 md:mb-0">
          <p className="text-lg text-gray-600 mb-4">Address: Nirman Complex, Navrangpura, Ahmedabad, Gujarat - 380009</p>
          <p className="text-lg text-gray-600 mb-4">Email: info@esemjeappliances.com</p>
          <p className="text-lg text-gray-600 mb-4">Phone: +91-1234567890</p>

          {/* Embed Google Maps */}
          <div className="mt-8">
            <iframe
              title="Esemje Appliances Location"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7761459375534!2d72.55542551497865!3d23.0311513849701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83f8f548f4eb%3A0x64e0f63d149ecb53!2sNirman%20Complex%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1626977852811!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>        
        {/* Contact Form */}
        <form className="max-w-lg">
          <label htmlFor="name" className="block text-lg text-gray-900 mb-2">Name:</label>
          <input type="text" id="name" name="name" className="form-input w-full py-3 px-4 rounded-lg mb-2" />
          
          <label htmlFor="email" className="block text-lg text-gray-900 mb-2">Email:</label>
          <input type="email" id="email" name="email" className="form-input w-full py-3 px-4 rounded-lg mb-2" />
          
          <label htmlFor="message" className="block text-lg text-gray-900 mb-2">Message:</label>
          <textarea id="message" name="message" className="form-textarea w-full py-3 px-4 rounded-lg mb-4"></textarea>
          
          <button className="bg-[#0860a1] py-3 px-6 text-white text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
