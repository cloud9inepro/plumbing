"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const links = ["Services", "About", "Reviews", "FAQ", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Emergency Banner */}
      {siteConfig.showEmergencyBanner && (
        <div
          className="fixed top-0 left-0 right-0 z-50 text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-2"
          style={{ backgroundColor: siteConfig.colors.primary }}
        >
          <AlertTriangle size={13} className="text-white shrink-0" />
          <span className="text-white/90">{siteConfig.emergencyText}</span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-bold underline underline-offset-2"
          >
            {siteConfig.phone}
          </a>
        </div>
      )}

      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-0 right-0 z-40 transition-all duration-300"
        style={{
          top: siteConfig.showEmergencyBanner ? "36px" : "0px",
          backgroundColor: scrolled
            ? `${siteConfig.colors.darker}ee`
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${siteConfig.colors.border}`
            : "none",
        }}
      >
        {/* Scroll Progress */}
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-100"
          style={{
            width: `${progress}%`,
            backgroundColor: siteConfig.colors.primary,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-col">
            <span
              className="heading text-white text-2xl leading-none"
            >
              {siteConfig.name.split(" ").slice(0, -1).join(" ")}
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: siteConfig.colors.primary }}
            >
              {siteConfig.name.split(" ").slice(-1)[0]}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                onClick={() => scrollTo(link)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden md:flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <Phone size={14} />
            {siteConfig.phone}
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-4 pb-4"
              style={{
                backgroundColor: siteConfig.colors.darker,
                borderTop: `1px solid ${siteConfig.colors.border}`,
              }}
            >
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block w-full text-left py-3 text-gray-300 font-medium hover:text-white transition-colors"
                  style={{
                    borderBottom: `1px solid ${siteConfig.colors.border}`,
                  }}
                >
                  {link}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-4 flex items-center justify-center gap-2 text-white font-bold py-3 rounded-full"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}