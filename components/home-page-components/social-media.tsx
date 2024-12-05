"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Youtube, Instagram, Snowflake } from "lucide-react";
import { RiTiktokLine } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/lib/providers/accessibility-context";

const getFontSize = (level: number) => {
  const sizes = [
    "text-xs sm:text-sm",
    "text-sm sm:text-base",
    "text-base sm:text-lg",
    "text-lg sm:text-xl",
    "text-xl sm:text-2xl",
  ];
  return sizes[Math.max(0, Math.min(level, 4))];
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/poradnia.magnolia",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@PPP-MAGNOLIA",
    color: "from-red-500 to-red-600",
  },
  {
    name: "TikTok",
    icon: RiTiktokLine,
    href: "https://www.tiktok.com/@poradnia_magnolia_rybnik",
    color: "from-black to-gray-800",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/poradnia_magnolia_rybnik",
    color: "from-purple-500 to-pink-500",
  },
];

export default function WinterSocial() {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSize(fontSizeLevel);

  return (
    <section
      className={`max-w-7xl mx-auto py-8 sm:py-10 px-4 sm:px-6 lg:px-8 ${
        highContrast
          ? "bg-gray-900 text-gray-100"
          : "bg-transparent text-gray-800"
      }`}
    >
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-tight text-center leading-tight mb-8 sm:mb-12"
      >
        Bądź na bieżąco z naszymi mediami.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {socialLinks.map((social) => (
          <Card
            key={social.name}
            className="rounded-2xl sm:rounded-[32px] overflow-hidden border-none shadow-lg relative"
          >
            <CardContent
              className={`p-0 h-full bg-gradient-to-br ${social.color}`}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="w-full h-full py-6 sm:py-8 px-2 sm:px-4 text-white hover:text-white hover:bg-transparent"
                >
                  <div className="flex flex-col items-center space-y-2 sm:space-y-4">
                    <social.icon className="w-8 h-8 sm:w-12 sm:h-12" />
                    <span className={`${fontSizeClass} font-medium`}>
                      {social.name}
                    </span>
                  </div>
                </Button>
              </Link>
            </CardContent>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <Snowflake className="absolute top-2 right-2 w-4 h-4 text-white opacity-50 animate-twinkle" />
              <Snowflake className="absolute bottom-2 left-2 w-3 h-3 text-white opacity-30 animate-twinkle delay-1000" />
              <Snowflake className="absolute top-1/2 left-1/4 w-2 h-2 text-white opacity-40 animate-twinkle delay-500" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
