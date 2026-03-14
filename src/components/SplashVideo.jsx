import React, { useEffect, useState } from "react";
import videoFile from "../assets/intro-video.mp4"; // yahan apni video ka path

export default function SplashVideo({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Agar video already is tab me play ho chuki ho
    if (sessionStorage.getItem("videoPlayed")) {
      setShow(false);
      onFinish(); // seedha homepage show karo
      return;
    }

    // 5 seconds ke baad video hide ho jaye
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("videoPlayed", "true"); // mark as played
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <video
        src={videoFile}
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}
