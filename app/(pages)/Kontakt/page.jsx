"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Formularz from "../../../components/Formularz";
import { useAccessibility } from "../../../components/AccessibilityContext"; // Import the context

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

const Kontakt = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-gray-100/20"
      }`}
    >
      {/* Header */}
      <div
        className={`border-b py-4 md:py-6 ${
          highContrast
            ? "bg-gray-800 border-gray-600 text-yellow-400"
            : "bg-gray-100 border-gray-300 text-slate-800"
        }`}
      >
        <div className="flex justify-center items-center">
          <h2
            className={`font-display font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left ${headerFontSizeClass}`}
          >
            Kontakt
          </h2>
        </div>
      </div>

      <section className="py-6 md:py-24">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Informational Text */}
            <div className="mx-5 flex-col justify-center items-center">
              <img src="/assets/LogoMainPage.svg" alt="" className="mb-5" />
              <ul className={`space-y-1 font-medium ${fontSizeClass}`}>
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

              <p className={`text-md font-medium mt-3 ${fontSizeClass}`}>
                Godziny otwarcia:
              </p>
              <p className={`${fontSizeClass} mb-4`}>
                Poniedziałek - Piątek: 7:00 - 21:00
              </p>
              <hr className="mb-4" />
              <Formularz />
            </div>

            {/* Google Map */}
            <iframe
              width="600"
              height="740"
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
    </div>
  );
};

export default Kontakt;
