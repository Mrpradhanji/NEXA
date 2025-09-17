"use client";
import React, { useState } from "react";
import Link from "next/link";

interface CTAButtonProps {
  label: string;
  type?: "1" | "2"; // choose button style
  href?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  type = "1",
  href,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  // Button 1 classes
  const btn1Classes = `
    relative inline-block px-6 py-3 text-white font-thin uppercase tracking-wide
    transition-all duration-300 bg-red-700 rounded-md overflow-hidden
  `;

  // Button 2 classes
  const btn2Classes = `
    relative inline-block px-6 py-3 text-white font-bold uppercase tracking-wide
    transition-all duration-300 overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 before:-translate-x-1/2
    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:-translate-x-1/2
    hover:before:w-3/4 hover:after:w-3/4
  `;

  const content = (
    <>
      {label}

      {type === "1" && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="white"
            strokeWidth={hovered ? 5 : 2}
            strokeDasharray={hovered ? "15,310" : "422,0"}
            strokeDashoffset={hovered ? 48 : 0}
            style={{ transition: "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)" }}
            rx="8"
            ry="8"
          />
        </svg>
      )}
    </> 
  );

  const classes = type === "1" ? btn1Classes : btn2Classes;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </button>
  );
};

export default CTAButton;
