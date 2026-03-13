import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // Smooth animation

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-lg flex justify-between items-center px-6 py-4 md:px-16 transition-all duration-500">
      {/* Logo */}
      <motion.h1
        whileHover={{ scale: 1.1, color: "#3b82f6" }}
        className="text-3xl font-extrabold text-gray-800 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        factoryHub
      </motion.h1>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() =>
            (window.location.href = "https://factory-hub.vercel.app/login")
          }
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-300"
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
          className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold border-2 border-blue-500 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-2xl transform transition-all duration-300"
        >
          <FaUserPlus />
          <span>Sign Up</span>
        </motion.button>{" "}
      </div>
    </nav>
  );
}
