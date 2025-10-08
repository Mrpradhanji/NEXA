"use client";
import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
//import ClientsMarquee from "./components/ClientsMarquee";
import AboutUs from "./components/AboutUs";
import { Services } from "./components/Services";
import { ImageCards } from "./components/ImageCards";
import { BlogSection } from "./components/BlogSection";
import AgencySection from "./components/Agency";
import { InfiniteMovingCardsDemo } from "./components/Testimonials";
//import { HoverImageLinks } from "./components/HoverImageLinks";
import Footer from "./components/Footer";
import Link from "next/link";
import CTAButton from "./components/Button";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side) and set initial mobile state
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section
        className={`relative w-full min-h-[70vh] md:h-screen bg-white flex items-center justify-center ${
          hover ? "cursor-none" : "cursor-pointer"
        } overflow-hidden`}
        onMouseEnter={() => !isTouch && setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const rect = (
            e.currentTarget as HTMLDivElement
          ).getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "touch") {
            setIsTouch(true);
            setHover(false);
          }
        }}
        onClick={(e) => {
          if (!isTouch) toggleMute();
        }}
      >
        <video
          ref={videoRef}
          src={isMobile ? "/images/phone.webm" : "/images/PlantusMedia.webm"}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.12] sm:scale-100"
        />

        {/* Hero Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            {/* Mobile mute toggle */}
            <div className="mt-30 flex justify-center md:hidden">
              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-white"
              >
                {muted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
                <span className="text-sm">{muted ? "Unmute" : "Mute"}</span>
              </button>
            </div>
          </div>
        </div>

        {hover && !isTouch && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
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
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4">
          <AboutUs />
          <div className="mb-16"></div>
          <Services />
          <ImageCards />
          <BlogSection />
          <AgencySection />
          <InfiniteMovingCardsDemo />
          {/* <HoverImageLinks />*/}
          {/* CTA Section */}
          <section className="py-24 px-4 bg-white text-center text-black font-[Inter]">
            <div className="container mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Grow with Us?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-10">
                Let&apos;s collaborate to create digital experiences that
                captivate, engage, and drive results.
              </p>
              <Link href="/contact">
                <div className="mt-16">
                  <CTAButton label="Get Started Today" type="1" />
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
