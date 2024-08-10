"use client";
import React from "react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useAccessibility } from "./AccessibilityContext"; // Import the context

// Utility function to get Tailwind font size class
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

const MainSocial = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size class based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div className="py-10">
      <h4
        className={`text-center font-semibold ${
          highContrast ? "text-yellow-400" : "text-zinc-900"
        } ${fontSizeClass} mb-2`}
      >
        Bądź na bieżąco z naszymi mediami społecznościowymi!
      </h4>
      <p
        className={`text-center font-normal ${
          highContrast ? "text-yellow-400" : "text-zinc-700"
        } ${fontSizeClass}`}
      >
        Obserwuj nas, aby otrzymywać najnowsze informacje, aktualności i więcej!
      </p>
      <div className="flex justify-center space-x-6 py-4">
        <a
          href="https://www.facebook.com/poradnia.magnolia"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-blue-600 transition duration-300 ${
            highContrast ? "text-yellow-400" : ""
          }`}
          aria-label="Facebook"
        >
          <FaFacebook size={32} />
        </a>

        <a
          href="https://www.youtube.com/@PPP-MAGNOLIA"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-red-600 transition duration-300 ${
            highContrast ? "text-yellow-400" : ""
          }`}
          aria-label="YouTube"
        >
          <FaYoutube size={32} />
        </a>

        <div
          className={`border-l-2 h-8 ${
            highContrast ? "border-yellow-400" : "border-gray-300"
          }`}
        ></div>

        <a
          href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-black transition duration-300 ${
            highContrast ? "text-yellow-400" : ""
          }`}
          aria-label="TikTok"
        >
          <FaTiktok size={32} />
        </a>

        <a
          href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-pink-600 transition duration-300 ${
            highContrast ? "text-yellow-400" : ""
          }`}
          aria-label="Instagram"
        >
          <AiOutlineInstagram size={32} />
        </a>
      </div>
    </div>
  );
};

export default MainSocial;
