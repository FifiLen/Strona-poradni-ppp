import Link from 'next/link';
import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Dzieci = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
          Wsparcie i rozwój dla Twojego dziecka
          </h2>
        </div>
      </div>



      <section className="mt-10 py-6 md:py-24">
     

        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
            <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
              <img src="/assets/subhero.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
            </div>
        </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
            <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia WWRD dla dzieci <br /> <span className=' text-sm text-gray-600'>(do czasu rozpoczęcia nauki w szkole)</span> 
              </h2>
              
               <p className="text-gray-700 text-base text-left mb-6">
              Wczesne Wspomaganie Rozwoju Dziecka (WWRD) to program mający na celu wsparcie dzieci w kluczowych aspektach rozwoju. Skoncentrowany jest na wczesnym wykrywaniu i interwencji w przypadku różnorodnych trudności i zaburzeń rozwojowych. Dzięki indywidualnemu podejściu i dostosowanym metodom, WWRD pomaga w rozwijaniu umiejętności motorycznych, poznawczych, społecznych i emocjonalnych, umożliwiając każdemu dziecku osiągnięcie pełni swojego potencjału.              </p>

              <Accordion type="single" collapsible>


              <AccordionItem value="item-1">
                <AccordionTrigger>Czym zajmuje się Logopeda w pracy z WWRD?</AccordionTrigger>
                <AccordionContent>
                Logopeda w Wczesnym Wspomaganiu Rozwoju Dziecka (WWRD) diagnozuje i terapeutycznie wspiera dzieci z opóźnieniami w rozwoju mowy. Opracowuje spersonalizowane plany terapeutyczne, prowadzi sesje terapeutyczne, wspiera rodziców w integracji terapii w życie codzienne dziecka. Kluczowe są empatia, cierpliwość i monitorowanie postępów dziecka.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Czym zajmuje się Neurologopeda w pracy z WWRD?</AccordionTrigger>
                <AccordionContent>
                Neurologopeda w Obszarze Wczesnego Wspomagania Rozwoju Dziecka (WWRD) zajmuje się diagnozowaniem i terapeutycznym wsparciem dzieci z zaburzeniami neurologicznymi wpływającymi na rozwój mowy. Tworzy spersonalizowane plany terapeutyczne, przeprowadza sesje terapeutyczne, oraz wspomaga rodziców w skutecznym integrowaniu terapii w codzienne życie dziecka.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Czym zajmuje się Fizjoterapeuta w pracy z WWRD?</AccordionTrigger>
                <AccordionContent>
                Fizjoterapeuta w Obszarze Wczesnego Wspomagania Rozwoju Dziecka (WWRD) specjalizuje się w diagnozowaniu i terapeutycznym wspieraniu dzieci z zaburzeniami neurologicznymi, które mogą wpływać na rozwój motoryki oraz funkcje ruchowe. Opracowuje spersonalizowane plany terapeutyczne, prowadzi sesje terapeutyczne, oraz aktywnie angażuje się w pomoc rodzicom w skutecznym integrowaniu terapii w codzienne życie dziecka.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Jaki jest cel Integracji Sensorycznej w WWRD?</AccordionTrigger>
                <AccordionContent>
                Kluczowym celem Integracji Sensorycznej jest zrozumienie, jak dzieci przetwarzają i reagują na bodźce z otoczenia, a także jak te reakcje wpływają na ich rozwój motoryczny, emocjonalny i społeczny. Poprzez różnorodne ćwiczenia i doświadczenia sensoryczne, terapeuta wspomaga rozwijanie umiejętności adaptacyjnych oraz integrację bodźców sensorycznych.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Jaki jest cel Terapii Ręki w WWRD?</AccordionTrigger>
                <AccordionContent className="">
                Terapia Ręki skupia się na zidentyfikowaniu ewentualnych ograniczeń w funkcji rąk, takich jak trudności z chwytem, koordynacją ruchową czy zręcznością palców. Przy użyciu specjalistycznych ćwiczeń, manipulacji i zabaw terapeuta stara się poprawić siłę, precyzję oraz funkcjonalność rąk dziecka.
                </AccordionContent>
              </AccordionItem>


            </Accordion>




              <Link href={"/WWRD"} className=' text-slate-800 flex justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>Sprawdź jak uzyskać darmowe zajęcia WWRD <FaRegArrowAltCircleRight /></div></Link>
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
           <img src="/assets/logopeda2.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
         </div>
     </div>

         {/* Tekst informacyjny */}
         <div className="mx-6 md:mr-16 flex-col justify-center items-center">
         <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
         Zajęcia z logopedą dla dzieci i&nbsp;młodzieży

           </h2>
           <p className="text-gray-700 text-base text-left mb-6">
           Zajęcia z logopedą dla dzieci i młodzieży są skoncentrowane na diagnozowaniu i terapii różnorodnych trudności komunikacyjnych. Logopeda pracuje z dziećmi nad poprawą wymowy, rozwojem mowy i języka, a także nad komunikacją niewerbalną. Dzięki indywidualnemu podejściu oraz zastosowaniu różnorodnych metod i technik, terapia logopedyczna pomaga w przezwyciężaniu barier komunikacyjnych, wspierając rozwój językowy i umiejętności społeczne uczestników.
              </p>
              <Accordion type="single" collapsible>


