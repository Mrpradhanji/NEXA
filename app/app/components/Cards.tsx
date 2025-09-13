"use client";

import React from "react";

interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    title: "Diligord",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    image: "https://unsplash.it/500/500/",
  },
  {
    title: "Rocogged",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    image: "https://unsplash.it/511/511/",
  },
  {
    title: "Strizzes",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    image: "https://unsplash.it/502/502/",
  },
  {
    title: "Clossyo",
    subtitle: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    image: "https://unsplash.it/503/503/",
  },
];

export default function Cards() {
  return (
    <section className="py-24 bg-black w-full">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <div className="w-20 h-0.5 bg-white/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="cursor-pointer"
            >
              <div className="group [transform-style:preserve-3d] [perspective:1000px] relative h-80 w-full">
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl shadow-lg bg-center bg-cover overflow-hidden
                             [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] group-hover:[transform:rotateY(-180deg)]"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center text-white z-10">
                    <p className="text-2xl font-semibold mb-2 relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-white after:mx-auto after:mt-2">
                      {card.title}
                    </p>
                    <span className="text-gray-300">{card.subtitle}</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 
                             [transform:rotateY(180deg)] [backface-visibility:hidden] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] group-hover:[transform:rotateY(0deg)] flex items-center justify-center text-white p-8"
                >
                  <p className="text-center text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
