"use client";
import React, { useRef, useState } from "react";
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
        className={`relative w-full h-screen flex items-center justify-center ${
          hover ? "cursor-none" : "cursor-pointer"
        } overflow-hidden`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const rect = (
            e.currentTarget as HTMLDivElement
          ).getBoundingClientRect();
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
          <div className="text-center w-full max-w-4xl mx-auto px-4">
            <p className="text-white text-lg md:text-xl mt-6 max-w-2xl mx-auto">
              Creating digital experiences that inspire and engage
            </p>
          </div>
        </div>

        {hover && (
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
          <section className="py-24 px-4 bg-white text-center text-black">
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
