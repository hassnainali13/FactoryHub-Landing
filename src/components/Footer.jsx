import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 text-center overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

      {/* Text */}
      <p className="text-lg font-semibold">© 2026 <span className="text-blue-400">factoryHub</span>. All rights reserved.</p>
      <p className="text-gray-400 mt-2">Modern Workspace Management App</p>

      {/* Social Icons */}
      <div className="flex justify-center items-center mt-6 space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all duration-300">
          <FaFacebookF size={20}/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300">
          <FaTwitter size={20}/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all duration-300">
          <FaLinkedinIn size={20}/>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-all duration-300">
          <FaGithub size={20}/>
        </a>
      </div>

      {/* Optional small tagline */}
      <p className="text-gray-500 mt-6 text-sm">
        Designed & Developed with ❤️ by FactoryHub Team
      </p>
    </footer>
  );
}