import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoFile from "../assets/factory hub video.webm";

export default function InteractiveVideo({ onBack }) {
  const videoRef = useRef(null);
  const [skipIndicator, setSkipIndicator] = useState(null); // "+10s" or "-10s"
  const [activeSide, setActiveSide] = useState(null); // "left" or "right"

  const showIndicator = (text, side) => {
    setSkipIndicator(text);
    setActiveSide(side);
    setTimeout(() => {
      setSkipIndicator(null);
      setActiveSide(null);
    }, 800); // fade out
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.currentTime + 10,
        videoRef.current.duration
      );
      showIndicator("+10s", "right");
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        videoRef.current.currentTime - 10,
        0
      );
      showIndicator("-10s", "left");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-28 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-8 bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
      >
        Back
      </button>

      <h3 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-900">
        Interactive Video
      </h3>

      {/* Video Container */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
        <motion.video
          ref={videoRef}
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-3xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        {/* Left Click Area */}
        <motion.div
          onClick={handleBackward}
          className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-10"
          animate={{
            backgroundColor: activeSide === "left" ? "rgba(0,0,0,0.15)" : "transparent",
            scale: activeSide === "left" ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Right Click Area */}
        <motion.div
          onClick={handleForward}
          className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-10"
          animate={{
            backgroundColor: activeSide === "right" ? "rgba(0,0,0,0.15)" : "transparent",
            scale: activeSide === "right" ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Skip Indicators */}
        <AnimatePresence>
          {skipIndicator && (
            <motion.div
              key={skipIndicator}
              initial={{ opacity: 0, x: activeSide === "left" ? -30 : 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: activeSide === "left" ? -30 : 30, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-1/2 transform -translate-y-1/2 text-3xl font-bold text-white px-5 py-2 rounded-full pointer-events-none z-20 ${
                activeSide === "left" ? "left-6 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg" : "right-6 bg-gradient-to-l from-green-400 to-blue-500 shadow-lg"
              }`}
            >
              {skipIndicator}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <p className="text-gray-700 mt-6 p-6">
          Live demonstration videos explaining workflows, features, and
          step-by-step guidance for users.
        </p>
      </div>
    </motion.section>
  );
}