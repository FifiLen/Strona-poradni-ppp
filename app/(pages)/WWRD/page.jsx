"use client";
import React from "react";
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
      return "text-lg"; // Smaller than default
    case 1:
      return "text-xl"; // Default size
    case 2:
      return "text-2xl"; // Slightly larger
    case 3:
      return "text-3xl"; // Even larger
    case 4:
      return "text-4xl"; // Largest
    default:
      return "text-xl";
  }
};

const Page = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`max-w-6xl md:mx-auto my-20 mx-10 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`font-bold mb-10 ${
          highContrast ? "text-yellow-400" : "text-[#921d7f]"
        } ${headerFontSizeClass}`}
      >
        Bezpłatna Terapia Wczesnego Wspomagania Rozwoju Dziecka (WWRD) w Poradni
        Psychologiczno-Pedagogicznej MAGNOLIA:
      </h1>
      <p className={`${fontSizeClass} leading-relaxed mb-6`}>
        W celu skorzystania z bezpłatnej Terapii Wczesnego Wspomagania Rozwoju
        Dziecka (WWRD) w Poradni Psychologiczno-Pedagogicznej MAGNOLIA, należy
        postępować zgodnie z poniższymi krokami:
      </p>

      <h2 className={`font-semibold mt-8 mb-4 ${headerFontSizeClass}`}>
        1. Wizyta u lekarza:
      </h2>
      <p className={`${fontSizeClass} leading-relaxed mb-4`}>
        Pierwszym krokiem jest wizyta u lekarza pediatry lub lekarza
        specjalisty.{" "}
        <span
          className={`font-semibold ${
            highContrast ? "text-yellow-400" : "text-[#921d7f]"
          }`}
        >
          Lekarz musi wydać zaświadczenie lekarskie
        </span>
        , które potwierdza opóźnienie, zaburzenie lub niepełnosprawność u
        dziecka.
      </p>

      <h3
        className={`font-semibold ${headerFontSizeClass} ${
          highContrast ? "text-yellow-400" : "text-[#921d7f]"
        } mt-6 mb-4`}
      >
        Ważne jest, aby lekarz dokładnie określił rodzaj zaburzenia lub
        niepełnosprawności oraz stwierdził potrzebę wczesnego wspomagania
        rozwoju z uwagi na konkretne przyczyny, takie jak:
      </h3>
      <ul
        className={`list-disc ml-6 my-3 mb-6 space-y-2 ${
          highContrast ? "text-yellow-400" : ""
        } ${fontSizeClass}`}
      >
        <li>
          opóźniony lub zaburzony rozwój psychoruchowy (częsty i skuteczny
          argument!!)
        </li>
        <li>niepełnosprawność ruchowa w tym z afazją,</li>
        <li>niepełnosprawność intelektualną,</li>
        <li>
          niepełnosprawność sprzęgającą (kilka niepełnosprawności równocześnie)
        </li>
        <li>autyzm i Zespół Aspergera,</li>
        <li>zaburzenia wzroku, słuchu, mowy.</li>
      </ul>

      <h2 className={`font-semibold mt-8 mb-4 ${headerFontSizeClass}`}>
        2. Wizyta w poradni publicznej
      </h2>
      <p className={`${fontSizeClass} leading-relaxed mb-4`}>
        Następnie udaj się do publicznej Poradni Psychologiczno-Pedagogicznej,
        która obsługuje Twój rejon,{" "}
        <span
          className={`${highContrast ? "text-yellow-400" : "text-[#921d7f]"}`}
        >
          (rejonizacja – sprawdź pod opieką, której poradni Publicznej znajduje
          się przedszkole Twojego dziecka)
        </span>
      </p>

      <h2
        className={`font-semibold mt-8 mb-4 ${headerFontSizeClass} ${
          highContrast ? "text-yellow-400" : "text-[#921d7f]"
        }`}
      >
        3. Zgłoś się z dzieckiem na diagnozę i wypełnij wniosek o wydanie opinii
        o potrzebie wczesnego wspomagania rozwoju.
      </h2>
      <p className={`${fontSizeClass} leading-relaxed mb-4`}>
        Do wniosku dołącz dokumenty, takie jak zaświadczenie lekarskie,
        wcześniejsze opinie psychologiczne lub pedagogiczne oraz dokumenty
        medyczne. Poradnia ma obowiązek wydać opinię w ciągu 30 dni od złożenia
        wniosku.
      </p>

      <h2 className={`font-semibold mt-8 mb-4 ${headerFontSizeClass}`}>
        4. Odbierz opinię:
      </h2>
      <p className={`${fontSizeClass} leading-relaxed mb-4`}>
        Po otrzymaniu opinii o potrzebie wczesnego wspomagania rozwoju z
        publicznej Poradni Psychologiczno-Pedagogicznej, przyjdź z nią do
        poradni Psychologiczno-Pedagogicznej MAGNOLIA.
      </p>

      <h4
        className={`font-semibold mt-8 mb-4 ${headerFontSizeClass} ${
          highContrast ? "text-yellow-400" : "text-[#921d7f]"
        }`}
      >
        Poradnia Psychologiczno-Pedagogiczna MAGNOLIA:
      </h4>
      <ul className={`${fontSizeClass} mb-6`}>
        <li className="my-2 font-semibold">Kontakt Telefoniczny:</li>
        <li className="mb-2">+48 690 515 224</li>
        <li className="mb-2">+48 503 192 950</li>
        <li className="my-2 font-semibold">e-mail:</li>
        <li className="mb-2">poradniamagnolia@gmail.com</li>
        <li className="my-2 font-semibold">Godziny otwarcia:</li>
        <li className="mb-2">Poniedziałek - Piątek 7:00 - 21:00</li>
      </ul>

      <div
        className={`p-4 border-2 rounded-md mt-4 w-full ${
          highContrast
            ? "bg-gray-800 text-yellow-400"
            : "bg-gray-100 text-black"
        }`}
      >
        <a href="/assets/WWRD.pdf" target="_blank" className="font-semibold">
          Pobierz pdf z instrukcją darmowych zajęć WWRD →
        </a>
      </div>
    </div>
  );
};

export default Page;
