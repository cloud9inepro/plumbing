"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: siteConfig.colors.darker }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${siteConfig.colors.primary}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
            Got Questions?
          </span>
          <h2 className="heading text-6xl sm:text-7xl text-white mt-2 leading-none">
            FAQ
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {siteConfig.faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor:
                  openIndex === i
                    ? `${siteConfig.colors.primary}60`
                    : siteConfig.colors.border,
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                style={{
                  backgroundColor:
                    openIndex === i
                      ? `${siteConfig.colors.primary}08`
                      : "transparent",
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{
                    color:
                      openIndex === i
                        ? siteConfig.colors.primary
                        : "white",
                  }}
                >
                  {item.question}
                </span>
                <span className="shrink-0">
                  {openIndex === i ? (
                    <Minus
                      size={18}
                      style={{ color: siteConfig.colors.primary }}
                    />
                  ) : (
                    <Plus size={18} className="text-gray-500" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed border-t pt-4"
                      style={{
                        color: "#9CA3AF",
                        borderColor: siteConfig.colors.border,
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-4">
            Still have questions? We are happy to help.
          </p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: siteConfig.colors.primary,
              boxShadow: `0 0 30px ${siteConfig.colors.primary}30`,
            }}
          >
            Call Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}