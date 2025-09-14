"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white pt-12 px-8 md:px-20">
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Left - Big Section Links */}
        <ul className="space-y-4 text-4xl md:text-5xl font-extrabold mb-10 md:mb-0">
          <li><a href="#work" className="hover:underline transition-all">Work</a></li>
          <li><a href="#agency" className="hover:underline transition-all">Agency</a></li>
          <li><a href="#insights" className="hover:underline transition-all">Insights</a></li>
          <li><a href="#contact" className="hover:underline transition-all">Contact</a></li>
        </ul>

        {/* Right - Grouped Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left w-full md:w-auto">
          <div>
            <h4 className="font-bold text-xl mb-2">Brand</h4>
            <ul className="space-y-1">
              <li>Brand Workshops</li>
              <li>Brand Strategy</li>
              <li>Brand Creation</li>
              <li>Brand Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Digital</h4>
            <ul className="space-y-1">
              <li>Digital Workshops</li>
              <li>Digital Strategy</li>
              <li>Web Design</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Campaign</h4>
            <ul className="space-y-1">
              <li>Campaign Strategy</li>
              <li>Campaign Concepts</li>
              <li>Campaign Development</li>
              <li>Sponsorship Activation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Content</h4>
            <ul className="space-y-1">
              <li>Social Media Content</li>
              <li>Copywriting</li>
              <li>Photography</li>
              <li>Videography</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white border-opacity-30 my-10" />

      {/* Middle Section with Email + Social Links */}
      <div className="flex flex-col md:flex-row md:justify-between items-start">
        <div>
          <div className="text-3xl md:text-4xl font-extrabold mb-3">
            plantusmedia@gmail.com
          </div>
          <div className="font-bold text-lg mb-4">
            INDIA: +44 (0)1204 669566 <br />
            DUBAI: +44 (0)20 4538 8086
          </div>

          {/* Social + Quick Links */}
          <div className="flex flex-col md:flex-row gap-8 text-base">
            <ul className="space-y-1 font-medium">
              <li>→ <a href="#" className="hover:underline">LinkedIn</a></li>
              <li>→ <a href="#" className="hover:underline">Instagram</a></li>
              <li>→ <a href="#" className="hover:underline">YouTube</a></li>
            </ul>
            <ul className="space-y-1 font-medium">
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
            </ul>
          </div>
        </div>

        {/* Logos / Membership badges */}
        <div className="flex flex-wrap items-center gap-6 mt-8 md:mt-0">
          <img src="/logos/dba.svg" alt="dba" className="h-8 opacity-60" />
          <img src="/logos/manchester-digital.svg" alt="Manchester Digital" className="h-8 opacity-60" />
          <img src="/logos/bima.svg" alt="BIMA" className="h-8 opacity-60" />
          <img src="/logos/dan.svg" alt="DAN" className="h-8 opacity-60" />
          <img src="/logos/prolificnorth.svg" alt="ProlificNorth" className="h-8 opacity-60" />
          <img src="/logos/living-wage.svg" alt="Living Wage Employer" className="h-8 opacity-60" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white border-opacity-30 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white text-opacity-80 gap-2">
        <span>© Plantusmedia 2025.</span>
        <span className="flex gap-4">
          <a href="#" className="hover:underline">Privacy.</a>
          <a href="#" className="hover:underline">Modern Day Slavery Act.</a>
        </span>
      </div>
    </footer>
  );
}
