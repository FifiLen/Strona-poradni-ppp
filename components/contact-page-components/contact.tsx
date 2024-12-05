"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Snowflake } from "lucide-react";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import { FormularzComponent } from "../forms/formularz";

const getFontSizeClass = (level: number) => {
  const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
  return sizes[level] || "text-base";
};

const getHeaderFontSizeClass = (level: number) => {
  const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
  return sizes[level] || "text-3xl";
};

export default function WinterKontakt() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      <section className="py-6 md:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <Snowflake
              key={i}
              className="text-blue-200 absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Contact Info + Form */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div
                className={`${
                  highContrast
                    ? "bg-gray-800 bg-opacity-50 text-yellow-400"
                    : "bg-transparent"
                } rounded-lg p-6`}
              >
                <div className="mb-6">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className="mb-4"
                  />
                </div>
                <ul
                  className={`space-y-4 font-semibold tracking-tight ${fontSizeClass}`}
                >
                  <li className="flex justify-start items-center gap-2">
                    <Phone className="mr-2 text-blue-500" />
                    +48 789 790 860
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <Phone className="mr-2 text-blue-500" />
                    +48 690 515 224
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <Phone className="mr-2 text-blue-500" />
                    +48 502 162 365
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <Mail className="mr-2 text-blue-500" />
                    poradniamagnolia@gmail.com
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <MapPin className="mr-2 text-blue-500" />
                    Magnolii 25, 44-207 Rybnik
                  </li>
                </ul>

                <p
                  className={`text-md font-semibold tracking-tight mt-6 ${fontSizeClass}`}
                >
                  Godziny otwarcia:
                </p>
                <p
                  className={`${fontSizeClass} mb-4 flex font-semibold text-sm tracking-tight items-center`}
                >
                  <Clock className="mr-2 text-blue-500" />
                  Poniedziałek - Piątek: 7:00 - 21:00
                </p>
              </div>

              {/* Form */}
              <FormularzComponent />
            </div>

            {/* Column 2: Map */}
            <div className="h-full">
              <div
                className={`${
                  highContrast ? "bg-gray-800 bg-opacity-50" : "bg-transparent"
                } rounded-lg p-2 h-full`}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
