import React from 'react'

function Contact() {
  return (
    <>
      {/* Banner Section */}
      <div className="banner-section contact-banner relative flex justify-center items-center">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase font-bricolage text-[#f5b754]">Get in Touch</h6>
          <h1 className="text-5xl font-semibold font-bricolage text-[#f5b574]">
            <span className="text-white font-bricolage">Contact</span> Us
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-wrapper lg:px-[12%] px-[8%] bg-[#1b1b1b] pb-[150px] pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-12">

          {/* Email */}
          <div className="contact-item group overflow-hidden relative bg-[#222] cursor-pointer p-12 text-center rounded-2xl shadow-lg">
            <i className="fa-solid fa-envelope text-[#f5b754] text-5xl mb-6 group-hover:text-black transition-colors duration-300"></i>
            <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mb-3">Email us</h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">info@example.com</p>
            <i className="fa-solid fa-envelope contact-item-icon"></i>
          </div>

          {/* Address */}
          <div className="contact-item group overflow-hidden relative bg-[#222] cursor-pointer p-12 text-center rounded-2xl shadow-lg">
            <i className="fa-solid fa-location-dot text-[#f5b754] text-5xl mb-6 group-hover:text-black transition-colors duration-300"></i>
            <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mb-3">Our Address</h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              NH-24, Sitapur, Uttar Pradesh
            </p>
            <i className="fa-solid fa-location-dot contact-item-icon"></i>
          </div>

          {/* Opening Hours */}
          <div className="contact-item group overflow-hidden relative bg-[#222] cursor-pointer p-12 text-center rounded-2xl shadow-lg">
            <i className="fa-solid fa-clock text-[#f5b754] text-5xl mb-6 group-hover:text-black transition-colors duration-300"></i>
            <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mb-3">Opening Hours</h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black leading-relaxed">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Sat: 10:00 AM - 4:00 PM
            </p>
            <i className="fa-solid fa-clock contact-item-icon"></i>
          </div>

          {/* Call Us */}
          <div className="contact-item group overflow-hidden relative bg-[#222] cursor-pointer p-12 text-center rounded-2xl shadow-lg">
            <i className="fa-solid fa-phone text-[#f5b754] text-5xl mb-6 group-hover:text-black transition-colors duration-300"></i>
            <h4 className="font-bricolage text-2xl xl:text-4xl font-semibold mb-3">Call us</h4>
            <p className="text-[#999] text-base xl:text-xl group-hover:text-black">
              +91 98765 43210
            </p>
            <i className="fa-solid fa-phone contact-item-icon"></i>
          </div>

        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="lg:px-[12%] px-[8%] bg-[#1b1b1b] pb-[150px]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Contact Form */}
          <div>
            <h2 className="text-white text-3xl font-semibold mb-8 text-center">Get In Touch</h2>
            <form className="space-y-5 contact-inputs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Number"
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full"
                />
              </div>

              <textarea
                placeholder="Message"
                className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full h-40"
              ></textarea>

              <button
                type="button"
                className="bg-[#f5b754] hover:bg-[#e2a944] text-black px-14 py-4 rounded-full text-xl font-normal transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14232.298255644353!2d80.6609!3d27.5619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d05cf89b3b5cb%3A0x8b7c8abf4c4e3f74!2sSitapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708549650000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact



