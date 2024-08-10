"use client";
import { AlertDemo } from "../../../components/Alert";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
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

const PoradniaPsychologicznoPedagogiczna = () => {
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
      {/* Nagłówek */}
      <div
        className={`border-b py-4 md:py-6 ${
          highContrast
            ? "bg-gray-800 border-gray-600 text-yellow-400"
            : "bg-gradient-to-br from-orange-100 via-orange-300 to-orange-600 border-gray-300 text-white"
        }`}
      >
        <div className="flex justify-center items-center">
          <h2
            className={`font-display md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left text-slate-800 ${headerFontSizeClass}`}
          >
            Centrum uzależnień
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Terapia E-uzależnień
              </h2>

              <p
                className={`text-left ${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass}`}
              >
                Zapraszamy dorosłych, dzieci i młodzież do skorzystania z
                terapii e-uzależnień. Oferujemy indywidualnie dostosowane sesje
                z doświadczonymi specjalistami, wsparcie w zrozumieniu i
                zwalczaniu uzależnień od elektroniki i internetu oraz skuteczne
                narzędzia i strategie terapeutyczne.
              </p>

              <Link
                href={"/Kontakt"}
                className="text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow2 ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Umów wizytę u Terapeuty uzależnień{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Terapia uzależnień
              </h2>

              <p
                className={`text-left ${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass}`}
              >
                Zapraszamy dorosłych, dzieci i młodzież do skorzystania z
                terapii uzależnień od używek. Oferujemy indywidualnie
                dostosowane sesje z doświadczonymi specjalistami, wsparcie w
                zrozumieniu i zwalczaniu uzależnień od alkoholu, narkotyków i
                innych substancji oraz skuteczne narzędzia i strategie
                terapeutyczne.
              </p>

              <Link
                href={"/Kontakt"}
                className="text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow2 ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Umów wizytę u Terapeuty uzależnień{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/uzaleznienie3.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Diagnoza uzależnień
              </h2>

              <p
                className={`text-left ${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass}`}
              >
                Zapraszamy na profesjonalną diagnozę uzależnień. Nasz zespół
                doświadczonych specjalistów korzysta z zaawansowanych metod
                oceny, aby zidentyfikować problem i zalecić odpowiednie
                działania. Diagnoza obejmuje analizę zachowań, wywiady oraz
                badania, dzięki którym możliwe jest zrozumienie głęboko
                zakorzenionych przyczyn uzależnienia i opracowanie skutecznej
                strategii leczenia. Oferujemy diagnozę uzależnień od używek oraz
                e-uzależnień, dostosowaną do potrzeb dorosłych, dzieci i
                młodzieży.
              </p>

              <Link
                href={"/Kontakt"}
                className="text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow2 ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Umów się na diagnozę <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlertDemo />
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
