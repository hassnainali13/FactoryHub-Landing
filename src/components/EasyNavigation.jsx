// src/components/EasyNavigation.jsx
import React from "react";
import { FaDirections } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EasyNavigation({ onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-28 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden"
    >
      <button
        onClick={onBack}
        className="absolute top-8 left-8 bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        Back
      </button>

      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900">
        Easy Navigation
      </h3>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <FaDirections size={60} className="text-green-500 mb-6 mx-auto"/>
        <p className="text-gray-700 text-lg">
          Smooth and intuitive navigation designed for both new and logged-in users. 
          Switch between sections effortlessly and explore features without any hassle.
        </p>
      </div>
    </motion.section>
  );
}