import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import emailjs from 'emailjs-com'; // ✅ Add this if using EmailJS

import brand1 from '../../Assets/brand-1.png';
import brand2 from '../../Assets/brand-2.png';
import brand3 from '../../Assets/brand-3.png';
import brand4 from '../../Assets/brand-4.png';
import brand5 from '../../Assets/brand-5.png';
import brand6 from '../../Assets/brand-6.png';
import brand7 from '../../Assets/brand-7.png';

function Footer() {
  // ✅ Add missing state and handler
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      brand_name: "Drivora Rentals",
    };

    // --- EmailJS Integration (You can replace with your own backend later)
    emailjs
      .send(
        "YOUR_SERVICE_ID",   // e.g. service_xxx
        "YOUR_TEMPLATE_ID",  // e.g. template_yyy
        templateParams,
        "YOUR_PUBLIC_KEY"    // e.g. WpQG3jDxxxxxx
      )
      .then(
        () => {
          setMessage("🎉 Thank you for subscribing! Check your inbox for confirmation.");
          setEmail("");
        },
        (error) => {
          console.error("Error sending email:", error);
          setMessage("❌ Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      {/* --- Footer Banner --- */}
      <div className="footer-banner text-white lg:px-[12%] px-[8%] py-[10%] bg-[#111]">
        <div className="footer-banner-content relative text-center">
          <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
            Rent your Car
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
            Interested in Renting?
          </h2>
          <p className="py-3 text-gray-300">
            Don't hesitate and send us a message
          </p>

          <div className="footer-banner-button mt-5 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#f5b754] py-4 px-14 text-lg font-bricolage rounded-full flex items-center justify-center text-black hover:-translate-y-2 hover:bg-white transition duration-300">
              <i className="fa-brands fa-whatsapp pr-2 text-2xl"></i>
              WhatsApp
            </button>

            <button className="bg-[#f5b754] py-4 px-14 text-lg font-bricolage rounded-full flex items-center justify-center text-black hover:-translate-y-2 hover:bg-white transition duration-300">
              Rent now
              <i className="ri-arrow-right-up-line text-2xl pl-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* --- Footer Brand Slider --- */}
      <div className="footer-brands bg-[#222] w-full lg:px-[12%] px-[8%] py-[5%] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            1399: { slidesPerView: 6 },
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
          className="footer-brand-swiper"
        >
          {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map(
            (brand, idx) => (
              <SwiperSlide key={idx}>
                <div className="brand-image h-full w-full flex items-center justify-center group overflow-hidden transition">
                  <img
                    src={brand}
                    alt="brand"
                    className="h-full w-auto object-contain transition duration-300"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* --- Footer Contact Section --- */}
      <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border border-[#222] w-full">
          {/* Call Us */}
          <div className="flex items-center gap-4 p-6 border-r border-r-[#222]">
            <div className="bg-[#f5b754] text-black rounded-full w-12 h-12 flex items-center justify-center">
              <i className="ri-phone-fill text-2xl"></i>
            </div>
            <div>
              <h5 className="font-semibold font-bricolage">Call us</h5>
              <p>+034 32-432-4524</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-6 border-r border-r-[#222]">
            <div className="bg-[#f5b754] text-black rounded-full w-12 h-12 flex items-center justify-center">
              <i className="ri-mail-fill text-2xl"></i>
            </div>
            <div>
              <h5 className="font-semibold font-bricolage">Write to us</h5>
              <p>info@drivora.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-6">
            <div className="bg-[#f5b754] text-black rounded-full w-12 h-12 flex items-center justify-center">
              <i className="ri-map-pin-fill text-2xl"></i>
            </div>
            <div>
              <h5 className="font-semibold font-bricolage">Address</h5>
              <p>Drivora Tower, NH-24, Sitapur</p>
            </div>
          </div>
        </div>

        {/* --- Footer Content --- */}
        <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
            {/* Logo and Socials */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-3">
                <a href="/" className="text-4xl font-bold logo font-bricolage">
                  Dri<span>vora</span>
                </a>
              </h1>
              <p className="text-[#999] mb-6 md:w-[90%] w-full">
                Rent a car imperdiet sapien porttitor the bibendum elementum
                commodo erat nesuen.
              </p>
              <div className="flex gap-4">
                {['facebook-f', 'x-twitter', 'linkedin'].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="border border-[#f5b754] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#f5b754] hover:text-black transition-colors duration-300"
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[#999] footer-menu relative">
                {['About', 'Cars', 'Car Type', 'FAQ', 'Contact'].map(
                  (item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-[#f5b754] relative ps-5 transition duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Subscribe
              </h4>
              <p className="text-[#999] mb-4 text-sm">
                Subscribe to get the latest news, offers, and updates directly
                to your inbox.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex items-center border border-[#f5b754] rounded-full px-4 py-2"
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#f5b754] text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </form>

              {message && (
                <p className="text-[#f5b754] text-sm mt-3 font-medium">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="text-[#999] text-center text-base relative py-6">
          <p className="font-bricolage">
            © 2025 <span className="text-white">drivora.com</span>. All rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;



