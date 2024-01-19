import Link from 'next/link';
import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const PoradniaPsychologicznoPedagogiczna = () => {
  return (
    <div className="bg-gray-100/20 font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-5xl pb-2 font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
          Wsparcie i rozwój dla Twojego dziecka
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
     

        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 mx-5">
            <div className="image-container">
              <img src="/assets/subhero.jpg" alt="dziecko ubierające maskę" />
            </div>


    {/* <video
        src="/assets/movie7.mp4"
        autoPlay
        loop
        muted
        className="rounded-2xl max-w-full h-auto"
        alt="diagnoza uzależnień"
        loading="lazy"
    /> */}
</div>

            {/* Tekst informacyjny */}
            <div className="mx-5 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl text-center md:text-left font-semibold mb-6 font-display text-slate-800">
                Zajęcia WWRD dla dzieci
              </h2>
              
              <p className="text-gray-700 text-base text-justify md:text-left">
              Wczesne Wspomaganie Rozwoju Dziecka (WWRD) to program mający na celu wsparcie dzieci w kluczowych aspektach rozwoju. Skoncentrowany jest na wczesnym wykrywaniu i interwencji w przypadku różnorodnych trudności i zaburzeń rozwojowych. Dzięki indywidualnemu podejściu i dostosowanym metodom, WWRD pomaga w rozwijaniu umiejętności motorycznych, poznawczych, społecznych i emocjonalnych, umożliwiając każdemu dziecku osiągnięcie pełni swojego potencjału.              </p>
              <Link href={"/WWRD"} className=' text-slate-800 flex justify-center md:block md:justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow'>Sprawdź jak uzyskać darmowe zajęcia WWRD <FaRegArrowAltCircleRight /></div></Link>
            </div>
          </div>
        </div>
      </section>






      <section className="py-6 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            

            {/* Tekst informacyjny */}
            <div className="mx-5 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl text-center md:text-left font-semibold mb-6 font-display text-slate-800">
              Zajęcia dla dzieci z&nbsp;Integracji sensorycznej
              </h2>
              
              <p className="text-gray-700 text-base text-justify md:text-left">
              Integracja sensoryczna to kluczowy proces, pomagający dzieciom prawidłowo przetwarzać informacje zmysłowe. Zajęcia z terapii sensorycznej skierowane są do dzieci z trudnościami w tej dziedzinie, oferując szereg ćwiczeń i zabaw terapeutycznych. Celem jest wsparcie rozwoju motorycznego, poznawczego i społeczno-emocjonalnego, co przekłada się na lepsze funkcjonowanie dziecka w codziennym życiu. Terapia jest szczególnie korzystna dla dzieci z zaburzeniami rozwojowymi, takimi jak autyzm czy ADHD.
              </p>
              <Link href={"/SI"} className=' text-slate-800 flex justify-center md:block md:justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow2'>Dowiedz się więcej o Integracji Sensorycznej <FaRegArrowAltCircleRight /></div></Link>
            </div>
            <div className="text-center mb-4 md:mb-0 mx-5">
            <div className="image-container">
              <img src="/assets/subhero3.jpg" alt="dziecko ubierające maskę" />
            </div>


    {/* <video
        src="/assets/movie7.mp4"
        autoPlay
        loop
        muted
        className="rounded-2xl max-w-full h-auto"
        alt="diagnoza uzależnień"
        loading="lazy"
    /> */}
</div>
          </div>
        </div>
      </section>










      <section className="py-6 md:py-24 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="text-center mb-4 md:mb-0 mx-5">
            <div className="image-container">
              <img src="/assets/logopeda.jpg" alt="dziecko ubierające maskę" />
            </div>


    {/* <video
        src="/assets/movie7.mp4"
        autoPlay
        loop
        muted
        className="rounded-2xl max-w-full h-auto"
        alt="diagnoza uzależnień"
        loading="lazy"
    /> */}
</div>

            {/* Tekst informacyjny */}
            <div className="mx-5 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl text-center md:text-left font-semibold mb-6 font-display text-slate-800">
              Zajęcia z logopedą <br />dla dzieci i młodzieży
              </h2>
              
              <p className="text-gray-700 text-base text-justify md:text-left">
              Zajęcia z logopedą dla dzieci i młodzieży są skoncentrowane na diagnozowaniu i terapii różnorodnych trudności komunikacyjnych. Logopeda pracuje z dziećmi nad poprawą wymowy, rozwojem mowy i języka, a także nad komunikacją niewerbalną. Dzięki indywidualnemu podejściu oraz zastosowaniu różnorodnych metod i technik, terapia logopedyczna pomaga w przezwyciężaniu barier komunikacyjnych, wspierając rozwój językowy i umiejętności społeczne uczestników.
              </p>
              <Link href={"/Logopeda"} className=' text-slate-800 flex justify-center md:block md:justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>Kiedy udać się do Logopedy? <FaRegArrowAltCircleRight /></div></Link>
            </div>
          </div>
        </div>
      </section>


      {/* <div className="flex justify-center md:justify-start items-center w-full mt-10 md:mt-14 ml-4 md:ml-24 pb-10">
        <button className="w-3/4 md:w-1/2 lg:w-1/2 px-4 py-6 rounded-md bg-[#ffffff00] border-2 border-slate-800 mt-4 ">
          <a href="/Cennik_dzieci" className="text-slate-800 flex items-center justify-between gap-1">
            Cennik wraz z wszystkimi usługami<FaRegArrowAltCircleRight />
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default PoradniaPsychologicznoPedagogiczna;
