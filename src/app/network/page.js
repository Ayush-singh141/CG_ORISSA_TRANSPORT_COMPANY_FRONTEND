"use client";
import {
  FaMapMarkedAlt,
  FaCity,
  FaRoad,
  FaWarehouse,
  FaCheckCircle,
  FaGlobeAsia,
} from "react-icons/fa";
import { motion } from "framer-motion";

// --- Data ---
const hubs = [
  {
    city: "Kanpur (HQ)",
    role: "Central Hub",
    desc: "Our primary consolidation center. All shipments from North India are processed, sorted, and dispatched from here.",
    color: "text-[#39FF14]",
  },
  {
    city: "Raipur (C.G.)",
    role: "Regional Node",
    desc: "Key distribution point for Chhattisgarh. Daily services to Bhilai, Bilaspur, and industrial estates.",
    color: "text-blue-400",
  },
  {
    city: "Bhubaneswar (Odisha)",
    role: "Eastern Gateway",
    desc: "Connecting Cuttack and mining belts. We specialize in heavy haulage and machinery transport on this route.",
    color: "text-orange-400",
  },
];

const primaryRoutes = [
  { from: "Kanpur", to: "Raipur (C.G.)", time: "3-4 Days", freq: "Daily" },
  { from: "Kanpur", to: "Bhubaneswar", time: "4-5 Days", freq: "Daily" },
  { from: "Kanpur", to: "Cuttack", time: "4-5 Days", freq: "Daily" },
  { from: "Kanpur", to: "Bhilai", time: "3-4 Days", freq: "Daily" },
];

const secondaryRoutes = [
  { from: "Kanpur", to: "Delhi / NCR", time: "1-2 Days", freq: "Daily" },
  { from: "Kanpur", to: "Kolkata", time: "2-3 Days", freq: "Bi-Weekly" },
  { from: "Kanpur", to: "Mumbai", time: "4-5 Days", freq: "Weekly" },
  { from: "Kanpur", to: "Lucknow", time: "Same Day", freq: "Daily" },
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Network() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-4"
        >
          <span className="bg-[#39FF14] text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
            Pan-India Coverage
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-black mb-6"
        >
          Connecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
            Heart of India
          </span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Specialized logistics corridor connecting
          <span className="font-bold text-black"> Uttar Pradesh</span> to the
          industrial belts of
          <span className="font-bold text-black"> Chhattisgarh</span> and
          <span className="font-bold text-black"> Odisha</span>.
        </p>
      </div>

      {/* 2. STRATEGIC HUBS (Dark Section) */}
      <div className="bg-black py-20 mb-24 relative overflow-hidden">
        {/* Background Map Graphic (Abstract) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_Uttar_Pradesh_locator_map.svg/1200px-India_Uttar_Pradesh_locator_map.svg.png')] bg-no-repeat bg-contain bg-right"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-[#39FF14] pl-6">
            Our Strategic Hubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hubs.map((hub, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-[#39FF14] transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <FaWarehouse className={`text-4xl ${hub.color}`} />
                  <span className="bg-gray-800 text-gray-300 text-xs font-bold px-3 py-1 rounded-lg">
                    {hub.role}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {hub.city}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {hub.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CORE ROUTES (The "Bread and Butter") */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-end justify-between mb-10 border-b-2 border-gray-100 pb-4">
          <div>
            <h2 className="text-4xl font-black text-black">Core Routes</h2>
            <p className="text-gray-500 mt-2">
              High frequency lines with guaranteed dispatch.
            </p>
          </div>
          <FaRoad className="text-5xl text-gray-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primaryRoutes.map((route, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl flex items-center justify-between group hover:bg-[#39FF14] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-black">
                  <FaMapMarkedAlt size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black flex items-center gap-2">
                    {route.from}{" "}
                    <span className="text-gray-400 group-hover:text-black">
                      ➝
                    </span>{" "}
                    {route.to}
                  </h3>
                  <span className="text-xs font-bold text-gray-500 uppercase group-hover:text-black/70">
                    Est. Time: {route.time}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold bg-black text-white px-3 py-1 rounded-md group-hover:bg-white group-hover:text-black">
                  {route.freq}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. EXTENDED NETWORK (Secondary) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-black mb-8">Extended Network</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryRoutes.map((route, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-5 rounded-xl hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaGlobeAsia className="text-gray-400" />
                <span className="font-bold text-gray-700">{route.to}</span>
              </div>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>From: {route.from}</span>
                <span className="font-semibold text-[#39FF14]">
                  {route.freq}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. COVERAGE CTA */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#f0fdf4] border border-[#39FF14] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">
              Don't see your destination?
            </h3>
            <p className="text-gray-600">
              We provide{" "}
              <span className="font-bold">Full Truck Load (FTL)</span> services
              to anywhere in India on demand.
            </p>
          </div>
          <button className="whitespace-nowrap bg-black text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#39FF14] hover:text-black transition-all shadow-xl">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
