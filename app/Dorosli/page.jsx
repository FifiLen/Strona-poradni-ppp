import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <header className="bg-gradient-to-r from-[#322c6b] to-[#003e77] text-white py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3">
            Wsparcie dla ciebie
          </h2>
        </div>
      </header>

      <section className="py-6 md:py-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Obrazek (zmieniony układ na telefonach) */}
      <div className="text-center lg:flex-col-reverse lg:flex">
        <img
          src="/assets/psycholog1.jpg"
          className="rounded-md"
          alt="Terapia uzależnień"
        />
      </div>

      {/* Tekst informacyjny */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
          Wsparcie Psychologiczne dla Dorosłych
        </h2>
        <p className="text-gray-700 text-base">
          Zapraszamy dorosłych do skorzystania z naszej usługi profesjonalnej
          terapii psychologicznej. Oto, dlaczego warto skorzystać:
        </p>
        <ul className="text-gray-700 text-base list-disc list-inside mt-4">
          <li>Indywidualne sesje terapeutyczne dostosowane do Twoich potrzeb.</li>
          <li>Doświadczeni specjaliści specjalizujący się w psychoterapii dla dorosłych.</li>
          <li>Wsparcie w identyfikowaniu i rozumieniu trudności emocjonalnych i psychologicznych.</li>
          <li>Skuteczne narzędzia do określenia strategii i podejścia terapeutycznego.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#322c6b] text-white mt-4 hidden">
          <a href="/ProfesjonalnaTerapia" className="text-white flex items-center gap-1">
            Więcej o Naszej Profesjonalnej Terapii <FaArrowRight className="ml-2" />
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
          Psychoterapia dla Dorosłych
        </h2>
        <p className="text-gray-700 text-base">
          Zapraszamy do skorzystania z naszych usług psychoterapii dla dorosłych. Oto, dlaczego warto skorzystać:
        </p>
        <ul className="text-gray-700 text-base list-disc list-inside mt-4">
          <li>Indywidualne podejście dostosowane do Twoich potrzeb.</li>
          <li>Profesjonalni terapeuci specjalizujący się w pracy z dorosłymi pacjentami.</li>
          <li>Wsparcie w radzeniu sobie z trudnościami emocjonalnymi i psychologicznymi.</li>
          <li>Skuteczne narzędzia do poprawy samopoczucia i jakości życia.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#322c6b] text-white mt-4 hidden">
          <a href="/PsychoterapiaDlaDoroslych" className="text-white flex items-center gap-1">
            Więcej o Psychoterapii dla Dorosłych <FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>

      {/* Obrazek (zmieniony układ na telefonach) */}
      <div className="text-center lg:flex-col-reverse lg:flex">
        <img
          src="/assets/psycholog2.jpg"
          className="rounded-md"
          alt="Psychoterapia dla dorosłych"
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
          src="/assets/psycholog3.jpg"
          className="rounded-md"
          alt="Terapia dla par"
        />
      </div>

      {/* Tekst informacyjny */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
          Terapia dla Par
        </h2>
        <p className="text-gray-700 text-base">
          Zapraszamy pary do skorzystania z naszej usługi terapii dla par. Oto, dlaczego warto skorzystać:
        </p>
        <ul className="text-gray-700 text-base list-disc list-inside mt-4">
          <li>Indywidualne sesje terapeutyczne dla par dostosowane do Waszych potrzeb.</li>
          <li>Doświadczeni specjaliści specjalizujący się w terapii dla par.</li>
          <li>Wsparcie w identyfikowaniu i rozumieniu trudności w związku.</li>
          <li>Skuteczne narzędzia do poprawy komunikacji i harmonii w związku.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#322c6b] text-white mt-4 hidden">
          <a href="/TerapiaDlaPar" className="text-white flex items-center gap-1">
            Więcej o Terapii dla Par <FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Zajęcia dla dzieci z WWRD */}
  

      <div className="flex justify-left items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">
        <button className="w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4">
          <a href="/Cennik_centrum" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
