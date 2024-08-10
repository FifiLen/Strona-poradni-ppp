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

const SecondMainPageSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`w-full ${
        highContrast ? "bg-black text-yellow-400" : "bg-gray-200"
      } custom-clip`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/pets.jpg"
            fill
            alt="Pets in the therapy session"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col">
          <h2
            className={`font-semibold tracking-tighter mt-3 ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${headerFontSizeClass}`}
          >
            Nasze pupile
          </h2>
          <p
            className={`mt-4 ${
              highContrast ? "text-yellow-400" : "text-zinc-600"
            } ${fontSizeClass}`}
          >
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to również dom dla
            szeregu „braci mniejszych”. Na co dzień pracujemy w towarzystwie
            czworonogów: kochanego psiaka o imieniu Lili rasy Golden Retriver
            oraz króliczków miniaturek Lusi i Trusi.
            <br />
            <br />
            Utrzymujemy bliski kontakt ze staniną koni, umożliwiającą nam
            prowadzenie hipoterapii. Stawiamy na bliski kontakt z naturą, gdyż
            wierzymy, że życie w harmonii z przyrodą i otaczającym nas światem
            korzystnie wpływa na samopoczucie ludzi w każdym wieku. Podczas
            pobytu w naszej placówce zapewniamy Państwu możliwość skorzystania
            ze strefy relaksu z widokiem na akwarium przy dźwiękach odprężającej
            muzyki.
            <br />
            <br />
            Nasi najmłodsi podopieczni uczęszczają na zajęcia w towarzystwie
            króliczków oraz korzystają z dobroczynnego wpływu dogoterapii oraz
            hipoterapii.
          </p>
          <div className="block md:flex items-center gap-2">
            <a
              href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                aria-label="Zajrzyj na naszego tiktoka"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#921d7f] text-white"
                }`}
              >
                Zajrzyj na naszego tiktoka
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </a>
            <Link href="/hipoterapia">
              <button
                aria-label="Hipoterapia"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#225da5] text-white"
                }`}
              >
                Hipoterapia
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-clip {
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .custom-clip {
            clip-path: ellipse(99% 100% at 50% 0%);
          }
        }
      `}</style>
    </section>
  );
};

export default SecondMainPageSection;
