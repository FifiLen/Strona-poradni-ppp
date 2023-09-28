import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <header className="bg-gradient-to-r from-[#ff9c67] to-[#ffb167] text-white py-4 md:py-6">
  <div className="flex justify-center items-center">
    <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 pt-3">Wsparcie i rozwój dla Twojego dziecka</h2>
  </div>
</header>


      {/* Zajęcia dla dzieci z WWRD */}
      <section className="py-8 md:py-12 mt-6 mb-8 md:mb-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
      {/* Tekst informacyjny */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center md:text-left">Zajęcia dla dzieci z WWRD</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Zapraszamy dzieci do udziału w naszych Warsztatowych Warsztatach Rozwojowych Dzieci (WWRD). Oto, dlaczego warto wziąć udział:
        </p>
        <ul className="text-gray-700 text-sm md:text-base list-disc list-inside mt-2 md:mt-4">
          <li>Dostosowane zajęcia do wieku i potrzeb każdego dziecka.</li>
          <li>Zabawne i interaktywne lekcje, które rozwijają kreatywność i umiejętności interpersonalne.</li>
          <li>Doświadczeni terapeuci i pedagodzy pracujący z dziećmi.</li>
          <li>Wsparcie i narzędzia do radzenia sobie z emocjami.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#ff9c67] text-white mt-4">
  <a href="/WWRD" className="text-white flex items-center gap-1">
    Więcej o WWRD <FaArrowRight className="ml-2" />
  </a>
</button>
      </div>

      {/* Filmik */}
      <div className="text-center">
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md"
        >
          <source src="/assets/movie7.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
      </div>
    </div>
  </div>
</section>





{/* Zajęcia dla dzieci z WWRD */}
<section className="py-12 mt-6 mb-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Filmik */}
      <div className="text-center">
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md"
        >
          <source src="/assets/movie5.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
      </div>

      {/* Tekst informacyjny */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Zajęcia dla dzieci z Integracji sensorycznej</h2>
        <p className="text-gray-700 text-base">
          Zapraszamy dzieci do udziału w naszych zajęciach z zakresu Integracji sensorycznej. Oto, dlaczego warto wziąć udział:
        </p>
        <ul className="text-gray-700 text-base list-disc list-inside mt-4">
          <li>Dostosowane zajęcia do wieku i potrzeb każdego dziecka.</li>
          <li>Zabawne i interaktywne lekcje, które rozwijają kreatywność i umiejętności interpersonalne.</li>
          <li>Doświadczeni terapeuci i pedagodzy pracujący z dziećmi.</li>
          <li>Wsparcie i narzędzia do radzenia sobie z emocjami.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#ff9c67] text-white mt-4">
          <a href="/IntegracjaSensoryczna" className="text-white flex items-center gap-1">
            Więcej o Integracji sensorycznej <FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  </div>
</section>




      {/* Zajęcia dla dzieci z WWRD */}
      <section className="py-8 md:py-12 mt-6 mb-8 md:mb-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
      {/* Tekst informacyjny */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center md:text-left">Logopeda dziecięcy</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Nasz logopeda dziecięcy oferuje profesjonalne wsparcie w rozwoju mowy i komunikacji u dzieci. Oto, dlaczego warto skorzystać z naszych usług:
        </p>
        <ul className="text-gray-700 text-sm md:text-base list-disc list-inside mt-2 md:mt-4">
          <li>Indywidualne podejście dostosowane do potrzeb każdego dziecka.</li>
          <li>Zabawne i interaktywne zajęcia, które pomagają poprawić wymowę i umiejętności komunikacyjne.</li>
          <li>Doświadczony logopeda specjalizujący się w pracy z dziećmi.</li>
          <li>Wsparcie i narzędzia do rozwijania umiejętności językowych.</li>
        </ul>
        <button className="px-3 py-4 rounded-md bg-[#ff9c67] text-white mt-4">
          <a href="/Logopeda" className="text-white flex items-center gap-1">
            Więcej o Logopedii <FaArrowRight className="ml-2" />
          </a>
        </button>
      </div>

      {/* Filmik */}
      <div className="text-center">
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-lg shadow-md"
        >
          <source src="/assets/movie13.mp4" type="video/mp4" />
          Twoja przeglądarka nie obsługuje odtwarzacza wideo.
        </video>
      </div>
    </div>
  </div>
</section>





      {/* Inne usługi */}
      <section className="bg-[#ffffff00] text-white py-12">
        <h4 className=' mb-14 text-center text-2xl font-semibold text-slate-800'>Inne usługi</h4>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Usługa 1 */}
            <div className="bg-[#ff9c67] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg  font-semibold mb-4">Diagnoza Psychologiczna</h3>
              <p className="text-gray-100 text-base ">
                Przeprowadzamy dokładne badania psychologiczne, pomagając zrozumieć potrzeby i możliwości każdego dziecka.
              </p>
            </div>

            {/* Usługa 2 */}
            <div className="bg-[#ff9c67] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg  font-semibold mb-4">Wsparcie Pedagogiczne</h3>
              <p className="text-gray-100 text-base ">
                Indywidualne konsultacje pedagogiczne i zajęcia, które wspierają rozwój edukacyjny dziecka.
              </p>
            </div>

            {/* Usługa 3 */}
            <div className="bg-[#ff9c67] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg  font-semibold mb-4">Terapia Dzieci i Rodzin</h3>
              <p className="text-gray-100 text-base ">
                Pomagamy dzieciom i rodzinom radzić sobie z trudnościami emocjonalnymi i interpersonalnymi.
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex justify-left items-center w-full mt-14 ml-28 pb-10'><button className=" w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4">
  <a href="/Cennik_dzieci" className="text-slate-800 flex items-center justify-between gap-1">
    Cennik wraz z wszystkimi usługami<FaArrowRight className="ml-2" />
  </a>
</button></div>
        
      </section>
      
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
