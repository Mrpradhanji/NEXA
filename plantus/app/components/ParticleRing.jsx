"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const ParticleRing = () => {
  const [enableSpline, setEnableSpline] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmall = window.innerWidth < 768; // md breakpoint
    const isHighDPR = window.devicePixelRatio && window.devicePixelRatio > 2;

    // Disable Spline on small screens, reduced-motion users, or very high DPR devices
    setEnableSpline(!prefersReducedMotion && !isSmall && !isHighDPR);

    const onResize = () => {
      const small = window.innerWidth < 768;
      setEnableSpline(!prefersReducedMotion && !small && !isHighDPR);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] md:h-[80vh] lg:h-screen">
      {enableSpline ? (
        <Spline
          scene="https://prod.spline.design/Lb8HAdKFyMp1Slbh/scene.splinecode"
          className="w-full h-full pointer-events-none"
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white to-orange-50" aria-hidden />
      )}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <p className="text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[Borna] font-bold">
            Helping businesses achieve their goals since 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticleRing;
