"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

function Counter({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 2000;
    const isDecimal = target % 1 !== 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 clip-diagonal-both relative"
      style={{ backgroundColor: siteConfig.colors.card }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 py-6 relative"
            >
              {/* Divider */}
              {i !== 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px opacity-20 hidden lg:block"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              )}

              <span
                className="heading text-5xl sm:text-6xl leading-none"
                style={{ color: siteConfig.colors.primary }}
              >
                <Counter
  target={stat.value}
  suffix={stat.suffix}
  start={startCount}
/>
              </span>
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}