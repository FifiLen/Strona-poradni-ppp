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

const Warsztaty = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Zajęcia warsztatowe - Oferta wakacyjna
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
                  alt="workshop session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z&nbsp;naszych zajęć warsztatowych?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Nasze zajęcia warsztatowe to doskonała okazja do rozwoju
                umiejętności w różnych dziedzinach. Są przeznaczone dla dzieci i
                dorosłych, oferując ciekawe i angażujące aktywności. Chociaż
                promujemy je jako ofertę wakacyjną, warsztaty będą dostępne
                przez cały rok.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Warsztaty dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Oferujemy różnorodne warsztaty dla dzieci, które rozwijają
                    ich kreatywność, umiejętności społeczne i techniczne. Mogą
                    to być zajęcia plastyczne, muzyczne, sportowe, a także z
                    programowania i robotyki.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Warsztaty dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli mogą skorzystać z naszych warsztatów, aby rozwijać
                    swoje pasje i zdobywać nowe umiejętności. Oferujemy kursy
                    gotowania, warsztaty z rękodzieła, zajęcia sportowe oraz
                    szkolenia z programowania i nowych technologii.
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
                  <CardTitle>Warsztaty plastyczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nasze warsztaty plastyczne dla dzieci i dorosłych rozwijają
                    kreatywność i zdolności manualne. Uczestnicy mogą
                    eksperymentować z różnymi technikami i materiałami, tworząc
                    unikalne dzieła sztuki.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Zajęcia sportowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Zajęcia sportowe to świetny sposób na aktywne spędzanie
                    czasu. Oferujemy różnorodne formy aktywności fizycznej,
                    takie jak joga, pilates, taniec czy gry zespołowe,
                    dostosowane do różnych grup wiekowych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Kursy gotowania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kursy gotowania pozwalają uczestnikom odkrywać nowe smaki i
                    techniki kulinarne. Nasi doświadczeni instruktorzy prowadzą
                    zajęcia, które inspirują do eksperymentowania w kuchni i
                    rozwijania kulinarnych umiejętności.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Warsztaty z programowania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Oferujemy warsztaty z programowania dla dzieci i dorosłych
                    na różnych poziomach zaawansowania. Uczestnicy uczą się
                    podstaw kodowania, tworzenia aplikacji i gier, co rozwija
                    ich umiejętności logicznego myślenia i rozwiązywania
                    problemów.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Rękodzieło</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Warsztaty rękodzieła to okazja do tworzenia pięknych i
                    praktycznych przedmiotów. Uczestnicy uczą się różnych
                    technik, takich jak szydełkowanie, haftowanie, decoupage czy
                    tworzenie biżuterii, rozwijając swoje zdolności manualne i
                    kreatywność.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Zajęcia muzyczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Zajęcia muzyczne dla dzieci i dorosłych to świetna okazja do
                    rozwijania talentów muzycznych. Oferujemy lekcje gry na
                    różnych instrumentach, naukę śpiewu oraz zajęcia z teorii
                    muzyki.
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
                Jak wyglądają nasze zajęcia warsztatowe?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">
                  Nasze zajęcia warsztatowe
                </span>{" "}
                są prowadzone przez doświadczonych instruktorów, którzy dbają o
                przyjazną i wspierającą atmosferę. Każde zajęcia są dostosowane
                do poziomu zaawansowania uczestników, zapewniając rozwój
                umiejętności w wybranej dziedzinie.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Zajęcia odbywają się w małych grupach, co umożliwia indywidualne
                podejście do każdego uczestnika. Zapewniamy wszystkie niezbędne
                materiały i narzędzia, a także wygodne i bezpieczne warunki do
                nauki i twórczej pracy.
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
                  alt="workshop session"
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
                  alt="child in workshop"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia warsztatowe dla dzieci i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>wspierają rozwój kreatywności i umiejętności manualnych,</p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>pomagają w nauce nowych umiejętności i rozwijaniu pasji,</p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>
                  oferują szeroki wybór tematyki warsztatów dostosowanych do
                  różnych grup wiekowych,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewniają przyjazną i wspierającą atmosferę podczas zajęć,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>dostępne przez cały rok, z ofertą specjalną na wakacje.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Dołącz do naszych warsztatów</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nasze zajęcia warsztatowe to doskonała okazja do rozwijania
              umiejętności, poznawania nowych pasji i spędzania czasu w twórczy
              sposób. Zapraszamy do zapoznania się z naszą ofertą i dołączenia
              do zajęć, które są dostępne przez cały rok, z ofertą specjalną na
              wakacje.
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

export default Warsztaty;
