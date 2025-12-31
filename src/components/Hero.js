"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-white md:pt-18"
    >
      {/* Background Image / Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/v6m7JXNV/Gemini-Generated-Image-swhxqsswhxqsswhx-1.jpg')",
        }}
      >
        {/* Light overlay for text readability
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Padding and Layout */}
        <div className="w-full md:w-2/3 lg:w-1/2  md:pt-40 pb-10">
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-black font-bold text-lg uppercase tracking-widest mb-4 border-l-4 border-[#39FF14] pl-4"
            >
              Logistics & Transport{" "}
              <span className="text-[#39FF14]">Solutions</span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
              className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-6"
            >
              Moving Your <br />
              <span className="text-[#39FF14]">Business</span> Forward.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-800 text-lg md:text-xl mb-8 leading-relaxed font-medium"
            >
              Experience the{" "}
              <span className="text-[#39FF14] font-bold">fastest</span>,{" "}
              <span className="text-[#39FF14] font-bold">safest</span>, and most
              reliable transport network across India. We deliver{" "}
              <span className="text-black font-bold border-b-2 border-[#39FF14]">
                promises
              </span>
              , not just packages.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="cursor-pointer px-8 py-4 bg-[#39FF14] text-black font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto text-center"
                >
                  Explore Services
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="cursor-pointer px-8 py-4 bg-[#39FF14] text-black font-bold text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto text-center"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex items-center space-x-12"
            >
              <div className="text-center group cursor-default">
                <span className="block text-4xl font-black text-black group-hover:text-[#39FF14] transition-colors duration-300">
                  12<span className="text-[#39FF14]">+</span>
                </span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Years Exp.
                </span>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center group cursor-default">
                <span className="block text-4xl font-black text-black group-hover:text-[#39FF14] transition-colors duration-300">
                  20K<span className="text-[#39FF14]">+</span>
                </span>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
