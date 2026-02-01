// ...existing code...
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import about from '../../Assets/about.jpg';
 

import carType1 from '../../Assets/car-1.jpg';
import carType2 from '../../Assets/car-2.jpg';
import carType3 from '../../Assets/car-3.jpg';
import carType4 from '../../Assets/car-4.jpg';
import carType5 from '../../Assets/car-5.jpg';
import carType6 from '../../Assets/car-6.jpg';

import teams1 from '../../Assets/test-1.jpg';
import teams2 from '../../Assets/test-2.jpg';
import teams3 from '../../Assets/test-3.jpg';
import teams4 from '../../Assets/test-4.jpg';
import teams5 from '../../Assets/test-5.jpg';
// ...existing code...

function About() {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const pickUpRef = useRef(null);
  const returnRef = useRef(null);

  const openCalendar = () => {
    if (pickUpRef.current && typeof pickUpRef.current.setOpen === 'function') {
      pickUpRef.current.setOpen(true);
    }
  };
  const openReturnCalendar = () => {
    if (returnRef.current && typeof returnRef.current.setOpen === 'function') {
      returnRef.current.setOpen(true);
    }
  };

  return (
    <>
      {/*Page Section*/}
      <div className="banner-section relative flex justify-center items-center h-[90vh] bg-cover bg-center" 
        style={{ backgroundImage: `url('../Image/cars-slide-04.jpg')` }}>
        
        {/* Overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        {/* Content Layer */}
        <div className="banner-section-content relative z-10 text-center px-6">
          <motion.h6 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-[#f5b754] mb-3 text-sm md:text-base"
          >
            — Rentax Experience
          </motion.h6>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-bricolage text-white drop-shadow-lg"
          >
            About <span className="text-[#f5b754]">Us</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed"
          >
            Discover the story behind <span className="text-[#f5b754] font-semibold">Mavelo</span> — 
            where luxury meets motion. We redefine car rental with premium service, 
            comfort, and elegance designed for those who move with purpose.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10"
          >
            <button className="bg-[#f5b754] hover:bg-white text-black font-bricolage px-10 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-md">
              Explore More&nbsp;
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </motion.div>
        </div>
      </div>


      {/*About*/}
    <section className="about relative text-white lg:px-[10%] px-[8%] py-[150px] bg-[#0b0b0b] overflow-hidden">
      {/* Decorative Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/50 to-[#000] z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-[6px] text-[#f5b754] mb-4">
            Mavelo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 font-bricolage leading-tight">
            We Are More Than <br />
            <span className="text-[#f5b754] font-bricolage">
              A Car Rental Company
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 md:w-[85%]">
            At Mavelo, we don’t just rent cars — we deliver experiences. 
            From performance beasts to luxury comfort drives, every vehicle 
            in our fleet reflects sophistication, style, and reliability.
          </p>

          {/* Highlight Features */}
          <div className="space-y-4 mb-10">
            {[
              "Sports and Luxury Cars",
              "Economy Cars with Premium Comfort",
              "Flexible Rental Plans",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#f5b754] shadow-inner">
                  <i className="ri-check-double-line text-lg"></i>
                </div>
                <span className="text-gray-200 text-lg">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            transition={{ duration: 0.3 }}
            className="bg-[#f5b754] text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-[#f5b754]/30"
          >
            Learn More <i className="ri-arrow-right-line text-lg"></i>
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative Background Glow */}
          <div className="absolute -inset-5 bg-gradient-to-tr from-[#f5b754]/20 via-transparent to-transparent rounded-[30px] blur-2xl"></div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[30px] shadow-xl shadow-black/50">
            <img
              src={about}
              alt="About Mavelo"
              className="w-full h-auto object-cover rounded-[30px] group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#f5b754]/90 w-20 h-20 rounded-full flex items-center justify-center text-black text-3xl cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f5b754]/40">
                <i className="ri-play-fill"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Decorative Element */}
      <div className="absolute right-[-200px] bottom-[-150px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>
    </section>

      {/*Banner*/}
    <div className='banner relative lg:px-[12%] px-[8%] py-[180px] bg-[#0b0b0b] overflow-hidden'>
      {/* Subtle gold glow and gradient for premium depth */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#111] z-0'></div>
      <div className='absolute right-[-200px] top-[80px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl z-0'></div>

      <div className='banner-content text-center relative z-10'>
        <p className='uppercase text-sm tracking-[6px] text-[#f5b754] mb-3'>Rent Now</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 font-bricolage text-white'>
          Book <span className='text-[#f5b754]'>Auto Rental</span>
        </h2>

        {/* Booking Section */}
        <div className='book-option bg-[#151515]/90 backdrop-blur-lg text-white w-[90%] max-w-[1200px] mx-auto rounded-3xl px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 shadow-2xl border border-[#2a2a2a]'>
          
          {/* Car Type */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-700/60'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-300 hover:text-[#f5b754] transition'>
              Choose Car Type
              <i className="ri-arrow-down-s-line text-[#f5b754]"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-lg opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Sports Cars</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>SUVs</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Convertible Cars</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Luxury Cars</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Sedan</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Small Cars</li>
              </ul>
            </div>
          </div>

          {/* Pick-Up Location */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-700/60'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-300 hover:text-[#f5b754] transition'>
              Pick-Up Location
              <i className="ri-arrow-down-s-line text-[#f5b754]"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-lg opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Abu Dhabi</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Alain</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Dubai</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Sharjah</li>
              </ul>
            </div>
          </div>

          {/* Pick-Up Date */}
          <div className='relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-700/60' onClick={openCalendar}>
            <DatePicker
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Pick-Up Date"
              ref={pickUpRef}
              className={`bg-transparent text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement='bottom-start'
            />
            <i className='ri-calendar-line text-[#f5b754] pointer-events-none text-lg'></i>
          </div>

          {/* Drop-Off Location */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-700/60'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-300 hover:text-[#f5b754] transition'>
              Drop-Off Location
              <i className="ri-arrow-down-s-line text-[#f5b754]"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-lg opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Abu Dhabi</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Alain</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Dubai</li>
                <li className='px-4 py-2 hover:bg-[#f5b754] hover:text-black transition cursor-pointer'>Sharjah</li>
              </ul>
            </div>
          </div>

          {/* Return Date */}
          <div className='relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-700/60' onClick={openReturnCalendar}>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Return Date"
              ref={returnRef}
              className={`bg-transparent text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement='bottom-start'
            />
            <i className='ri-calendar-line text-[#f5b754] pointer-events-none text-lg'></i>
          </div>

          {/* Search Button */}
          <div className='flex items-center justify-center'>
            <button className='bg-[#f5b754] text-black font-semibold px-8 py-4 rounded-full w-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-md font-bricolage'>
              <i className="ri-search-line pr-2"></i>Search
            </button>
          </div>

        </div>
      </div>
    </div>

      {/*Car Type*/}
    <div className='car-type relative lg:px-[12%] px-[8%] py-[180px] bg-[#0b0b0b] overflow-hidden'>
      {/* Subtle glow & gradient background */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#111] z-0'></div>
      <div className='absolute left-[-100px] top-[200px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl'></div>
      <div className='absolute right-[-150px] bottom-[150px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl'></div>

      <div className='relative text-center z-10 mb-16'>
        <p className='uppercase text-sm tracking-[6px] text-[#f5b754] mb-3'>
          Choose your car
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 font-bricolage text-white'>
          Choose Your <span className='text-[#f5b754]'>Car Type</span>
        </h2>
        <div className='w-20 h-[3px] bg-[#f5b754] mx-auto rounded-full'></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='mt-[90px] relative z-10'
      >
        {[ 
          { img: carType1, title: 'SUVs' },
          { img: carType2, title: 'Convertible' },
          { img: carType3, title: 'Sports Car' },
          { img: carType4, title: 'Luxury Cars' },
          { img: carType5, title: 'Sedan' },
          { img: carType6, title: 'Small Cars' }
        ].map((car, i) => (
          <SwiperSlide key={i}>
            <div className='relative rounded-3xl overflow-hidden group shadow-lg shadow-black/40 hover:shadow-[#f5b754]/30 cursor-pointer transition-all duration-700 hover:-translate-y-2'>
              
              {/* Car Image with hover animation */}
              <div className='relative overflow-hidden'>
                <img
                  src={car.img}
                  alt={car.title}
                  className='w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out'
                />
                {/* Overlay gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>
                
                {/* Title + hover animation */}
                <h3 className='absolute top-6 left-6 text-white text-2xl font-semibold font-bricolage tracking-wide drop-shadow-lg group-hover:text-[#f5b754] transition-colors duration-500'>
                  {car.title}
                </h3>

                {/* Floating Icon with gold pulse */}
                <div className='absolute bottom-6 right-6'>
                  <div className='bg-[#f5b754] w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-black text-xl transform group-hover:scale-110 transition-transform duration-300 hover:bg-white hover:text-black'>
                    <i className='bi bi-arrow-up-right'></i>
                  </div>
                </div>
              </div>

              {/* Bottom accent border */}
              <div className='absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#f5b754] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


      {/*Services*/}
    <div className="our-services relative lg:px-[12%] px-[8%] py-[180px] bg-[#0b0b0b] overflow-hidden">
      {/* Soft golden background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#111111] z-0"></div>
      <div className="absolute right-[-200px] top-[100px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>
      <div className="absolute left-[-150px] bottom-[100px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>

      <div className="our-services-content mb-20 text-center text-white relative z-10">
        <p className="uppercase text-sm tracking-[6px] text-[#f5b754] mb-3">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-bricolage">
          Our <span className="text-[#f5b754]">Premium Services</span>
        </h2>
        <div className="w-20 h-[3px] bg-[#f5b754] mx-auto rounded-full"></div>
      </div>

      <div className="our-service-wrapper relative z-10">
        <div className="grid w-full gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          
          {/* 1️⃣ Daily Car Rental */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Daily Car Rental
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Rent your favorite car for a day — perfect for business meetings, weekend drives, or short-term travel plans. Enjoy flexibility and comfort on the go.
              </p>
            </div>
          </div>

          {/* 2️⃣ Monthly Car Rental */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Monthly Car Rental
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Need a car for longer durations? Our monthly rental plans offer discounted rates, premium maintenance, and complete convenience for extended stays.
              </p>
            </div>
          </div>

          {/* 3️⃣ Annual Car Rental */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Annual Car Leasing
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Enjoy your favorite ride all year long with our annual lease plans — including free maintenance, priority support, and luxury upgrades.
              </p>
            </div>
          </div>

          {/* 4️⃣ Chauffeur Services */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Chauffeur Services
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Experience the ease of traveling with professional drivers. Perfect for corporate events, airport transfers, or luxury rides around the city.
              </p>
            </div>
          </div>

          {/* 5️⃣ Airport Transfers */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Airport Transfers
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Enjoy seamless airport pickups and drop-offs with our punctual and professional drivers, ensuring comfort after long flights or before departures.
              </p>
            </div>
          </div>

          {/* 6️⃣ Wedding & Event Rentals */}
          <div className="relative group">
            <div className="service-item bg-[#1c1c1c] text-white rounded-[30px] w-full p-8 transition-all duration-500 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 hover:-translate-y-3 border border-transparent hover:border-[#f5b754]/50">
              <h5 className="font-semibold text-3xl mb-4 font-bricolage group-hover:text-[#f5b754] transition-colors">
                Wedding & Event Rentals
              </h5>
              <p className="text-[#ccc] text-lg leading-relaxed">
                Arrive in style with our luxury fleet for weddings, anniversaries, or special events — making your occasion truly unforgettable.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* Teams */}
      <div className="lg:px-[12%] px-[8%] py-[150px] section-effect">
        <div className="text-center">
            <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            Certified Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
            <span className="text-[#f5b754] font-bricolage">
                Our <span className="text-white">Experts</span>
            </span>
            </h2>
        </div>

        <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            spaceBetween={40}
            autoplay={{
            delay: 3000,
            }}
            pagination={true}
            breakpoints={{
                1400:{slidesPerView:3},
                1199:{slidesPerView:2},
                767:{slidesPerView:1.5},
                0:{slidesPerView:1}
            }}
            className='mt-[70px]'
        >
        <SwiperSlide>
            <div className="our-team relative rounded-2x1 overflow-hidden group shadow-md cursor-pointer">
            <img src={teams1} className='w-full h-72 object-cover z-[5]' alt="" />
                <div className="absolute z-[5]">
                    <div className="curv">
                        <div className="section-item-curv our-team-curv">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h4 className="text-xl lg:text-2xl mb-1 font-sembold font-bricolage">Margaret Nancy</h4>
                    <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="our-team relative rounded-2x1 overflow-hidden group shadow-md cursor-pointer">
            <img src={teams2} className='w-full h-72 object-cover z-[5]' alt="" />
                <div className="absolute z-[5]">
                    <div className="curv">
                        <div className="section-item-curv our-team-curv">
                            <i className="fa-solid fa-circle-info"></i>

                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h4 className="text-xl lg:text-2xl mb-1 font-sembold font-bricolage">Dan Martin</h4>
                    <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="our-team relative rounded-2x1 overflow-hidden group shadow-md cursor-pointer">
            <img src={teams3} className='w-full h-72 object-cover z-[5]' alt="" />
                <div className="absolute z-[5]">
                    <div className="curv">
                        <div className="section-item-curv our-team-curv">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h4 className="text-xl lg:text-2xl mb-1 font-sembold font-bricolage">Mia Jane</h4>
                    <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="our-team relative rounded-2x1 overflow-hidden group shadow-md cursor-pointer">
            <img src={teams4} className='w-full h-72 object-cover z-[5]' alt="" />
                <div className="absolute z-[5]">
                    <div className="curv">
                        <div className="section-item-curv our-team-curv">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h4 className="text-xl lg:text-2xl mb-1 font-sembold font-bricolage">Margaret Nancy</h4>
                    <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="our-team relative rounded-2x1 overflow-hidden group shadow-md cursor-pointer">
            <img src={teams5} className='w-full h-72 object-cover z-[5]' alt="" />
                <div className="absolute z-[5]">
                    <div className="curv">
                        <div className="section-item-curv our-team-curv">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                    </div>
                </div>
                <div className="team-info">
                    <h4 className="text-xl lg:text-2xl mb-1 font-sembold font-bricolage">Margaret Nancy</h4>
                    <h6 className="text-[#f2f2f2] xl:text-lg text-sm">Sales Department</h6>
                </div>
            </div>
        </SwiperSlide>

        </Swiper>
        </div>

    </>
  );
}

export default About;