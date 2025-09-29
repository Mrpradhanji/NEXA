"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import RevealLinks from "../components/RevealLinks";

const orange = "text-orange-500";

const locations = [
  {
    city: "Bolton",
    phone: "+44 (0)1204 669566",
    addr: ["Rugby House, Hampson Street", "Horwich, BL6 7JH"],
    map: "https://maps.google.com/?q=Rugby+House+Horwich+BL6+7JH",
  },
  {
    city: "London",
    phone: "+44 (0)20 4538 8086",
    addr: ["3rd Floor, 86-90 Paul Street", "London, EC2A 4NE"],
    map: "https://maps.google.com/?q=86-90+Paul+Street+London+EC2A+4NE",
  },
];

const socialLinks = [
  { label: "LinkedIn", icon: "fa-brands fa-linkedin", url: "#" },
  { label: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
  { label: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
];

const aboutOptions = [
  "General enquiry",
  "Project discussion",
  "Careers",
  "Partnership",
  "Other",
];

const AbsoluteContact = () => {
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Magnetic button logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <div className="relative font-sans bg-black min-h-screen text-white overflow-hidden">
      {/* Parallax gradient blobs */}
      <motion.div
        animate={{ x: [0, 40, -40, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-180px] left-[5%] w-[600px] h-[600px] blur-[180px] opacity-40 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg,#FF5800,#E040FB,#7C3AED)",
        }}
      />
      <motion.div
        animate={{ x: [0, -80, 80, 0], y: [0, 95, -95, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-220px] right-[6%] w-[450px] h-[450px] blur-[130px] opacity-40 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg,#7C3AED,#FF5800,#E040FB)",
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none z-10"></div>

      {/* Header: Hero */}
      <section className="py-28 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_35px_rgba(0,0,0,0.5)]"
        >
          Connect.
          <br />
          Collaborate.
          <br />
          Be Bold.
        </motion.div>
        <div className="mt-8 text-lg font-semibold text-gray-300">
          &quot;We spark ideas into creative realities.&quot;
        </div>
      </section>

      {/* Divider Wave */}
      <svg
        className="w-full h-16 text-orange-500"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,64L1440,224L1440,320L0,320Z"></path>
      </svg>

      {/* Contact & Locations */}
      <section className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto px-4 py-12 gap-12 z-20 relative">
        {/* Animated Glass Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 bg-black bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-500 border-opacity-20 p-10 space-y-10"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-extrabold tracking-tight">
              <span className={orange}>Work with us</span>
            </div>
            <div className="text-2xl font-bold">studio@plantusmedia.com</div>
            <div className={orange + " text-xl font-semibold"}>Talk to us</div>
            <div className="text-lg font-bold">India: 01204 669566</div>
          </div>

          {/* Modern Two-column Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white items-stretch mt-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact Form"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <label className="text-orange-400 text-sm font-semibold mb-1">
                Type of enquiry
              </label>
              <select
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
              >
                <option value="">About...</option>
                {aboutOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-black">
                    {opt}
                  </option>
                ))}
              </select>

              <label className="text-orange-400 text-sm font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Name*"
                className="border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
                value={name}
                aria-label="Your Name"
                onChange={(e) => setName(e.target.value)}
              />

              <label className="text-orange-400 text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email*"
                className="border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
                value={email}
                aria-label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <label className="text-orange-400 text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Message"
                className="border-b border-orange-400 bg-transparent py-2 outline-none text-lg h-full resize-none"
                value={message}
                aria-label="Message"
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="text-xs text-gray-400 text-left leading-tight mt-1 md:mt-auto">
                By submitting this form, I agree Plantusmedia may use my data as
                described in the privacy policy.
              </div>

              {/* Magnetic Button */}
              <motion.button
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileHover={{ scale: 1.08, backgroundColor: "#FF5800" }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="mt-4 md:mt-0 font-bold text-lg text-orange-400 hover:underline px-6 py-3 border border-orange-400 rounded-full transition-shadow self-start"
                aria-label="Submit"
              >
                Submit
              </motion.button>
            </div>
          </motion.form>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center gap-10 w-full"
        >
          {locations.map(({ city, phone, addr, map }) => (
            <motion.div
              key={city}
              whileHover={{ x: 12, scale: 1.03 }}
              className="bg-gray-900 bg-opacity-70 backdrop-blur rounded-xl p-7 space-y-3 shadow-xl w-full"
            >
              <div className={orange + " text-2xl font-bold"}>{city}</div>
              <div className={orange + " text-xs"}>{phone}</div>
              <div className="text-sm font-medium text-gray-200">
                {addr.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <a
                href={map}
                target="_blank"
                rel="noopener noreferrer"
                className={orange + " text-xs font-semibold underline"}
                aria-label={`Find us in ${city}`}
              >
                Find Us
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bold Quote */}
      <section className="py-20 text-center px-6 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          &quot;Creativity takes courage.&quot;
        </motion.h2>
      </section>

      {/* Reveal Links Section */}

      {/* Footer */}
      <footer className="bg-orange-500 py-12 px-8 mt-10 text-white relative z-20">
        <RevealLinks />
      </footer>
    </div>
  );
};

export default AbsoluteContact;
