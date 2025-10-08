"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white w-full font-inter ">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            {/* Heading */}
            <div className="space-y-6 mb-8 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-orange-600">
                About PlantusMedia
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 font-medium mt-4">
              <p className=" text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 ">
              We, at Plantus Media, know your requirements intimately and re-imagine the web beyond traditional boundaries. Our experts understand how crucial it is to have a digital presence for your business. We leverage the latest technology the internet has to offer and provide you stunning digital solutions. 
              </p>
              <p className=" text-base sm:text-lg md:text-xl  leading-relaxed sm:leading-8 ">
              We strive to help you in achieving your business targets by implementing a time-proven digital strategy that has delivered results for thousands of customers. We are a full-grown digital marketing company that specializes in various aspects of digital content such as web design and development, social media marketing, branding and logo design, content creation, search engine optimization, etc. We value the trust you have in our services with a promise to deliver you stellar results for your marketing goals.
              </p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-[600px] aspect-[4/3] md:aspect-square">
              <Image
                src="/images/Aboutus.png"
                alt="Creative team at PlantusMedia working together"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
