"use client";

import React from "react";

export default function BackToTopButton() {
  return (
    <div className="fixed bottom-8 right-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}


