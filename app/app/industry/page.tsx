"use client";
import React from "react";
import { motion } from "framer-motion";
import ClientsMarquee from "../components/ClientsMarquee";
import Footer from "../components/Footer";
import {
  FaBullseye,
  FaChartLine,
  FaBalanceScale,
  FaComments,
  FaSearch,
  FaChartBar,
} from "react-icons/fa";

export default function IndustryPage() {
  const industries = [
    {
      title: "Technology & SaaS",
      description:
        "Helping tech companies scale through strategic digital marketing and innovative solutions.",
      services: [
        "Product Marketing",
        "Lead Generation",
        "Content Strategy",
        "SEO/SEM",
      ],
      caseStudy: "Increased SaaS trial conversions by 45%",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Driving sales and customer engagement for online and offline retail businesses.",
      services: [
        "Conversion Optimization",
        "Social Commerce",
        "Email Marketing",
        "Retargeting",
      ],
      caseStudy: "Boosted online sales by 180%",
    },
    {
      title: "Financial Services",
      description:
        "Navigating complex regulations while building trust and driving growth in finance.",
      services: [
        "Compliance Marketing",
        "Trust Building",
        "Lead Qualification",
        "Content Marketing",
      ],
      caseStudy: "Improved lead quality by 60%",
    },
    {
      title: "Real Estate",
      description:
        "Connecting agents and developers with qualified buyers through targeted digital campaigns.",
      services: [
        "Local Marketing",
        "Lead Nurturing",
        "Virtual Tours",
        "CRM Integration",
      ],
      caseStudy: "Increased property inquiries by 150%",
    },
    {
      title: "Education & Training",
      description:
        "Supporting educational institutions and training providers in reaching their audiences.",
      services: [
        "Student Recruitment",
        "Brand Awareness",
        "Content Marketing",
        "Social Media",
      ],
      caseStudy: "Grew student enrollment by 75%",
    },
    {
      title: "Manufacturing & Industrial",
      description:
        "Helping B2B manufacturers reach decision-makers and showcase their capabilities.",
      services: [
        "B2B Marketing",
        "Trade Show Support",
        "Technical Content",
        "Lead Generation",
      ],
      caseStudy: "Generated 300% more qualified B2B leads",
    },
  ];

  const stats = [
    { number: "50+", label: "Industries Served" },
    { number: "500+", label: "Successful Projects" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "200%", label: "Average ROI Increase" },
  ];

  const benefits = [
    {
      title: "Industry-Specific Knowledge",
      description:
        "We understand the unique challenges, regulations, and opportunities in each industry we serve.",
      icon: (
        <FaBullseye className="text-orange-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
    {
      title: "Proven Strategies",
      description:
        "Our approaches are tested and refined through years of experience across diverse sectors.",
      icon: (
        <FaChartLine className="text-green-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
    {
      title: "Compliance Expertise",
      description:
        "We navigate complex industry regulations while maintaining effective marketing strategies.",
      icon: (
        <FaBalanceScale className="text-yellow-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
    {
      title: "Targeted Messaging",
      description:
        "We craft messages that resonate with your specific audience and industry context.",
      icon: (
        <FaComments className="text-purple-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
    {
      title: "Competitive Intelligence",
      description:
        "We stay ahead of industry trends and competitor strategies to keep you competitive.",
      icon: (
        <FaSearch className="text-blue-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
    {
      title: "Measurable Results",
      description:
        "We focus on KPIs that matter most to your industry and business objectives.",
      icon: (
        <FaChartBar className="text-indigo-500 w-12 h-12 mx-auto transition-transform duration-500 transform group-hover:scale-125" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black max-w-3xl mx-auto mb-8"
          >
            With deep expertise across diverse industries, we understand the
            unique challenges and opportunities each sector presents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-0.5 bg-orange-500 mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* Industries Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              Our Industry Expertise
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              We bring specialized knowledge and proven strategies to help
              businesses in various industries achieve their digital marketing
              goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl p-8 border border-black hover:bg-orange-100 hover:border-orange-500 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black group-hover:text-orange-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-black transition-colors">
                    {industry.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-black font-semibold text-sm">
                      Key Services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-orange-50 text-black text-xs rounded-full group-hover:bg-orange-200 transition"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-orange-600 text-sm font-semibold">
                      Case Study: {industry.caseStudy}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              Why Industry Expertise Matters
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Our deep understanding of industry-specific challenges and
              opportunities allows us to deliver targeted, effective solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-black">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              Ready to Grow Your Industry Presence?
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our industry expertise can help you achieve
              your business goals and stay ahead of the competition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discuss Your Industry
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
