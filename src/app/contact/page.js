"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaQuestionCircle,
  FaWhatsapp,
} from "react-icons/fa";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("Message Sent Successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  const faqs = [
    {
      q: "Do you offer transit insurance?",
      a: "Yes, we offer comprehensive transit insurance for high-value goods upon request to ensure your peace of mind.",
    },
    {
      q: "How can I track my shipment?",
      a: "You can call our dispatch team directly or use the WhatsApp support line for real-time location updates.",
    },
    {
      q: "What are your payment terms?",
      a: "We accept 50% advance upon loading and the balance upon delivery (before unloading). We accept Cash, UPI, and Bank Transfer.",
    },
    {
      q: "Do you handle ODC (Over Dimensional Cargo)?",
      a: "Absolutely. We specialize in heavy haulage and have trailers specifically designed for ODC shipments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-12">
      {/* 1. HERO HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-black mb-6"
        >
          Let's Get <span className="text-[#39FF14]">Moving</span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Have a load to ship? Need a quote? Reach out to our Kanpur HQ.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 2. CONTACT INFO CARD (Dark Mode) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {/* Abstract Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14] rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>

            <h2 className="text-3xl font-bold mb-10 relative z-10 text-white border-l-4 border-[#39FF14] pl-6">
              Headquarters
            </h2>

            <div className="space-y-10 relative z-10">
              {/* Address */}
              <div className="flex items-start group">
                <div className="bg-white/10 p-4 rounded-2xl mr-6 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300 shadow-lg shrink-0">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-wider text-xs">
                    Address
                  </h3>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    261-B, Bhavani Nagar,
                    <br />
                    (Near By Pass Road),
                    <br />
                    Kanpur H.O., UP - 208001
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start group">
                <div className="bg-white/10 p-4 rounded-2xl mr-6 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300 shadow-lg shrink-0">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-wider text-xs">
                    Dispatch & Booking
                  </h3>
                  <p className="text-white text-xl font-bold">
                    +91 9415 44 1542
                  </p>
                  <p className="text-gray-400 mt-1 flex items-center gap-2 text-sm">
                    <FaWhatsapp className="text-[#39FF14]" /> Available on
                    WhatsApp
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="bg-white/10 p-4 rounded-2xl mr-6 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300 shadow-lg shrink-0">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-wider text-xs">
                    Email Us
                  </h3>
                  <p className="text-white text-lg font-medium">
                    contact@cgorissa.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start group">
                <div className="bg-white/10 p-4 rounded-2xl mr-6 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300 shadow-lg shrink-0">
                  <FaClock className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-400 mb-1 uppercase tracking-wider text-xs">
                    Operations
                  </h3>
                  <p className="text-white font-medium">
                    Mon - Sat: 10:30 AM – 9:00 PM
                  </p>
                  <p className="text-red-400 font-bold text-sm mt-1">
                    Sunday Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative"
          >
            <h2 className="text-3xl font-black text-black mb-2">
              Request a Quote
            </h2>
            <p className="text-gray-500 mb-8">
              Fill the form below and we will get back to you within 2 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#39FF14] outline-none transition-all bg-gray-50 focus:bg-white text-black font-bold placeholder-gray-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#39FF14] outline-none transition-all bg-gray-50 focus:bg-white text-black font-bold placeholder-gray-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#39FF14] outline-none transition-all bg-gray-50 focus:bg-white text-black font-bold placeholder-gray-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Load Details / Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#39FF14] outline-none transition-all bg-gray-50 focus:bg-white text-black font-bold placeholder-gray-300"
                  placeholder="E.g. Need to move 15 tons of steel from Kanpur to Raipur..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`cursor-pointer w-full bg-black text-white font-black py-5 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:bg-[#39FF14] hover:text-black text-lg flex justify-center items-center gap-3 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>

              {status && (
                <p
                  className={`text-center font-bold p-3 rounded-lg ${
                    status.includes("Success")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* 4. GOOGLE MAPS EMBED */}
      <div className="w-full h-[400px] bg-gray-200 mb-24 relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114313.6404762142!2d80.22071070234719!3d26.44601627969699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47007ebf9251%3A0xcb5d805ba695b59!2sBhawani%20nagar!5e0!3m2!1sen!2sin!4v1767187528199!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="group-hover:filter-none transition-all duration-500"
          title="Office Location"
        ></iframe>
        <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl border-l-4 border-[#39FF14] hidden md:block">
          <p className="font-bold text-black text-sm">📍 Locate Us Here</p>
        </div>
      </div>

      {/* 5. FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-black text-center mb-12 flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-[#39FF14]" /> Frequently Asked
          Questions
        </h2>
        <div className="grid gap-6">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#39FF14] transition-colors"
            >
              <h3 className="text-lg font-bold text-black mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
