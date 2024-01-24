import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaRegArrowAltCircleRight } from 'react-icons/fa';

const PoradniaPsychologicznoPedagogiczna = () => {
  return (
   

<div className="bg-gray-100/20 font-sans overflow-x-hidden">
{/* Nagłówek */}
<div className=" border-b border-gray-300 text-white py-4 md:py-6">
  <div className="flex justify-center items-center">
    <h2 className="text-3xl font-display text-slate-800 md:text-3xl pb-2 font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
    Wsparcie i rozwój dla osoby dorosłej
    </h2>
  </div>
</div>



<section className="mt-10 py-6 md:py-24">
     

        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
            <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
              <img src="/assets/psycholog1.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
            </div>
        </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
            Wsparcie psychologiczne
              </h2>
              
               <p className="text-gray-700 text-base text-left">
               Wsparcie psychologiczne dla dorosłych ma na celu pomóc osobom w radzeniu sobie z trudnościami życiowymi, stresem, problemami emocjonalnymi czy zaburzeniami psychicznymi. Indywidualne sesje z doświadczonym psychologiem umożliwiają zidentyfikowanie i zrozumienie źródeł problemów, a następnie opracowanie skutecznych strategii radzenia sobie. Wsparcie psychologiczne może obejmować różnorodne techniki terapeutyczne, dostosowane do indywidualnych potrzeb klienta, umożliwiając osiągnięcie większej równowagi emocjonalnej i poprawę jakości życia.             
               </p>


              <Link href={"/Kontakt"} className=' text-slate-800 flex justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow'>Umów wizytę u Psychologa <FaRegArrowAltCircleRight /></div></Link>
            </div>
          </div>
        </div>

</section>



<section className="mt-10 py-6 md:py-24">
     

        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
            <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
              <img src="/assets/psycholog2.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
            </div>
        </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
            Psychoterapia
              </h2>
              
               <p className="text-gray-700 text-base text-left">
               Psychoterapia dla dorosłych to proces terapeutyczny, mający na celu wsparcie osób w radzeniu sobie z trudnościami emocjonalnymi, psychologicznymi i behawioralnymi. W bezpiecznym i poufnym otoczeniu, doświadczony terapeuta pomaga klientom zgłębić i zrozumieć źródła ich problemów, rozwijać nowe strategie radzenia sobie i wprowadzać pozytywne zmiany w życiu. Psychoterapia jest dostosowana do indywidualnych potrzeb każdej osoby, umożliwiając pracę nad różnorodnymi kwestiami, takimi jak lęk, depresja, stres, problemy w relacjach czy kryzysy życiowe
               </p>


              <Link href={"/Kontakt"} className=' text-slate-800 flex justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow'>Umów wizytę u Psychoterapeuty <FaRegArrowAltCircleRight /></div></Link>
            </div>
          </div>
        </div>

</section>


<section className="mt-10 py-6 md:py-24 mb-10">
     

        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
            <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
              <img src="/assets/psycholog3.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
            </div>
        </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
            Terapia dla Par
              </h2>
              
               <p className="text-gray-700 text-base text-left">
               Terapia dla par to specjalistyczna forma wsparcia skierowana do osób pragnących poprawić jakość swojego związku. W trakcie sesji, prowadzonych przez doświadczonego terapeutę, pary mają okazję pracować nad komunikacją, rozwiązywaniem konfliktów i wzajemnym zrozumieniem. Terapia pomaga w identyfikacji i zmianie destrukcyjnych wzorców zachowań, umożliwiając budowanie głębszej więzi i satysfakcjonującego związku. Obejmuje ona zarówno związki w kryzysie, jak i te, które pragną pogłębić wzajemne zrozumienie i bliskość.
               </p>


              <Link href={"/Kontakt"} className=' text-slate-800 flex justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow'>Umów terapię dla Par <FaRegArrowAltCircleRight /></div></Link>
            </div>
          </div>
        </div>

</section>



</div>
);
};

export default PoradniaPsychologicznoPedagogiczna;