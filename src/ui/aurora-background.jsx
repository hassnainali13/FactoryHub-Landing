// src/ui/aurora-background.jsx
"use client";

import { motion } from "framer-motion";
import React from "react";

export function AuroraBackground({ children, className = "", showRadialGradient = true, ...props }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      {...props}
    >
      {/* Aurora gradient background */}
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-aurora`}
        style={{ mixBlendMode: "overlay" }}
      />
      {children}
    </div>
  );
}