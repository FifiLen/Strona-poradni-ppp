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
        highContrast ? "bg-black text-yellow-400" : "bg-gray-200 text-zinc-800"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/adult.jpg"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2
            className={`font-semibold tracking-tighter mt-3 ${
              highContrast ? "text-yellow-400" : "text-zinc-800"
            } ${headerFontSizeClass}`}
          >
            Dla dorosłych
          </h2>
          <p
            className={`${
              highContrast ? "text-yellow-400" : "text-zinc-600"
            } ${fontSizeClass}`}
          >
            Gdy życie stawia wyzwania, którym trudno sprostać, zapraszamy
            Państwa do Poradni Psychologiczno-Pedagogicznej MAGNOLIA, która
            wspiera osoby dorosłe w rozwiązywaniu trudnych sytuacji rodzinnych
            i&nbsp;osobistych. Prowadzimy terapię par mierzących się
            z&nbsp;trudnościami w&nbsp;związku, wspieramy rodziców w&nbsp;ich
            dylematach wychowawczych, oferujemy konsultacje psychologiczne oraz
            psychoterapię osób zmagających się z depresją. <br />
            <br />
            Właśnie w&nbsp;MAGNOLI mogą Państwo sprawdzić swoje predyspozycje
            do&nbsp;pełnienia roli rodziców wypełniając test kompetencji
            rodzicielskich, sprawdzić swoje preferencje zawodowe wykonując test
            osobowości, przeprowadzić diagnozę ADHD będąc osobą dorosłą.
            Wspieramy Państwa w&nbsp;zmaganiach z&nbsp;uzależnieniami
            behawioralnymi związanymi z&nbsp;nadmiernym korzystaniem
            z&nbsp;internetu i&nbsp;mediów społecznościowych, korzystaniem
            z&nbsp;solarium, kompulsywnymi zakupami, grami hazardowymi, czy
            objadaniem się prowadzącym do otyłości. <br />
            <br /> Zawsze, gdy potrzebują Państwo wparcia psychologicznego
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA służy pomocą.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/Dorosli">
              <button
                aria-label="poznaj naszą ofertę"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#921d7f] text-white"
                }`}
              >
                Wsparcie dla osób dorosłych
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="/terapia_par">
              <button
                aria-label="poznaj naszą ofertę"
                className={`font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8 ${
                  highContrast
                    ? "bg-yellow-500 text-black"
                    : "bg-[#225da5] text-white"
                }`}
              >
                Terapia dla par
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondMainPageSection;
