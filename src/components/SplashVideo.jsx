import React, { useEffect, useState } from "react";
import videoFile from "../assets/intro-video.mp4";

export default function SplashVideo({ onFinish }) {
  const [show, setShow] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
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
      {/* background white until video loads */}
      <video
        src={videoFile}
        autoPlay
        muted
        preload="auto"
        onCanPlayThrough={() => setVideoLoaded(true)} // jab video ready ho jaye
        className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
