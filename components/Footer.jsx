"use client";
import React from "react";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import Image from "next/image";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import { useAccessibility } from "../components/AccessibilityContext"; // Import the context

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

const Footer = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <>
      <footer
        className={`py-16 ${
          highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
        } border-t`}
      >
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
            <div className="footer-section text-center">
              <Image
                src="/assets/LogoMainPage.svg"
                width={200}
                height={200}
                loading="lazy"
                alt="Logo poradni"
              />
            </div>
            <div className="footer-section">
              <h2 className={`font-semibold mb-4 ${headerFontSizeClass}`}>
                Menu
              </h2>
              <ul className="list-none p-0">
                {[
                  "/",
                  "/Dzieci",
                  "/Dorosli",
                  "/Centrum_uzaleznien",
                  "/diagnoza_si",
                  "/terapia_vr",
                  "/hipoterapia",
                  "/Kadra",
                  "/Cennik",
                  "/Kontakt",
                ].map((href, idx) => (
                  <li key={idx} className="mb-2">
                    <Link href={href}>
                      <span
                        className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                      >
                        <FaAngleRight />
                        <span>
                          {
                            [
                              "Strona główna",
                              "Dzieci",
                              "Dorośli",
                              "Centrum uzależnień",
                              "SI",
                              "Terapia VR",
                              "Hipoterapia",
                              "Nasi specjaliści",
                              "Cennik",
                              "Kontakt",
                            ][idx]
                          }
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className={`font-semibold mb-4 ${headerFontSizeClass}`}>
                Sprawdź
              </h4>
              <ul className="list-none p-0">
                {[
                  "/Join",
                  "/O_nas",
                  "/Wynajem",
                  "/Grafiki",
                  "/assets/oferta-PPP-Magnolia.pdf",
                  "/assets/dokumenty.pdf",
                  "/standardy-ochrony-maloletnich-w-placowkach-oswiatowych",
                  "/wazne-dokumenty",
                ].map((href, idx) => (
                  <li key={idx} className="mb-2">
                    <Link href={href}>
                      <span
                        className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                      >
                        <FaAngleRight />
                        <span>
                          {
                            [
                              "Dołącz do Magnolii",
                              "O nas",
                              "Wynajem",
                              "Grafiki na stronie",
                              "Oferta poradni",
                              "Dokumenty",
                              "Standardy ochrony małoletnich w placówkach oświatowych",
                              "Ważne dokumenty",
                            ][idx]
                          }
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className={`font-semibold mb-4 ${headerFontSizeClass}`}>
                Kontakt
              </h4>
              <ul className="list-none p-0">
                {["/", "/", "/", "/", "/", "/", "/", "/"].map((href, idx) => (
                  <li key={idx} className="mb-2">
                    <Link href={href}>
                      <span
                        className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                      >
                        <FaAngleRight />
                        <span>
                          {
                            [
                              "+48 789 790 860",
                              "+48 690 515 224",
                              "+48 797 173 501",
                              "+48 502 162 365",
                              "+48 503 192 950",
                              "Magnolii 25, Rybnik",
                              "Rudzka 13c, Rybnik",
                              "poradniamagnolia@gmail.com",
                            ][idx]
                          }
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className={`font-semibold mb-4 ${headerFontSizeClass}`}>
                Social Media
              </h4>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <a
                    href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                    >
                      <FaTiktok />
                      <span>TikTok</span>
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/poradnia.magnolia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                    >
                      <FaFacebookF />
                      <span>Facebook</span>
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/groups/1071990153582830"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                    >
                      <FaFacebookF />
                      <span>Facebook (EW)</span>
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.youtube.com/@PPP-MAGNOLIA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
                    >
                      <FaYoutube />
                      <span>YouTube</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <h4
        className={`font-semibold mt-7 max-w-7xl mx-auto ${headerFontSizeClass}`}
      >
        Otrzymaj pomoc
      </h4>
      <div className="max-w-7xl mx-auto flex my-10">
        <ul className="list-none p-0 flex flex-wrap gap-4">
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-yellow-100/30"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-yellow-600" />
              <span className="underline text-yellow-600">
                Centrum wsparcia dla osób dorosłych w kryzysie psychicznym: 800
                702 222
              </span>
            </span>
          </li>
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-yellow-100/30"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-yellow-600" />
              <span className="underline text-yellow-600">
                Niebieska Linia: 800120002
              </span>
            </span>
          </li>

          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-[#921d7f]/10"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-[#921d7f]" />
              <span className="underline text-[#921d7f]">
                Telefon dla rodziców i opiekunów dzieci w kryzysie: 800 800 602
              </span>
            </span>
          </li>
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-yellow-100/30"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-yellow-600" />
              <span className="underline text-yellow-600">
                Telefon zaufania dla dzieci i młodzieży: 116 111
              </span>
            </span>
          </li>
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-yellow-100/30"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-yellow-600" />
              <span className="underline text-yellow-600">
                Dziecięcy telefon zaufania Rzecznika Praw Dziecka: 800121212
              </span>
            </span>
          </li>
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-[#921d7f]/10"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-[#921d7f]" />
              <span className="underline text-[#921d7f]">
                Numer alarmowy w sytuacji zagrożenia życia i zdrowia: 112
              </span>
            </span>
          </li>
          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-[#921d7f]/10"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-[#921d7f]" />
              <span className="underline text-[#921d7f]">
                Telefon dla rodziców i nauczycieli w sprawie bezpieczeństwa
                dzieci: 8001001
              </span>
            </span>
          </li>

          <li
            className={`mb-2 p-4 border rounded-lg w-fit ${
              highContrast ? "bg-black text-yellow-400" : "bg-[#921d7f]/10"
            }`}
          >
            <span
              className={`flex items-center space-x-2 font-medium hover:text-[#921d7f] ${fontSizeClass}`}
            >
              <FaPhone className="text-[#921d7f]" />
              <span className="underline text-[#921d7f]">
                Policyjny telefon zaufania ds. przeciwdziałania przemocy w
                rodzinie: 800 120 226
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
