"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight, FaCheck } from "react-icons/fa6";

import { AlertDemo } from "../../../components/Alert";
import { CardFooter } from "../../../components/ui/card";
import Link from "next/link";
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

const TerapiaPar = () => {
  const { fontSizeLevel, highContrast } = useAccessibility(); // Use context

  // Determine the font size classes based on the current level
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      {/* Nagłówek */}
      <div
        className={`border-b py-4 md:py-6 ${
          highContrast
            ? "bg-gray-800 border-gray-600 text-yellow-400"
            : "bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 border-gray-300 text-slate-800"
        }`}
      >
        <div className="flex justify-center items-center">
          <h2
            className={`font-display font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left ${headerFontSizeClass}`}
          >
            Terapia par
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <video
                  src="/assets/terapiadlapar2.mp4"
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
                className={`text-left font-semibold mb-6 font-display ${headerFontSizeClass}`}
              >
                Kiedy warto rozważyć udział w&nbsp;terapii dla osób będących
                w&nbsp;związku?
              </h2>

              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Udział w terapii dla osób będących w związku warto rozważyć w
                kilku sytuacjach:
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Komunikacja</AccordionTrigger>
                  <AccordionContent>
                    Jeżeli czujesz, że komunikacja w związku jest nieskuteczna,
                    pełna konfliktów lub po prostu brakuje wam zdolności do
                    rozwiązywania problemów razem, terapia może pomóc w
                    nauczeniu się lepszych technik komunikacyjnych.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Zmiany w relacji</AccordionTrigger>
                  <AccordionContent>
                    Duże zmiany życiowe, takie jak narodziny dziecka, zmiana
                    pracy, przeprowadzka lub śmierć bliskiej osoby, mogą wpłynąć
                    na dynamikę związku. Terapia pomoże wam poradzić sobie z
                    tymi zmianami w zdrowy sposób.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Powracające kłótnie lub konflikty
                  </AccordionTrigger>
                  <AccordionContent>
                    Jeśli ciągle kłócicie się o te same sprawy lub macie
                    trudności z osiągnięciem kompromisu, terapia może pomóc w
                    identyfikacji korzeni problemów i w znalezieniu sposobów na
                    ich rozwiązanie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Brak bliskości lub intymności
                  </AccordionTrigger>
                  <AccordionContent>
                    Gdy odczuwacie, że wasza emocjonalna lub fizyczna bliskość
                    osłabła, a próby jej przywrócenia na własną rękę nie
                    przynoszą rezultatów, terapia może pomóc w odbudowaniu tej
                    intymności.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Niewierność lub zaufanie</AccordionTrigger>
                  <AccordionContent className="">
                    Po zdradzie lub innych sytuacjach, które nadszarpnęły
                    zaufanie, terapia może być kluczowa w procesie leczenia i
                    odbudowy relacji.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Przygotowanie do małżeństwa
                  </AccordionTrigger>
                  <AccordionContent className="">
                    Dla par planujących ślub, terapia przedmałżeńska może być
                    cennym narzędziem do zrozumienia oczekiwań, ustalenia celów
                    życiowych i wzmocnienia relacji przed zawarciem związku
                    małżeńskiego.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className=" max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className=" grid grid-cols-2 gap-10">
            <div className=" grid gap-10">
              <Card className=" border-red-500 bg-red-100">
                <CardHeader>
                  <CardTitle>Rozważanie rozstania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jeżeli myślicie o rozstaniu lub rozwodzie, ale chcielibyście
                    najpierw spróbować rozwiązać problemy i być może dać sobie
                    szansę na kontynuowanie związku, terapia może pomóc w
                    podjęciu decyzji w bardziej świadomy i przemyślany sposób.
                  </p>
                </CardContent>
              </Card>
              <Card className=" border-orange-800 bg-orange-100">
                <CardHeader>
                  <CardTitle>Przemoc lub agresja</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jeżeli w związku pojawiają się zachowania agresywne,
                    manipulacyjne lub zachowania kontrolujące, terapia może
                    pomóc w adresowaniu i nazywaniu tych problemów. Ważne jest
                    jednak, aby zapewnić bezpieczeństwo wszystkim zaangażowanym
                    osobom, a w niektórych przypadkach konieczna może być
                    interwencja specjalistów od bezpieczeństwa lub – nawet -
                    prawników.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-500 bg-red-100">
                <CardHeader>
                  <CardTitle>Rodzicielskie wyzwania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kiedy macie problemy z ustaleniem wspólnych zasad
                    wychowawczych lub różnice w metodach wychowania dzieci stają
                    się źródłem konfliktów, terapia może pomóc w zharmonizowaniu
                    Waszych podejść i wspieraniu siebie nawzajem jako rodziców.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className=" grid gap-10">
              <Card className="border-orange-800 bg-orange-100">
                <CardHeader>
                  <CardTitle>Problemy seksualne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kłopoty w życiu seksualnym, takie jak rozbieżne libido,
                    trudności z funkcjonowaniem seksualnym lub różnice w
                    preferencjach, mogą być trudne do omówienia bez wsparcia.
                    Terapia par może zapewnić bezpieczne środowisko do dyskusji
                    o tych sprawach i szukania rozwiązań, aby Wasze życie
                    intymne sprawiało przyjemność i dawało satysfakcję Wam
                    obojgu.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-500 bg-red-100">
                <CardHeader>
                  <CardTitle>Problemy finansowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jeśli pieniądze są źródłem napięcia w związku, co może
                    dotyczyć zarządzania budżetem, długami lub różnic w nawykach
                    wydatkowych, terapia może pomóc w zrozumieniu i
                    zharmonizowaniu waszych finansowych priorytetów i strategii.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-800 bg-orange-100">
                <CardHeader>
                  <CardTitle>Przeżycie traumy lub utraty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kiedy jeden lub obaj partnerzy doświadczają traumy lub
                    głębokiej straty, takiej jak śmierć bliskiej osoby, terapia
                    może pomóc w procesie żałoby i adaptacji do nowej sytuacji,
                    jednocześnie wspierając związek.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10 max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Tekst informacyjny */}
            <div className="flex-col justify-start items-center">
              <h2
                className={`text-left font-semibold mb-6 font-display ${headerFontSizeClass}`}
              >
                Dlaczego terapia dla par?
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                <span className=" font-semibold text-xl">
                  Terapia par to proces
                </span>
                , w którym dwoje ludzi pracuje nad poprawą jakości swojego
                związku poprzez rozwój wzorców komunikacji i interakcji, naukę
                rozwiązywania konfliktów oraz komunikowania własnych uczuć
                i&nbsp;potrzeb oraz zrozumienie partnera.
              </p>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Terapia skierowana jest zarówno do osób znajdujących się w
                związkach formalnych i nieformalnych, do osób znajdujących się w
                związkach partnerskich lub jednopłciowych.
              </p>
            </div>

            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/terapiadlapar3.mp4"
                  title="terapia dla par"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/terapia_par_2.jpg"
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
                className={`text-left font-semibold mb-6 font-display ${headerFontSizeClass}`}
              >
                Terapia dla osób tworzących związek daje możliwość:
              </h2>
              <div
                className={`mt-3 flex items-center gap-3 ${
                  highContrast ? "text-yellow-400" : "text-green-800"
                }`}
              >
                <FaCheck />
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} text-left mb-6`}
                >
                  spotkania z partnerem na bezpiecznym gruncie,
                  w&nbsp;atmosferze równości i&nbsp;bezstronności,
                </p>
              </div>
              <div
                className={`mt-3 flex items-center gap-3 ${
                  highContrast ? "text-yellow-400" : "text-green-600"
                }`}
              >
                <FaCheck />
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} text-left mb-6`}
                >
                  spojrzenia na swój związek z innej perspektywy,
                </p>
              </div>
              <div
                className={`mt-3 ${
                  highContrast ? "text-yellow-400" : "text-green-800"
                }`}
              >
                <div className=" flex items-center gap-3">
                  <FaCheck />
                  <p
                    className={`${
                      highContrast ? "text-yellow-400" : "text-gray-700"
                    } ${fontSizeClass} text-left mb-6`}
                  >
                    poprawy komunikacji w relacji bez tak zwanej przemocy
                    słownej, która nie jest tylko:
                  </p>
                </div>
                <div>
                  <ul
                    className={`mt-2 ml-6 ${
                      highContrast ? "text-yellow-400" : "text-green-600"
                    }`}
                  >
                    <li>- krzykiem,</li>
                    <li>- używaniem wulgaryzmów,</li>
                    <li>- obrażaniem się,</li>
                    <li>- reagowanie milczeniem,</li>
                    <li>- atakami słownymi,</li>
                  </ul>
                </div>
              </div>
              <div
                className={`mt-3 flex items-center gap-3 ${
                  highContrast ? "text-yellow-400" : "text-green-800"
                }`}
              >
                <FaCheck />
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} text-left mb-6`}
                >
                  wyrażania własnych uczuć, potrzeb, oczekiwań, obaw, rozterek,
                </p>
              </div>
              <div
                className={`mt-3 flex items-center gap-3 ${
                  highContrast ? "text-yellow-400" : "text-green-600"
                }`}
              >
                <FaCheck />
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} text-left mb-6`}
                >
                  zrozumienia uczuć oraz potrzeb partnera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto my-20">
        <Card
          className={`${
            highContrast ? "bg-gray-800" : "bg-blue-100"
          } border-blue-800`}
        >
          <CardHeader>
            <CardTitle>Spróbuj terapii dla par</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Podczas terapii osoby uczą się skutecznej komunikacji, ustalania
              przyczyn konfliktów oraz sposobów na ich rozwiązywanie z korzyścią
              dla obu stron. Ponadto, jednym z jej celów jest ogólna poprawa
              relacji oraz zwiększenie poczucia bliskości emocjonalnej.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Kontakt"}
              className={`p-2 rounded-md border flex items-center justify-center gap-2 ${
                highContrast
                  ? "bg-gray-600 border-gray-400"
                  : "bg-blue-300 border-blue-800"
              }`}
            >
              Umów wizytę
              <FaCircleArrowRight className=" rotate-[-45deg]" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <AlertDemo />
    </div>
  );
};

export default TerapiaPar;
