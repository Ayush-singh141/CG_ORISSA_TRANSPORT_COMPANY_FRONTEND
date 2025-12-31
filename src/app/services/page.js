"use client";
import {
  FaTruck,
  FaBoxOpen,
  FaRoute,
  FaDollarSign,
  FaWarehouse,
  FaIndustry,
  FaTruckLoading,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  // 1. Core Services Data
  const services = [
    {
      icon: <FaTruck />,
      title: "Full Truck Load (FTL)",
      desc: "Dedicated trucks for your large shipments. We provide 32ft MXL, SXL, and standard 10-tyre vehicles for heavy industrial transport.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Part Truck Load (PTL)",
      desc: "Cost-effective solution for smaller loads. We consolidate shipments to C.G. and Odisha, passing the savings to you.",
    },
    {
      icon: <FaTruckLoading />,
      title: "ODC / Heavy Haulage",
      desc: "Specialized trailers for Over-Dimensional Cargo. Expert handling for machinery, steel pipes, and plant equipment.",
    },
    {
      icon: <FaRoute />,
      title: "Inter-State Logistics",
      desc: "Seamless permit handling and border clearance for movement between Uttar Pradesh, Chhattisgarh, and Odisha.",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehousing Solutions",
      desc: "Temporary storage facilities in Kanpur and Raipur to help you manage inventory overflow and distribution.",
    },
    {
      icon: <FaDollarSign />,
      title: "Contract Logistics",
      desc: "Long-term transport contracts for factories and distributors with fixed rates and priority fleet allocation.",
    },
  ];

  // 2. Fleet Data
  const fleet = [
    {
      name: "Pick-up / Tata Ace",
      cap: "1 - 2 Tons",
      use: "Intracity Delivery",
    },
    { name: "Eicher / LCV", cap: "3 - 7 Tons", use: "Regional Transport" },
    {
      name: "Heavy Trucks (10/12/14 Tyre)",
      cap: "16 - 25 Tons",
      use: "Long Haul / Industrial",
    },
    {
      name: "Containerized Trucks",
      cap: "20ft / 32ft",
      use: "FMCG / High Value",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#39FF14] opacity-5 blur-[120px] rounded-full -z-10"></div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-black mb-8"
          >
            End-to-End <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              Logistics Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            From{" "}
            <span className="text-black font-bold bg-[#39FF14]/30 px-2 rounded">
              Kanpur
            </span>{" "}
            to the mining belts of the East. We offer a comprehensive suite of
            transport services designed for speed, safety, and scalability.
          </motion.p>
        </div>
      </div>

      {/* --- SERVICE GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-1 w-12 bg-[#39FF14]"></div>
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
            Our Expertise
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              variants={item}
              key={idx}
              className="bg-gray-50 p-10 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-300 border border-gray-100 hover:border-[#39FF14] group relative overflow-hidden"
            >
              {/* Hover Effect Circle */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#39FF14] rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <div className="text-5xl text-black mb-8 group-hover:text-[#39FF14] transition-colors bg-white w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-white/10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-400 font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- FLEET CAPABILITIES (New Section) --- */}
      <div className="bg-black py-24 mb-24 relative">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Our Fleet <span className="text-[#39FF14]">Capabilities</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-loose">
                We understand that one size doesn't fit all. Whether you need to
                move a single pallet or 50 tons of steel, C.G. Orissa Transport
                Co. has the right vehicle for the job. Our fleet is maintained
                to the highest standards to minimize breakdown risks.
              </p>
              <button className="text-[#39FF14] font-bold text-lg underline decoration-2 underline-offset-4 hover:text-white transition-colors">
                Download Rate Card &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fleet.map((truck, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-gray-900 p-6 rounded-2xl border-l-4 border-[#39FF14]"
                >
                  <h4 className="text-xl font-bold text-white mb-1">
                    {truck.name}
                  </h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity</span>
                    <span className="text-[#39FF14] font-mono">
                      {truck.cap}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS (New Section) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-4xl font-black text-center text-black mb-16">
          Simple 3-Step Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Book",
              desc: "Call us or submit an inquiry online with your load details.",
            },
            {
              num: "02",
              title: "Load",
              desc: "Our vehicle arrives at your pickup point for secure loading.",
            },
            {
              num: "03",
              title: "Deliver",
              desc: "Real-time updates until your goods reach the destination safely.",
            },
          ].map((step, idx) => (
            <div key={idx} className="relative text-center p-8 group">
              <div className="text-8xl font-black text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10 group-hover:text-[#39FF14]/10 transition-colors">
                {step.num}
              </div>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                <FaClipboardCheck />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- INDUSTRIES (New Section) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-gray-50 rounded-[3rem] p-12 text-center border border-gray-100">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
            {[
              "Iron & Steel",
              "Construction",
              "FMCG",
              "Textiles",
              "Machinery",
              "Agriculture",
            ].map((ind, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-xl font-bold text-black"
              >
                <FaIndustry className="text-[#39FF14]" /> {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- PAYMENT & CTA --- */}
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border-t-8 border-[#39FF14]"
        >
          {/* Decorative blob */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#39FF14]/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <h2 className="text-3xl font-bold text-white mb-8 relative z-10">
            Convenient Payment Options
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 mb-10">
            {["Cash", "Cheque", "UPI / GPay", "Net Banking"].map(
              (method, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-bold border border-white/20 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors cursor-default"
                >
                  {method}
                </span>
              )
            )}
          </div>

          <button className="bg-[#39FF14] text-black font-black py-4 px-12 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300">
            Book a Truck Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
