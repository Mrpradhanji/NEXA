"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full min-h-[28rem] sm:min-h-[32rem] md:min-h-[40rem] py-12 sm:py-16 md:py-20 flex flex-col antialiased bg-black dark:bg-white dark:bg-grid-orange/[0.5] items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 font-inter">
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-black mb-3 sm:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-orange-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-medium">
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
          className="w-full [&>div>ul>li]:w-[260px] [&>div>ul>li]:xs:w-[300px] [&>div>ul>li]:sm:w-[360px] [&>div>ul>li]:md:w-[420px] [&>div>ul>li]:lg:w-[480px] [&>div>ul>li]:px-4 [&>div>ul>li]:py-6 [&>div>ul>li]:sm:py-8"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Plantusmedia brought fresh-thinking along with their creative ideas to help us design our Social Media Strategy. They have an expert team who are able to present their ideas in a compelling way.",
  },
  {
    quote:
      "They are highly professional, provides quality work and know how to build good relationships with their clients. I highly recommend them for highly effective and useful social media strategy which will definitely give you the results.",
  },
  {
    quote:
      "PlantusMedia did a great job in developing and designing our website. We have presented them just an idea of what we want and they turned our idea into reality. The design is impeccable. It's easier for our user to navigate the site and provides an extremely joyful experience to our users.",
  },
  {
    quote:
      "I am happy with their work ethics and how professionally they have worked on our project. The whole project was completed on time, without any glitches. I will surely use their expertise in future.",
  },
  {
    quote:
      "PlantusMedia has a team of experts which work solely to deliver solutions for all your needs. I am saying that because not only they have helped me in designing my website, but also provided me SEO optimized content. It helped me to get better ranking in search engines.",
  },
  {
    quote:
      "They have transformed the complex information about my products into a simple yet conversational way so that my users like it. They provided the best content writing services to cater all my needs. I am surely using their expertise to write many more contents for me.",
  },
];
