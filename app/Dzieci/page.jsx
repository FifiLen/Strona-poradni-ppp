import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="bg-gradient-to-r from-[#ff9c67] to-[#ffb167] text-white py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
          Wsparcie i rozwój dla Twojego dziecka
          </h2>
        </div>
      </div>

      <section className="py-6 md:py-12 mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0">
    <video
        src="/assets/movie7.mp4"
        autoPlay
        loop
        muted
        className="rounded-md max-w-full h-auto"
        alt="diagnoza uzależnień"
        loading="lazy"
    />
</div>

            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Zajęcia dla Dzieci WWRD
              </h2>
              
              <p className="text-gray-700 text-base">
              Wczesne Wspomaganie Rozwoju Dziecka (WWRD) to program mający na celu wsparcie dzieci w kluczowych aspektach rozwoju. Skoncentrowany jest na wczesnym wykrywaniu i interwencji w przypadku różnorodnych trudności i zaburzeń rozwojowych. Dzięki indywidualnemu podejściu i dostosowanym metodom, WWRD pomaga w rozwijaniu umiejętności motorycznych, poznawczych, społecznych i emocjonalnych, umożliwiając każdemu dziecku osiągnięcie pełni swojego potencjału.              </p>
              <button className="px-3 py-4 rounded-md bg-[#ff9c67] mt-4">
               <a href="/WWRD" className='text-white  flex justify-center items-center gap-3'>Dowiedz się więcej o WWRD <FaArrowRight /></a> 
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
              Zajęcia dla dzieci z Integracji sensorycznej
              </h2>
              <p className="text-gray-700 text-base">
              Integracja sensoryczna to kluczowy proces, pomagający dzieciom prawidłowo przetwarzać informacje zmysłowe. Zajęcia z terapii sensorycznej skierowane są do dzieci z trudnościami w tej dziedzinie, oferując szereg ćwiczeń i zabaw terapeutycznych. Celem jest wsparcie rozwoju motorycznego, poznawczego i społeczno-emocjonalnego, co przekłada się na lepsze funkcjonowanie dziecka w codziennym życiu. Terapia jest szczególnie korzystna dla dzieci z zaburzeniami rozwojowymi, takimi jak autyzm czy ADHD.
              </p>
              <button className="px-3 py-4 rounded-md bg-[#ff9c67] mt-4">
               <a href="/SI" className='text-white  flex justify-center items-center gap-3'>Dowiedz się więcej integracji sensorycznej <FaArrowRight /></a> 
              </button>
            </div>
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 order-1 md:order-2">
            <video
        src="/assets/movie5.mp4"
        autoPlay
        loop
        muted
        className="rounded-md max-w-full h-auto"
        alt="diagnoza uzależnień"
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
    <video
        src="/assets/movie13.mp4"
        autoPlay
        loop
        muted
        className="rounded-md max-w-full h-auto"
        alt="diagnoza uzależnień"
        loading="lazy"
    />
</div>
            {/* Tekst informacyjny */}
            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Zajęcie z logopedą dla dzieci i młodzieży
              </h2>
              <p className="text-gray-700 text-base">
              Zajęcia z logopedą dla dzieci i młodzieży są skoncentrowane na diagnozowaniu i terapii różnorodnych trudności komunikacyjnych. Logopeda pracuje z dziećmi nad poprawą wymowy, rozwojem mowy i języka, a także nad komunikacją niewerbalną. Dzięki indywidualnemu podejściu oraz zastosowaniu różnorodnych metod i technik, terapia logopedyczna pomaga w przezwyciężaniu barier komunikacyjnych, wspierając rozwój językowy i umiejętności społeczne uczestników.
              </p>              
              <button className="px-3 py-4 rounded-md bg-[#ff9c67] mt-4">
               <a href="/Logopeda" className='text-white  flex justify-center items-center gap-3'>Więcej o Logopedii<FaArrowRight /></a> 
              </button>
            </div>
          </div>
        </div>
      </section>


      <div className="flex justify-center md:justify-start items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">
        <button className="w-3/4 md:w-1/2 lg:w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4 ">
          <a href="/Cennik_dzieci" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
