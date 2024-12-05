"use client";

import React from "react";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    title: "Menu",
    links: [
      { name: "Strona główna", href: "/" },
      { name: "Dzieci", href: "/wsparcie-dla-dzieci" },
      { name: "Dorośli", href: "/wsparcie-dla-doroslych" },
      { name: "Centrum uzależnień", href: "/centrum-uzaleznien" },
      { name: "SI", href: "/wsparcie-dla-dzieci/diagnoza-si" },
      { name: "Terapia VR", href: "/terapia-vr" },
      { name: "Hipoterapia", href: "/hipoterapia" },
      { name: "Nasi specjaliści", href: "/kadra" },
      { name: "Oferta", href: "/oferta" },
      { name: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Sprawdź",
    links: [
      { name: "Dołącz do Magnolii", href: "/dolacz-do-magnolii" },
      { name: "Galeria", href: "/galeria" },
      { name: "Grafiki na stronie", href: "/grafiki-na-stronie" },
      {
        name: "Standardy ochrony małoletnich w placówkach oświatowych",
        href: "/standardy-ochrony-maloletnich-w-placowkach-oswiatowych",
      },
      { name: "Dokumenty", href: "/dokumenty" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { name: "+48 789 790 860", href: "/" },
      { name: "+48 690 515 224", href: "/" },
      { name: "+48 797 173 501", href: "/" },
      { name: "+48 502 162 365", href: "/" },
      { name: "+48 503 192 950", href: "/" },
      { name: "Magnolii 25, Rybnik", href: "/" },
      { name: "Rudzka 13c, Rybnik", href: "/" },
      { name: "poradniamagnolia@gmail.com", href: "/" },
    ],
  },
];

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@poradnia_magnolia_rybnik",
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/poradnia.magnolia",
    icon: FaFacebookF,
  },
  {
    name: "Facebook (EW)",
    href: "https://www.facebook.com/groups/1071990153582830",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@PPP-MAGNOLIA",
    icon: FaYoutube,
  },
];

const emergencyContacts = [
  {
    name: "Centrum wsparcia dla osób dorosłych w kryzysie psychicznym",
    number: "800 702 222",
  },
  { name: "Niebieska Linia", number: "800120002" },
  {
    name: "Telefon dla rodziców i opiekunów dzieci w kryzysie",
    number: "800 800 602",
  },
  {
    name: "Telefon zaufania dla dzieci i młodzieży",
    number: "116 111",
  },
  {
    name: "Dziecięcy telefon zaufania Rzecznika Praw Dziecka",
    number: "800121212",
  },
  {
    name: "Numer alarmowy w sytuacji zagrożenia życia i zdrowia",
    number: "112",
  },
  {
    name: "Telefon dla rodziców i nauczycieli w sprawie bezpieczeństwa dzieci",
    number: "8001001",
  },
  {
    name: "Policyjny telefon zaufania ds. przeciwdziałania przemocy w rodzinie",
    number: "800 120 226",
  },
];

export default function Footer() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  return (
    <footer
      className={cn(
        "border-t",
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      )}
    >
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center lg:col-span-1">
            <Image
              src="/assets/logo/logo-footer.svg"
              width={200}
              height={200}
              alt="Logo poradni"
              className="mx-auto"
            />
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h2
                className={cn(
                  "font-semibold mb-4",
                  fontSizeLevel > 1 ? "text-lg" : "text-base"
                )}
              >
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center font-medium space-x-2 hover:text-primary transition-colors duration-200",
                        fontSizeLevel > 1 ? "text-base" : "text-sm"
                      )}
                    >
                      <FaAngleRight className="flex-shrink-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1">
            <h2
              className={cn(
                "font-semibold mb-4",
                fontSizeLevel > 1 ? "text-lg" : "text-base"
              )}
            >
              Social Media
            </h2>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center space-x-2 hover:text-primary transition-colors font-medium duration-200",
                      fontSizeLevel > 1 ? "text-base" : "text-sm"
                    )}
                  >
                    <link.icon className="flex-shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto py-8">
          <h2
            className={cn(
              "font-semibold mb-4",
              fontSizeLevel > 1 ? "text-xl" : "text-2xl"
            )}
          >
            Otrzymaj pomoc
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className={cn(
                    "bg-gray-100",
                    highContrast
                      ? "text-gray-100 bg-gray-900"
                      : "text-gray-700 bg-[#921d7f]/20"
                  )}
                >
                  <th className="p-2 text-left font-semibold">Nazwa</th>
                  <th className="p-2 text-left font-semibold">
                    Numer telefonu
                  </th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((contact, index) => (
                  <tr
                    key={index}
                    className={cn(
                      "border-b",
                      highContrast
                        ? "bg-black text-gray-100 border-gray-700"
                        : "bg-white text-gray-800 border-gray-200",
                      fontSizeLevel > 1 ? "text-base" : "text-sm"
                    )}
                  >
                    <td className="p-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{contact.name}</span>
                      </div>
                    </td>
                    <td className="p-2 font-semibold">{contact.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}
