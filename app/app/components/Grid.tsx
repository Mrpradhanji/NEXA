"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Car, HeartPulse, Hotel, Building, ShoppingCart } from "lucide-react";

const industries = [
  { name: "B2B Marketing", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Automotive", icon: Car },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Hospitality", icon: Hotel },
  { name: "Real Estate", icon: Building },
  { name: "E-commerce", icon: ShoppingCart },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* First row → 4 cards */}
        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          {industries.slice(0, 4).map((industry, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center w-36 h-32 bg-neutral-900 rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-600/50"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <industry.icon className="w-10 h-10 text-orange-600 mb-3" />
              <span className="text-white text-sm font-medium text-center">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row → 3 cards */}
        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          {industries.slice(4).map((industry, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center w-36 h-32 bg-neutral-900 rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-600/50"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <industry.icon className="w-10 h-10 text-orange-600 mb-3" />
              <span className="text-white text-sm font-medium text-center">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
