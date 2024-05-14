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

const Hipoterapia = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Hipoterapia
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
                  alt="hippotherapy session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z&nbsp;hipoterapii?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Hipoterapia jest formą terapii, która wykorzystuje jazdę konną
                jako środek terapeutyczny. Jest przeznaczona dla osób w różnym
                wieku, które mają różne potrzeby zdrowotne. Oto kilka powodów,
                dla których warto rozważyć hipoterapię:
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Dzieci z zaburzeniami neurologicznymi, problemami z
                    koordynacją ruchową, autyzmem czy innymi schorzeniami mogą
                    korzystać z hipoterapii, aby poprawić swoje umiejętności
                    motoryczne i emocjonalne.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli z różnymi schorzeniami, takimi jak stwardnienie
                    rozsiane, urazy rdzenia kręgowego czy choroby
                    neurodegeneracyjne, mogą skorzystać z hipoterapii, aby
                    poprawić swoje funkcjonowanie fizyczne i emocjonalne.
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
                    Hipoterapia pomaga poprawić równowagę i koordynację ruchową
                    dzięki naturalnym ruchom konia, które stymulują mięśnie i
                    układ nerwowy.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Autyzm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzieci z autyzmem mogą skorzystać z hipoterapii, aby
                    poprawić swoje umiejętności społeczne, komunikacyjne oraz
                    zdolność do nawiązywania relacji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Urazy rdzenia kręgowego</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z urazami rdzenia kręgowego mogą znaleźć ulgę w
                    hipoterapii, która pomaga w rehabilitacji i poprawie funkcji
                    motorycznych.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Choroby neurodegeneracyjne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pacjenci z chorobami neurodegeneracyjnymi, takimi jak
                    stwardnienie rozsiane czy choroba Parkinsona, mogą
                    skorzystać z hipoterapii, aby poprawić swoje funkcje
                    fizyczne i emocjonalne.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Zaburzenia emocjonalne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Hipoterapia może być pomocna dla osób z zaburzeniami
                    emocjonalnymi, takimi jak lęki, depresja czy PTSD, poprzez
                    poprawę samopoczucia i budowanie więzi z koniem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Zaburzenia sensoryczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z zaburzeniami sensorycznymi mogą skorzystać z
                    hipoterapii, aby poprawić swoje zdolności przetwarzania
                    sensorycznego i reakcje na bodźce.
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
                Jak wygląda hipoterapia?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">Hipoterapia</span> to
                terapia, w której pacjent współpracuje z koniem pod okiem
                wykwalifikowanego terapeuty. Terapia ta może obejmować jazdę
                konną, opiekę nad koniem oraz ćwiczenia wykonywane z ziemi.
                Każda sesja jest dostosowana do indywidualnych potrzeb pacjenta.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas sesji hipoterapii pacjent pracuje nad poprawą równowagi,
                koordynacji, siły mięśniowej oraz zdolności komunikacyjnych.
                Kontakt z koniem pomaga również w budowaniu zaufania i poprawie
                samopoczucia emocjonalnego.
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
                  alt="hippotherapy session"
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
                  alt="child in hippotherapy"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Hipoterapia dla dzieci i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>
                  wspiera rozwój motoryczny i koordynacyjny u dzieci z
                  zaburzeniami neurologicznymi i innymi,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  pomaga dorosłym z różnymi schorzeniami poprawić funkcje
                  fizyczne i emocjonalne,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>poprawia umiejętności społeczne i komunikacyjne,</p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewnia wsparcie w radzeniu sobie z zaburzeniami
                  sensorycznymi,
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
            <CardTitle>Spróbuj hipoterapii</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Hipoterapia może znacząco poprawić jakość życia zarówno dzieci,
              jak i dorosłych poprzez rozwój umiejętności motorycznych, poprawę
              równowagi i koordynacji oraz radzenie sobie z trudnościami
              emocjonalnymi i społecznymi.
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

export default Hipoterapia;
