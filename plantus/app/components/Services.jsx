"use client";

import { motion } from "framer-motion";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function Services() {
  const services = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Our digital marketing experts are master storytellers and know the power of personalized communication. We develop creative and innovative digital marketing strategies that are sure to become viral campaigns.",
      img: "/images/digital-marketing.jpg",
    },
    {
      title: "Website Design & Development",
      description:
        "Plantus Media develops compelling, diverse, and super-customized websites that showcase your brand distinctly. Our experts use the latest web technologies ensuring impressive web design that attracts customers.",
      img: "/images/web.jpg",
    },
    {
      title: "Social Media Marketing",
      description:
        "We help you gain control of your messages across social media networks. Our services include brand management, social consultancy, social PPC, social PR, monitoring, cross-channel promotion, reporting, and analysis.",
      img: "/images/social.jpg",
    },
    {
      title: "Mobile App Marketing",
      description:
        "With millions of apps in stores, getting noticed is tough. We ensure your app gets downloads with cutting-edge marketing strategies that drive visibility and user engagement.",
      img: "/images/mobile-app.jpg",
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description:
        "SEO is critical for visibility and growth. Our specialists follow a proven process to drive rankings, traffic, and conversions, ensuring long-term business impact.",
      img: "/images/seo.jpg",
    },
    {
      title: "Portal Development",
      description:
        "Plantus Media offers robust, transparent web portal solutions. We gather your business requirements and deliver efficient, advanced web portals.",
      img: "/images/portal-development.jpg",
    },
    {
      title: "Animations & Video Production",
      description:
        "We create all sorts of videos, including viral videos, sales videos, explainer videos, corporate presentation videos, and social media videos, to boost engagement and brand awareness.",
      img: "/images/animation.jpg",
    },
    {
      title: "E-commerce Website",
      description:
        "Our developers create functional and attractive e-commerce websites with creative UI/UX design and content optimization, delivering innovation beyond expectations.",
      img: "/images/e-comm.png",
    },
    {
      title: "Content Creation",
      description:
        "We craft engaging content for your audience and search engines. Our team of writers, designers, and videographers ensures stronger brand awareness and higher search presence.",
      img: "/images/content.jpg",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full font-[Inter] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

      <div className="flex justify-center mb-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Our Services</h2>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center font-medium"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-full w-full max-w-md flex flex-col"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Hover image */}
              <DirectionAwareHover
                imageUrl={service.img}
                className="w-full h-full object-cover"
              />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gray-100/60 backdrop-blur-sm rounded-t-lg">
                <h3 className="text-lg md:text-xl text-orange-600 font-bold mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
