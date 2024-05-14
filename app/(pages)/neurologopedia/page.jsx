import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AlertDemo } from "/components/Alert";
import { CardFooter } from "../../../components/ui/card";
import Link from "next/link";

const Neurologopedia = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Neurologopedia
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/testtlo.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="neurological speech therapy session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z&nbsp;neurologopedii?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Neurologopedia jest specjalistyczną dziedziną logopedii, która
                zajmuje się diagnozowaniem i terapią zaburzeń mowy wynikających
                z uszkodzeń neurologicznych. Oto kilka powodów, dla których
                warto rozważyć terapię neurologopedyczną:
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Dzieci z zaburzeniami neurologicznymi, takimi jak mózgowe
                    porażenie dziecięce, autyzm, czy inne schorzenia
                    neurologiczne, mogą potrzebować wsparcia neurologopedy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli mogą skorzystać z neurologopedii w przypadku utraty
                    mowy po udarze, urazie mózgu, chorobach
                    neurodegeneracyjnych, takich jak choroba Parkinsona czy
                    stwardnienie rozsiane.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-10">
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Utrata mowy po udarze</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Neurologopedia może znacząco poprawić jakość życia osób,
                    które utraciły zdolność mówienia po udarze, poprzez
                    rehabilitację mowy i komunikacji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Choroby neurodegeneracyjne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z chorobami neurodegeneracyjnymi, takimi jak choroba
                    Parkinsona czy stwardnienie rozsiane, mogą korzystać z
                    terapii neurologopedycznej, aby poprawić swoją zdolność do
                    komunikacji na co dzień.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Problemy z połykiem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Neurologopeda może pomóc osobom z dysfagią (problemami z
                    przełykaniem) spowodowaną schorzeniami neurologicznymi,
                    ucząc bezpiecznych technik połykania i poprawiając komfort
                    jedzenia.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Autyzm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci z autyzmem często mają trudności z komunikacją
                    werbalną i niewerbalną. Neurologopeda może pomóc w
                    rozwijaniu umiejętności komunikacyjnych i poprawie
                    interakcji społecznych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Mózgowe porażenie dziecięce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci z mózgowym porażeniem dziecięcym mogą potrzebować
                    wsparcia neurologopedycznego, aby poprawić swoją zdolność do
                    komunikacji oraz radzić sobie z trudnościami w mowie i
                    przełykaniu.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Urazy mózgu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby po urazach mózgu mogą mieć trudności z mową, pamięcią
                    i koncentracją. Terapia neurologopedyczna może pomóc w
                    rehabilitacji tych funkcji i poprawie jakości życia.
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
            {/* Informational Text */}
            <div className="flex-col justify-start items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Jak wygląda terapia neurologopedyczna?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">
                  Terapia neurologopedyczna
                </span>{" "}
                to proces, w którym neurologopeda pracuje z osobą mającą
                trudności z mową lub komunikacją wynikające z uszkodzeń
                neurologicznych, aby poprawić jej zdolności w tych obszarach.
                Terapia może obejmować różne techniki i ćwiczenia dostosowane do
                indywidualnych potrzeb pacjenta.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Sesje neurologopedyczne mogą być prowadzone indywidualnie lub w
                grupach, zarówno z dziećmi, jak i dorosłymi. Często terapia
                wymaga regularnych spotkań oraz ćwiczeń wykonywanych w domu.
              </p>
              {/* Accordion and Link components here */}
            </div>

            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[38rem] h-[35rem] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <Image
                  src="/assets/testtlo.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="neurological therapy session"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/testtlo.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="child in neurological therapy"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Neurologopedia dla dzieci i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>
                  wspiera rozwój mowy i języka u dzieci z zaburzeniami
                  neurologicznymi,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  pomaga dorosłym w odzyskaniu zdolności mówienia po udarze lub
                  urazie mózgu,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>
                  pomaga w korygowaniu trudności w komunikacji wynikających z
                  chorób neurodegeneracyjnych,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewnia wsparcie w radzeniu sobie z problemami z połykiem,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>
                  dostosowuje terapię do indywidualnych potrzeb każdego
                  pacjenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Spróbuj terapii neurologopedycznej</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Terapia neurologopedyczna może znacząco poprawić jakość życia
              zarówno dzieci, jak i dorosłych poprzez rozwój umiejętności
              komunikacyjnych, poprawę mowy i radzenie sobie z problemami z
              połykiem.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Kontakt"}
              className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
            >
              Umów wizytę
              <FaCircleArrowRight className="rotate-[-45deg]" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <AlertDemo />
    </div>
  );
};

export default Neurologopedia;
