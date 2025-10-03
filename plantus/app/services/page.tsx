"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Breadcrumbs from "../components/Breadcrumbs";
import { title } from "process";

// Lazy load heavy components
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
  loading: () => <div className="text-center py-10 text-black">Loading footer...</div>,
});
const CTAButton = dynamic(() => import("../components/Button"), {
  ssr: false,
  loading: () => <button className="px-6 py-3 bg-orange-500 text-white rounded-lg">Loading...</button>,
});

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
      title: "Website Development",
      description:
        "We start the development only after having a detailed session with the clients to make sure that we understand their needs entirely.",
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
    <div className="min-h-screen bg-white font-[Borna]">
      {/* Hero Section (Text-based, lightweight) */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center text-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 leading-tight">
                Helping businesses achieve their goals since 2018
              </h1>
              <p className="mt-4 text-black text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Strategic, creative, and performance-driven services tailored to your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - placed after hero */}
      <div className="container mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </div>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          {/* FAQPage JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What services does Plantus Media offer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We provide SEO, content marketing, paid media, web design and development, and branding.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer technical SEO?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we perform technical SEO audits, fixes, and ongoing optimization.",
                    },
                  },
                ],
              }),
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-4 md:mb-6">
              What We Provide
            </h2>
            <p className="text-orange-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital marketing solutions designed to
              elevate your brand and drive sustainable growth in today&apos;s
              competitive landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-white backdrop-blur-sm rounded-xl p-6 md:p-8 border border-black md:hover:bg-orange-100 md:hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-600 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed group-hover:text-black transition-colors text-sm sm:text-base">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-black text-xs sm:text-sm flex items-center"
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

      {/* Service schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Marketing Services",
            provider: {
              "@type": "Organization",
              name: "Plantus Media",
              url: "https://www.plantusmediaconsulting.com/",
            },
            areaServed: "GB",
            serviceType: [
              "SEO",
              "Content Marketing",
              "Paid Media",
              "Web Design and Development",
              "Branding",
            ],
          }),
        }}
      />

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-4 md:mb-6">
              Our Process
            </h2>
            <p className="text-orange-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Plantusmedia follows a proven methodology that delivers results
              through strategic planning, creative execution, and continuous
              optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="text-center bg-white p-5 md:p-6 rounded-xl shadow-md transition-all duration-300 md:hover:bg-orange-100 cursor-pointer"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-3 md:mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 md:mb-3">
                  {process.title}
                </h3>
                <p className="text-black text-sm sm:text-base">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
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
            <p className="text-black text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help accelerate your business growth
              through strategic digital marketing.
            </p>
            <Suspense fallback={<button className="px-6 py-3 bg-orange-500 text-white rounded-lg">Loading...</button>}>
              <CTAButton label="Get In Touch" />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-10 text-black">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
