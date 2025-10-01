"use client";
import { motion } from "framer-motion";
import { Briefcase  , GraduationCap, Car, HeartPulse, Hotel, Building, ShoppingCart, TrendingUp } from "lucide-react";

const industries = [
  { name: "B2B Marketing", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Automotive", icon: Car },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Hospitality", icon: Hotel },
  { name: "Real Estate", icon: Building },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "SEO", icon: TrendingUp },
];

export default function IndustriesGrid() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center w-full max-w-[150px] h-32 bg-neutral-900 rounded-2xl shadow-lg hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-600/50"
              variants={cardVariants}
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
