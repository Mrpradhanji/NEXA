"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-orange-600">
                About PLANTUSMEDIA
              </h2>
              <div className="w-20 h-0.5 bg-white/30 mx-auto lg:mx-0"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="text-black text-lg leading-relaxed">
                We are a leading digital marketing agency specializing in creating innovative 
                strategies that drive growth and engagement. Our team combines creativity with 
                cutting-edge technology to deliver exceptional results for our clients.
              </p>
              <p className="text-black text-lg leading-relaxed">
                With years of experience in the industry, we understand the evolving digital 
                landscape and help businesses navigate it successfully. From brand strategy 
                to performance marketing, we provide comprehensive solutions tailored to your needs.
              </p>
            </div>

            {/* Stats Cards */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
              <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-center">
                <dt className="sr-only">Years Experience</dt>
                <dd>
                  <span className="text-white text-2xl font-bold block">10+</span>
                  <p className="text-white text-sm mt-2">Years Experience</p>
                </dd>
              </div>
              <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-center">
                <dt className="sr-only">Projects</dt>
                <dd>
                  <span className="text-white text-2xl font-bold block">500+</span>
                  <p className="text-white text-sm mt-2">Projects</p>
                </dd>
              </div>
              <div className="bg-black backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-center">
                <dt className="sr-only">Success Rate</dt>
                <dd>
                  <span className="text-white text-2xl font-bold block">98%</span>
                  <p className="text-white text-sm mt-2">Success Rate</p>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full h-full max-w-[600px] aspect-square">
              <Image
                src="/images/hero-image.jpg"
                alt="Creative team at PlantusMedia working together"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm opacity-90 font-medium">Our creative team at work</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
