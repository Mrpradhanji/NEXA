'use client';
import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Cards from "./components/Cards";
import ClientsMarquee from "./components/ClientsMarquee";
import AboutUs from "./components/AboutUs";



export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Hero Section */}
      <section
        className={`relative w-full h-screen overflow-hidden flex items-center justify-center ${hover ? "cursor-none" : "cursor-pointer"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onClick={toggleMute}
      >
        <video
          ref={videoRef}
          src="/images/video.mp4"
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Hero Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title">
              PLANTUSMEDIA<sup>®</sup>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
              Creating digital experiences that inspire and engage
            </p>
          </div>
        </div>

        {hover && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{ left: mousePos.x, top: mousePos.y, transform: "translate(-50%, -50%)" }}
          >
            <div className="bg-black/50 p-3 rounded-full">
              {muted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </div>
          </div>
        )}
      </section>

      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        <ClientsMarquee />
        <AboutUs />
        <Cards />
        
        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                {new Date().getFullYear()} PlantusMedia. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}