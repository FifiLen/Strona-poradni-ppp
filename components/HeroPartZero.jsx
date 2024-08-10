"use client";
import React from "react";
import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { PiVirtualReality } from "react-icons/pi";
import dynamic from "next/dynamic";
import { useAccessibility } from "./AccessibilityContext"; // Import the context

// Dynamic import for FaChild to optimize performance
const FaChild = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaChild)
);

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

const HeroPartZero = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size class based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div className={`hidden md:block ${highContrast ? "bg-black" : ""}`}>
      <video
        className="h-[50vh] md:h-[75vh] w-full object-cover"
        preload="auto"
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
        aria-label="Background video showcasing the clinic's environment"
      ></video>

      {/* Container for links under the video */}
      <div
        className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4`}
        style={{ maxWidth: "95rem", margin: "0 auto" }}
      >
        {/* Link Block 1: Children Support */}
        <Link
          href={"/Dzieci"}
          className="hover:scale-105 transition-all duration-500"
        >
          <div
            className={`bg-gradient-to-bl flex justify-start items-end p-4 ${
              highContrast
                ? "from-gray-900 via-black to-gray-900"
                : "from-[#921d7f] via-[#5a004b] to-[#921d7f]"
            } w-full h-[8rem] relative`}
          >
            <div className="absolute top-0 left-0 p-4">
              <FaChild
                className={`text-2xl ${
                  highContrast ? "text-yellow-400" : "text-white"
                }`}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2
                  className={`font-semibold tracking-tighter ${fontSizeClass} ${
                    highContrast ? "text-yellow-400" : "text-white"
                  }`}
                >
                  Wsparcie dla dzieci
                </h2>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-300"
                  } ${fontSizeClass}`}
                >
                  Zajęcia WWR, TUS, Logopeda i więcej..
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Link Block 2: Adult Support */}
        <Link
          href={"/Dorosli"}
          className="hover:scale-105 transition-all duration-500"
        >
          <div
            className={`bg-gradient-to-bl flex justify-start items-end p-4 ${
              highContrast
                ? "from-gray-900 via-black to-gray-900"
                : "from-[#274871] via-[#225da5] to-[#274871]"
            } w-full h-[8rem] relative`}
          >
            <div className="absolute top-0 left-0 p-4">
              <FaHandsHelping
                className={`text-3xl ${
                  highContrast ? "text-yellow-400" : "text-white"
                }`}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2
                  className={`font-semibold tracking-tighter ${fontSizeClass} ${
                    highContrast ? "text-yellow-400" : "text-white"
                  }`}
                >
                  Wsparcie dla dorosłych
                </h2>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-300"
                  } ${fontSizeClass}`}
                >
                  Psycholog, psychoterapia, terapie par
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Link Block 3: Addiction Center */}
        <Link
          href={"/Centrum_uzaleznien"}
          className="hover:scale-105 transition-all duration-500"
        >
          <div
            className={`bg-gradient-to-bl flex justify-start items-end p-4 ${
              highContrast
                ? "from-gray-900 via-black to-gray-900"
                : "from-[#921d7f] via-[#5a004b] to-[#921d7f]"
            } w-full h-[8rem] relative`}
          >
            <div className="absolute top-0 left-0 p-4">
              <FaPersonCircleExclamation
                className={`text-3xl ${
                  highContrast ? "text-yellow-400" : "text-white"
                }`}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2
                  className={`font-semibold tracking-tighter ${fontSizeClass} ${
                    highContrast ? "text-yellow-400" : "text-white"
                  }`}
                >
                  Centrum uzależnień
                </h2>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-300"
                  } ${fontSizeClass}`}
                >
                  E-uzależnienia, uzależnienia, diagnoza
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Link Block 4: VR Therapy */}
        <Link
          href={"/terapia_vr"}
          className="hover:scale-105 transition-all duration-500"
        >
          <div
            className={`bg-gradient-to-bl flex justify-start items-end p-4 ${
              highContrast
                ? "from-gray-900 via-black to-gray-900"
                : "from-[#274871] via-[#225da5] to-[#274871]"
            } w-full h-[8rem] relative`}
          >
            <div className="absolute top-0 left-0 p-4">
              <PiVirtualReality
                className={`text-3xl ${
                  highContrast ? "text-yellow-400" : "text-white"
                }`}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2
                  className={`font-semibold tracking-tighter ${fontSizeClass} ${
                    highContrast ? "text-yellow-400" : "text-white"
                  }`}
                >
                  Terapia VR
                </h2>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-300"
                  } ${fontSizeClass}`}
                >
                  Terapia VR, Zajęcia dla dzieci i więcej..
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroPartZero;
