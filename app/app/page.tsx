'use client';
import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
    <>
      <div
        className={`relative w-full h-screen overflow-hidden ${hover ? "cursor-none" : "cursor-pointer"}`}
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

        {hover && (
          <div
            className="absolute z-10 pointer-events-none"
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
      </div>

      <section className="logo-slider" aria-label="Our partners">
        <div className="logo-track">
          <img src="/logos/amazon.png" alt="Amazon" />
          <img src="/logos/microsoft.png" alt="Microsoft" />
          <img src="/logos/audi.png" alt="Audi" />
          <img src="/logos/bosch.png" alt="Bosch" />
          <img src="/logos/cbre.png" alt="CBRE" />
          <img src="/logos/warner-bros.png" alt="Warner Bros" />
          <img src="/logos/rove.png" alt="Rove Hotels" />
          <img src="/logos/toshiba.png" alt="Toshiba" />
          {/* duplicate for seamless loop */}
          <img src="/logos/amazon.png" alt="Amazon" />
          <img src="/logos/microsoft.png" alt="Microsoft" />
          <img src="/logos/audi.png" alt="Audi" />
          <img src="/logos/bosch.png" alt="Bosch" />
          <img src="/logos/cbre.png" alt="CBRE" />
          <img src="/logos/warner-bros.png" alt="Warner Bros" />
          <img src="/logos/rove.png" alt="Rove Hotels" />
          <img src="/logos/toshiba.png" alt="Toshiba" />
        </div>
      </section>
    </>
  );
}