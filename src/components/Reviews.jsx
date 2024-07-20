function Reviews() {
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "I love the variety of home appliances available at Esemje. The quality is top-notch!",
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      content: "Great customer service! They helped me find the perfect toy for my kid.",
    },
    {
      id: 3,
      author: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      content: "Fast delivery and hassle-free installation. Highly recommend!",
    },
    {
      id: 4,
      author: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      content: "Impressed with the durability of their products. Will definitely shop here again.",
    },
    {
      id: 5,
      author: "David Lee",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      content: "Excellent selection of toys that stimulate learning. My children love them!",
    },
  ];

  return (
    <section id="reviews" className="max-w-sm md:max-w-6xl mx-auto mt-32">
      <h2 className="text-3xl font-extrabold text-[#0860a1] mb-4">Reviews</h2>
      <p className="text-lg text-gray-700 mb-8">Read what our customers have to say about our products and services.</p>
      
      <div className="flex overflow-x-scroll space-x-4 pb-4">
        {reviews.map((review) => (
          <div key={review.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold text-[#0860a1]">{review.author}</p>
              </div>
            </div>
            <p className="text-base text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
