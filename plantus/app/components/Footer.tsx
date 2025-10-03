"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white pt-12 px-4 sm:px-6 md:px-10 lg:px-20 font-[Borna]">
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left - Big Section Links */}
        <ul className="space-y-3 sm:space-y-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-0">
          <li><Link href="/our-works" className="hover:underline transition-all">Work</Link></li>
          <li><Link href="/about" className="hover:underline transition-all">Agency</Link></li>
          <li><Link href="/blog" className="hover:underline transition-all">Insights</Link></li>
          <li><Link href="/contact" className="hover:underline transition-all">Contact</Link></li>
        </ul>

        {/*If we have more than*/}
        <div className=""></div>
        {/* Right - Grouped Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left w-full md:w-auto">
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-2">Brand</h4>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Brand Workshops</li>
              <li>Brand Strategy</li>
              <li>Brand Creation</li>
              <li>Brand Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-2">Digital</h4>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Digital Workshops</li>
              <li>Digital Strategy</li>
              <li>Web Design</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-2">Campaign</h4>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Campaign Strategy</li>
              <li>Campaign Concepts</li>
              <li>Campaign Development</li>
              <li>Sponsorship Activation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-2">Content</h4>
            <ul className="space-y-1 text-sm sm:text-base">
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
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-8">
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 break-words">
            <a href="mailto:plantusmediaconsulting@gmail.com" className="hover:underline">
              plantusmediaconsulting@gmail.com
            </a>
          </div>
          <div className="font-bold text-base sm:text-lg mb-4">
            <a href="tel:+918368344943" className="hover:underline">IND: +91 8368344943</a> <br />

          </div>

          {/* Social + Quick Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm sm:text-base">
            <ul className="space-y-1 font-medium">
              <li>→ <a href="https://linkedin.com/company/plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              <li>→ <a href="https://instagram.com/plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li>→ <a href="https://youtube.com/@plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
            </ul>
            <ul className="space-y-1 font-medium">
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Logos / Membership badges */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 md:mt-0">
          <div className="text-center">
            <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Certified</div>
            <div className="text-[11px] sm:text-xs opacity-80">ISO 9001</div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Awards</div>
            <div className="text-[11px] sm:text-xs opacity-80">Best Agency 2024</div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Partnerships</div>
            <div className="text-[11px] sm:text-xs opacity-80">Google Partner</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white border-opacity-30 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white text-opacity-80 gap-2">
        <span>© Plantusmedia 2025. All rights reserved.</span>
        <span className="flex gap-4">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
        </span>
      </div>
    </footer>
  );
}
