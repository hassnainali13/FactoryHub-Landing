import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import SplashVideo from "../components/SplashVideo";

export default function Home() {
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <>
      {/* Agar video khatam nahi hui to show karo */}
      {!videoFinished && <SplashVideo onFinish={() => setVideoFinished(true)} />}

      {/* Video khatam hone ke baad normal homepage */}
      {videoFinished && (
        <div className="animate-fadeIn">
          <Navbar />
          <Hero />
          <CTASection />
          <Features />
          <Footer />
        </div>
      )}
    </>
  );
}
