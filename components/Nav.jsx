"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaTiktok, FaFacebook, FaYoutube, FaAdjust } from "react-icons/fa";
import { useAccessibility } from "./AccessibilityContext"; // Ensure this path is correct
import { Button } from "../@/components/ui/button";
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

const products = [
  {
    name: "Nasi Specjaliści",
    description: "Dowiedz się więcej o zespole Magnolii",
    href: "/Kadra",
    icon: UserGroupIcon,
  },
  {
    name: "Nasze miejsce",
    description: "",
    href: "/O_nas",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Regulamin",
    description: "",
    href: "/regulamin",
    icon: ShieldCheckIcon,
  },
  {
    name: "TikTok",
    description: "Zajrzyj na naszego TikToka",
    href: "https://www.tiktok.com/@poradnia_magnolia_rybnik",
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    description: "Zajrzyj na naszego Facebooka",
    href: "https://www.facebook.com/poradnia.magnolia",
    icon: FaFacebook,
  },
  {
    name: "YouTube",
    description: "Zobacz nasze materiały na YouTubie",
    href: "https://www.youtube.com/@PPP-MAGNOLIA",
    icon: FaYoutube,
  },
];

const callsToAction = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainPageNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    fontSizeLevel,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
  } = useAccessibility();

  // Determine the font size class based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div
      className={classNames(
        "sticky top-0 z-50",
        highContrast ? "bg-black text-white" : "bg-white text-black",
        fontSizeClass // Apply the determined font size class
      )}
    >
      <nav
        className="mx-auto flex w-full items-center justify-between p-3 lg:px-5"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="flex justify-start items-center">
            <img
              src="/assets/LogoMainPage.svg"
              width={170}
              alt="Logo Magnolia"
            />
            <span className="sr-only">Magnolia</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Otwórz menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden md:flex-wrap md:mx-5 md:gap-x-6 lg:flex font-[450] lg:gap-x-10 py-2 px-4">
          <Link href="/" className={`text-sm leading-6 ${fontSizeClass}`}>
            Strona główna
          </Link>

          <Link
            href="/Centrum_uzaleznien"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            Centrum uzależnień
          </Link>

          <Link href="/Dzieci" className={`text-sm leading-6 ${fontSizeClass}`}>
            Dzieci
          </Link>

          <Link
            href="/Dorosli"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            Dorośli
          </Link>

          <Link
            href="/diagnoza_si"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            SI
          </Link>

          <Link
            href="/terapia_vr"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            Terapia VR
          </Link>

          <Link
            href="/hipoterapia"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            Hipoterapia
          </Link>

          <Link
            href="/assets/oferta-PPP-Magnolia.pdf"
            className={`text-sm leading-6 ${fontSizeClass}`}
          >
            Oferta
          </Link>

          <Popover className="relative">
            <Popover.Button
              className={`flex items-center gap-x-1 text-sm leading-6 ${fontSizeClass}`}
            >
              O nas
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-60 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 ${fontSizeClass}`}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        <div className="hidden lg:flex gap-2 lg:justify-end items-center">
          <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
            <Button
              onClick={decreaseFontSize}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              aria-label="Zmniejsz czcionkę"
            >
              <span className="text-xs font-semibold">A-</span>
            </Button>
            <Button
              onClick={resetFontSize}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              aria-label="Resetuj do bazowej wielkości"
            >
              <span className="text-sm font-semibold">A</span>
            </Button>
            <Button
              onClick={increaseFontSize}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              aria-label="Zwiększ czcionkę"
            >
              <span className="text-base font-semibold">A+</span>
            </Button>
            <Button
              onClick={toggleHighContrast}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              aria-label="Zmień kontrast"
            >
              <FaAdjust className="h-4 w-4" />
              <span className="sr-only">
                {highContrast
                  ? "Wyłącz wysoki kontrast"
                  : "Włącz wysoki kontrast"}
              </span>
            </Button>
          </div>
          <Link
            href="/Kontakt"
            className={`text-sm bg-[#921d7f] font-semibold py-2 px-5 rounded-md leading-6 text-white ${fontSizeClass}`}
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Magnolia</span>
              <img className="h-8 w-auto" src="/assets/magnolia.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Zamknij menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 mt-5 ${fontSizeClass}`}
                >
                  Strona główna
                </Link>
                <Link
                  href="/Centrum_uzaleznien"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Centrum uzależnień
                </Link>
                <Link
                  href="/Dzieci"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Dzieci
                </Link>
                <Link
                  href="/Dorosli"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Dorośli
                </Link>
                <Link
                  href="/diagnoza_si"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  SI
                </Link>
                <Link
                  href="/terapia_vr"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Terapia VR
                </Link>
                <Link
                  href="/hipoterapia"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Hipoterapia
                </Link>
                <Link
                  href="/assets/oferta-PPP-Magnolia.pdf"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Oferta
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                      >
                        O nas
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href="/Kontakt"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 ${fontSizeClass}`}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
