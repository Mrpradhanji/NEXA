"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full min-h-[28rem] sm:min-h-[32rem] md:min-h-[40rem] py-12 sm:py-16 md:py-20 flex flex-col antialiased bg-black dark:bg-white dark:bg-grid-orange/[0.5] items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-black mb-3 sm:mb-4">
          What Our Clients Say
        </h2>
        <div className="w-16 sm:w-20 h-0.5 bg-orange-500 mx-auto mb-4 sm:mb-6"></div>
        <p className="text-gray-300 dark:text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Hear from businesses that have transformed their digital presence with
          us
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="w-full [&>div>ul>li]:w-[280px] [&>div>ul>li]:xs:w-[320px] [&>div>ul>li]:sm:w-[380px] [&>div>ul>li]:md:w-[420px] [&>div>ul>li]:lg:w-[480px] [&>div>ul>li]:px-4 [&>div>ul>li]:py-6 [&>div>ul>li]:sm:py-8"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with this team transformed our online presence. Their strategic approach and attention to detail resulted in a 200% increase in our web traffic and a significant boost in conversions.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The level of creativity and technical expertise brought to our project was exceptional. They delivered beyond our expectations, creating a seamless user experience that perfectly represents our brand.",
    name: "Michael Chen",
    title: "Marketing Director, BrandVista",
  },
  {
    quote:
      "From the initial consultation to the final delivery, the team demonstrated professionalism and deep industry knowledge. Our new website has received overwhelming positive feedback from our clients.",
    name: "Emily Rodriguez",
    title: "Founder, CreativeMinds",
  },
  {
    quote:
      "Their data-driven approach to digital marketing helped us identify new opportunities and optimize our campaigns. We've seen a 150% ROI since partnering with them.",
    name: "David Kim",
    title: "Head of Growth, NextGen Solutions",
  },
  {
    quote:
      "The team's ability to understand our vision and translate it into a stunning digital experience was impressive. They were responsive, collaborative, and delivered on time and on budget.",
    name: "Lisa Thompson",
    title: "CMO, InnovateX",
  },
];
