"use client";

import { motion } from "framer-motion";
import { Phone, ArrowDown, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden clip-diagonal"
      style={{ backgroundColor: siteConfig.colors.darker }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.hero.backgroundImage}
          alt={`${siteConfig.name} background`}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${siteConfig.colors.darker}F2 50%, ${siteConfig.colors.darker}99 100%)`,
          }}
        />
      </div>

      {/* Decorative vertical line */}
      <div
        className="absolute left-[10%] top-0 bottom-0 w-px opacity-20 hidden lg:block"
        style={{ backgroundColor: siteConfig.colors.primary }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
              style={{
                borderColor: `${siteConfig.colors.primary}40`,
                color: siteConfig.colors.primary,
                backgroundColor: `${siteConfig.colors.primary}10`,
              }}
            >
              <ShieldCheck size={13} />
              Licensed & Insured · {siteConfig.name}
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="heading text-7xl sm:text-8xl lg:text-9xl text-white leading-none"
              >
                {siteConfig.hero.heading}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="heading text-7xl sm:text-8xl lg:text-9xl leading-none"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.hero.subheading}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-lg max-w-lg leading-relaxed mb-10"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: siteConfig.colors.primary,
                  boxShadow: `0 0 30px ${siteConfig.colors.primary}40`,
                }}
              >
                <Phone size={20} />
                {siteConfig.phone}
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 border text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5"
                style={{ borderColor: siteConfig.colors.border }}
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right — Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Rating Card */}
            <div
              className="rounded-2xl p-6 border flex items-center gap-4"
              style={{
                backgroundColor: `${siteConfig.colors.card}CC`,
                borderColor: siteConfig.colors.border,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${siteConfig.colors.secondary}20` }}
              >
                <Star
                  size={28}
                  style={{ color: siteConfig.colors.secondary }}
                  fill="currentColor"
                />
              </div>
              <div>
                <p
                  className="heading text-4xl leading-none"
                  style={{ color: siteConfig.colors.secondary }}
                >
                  {siteConfig.stats[2].value}{siteConfig.stats[2].suffix}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {siteConfig.stats[2].label}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="rounded-2xl p-6 border flex items-center gap-4"
              style={{
                backgroundColor: `${siteConfig.colors.card}CC`,
                borderColor: siteConfig.colors.border,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
              >
                <Phone
                  size={28}
                  style={{ color: siteConfig.colors.primary }}
                />
              </div>
              <div>
                <p className="text-white font-bold text-lg">
                  {siteConfig.hours}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Emergency calls welcome
                </p>
              </div>
            </div>

            {/* Tagline Card */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: `${siteConfig.colors.primary}15`,
                borderColor: `${siteConfig.colors.primary}30`,
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                className="heading text-3xl leading-tight"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.tagline}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {siteConfig.stats[1].value}{siteConfig.stats[1].suffix} {siteConfig.stats[1].label} and counting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-10"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}