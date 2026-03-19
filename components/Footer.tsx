"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const navLinks = ["Services", "About", "Reviews", "FAQ", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: siteConfig.colors.darker }}
      className="border-t"
    >
      <div
        className="border-t"
        style={{ borderColor: siteConfig.colors.border }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {/* Brand */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div>
                <h3
                  className="heading text-3xl text-white leading-none"
                >
                  {siteConfig.name.split(" ").slice(0, -1).join(" ")}
                </h3>
                <p
                  className="text-xs font-bold uppercase tracking-widest mt-0.5"
                  style={{ color: siteConfig.colors.primary }}
                >
                  {siteConfig.name.split(" ").slice(-1)[0]}
                </p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.description}
              </p>

              {/* Social */}
              <div className="flex items-center gap-3 mt-2">
                {[
                  { icon: <Facebook size={15} />, href: siteConfig.social.facebook },
                  { icon: <Twitter size={15} />, href: siteConfig.social.twitter },
                  { icon: <Instagram size={15} />, href: siteConfig.social.instagram },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    style={{
                      backgroundColor: siteConfig.colors.card,
                      border: `1px solid ${siteConfig.colors.border}`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        siteConfig.colors.primary;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        siteConfig.colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        siteConfig.colors.card;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        siteConfig.colors.border;
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: siteConfig.colors.primary }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: siteConfig.colors.primary }}
              >
                Services
              </h4>
              <ul className="space-y-2">
                {siteConfig.services.map((service, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo("services")}
                      className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: siteConfig.colors.primary }}
              >
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="shrink-0 mt-0.5"
                    style={{ color: siteConfig.colors.primary }}
                  />
                  <p className="text-gray-400 text-sm">
                    {siteConfig.address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={15}
                    className="shrink-0"
                    style={{ color: siteConfig.colors.primary }}
                  />
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={15}
                    className="shrink-0"
                    style={{ color: siteConfig.colors.primary }}
                  />
                  <p className="text-gray-400 text-sm">{siteConfig.hours}</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-2 inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-4 sm:mx-6 lg:mx-8 mb-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            backgroundColor: `${siteConfig.colors.primary}15`,
            border: `1px solid ${siteConfig.colors.primary}30`,
          }}
        >
          <div>
            <p
              className="heading text-2xl"
              style={{ color: siteConfig.colors.primary }}
            >
              Need help today?
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              We respond fast with honest upfront pricing.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:opacity-90 shrink-0"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="border-t"
          style={{ borderColor: siteConfig.colors.border }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-gray-600 text-xs">
              {siteConfig.serviceAreas.slice(0, 4).join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}