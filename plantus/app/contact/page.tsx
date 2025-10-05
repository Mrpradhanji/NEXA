"use client";

import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useMotionValue, useTransform } from "framer-motion";
import RevealLinks from "../components/RevealLinks";
import Breadcrumbs from "../components/Breadcrumbs";

const orange = "text-orange-500";

const locations = [
  {
    city: "Ghaziabad",
    phone: "+91 8368344943",
    addr: [
      "SE 87A",
      "Jaipurua Sunrise Plaza",
      "Ahinsa Khand 1",
      "Indirapuram, Ghaziabad, Uttar Pradesh, India - 201014",
    ],
    map: "https://maps.app.goo.gl/X49k9SfbfqgpT61RA",
  },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  // EmailJS init
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
    if (publicKey) {
      try {
        emailjs.init({ publicKey });
      } catch {
        // ignore
      }
    }
  }, []);

  // Magnetic button motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);
    setStatusError(null);

    if (!about || !name || !email) {
      setStatusError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

      if (!serviceId || !templateId) {
        throw new Error("Email service not configured");
      }

      const templateParams = {
        about,
        name,
        email,
        message,
        to_email: "plantusmediaconsulting@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setStatusMessage("✅ Thanks! Your message has been sent.");
      setAbout("");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatusError("❌ Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative font-[Inter] bg-black min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <section className="py-20 sm:py-24 md:py-28 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Connect. <br /> Collaborate. <br /> Be Bold.
        </motion.div>
        <div className="mt-8 text-lg font-semibold text-gray-300">
          &quot;We spark ideas into creative realities.&quot;
        </div>
      </section>

      {/* Divider */}
      <svg
        className="w-full h-16 text-orange-500"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0,64L1440,224L1440,320L0,320Z"></path>
      </svg>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-4 relative z-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>

      {/* Contact & Location */}
      <section className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto px-4 py-8 sm:py-10 md:py-12 gap-6 md:gap-12 z-20 relative">
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 w-full bg-black bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl border border-orange-500 border-opacity-20 p-6 md:p-10 space-y-8 md:space-y-10"
        >
          <div className="text-center space-y-2">
            <div className="text-3xl font-extrabold">
              <span className={orange}>Work with us</span>
            </div>
            <div className="text-2xl font-bold">plantusmediaconsulting@gmail.com</div>
            <div className={orange + " text-xl font-semibold"}>Talk to us</div>
            <a href="tel:+918368344943" className="text-lg font-bold underline">
              India: +91 8368344943
            </a>
          </div>

          {/* ✅ Full Form here */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white items-stretch mt-6"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <label className="text-orange-400 text-sm font-semibold">Type of enquiry</label>
              <select
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
              >
                <option value="">About...</option>
                {aboutOptions.map((opt) => (
                  <option key={opt} value={opt} className="text-black">
                    {opt}
                  </option>
                ))}
              </select>

              <label className="text-orange-400 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Name*"
                className="w-full border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="text-orange-400 text-sm font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Email*"
                className="w-full border-b border-orange-400 bg-transparent py-2 outline-none text-lg"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <label className="text-orange-400 text-sm font-semibold">Message</label>
              <textarea
                rows={6}
                placeholder="Message"
                className="w-full border-b border-orange-400 bg-transparent py-2 outline-none text-lg resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="text-xs text-gray-400 mt-2">
                By submitting this form, I agree Plantusmedia may use my data as
                described in the privacy policy.
              </div>

              {/* Magnetic Submit Button */}
              <motion.button
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileHover={{ scale: 1.08, backgroundColor: "#FF5800" }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-4 font-bold text-lg text-orange-400 border border-orange-400 rounded-full px-6 py-3"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </motion.button>

              {statusMessage && (
                <div className="text-green-400 text-sm mt-2">{statusMessage}</div>
              )}
              {statusError && (
                <div className="text-red-400 text-sm mt-2">{statusError}</div>
              )}
            </div>
          </motion.form>
        </motion.div>

        {/* Location Card */}
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
              <a href={`tel:${phone}`} className={orange + " text-xs underline"}>
                {phone}
              </a>
              <div className="text-sm font-medium text-gray-200">
                {addr.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <a href={map} target="_blank" rel="noopener noreferrer" className={orange + " text-xs underline"}>
                Find Us
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 py-12 px-8 mt-10 text-white relative z-20">
        <RevealLinks />
      </footer>

      {/* ✅ JSON-LD Schema for Ghaziabad */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Plantus Media",
            url: "https://www.plantusmediaconsulting.com/",
            email: "plantusmediaconsulting@gmail.com",
            telephone: "+91 8368344943",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SE 87A, Jaipurua Sunrise Plaza, Ahinsa Khand 1, Indirapuram",
              addressLocality: "Ghaziabad",
              postalCode: "201014",
              addressRegion: "Uttar Pradesh",
              addressCountry: "India",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 8368344943",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default AbsoluteContact;
