// ...existing code...
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import heroSlide1 from '../../Assets/hero-slide-1.jpg';
import heroSlide2 from '../../Assets/hero-slide-2.jpg';
import heroSlide3 from '../../Assets/hero-slide-3.jpg';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import about from '../../Assets/about.jpg';

import { Link } from 'react-router-dom';
import Cars from '../../../Cars.json' 

import carType1 from '../../Assets/car-1.jpg'
import carType2 from '../../Assets/car-2.jpg'
import carType3 from '../../Assets/car-3.jpg'
import carType4 from '../../Assets/car-4.jpg'
import carType5 from '../../Assets/car-5.jpg'
import carType6 from '../../Assets/car-6.jpg'

import test1 from '../../Assets/test-1.jpg'
import test2 from '../../Assets/test-2.jpg'
import test3 from '../../Assets/test-3.jpg'
import test4 from '../../Assets/test-4.jpg'
import test5 from '../../Assets/test-5.jpg'

import newsCar1 from '../../Assets/blog-slide-01.jpg'
import newsCar2 from '../../Assets/blog-slide-02.jpg'
import newsCar3 from '../../Assets/blog-slide-03.jpg'
import newsCar4 from '../../Assets/blog-slide-04.jpg'
import newsCar5 from '../../Assets/blog-slide-05.jpg'
import newsCar6 from '../../Assets/blog-slide-06.jpeg'

import { useNavigate } from "react-router-dom";
// ...existing code...

