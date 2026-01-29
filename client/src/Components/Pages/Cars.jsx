import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
function Cars() {
  // Filters
  const [cars,setCars]=useState([]);
  const [loading,setLoading]=useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  // Extract categories dynamically
  useEffect(()=>{
    fetch(`${BACKEND_URL}/api/cars`, {
            credentials: "include",
   })
    .then(res=>res.json())
    .then(data=>{
      setCars(data.cars);
      setLoading(false);
    })
    .catch(()=>{ setLoading(false);})
  },[]);
 const categories = [...new Set(cars.map(car => car.type))];

  // Filtering Logic
const filteredCars = cars.filter(car => {
  const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = category === "" || car.type === category;
  return matchesSearch && matchesCategory;
});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);
  if (loading) {
    return (
      <div className="text-white text-center mt-40 text-xl">
        Loading cars...
      </div>
    );
  }
  return (
    <>
      {/* Banner Section */}
      <div className='font-sans bg-[#121212] text-white'>
        <div
          className="banner-section cars-banner-section relative flex justify-center items-center h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url('/path/to/your/cars-banner.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>

          <div className="banner-section-content relative z-10 text-center px-6">
            <motion.h6
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="uppercase tracking-[8px] text-[#f5b754] mb-3 text-sm md:text-base"
            >
              — Rent Now
            </motion.h6>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-bricolage text-white drop-shadow-lg"
            >
              Select <span className="text-[#f5b754]">Your Luxury Ride</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed"
            >
              Step into sophistication with <span className="text-[#f5b754] font-semibold">Mavelo</span>.  
              Whether it’s speed, comfort, or elegance — explore our curated fleet designed  
              for those who drive in style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const section = document.getElementById("car-list");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#f5b754] hover:bg-white text-black font-bricolage px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-md"
              >
                View Cars <i className="ri-arrow-right-up-line"></i>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Cars Section */}
        <div id="car-list" className="flex flex-col md:flex-row gap-10 px-4 sm:px-6 md:px-8 lg:px-[12%] xl:px-[12%] py-12">

          {/* Sidebar */}
          <div className="w-full md:w-[300px] bg-[#111111] border border-[#222] rounded-2xl p-6 shadow-xl sticky top-24">

            {/* Search */}
            <div className="bg-[#1b1b1b] rounded-xl p-3 mb-8 flex items-center border border-[#2a2a2a]">
              <input
                type="text"
                placeholder="Search by car name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-white w-full px-3 py-2 rounded-xl focus:outline-none placeholder-gray-400"
              />
              <i className="ri-search-line text-[#f5b754] text-xl ml-2"></i>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-[#f5b754] text-lg flex items-center gap-2">
                <i className="ri-dashboard-line"></i> Car Type
              </h4>

              <ul className="space-y-2 text-gray-300">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => setCategory(cat)}
                    className={`cursor-pointer px-3 py-2 rounded-lg transition 
                    ${category === cat ? "bg-[#f5b754] text-black" : "hover:bg-[#222]"}`}
                  >
                    {cat}
                  </li>
                ))}

                <li
                  onClick={() => setCategory("")}
                  className="cursor-pointer text-gray-400 hover:text-white pt-2 text-sm"
                >
                  Reset
                </li>
              </ul>
            </div>

            {/* Pickup Filter — UI only */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-[#f5b754] text-lg flex items-center gap-2">
                <i className="ri-map-pin-line"></i> Pick-Up
              </h4>

              {["Abu Dhabi", "Alain", "Dubai", "Sharjah"].map((loc, i) => (
                <div
                  key={i}
                  onClick={() => setPickup(loc)}
                  className={`cursor-pointer px-3 py-2 rounded-lg transition 
                  ${pickup === loc ? "bg-[#f5b754] text-black" : "hover:bg-[#222]"}`}
                >
                  {loc}
                </div>
              ))}
              <p onClick={() => setPickup("")} className="cursor-pointer text-gray-400 hover:text-white pt-2 text-sm">
                Reset
              </p>
            </div>

            {/* Dropoff Filter — UI only */}
            <div className="mb-3">
              <h4 className="font-semibold mb-3 text-[#f5b754] text-lg flex items-center gap-2">
                <i className="ri-pin-distance-line"></i> Drop-Off
              </h4>

              {["Abu Dhabi", "Alain", "Dubai", "Sharjah"].map((loc, i) => (
                <div
                  key={i}
                  onClick={() => setDropoff(loc)}
                  className={`cursor-pointer px-3 py-2 rounded-lg transition 
                  ${dropoff === loc ? "bg-[#f5b754] text-black" : "hover:bg-[#222]"}`}
                >
                  {loc}
                </div>
              ))}
              <p onClick={() => setDropoff("")} className="cursor-pointer text-gray-400 hover:text-white pt-2 text-sm">
                Reset
              </p>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="flex-1 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-8">

              {filteredCars.length === 0 && (
                <p className="text-gray-400 text-center w-full text-lg col-span-full">
                  No cars match your filters.
                </p>
              )}

              {filteredCars.map((car) => (
                <div
                  key={car._id}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden
                  shadow-md hover:shadow-[#f5b754]/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={car.image?.[0]}
                    alt={car.name}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-3 text-white">{car.name}</h3>

                    <ul className="text-sm text-gray-400 space-y-1 mb-4">
                      <li>Seats: {car.seats}</li>
                      <li>Transmission: {car.transmission}</li>
                      <li>Fuel: {car.fuelType}</li>
                      <li>Location: {car.location || "—"}</li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-[#f5b754] font-semibold text-lg">${car.pricePerDay}/day</span>

                      <Link to={`/car/${car._id}`}>
                        <button className="bg-[#f5b754] text-black px-4 py-1 rounded-full text-sm hover:bg-[#f5b754]/90 transition">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cars;
