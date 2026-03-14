import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-lg flex flex-wrap md:flex-nowrap justify-between items-center px-4 sm:px-6 md:px-16 py-3 md:py-4 transition-all duration-500">
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1, color: "#3b82f6" }}
        className="text-2xl sm:text-3xl font-extrabold text-gray-800 cursor-pointer relative mb-2 md:mb-0 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        factoryHub
      </motion.h1>

      {/* Buttons */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4">
        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            (window.location.href = "https://factory-hub.vercel.app/login")
          }
          className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300 text-sm sm:text-base"
        >
          <FaSignInAlt />
          <span>Login</span>
        </motion.button>

        {/* Sign Up Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            (window.location.href = "https://factory-hub.vercel.app/signup")
          }
          className="flex items-center space-x-1 sm:space-x-2 bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold border-2 border-blue-500 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-2xl transform transition-all duration-300 text-sm sm:text-base"
        >
          <FaUserPlus />
          <span>Sign Up</span>
        </motion.button>
      </div>
    </nav>
  );
}
