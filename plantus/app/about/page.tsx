"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lightbulb, Star, Handshake, Search, TrendingUp, Shield } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { InfiniteMovingCardsDemo } from "../components/Testimonials";
import Footer from "../components/Footer";
import CTAButton from "../components/Button";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage() {
  const ref = useRef(null);

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
      expertise: ["Strategic Planning", "Client Relations", "Business Development"],
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
      expertise: ["Web Development", "Technical Architecture", "Performance Optimization"],
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
    { title: "Innovation", description: "We stay at the forefront of digital trends and technologies to deliver cutting-edge solutions.", icon: Lightbulb },
    { title: "Excellence", description: "We maintain the highest standards in everything we do, from strategy to execution.", icon: Star },
    { title: "Collaboration", description: "We work closely with our clients as partners, ensuring alignment and shared success.", icon: Handshake },
    { title: "Transparency", description: "We believe in open communication and clear reporting throughout every project.", icon: Search },
    { title: "Results", description: "We focus on delivering measurable outcomes that drive real business growth.", icon: TrendingUp },
    { title: "Integrity", description: "We conduct business with honesty, ethics, and respect for all stakeholders.", icon: Shield },
  ];

  const timeline = [
    { year: "2018", title: "Company Founded", description: "Started as a small digital marketing agency with a vision to help businesses grow online." },
    { year: "2020", title: "First Major Client", description: "Secured our first Fortune 500 client, marking a significant milestone in our growth." },
    { year: "2022", title: "Team Expansion", description: "Grew our team to 20+ specialists across design, development, and marketing disciplines." },
    { year: "2024", title: "Digital Transformation", description: "Pioneered new approaches to remote collaboration and digital-first strategies." },
    { year: "2025", title: "Future Vision", description: "Continuing to innovate with AI, Web3, and emerging technologies to serve our clients." },
  ];

  return (
    <div className="min-h-screen bg-white font-[Borna]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-orange-200 opacity-20 rounded-full animate-pulse"></div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="text-center lg:text-left lg:max-w-xl xl:max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-4 sm:mb-6 leading-tight">
              Who We Are
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              For nearly two decades, we help businesses transform their digital presence and achieve sustainable growth through innovative marketing strategies.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="bg-orange-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium shadow-lg hover:bg-orange-600 transition-all w-full">
                  Get Started
                </button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <button className="border border-orange-500 text-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-orange-50 transition-all w-full">
                  Our Services
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 1, delay: 0.6 }} className="h-1 bg-orange-500 mt-8 sm:mt-10 rounded-full mx-auto lg:mx-0" />
          </div>
        </div>
      </section>

      {/* Breadcrumbs - placed after hero */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>

      {/* About Us Component */}
      <AboutUs />

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

        <div className="container mx-auto relative" ref={ref}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
              Our Story
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-orange-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership, our journey has been marked by innovation, growth, and unwavering commitment to our clients&apos; success.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div style={{ scaleY }} className="absolute left-1/2 top-0 w-0.5 sm:w-1 bg-orange-400 origin-top -translate-x-1/2 h-full" />
            <ol className="space-y-12 sm:space-y-16 relative">
              {timeline.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="w-full sm:w-auto flex-1 p-5 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-orange-100 transition-all duration-300 hover:bg-orange-50">
                    <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                  </div>

                  <motion.div whileInView={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.8] }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }} className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full border-4 border-white z-10 shadow-md my-4 sm:my-6" />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="container mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Meet Our Team</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-orange-600 text-base sm:text-lg max-w-3xl mx-auto">
            Our diverse team of experts brings creativity, technical expertise, and strategic thinking to every project.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 px-4 sm:px-6">
          {teamMembers.map((member, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                <Image src={member.image} alt={member.name} className="object-cover" width={128} height={128} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2">{member.name}</h3>
              <p className="text-orange-500 text-sm sm:text-base font-medium mb-2 sm:mb-3">{member.role}</p>
              <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{member.bio}</p>
              <ul className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                {member.expertise.map((skill, idx) => (
                  <li key={idx} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-orange-100 text-orange-700 rounded-full whitespace-nowrap">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Our Core Values</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-orange-600 text-base sm:text-lg max-w-3xl mx-auto">
            These guiding principles define who we are, how we work, and what we stand for.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6">
          {values.map((value, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4 sm:mb-6 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="py-16 sm:py-20 md:py-24">
        <InfiniteMovingCardsDemo />
      </div>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Ready to Grow with Us?</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to create digital experiences that captivate, engage, and drive results.
          </p>
          <Link href="/contact" className="inline-block">
            <div className="mt-8 sm:mt-12">
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