function Index() {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [carType, setCarType] = React.useState("");
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [dropLocation, setDropLocation] = React.useState("");

  const [isCarOpen, setIsCarOpen] = React.useState(false);
  const [isPickupOpen, setIsPickupOpen] = React.useState(false);
  const [isDropOpen, setIsDropOpen] = React.useState(false);

  const pickUpRef = useRef(null);
  const returnRef = useRef(null);
  const navigate = useNavigate();

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
      {/*Hero*/}
    <div className="hero relative w-full h-screen overflow-hidden">
      {/* --- HERO SLIDER --- */}
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        speed={1500}
        className="w-full h-full"
      >
        {[heroSlide1, heroSlide2, heroSlide3].map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div
              className="relative w-full h-full flex items-center justify-start px-[10%] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* HERO CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-white max-w-[750px]"
              >
                <span className="font-bricolage uppercase tracking-[5px] text-[#f5b754] text-sm">
                  Premium Experience
                </span>

                <h1 className="text-[3rem] md:text-[5rem] xl:text-[6.5rem] leading-tight font-bricolage font-bold mt-2 drop-shadow-lg">
                  Rent a Luxury Car
                </h1>

                <p className="text-gray-300 text-base md:text-lg xl:text-xl mt-4 leading-relaxed max-w-[650px]">
                  Redefine your travel experience with our exclusive fleet of
                  luxury cars — comfort, power, and style built for those who
                  drive differently.
                </p>

                <div className="flex flex-wrap gap-5 mt-8">
                <button onClick={() => {
                    const section = document.getElementById("luxury-cars");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-[#f5b754] hover:bg-white text-black font-bricolage px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  View More&nbsp;
                  <i className="bi bi-arrow-up-right"></i>
                </button>

                  <button
                    onClick={() => navigate("/cars")}
                    className="border border-[#f5b754] text-white hover:bg-[#f5b754] hover:text-black font-bricolage px-8 py-4 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 shadow-md"
                  >
                    Rent Now&nbsp;
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    {/* --- BOOKING PANEL (replace this block only) --- */}
    <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[1200px]">
      <div className="book-option bg-[#1a1a1a]/95 backdrop-blur-md text-white rounded-3xl px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 shadow-2xl border border-[#333] items-center">

    {/* Car Type */}
        <div className="relative px-4 py-3 border-r border-gray-700/60">
          <button
            className="flex items-center gap-2 w-full justify-between text-gray-300 hover:text-[#f5b754]"
            onClick={() => setIsCarOpen(!isCarOpen)}
          >
            <span>{carType || "Car Type"}</span>
            <i className="ri-arrow-down-s-line text-[#f5b754]"></i>
          </button>

          {isCarOpen && (
            <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
              <ul className="divide-y divide-gray-700">
                {["Sedan", "SUV", "Convertible", "Luxury", "Compact"].map((type) => (
                  <li
                    key={type}
                    onClick={() => { setCarType(type); setIsCarOpen(false); }}
                    className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Pick-Up Location */}
        <div className="relative px-4 py-3 border-r border-gray-700/60">
          
          <button
            className="flex items-center w-full justify-between text-gray-300 hover:text-[#f5b754]"
            onClick={() => setIsPickupOpen(!isPickupOpen)}
          >
            <span>{pickupLocation || "Pick-Up Location"}</span>
            <i className="ri-map-pin-line text-[#f5b754]"></i>
          </button>

          {isPickupOpen && (
            <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
              <ul className="divide-y divide-gray-700">
                {["Abu Dhabi", "Al Ain", "Dubai", "Sharjah"].map((loc) => (
                  <li
                    key={loc}
                    onClick={() => { setPickupLocation(loc); setIsPickupOpen(false); }}
                    className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* 3) Pick-Up Date */}
        <div
          className="relative px-4 py-3 flex items-center border-r border-gray-700/60"
          onClick={openCalendar}
        >
          <DatePicker
            selected={pickUpDate}
            onChange={(date) => setPickUpDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pick-Up Date"
            ref={pickUpRef}
            className={`bg-transparent text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
            calendarClassName="light-datepicker"
            popperPlacement="bottom-start"
          />
          <i className="ri-calendar-line text-[#f5b754] pointer-events-none ml-3"></i>
        </div>

        {/* Drop-Off Location */}
        <div className="relative px-4 py-3 border-r border-gray-700/60">

          <button
            className="flex items-center w-full justify-between text-gray-300 hover:text-[#f5b754]"
            onClick={() => setIsDropOpen(!isDropOpen)}
          >
            <span>{dropLocation || "Drop-Off Location"}</span>
            <i className="ri-map-pin-line text-[#f5b754]"></i>
          </button>

          {isDropOpen && (
            <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
              <ul className="divide-y divide-gray-700">
                {["Abu Dhabi", "Al Ain", "Dubai", "Sharjah"].map((loc) => (
                  <li
                    key={loc}
                    onClick={() => { setDropLocation(loc); setIsDropOpen(false); }}
                    className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* 5) Return Date */}
        <div
          className="relative px-4 py-3 flex items-center"
          onClick={openReturnCalendar}
        >
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Return Date"
            ref={returnRef}
            className={`bg-transparent text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
            calendarClassName="light-datepicker"
            popperPlacement="bottom-start"
          />
          <i className="ri-calendar-line text-[#f5b754] pointer-events-none ml-3"></i>
        </div>

        {/* 6) Search Button */}
        <button 
          onClick={() => navigate("/cars#cars-section")}
          className="bg-[#f5b754] text-black font-semibold px-6 py-3 rounded-full 
              w-full sm:w-auto hover:bg-white hover:-translate-y-1 transition-all 
              duration-300 shadow-md font-bricolage flex items-center justify-center gap-2"
        >
          <i className="ri-search-line"></i>
          Search
        </button>

      </div>
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
          <div className="relative px-4 py-3 border-r border-gray-700/60">
            <button
              className="flex items-center gap-2 w-full justify-between text-gray-300 hover:text-[#f5b754]"
              onClick={() => setIsCarOpen(!isCarOpen)}
            >
              <span>{carType || "Car Type"}</span>
              <i className="ri-arrow-down-s-line text-[#f5b754]"></i>
            </button>

            {isCarOpen && (
              <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
                <ul className="divide-y divide-gray-700">
                  {["Sedan", "SUV", "Convertible", "Luxury", "Compact"].map((type) => (
                    <li
                      key={type}
                      onClick={() => { setCarType(type); setIsCarOpen(false); }}
                      className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Pick-Up Location */}
          <div className="relative px-4 py-3 border-r border-gray-700/60">
            
            <button
              className="flex items-center w-full justify-between text-gray-300 hover:text-[#f5b754]"
              onClick={() => setIsPickupOpen(!isPickupOpen)}
            >
              <span>{pickupLocation || "Pick-Up Location"}</span>
              <i className="ri-map-pin-line text-[#f5b754]"></i>
            </button>

            {isPickupOpen && (
              <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
                <ul className="divide-y divide-gray-700">
                  {["Abu Dhabi", "Al Ain", "Dubai", "Sharjah"].map((loc) => (
                    <li
                      key={loc}
                      onClick={() => { setPickupLocation(loc); setIsPickupOpen(false); }}
                      className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* 3) Pick-Up Date */}
          <div
            className="relative px-4 py-3 flex items-center border-r border-gray-700/60"
            onClick={openCalendar}
          >
            <DatePicker
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Pick-Up Date"
              ref={pickUpRef}
              className={`bg-transparent text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
              calendarClassName="light-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-[#f5b754] pointer-events-none ml-3"></i>
          </div>

          {/* Drop-Off Location */}
          <div className="relative px-4 py-3 border-r border-gray-700/60">

            <button
              className="flex items-center w-full justify-between text-gray-300 hover:text-[#f5b754]"
              onClick={() => setIsDropOpen(!isDropOpen)}
            >
              <span>{dropLocation || "Drop-Off Location"}</span>
              <i className="ri-map-pin-line text-[#f5b754]"></i>
            </button>

            {isDropOpen && (
              <div className="absolute top-[110%] left-0 w-56 bg-[#1f1f1f] border border-[#f5b754] rounded-md shadow-md z-50">
                <ul className="divide-y divide-gray-700">
                  {["Abu Dhabi", "Al Ain", "Dubai", "Sharjah"].map((loc) => (
                    <li
                      key={loc}
                      onClick={() => { setDropLocation(loc); setIsDropOpen(false); }}
                      className="px-4 py-2 hover:bg-[#f5b754] hover:text-black cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* 5) Return Date */}
          <div
            className="relative px-4 py-3 flex items-center"
            onClick={openReturnCalendar}
          >
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Return Date"
              ref={returnRef}
              className={`bg-transparent text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
              calendarClassName="light-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-[#f5b754] pointer-events-none ml-3"></i>
          </div>

          {/* 6) Search Button */}
          <button
            onClick={() => {
              console.log({
                carType,
                pickupLocation,
                pickUpDate,
                dropLocation,
                returnDate
              });

              alert("Search Triggered! Check console for selected values.");
            }}
            className="bg-[#f5b754] text-black font-semibold px-6 py-3 rounded-full 
            w-full sm:w-auto hover:bg-white hover:-translate-y-1 transition-all 
            duration-300 shadow-md font-bricolage flex items-center justify-center gap-2"
          >
            <i className="ri-search-line"></i>
            Search
          </button>

        </div>
      </div>
    </div>


      {/*Luxury Cars*/}
    <div id="luxury-cars" className='luxury-cars relative text-white py-[180px] bg-[#0b0b0b] overflow-hidden'>
      {/* Subtle golden lighting and gradient background */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#111111] z-0'></div>
      <div className='absolute left-[-100px] top-[200px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl'></div>
      <div className='absolute right-[-150px] bottom-[150px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl'></div>

      <div className='text-center relative z-10 mb-16'>
        <p className='uppercase text-sm tracking-[6px] text-[#f5b754] mb-3'>
          Select Your Car
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 font-bricolage'>
          Luxury <span className='text-[#f5b754]'>Car Fleet</span>
        </h2>
        <div className='w-20 h-[3px] bg-[#f5b754] mx-auto rounded-full'></div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={1200}
        className='relative w-full h-full z-10 px-6'
      >
        {Cars.map((car) => (
          <SwiperSlide key={car.id} className='transition-transform duration-700'>
            <div className='group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-transparent hover:border-[#f5b754]/60 shadow-lg shadow-black/40 hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 hover:bg-[#222222]'>
              {/* Car Image with hover zoom effect */}
              <div className='overflow-hidden relative'>
                <img
                  src={car.image}
                  alt={car.name}
                  className='w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500'></div>
                <div className='absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <p className='bg-[#f5b754] text-black px-3 py-1 rounded-full text-xs font-semibold'>
                    ${car.price}/day
                  </p>
                </div>
              </div>

              {/* Car Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-semibold mb-2 font-bricolage'>
                  {car.name}
                </h3>

                {/* Car Info Row */}
                <div className='flex flex-wrap gap-4 text-sm text-gray-300 mt-3'>
                  <span className='flex items-center gap-2'>
                    <i className='text-[#f5b754] bi bi-wallet2'></i>
                    {car.door}
                  </span>
                  <span className='flex items-center gap-2'>
                    <i className='text-[#f5b754] bi bi-person-gear'></i>
                    {car.passengers}
                  </span>
                  <span className='flex items-center gap-2'>
                    <i className='text-[#f5b754] bi bi-gear-wide-connected'></i>
                    {car.transmission}
                  </span>
                  <span className='flex items-center gap-2'>
                    <i className='text-[#f5b754] bi bi-briefcase'></i>
                    {car.Bages}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className='mt-6 flex justify-between items-center'>
                  <Link to={`/car/${car.id}`}>
                    <button className='bg-[#f5b754] text-black px-5 py-2 rounded-full text-sm hover:bg-white transition duration-300 shadow-md hover:-translate-y-1 font-bricolage'>
                      Details
                    </button>
                  </Link>

                  <button className='border border-[#f5b754] text-[#f5b754] px-5 py-2 rounded-full text-sm hover:bg-[#f5b754] hover:text-black transition duration-300 font-bricolage'>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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


      {/*Testimonials*/}
    <div className="Testimonials relative lg:px-[12%] px-[8%] py-[180px] bg-[#0b0b0b] overflow-hidden">
      {/* Subtle gold light & background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1a1a1a]/60 to-[#0b0b0b] z-0"></div>
      <div className="absolute left-[-150px] top-[200px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-[-200px] bottom-[150px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>

      <div className="our-services-content mb-20 text-center text-white relative z-10">
        <p className='uppercase text-sm tracking-[6px] text-[#f5b754] mb-3'>Testimonials</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 font-bricolage'>
          What Our <span className='text-[#f5b754] font-bricolage'>Clients Say</span>
        </h2>
        <div className='w-20 h-[3px] bg-[#f5b754] mx-auto rounded-full'></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1400: { slidesPerView: 3 }
        }}
        className="relative z-10"
      >

        {/* ⭐ Olivia Brown */}
        <SwiperSlide>
          <div className="rounded-[30px] bg-[#1a1a1a] text-left p-8 shadow-lg hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border border-transparent hover:border-[#f5b754]/30">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className='text-[#f5b754] text-lg'>★</span>
                ))}
              </div>
            </div>

            <div className='text-[#ccc] text-lg leading-relaxed mb-8 italic'>
              “Mavelo made my trip seamless! I booked a luxury BMW for 3 days — pickup was smooth, and the car felt brand new. Easily the best rental experience I’ve had.”
            </div>

            <div className='flex items-center'>
              <div className="section-item-curv test-curv">
                <img src={test1} alt="" className='rounded-full w-16 h-16 object-cover' />
              </div>
              <div className='ml-4'>
                <p className='font-semibold font-bricolage text-[#f5b754] text-lg'>Olivia Brown</p>
                <p className='text-[#999] text-sm'>Marketing Executive, Dubai</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ⭐ Dan Martin */}
        <SwiperSlide>
          <div className="rounded-[30px] bg-[#1a1a1a] text-left p-8 shadow-lg hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border border-transparent hover:border-[#f5b754]/30">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className='text-[#f5b754] text-lg'>★</span>
                ))}
              </div>
            </div>

            <div className='text-[#ccc] text-lg leading-relaxed mb-8 italic'>
              “Incredible service! I needed a last-minute car for a business trip — Mavelo handled everything professionally. The Mercedes was spotless and on time.”
            </div>

            <div className='flex items-center'>
              <div className="section-item-curv test-curv">
                <img src={test2} alt="" className='rounded-full w-16 h-16 object-cover' />
              </div>
              <div className='ml-4'>
                <p className='font-semibold font-bricolage text-[#f5b754] text-lg'>Dan Martin</p>
                <p className='text-[#999] text-sm'>Entrepreneur, Abu Dhabi</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ⭐ Nat Sciver */}
        <SwiperSlide>
          <div className="rounded-[30px] bg-[#1a1a1a] text-left p-8 shadow-lg hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border border-transparent hover:border-[#f5b754]/30">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className='text-[#f5b754] text-lg'>★</span>
                ))}
              </div>
            </div>

            <div className='text-[#ccc] text-lg leading-relaxed mb-8 italic'>
              “The team went above and beyond! They delivered my rental directly to my hotel, and the Porsche felt absolutely premium. Highly recommended for luxury seekers.”
            </div>

            <div className='flex items-center'>
              <div className="section-item-curv test-curv">
                <img src={test3} alt="" className='rounded-full w-16 h-16 object-cover' />
              </div>
              <div className='ml-4'>
                <p className='font-semibold font-bricolage text-[#f5b754] text-lg'>Nat Sciver</p>
                <p className='text-[#999] text-sm'>Luxury Traveler, London</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ⭐ Emily Martin */}
        <SwiperSlide>
          <div className="rounded-[30px] bg-[#1a1a1a] text-left p-8 shadow-lg hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border border-transparent hover:border-[#f5b754]/30">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className='text-[#f5b754] text-lg'>★</span>
                ))}
              </div>
            </div>

            <div className='text-[#ccc] text-lg leading-relaxed mb-8 italic'>
              “Booked their chauffeur service for a client event — extremely punctual and courteous driver. The entire ride felt professional and elegant.”
            </div>

            <div className='flex items-center'>
              <div className="section-item-curv test-curv">
                <img src={test4} alt="" className='rounded-full w-16 h-16 object-cover' />
              </div>
              <div className='ml-4'>
                <p className='font-semibold font-bricolage text-[#f5b754] text-lg'>Emily Martin</p>
                <p className='text-[#999] text-sm'>Event Planner, Sharjah</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* ⭐ Chris Lynn */}
        <SwiperSlide>
          <div className="rounded-[30px] bg-[#1a1a1a] text-left p-8 shadow-lg hover:shadow-[#f5b754]/20 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between border border-transparent hover:border-[#f5b754]/30">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className='text-[#f5b754] text-lg'>★</span>
                ))}
              </div>
            </div>

            <div className='text-[#ccc] text-lg leading-relaxed mb-8 italic'>
              “I rented a Range Rover for a family trip — everything from booking to return was flawless. The staff was kind, responsive, and truly professional.”
            </div>

            <div className='flex items-center'>
              <div className="section-item-curv test-curv">
                <img src={test5} alt="" className='rounded-full w-16 h-16 object-cover' />
              </div>
              <div className='ml-4'>
                <p className='font-semibold font-bricolage text-[#f5b754] text-lg'>Chris Lynn</p>
                <p className='text-[#999] text-sm'>Corporate Client, Doha</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>


      {/*Blog*/}
    <div className="blog relative lg:px-[12%] px-[8%] py-[180px] bg-[#0b0b0b] overflow-hidden">
      {/* Glowing background lights */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#1a1a1a]/60 to-[#0b0b0b] z-0"></div>
      <div className="absolute left-[-150px] top-[200px] w-[400px] h-[400px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-[-200px] bottom-[150px] w-[350px] h-[350px] bg-[#f5b754]/10 rounded-full blur-3xl"></div>

      <div className="our-services-content mb-20 text-center text-white relative z-10">
        <p className='uppercase text-sm tracking-[6px] text-[#f5b754] mb-3'>Our Blog</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 font-bricolage'>
          Latest <span className='text-[#f5b754] font-bricolage'>News & Insights</span>
        </h2>
        <div className='w-20 h-[3px] bg-[#f5b754] mx-auto rounded-full'></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1400: { slidesPerView: 3 }
        }}
        className="relative z-10"
      >

        {/* 📰 Blog 1 */}
        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
            <div className="relative overflow-hidden">
              <img src={newsCar1} alt="Luxury Rentals" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            <div className="mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
                <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  Sept 5, 2025
                </span>

                <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
                  <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>Martin C</span>
                  <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Luxury Cars</span>
                </div>

                <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
                  The Future of Premium Car Rentals in 2025
                </h3>
                <p className='text-gray-400 text-sm mb-4'>
                  Explore how AI, subscription models, and sustainability are transforming luxury car rentals across major cities.
                </p>

                <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
                  <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 📰 Blog 2 */}
        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
            <div className="relative overflow-hidden">
              <img src={newsCar2} alt="Luxury Fleet" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            <div className="mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
                <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  Aug 20, 2025
                </span>

                <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
                  <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>Emily R</span>
                  <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Travel</span>
                </div>

                <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
                  Why Luxury SUVs Dominate Modern Travel
                </h3>
                <p className='text-gray-400 text-sm mb-4'>
                  Comfort, safety, and tech integration make SUVs the most preferred option among luxury travelers worldwide.
                </p>

                <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
                  <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 📰 Blog 3 */}
        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
            <div className="relative overflow-hidden">
              <img src={newsCar3} alt="Sustainability" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            <div className="mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
                <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  July 10, 2025
                </span>

                <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
                  <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>Olivia B</span>
                  <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Green Drive</span>
                </div>

                <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
                  Electric Cars: The Future of Urban Luxury Rentals
                </h3>
                <p className='text-gray-400 text-sm mb-4'>
                  Discover how electric fleets are redefining comfort, class, and eco-consciousness in premium car hire.
                </p>

                <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
                  <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 📰 Blog 4 */}
        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
            <div className="relative overflow-hidden">
              <img src={newsCar4} alt="Car Tech" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            <div className="mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
                <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  June 15, 2025
                </span>

                <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
                  <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>James K</span>
                  <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Innovation</span>
                </div>

                <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
                  AI-Powered Cars: The New Edge in Luxury Rentals
                </h3>
                <p className='text-gray-400 text-sm mb-4'>
                  From adaptive cruise to smart diagnostics — see how AI is shaping the next era of luxury travel experiences.
                </p>

                <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
                  <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
            <div className="relative overflow-hidden">
              <img src={newsCar5} alt="EV Future" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
            </div>

            <div className="mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
                <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  July 02, 2025
                </span>

                <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
                  <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>Sophia R</span>
                  <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Electric</span>
                </div>

                <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
                  Electric Luxury Cars: The Silent Revolution Begins
                </h3>

                <p className='text-gray-400 text-sm mb-4'>
                  Explore how high-end EVs are redefining performance, sustainability, and premium travel experiences worldwide.
                </p>

                <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
                  <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
  <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300 hover:-translate-y-3">
    <div className="relative overflow-hidden">
      <img src={newsCar6} alt="Supercar Trends" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
    </div>

    <div className="mt-8 px-5">
      <div className="relative bg-[#1d1d1d] text-white p-6 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#f5b754]/30">
        <span className='absolute -top-4 left-5 bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
          May 28, 2025
        </span>

        <div className='text-xs text-[#f5b754] mb-3 flex gap-4 items-center'>
          <span className='flex items-center gap-1'><i className="ri-user-line text-sm"></i>Michael T</span>
          <span className='flex items-center gap-1'><i className="ri-folder-line text-sm"></i>Supercars</span>
        </div>

        <h3 className='text-xl font-semibold text-white leading-snug mb-2 hover:text-[#f5b754] transition'>
          Why Supercar Rentals Are Booming in 2025
        </h3>

        <p className='text-gray-400 text-sm mb-4'>
          Demand for exotic rentals is at an all-time high — discover what’s driving the hype behind modern supercar culture.
        </p>

        <a href="#" className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f5b754] flex items-center justify-center transition-all duration-500 hover:bg-[#f5b754]'>
          <i className="ri-arrow-right-up-line text-[#f5b754] group-hover:text-black transition duration-300"></i>
        </a>
      </div>
    </div>
  </div>
        </SwiperSlide>



      </Swiper>
    </div>


      
    </>
  );
}

export default Index;