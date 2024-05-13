import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { CardFooter } from "../../../components/ui/card";
import Link from "next/link";

const TerapiaPar = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="border-b border-gray-300 py-4 md:py-6 ">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Badanie dla posiadaczy broni
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/prawo_bron.jpg"
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
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Prawo i regulacje dotyczące posiadania broni w Polsce
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Zanim zdecydujesz się na staranie o pozwolenie na broń, musisz
                zapoznać się z Ustawą z 21 maja 1999 roku o broni i amunicji.
                Aby uzyskać prawo do posiadania broni, niezbędne jest przejście
                przez szereg formalności, w tym zdanie egzaminu, złożenie
                wniosku o wydanie promesy na zakup broni oraz zdobycie
                odpowiedniego zaświadczenia. Proces ten zaczyna się od
                zgłoszenia w odpowiednim wydziale policji, na przykład w
                Warszawie znajduje się to w Komendzie Stołecznej Policji przy
                ulicy Nowolipie 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="">
        <div className=" max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className=" grid grid-cols-2 gap-10">
            <div className=" grid gap-10">
              <Card className=" border-red-500 bg-red-100">
                <CardHeader>
                  <CardTitle>
                    Badania wymagane do uzyskania pozwolenia na broń
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Aby złożyć wniosek o pozwolenie na broń, konieczne jest
                    przedstawienie dwóch orzeczeń: psychologicznego i
                    lekarskiego, potwierdzających brak przeciwwskazań do
                    posługiwania się bronią. Te&nbsp;dokumenty możesz otrzymać
                    po kompleksowym badaniu w naszej placówce przy ul. Magnolii
                    25, gdzie przeprowadzamy równocześnie badania psychologiczne
                    i lekarskie. Cały proces badawczy zajmuje od 2,5 do 3
                    godzin, po czym otrzymujesz oba dokumenty wymagane do
                    złożenia na policji.
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
              <Card className=" border-orange-800 bg-orange-100">
                <CardHeader>
                  <CardTitle>
                    Co obejmują badania psychologiczne i&nbsp;lekarskie?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <b>Badania psychologiczne:</b> Psycholog ocenia poziom
                    umysłowy, funkcjonowanie osobowości, zwłaszcza w trudnych
                    sytuacjach, a także dojrzałość społeczną i emocjonalną.
                    Badanie to sprawdza, czy badany nie wykazuje zaburzeń
                    wymienionych w Rozporządzeniu Ministra Zdrowia z dnia 23
                    grudnia 2005 roku, które wykluczają możliwość wydania
                    pozwolenia na broń.
                    <br />
                    <br />
                    <b>Badania lekarskie:</b> Lekarz ocenia ogólny stan zdrowia,
                    w tym zdolność do bezpiecznego posługiwania się bronią.
                    Orzeczenie lekarskie potwierdza brak przeciwwskazań
                    zdrowotnych do posiadania broni.
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
      </section> */}

      <section className="mt-10 py-6 md:py-24 mb-10 max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Tekst informacyjny */}
            <div className="flex-col justify-start items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Badania wymagane do uzyskania pozwolenia na broń
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Aby złożyć wniosek o pozwolenie na broń, konieczne jest
                przedstawienie dwóch orzeczeń: psychologicznego i lekarskiego,
                potwierdzających brak przeciwwskazań do posługiwania się bronią.
                Te dokumenty możesz otrzymać po kompleksowym badaniu w naszej
                placówce przy ul. Magnolii 25, gdzie przeprowadzamy równocześnie
                badania psychologiczne i lekarskie. Cały proces badawczy zajmuje
                od 2,5 do 3 godzin, po czym otrzymujesz oba dokumenty wymagane
                do złożenia na policji.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Co obejmują badania psychologiczne i lekarskie?
                  </AccordionTrigger>
                  <AccordionContent>
                    <b>Badania psychologiczne:</b> Psycholog ocenia poziom
                    umysłowy, funkcjonowanie osobowości, zwłaszcza w trudnych
                    sytuacjach, a także dojrzałość społeczną i emocjonalną.
                    Badanie to sprawdza, czy badany nie wykazuje zaburzeń
                    wymienionych w Rozporządzeniu Ministra Zdrowia z dnia 23
                    grudnia 2005 roku, które wykluczają możliwość wydania
                    pozwolenia na broń. <br /> <br />
                    <b>Badania lekarskie:</b>Lekarz ocenia ogólny stan zdrowia,
                    w tym zdolność do bezpiecznego posługiwania się bronią.
                    Orzeczenie lekarskie potwierdza brak przeciwwskazań
                    zdrowotnych do posiadania broni.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Ważność badań</AccordionTrigger>
                  <AccordionContent>
                    Orzeczenia psychologiczne i lekarskie są ważne przez 3
                    miesiące od daty badania. W przypadku broni bojowej lub
                    gazowej, badania należy powtarzać co 5 lat. Nowelizacja
                    ustawy przewiduje również wprowadzenie obowiązkowych
                    okresowych badań dla posiadaczy broni palnej do celów
                    łowieckich od 1 kwietnia 2023 roku.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Gdzie znaleźć więcej informacji?
                  </AccordionTrigger>
                  <AccordionContent>
                    Szczegółowe informacje o procedurach i wymaganiach
                    dotyczących uzyskania pozwolenia na broń, jak również lista
                    upoważnionych psychologów i lekarzy, dostępna jest na
                    stronie Komendy Stołecznej Policji oraz w Wydziale
                    Postępowań Administracyjnych. Pełne informacje znajdziesz,
                    odwiedzając ich oficjalną stronę internetową.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[38rem] h-[35rem] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <Image
                  src="/assets/badania_bron.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto my-20">
        <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
          Najczęściej zadawane pytania
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. Jakie są główne wymagania, aby ubiegać się o pozwolenie na
              posiadanie broni w Polsce?
            </AccordionTrigger>
            <AccordionContent>
              Aby ubiegać się o pozwolenie na broń, konieczne jest przejście
              przez szereg formalności, w tym zdanie egzaminu, złożenie wniosku
              o promesę na zakup broni oraz zdobycie odpowiedniego
              zaświadczenia.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. Gdzie można zgłosić się po pozwolenie na broń?
            </AccordionTrigger>
            <AccordionContent>
              W Warszawie, proces ubiegania się o pozwolenie na broń rozpoczyna
              się w Komendzie Stołecznej Policji przy ulicy Nowolipie 2, w
              Wydziale Postępowań Administracyjnych.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Jakie badania są wymagane do uzyskania pozwolenia na broń?
            </AccordionTrigger>
            <AccordionContent>
              Wymagane są dwa orzeczenia: psychologiczne i lekarskie, które
              potwierdzają brak przeciwwskazań do posługiwania się bronią.
              Badania te przeprowadzane są równocześnie i trwają od 2,5 do 3
              godzin.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Jak długo ważne są orzeczenia wydane po badaniach?
            </AccordionTrigger>
            <AccordionContent>
              Orzeczenia psychologiczne i lekarskie są ważne przez 3 miesiące od
              daty badania. Dla broni bojowej lub gazowej konieczność
              powtarzania badań występuje co 5 lat.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Czy można znaleźć listę upoważnionych psychologów i lekarzy do
              przeprowadzania badań?
            </AccordionTrigger>
            <AccordionContent className="">
              Tak, lista upoważnionych psychologów i lekarzy dostępna jest na
              oficjalnej stronie Komendy Stołecznej Policji oraz w Wydziale
              Postępowań Administracyjnych.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Co obejmuje badanie psychologiczne?
            </AccordionTrigger>
            <AccordionContent className="">
              Badanie psychologiczne obejmuje ocenę poziomu umysłowego,
              osobowości, dojrzałości społecznej i emocjonalnej, a także
              sprawdzenie, czy badany nie wykazuje zaburzeń psychologicznych
              wykluczających możliwość posiadania broni.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              7. Jakie są najbliższe zmiany w przepisach dotyczących badań na
              broń?
            </AccordionTrigger>
            <AccordionContent className="">
              Od 1 kwietnia 2023 roku, posiadacze broni palnej do celów
              łowieckich będą podlegać obowiązkowym okresowym badaniom
              psychologicznym i lekarskim zgodnie z nowelizacją ustawy o broni i
              amunicji.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className=" max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Zapisz się na badanie</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Jeśli planujesz uzyskać pozwolenie na broń, niezbędne jest
              przeprowadzenie kompleksowych badań psychologicznych i lekarskich.
              Oferujemy szybką i profesjonalną obsługę w naszej placówce przy
              ul. Magnolii 25, gdzie możesz otrzymać wszystkie wymagane
              dokumenty w ciągu jednego spotkania. Nasze badania są
              przeprowadzane zgodnie z obowiązującymi przepisami prawa, a wyniki
              są dostępne od ręki, co zapewnia sprawną realizację procedury
              aplikacyjnej.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Kontakt"}
              className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
            >
              Umów się na badania
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
