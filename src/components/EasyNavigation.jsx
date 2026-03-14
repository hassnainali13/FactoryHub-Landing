import React from "react";
import { FaDirections } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EasyNavigation({ onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden px-4 sm:px-6 md:px-16"
    >
      <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-gray-900">
        Easy Navigation
      </h3>

      <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10">
        <FaDirections size={50} className="text-green-500 mb-4 sm:mb-6 mx-auto"/>
        <p className="text-gray-700 text-sm sm:text-lg">
          Smooth and intuitive navigation designed for both new and logged-in users. 
          Switch between sections effortlessly and explore features without any hassle.
        </p>
      </div>
    </motion.section>
  );
}