<AccordionItem value="item-1">
  <AccordionTrigger>Kiedy udać się do logopedy?</AccordionTrigger>
  <AccordionContent>
                      <ul>
                        <li><strong>Grupa Wiekowa: Niemowlęta (Do 1 Roku Życia):</strong>
                          <ul>
                            <li>Jeśli po ukończeniu roku życia dziecko nie wydaje żadnych dźwięków.</li>
                            <li>Jeśli zauważasz, że dziecko nie reaguje na dźwięki lub nie wydaje dźwięków&nbsp;w&nbsp;odpowiedzi.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Małe Dzieci (1-3 Lata):</strong>
                          <ul>
                            <li>Jeśli dziecko w&nbsp;wieku 2 lat nie próbuje wypowiadać pierwszych słów.</li>
                            <li>Jeśli dziecko ma problemy z wymawianiem niektórych dźwięków, takich jak "p," "b," lub "m."</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Przedszkolaki (3-5 Lat):</strong>
                          <ul>
                            <li>Jeśli dziecko w&nbsp;wieku 3 lat nadal nie jest w&nbsp;stanie tworzyć prostych zdań.</li>
                            <li>Jeśli trudności w&nbsp;wymawianiu głosek, takich jak "l," "f," "w," "k," "g," "h," lub "ł," są widoczne.</li>
                            <li>Jeśli zauważasz, że dziecko utyka językiem podczas mówienia.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Młodsza Szkoła Podstawowa (6-10 Lat):</strong>
                          <ul>
                            <li>Jeśli dziecko nadal ma trudności z&nbsp;wymawianiem głosek, takich jak "s," "z," "c," lub "dz."</li>
                            <li>Jeśli dziecko modyfikuje sylaby w&nbsp;wyrazach lub skraca wyrazy w&nbsp;sposób nieadekwatny do wieku.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Starsze Dzieci i Młodzież (11-18 Lat):</strong>
                          <ul>
                            <li>Jeśli po osiągnięciu 11 roku życia dziecko nadal ma trudności z&nbsp;wymawianiem głosek, takich jak "sz," "ż," "cz," lub "dż."</li>
                            <li>Jeśli wymowa głoski "r" jest nadal problemem, a dziecko ma trudności z&nbsp; poprawnym jej wypowiadaniem.</li>
                          </ul>
                        </li>
                        <li><strong>Grupa Wiekowa: Dorośli (18+ Lat):</strong>
                          <ul>
                            <li>Jeśli dorośli doświadczają trudności z mową, takie jak chrypa, utrata głosu lub problemy z wymawianiem niektórych dźwięków.</li>
                          </ul>
                        </li>
                      </ul>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-2">
  <AccordionTrigger>Zalety terapii logopedycznej</AccordionTrigger>
  <AccordionContent>
  <ul>
                        <li><strong>Poprawa komunikacji:</strong> Terapia logopedyczna pomaga poprawić zdolności komunikacyjne, co ma kluczowe znaczenie w&nbsp;codziennym życiu, pracy i&nbsp;relacjach społecznych.</li>
                        <li><strong>Wspieranie rozwoju językowego:</strong> Dla dzieci terapia logopedyczna jest szczególnie korzystna, pomagając w&nbsp;rozwijaniu umiejętności mówienia, słuchania, czytania, i&nbsp;pisania.</li>
                        <li><strong>Przezwyciężanie wad wymowy:</strong> Terapia logopedyczna pomaga w&nbsp;eliminowaniu wad wymowy, co może być istotne dla zdrowego rozwoju dziecka, i&nbsp;pewności siebie.</li>
                        <li><strong>Leczenie zaburzeń głosu:</strong> Osoby z zaburzeniami głosu, takimi jak chrypa czy afonia, mogą skorzystać z terapii logopedycznej, aby przywrócić zdrowy, i&nbsp;wyraźny głos.</li>
                        <li><strong>Wsparcie dla osób z autyzmem:</strong> Terapia logopedyczna może pomóc osobom z autyzmem w&nbsp;rozwijaniu umiejętności komunikacji, i&nbsp;interakcji społecznych.</li>
                        <li><strong>Pomoc osobom po udarach i urazach mózgu:</strong> Osoby po udarach lub urazach mózgu często potrzebują terapii logopedycznej do przywrócenia funkcji mowy, i&nbsp;komunikacji.</li>
                        <li><strong>Wsparcie osób starszych:</strong> Terapia logopedyczna może pomóc osobom starszym w&nbsp;utrzymaniu zdrowej komunikacji, i&nbsp;uniknięciu problemów&nbsp;związanych z&nbsp;zaburzeniami mowy związanymi z&nbsp;wiekiem.</li>
                        <li><strong>Podniesienie pewności siebie:</strong> Poprawa umiejętności komunikacyjnych dzięki terapii logopedycznej może znacząco podnieść pewność siebie pacjentów.</li>
                        <li><strong>Indywidualne podejście:</strong> Terapeuci logopedyczni dostosowują terapię do indywidualnych potrzeb każdego pacjenta, co zapewnia efektywną pomoc.</li>
                        <li><strong>Zwiększenie jakości życia:</strong> Ogólnie rzecz biorąc, terapia logopedyczna pomaga pacjentom poprawić jakość swojego życia, i&nbsp;rozwoju językowego.</li>

                      </ul>
  </AccordionContent>
