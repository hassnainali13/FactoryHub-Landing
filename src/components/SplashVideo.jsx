import React, { useEffect, useState } from "react";
import desktopVideo from "../assets/intro-video.mp4";   // Desktop version
import mobileVideo from "../assets/intro-video-mobile.mp4"; // Mobile version

export default function SplashVideo({ onFinish }) {
  const [show, setShow] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoSrc, setVideoSrc] = useState(desktopVideo);

  useEffect(() => {
    // Detect mobile
    const isMobile = window.innerWidth <= 768; // 768px se chhote screen ko mobile consider kar rahe
    setVideoSrc(isMobile ? mobileVideo : desktopVideo);

    // Check if already played in this tab
    if (sessionStorage.getItem("videoPlayed")) {
      setShow(false);
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("videoPlayed", "true");
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-white">
      <video
        src={videoSrc}
        autoPlay
        muted
        preload="auto"
        onCanPlayThrough={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
