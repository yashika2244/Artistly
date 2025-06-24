import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      name: "Singers",
      img: "https://images.pexels.com/photos/6173832/pexels-photo-6173832.jpeg",
    },
    {
      name: "Dancers",
      img: "https://images.pexels.com/photos/270789/pexels-photo-270789.jpeg",
    },
    {
      name: "DJs",
      img: "https://images.pexels.com/photos/17586742/pexels-photo-17586742.jpeg",
    },
    {
      name: "Comedians",
      img: "https://media.istockphoto.com/id/2162878607/photo/young-woman-using-microphone-at-stage-stand-up-comedian.jpg?s=1024x1024&w=is&k=20&c=pPXBKdXc-joGHixC3GpNcOilUMVtXBjs4DYdpzbwpKY=",
    },
  ];
  return (
    <section className=" md:mt-15    min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#f0e6f6] to-[#d7c4e8] text-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl  md:pl-20 mx-auto md:pt-30 pt-25 pb-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Elevate Your Event with Top{" "}
            <span className="text-purple-600">Artists</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Find verified singers, dancers, DJs, comedians — make your special
            occasions unforgettable with Artistly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/artists">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                🎤 Explore Artists
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="bg-white/90 backdrop-blur-md text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-white transition-transform hover:scale-105">
                📋 Manager Dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src="/images/artist-hero.jpg"
            alt="Artists"
            className="w-96 object-cover rounded-3xl shadow-2xl border-4 border-white/80"
          />
        </div>
      </div>

      {/* Popular Categories */}
      <div className="max-w-7xl mx-auto md:py-16 py-7 px-6">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-800">
          🎨 Explore Popular Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link to="/artists" key={idx}>
              <div className="bg-gradient-to-tr from-pink-100 to-purple-200 rounded-2xl p-5 text-center shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer">
                <div className="bg-white rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center shadow-inner overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <p className="mt-4 font-semibold text-gray-700 text-lg">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-purple-50 py-14">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          ✨ How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {["Choose Category", "Select Artist", "Book Instantly"].map(
            (step, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl shadow-lg">
                  {idx + 1}
                </div>
                <p className="font-medium text-gray-700">{step}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          💬 What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              <p className="text-gray-600 italic">
                “Amazing experience! Booked a singer for my wedding —
                unforgettable performance.”
              </p>
              <p className="text-right mt-4 font-semibold text-purple-600">
                - Client {num}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
