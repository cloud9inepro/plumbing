"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function ServiceAreas() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${siteConfig.colors.primary}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              Where We Work
            </span>
            <h2 className="heading text-6xl sm:text-7xl text-white mt-2 mb-6 leading-none">
              Areas We Serve
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {siteConfig.name} proudly serves a wide range of communities in
              the area. No matter where you are, our team is ready to respond
              quickly with the same professional service and honest pricing our
              customers trust.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Not sure if we cover your area? Give us a call — we are always
              happy to help.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full transition-all border hover:bg-white/5"
                style={{
                  borderColor: siteConfig.colors.border,
                  color: "white",
                }}
              >
                Request a Quote
              </a>
            </div>
          </motion.div>

          {/* Right — Areas Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <MapPin
                  size={16}
                  style={{ color: siteConfig.colors.primary }}
                />
                <p className="text-white font-bold text-sm uppercase tracking-wider">
                  Service Coverage Areas
                </p>
              </div>

              {/* Areas */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {siteConfig.serviceAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 border transition-all group cursor-default"
                    style={{
                      backgroundColor: siteConfig.colors.dark,
                      borderColor: siteConfig.colors.border,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Note */}
              <p
                className="text-gray-500 text-xs mt-5 pt-4 border-t"
                style={{ borderColor: siteConfig.colors.border }}
              >
                Not seeing your area? Call us — we may still be able to help.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}