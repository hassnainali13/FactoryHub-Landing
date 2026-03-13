import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import videoFile from "../assets/factory hub video.webm";

export default function InteractiveVideo({ onBack }) {
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
        Interactive Video
      </h3>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <video
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-3xl"
        />{" "}
        <p className="text-gray-700 mt-6 p-6">
          Live demonstration videos explaining workflows, features, and
          step-by-step guidance for users.
        </p>
      </div>
    </motion.section>
  );
}
