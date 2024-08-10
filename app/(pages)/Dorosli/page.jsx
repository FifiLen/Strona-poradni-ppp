"use client"; // Enable client-side rendering
import { useAccessibility } from "../../../components/AccessibilityContext"; // Import the context
import { AlertDemo } from "../../../components/Alert";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight, FaCheck } from "react-icons/fa";

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
            : "bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 border-gray-300 text-white"
        }`}
      >
        <div className="flex justify-center items-center">
          <h2
            className={`font-display pb-2 font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left text-slate-800 ${headerFontSizeClass}`}
          >
            Wsparcie i rozwój dla osób dorosłych
          </h2>
        </div>
      </div>
      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <video
                  src="/assets/terapiadlapar.mp4"
                  loop
                  muted
                  autoPlay
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Terapia dla Par
              </h2>

              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left`}
              >
                Terapia par to proces, w którym dwoje ludzi pracuje nad poprawą
                jakości swojego związku poprzez rozwój wzorców komunikacji i
                interakcji, naukę rozwiązywania konfliktów oraz komunikowania
                własnych uczuć i potrzeb oraz zrozumienie partnera.
                <br />
                <br />
                Terapia skierowana jest zarówno do osób znajdujących się w
                związkach formalnych i nieformalnych, do osób znajdujących się w
                związkach partnerskich lub jednopłciowych.
                <br />
                <br />
                Podczas terapii osoby uczą się skutecznej komunikacji, ustalania
                przyczyn konfliktów oraz sposobów na ich rozwiązywanie z
                korzyścią dla obu stron. Ponadto, jednym z jej celów jest ogólna
                poprawa relacji oraz zwiększenie poczucia bliskości
                emocjonalnej.
              </p>

              <Link
                href={"/terapia_par"}
                className=" text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Kiedy rozważać terapię dla par? <FaRegArrowAltCircleRight />
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
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/psycholog1.jpg"
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
                Wsparcie psychologiczne
              </h2>

              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-4`}
              >
                Wsparcie psychologiczne dla dorosłych ma na celu pomóc osobom w
                radzeniu sobie z różnorodnymi problemami. Może obejmować:
              </p>

              <ul
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left list-none pl-0`}
              >
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z trudnościami życiowymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie ze stresem
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z problemami emocjonalnymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z zaburzeniami psychicznymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Zidentyfikowanie i zrozumienie źródeł problemów
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Opracowanie skutecznych strategii radzenia sobie
                </li>

                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Osiągnięcie większej równowagi emocjonalnej
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Poprawę jakości życia
                </li>
              </ul>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Umów wizytę u Psychologa{" "}
                  <FaRegArrowAltCircleRight className="ml-2" />
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
                  src="/assets/psycholog2.jpg"
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
                Psychoterapia
              </h2>

              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-4`}
              >
                Psychoterapia dla dorosłych to proces terapeutyczny, mający na
                celu wsparcie osób w radzeniu sobie z różnorodnymi trudnościami.
                Może obejmować:
              </p>

              <ul
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left list-none pl-0`}
              >
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z trudnościami emocjonalnymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z trudnościami psychologicznymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z trudnościami behawioralnymi
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Rozwijanie nowych strategii radzenia sobie
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Wprowadzanie pozytywnych zmian w życiu
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Praca nad lękiem, depresją i stresem
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Rozwiązywanie problemów w relacjach
                </li>
                <li className="flex items-center mb-2">
                  <FaCheck className="text-green-500 mr-2" />
                  Radzenie sobie z kryzysami życiowymi
                </li>
              </ul>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border rounded-xl custom-shadow ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  Umów wizytę u Psychoterapeuty{" "}
                  <FaRegArrowAltCircleRight className="ml-2" />
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
