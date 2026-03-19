"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden clip-diagonal-reverse"
      style={{ backgroundColor: siteConfig.colors.darker }}
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${siteConfig.colors.primary}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative w-full h-[560px] rounded-2xl overflow-hidden">
              <Image
                src={siteConfig.about.image}
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${siteConfig.colors.darker} 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 border"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: `${siteConfig.colors.primary}40`,
              }}
            >
              <p
                className="heading text-4xl leading-none"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.stats[0].value}{siteConfig.stats[0].suffix}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {siteConfig.stats[0].label}
              </p>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 rounded-2xl px-5 py-4 border"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: `${siteConfig.colors.secondary}40`,
              }}
            >
              <p
                className="heading text-3xl leading-none"
                style={{ color: siteConfig.colors.secondary }}
              >
                {siteConfig.stats[1].value}{siteConfig.stats[1].suffix}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {siteConfig.stats[1].label}
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              Who We Are
            </span>
            <h2 className="heading text-6xl sm:text-7xl text-white mt-2 mb-6 leading-none">
              {siteConfig.about.heading}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {siteConfig.about.body1}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {siteConfig.about.body2}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {siteConfig.about.highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <CheckCircle
                    size={16}
                    className="shrink-0"
                    style={{ color: siteConfig.colors.primary }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Contact Info */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl p-5 border"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {[
                {
                  icon: <Phone size={15} style={{ color: siteConfig.colors.primary }} />,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phoneRaw}`,
                },
                {
                  icon: <MapPin size={15} style={{ color: siteConfig.colors.primary }} />,
                  label: "Address",
                  value: siteConfig.address,
                  href: null,
                },
                {
                  icon: <Clock size={15} style={{ color: siteConfig.colors.primary }} />,
                  label: "Hours",
                  value: siteConfig.hours,
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span className="text-gray-500 text-xs uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm font-semibold hover:opacity-80 transition-opacity"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}