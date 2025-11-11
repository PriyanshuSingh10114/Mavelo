import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '' });

    try {
      const response = await fetch("http://localhost:5000/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, message: "✅ Message sent successfully!" });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, message: "❌ Failed to send message. Try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ loading: false, message: "⚠️ Server not reachable. Try again later." });
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="banner-section contact-banner relative flex justify-center items-center h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url('../Image/blog-slide-03.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>

        <div className="banner-section-content relative z-10 text-center px-6">
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-[#f5b754] mb-3 text-sm md:text-base"
          >
            — Get in Touch
          </motion.h6>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold font-bricolage text-white drop-shadow-lg"
          >
            <span className="text-[#f5b754]">Contact</span> Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed"
          >
            We’re here to make your driving experience effortless and elegant.  
            Reach out to <span className="text-[#f5b754] font-semibold">Mavelo</span> for inquiries, bookings, or collaborations —  
            our team will connect with you at the speed of luxury.
          </motion.p>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="contact-section lg:px-[12%] px-[8%] bg-[#0f0f0f] py-[150px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#f5b75420,_transparent_70%)] pointer-events-none"></div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-3xl p-10 shadow-[0_0_40px_rgba(245,183,84,0.1)] transition-transform hover:-translate-y-1 duration-300">
            <h2 className="text-[#f5b754] text-3xl md:text-4xl font-bold font-bricolage mb-2 text-center">
              Let’s Connect
            </h2>
            <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
              Have a question, partnership idea, or booking inquiry?  
              Drop us a message — our team will get back to you swiftly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 contact-inputs">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full border border-transparent focus:border-[#f5b754]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full border border-transparent focus:border-[#f5b754]"
                />
              </div>

              {/* Number & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Number"
                  required
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full border border-transparent focus:border-[#f5b754]"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full border border-transparent focus:border-[#f5b754]"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="bg-[#222222] text-white placeholder:text-gray-400 px-5 py-4 rounded-md outline-none w-full h-40 border border-transparent focus:border-[#f5b754]"
              ></textarea>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-[#f5b754] hover:bg-[#e2a944] text-black px-14 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,183,84,0.4)]"
                >
                  {status.loading ? "Sending..." : "Send Message"}&nbsp;
                  <i className="ri-send-plane-2-line"></i>
                </button>
              </div>
              {status.message && (
                <p className="text-center text-[#f5b754] mt-4">{status.message}</p>
              )}
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(245,183,84,0.1)] border border-[#333] transition-transform duration-500 hover:scale-[1.02]">
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
  );
}

export default Contact;




