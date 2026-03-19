"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          style={{
            color: i < rating ? siteConfig.colors.secondary : "#374151",
            fill: i < rating ? siteConfig.colors.secondary : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden clip-diagonal-both"
      style={{ backgroundColor: siteConfig.colors.darker }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${siteConfig.colors.secondary}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimonials
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2">
            <h2 className="heading text-6xl sm:text-7xl text-white leading-none">
              What Clients Say
            </h2>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-white font-bold">
                {siteConfig.stats[2].value}{siteConfig.stats[2].suffix}
              </span>
              <span className="text-gray-500 text-sm">
                · {siteConfig.reviews.length} Reviews
              </span>
            </div>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {siteConfig.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid rounded-2xl p-6 border flex flex-col gap-4 group hover:border-opacity-60 transition-all duration-300"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {/* Quote Icon */}
              <Quote
                size={20}
                className="opacity-30"
                style={{ color: siteConfig.colors.primary }}
              />

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Reviewer */}
              <div
                className="flex items-center gap-3 pt-3 border-t"
                style={{ borderColor: siteConfig.colors.border }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}