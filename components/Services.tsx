"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Wrench,
  Flame,
  Search,
  ShowerHead,
  AlertTriangle,
  Gauge,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

const icons = [
  <Droplets size={24} />,
  <Wrench size={24} />,
  <Flame size={24} />,
  <Search size={24} />,
  <ShowerHead size={24} />,
  <AlertTriangle size={24} />,
  <Gauge size={24} />,
  <Wind size={24} />,
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 relative"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              What We Do
            </span>
            <h2
              className="heading text-6xl sm:text-7xl text-white mt-2 leading-none"
            >
              Our Services
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden border cursor-pointer"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, ${siteConfig.colors.card} 100%)`,
                  }}
                />

                {/* Icon Badge */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${siteConfig.colors.primary}20`,
                    color: siteConfig.colors.primary,
                    border: `1px solid ${siteConfig.colors.primary}30`,
                  }}
                >
                  {icons[i % icons.length]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="heading text-2xl text-white mb-2 group-hover:transition-colors"
                  style={{
                    color: "white",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: siteConfig.colors.primary,
              boxShadow: `0 0 30px ${siteConfig.colors.primary}30`,
            }}
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}