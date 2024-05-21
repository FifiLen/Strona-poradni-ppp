import { AlertDemo } from "/components/Alert";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaRegArrowAltCircleRight } from "react-icons/fa";

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100/20 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className=" border-b border-gray-300 text-white py-4 md:py-6 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl pb-2 font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Wsparcie i rozwój dla osób dorosłych
          </h2>
        </div>
      </div>
      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/psycholog3.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Terapia dla Par
              </h2>

              <p className="text-gray-700 text-base text-left">
                Terapia par to proces, w którym dwoje ludzi pracuje nad poprawą
                jakości swojego związku poprzez rozwój wzorców komunikacji i
                interakcji, naukę rozwiązywania konfliktów oraz komunikowania
                własnych uczuć i potrzeb oraz zrozumienie partnera.
                <br />
                <br />
                Terapia skierowana jest zarówno do osób znajdujących się w
                związkach formalnych i nieformalnych, do osób znajdujących się w
                związkach partnerskich lub jednopłciowych.
                <br />
                <br />
                Podczas terapii osoby uczą się skutecznej komunikacji, ustalania
                przyczyn konfliktów oraz sposobów na ich rozwiązywanie z
                korzyścią dla obu stron. Ponadto, jednym z jej celów jest ogólna
                poprawa relacji oraz zwiększenie poczucia bliskości
                emocjonalnej.
              </p>

              <Link
                href={"/terapia_par"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow">
                  Kiedy rozważać terapię dla par? <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/psycholog1.jpg"
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
                Wsparcie psychologiczne
              </h2>

              <p className="text-gray-700 text-base text-left">
                Wsparcie psychologiczne dla dorosłych ma na celu pomóc osobom w
                radzeniu sobie z trudnościami życiowymi, stresem, problemami
                emocjonalnymi czy zaburzeniami psychicznymi. Indywidualne sesje
                z doświadczonym psychologiem umożliwiają zidentyfikowanie i
                zrozumienie źródeł problemów, a następnie opracowanie
                skutecznych strategii radzenia sobie. Wsparcie psychologiczne
                może obejmować różnorodne techniki terapeutyczne, dostosowane do
                indywidualnych potrzeb klienta, umożliwiając osiągnięcie
                większej równowagi emocjonalnej i poprawę jakości życia.
              </p>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow">
                  Umów wizytę u Psychologa <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden lg:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/psycholog2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={false}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Psychoterapia
              </h2>

              <p className="text-gray-700 text-base text-left">
                Psychoterapia dla dorosłych to proces terapeutyczny, mający na
                celu wsparcie osób w radzeniu sobie z trudnościami
                emocjonalnymi, psychologicznymi i behawioralnymi. W bezpiecznym
                i poufnym otoczeniu, doświadczony terapeuta pomaga klientom
                zgłębić i zrozumieć źródła ich problemów, rozwijać nowe
                strategie radzenia sobie i wprowadzać pozytywne zmiany w życiu.
                Psychoterapia jest dostosowana do indywidualnych potrzeb każdej
                osoby, umożliwiając pracę nad różnorodnymi kwestiami, takimi jak
                lęk, depresja, stres, problemy w relacjach czy kryzysy życiowe
              </p>

              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow">
                  Umów wizytę u Psychoterapeuty <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlertDemo />
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
