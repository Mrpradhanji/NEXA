"use client";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "./ui/animated-testimonial";
import IndustriesGrid from "./Grid"; // industries grid we built earlier
import CTAButton from "./Button"; // make sure this is your Button component

const stats = [
  { label: "Clients Served", value: "500+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Countries Reached", value: "10+" },
];

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our process has been totally revolutionized by the creative features and meticulous attention to detail. This is just what we have been seeking.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "The productivity of our staff has increased dramatically as a result of this approach. Complicated tasks are made simple by the user-friendly UI.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background flair */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Industries Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          We have extensive experience in the following industries
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Our solutions span across multiple domains, enabling us to deliver specialized results tailored to your business needs.
        </p>

        {/* Industries Grid */}
        <IndustriesGrid />

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-neutral-300 mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mt-20 mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
          Don’t just take our word for it — see how we’ve helped businesses thrive across various industries.
        </p>

        {/* Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} />

        {/* CTA - Type 1 Button */}
        <div className="mt-16">
          <CTAButton label="Get Started Today" type="1" href="/contact" />
        </div>
      </div>
    </section>
  );
}
