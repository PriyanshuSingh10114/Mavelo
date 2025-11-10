import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Services() {

  return (
    <>
      {/*Page Section*/}
      <div className="banner-section">
        <div className="banner-section-content">
            <h6 className='uppercase'>What we do</h6>
            <h1 className='text-5xl font-semibold font-bricolage text-[#f5b574]'><span className='text-white font-bricolage'>Our</span> Services</h1>
        </div>
      </div>

    {/* Our Services Section */}
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

    </>
  );
}

export default Services;