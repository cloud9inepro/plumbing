"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden clip-diagonal"
      style={{ backgroundColor: siteConfig.colors.dark }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
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
          className="mb-16"
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: siteConfig.colors.primary }}
          >
            Get In Touch
          </span>
          <h2 className="heading text-6xl sm:text-7xl text-white mt-2 leading-none">
            Request a Free Quote
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 border"
            style={{
              backgroundColor: siteConfig.colors.card,
              borderColor: siteConfig.colors.border,
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${siteConfig.colors.primary}20` }}
                >
                  <CheckCircle
                    size={32}
                    style={{ color: siteConfig.colors.primary }}
                  />
                </div>
                <h3 className="heading text-3xl text-white">
                  Request Received!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. Our team will get back to you
                  shortly with your free quote.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: siteConfig.colors.primary }}
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none transition"
                      style={{
                        backgroundColor: siteConfig.colors.dark,
                        border: `1px solid ${siteConfig.colors.border}`,
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = siteConfig.colors.primary)
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = siteConfig.colors.border)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(000) 000-0000"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none transition"
                      style={{
                        backgroundColor: siteConfig.colors.dark,
                        border: `1px solid ${siteConfig.colors.border}`,
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = siteConfig.colors.primary)
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = siteConfig.colors.border)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none transition"
                    style={{
                      backgroundColor: siteConfig.colors.dark,
                      border: `1px solid ${siteConfig.colors.border}`,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.border)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-white text-sm focus:outline-none transition"
                    style={{
                      backgroundColor: siteConfig.colors.dark,
                      border: `1px solid ${siteConfig.colors.border}`,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.border)
                    }
                  >
                    <option value="">Select a service...</option>
                    {siteConfig.services.map((service, i) => (
                      <option key={i} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Describe Your Issue
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your plumbing issue..."
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none transition resize-none"
                    style={{
                      backgroundColor: siteConfig.colors.dark,
                      border: `1px solid ${siteConfig.colors.border}`,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.primary)
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = siteConfig.colors.border)
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg"
                  style={{
                    backgroundColor: siteConfig.colors.primary,
                    boxShadow: `0 0 30px ${siteConfig.colors.primary}30`,
                  }}
                >
                  <Send size={16} />
                  Send Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Call CTA */}
            <div
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: `${siteConfig.colors.primary}10`,
                borderColor: `${siteConfig.colors.primary}30`,
              }}
            >
              <h3 className="heading text-3xl text-white mb-2">
                Prefer to Call?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                For urgent issues call us directly and we will dispatch a
                technician as soon as possible.
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </div>

            {/* Details */}
            <div
              className="rounded-2xl p-6 border space-y-5"
              style={{
                backgroundColor: siteConfig.colors.card,
                borderColor: siteConfig.colors.border,
              }}
            >
              {[
                {
                  icon: <MapPin size={18} style={{ color: siteConfig.colors.primary }} />,
                  label: "Location",
                  value: siteConfig.address,
                  href: null,
                },
                {
                  icon: <Clock size={18} style={{ color: siteConfig.colors.primary }} />,
                  label: "Hours",
                  value: siteConfig.hours,
                  href: null,
                },
                {
                  icon: <Phone size={18} style={{ color: siteConfig.colors.primary }} />,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phoneRaw}`,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${siteConfig.colors.primary}15`,
                      border: `1px solid ${siteConfig.colors.primary}20`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
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
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: `${siteConfig.colors.secondary}10`,
                borderColor: `${siteConfig.colors.secondary}20`,
              }}
            >
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: siteConfig.colors.secondary }}
              >
                No obligation. No hidden fees.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We give you a clear quote before any work starts. No hidden
                charges — ever.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}