"use client";
import dynamic from "next/dynamic";

// Dynamically import Spline with no SSR
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const ParticleRing = () => {
  return (
    <div className="relative w-full h-screen">
      <Spline
        scene="https://prod.spline.design/Lb8HAdKFyMp1Slbh/scene.splinecode"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <p className="text-orange-600 text-7xl font-[Borna] font-bold">
            Helping businesses achieve their goals since 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticleRing;