</AccordionItem>
</Accordion>
              <Link href={"/Kontakt"} className=' text-slate-800 flex justify-start'><div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>Umów wizytę u Logopedy<FaRegArrowAltCircleRight /></div></Link>
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
           <img src="/assets/subhero3.jpg" alt="dziecko ubierające maskę" className='w-full h-full object-cover'/>
         </div>
     </div>

         {/* Tekst informacyjny */}
         <div className="mx-6 md:mr-16 flex-col justify-center items-center">
         <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
         Zajęcia dla dzieci z&nbsp;Integracji sensorycznej
           </h2>
           <p className="text-gray-700 text-base text-left mb-6">
              Integracja sensoryczna to kluczowy proces, pomagający dzieciom prawidłowo przetwarzać informacje zmysłowe. Zajęcia z terapii sensorycznej skierowane są do dzieci z trudnościami w tej dziedzinie, oferując szereg ćwiczeń i zabaw terapeutycznych. Celem jest wsparcie rozwoju motorycznego, poznawczego i społeczno-emocjonalnego, co przekłada się na lepsze funkcjonowanie dziecka w codziennym życiu. Terapia jest szczególnie korzystna dla dzieci z zaburzeniami rozwojowymi, takimi jak autyzm czy ADHD.
              </p>
              <Link href={"/SI"} className=' text-slate-800 flex justify-start'><div className=' w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>Dowiedz się więcej o Integracji Sensorycznej <FaRegArrowAltCircleRight /></div></Link>
         </div>
       </div>
     </div>

   </section>




  



    </div>
  );
};

export default Dzieci;
