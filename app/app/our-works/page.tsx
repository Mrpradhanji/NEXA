"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "../components/Testimonials";

export default function OurWorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechCorp",
      category: "Web Development",
      description:
        "Complete redesign of an e-commerce platform resulting in 40% increase in conversions.",
      image: "/images/hero-image.jpg",
      tags: ["UI/UX", "E-commerce", "React", "Node.js"],
      results: [
        "40% increase in conversions",
        "60% faster load times",
        "25% more mobile traffic",
      ],
    },
    {
      id: 2,
      title: "Brand Identity & Digital Campaign",
      client: "StartupXYZ",
      category: "Branding",
      description:
        "Complete brand identity development and digital marketing campaign launch.",
      image: "/images/3.png.jpg",
      tags: ["Branding", "Social Media", "Content Marketing"],
      results: [
        "300% increase in brand awareness",
        "150% growth in social followers",
        "50% increase in leads",
      ],
    },
    {
      id: 3,
      title: "SaaS Product Marketing",
      client: "CloudTech Solutions",
      category: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategy for a B2B SaaS product launch.",
      image: "/images/hero-image.jpg",
      tags: ["SEO", "Content Marketing", "Paid Advertising", "Analytics"],
      results: [
        "200% increase in organic traffic",
        "80% improvement in lead quality",
        "35% reduction in CAC",
      ],
    },
    {
      id: 4,
      title: "Mobile App Development",
      client: "HealthTech Inc",
      category: "Web Development",
      description:
        "Cross-platform mobile application with advanced health tracking features.",
      image: "/images/3.png.jpg",
      tags: ["React Native", "Mobile App", "Health Tech", "API Integration"],
      results: [
        "4.8/5 app store rating",
        "100k+ downloads",
        "95% user retention rate",
      ],
    },
    {
      id: 5,
      title: "Social Media Strategy",
      client: "Fashion Forward",
      category: "Social Media",
      description:
        "Complete social media strategy and content creation for fashion brand.",
      image: "/images/hero-image.jpg",
      tags: ["Instagram", "TikTok", "Content Creation", "Influencer Marketing"],
      results: [
        "500% increase in engagement",
        "200k new followers",
        "150% increase in sales",
      ],
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      client: "FinancePro",
      category: "Web Development",
      description:
        "Modern, responsive corporate website with advanced financial tools integration.",
      image: "/images/3.png.jpg",
      tags: ["Corporate", "Financial Services", "WordPress", "Security"],
      results: [
        "70% increase in page views",
        "45% improvement in user engagement",
        "30% more contact form submissions",
      ],
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Branding",
    "Digital Marketing",
    "Social Media",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const stats = [
    { number: 500, label: "Projects Completed" },
    { number: 98, label: "Client Satisfaction (%)" },
    { number: 200, label: "Average ROI Increase (%)" },
    { number: 50, label: "Industries Served" },
  ];

  const processSteps = ["Discover", "Design", "Develop", "Launch", "Optimize"];
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Our Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-black max-w-3xl mx-auto mb-8"
        >
          Discover our portfolio of successful projects that have transformed
          businesses and created meaningful digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-20 h-0.5 bg-orange-500 mx-auto"
        ></motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-black">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-orange-500 text-black"
                  : "bg-gray-200 text-black hover:bg-white/20 hover:text-black"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black hover:bg-orange-100 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm">{project.client}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-black leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-black font-semibold mb-2">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-black text-sm flex items-center"
                          >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-orange-300 text-black text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                    >
                      View Case Study
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-black mb-6"
          >
            Our Impact
          </motion.h2>
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Our Process
        </motion.h2>
        <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                {idx + 1}
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">{step}</h3>
              <p className="text-gray-700 text-sm">
                Short description of what happens in this step.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <InfiniteMovingCardsDemo />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white text-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>
        <p className="text-black text-lg max-w-2xl mx-auto mb-8">
          Let&apos;s discuss how we can help bring your vision to life and
          achieve your business goals.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Start Your Project
        </motion.button>
      </section>

      <Footer />
    </div>
  );
}
