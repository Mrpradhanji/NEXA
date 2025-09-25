"use client";
import { CometCard } from "./ui/comet-card";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Our strategists design tailored digital marketing plans for businesses across industries. From customer personas and buyer journeys to lead generation opportunities and messaging, we deliver actionable strategies backed by a full audit of your website, mobile presence, and social media assets.",
    },
    {
      title: "Website Design & Development",
      description:
        "Our team of project managers, designers, UX specialists, and developers collaborate to build award-winning websites. Since 2005, we’ve successfully delivered more than 1,500 websites across diverse industries, combining creativity with functionality to drive results.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Social media is one of the most powerful ways to grow your brand. Through a mix of organic and paid strategies, we help you connect, engage, and build trust with your audience. From community management to advertising campaigns, we handle every aspect of social media marketing.",
    },
    {
      title: "HubSpot & Inbound Marketing",
      description:
        "As a HubSpot Diamond Partner (top 2% globally), we bring deep expertise in CRM, inbound marketing, and automation. Our team helps integrate marketing, sales, content, and customer service, ensuring seamless HubSpot adoption tailored to your business.",
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description:
        "SEO is critical for visibility and growth. With nearly two decades of experience, our SEO specialists follow a proven, evolving process that drives rankings, traffic, and conversions. Our award-winning SEO strategies ensure long-term business impact and measurable results.",
    },
    {
      title: "Lead Generation",
      description:
        "For almost 20 years, we’ve helped businesses secure high-quality leads that convert. As a Google Premier Partner, Meta Partner, LinkedIn Partner, Snapchat Partner, and TikTok Partner, we leverage exclusive access to targeted audiences. Our data-driven campaigns transform prospects into loyal customers.",
    },
    {
      title: "Video Production",
      description:
        "Video is one of the most engaging formats in digital marketing. Our creative team produces compelling videos that bring your brand to life, resonate with your audience, and deliver measurable impact.",
    },
    {
      title: "Web 3.0 & NFT Services",
      description:
        "The next digital revolution is here. Just as the internet transformed business 30 years ago, Web 3.0 is reshaping the landscape. We help brands embrace Web 3.0 and NFTs with tailored strategies to stay ahead of the curve.",
    },
    {
      title: "Metaverse Marketing",
      description:
        "The Metaverse offers exciting new ways for brands to engage audiences in immersive digital spaces. We guide companies through the opportunities of different Metaverse platforms, helping them select the right environment to achieve their goals.",
    },
  ];

  // Motion variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-24 px-4">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-black text-center"
      >
        What We Provide
      </motion.h2>

      {/* Grid for Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <CometCard>
              <button
                type="button"
                className="flex w-full flex-col items-stretch rounded-[16px] border border-black bg-white p-4 transition-transform duration-500 ease-out hover:bg-orange-100 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                aria-label={service.title}
              >
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-orange-600">{service.title}</p>
                  <div className="mt-2 text-sm text-gray-800 leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </button>
            </CometCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
