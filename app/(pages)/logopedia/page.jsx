import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AlertDemo } from "/components/Alert";
import Link from "next/link";

const Logopedia = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Logopedia
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
                  alt="speech therapy session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z&nbsp;logopedii?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Logopedia jest ważna dla osób w każdym wieku, które mają
                trudności z mową lub komunikacją. Oto kilka powodów, dla których
                warto rozważyć terapię logopedyczną:
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Dzieci mogą potrzebować logopedy z powodu opóźnionego
                    rozwoju mowy, wad wymowy, trudności w nauce czytania i
                    pisania lub problemów z płynnością mowy (jąkanie).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli mogą skorzystać z logopedii w przypadku utraty mowy
                    po udarze, urazie mózgu, chorobach neurodegeneracyjnych lub
                    problemach z głosem związanych z pracą zawodową.
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
                  <CardTitle>Opóźniony rozwój mowy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jeśli twoje dziecko ma problemy z mówieniem lub nie mówi w
                    ogóle w wieku, w którym powinno już mówić, warto
                    skonsultować się z logopedą, który pomoże w rozwoju tych
                    umiejętności.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Wady wymowy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Wady wymowy, takie jak seplenienie, rotacyzm (problemy z
                    wymową "r") czy jąkanie, mogą być skutecznie korygowane
                    dzięki regularnym sesjom z logopedą.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Problemy z czytaniem i pisaniem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci z trudnościami w nauce czytania i pisania często
                    potrzebują wsparcia logopedycznego, aby przezwyciężyć swoje
                    trudności i rozwijać umiejętności komunikacyjne.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Utrata mowy po udarze</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Logopedia może znacząco poprawić jakość życia osób, które
                    utraciły zdolność mówienia po udarze, poprzez rehabilitację
                    mowy i komunikacji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Problemy z głosem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Problemy z głosem, takie jak chrypka, zmęczenie głosowe czy
                    zmiany w tonie i barwie głosu, mogą być rozwiązane dzięki
                    terapii logopedycznej, szczególnie u osób pracujących głosem
                    zawodowo.
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
                    terapii logopedycznej, aby poprawić swoją zdolność do
                    komunikacji na co dzień.
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
                Jak wygląda terapia logopedyczna?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">
                  Terapia logopedyczna
                </span>{" "}
                to proces, w którym logopeda pracuje z osobą mającą trudności z
                mową lub komunikacją, aby poprawić jej zdolności w tych
                obszarach. Terapia może obejmować różne techniki i ćwiczenia
                dostosowane do indywidualnych potrzeb pacjenta.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Sesje logopedyczne mogą być prowadzone indywidualnie lub w
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
                  alt="logopedic therapy session"
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
                  alt="child in therapy"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Logopedia dla dzieci i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>
                  wspiera rozwój mowy i języka u dzieci w wieku przedszkolnym i
                  szkolnym,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  pomaga dorosłym w odzyskaniu zdolności mówienia po udarze lub
                  urazie mózgu,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>pomaga w korygowaniu wad wymowy i poprawie jakości życia,</p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewnia wsparcie w radzeniu sobie z problemami głosowymi,
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
            <CardTitle>Spróbuj terapii logopedycznej</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Terapia logopedyczna może znacząco poprawić jakość życia zarówno
              dzieci, jak i dorosłych poprzez rozwój umiejętności
              komunikacyjnych, poprawę wymowy i radzenie sobie z problemami
              głosowymi.
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

export default Logopedia;
