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

const SensoryIntegration = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Diagnoza SI i terapia
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
                  alt="sensory integration therapy"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z diagnozy i&nbsp;terapii SI?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Diagnoza i terapia integracji sensorycznej (SI) pomagają
                dzieciom i dorosłym z zaburzeniami przetwarzania sensorycznego.
                Oto kilka powodów, dla których warto rozważyć diagnozę i terapię
                SI:
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Dzieci mogą potrzebować terapii SI z powodu trudności w
                    przetwarzaniu bodźców sensorycznych, które mogą wpływać na
                    ich rozwój, naukę i codzienne funkcjonowanie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli mogą korzystać z terapii SI, aby lepiej radzić sobie
                    z trudnościami w przetwarzaniu sensorycznym, które mogą
                    wpływać na ich życie zawodowe i osobiste.
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
                  <CardTitle>Problemy z koordynacją ruchową</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci z trudnościami w koordynacji ruchowej, które mają
                    problemy z wykonywaniem codziennych czynności, mogą
                    skorzystać z terapii SI, aby poprawić swoje umiejętności
                    motoryczne.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Trudności w koncentracji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Terapia SI może pomóc dzieciom i dorosłym, którzy mają
                    trudności z koncentracją i skupieniem, co często wynika z
                    problemów z przetwarzaniem bodźców sensorycznych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Nadwrażliwość sensoryczna</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z nadwrażliwością na bodźce sensoryczne, takie jak
                    dźwięki, dotyk czy zapachy, mogą znaleźć ulgę w terapii SI,
                    która pomoże im lepiej radzić sobie z codziennymi
                    wyzwaniami.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Podwrażliwość sensoryczna</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Terapia SI jest także pomocna dla osób z podwrażliwością na
                    bodźce sensoryczne, które mogą mieć trudności z reakcją na
                    bodźce zewnętrzne i potrzebują dodatkowej stymulacji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Problemy z zachowaniem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci i dorośli z problemami zachowania, które mogą wynikać
                    z trudności w przetwarzaniu sensorycznym, mogą skorzystać z
                    terapii SI, aby poprawić swoje umiejętności społeczne i
                    emocjonalne.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Autyzm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Terapia SI jest często wykorzystywana u dzieci z autyzmem,
                    aby pomóc im w lepszym przetwarzaniu bodźców sensorycznych i
                    poprawie funkcjonowania w codziennym życiu.
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
                Jak wygląda diagnoza i terapia SI?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">Diagnoza SI</span> to
                proces, w którym specjalista ocenia zdolność osoby do
                przetwarzania bodźców sensorycznych. Ocena ta może obejmować
                obserwację zachowań, wywiady z rodzicami lub opiekunami oraz
                testy standardowe.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">Terapia SI</span> polega
                na stosowaniu różnych technik i ćwiczeń, które mają na celu
                poprawę przetwarzania sensorycznego. Terapia jest dostosowana do
                indywidualnych potrzeb pacjenta i może obejmować ćwiczenia
                motoryczne, aktywności sensoryczne oraz techniki relaksacyjne.
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
                  alt="sensory therapy session"
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
                  alt="child in sensory therapy"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Terapia SI dla dzieci i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>
                  wspiera rozwój motoryczny i koordynacyjny u dzieci z
                  zaburzeniami sensorycznymi,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  pomaga dorosłym lepiej radzić sobie z codziennymi wyzwaniami
                  związanymi z przetwarzaniem sensorycznym,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>poprawia koncentrację i umiejętności społeczne,</p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewnia wsparcie w radzeniu sobie z nadwrażliwością i
                  podwrażliwością sensoryczną,
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
            <CardTitle>Spróbuj terapii SI</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Terapia integracji sensorycznej może znacząco poprawić jakość
              życia zarówno dzieci, jak i dorosłych poprzez rozwój umiejętności
              przetwarzania sensorycznego, poprawę motoryki oraz radzenie sobie
              z trudnościami w koncentracji i zachowaniu.
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

export default SensoryIntegration;
