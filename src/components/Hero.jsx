// src/components/Hero.jsx
"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoFile from "../assets/factory hub video.webm";
import { AuroraBackground } from "../ui/aurora-background"; // Sirf background ke liye

export default function Hero() {
  const videoRef = useRef(null);
  const [skipIndicator, setSkipIndicator] = useState(null);
  const [activeSide, setActiveSide] = useState(null);

  const showIndicator = (text, side) => {
    setSkipIndicator(text);
    setActiveSide(side);
    setTimeout(() => {
      setSkipIndicator(null);
      setActiveSide(null);
    }, 800);
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, videoRef.current.duration);
      showIndicator("+10s", "right");
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
      showIndicator("-10s", "left");
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-36 overflow-hidden">

      {/* ---------------- Aurora Background ---------------- */}
      <AuroraBackground showRadialGradient>
        {/* Background layer */}
        <div className="absolute inset-0 -z-20" />
      </AuroraBackground>

      {/* ---------------- Optional Animated Blobs ---------------- */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl animate-blob-slow" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl animate-blob-slow animation-delay-2000" />
      <div className="absolute -top-20 -right-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-blob-slow animation-delay-4000" />

      {/* ---------------- Heading ---------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 z-10 relative"
      >
        Welcome to <span className="text-blue-600">factoryHub</span>
      </motion.h2>

      {/* ---------------- Subheading ---------------- */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-xl mb-8 max-w-3xl text-gray-700 z-10 relative"
      >
        Explore a complete workspace management system with role-based dashboards and approval workflows.
      </motion.p>

      {/* ---------------- Video ---------------- */}
      <div className="relative w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-500 z-10">
        <motion.video
          ref={videoRef}
          src={videoFile}
          autoPlay
          loop
          muted
          className="w-full rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Left Click */}
        <motion.div
          onClick={handleBackward}
          className="absolute top-0 left-0 w-1/2 h-full cursor-pointer z-20"
          animate={{ backgroundColor: activeSide === "left" ? "rgba(0,0,0,0.2)" : "transparent" }}
          transition={{ duration: 0.2 }}
        />

        {/* Right Click */}
        <motion.div
          onClick={handleForward}
          className="absolute top-0 right-0 w-1/2 h-full cursor-pointer z-20"
          animate={{ backgroundColor: activeSide === "right" ? "rgba(0,0,0,0.2)" : "transparent" }}
          transition={{ duration: 0.2 }}
        />

        {/* Skip Indicator */}
        <AnimatePresence>
          {skipIndicator && (
            <motion.div
              key={skipIndicator}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-1/2 transform -translate-y-1/2 text-3xl font-bold text-white px-5 py-2 rounded-full pointer-events-none z-30 ${
                activeSide === "left"
                  ? "left-6 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg"
                  : "right-6 bg-gradient-to-l from-green-400 to-blue-500 shadow-lg"
              }`}
            >
              {skipIndicator}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}