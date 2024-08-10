"use client"; // Enable client-side rendering

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
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

const TerapieVR = () => {
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
      {/* Header */}
      <div
        className={`border-b py-4 md:py-6 ${
          highContrast
            ? "bg-gray-800 border-gray-600 text-yellow-400"
            : "bg-gradient-to-br from-white via-[#225da5]/20 to-[#225da5] border-gray-300 text-black"
        }`}
      >
        <div className="flex justify-center items-center">
          <h2
            className={`font-display font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left ${headerFontSizeClass}`}
          >
            Terapie wspomagane wirtualną rzeczywistością
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Video */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <video
                  src="/assets/vr.mp4"
                  loop
                  muted
                  autoPlay
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Zajęcia dla dzieci z wykorzystaniem wirtualnej rzeczywistości
              </h2>

              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Zajęcia z wykorzystaniem wirtualnej rzeczywistości w programie
                WWRD to innowacyjne narzędzie wspierające rozwój dzieci, które
                łączy naukę z zabawą, dostarczając unikalnych doświadczeń
                edukacyjnych i terapeutycznych. Dzięki dostosowanym programom i
                indywidualnemu podejściu, każde dziecko ma szansę na rozwijanie
                swoich umiejętności w angażujący i motywujący sposób.{" "}
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Interaktywne środowisko nauki
                  </AccordionTrigger>
                  <AccordionContent>
                    VR tworzy angażujące wirtualne światy, które przyciągają
                    uwagę dzieci i zwiększają ich zaangażowanie w proces
                    terapeutyczny. Dzięki temu dzieci są bardziej skłonne do
                    uczestnictwa w zajęciach i chętniej podejmują nowe wyzwania.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Bezpieczna eksploracja</AccordionTrigger>
                  <AccordionContent>
                    Wirtualna rzeczywistość pozwala dzieciom eksplorować różne
                    środowiska i sytuacje w bezpieczny sposób, bez ryzyka
                    fizycznego. Daje to możliwość przeżywania nowych
                    doświadczeń, które w rzeczywistym świecie mogłyby być
                    niedostępne lub zbyt ryzykowne.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Indywidualne dostosowanie</AccordionTrigger>
                  <AccordionContent>
                    Programy VR mogą być łatwo dostosowane do indywidualnych
                    potrzeb i poziomu rozwoju każdego dziecka, co pozwala na
                    precyzyjne dopasowanie terapii do ich unikalnych wymagań.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Rozwój umiejętności społecznych
                  </AccordionTrigger>
                  <AccordionContent>
                    VR oferuje bogate doświadczenia sensoryczne i motoryczne,
                    które są kluczowe w terapii dzieci z zaburzeniami rozwoju.
                    Dzięki temu dzieci mogą rozwijać swoje zdolności ruchowe i
                    sensoryczne w atrakcyjny sposób.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Stymulacja sensoryczna i motoryczna
                  </AccordionTrigger>
                  <AccordionContent>
                    Terapia Ręki skupia się na zidentyfikowaniu ewentualnych
                    ograniczeń w funkcji rąk, takich jak trudności z chwytem,
                    koordynacją ruchową czy zręcznością palców. Przy użyciu
                    specjalistycznych ćwiczeń, manipulacji i zabaw terapeuta
                    stara się poprawić siłę, precyzję oraz funkcjonalność rąk
                    dziecka.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={"/Kontakt"}
                className={`text-slate-800 flex justify-start ${
                  highContrast ? "text-yellow-400" : "text-slate-800"
                }`}
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl ${
                    highContrast ? "bg-gray-600" : "bg-white"
                  }`}
                >
                  Zapytaj o zajęcia wspomagane VR dla twojego dziecka{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Video */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-96 h-96 md:w-[670px] md:h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <video
                  src="/assets/vr2.mp4"
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
                Terapie wspomagane VR
                <br />
                dla osób dorosłych
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Zastosowanie wirtualnej rzeczywistości w terapii i rozwoju
                dorosłych oferuje zaawansowane metody wsparcia zdrowia
                psychicznego, fizycznego oraz osobistego rozwoju. Wykorzystanie
                VR dostarcza unikalnych możliwości, które tradycyjne metody mogą
                nie być w stanie zaoferować.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Zanurzenie w relaksujące środowiska
                  </AccordionTrigger>
                  <AccordionContent>
                    VR umożliwia przeniesienie się do spokojnych, wirtualnych
                    przestrzeni, które pomagają w redukcji stresu i lęku.
                    Spersonalizowane scenariusze mogą obejmować medytacje,
                    wirtualne spacery po lesie, czy sesje na plaży, wspierając
                    zdrowie psychiczne i emocjonalne.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Symulacja i trening umiejętności
                  </AccordionTrigger>
                  <AccordionContent>
                    Dzięki wirtualnej rzeczywistości, dorośli mogą trenować i
                    rozwijać różnorodne umiejętności w bezpiecznym środowisku.
                    Od wystąpień publicznych, poprzez symulacje sytuacji
                    zawodowych, aż po treningi interpersonalne – VR oferuje
                    realistyczne scenariusze do praktyki i nauki.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Fizjoterapia i rehabilitacja
                  </AccordionTrigger>
                  <AccordionContent>
                    VR jest wykorzystywana w fizjoterapii do wspomagania procesu
                    rehabilitacji, oferując ćwiczenia dostosowane do potrzeb
                    pacjenta. Wirtualne ćwiczenia mogą być atrakcyjniejsze i
                    motywujące, co przyczynia się do większej efektywności
                    terapii.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Rozwój osobisty i mindfulness
                  </AccordionTrigger>
                  <AccordionContent>
                    VR umożliwia praktykowanie mindfulness i technik
                    relaksacyjnych w wirtualnych środowiskach, które sprzyjają
                    skupieniu i wewnętrznej harmonii. Jest to doskonały sposób
                    na odnalezienie wewnętrznego spokoju i zwiększenie
                    świadomości siebie.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Wirtualne spotkania i terapia grupowa
                  </AccordionTrigger>
                  <AccordionContent>
                    Technologia VR umożliwia uczestnictwo w wirtualnych sesjach
                    terapeutycznych i spotkaniach grupowych, co może być
                    szczególnie korzystne dla osób, które z różnych przyczyn nie
                    mogą uczestniczyć w sesjach stacjonarnych.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Treningi pamięci i funkcji poznawczych
                  </AccordionTrigger>
                  <AccordionContent>
                    Gry i aplikacje VR mogą wspierać trening pamięci i innych
                    funkcji poznawczych, oferując zabawne i angażujące sposoby
                    na utrzymanie umysłu w dobrej kondycji.{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={"/Kontakt"}
                className={`text-slate-800 flex justify-start ${
                  highContrast ? "text-yellow-400" : "text-slate-800"
                }`}
              >
                <div
                  className={`mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl ${
                    highContrast ? "bg-gray-600" : "bg-white"
                  }`}
                >
                  Zapytaj o terapię wspomaganą VR
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Video */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <video
                  src="/assets/vr3.mp4"
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
                Praca z lękami oraz fobiami wspomagana VR
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Praca z lękami oraz fobiami wspomagana przez wirtualną
                rzeczywistość to innowacyjne podejście, które umożliwia
                bezpieczne i kontrolowane stawianie czoła trudnym sytuacjom.
                Wykorzystanie VR w terapii fobii i lęków pozwala na stopniowe
                eksponowanie się na obiekty lub sytuacje wywołujące lęk, w
                sposób, który jest trudny do zreplikowania w warunkach
                rzeczywistych.{" "}
              </p>

              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Stopniowe eksponowanie</AccordionTrigger>
                  <AccordionContent>
                    VR umożliwia stworzenie realistycznych scenariuszy, w
                    których pacjenci mogą stopniowo zwiększać poziom ekspozycji
                    na lękotwórcze sytuacje, co jest kluczowe w terapii
                    behawioralnej.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Kontrolowane środowisko</AccordionTrigger>
                  <AccordionContent>
                    Terapia w VR odbywa się w bezpiecznym i kontrolowanym
                    środowisku, co daje pacjentom poczucie bezpieczeństwa i
                    pozwala na pracę nad lękami bez ryzyka realnych
                    konsekwencji.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Realizm doświadczeń</AccordionTrigger>
                  <AccordionContent>
                    Wirtualna rzeczywistość oferuje wyjątkowo realistyczne
                    doświadczenia, co jest niezbędne dla skuteczności terapii
                    fobii. Pacjenci mogą odczuwać podobne reakcje emocjonalne,
                    jak w rzeczywistych sytuacjach, co ułatwia pracę nad
                    przyczynami lęku.{" "}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Bezpośrednia terapia</AccordionTrigger>
                  <AccordionContent>
                    VR umożliwia bezpośrednie zastosowanie technik
                    terapeutycznych, takich jak relaksacja czy techniki radzenia
                    sobie, w trakcie ekspozycji na sytuacje wywołujące lęk, co
                    zwiększa efektywność terapii.{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={"/Kontakt"}
                className={`text-slate-800 flex justify-start ${
                  highContrast ? "text-yellow-400" : "text-slate-800"
                }`}
              >
                <div
                  className={`w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl ${
                    highContrast ? "bg-gray-600" : "bg-white"
                  }`}
                >
                  Kontakt <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="max-w-7xl md:px-0 px-4 mx-auto mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto text-center">
          <h2
            className={`font-display mb-6 font-semibold text-center ${headerFontSizeClass}`}
          >
            Nasza terapia to nie tylko okulary VR - to cała platforma.
          </h2>
          <div className="grid grid-cols-1 row-span-2 md:grid-cols-3 gap-4 mx-auto">
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/vr.jpeg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                alt="Galeria obraz 1"
              />
            </div>
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/vr2.jpeg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                alt="Galeria obraz 2"
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/vrGrid.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/vrGrid2.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto text-center">
          <Card
            className={`mx-auto w-96 shadow-md ${
              highContrast ? "bg-gray-800 border-gray-600" : ""
            }`}
          >
            <CardHeader
              className={`${
                highContrast
                  ? "bg-gray-900 text-yellow-400"
                  : "bg-[#225da5] text-white"
              } rounded-t-xl`}
            >
              <CardTitle className="text-2xl font-semibold">Cennik</CardTitle>
            </CardHeader>
            <CardContent
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } text-base p-6`}
            >
              Terapia VR 50 minut - 180zł
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TerapieVR;
