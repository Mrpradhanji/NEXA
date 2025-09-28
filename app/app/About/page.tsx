"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  Lightbulb,
  Star,
  Handshake,
  Search,
  TrendingUp,
  Shield,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { InfiniteMovingCardsDemo } from "../components/Testimonials";
import ClientsMarquee from "../components/ClientsMarquee";
import Footer from "../components/Footer";
import CTAButton from "../components/Button";

export default function AboutPage() {
  const ref = useRef(null);

  // Scroll animation for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 200px", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years in digital marketing, Sarah leads our strategic vision and client relationships.",
      image: "/images/hero-image.jpg",
      expertise: [
        "Strategic Planning",
        "Client Relations",
        "Business Development",
      ],
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Michael brings innovative design thinking and creative solutions to every project we undertake.",
      image: "/images/3.png.jpg",
      expertise: ["Brand Design", "Creative Strategy", "Visual Identity"],
    },
    {
      name: "Alex Rodriguez",
      role: "Technical Lead",
      bio: "Alex ensures our technical solutions are robust, scalable, and deliver exceptional user experiences.",
      image: "/images/hero-image.jpg",
      expertise: [
        "Web Development",
        "Technical Architecture",
        "Performance Optimization",
      ],
    },
    {
      name: "Emma Wilson",
      role: "Marketing Strategist",
      bio: "Emma develops data-driven marketing strategies that drive growth and deliver measurable results.",
      image: "/images/3.png.jpg",
      expertise: ["Digital Strategy", "Analytics", "Campaign Management"],
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We stay at the forefront of digital trends and technologies to deliver cutting-edge solutions.",
      icon: Lightbulb,
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from strategy to execution.",
      icon: Star,
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients as partners, ensuring alignment and shared success.",
      icon: Handshake,
    },
    {
      title: "Transparency",
      description:
        "We believe in open communication and clear reporting throughout every project.",
      icon: Search,
    },
    {
      title: "Results",
      description:
        "We focus on delivering measurable outcomes that drive real business growth.",
      icon: TrendingUp,
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, ethics, and respect for all stakeholders.",
      icon: Shield,
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started as a small digital marketing agency with a vision to help businesses grow online.",
    },
    {
      year: "2020",
      title: "First Major Client",
      description:
        "Secured our first Fortune 500 client, marking a significant milestone in our growth.",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description:
        "Grew our team to 20+ specialists across design, development, and marketing disciplines.",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description:
        "Pioneered new approaches to remote collaboration and digital-first strategies.",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Continuing to innovate with AI, Web3, and emerging technologies to serve our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6"
          >
            About PlantusMedia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black max-w-3xl mx-auto mb-8"
          >
            For nearly two decades, we&apos;ve been helping businesses transform
            their digital presence and achieve sustainable growth through
            innovative marketing strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-0.5 bg-orange-500 mx-auto"
          />
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* Our Story Section with Scroll Animation */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

        <div className="container mx-auto relative" ref={ref}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              Our Story
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-orange-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership, our journey has
              been marked by innovation, growth, and unwavering commitment to
              our clients&apos; success.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated vertical line */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-1/2 top-0 w-1 bg-orange-400 origin-top -translate-x-1/2"
            />

            <ol className="space-y-16 relative">
              {timeline.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 transition-all duration-300 hover:bg-orange-50 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="text-2xl font-bold text-orange-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>

                  {/* Animated Dot */}
                  <motion.div
                    whileInView={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.8] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                    className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white z-10 shadow-md"
                  />
                  <div className="flex-1"></div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Meet Our Team
          </h2>
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-orange-600 text-lg max-w-3xl mx-auto">
            Our diverse team of experts brings creativity, technical expertise,
            and strategic thinking to every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {member.name}
              </h3>
              <p className="text-orange-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.bio}</p>
              <ul className="flex flex-wrap justify-center gap-2">
                {member.expertise.map((skill, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Core Values
          </h2>
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-orange-600 text-lg max-w-3xl mx-auto">
            These guiding principles define who we are, how we work, and what we
            stand for.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-orange-500 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-black mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
        
        <InfiniteMovingCardsDemo />
      

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white text-center text-black">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Grow with Us?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s collaborate to create digital experiences that captivate,
            engage, and drive results.
          </p>
          <Link href="/contact">
            <div className="mt-16">
              <CTAButton label="Get Started Today" type="1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
