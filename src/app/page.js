"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTruck, FaWarehouse, FaPlane } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceCard = ({ icon, title, description, link }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-[#39FF14] transition-all duration-300 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <div className="text-9xl text-[#39FF14] transform rotate-12">{icon}</div>
    </div>

    <div className="text-black text-5xl mb-6 group-hover:scale-110 transition-transform bg-[#39FF14]/10 p-5 rounded-2xl w-max relative z-10 border border-[#39FF14]/20 group-hover:bg-[#39FF14] group-hover:text-black duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#2cb80d] transition-colors relative z-10">
      {title}
    </h3>
    <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
      {description}
    </p>
    <Link
      href={link}
      className="inline-flex items-center text-black font-bold hover:text-[#39FF14] transition-colors disabled:pointer-events-none uppercase tracking-wide text-sm border-b-2 border-black hover:border-[#39FF14] pb-1 relative z-10"
    >
      Read More <span className="ml-2">→</span>
    </Link>
  </motion.div>
);

export default function Home() {
  const services = [
    {
      icon: <FaTruck />,
      title: "Road Transport",
      description:
        "Reliable truck fleet for nationwide delivery. Full truckload and partial load services available.",
      link: "/services",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehousing",
      description:
        "Secure storage solutions with modern inventory management for short and long-term needs.",
      link: "/services",
    },
    {
      icon: <FaPlane />,
      title: "Air Freight",
      description:
        "Expedited shipping for time-sensitive cargo with our premium air freight partners.",
      link: "/services",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      {/* Services Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[#39FF14] font-bold tracking-[0.2em] uppercase mb-4 text-sm inline-block px-4 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20"
          >
            Our Services
          </motion.h2>
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-black"
          >
            Logistics Solutions For <br /> Every Industry
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gray-50 py-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#39FF14] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl group">
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-110 transition-transform duration-1000 group-hover:rotate-1"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[#39FF14] font-bold uppercase tracking-widest text-sm mb-2">
                  Since 2013
                </p>
                <h3 className="text-3xl font-bold">
                  Delivering Trust, <br />
                  Across India.
                </h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-black font-bold tracking-widest uppercase mb-6 text-sm flex items-center">
              <span className="w-10 h-1 bg-[#39FF14] mr-4 rounded-full"></span>
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight">
              Your Trusted Partner in{" "}
              <span className="bg-[#39FF14] px-2 text-black transform -rotate-1 inline-block">
                Logistics
              </span>{" "}
              Since 2013
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-medium">
              CG Orissa Transport Co. has been providing top-notch transport
              services for over 12 years. Headquartered in Kanpur, we specialize
              in delivering efficiency and reliability to businesses of all
              sizes.
            </p>
            <ul className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 text-gray-800 font-bold">
              <li className="flex items-center">
                <span className="bg-[#39FF14] text-black rounded-full p-1 mr-3 text-xs">
                  <FaTruck />
                </span>{" "}
                On-Time Delivery
              </li>
              <li className="flex items-center">
                <span className="bg-[#39FF14] text-black rounded-full p-1 mr-3 text-xs">
                  <FaPlane />
                </span>{" "}
                Real-Time Tracking
              </li>
              <li className="flex items-center">
                <span className="bg-[#39FF14] text-black rounded-full p-1 mr-3 text-xs">
                  <FaWarehouse />
                </span>{" "}
                24/7 Support
              </li>
              <li className="flex items-center">
                <span className="bg-[#39FF14] text-black rounded-full p-1 mr-3 text-xs">
                  ₹
                </span>{" "}
                Cost Effective
              </li>
            </ul>
            <Link href="/about">
              <button className="cursor-pointer bg-black text-white hover:bg-[#39FF14] hover:text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_20px_-10px_rgba(57,255,20,0.5)] text-lg transform hover:-translate-y-1">
                More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#39FF14]/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-[#39FF14]/20 rounded-full blur-[80px]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-6">
            Ready to Move Your Cargo?
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-medium text-gray-300">
            Get a competitive quote today and experience the{" "}
            <span className="text-[#39FF14]">difference</span>.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-[#39FF14] text-black font-black py-5 px-12 rounded-full text-xl shadow-[0_0_40px_-5px_rgba(57,255,20,0.6)] hover:shadow-[0_0_60px_-5px_rgba(57,255,20,0.8)] transition-all"
            >
              Get A Free Quote
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
