"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";
import { useAccessibility } from "./AccessibilityContext"; // Import the context

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

const FirstMainPageSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`w-full ${
        highContrast ? "bg-black text-yellow-400" : "bg-[#274871] text-gray-50"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <p
            className={`font-semibold tracking-[-0.2rem] ${
              highContrast ? "text-yellow-400" : "text-gray-50"
            } ${headerFontSizeClass}`}
          >
            Witaj na stronie naszej poradni
          </p>
          <h2
            className={`font-semibold tracking-tighter mt-3 ${
              highContrast ? "text-yellow-400" : "text-white"
            } ${headerFontSizeClass}`}
          >
            O Poradni
          </h2>
          <p
            className={`mt-4 ${
              highContrast ? "text-yellow-400" : "text-zinc-200"
            } ${fontSizeClass}`}
          >
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka bliska
            problemom{" "}
            <span
              className={`bg-[#921d7f]/80 p-1 rounded-md ${
                highContrast ? "text-black" : "text-white"
              }`}
            >
              dzieci
            </span>
            ,{" "}
            <span
              className={`bg-[#921d7f]/80 p-1 rounded-md ${
                highContrast ? "text-black" : "text-white"
              }`}
            >
              młodzieży
            </span>{" "}
            oraz{" "}
            <span
              className={`bg-[#921d7f]/80 p-1 rounded-md ${
                highContrast ? "text-black" : "text-white"
              }`}
            >
              osób dorosłych
            </span>
            .
            <br />
            <br />
            Realizujemy{" "}
            <span
              className={`bg-[#921d7f]/80 p-1 rounded-md ${
                highContrast ? "text-black" : "text-white"
              }`}
            >
              darmowe zajęcia
            </span>{" "}
            Wczesnego Wspomagania Rozwoju Dziecka na podstawie opinii
            o&nbsp;potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
            dydaktycznych i&nbsp;terapeutycznych dla dzieci i&nbsp;młodzieży.
            Prowadzimy wsparcie psychologiczne osób dorosłych.
            <br />
            <br />Z pasją i&nbsp;oddaniem realizujemy zadania z&nbsp;zakresu
            pomocy rodzinie, parom planującym wspólną przyszłość lub już ją
            tworzących,&nbsp;a także osobom zmagającym się z&nbsp;uzależnieniami
            behawioralnymi (uzależnienie od&nbsp;gier komputerowych/sieciowych,
            mediów społecznościowych, portali randkowych/sex chatów, gier
            losowych, zakupów). Prowadzimy terapie psychologiczne zarówno
            stacjonarnie jak&nbsp;i on-line. Przeprowadzamy diagnozy
            psychologiczne osób w każdym wieku.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/O_nas">
              <button
                aria-label="poznaj naszą ofertę"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#921d7f] text-white"
                }`}
              >
                Zobacz zdjęcia naszej placówki
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="#kierunki">
              <button
                aria-label="poznaj naszą ofertę"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#225da5] text-white"
                }`}
              >
                Nasi specjaliści
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/place.jpg"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstMainPageSection;
