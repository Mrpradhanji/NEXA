"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name?: string;
    title?: string;
    color?: string; // Optional gradient/color for each card
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for infinite scroll
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  // Mobile/Pointer pause support (press & hold to pause)
  const pauseAnimation = () => {
    if (!pauseOnHover) return;
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "paused";
    }
  };

  const resumeAnimation = () => {
    if (!pauseOnHover) return;
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,#ffffff_20%,#ff5800_80%,transparent)]",
        className
      )}
      onPointerDown={pauseAnimation}
      onPointerUp={resumeAnimation}
      onPointerCancel={resumeAnimation}
      onTouchStart={pauseAnimation}
      onTouchEnd={resumeAnimation}
      onMouseEnter={pauseOnHover ? pauseAnimation : undefined}
      onMouseLeave={pauseOnHover ? resumeAnimation : undefined}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name ?? "item"}-${idx}`}
            className={cn(
              "relative w-[260px] xs:w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] max-w-full shrink-0 rounded-2xl border border-b-0 px-6 sm:px-8 py-5 sm:py-6",
              item.color
                ? item.color
                : "bg-gradient-to-b from-orange-200 to-orange-400 dark:from-gray-800 dark:to-gray-900",
              "border-zinc-200 dark:border-zinc-700"
            )}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm sm:text-base leading-[1.7] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-xs sm:text-sm leading-[1.6] font-medium font-inter text-neutral-600 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm leading-[1.6] font-medium font-inter text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
