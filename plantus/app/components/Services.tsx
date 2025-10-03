"use client";
import { CometCard } from "./ui/comet-card";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Our digital marketing experts are master storytellers and know the power of personalized communication. We develop creative and innovative digital marketing strategies that are sure to become viral campaigns. We enable your business to reach as much as customers as possible with a thoughtfully crafted message about your brand. Our various services in digital marketing include",
    },
    {
      title: "Website Design & Development",
      description:
        "Plantus Media develop a compelling, diverse and super-customized website that showcases your brand distinctly in this crowded marketplace. Our experts, with their hands-on approach with the latest web technologies such as PHP, Ruby on Rails, HTML5, etc. We guarantee to build an impressive web-design for your business that will pull customers like a magnet to your site.",
    },
    {
      title: "Social Media Marketing",
      description:
        "We understand your business challenges and objectives and help you in getting full control of your messages across the social media networks. Our social media marketing services will include brand management, social consultancy, social tone & nature, social PPC, social PR, social media monitoring, productive discussion, cross-channel promotion, reporting, and analysis. ",
    },
    {
      title: "Mobile App Marketing ",
      description:"App stores from Apple and Google are flooded with millions of mobile applications. Without a right promotion strategy, making your customer aware of your app is impossible. We at Plantus Media have the secret mantra to your app discovery. We ensure that your mobile app gets downloaded thousands of times. Our cutting-edge marketing techniques are proven to drive app downloads.",
    },
    {
      title: "Search Engine Optimisation (SEO)",
      description:
        "SEO is critical for visibility and growth. With nearly two decades of experience, our SEO specialists follow a proven, evolving process that drives rankings, traffic, and conversions. Our award-winning SEO strategies ensure long-term business impact and measurable results.",
    },
    {
      title: "Portal Development ",
      description:
        "Portal is the best and most efficient way of showcasing the respective areas. Plantus Media is the most compelling, robust and transparent web portal development company. We collect your business requirements and accordingly provide most efficient and advanced web portal development solutions. ",
    },
    {
      title: "Animations & Video Production",
      description:"Advertising videos or online animated videos are highly prevalent and have proven their worth in the recent time. We are into creating all sorts of videos, including Viral videos, Sales Videos, Explainer Videos, Corporate Presentation Videos, Commercial Videos, Landing Page Videos, Storytelling Videos, Social Media Videos, Short Videos, and so on.",
    },
    {
      title: "E-commerce Website",
      description:"Our web developers create websites that are not only functional but also attractive. Our design philosophy represents creative UI/UX development, with thoroughly researched content optimization techniques. We deliver innovation with our every website. We do not settle for the normal, we provide the best, beyond your expectations!",
    },
    {
      title: "Content Creation",
      description:"We know your readers, and we know search engines. Thus, we can create magic with our words to engage readers and to rank high in search engines. We have creative writers, innovative designers, and videographers who will work for your project to provide you stronger brand awareness, proven ROI, and greater search presence. ",
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12 sm:space-y-14 md:space-y-16 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-['Borna'] font-bold text-center"
      >
        What We Provide
      </motion.h2>

      {/* Grid for Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-['Borna'] font-bold"
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
                className="flex w-full flex-col items-stretch rounded-[16px] border border-black bg-white p-4 md:p-5 transition-transform duration-500 ease-out md:hover:bg-orange-100 md:hover:scale-105 md:hover:-translate-y-2 md:hover:shadow-2xl"
                aria-label={service.title}
              >
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-bold text-orange-600">{service.title}</p>
                  <div className="mt-2 text-sm sm:text-base text-gray-800 leading-relaxed">
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
