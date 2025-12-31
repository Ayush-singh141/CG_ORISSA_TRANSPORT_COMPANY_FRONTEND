"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaAward,
  FaUsers,
  FaChartLine,
  FaMapMarkedAlt,
  FaTruckMoving,
  FaHandshake,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

// Animation Variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* 1. HERO BANNER */}
      <div className="bg-gray-50 py-28 mb-16 mt-0 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#39FF14]"></div>
        {/* Abstract Background Element */}
        <div className="absolute -right-20 top-20 w-96 h-96 bg-[#39FF14] rounded-full blur-[150px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-black mb-6 tracking-tight"
          >
            ABOUT{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white bg-black px-6 py-1 transform -skew-x-12 inline-block shadow-2xl">
                CG ORISSA
              </span>
              <span className="absolute -bottom-2 right-2 w-full h-full bg-[#39FF14] transform -skew-x-12 -z-0"></span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium"
          >
            Bridging the gap between{" "}
            <span className="text-black font-bold">Uttar Pradesh</span> and
            Eastern India since{" "}
            <span className="bg-[#39FF14] px-2 text-black font-bold">2013</span>
            .
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* 2. MAIN INTRODUCTION & STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <h2 className="text-5xl font-black text-black mb-8 border-l-8 border-[#39FF14] pl-8 leading-none">
              More Than Just <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                A Transport Company
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-loose mb-6 font-medium">
              C.G. Orissa Transport Co. was founded in 2013 with a singular
              vision: to organize the fragmented logistics sector between Kanpur
              and the eastern states of Chhattisgarh and Odisha.
            </p>
            <p className="text-gray-600 text-lg leading-loose mb-8">
              In an industry where timing is money, we have built our reputation
              on{" "}
              <span className="font-bold text-black bg-[#39FF14]/30 px-1">
                precision
              </span>
              . We don't just move goods; we move businesses forward. From heavy
              industrial machinery to delicate commercial parcels, our fleet is
              equipped to handle the diverse needs of the modern Indian economy.
            </p>

            <div className="flex gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer bg-black text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl hover:bg-[#39FF14] hover:text-black border-2 border-black"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Decorative blob behind stats */}
            <div className="absolute inset-0 bg-gray-100 transform rotate-3 rounded-[3rem] -z-10"></div>
            {[
              {
                icon: <FaAward />,
                val: "12+",
                label: "Years Experience",
                bg: "bg-blue-50",
              },
              {
                icon: <FaUsers />,
                val: "500+",
                label: "Happy Clients",
                bg: "bg-purple-50",
              },
              {
                icon: <FaMapMarkedAlt />,
                val: "3",
                label: "Major States Covered",
                bg: "bg-green-50",
              },
              {
                icon: <FaTruckMoving />,
                val: "24/7",
                label: "Dispatch Ready",
                bg: "bg-orange-50",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${stat.bg} p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-gray-100`}
              >
                <div className="text-4xl text-black mx-auto mb-4 bg-white shadow-sm w-16 h-16 flex items-center justify-center rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-black mb-1">
                  {stat.val}
                </h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. NEW SECTION: REGIONAL EXPERTISE (Map Concept) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-black rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden text-center"
        >
          {/* Background Map Effect */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

          <motion.div
            variants={itemVariants}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Masters of the{" "}
              <span className="text-[#39FF14]">Eastern Corridor</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12">
              Our name says it all. We specialize in the high-volume transport
              routes connecting the industrial heart of UP with the
              resource-rich belts of the East.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-900 p-8 rounded-2xl border-t-4 border-[#39FF14]">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Kanpur (Hub)
                </h3>
                <p className="text-gray-400">
                  Our central processing hub. All loads are consolidated,
                  checked, and dispatched from here with maximum efficiency.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl border-t-4 border-[#39FF14]">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Chhattisgarh
                </h3>
                <p className="text-gray-400">
                  Daily services to Raipur, Bhilai, and industrial zones. We
                  support the steel and power sectors heavily in this region.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl border-t-4 border-[#39FF14]">
                <h3 className="text-2xl font-bold text-white mb-2">Odisha</h3>
                <p className="text-gray-400">
                  Connecting you to Bhubaneswar, Cuttack, and mining belts.
                  Reliable long-haul transport you can count on.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 4. NEW SECTION: OUR PROMISE (Values) */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black underline decoration-[#39FF14] decoration-4 underline-offset-8">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-gray-600">
              The core values that drive our engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaClock />,
                title: "On-Time Delivery",
                desc: "We understand that delay equals loss. Our route planning ensures your goods arrive exactly when promised.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Maximum Safety",
                desc: "From loading to unloading, we use verified drivers and secure tie-downs to ensure zero damage.",
              },
              {
                icon: <FaHandshake />,
                title: "Transparent Pricing",
                desc: "No hidden fuel surcharges or last-minute fees. We believe in building long-term relationships through honesty.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group"
              >
                <div className="w-16 h-16 bg-black text-[#39FF14] rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#39FF14] group-hover:text-black transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. BOTTOM CTA */}
        <div className="bg-gray-100 rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to move your load?
          </h2>
          <Link href="/contact">
            <button className="bg-[#39FF14] text-black text-xl font-bold py-4 px-12 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Get a Quote Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
