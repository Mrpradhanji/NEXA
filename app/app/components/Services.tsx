"use client";
import { CardSpotlight } from "./ui/card-spotlight";
import { motion } from "framer-motion";

export function Services() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center"
      >
        What We Provide
      </motion.h2>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Digital Marketing Strategy
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Our strategists design tailored digital marketing plans for businesses across industries.
            From customer personas and buyer journeys to lead generation opportunities and messaging, we deliver actionable strategies backed by a full audit of your website, mobile presence, and social media assets.


          </div>
        </CardSpotlight>

        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Website Design & Development
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Our team of project managers, designers, UX specialists, and developers collaborate to build award-winning websites.
            Since 2005, we’ve successfully delivered more than 1,500 websites across diverse industries, combining creativity with functionality to drive results.
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Social Media Marketing
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Social media is one of the most powerful ways to grow your brand. Through a mix of organic and paid strategies, we help you connect, engage, and build trust with your audience.
            From community management to advertising campaigns, we handle every aspect of social media marketing.
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            HubSpot & Inbound Marketing
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            As a HubSpot Diamond Partner (top 2% globally), we bring deep expertise in CRM, inbound marketing, and automation.
            Our team helps integrate marketing, sales, content, and customer service, ensuring seamless HubSpot adoption tailored to your business.
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Search Engine Optimisation (SEO)
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            SEO is critical for visibility and growth. With nearly two decades of experience, our SEO specialists follow a proven, evolving process that drives rankings, traffic, and conversions.
            Our award-winning SEO strategies ensure long-term business impact and measurable results.
          </div>
        </CardSpotlight>

        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Lead Generation
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            For almost 20 years, we’ve helped businesses secure high-quality leads that convert.
            As a Google Premier Partner, Meta Partner, LinkedIn Partner, Snapchat Partner, and TikTok Partner, we leverage exclusive access to targeted audiences. Our data-driven campaigns transform prospects into loyal customers.
          </div>
        </CardSpotlight>
        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Video Production
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Video is one of the most engaging formats in digital marketing. Our creative team produces compelling videos that bring your brand to life, resonate with your audience, and deliver measurable impact.
          </div>
        </CardSpotlight>
        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Web 3.0 & NFT Services
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            The next digital revolution is here. Just as the internet transformed business 30 years ago, Web 3.0 is reshaping the landscape.
            We help brands embrace Web 3.0 and NFTs with tailored strategies to stay ahead of the curve.
          </div>
        </CardSpotlight>
        <CardSpotlight className="w-80">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Metaverse Marketing
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            The Metaverse offers exciting new ways for brands to engage audiences in immersive digital spaces.
            We guide companies through the opportunities of different Metaverse platforms, helping them select the right environment to achieve their goals.
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
}
