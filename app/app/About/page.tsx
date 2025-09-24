"use client";
import React from "react";
import { Lightbulb, Star, Handshake, Search, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { AnimatedTestimonialsDemo } from "../components/Testimonials";
import ClientsMarquee from "../components/ClientsMarquee";
import Footer from "../components/Footer";
import Image from "next/image";
import CTAButton from "../components/Button";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years in digital marketing, Sarah leads our strategic vision and client relationships.",
      image: "/images/hero-image.jpg",
      expertise: ["Strategic Planning", "Client Relations", "Business Development"]
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Michael brings innovative design thinking and creative solutions to every project we undertake.",
      image: "/images/3.png.jpg",
      expertise: ["Brand Design", "Creative Strategy", "Visual Identity"]
    },
    {
      name: "Alex Rodriguez",
      role: "Technical Lead",
      bio: "Alex ensures our technical solutions are robust, scalable, and deliver exceptional user experiences.",
      image: "/images/hero-image.jpg",
      expertise: ["Web Development", "Technical Architecture", "Performance Optimization"]
    },
    {
      name: "Emma Wilson",
      role: "Marketing Strategist",
      bio: "Emma develops data-driven marketing strategies that drive growth and deliver measurable results.",
      image: "/images/3.png.jpg",
      expertise: ["Digital Strategy", "Analytics", "Campaign Management"]
    }
  ];

  const values = [
    { title: "Innovation", description: "We stay at the forefront of digital trends and technologies to deliver cutting-edge solutions.", icon: Lightbulb },
    { title: "Excellence", description: "We maintain the highest standards in everything we do, from strategy to execution.", icon: Star },
    { title: "Collaboration", description: "We work closely with our clients as partners, ensuring alignment and shared success.", icon: Handshake },
    { title: "Transparency", description: "We believe in open communication and clear reporting throughout every project.", icon: Search },
    { title: "Results", description: "We focus on delivering measurable outcomes that drive real business growth.", icon: TrendingUp },
    { title: "Integrity", description: "We conduct business with honesty, ethics, and respect for all stakeholders.", icon: Shield }
  ];

  const timeline = [
    { year: "2005", title: "Company Founded", description: "Started as a small digital marketing agency with a vision to help businesses grow online." },
    { year: "2010", title: "First Major Client", description: "Secured our first Fortune 500 client, marking a significant milestone in our growth." },
    { year: "2015", title: "Team Expansion", description: "Grew our team to 20+ specialists across design, development, and marketing disciplines." },
    { year: "2020", title: "Digital Transformation", description: "Pioneered new approaches to remote collaboration and digital-first strategies." },
    { year: "2025", title: "Future Vision", description: "Continuing to innovate with AI, Web3, and emerging technologies to serve our clients." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold text-black mb-6">
            About PlantusMedia
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl text-black max-w-3xl mx-auto mb-8">
            For nearly two decades, we&apos;ve been helping businesses transform their digital presence
            and achieve sustainable growth through innovative marketing strategies.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-20 h-0.5 bg-orange-500 mx-auto"></motion.div>
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* Our Story Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">Our Story</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-orange-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership, our journey has been
              marked by innovation, growth, and unwavering commitment to our
              clients&apos; success.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-orange-300 -translate-x-1/2"></div>
            <ol className="space-y-12">
              {timeline.map((item, index) => (
                <motion.li key={index} custom={index % 2 === 0 ? "left" : "right"} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  variants={{
                    hidden: (direction: string) => ({ opacity: 0, x: direction === "left" ? -50 : 50 }),
                    visible: { opacity: 1, x: 0 }
                  }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 p-6 bg-white hover:bg-orange-100 backdrop-blur-sm border border-black shadow-md transition-colors duration-300 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="text-2xl font-bold text-orange-500 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                    <p className="text-black">{item.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-10"></div>
                  <div className="flex-1"></div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">Meet Our Team</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together decades of experience in digital marketing,
              design, and technology to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black hover:bg-orange-100 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                  <p className="text-black text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="text-black font-semibold text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-orange-100 text-black text-xs rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">Our Values</h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">These core values guide everything we do and shape how we work with our clients and each other.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6, scale: 1.03 }} className="bg-white p-8 rounded-xl border border-black hover:bg-orange-100 hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-lg group text-center">
                <div className="mb-4 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-orange-500 group-hover:text-orange-600 transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-orange-600 transition-colors">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-black transition-colors">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedTestimonialsDemo />

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">Ready to Work With Us?</h2>
            <p className="text-black text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our experience and expertise can help you achieve your business goals
              and drive sustainable growth.
            </p>
            <div className="mt-16">
              <CTAButton label="Contact US" type="2" href="/contact" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
