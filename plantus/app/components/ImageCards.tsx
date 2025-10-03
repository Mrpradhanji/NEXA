"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./Button";
import Image from "next/image";

export function ImageCards() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const imageCards = [
    {
      id: 1,
      frontImage: "/images/social.jpg",
      backTitle: "Digital Strategy",
      backDescription:
        "Comprehensive digital marketing strategies tailored to your business goals.",
      category: "Strategy",
    },
    {
      id: 2,
      frontImage: "/images/3.png.jpg",
      backTitle: "Brand Development",
      backDescription:
        "Creating compelling brand identities that resonate with your customers.",
      category: "Branding",
    },
    {
      id: 3,
      frontImage: "/images/web.jpg",
      backTitle: "Web Development",
      backDescription:
        "Modern, responsive websites that provide exceptional user experiences.",
      category: "Development",
    },
    {
      id: 4,
      frontImage: "/images/content.jpg",
      backTitle: "Content Marketing",
      backDescription:
        "Engaging content that tells your story and drives meaningful connections.",
      category: "Content",
    },
    {
      id: 5,
      frontImage: "/images/media.jpg",
      backTitle: "Social Media",
      backDescription:
        "Strategic social media management to build communities and amplify your brand.",
      category: "Social",
    },
    {
      id: 6,
      frontImage: "/images/insights.jpg",
      backTitle: "Analytics & Insights",
      backDescription:
        "Data-driven insights and performance tracking to optimize your marketing efforts.",
      category: "Analytics",
    },
  ];

  const handleCardClick = (cardId: number) => {
    setFlippedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Borna'] font-bold text-black leading-tight mb-4">
            Case Studies
          </h2>
          <p className="text-orange-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-[Borna]">
            Explore our latest projects and see how we bring creative visions to
            life through innovative design and cutting-edge technology.
          </p>
        </motion.div>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {imageCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: flippedCards.includes(card.id) ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={() => handleCardClick(card.id)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden font-[Borna]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <Image
                      src={card.frontImage}
                      alt={card.backTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-2">
                        {card.category}
                      </span>
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                        {card.backTitle}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm">Click to learn more</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden font-[Borna]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-5 md:p-6 border border-orange-500/20 overflow-visible">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-4">
                          {card.category}
                        </span>
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
                          {card.backTitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {card.backDescription}
                        </p>
                      </div>
                      <div className="mt-6">
                        {/* Button 1 (SVG border animation) */}
                        <CTAButton
                          label="View Projects"
                          type="2"
                          href="/projects"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          {/* Main CTA also uses Button 1 */}
          <CTAButton label="View All Projects" type="2" href="/portfolio" />
        </motion.div>
      </div>
    </section>
  );
}
