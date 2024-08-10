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

const ThirdMainPageSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`w-full ${
        highContrast ? "bg-black text-yellow-400" : "bg-[#274871] text-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2
            className={`font-semibold tracking-tighter mt-3 ${
              highContrast ? "text-yellow-400" : "text-white"
            } ${headerFontSizeClass}`}
          >
            Dla dzieci i młodzieży
          </h2>
          <p
            className={`mt-4 ${
              highContrast ? "text-yellow-400" : "text-zinc-200"
            } ${fontSizeClass}`}
          >
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to&nbsp;placówka
            bliska problemom dzieci, młodzieży oraz osób dorosłych. Realizujemy
            darmowe zajęcia Wczesnego Wspomagania Rozwoju Dziecka na podstawie
            opinii o&nbsp; potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
            dydaktycznych, terapeutycznych oraz warsztatów wspierających
            wszechstronny rozwój dzieci i&nbsp;młodzieży. <br />
            <br /> Wspieramy psychologicznie młodzież w&nbsp;problemach wieku
            dorastania. Co roku organizujemy zajęcia przygotowujące
            do&nbsp;egzaminów ósmoklasisty. Dla najmłodszych oferujemy spotkania
            w&nbsp;gronie dzieci do&nbsp;3 roku życia nie uczęszczających
            jeszcze do&nbsp;przedszkola na&nbsp;zajęcia ogólnorozwojowe
            z&nbsp;elementami bajkoterapii.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/Dzieci">
              <button
                aria-label="poznaj naszą ofertę"
                className={`text-sm font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#921d7f] text-white"
                }`}
              >
                Wsparcie dla dzieci i&nbsp;młodzieży
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="/WWRD">
              <button
                aria-label="poznaj naszą ofertę"
                className={`text-sm font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#225da5] text-white"
                }`}
              >
                Jak uzyskać darmowe zajęcia WWR
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/kids.jpg"
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

export default ThirdMainPageSection;
