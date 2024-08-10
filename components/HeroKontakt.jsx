"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Formularz from "../components/Formularz";
import { Bebas_Neue } from "next/font/google";
import { useAccessibility } from "./AccessibilityContext"; // Import the context

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

// Utility function to get Tailwind font size class for paragraphs
const getFontSizeClass = (level) => {
  switch (level) {
    case 0:
      return "text-sm"; // Smaller than default
    case 1:
      return "text-base"; // Default size
    case 2:
      return "text-lg"; // Slightly larger
    case 3:
      return "text-xl"; // Even larger
    case 4:
      return "text-2xl"; // Largest
    default:
      return "text-base";
  }
};

// Utility function to get Tailwind font size class for headers
const getHeaderFontSizeClass = (level) => {
  switch (level) {
    case 0:
      return "text-2xl"; // Smaller than default
    case 1:
      return "text-3xl"; // Default size
    case 2:
      return "text-4xl"; // Slightly larger
    case 3:
      return "text-5xl"; // Even larger
    case 4:
      return "text-6xl"; // Largest
    default:
      return "text-3xl";
  }
};

const HeroKontakt = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`w-full ${
        highContrast ? "bg-black text-yellow-400" : "bg-gray-200"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2
            className={`font-semibold tracking-tighter mt-3 ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${headerFontSizeClass}`}
          >
            Kontakt
          </h2>
          <div className="mb-5 mt-4">
            <img src="/assets/LogoMainPage.svg" alt="Logo Magnolia" />
          </div>
          <ul
            className={`space-y-1 font-medium ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${fontSizeClass}`}
          >
            <li className="flex justify-start items-center gap-2">
              <FaPhoneAlt />
              +48 789 790 860
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaPhoneAlt />
              +48 690 515 224
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaPhoneAlt />
              +48 502 162 365
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaEnvelope />
              poradniamagnolia@gmail.com
            </li>
            <li className="flex justify-start items-center gap-2">
              <FaMapMarkerAlt />
              Magnolii 25, 44-207 Rybnik
            </li>
          </ul>
          <p
            className={`font-medium mt-3 ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${fontSizeClass}`}
          >
            Godziny otwarcia:
          </p>
          <p
            className={`mb-4 ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${fontSizeClass}`}
          >
            Poniedziałek - Piątek: 7:00 - 21:00
          </p>
          <hr className="mb-4 border-white" />
          <Formularz />
        </div>

        {/* Map Column */}
        <div className="relative w-full h-64 md:h-auto">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroKontakt;
