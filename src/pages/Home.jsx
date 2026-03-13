// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
        <CTASection />
      <Features />
      <Footer />
    </>
  );
}
