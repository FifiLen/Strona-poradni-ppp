import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="bg-gradient-to-r from-[#2c6b4b] to-[#007759] text-white py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Centrum uzależnień
          </h2>
        </div>
      </div>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0">
              <img
                src="/assets/uzaleznienie.jpg"
                className="rounded-md max-w-full h-auto"
                alt="diagnoza uzależnień"
                loading="lazy"
              />
            </div>
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Terapia E-uzależnień
              </h2>
              
              <p className="text-gray-700 text-base">
               Zapraszamy dorosłych, dzieci i młodzież do skorzystania z terapii e-uzależnień. Oferujemy indywidualnie dostosowane sesje z doświadczonymi specjalistami, wsparcie w zrozumieniu i zwalczaniu uzależnień od elektroniki i internetu oraz skuteczne narzędzia i strategie terapeutyczne.
              </p>
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
                Terapia uzależnień
              </h2>
              <p className="text-gray-700 text-base">
              Zapraszamy dorosłych, dzieci i młodzież do skorzystania z terapii uzależnień od używek. Oferujemy indywidualnie dostosowane sesje z doświadczonymi specjalistami, wsparcie w zrozumieniu i zwalczaniu uzależnień od alkoholu, narkotyków i innych substancji oraz skuteczne narzędzia i strategie terapeutyczne.              </p>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                {/* ... */}
              </button>
            </div>
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 order-1 md:order-2">
              <img
                src="/assets/uzaleznienie2.jpg"
                className="rounded-md max-w-full h-auto"
                alt="terapia uzależnień"
                loading="lazy"
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
                src="/assets/uzaleznienie3.jpg"
                className="rounded-md max-w-full h-auto"
                alt="diagnoza uzależnień"
                loading="lazy"
              />
            </div>
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Diagnoza uzależnień
              </h2>
              <p className="text-gray-700 text-base">
              Zapraszamy na profesjonalną diagnozę uzależnień. Nasz zespół doświadczonych specjalistów korzysta z zaawansowanych metod oceny, aby zidentyfikować problem i zalecić odpowiednie działania. Diagnoza obejmuje analizę zachowań, wywiady oraz badania, dzięki którym możliwe jest zrozumienie głęboko zakorzenionych przyczyn uzależnienia i opracowanie skutecznej strategii leczenia. Oferujemy diagnozę uzależnień od używek oraz e-uzależnień, dostosowaną do potrzeb dorosłych, dzieci i młodzieży.              </p>
              
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
                Resocjalizacja osób uzależnionych
              </h2>
              <p className="text-gray-700 text-base">
              Zapraszamy do skorzystania z naszego programu resocjalizacji dla osób uzależnionych. Nasz doświadczony zespół oferuje wsparcie w procesie reintegracji z społeczeństwem, pomagając w budowaniu zdrowych relacji, rozwijaniu umiejętności życiowych i zawodowych oraz radzeniu sobie z trudnościami. Program resocjalizacji jest dostosowany do indywidualnych potrzeb każdego uczestnika, zapewniając wszechstronne podejście do leczenia uzależnień. Oferujemy pomoc w resocjalizacji osób uzależnionych od używek oraz e-uzależnień, z uwzględnieniem dorosłych, dzieci i młodzieży.              </p>
              <ul className="text-gray-700 text-base list-disc list-inside mt-4">
                {/* ... */}
              </ul>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                {/* ... */}
              </button>
            </div>
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 order-1 md:order-2">
              <img
                src="/assets/uzaleznienie4.jpg"
                className="rounded-md max-w-full h-auto"
                alt="resocjalizacja uzależnionych"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center md:justify-start items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">
        <button className="w-3/4 md:w-1/2 lg:w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4 ">
          <a href="/Cennik_centrum" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
