"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              CG ORISSA <span className="text-[#39FF14]">TRANSPORT</span>
            </h2>
            <p className="mb-6 leading-relaxed text-sm text-gray-400">
              Delivering excellence in logistics and transport services across
              India since 2013. Trust us with your cargo for safe and timely
              deliveries.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="cursor-pointer text-gray-400 hover:text-[#39FF14] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="cursor-pointer text-gray-400 hover:text-[#39FF14] transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="cursor-pointer text-gray-400 hover:text-[#39FF14] transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="cursor-pointer text-gray-400 hover:text-[#39FF14] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="cursor-pointer hover:text-[#39FF14] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="cursor-pointer hover:text-[#39FF14] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="cursor-pointer hover:text-[#39FF14] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/network"
                  className="cursor-pointer hover:text-[#39FF14] transition-colors duration-300"
                >
                  Network
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="cursor-pointer hover:text-[#39FF14] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#39FF14] flex-shrink-0" />
                <span>
                  261-B, Bhavani Nagar (Near By Pass Road), Kanpur H.O., Kanpur
                  - 208001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#39FF14]" />
                <span>+91 9415 44 1542</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#39FF14]" />
                <span>info@cgorissa.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              Business Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="text-white">10:30 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-red-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} CG Orissa Transport Company. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
