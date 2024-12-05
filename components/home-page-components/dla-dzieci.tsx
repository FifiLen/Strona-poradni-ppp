"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsRight, Snowflake } from "lucide-react";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import { SnowmanButton } from "../zimowe-componenty/snowman-button";

const getFontSize = (level: number, isHeader: boolean = false) => {
  const sizes = isHeader
    ? ["text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl"]
    : ["text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"];
  return sizes[Math.max(0, Math.min(level, 4))];
};

export default function WinterDlaDzieciIMlodziezySection() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const fontSizeClass = getFontSize(fontSizeLevel);
  const headerFontSizeClass = getFontSize(fontSizeLevel, true);

  return (
    <section
      className={`max-w-7xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8 ${
        highContrast
          ? "bg-gray-900 text-gray-100"
          : "bg-transparent text-gray-800"
      } relative`}
    >
      <Snowflake className="absolute top-8 left-8 text-blue-300 w-8 h-8 animate-float" />
      <Snowflake className="absolute bottom-8 right-8 text-blue-300 w-6 h-6 animate-float-delayed" />
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 sm:mb-16`}
      >
        Wsparcie
        <br />
        dla dzieci i młodzieży.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8 h-full flex flex-col">
          <div className="relative flex-grow rounded-[32px] overflow-hidden aspect-video sm:aspect-square lg:aspect-auto lg:h-full">
            <Image
              src="/assets/o-poradni/zimowe-dla-dzieci.jpg"
              alt="Wsparcie dla dzieci i młodzieży"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-4xl tracking-tight font-semibold text-white mb-2">
                Rozwój i edukacja
              </h3>
              <p className="text-white font-semibold">
                Kompleksowe wsparcie dla młodego pokolenia
              </p>
            </div>
            <Snowflake className="absolute top-4 right-4 text-white w-8 h-8 animate-spin-slow" />
          </div>
        </div>
        <div className={`space-y-6 ${fontSizeClass}`}>
          <div
            style={{ wordSpacing: "0.1em", lineHeight: "1.6" }}
            className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight dark:text-gray-300"
          >
            <p>
              Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka bliska
              problemom dzieci, młodzieży oraz osób dorosłych. Realizujemy
              darmowe zajęcia Wczesnego Wspomagania Rozwoju Dziecka na podstawie
              opinii o potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
              dydaktycznych, terapeutycznych oraz warsztatów wspierających
              wszechstronny rozwój dzieci i młodzieży.
            </p>
            <p>
              Wspieramy psychologicznie młodzież w problemach wieku dorastania.
              Co roku organizujemy zajęcia przygotowujące do egzaminów
              ósmoklasisty. Dla najmłodszych oferujemy spotkania w gronie dzieci
              do 3 roku życia nie uczęszczających jeszcze do przedszkola na
              zajęcia ogólnorozwojowe z elementami bajkoterapii.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <SnowmanButton href="/wsparcie-dla-dzieci">
              Wsparcie dla dzieci i młodzieży
            </SnowmanButton>
          </div>
          <div className="flex flex-col sm:flex-row pt-2">
            <Button
              asChild
              size="lg"
              variant="link"
              id="zima"
              className="text-base sm:text-lg text-[#921d7f] hover:text-black transition-colors duration-300 p-0 relative group"
            >
              <Link href="/wsparcie-dla-dzieci/jak-uzyskac-darmowe-zajecia-wwrd">
                Jak uzyskać darmowe zajęcia WWR
                <ChevronsRight className="ml-2 h-6 w-6" />
                <Snowflake className="absolute top-full left-1/2 transform -translate-x-1/2 text-blue-300 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
