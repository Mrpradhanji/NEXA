"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
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
              <div className="w-20 h-0.5 bg-orange-500 mx-auto lg:mx-0"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-black text-lg leading-relaxed">
              <p>
                We are a leading digital marketing agency specializing in
                creating innovative strategies that drive growth and engagement.
                Our team combines creativity with cutting-edge technology to
                deliver exceptional results for our clients.
              </p>
              <p>
                With years of experience in the industry, we understand the
                evolving digital landscape and help businesses navigate it
                successfully. From brand strategy to performance marketing, we
                provide comprehensive solutions tailored to your needs.
              </p>
            </div>

            {/* Stats Cards */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Projects" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-black text-white rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-center shadow-md"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="text-2xl font-bold block">{stat.value}</span>
                    <p className="text-sm mt-2 opacity-90">{stat.label}</p>
                  </dd>
                </div>
              ))}
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-[600px] aspect-[4/3] md:aspect-square">
              <Image
                src="/images/hero-image.jpg"
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
