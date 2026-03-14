import React, { useState } from "react";
import { FaRocket, FaVideo, FaTachometerAlt, FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import ProfessionalExplanation from "./ProfessionalExplanation";
import InteractiveVideo from "./InteractiveVideo";
import EasyNavigation from "./EasyNavigation";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { 
      title: "Professional Explanation", 
      desc: "Everything explained in a concise and professional way.", 
      icon: <FaRocket size={36} className="text-blue-500 mb-4 mx-auto"/>, 
      key: "professional"
    },
    { 
      title: "Interactive Video", 
      desc: "Live demonstrations with interactive video content.", 
      icon: <FaVideo size={36} className="text-indigo-500 mb-4 mx-auto"/>, 
      key: "video"
    },
    { 
      title: "Easy Navigation", 
      desc: "Smooth experience for both logged-in and guest users.", 
      icon: <FaTachometerAlt size={36} className="text-green-500 mb-4 mx-auto"/>, 
      key: "navigation"
    },
  ];

  const renderActive = () => {
    let ActiveComponent = null;
    if(activeFeature === "professional") ActiveComponent = ProfessionalExplanation;
    if(activeFeature === "video") ActiveComponent = InteractiveVideo;
    if(activeFeature === "navigation") ActiveComponent = EasyNavigation;

    return ActiveComponent && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen bg-gray-50 px-4 sm:px-6 md:px-16"
      >
        {/* Back Button */}
        <button
          onClick={() => setActiveFeature(null)}
          className="absolute top-6 sm:top-8 left-4 sm:left-8 bg-blue-500 text-white px-4 sm:px-5 py-2 rounded-full shadow-lg hover:bg-blue-600 transition z-20 flex items-center space-x-2 text-sm sm:text-base"
        >
          <FaArrowLeft /> <span>Back</span>
        </button>

        {/* Active Component */}
        <ActiveComponent onBack={() => setActiveFeature(null)} />
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {activeFeature ? (
        renderActive()
      ) : (
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white text-center relative overflow-hidden px-4 sm:px-6 md:px-16"
        >
          {/* Background blobs */}
          <div className="absolute -top-24 sm:-top-32 -left-24 sm:-left-32 w-56 sm:w-72 h-56 sm:h-72 bg-blue-200/30 rounded-full blur-3xl animate-blob -z-10"></div>
          <div className="absolute -bottom-24 sm:-bottom-32 -right-24 sm:-right-32 w-56 sm:w-72 h-56 sm:h-72 bg-indigo-200/30 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-gray-900">Features</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                onClick={() => setActiveFeature(f.key)}
                whileHover={{ scale: 1.05 }}
                className="p-6 sm:p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform cursor-pointer border border-gray-100"
              >
                {f.icon}
                <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-gray-800">{f.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
