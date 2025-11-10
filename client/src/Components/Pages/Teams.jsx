import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import teams1 from '../../Assets/test-1.jpg';
import teams2 from '../../Assets/test-2.jpg';
import teams3 from '../../Assets/test-3.jpg';
import teams4 from '../../Assets/test-4.jpg';
import teams5 from '../../Assets/test-5.jpg';

function Teams() {
  const [activeTab, setActiveTab] = useState('Biography');
  const Tabs = ['Biography', 'Education', 'Rewards'];

  const content = {
    Biography:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates fuga nemo dolorum aspernatur reprehenderit perspiciatis perferendis quia ex, sit asperiores fugiat eos natus sint!',
    Education:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, qui culpa! Numquam expedita, ipsa aut iusto labore adipisci recusandae dolor minima quis alias a.',
    Rewards:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, qui culpa! Numquam expedita, ipsa aut iusto labore adipisci recusandae dolor minima quis alias a.'
  };

  return (
    <>
      {/* Banner Section */}
      <div className="banner-section teams-section relative flex justify-center items-center bg-black h-[300px]">
        <div className="banner-section-content text-center z-10">
          <h1 className="text-5xl font-semibold font-bricolage text-[#f5b574]">
            <span className="text-white">About</span> our Team
          </h1>
        </div>
      </div>

      {/* Team Info Section */}
      <div className="teams-container px-[8%] 2xl:px-[18%] py-[80px] bg-[#121212] text-white flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Image & Socials */}
        <div className="teams-images w-full lg:w-1/2">
          <div className="teams-image mb-6">
            <img src={teams1} alt="team" className="rounded-2xl w-full object-cover" />
          </div>

          <div className="teams-icon flex gap-4 mt-4">
            {['facebook-f', 'x-twitter', 'instagram', 'tiktok'].map((icon, idx) => (
              <i
                key={idx}
                className={`fa-brands fa-${icon} hover:bg-[#f5b754] transition-colors cursor-pointer border border-[#f5b754] h-14 w-14 text-2xl flex justify-center items-center rounded-full`}
              ></i>
            ))}
          </div>

          <p className="mt-6 text-[#999] text-lg">
            My Email Address:{' '}
            <a href="mailto:info@example.com" className="text-white underline">
              info@example.com
            </a>
          </p>
        </div>

        {/* Right Side - Bio & Tabs */}
        <div className="teams-content w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-bricolage">
            Hello, I'm Olivia Brown. I work as your sales consultant at Drivora Luxury Car Rental.
          </h2>

          <p className="text-[#999] text-lg mb-8">
            Car rental utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam.
          </p>

          <ul className="mb-9 space-y-3">
            {['B Driver License', "Bachelor's Degree", 'Great Communication Skills'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xl text-[#999]">
                <i className="fa-solid fa-check text-[#f5b754] bg-[#222] p-3 text-xl rounded-full"></i>
                {item}
              </li>
            ))}
          </ul>

          {/* Tabs */}
          <div className="flex border-b border-[#f5b754] mb-4 space-x-8">
            {Tabs.map((tab) => (
              <button
                key={tab}
                className={`text-xl pb-4 font-semibold transition duration-300 ${
                  activeTab === tab ? 'text-[#f5b754]' : 'text-white hover:text-[#f5b754]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <p className="text-[#999] text-lg">{content[activeTab]}</p>
        </div>
      </div>

      {/* Expert Team Section */}
      <div className="lg:px-[12%] px-[8%] py-[150px] bg-[#0e0e0e] section-effect">
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">Certified Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-bricolage">
            <span className="text-[#f5b754]">Our </span>
            <span>Experts</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          spaceBetween={40}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            1400: { slidesPerView: 3 },
            1199: { slidesPerView: 2 },
            767: { slidesPerView: 1.5 },
            0: { slidesPerView: 1 }
          }}
          className="mt-[70px]"
        >
          {[teams1, teams2, teams3, teams4, teams5].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="our-team relative overflow-hidden rounded-2xl group shadow-md cursor-pointer">
                <img src={img} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" alt="team member" />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                  <i className="fa-solid fa-circle-info text-[#f5b754] text-4xl"></i>
                </div>

                <div className="team-info absolute bottom-0 left-0 w-full bg-black/70 text-center py-4">
                  <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage text-white">
                    {['Margaret Nancy', 'Dan Martin', 'Mia Jane', 'Chris Doe', 'Alex Smith'][index]}
                  </h4>
                  <h6 className="text-[#f2f2f2] text-sm xl:text-lg">Sales Department</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Teams;
