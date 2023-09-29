import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="bg-gradient-to-r from-[#322c6b] to-[#003e77] text-white py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Wsparcie jakiego potrzebujesz
          </h2>
        </div>
      </div>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0">
              <img
                src="/assets/psycholog1.jpg"
                className="rounded-md max-w-full h-auto"
                alt="diagnoza uzależnień"
              />
            </div>
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Wsparcie psychologiczne dla dorosłych
              </h2>
              
              <p className="text-gray-700 text-base">
              Wsparcie psychologiczne dla dorosłych ma na celu pomóc osobom w radzeniu sobie z trudnościami życiowymi, stresem, problemami emocjonalnymi czy zaburzeniami psychicznymi. Indywidualne sesje z doświadczonym psychologiem umożliwiają zidentyfikowanie i zrozumienie źródeł problemów, a następnie opracowanie skutecznych strategii radzenia sobie. Wsparcie psychologiczne może obejmować różnorodne techniki terapeutyczne, dostosowane do indywidualnych potrzeb klienta, umożliwiając osiągnięcie większej równowagi emocjonalnej i poprawę jakości życia.              </p>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                {/* ... */}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Psychoterapia dla dorosłych
              </h2>
              <p className="text-gray-700 text-base">
              Psychoterapia dla dorosłych to proces terapeutyczny, mający na celu wsparcie osób w radzeniu sobie z trudnościami emocjonalnymi, psychologicznymi i behawioralnymi. W bezpiecznym i poufnym otoczeniu, doświadczony terapeuta pomaga klientom zgłębić i zrozumieć źródła ich problemów, rozwijać nowe strategie radzenia sobie i wprowadzać pozytywne zmiany w życiu. Psychoterapia jest dostosowana do indywidualnych potrzeb każdej osoby, umożliwiając pracę nad różnorodnymi kwestiami, takimi jak lęk, depresja, stres, problemy w relacjach czy kryzysy życiowe
              </p>
             <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                {/* ... */}
              </button>
            </div>
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 order-1 md:order-2">
              <img
                src="/assets/psycholog2.jpg"
                className="rounded-md max-w-full h-auto"
                alt="terapia uzależnień"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0">
              <img
                src="/assets/psycholog3.jpg"
                className="rounded-md max-w-full h-auto"
                alt="diagnoza uzależnień"
              />
            </div>
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Terapia dla par
              </h2>
              <p className="text-gray-700 text-base">
              Terapia dla par to specjalistyczna forma wsparcia skierowana do osób pragnących poprawić jakość swojego związku. W trakcie sesji, prowadzonych przez doświadczonego terapeutę, pary mają okazję pracować nad komunikacją, rozwiązywaniem konfliktów i wzajemnym zrozumieniem. Terapia pomaga w identyfikacji i zmianie destrukcyjnych wzorców zachowań, umożliwiając budowanie głębszej więzi i satysfakcjonującego związku. Obejmuje ona zarówno związki w kryzysie, jak i te, które pragną pogłębić wzajemne zrozumienie i bliskość.
              </p>              
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                {/* ... */}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center md:justify-start items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">

        
        <button className="w-3/4 md:w-1/2 lg:w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4 ">
          <a href="/Cennik_dorosli" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
