"use client";

import React from "react";

type CardSpotlightProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CardSpotlight({ className, children }: CardSpotlightProps) {
  return (
    <div
      className={`relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}


