"use client";
import React from "react";
import { motion } from "framer-motion";
import ClientsMarquee from "../components/ClientsMarquee";
import Footer from "../components/Footer";
import { LampContainer } from "../components/ui/lamp";
import CTAButton from "../components/Button";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
      features: [
        "Market Research",
        "Competitor Analysis",
        "Customer Personas",
        "Campaign Planning",
      ],
    },
    {
      title: "Website Design & Development",
      description:
        "Modern, responsive websites that provide exceptional user experiences and drive conversions.",
      features: [
        "UI/UX Design",
        "Responsive Development",
        "Performance Optimization",
        "SEO Integration",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media management to build communities and amplify your brand presence.",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics & Reporting",
      ],
    },
    {
      title: "Search Engine Optimization",
      description:
        "SEO strategies to improve your visibility and organic traffic growth.",
      features: [
        "Keyword Research",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Engaging content that tells your story and drives meaningful connections with your audience.",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Production",
        "Email Marketing",
      ],
    },
    {
      title: "Brand Development",
      description:
        "Creating compelling brand identities that resonate with your customers and stand out in the market.",
      features: [
        "Brand Strategy",
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-0 px-4 bg-black relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <LampContainer>
            <p className="text-4xl md:text-2xl text-white max-w-3xl mx-auto mb-6">
              Helping businesses like yours achieve their goals since 2018. We
              combine creativity, technology, and strategy to deliver measurable
              results.
            </p>
            <div>
              <CTAButton label="Get Started" />
            </div>
          </LampContainer>
        </div>

        {/* Optional gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/30 pointer-events-none"></div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-6">
              What We Provide
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-orange-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital marketing solutions designed to
              elevate your brand and drive sustainable growth in today&apos;s
              competitive landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white backdrop-blur-sm rounded-xl p-8 border border-black hover:bg-orange-100 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed group-hover:text-black transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-black text-sm flex items-center"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* Process Section */}
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
              Our Process
            </h2>
            <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-orange-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Plantusmedia follows a proven methodology that delivers results
              through strategic planning, creative execution, and continuous
              optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a comprehensive digital marketing strategy",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Implementing campaigns with precision and creativity",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and improvement for better results",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-orange-100 cursor-pointer"
              >
                <div className="text-6xl font-bold text-orange-500 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {process.title}
                </h3>
                <p className="text-black">{process.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help accelerate your business growth
              through strategic digital marketing.
            </p>
            <CTAButton label="Get In Touch" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
