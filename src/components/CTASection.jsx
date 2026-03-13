import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center overflow-hidden">

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        Ready to Experience <span className="text-yellow-300">FactoryHub</span>?
      </motion.h3>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-12 text-lg md:text-xl max-w-2xl mx-auto"
      >
        Explore the complete workspace management system with role-based workflows and approvals.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = "https://factory-hub.vercel.app/login"}
        className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transform transition-all duration-300"
      >
        Explore Now
      </motion.button>
    </section>
  );
}