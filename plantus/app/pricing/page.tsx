"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import {
  FaRegFileAlt,
  FaRocket,
  FaRegComments,
  FaSitemap,
  FaPalette,
  FaMobileAlt,
  FaWrench,
  FaSearch,
  FaPhotoVideo,
  FaChartLine,
  FaUserShield,
  FaChevronDown,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { InfiniteMovingCardsDemo } from "../components/Testimonials";
import CTAButton from "../components/Button";
const glassEffect = "backdrop-blur-sm bg-white/80 dark:bg-gray-900/80";
const cardHover =
  "hover:shadow-xl hover:-translate-y-1 transition-all duration-300";
const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600";

/* --------------------------- Small reusable components --------------------------- */

const PlanCard = ({
  plan,
  highlighted,
}: {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
  };
  highlighted?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative flex flex-col rounded-2xl border-2 overflow-hidden ${glassEffect} ${
        highlighted
          ? "border-orange-500 ring-2 ring-orange-500/30"
          : "border-white/20"
      } ${cardHover} shadow-lg`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-8">
        <h3 className={`text-2xl font-bold ${gradientText}`}>{plan.name}</h3>
        <p className="mt-2 text-white">{plan.description}</p>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-white">
            ${plan.price}
          </span>
          {plan.name === "E-commerce" && (
            <span className="text-base font-medium text-gray-500">+</span>
          )}
        </div>
        <Link
          href="/contact"
          className={`mt-6 inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            highlighted
              ? "bg-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/30"
              : "bg-white/90 text-orange-700 hover:bg-white border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-500"
          }`}
        >
          {plan.cta}
          <ArrowRight
            className={`ml-2 h-4 w-4 ${
              highlighted ? "text-white" : "text-orange-600"
            }`}
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-between bg-white/50 dark:bg-gray-800/50 p-8 border-t border-gray-100 dark:border-gray-700">
        <div>
          <h4 className="text-sm font-medium text-black">
            What&apos;s included
          </h4>
          <ul className="mt-4 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start group">
                <div className="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </div>
                <span className="ml-3 text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Need something custom?{" "}
          <Link
            href="/contact"
            className="font-medium text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transition-colors"
          >
            Contact us
          </Link>{" "}
          for a custom quote.
        </p>
      </div>
    </motion.div>
  );
};

const ElegantProcessTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
          Our Development Process
        </h2>

        <div className="space-y-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 font-semibold flex items-center justify-center text-lg shadow-inner">
                {step.number}
              </div>

              {/* Icon + Title + Description */}
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-orange-500 text-2xl">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-black">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  item,
}: {
  item: { icon: React.ReactNode; title: string; desc: string };
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.25 }}
    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
  >
    <div className="mb-4 p-2 bg-gray-50 rounded-lg">{item.icon}</div>
    <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
    <p className="text-gray-600">{item.desc}</p>
  </motion.div>
);

const FaqSection: React.FC<{
  faqs: { question: string; answer: string }[];
}> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const FaqItem: React.FC<{
    faq: { question: string; answer: string };
    open: boolean;
    onToggle: () => void;
  }> = ({ faq, open, onToggle }) => (
    <div
      className="mb-4 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      aria-expanded={open}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
        onClick={onToggle}
        aria-controls={`faq-content-${faq.question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="text-lg font-medium text-gray-900">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-orange-500"
        >
          <FaChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-content-${faq.question
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6 text-gray-700"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-orange-500">
            <FaSearch className="text-gray-500 mr-3" />
            <input
              type="search"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-base"
              aria-label="Search questions"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                open={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No questions found matching {searchTerm}
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-2 text-orange-500 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* --------------------------- Data (kept as you requested) --------------------------- */

const websitePlans = [
  {
    name: "Starter",
    price: "1500",
    description: "Perfect for small businesses getting started online",
    features: [
      "5-7 Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Integration",
      "1 Round of Revisions",
      "1 Month Free Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "2500",
    description: "Ideal for growing businesses with more complex needs",
    features: [
      "8-12 Page Website",
      "Mobile Responsive Design",
      "Advanced SEO Setup",
      "Contact Form & Lead Capture",
      "Social Media Integration",
      "Blog Setup",
      "3 Rounds of Revisions",
      "3 Months Free Support",
      "Basic Analytics",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "E-commerce",
    price: "5000",
    description: "Complete online store solution",
    features: [
      "E-commerce Functionality",
      "Mobile Responsive Design",
      "Advanced SEO Setup",
      "Product Management",
      "Secure Payment Gateway",
      "Inventory Management",
      "5 Rounds of Revisions",
      "6 Months Free Support",
      "Advanced Analytics",
    ],
    cta: "Get a Quote",
    popular: false,
  },
];

const seoPlans = [
  {
    name: "SEO Basic",
    price: "1000",
    description: "On-page SEO and keyword research starter pack",
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Meta Tag Setup",
      "Monthly Report",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "SEO Growth",
    price: "1500",
    description:
      "Ideal for businesses aiming to rank higher and gain organic traffic",
    features: [
      "Technical SEO",
      "Backlink Outreach",
      "Content Strategy",
      "Monthly Tracking",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "SEO Enterprise",
    price: "3000",
    description: "Full-service SEO tailored to enterprise-level needs",
    features: [
      "Custom Strategy",
      "PR & Outreach",
      "Advanced Analytics",
      "Quarterly Strategy Calls",
    ],
    cta: "Get a Quote",
    popular: false,
  },
];

const maintenancePlans = [
  {
    name: "Basic Care",
    price: "500",
    description: "Essential updates and security monitoring",
    features: [
      "Monthly Backups",
      "Security Patch Updates",
      "Uptime Monitoring",
    ],
    cta: "Subscribe",
    popular: false,
  },
  {
    name: "Pro Care",
    price: "1000",
    description: "Regular updates plus content and performance tweaks",
    features: [
      "Weekly Backups",
      "Security & Plugin Updates",
      "2 Hours Support/Month",
      "Performance Tuning",
    ],
    cta: "Subscribe",
    popular: true,
  },
  {
    name: "Custom Care",
    price: "1500",
    description: "Tailored support & SLA options",
    features: ["Priority Support", "SLA Options", "On-demand Development"],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "What is included in your website packages?",
    answer:
      "Our packages include custom design, responsive development, CMS integration, SEO best practices, and post-launch support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed in 3-6 weeks, depending on your needs and content readiness.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. We offer flexible support and maintenance packages for updates, security, and content changes.",
  },
  {
    question: "Can you integrate third-party tools?",
    answer:
      "Absolutely! We can connect CRMs, analytics, email marketing, and more based on your requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements to create a solid foundation.",
    icon: <FaRegComments />,
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and high-fidelity mockups for your review and approval.",
    icon: <FaPalette />,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our developers bring the design to life with clean, efficient code and all the required functionality.",
    icon: <FaMobileAlt />,
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We thoroughly test your website across devices and browsers before the official launch.",
    icon: <FaRocket />,
  },
  {
    number: "05",
    title: "Content Integration",
    description:
      "We help you prepare and optimize all your content for the web.",
    icon: <FaRegFileAlt />,
  },
  {
    number: "06",
    title: "SEO Optimization",
    description:
      "We implement on-page SEO best practices to help your site rank well in search engines.",
    icon: <FaSearch />,
  },
  {
    number: "07",
    title: "Training & Handover",
    description:
      "We provide training on how to manage and update your new website.",
    icon: <FaUserShield />,
  },
  {
    number: "08",
    title: "Ongoing Support",
    description:
      "We offer maintenance and support packages to keep your site running smoothly.",
    icon: <FaWrench />,
  },
];

/* --------------------------- Main page component --------------------------- */

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"website" | "seo" | "maintenance">(
    "website"
  );

  const plans =
    activeTab === "website"
      ? websitePlans
      : activeTab === "seo"
      ? seoPlans
      : maintenancePlans;

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
              Simple, Transparent{" "}
              <span className="text-orange-500">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10">
              Choose the perfect plan for your business. No hidden fees, no
              surprises. Just straightforward pricing that scales with your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#pricing"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                View Pricing Plans
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Tabs */}
      <div id="pricing" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-xl text-black max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. No hidden fees,
              just powerful features.
            </p>
          </motion.div>

          {/* Tabs with buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black">Plans & Pricing</h2>
              <p className="mt-1 text-black font-semibold">
                Pick a category to view tailored plans.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-gray-100 p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("website")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === "website"
                      ? "bg-white shadow-sm text-orange-500"
                      : "text-black"
                  }`}
                >
                  Website
                </button>
                <button
                  onClick={() => setActiveTab("seo")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === "seo"
                      ? "bg-white shadow-sm text-orange-500"
                      : "text-gray-700"
                  }`}
                >
                  SEO
                </button>
                <button
                  onClick={() => setActiveTab("maintenance")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === "maintenance"
                      ? "bg-white shadow-sm text-orange-500"
                      : "text-gray-700"
                  }`}
                >
                  Maintenance
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {plans.map((plan) => (
                <motion.div key={plan.name} layout>
                  <PlanCard plan={plan} highlighted={plan.popular} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      {/* Custom Packages */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
            <span>Design</span>
            <span className="text-orange-400">•</span>
            <span>Development</span>
            <span className="text-orange-400">•</span>
            <span>SEO</span>
          </div>
          <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
            Customized Website Packages
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-10">
            <p className="leading-relaxed">
              Just like our custom websites, no two web design packages we
              create are the same. We work with companies of all sizes to align
              with their business goals and price points before creating a
              custom web design package and custom quote.
            </p>
            <p className="mt-4 text-xl font-medium text-black">
              In general, our web design package pricing can vary from $15,000
              to $100,000+, depending on the needs of the website project.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
          >
            Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Our Process */}
      <ElegantProcessTimeline />

      {/* Inclusions */}
      <section className="bg-gray-50 py-16 px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight text-black">
          What&apos;s Included in Our Website Packages
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRegComments className="h-7 w-7 text-pink-600" />,
              title: "Discovery & Consultation",
              desc: "Strategy sessions to define your business goals, audience, and custom requirements.",
            },
            {
              icon: <FaSitemap className="h-7 w-7 text-amber-500" />,
              title: "Strategic Sitemap",
              desc: "Architecture planning to ensure an intuitive, conversion-focused website flow.",
            },
            {
              icon: <FaPalette className="h-7 w-7 text-indigo-500" />,
              title: "Custom Design",
              desc: "Tailored, responsive design—on-brand, engaging, and mobile-first.",
            },
            {
              icon: <FaMobileAlt className="h-7 w-7 text-violet-500" />,
              title: "Responsive Development",
              desc: "Pixel-perfect builds with cross-device compatibility and modern animations.",
            },
            {
              icon: <FaWrench className="h-7 w-7 text-emerald-600" />,
              title: "CMS Integration",
              desc: "Easy-to-manage content system, empowering you to update and add pages anytime.",
            },
            {
              icon: <FaSearch className="h-7 w-7 text-blue-500" />,
              title: "SEO Best Practices",
              desc: "Optimized meta data, headings, fast loading, and Google visibility groundwork.",
            },
            {
              icon: <FaPhotoVideo className="h-7 w-7 text-rose-500" />,
              title: "Professional Imagery",
              desc: "High-quality stock images and photo editing for a polished, professional look.",
            },
            {
              icon: <FaChartLine className="h-7 w-7 text-cyan-600" />,
              title: "Analytics & Integrations",
              desc: "Setup for Google Analytics, social media, lead forms, and marketing tools.",
            },
            {
              icon: <FaUserShield className="h-7 w-7 text-yellow-500" />,
              title: "Training & Support",
              desc: "Hands-on training and post-launch support, ensuring a smooth handoff.",
            },
          ].map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      <InfiniteMovingCardsDemo />
      {/* <HoverImageLinks />*/}
      {/* CTA Section */}
      <section className="py-24 px-4 bg-white text-center text-black font-[Inter]">
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

      <Footer />
    </div>
  );
};

export default PricingPage;
