import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <header className="bg-gradient-to-r from-[#2c6b4b] to-[#007759] text-white py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3">
            Centrum uzależnień
          </h2>
        </div>
      </header>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Obrazek (zmieniony układ na telefonach) */}
            <div className="text-center lg:flex-col-reverse lg:flex">
              <img
                src="/assets/uzaleznienie.jpg"
                className="rounded-md"
                alt="diagnoza uzależnień"
              />
            </div>

            {/* Tekst informacyjny */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Terapia E-uzależnień
              </h2>
              <p className="text-gray-700 text-base">
                Zapraszamy dorosłych do skorzystania z naszej usługi terapii
                uzależnień. Oto, dlaczego warto skorzystać:
              </p>
              <ul className="text-gray-700 text-base list-disc list-inside mt-4">
                <li>Indywidualne sesje terapeutyczne dostosowane do Twoich potrzeb.</li>
                <li>Doświadczeni specjaliści specjalizujący się w terapii uzależnień u dorosłych.</li>
                <li>Wsparcie w identyfikowaniu i rozumieniu trudności związanych z uzależnieniami.</li>
                <li>Skuteczne narzędzia do określenia strategii i podejścia terapeutycznego.</li>
              </ul>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                <a href="/TerapiaUzaleznien" className="text-white flex items-center gap-1">
                  Więcej o Terapii E-uzależnień <FaArrowRight className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Zajęcia dla dzieci z WWRD */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Tekst informacyjny */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Terapia uzależnień
              </h2>
              <p className="text-gray-700 text-base">
                Zapraszamy do skorzystania z naszych usług terapii uzależnień. Oto, dlaczego warto skorzystać:
              </p>
              <ul className="text-gray-700 text-base list-disc list-inside mt-4">
                <li>Indywidualne podejście dostosowane do Twoich potrzeb.</li>
                <li>Profesjonalni terapeuci i psycholodzy specjalizujący się w pracy z uzależnieniami.</li>
                <li>Wsparcie w radzeniu sobie z trudnościami emocjonalnymi i psychologicznymi związanymi z uzależnieniami.</li>
                <li>Skuteczne narzędzia do poprawy samopoczucia i jakości życia po wyjściu z uzależnienia.</li>
              </ul>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                <a href="/TerapiaUzaleznien" className="text-white flex items-center gap-1">
                  Więcej o Terapii uzależnień <FaArrowRight className="ml-2" />
                </a>
              </button>
            </div>

            {/* Obrazek (zmieniony układ na telefonach) */}
            <div className="text-center lg:flex-col-reverse lg:flex">
              <img
                src="/assets/uzaleznienie1.jpg"
                className="rounded-md"
                alt="terapia uzależnień"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Obrazek (zmieniony układ na telefonach) */}
            <div className="text-center lg:flex-col-reverse lg:flex">
              <img
                src="/assets/uzaleznienie4.jpg"
                className="rounded-md"
                alt="diagnoza uzależnień"
              />
            </div>

            {/* Tekst informacyjny */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Diagnoza uzależnień
              </h2>
              <p className="text-gray-700 text-base">
                Zapraszamy dorosłych do skorzystania z naszej usługi diagnozy uzależnień. Oto, dlaczego warto skorzystać:
              </p>
              <ul className="text-gray-700 text-base list-disc list-inside mt-4">
                <li>Indywidualne sesje diagnozy dostosowane do Twoich potrzeb.</li>
                <li>Doświadczeni specjaliści specjalizujący się w diagnozowaniu uzależnień u dorosłych.</li>
                <li>Wsparcie w identyfikowaniu i rozumieniu trudności związanych z uzależnieniami.</li>
                <li>Skuteczne narzędzia do określenia strategii i podejścia terapeutycznego.</li>
              </ul>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                <a href="/DiagnozaUzaleznien" className="text-white flex items-center gap-1">
                  Więcej o Diagnozie uzależnień <FaArrowRight className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Zajęcia dla dzieci z WWRD */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Tekst informacyjny */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Resocjalizacja osób uzależnionych
              </h2>
              <p className="text-gray-700 text-base">
                Oferujemy profesjonalną resocjalizację dla osób uzależnionych, która pomaga w reintegracji społecznej i pokonywaniu problemów wynikających z uzależnień. Oto, dlaczego warto skorzystać z naszych usług:
              </p>
              <ul className="text-gray-700 text-base list-disc list-inside mt-4">
                <li>Indywidualne podejście dostosowane do potrzeb każdej osoby uzależnionej.</li>
                <li>Skuteczne narzędzia do reintegracji społecznej i pokonywania uzależnień.</li>
                <li>Doświadczeni specjaliści specjalizujący się w pracy z osobami uzależnionymi.</li>
                <li>Wsparcie i narzędzia do budowania zdrowego, wolnego od uzależnień życia społecznego.</li>
              </ul>
              <button className="px-3 py-4 rounded-md bg-[#2c6b4b] text-white mt-4 hidden">
                <a href="/ResocjalizacjaUzaleznionych" className="text-white flex items-center gap-1">
                  Więcej o Resocjalizacji uzależnionych <FaArrowRight className="ml-2" />
                </a>
              </button>
            </div>

            {/* Obrazek (zmieniony układ na telefonach) */}
            <div className="text-center lg:flex-col-reverse lg:flex">
              <img
                src="/assets/uzaleznienia3.jpg"
                alt="resocjalizacja uzależnionych"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-left items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">
        <button className="w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4 hidden">
          <a href="/Cennik_centrum" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
