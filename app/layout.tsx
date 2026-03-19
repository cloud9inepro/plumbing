import type { Metadata } from "next";
import { DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}