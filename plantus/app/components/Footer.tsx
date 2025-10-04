"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white pt-12 px-8 md:px-20 font-inter">
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start font-bold">
        {/* Left - Big Section Links */}
        <ul className="space-y-4 text-4xl md:text-5xl font-extrabold mb-10 md:mb-0">
          <li><Link href="/our-works" className="hover:underline transition-all">Work</Link></li>
          <li><Link href="/about" className="hover:underline transition-all">Agency</Link></li>
          <li><Link href="/blog" className="hover:underline transition-all">Insights</Link></li>
          <li><Link href="/contact" className="hover:underline transition-all">Contact</Link></li>
        </ul>

        {/*If we have more than*/}
        <div className=""></div>
        {/* Right - Grouped Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left w-full md:w-auto font-bold">
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
          <div className="text-md sm:text-md md:text-4xl font-bold mb-3 break-words">
            <a href="mailto:hello@plantusmedia.com" className="hover:underline inline-block max-w-full break-all">
              plantusmediaconsulting@gmail.com
            </a>
          </div>
          <div className="font-bold text-lg mb-4">
            <a href="tel:+918368344943" className="hover:underline">IND : +91 8368344943</a> <br />

          </div>

          {/* Social + Quick Links */}
          <div className="flex flex-col md:flex-row gap-8 text-base">
            <ul className="space-y-1 font-bold">
              <li>→ <a href="https://linkedin.com/company/plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
              <li>→ <a href="https://instagram.com/plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li>→ <a href="https://youtube.com/@plantusmedia" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
            </ul>
            <ul className="space-y-1 font-bold">
              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Logos / Membership badges */}
        <div className="flex flex-wrap items-center gap-6 mt-8 md:mt-0">
          <div className="text-center">
            <div className="text-sm font-bold mb-2">Certified</div>
            <div className="text-xs opacity-80">ISO 9001</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold mb-2">Awards</div>
            <div className="text-xs opacity-80">Best Agency 2024</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold mb-2">Partnerships</div>
            <div className="text-xs opacity-80">Google Partner</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white border-opacity-30 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white text-opacity-80 gap-2">
        <span className="font-bold">© Plantusmedia 2025. All rights reserved.</span>
        <span className="flex gap-4">
          <Link href="#" className="font-bold hover:underline">Privacy Policy</Link>
          <Link href="#" className="font-bold hover:underline">Terms of Service</Link>
          <Link href="#" className="font-bold hover:underline">Accessibility</Link>
        </span>
      </div>
    </footer>
  );
}
