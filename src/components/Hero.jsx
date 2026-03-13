import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-36 bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900"
      >
        Welcome to <span className="text-blue-600">factoryHub</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-xl mb-8 max-w-3xl text-gray-700"
      >
        Explore a complete workspace management system with role-based
        dashboards and approval workflows.
      </motion.p>

      {/* Video */}
      <motion.video
        src="/intro.mp4"
        controls
        preload="metadata"
        className="w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-gray-200 hover:shadow-3xl transition-all duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  );
}
