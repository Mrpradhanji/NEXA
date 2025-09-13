"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const clients = [
  "Microsoft",
  "Amazon",
  "Ferrari",
  "Audi",
  "CBRE",
  "Rove Hotels",
  "Bosch",
  "Warner Bros",
];

export default function ClientsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 3; // Since we have 3 sets of clients
      setContainerWidth(width);
    }
  }, []);

  return (
    <section className="py-12 md:py-16 bg-black border-y border-white/10 w-full overflow-hidden">
      <div className="w-full">
        <div className="relative">
          {/* First row */}
          <div className="overflow-hidden w-full mb-4">
            <motion.div
              className="flex gap-12 md:gap-16 whitespace-nowrap w-max"
              animate={{ x: [0, -containerWidth] }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear",
                repeatType: "loop"
              }}
              ref={containerRef}
            >
              {[...clients, ...clients, ...clients].map((c, i) => (
                <span 
                  key={`${c}-${i}`} 
                  className="text-white/60 text-base md:text-lg font-medium tracking-wider whitespace-nowrap px-2"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Second row (reverse direction) */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-12 md:gap-16 whitespace-nowrap w-max"
              animate={{ x: [-containerWidth, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[...clients, ...clients, ...clients].reverse().map((c, i) => (
                <span 
                  key={`${c}-rev-${i}`} 
                  className="text-white/60 text-base md:text-lg font-medium tracking-wider whitespace-nowrap px-2"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


