"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Microsoft", logo: "/logos/chevrolet-seeklogo.png" },
  { name: "Amazon", logo: "/logos/dhl-seeklogo.png" },
  { name: "Ferrari", logo: "/logos/ford-seeklogo.png" },
  { name: "Audi", logo: "/logos/honda-seeklogo.png" },
  { name: "CBRE", logo: "/logos/netflix.png" },
  { name: "Rove Hotels", logo: "/logos/volkswagen-logo.png" },
  { name: "Bosch", logo: "/logos/logoipsum-225.png" },
  { name: "Warner Bros", logo: "/logos/logoipsum-396.png" },
  { name: "Warner Bros", logo: "/logos/logoipsum-403.png" },
];

export default function ClientsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 3; // 3 sets
      setContainerWidth(width);
    }
  }, []);

  const LogoItem = ({ name, logo }: { name: string; logo: string }) => (
    <div className="h-12 w-32 flex items-center justify-center">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={48}
        className="max-h-10 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.25)] transition duration-300 ease-in-out"
      />
    </div>
  );

  return (
    <section className="py-12 md:py-16 bg-gray-100 border-y border-white/10 w-full overflow-hidden">
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
                repeatType: "loop",
              }}
              ref={containerRef}
            >
              {[...clients, ...clients, ...clients].map((c, i) => (
                <LogoItem key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
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
                repeatType: "loop",
              }}
            >
              {[...clients, ...clients, ...clients].reverse().map((c, i) => (
                <LogoItem
                  key={`${c.name}-rev-${i}`}
                  name={c.name}
                  logo={c.logo}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
