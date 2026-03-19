"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck, ThumbsUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const icons = [
  <Clock size={28} />,
  <DollarSign size={28} />,
  <ShieldCheck size={28} />,
  <ThumbsUp size={28} />,
];

export default function WhyUs() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${siteConfig.colors.primary} 1px, transparent 1px),
                           linear-gradient(90deg, ${siteConfig.colors.primary} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${siteConfig.colors.primary}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
            Why Choose Us
          </span>
          <h2 className="heading text-6xl sm:text-7xl text-white mt-2 leading-none">
            The {siteConfig.name} Difference
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-7 border group cursor-pointer overflow-hidden"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${siteConfig.colors.primary}15, transparent 70%)`,
                }}
              />

              {/* Number */}
              <span
                className="heading text-7xl absolute top-4 right-4 opacity-5 leading-none"
                style={{ color: siteConfig.colors.primary }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                style={{
                  backgroundColor: `${siteConfig.colors.primary}15`,
                  color: siteConfig.colors.primary,
                  border: `1px solid ${siteConfig.colors.primary}20`,
                }}
              >
                {icons[i % icons.length]}
              </div>

              {/* Content */}
              <h3
                className="heading text-2xl text-white mb-3 relative z-10"
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: siteConfig.colors.primary }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}