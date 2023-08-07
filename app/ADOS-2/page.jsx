'use client'
/*
import React from 'react'
import Link from 'next/link'

 const Ados = () => {
  return (
    <><section className='mx-[200px] mt-[100px]'>
      <h2 className=' text-[55px] text-center font-bold gradient-text3'>Diagnoza Ados-2</h2>
      <p className=' text-center text-gray-400'>Diagnoza autyzmu u dzieci, młodzieży i dorosłych</p>
      


      
          <ul className='pt-[80px] spis'>
            <label htmlFor="" className='text-[24px] font-semibold'>Spis treści</label> <br />
            <Link href="#1" className='hover:text-pink-600'>1. ADOS-2 – czym jest? Jakie są jego możliwości?</Link> <br />
            <Link href="#2" className='hover:text-pink-600'>2. ADOS-2 jako najbardziej wiarygodne narzędzie do diagnozowania zarówno zespołu Aspergera jak i spectrum autyzmu</Link> <br />
             <Link href="#3" className='hover:text-pink-600'>3. Koncepcja ADOS-2</Link> <br />
             <Link href="#4" className='hover:text-pink-600'>4. Niepokojące objawy</Link> <br />
             <Link href="#5" className='hover:text-pink-600' >5. Przygotowanie do oceny</Link> <br />
             <Link href="#6" className='hover:text-pink-600' >6. Proces oceny</Link> <br />
             <Link href="#7" className='hover:text-pink-600'>7. Analiza Wyników</Link> <br />
             <Link href="#8" className='hover:text-pink-600'>8. Interpretacja wyników</Link> <br />
             <Link href="#9" className='hover:text-pink-600'>9. Potwierdzenie Diagnozy</Link> <br />
             <Link href="#10" className='hover:text-pink-600'>10. Korzyści wynikające z wczesnego diagnozowania spektrum autyzmu i zespołu Aspergera</Link> <br />
             <Link href="#11" className='hover:text-pink-600'>11. Ważna informacja</Link> <br />
          </ul>
        

          <section className='w-full bg-[#fff] shadow p-8 mt-11 rounded-[15px] drop-shadow-2xl' id="1">
  <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>ADOS-2 – czym jest? Jakie są jego możliwości? </h4>
  <p className='text-[16px] text-gray-700'>ADOS-2, czyli Autism Diagnostic Observation Schedule, Second Edition, jest narzędziem wykorzystywanym do diagnozy autyzmu oraz innych zaburzeń ze spektrum autyzmu (ASD) dla dzieci od 12 miesiąca życia do osób dorosłych, które nie zostały dotąd zdiagnozowane<br /> a podejrzewają u siebie lub swoich bliskich spektrum autyzmy lub zespół Aspergera. Wiek Pacjenta ma jedynie wpływ na to, na jakich interakcjach z diagnostą opiera się u konkretnej osoby diagnostyka ADOS-2. Test jest również dostosowany do możliwości osób, które mają trudności ze słownym komunikowaniem się.</p>
</section> <br />


      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='2'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>ADOS-2 to obecnie najbardziej wiarygodne narzędzie do diagnozowania <br />zarówno zespołu Aspergera jak i spectrum autyzmu</h4>
        <p className='text-[16px] text-gray-700'>Test uznawany jest za jedno z najdokładniejszych narzędzi do diagnozowania zaburzeń ze spektrum autyzmu oraz kluczowy element  diagnozy ASD na całym świecie. Badanie ADOS-2 umożliwia określenie, czy u osoby badanej występują objawy ze spektrum autyzmu, oraz porównanie poziomu jej funkcjonowania intelektualnego i społecznego z normą dla jej grupy wiekowej.</p>
      </section>


      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='3'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Koncepcja ADOS-2</h4>
        <p className='text-[16px] text-gray-700'>ADOS-2 to standardowy, semi-strukturalny test obserwacyjny. Został zaprojektowany w celu oceny komunikacji, interakcji społecznej, zabawy oraz twórczego użytkowania pomysłów i materiałów. ADOS-2 składa się z pięciu modułów, z których każdy jest przeznaczony dla osób w różnym wieku <br /> i na różnym poziomie rozwoju języka. <b> Diagnozą można objąć dziecko od 12 miesiąca życia.</b></p>
        <p className='text-[16px] text-gray-700 pt-6'>
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 1:</span> dla dzieci, które nie mówią lub używają jedynie pojedynczych słów. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 2:</span> dla dzieci, które posługują się prostymi frazami lub zdaniami, ale niekoniecznie mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 3:</span> dla dzieci i młodzieży, które mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 4:</span> dla dorosłych, którzy mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł dla małych dzieci (Toddler Module):</span> dla dzieci w wieku od 12 do 30 miesięcy, które nie mówią regularnie<br />
          <p className='text-[16px] text-gray-700 pt-6 font-thin'>Coraz częściej obserwujemy u dzieci zaburzenia charakterystyczne dla autyzmu i zespołu Aspergera. Autyzm to zaburzenia rozwoju dziecka <br /> z zakresu zarówno interakcji społecznych czy komunikacji, jak i stereotypowych zachowań. Zespół Aspergera to zaburzenia ze spektrum autyzmu. Jego objawy są zazwyczaj dyskretniejsze niż syndromy autyzmu. Dotyczą głównie relacji społecznych, komunikacji niewerbalnej oraz zachowań. Jeśli u dziecka, nawet po 12 miesiącu życia, pojawią się niepokojące objawy, warto skonsultować się ze specjalistą.</p>


        </p>

      </section>


      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='4'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-8'>Niepokojące objawy</h4>

        <p className='text-[16px] text-gray-700'><b>Problemy ze skupieniem uwagi</b><br />
          Dziecko częściej koncentruje się na przedmiotach niż na relacjach z ludźmi.<br />Niechętnie lub z opóźnieniem reaguje na swoje imię. Trudno dotrzeć do niego z komunikatem.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Zbyt silne lub nietypowe reakcje emocjonalne</b><br />
          Dziecko intensywnie przeżywa emocje: krzyczy, jest agresywne – również w stosunku do siebie. <br />Trudno mu się wyciszyć. Jest nieustępliwe w zgłaszaniu potrzeb.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Nadmierne przywiązanie do rutyny i schematów</b><br />
          Maluch lubi wykonywać czynności według ściśle określonego porządku. <br />Trudno mu zaakceptować zmiany w planie dnia lub w organizacji najbliższej przestrzeni.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Nietypowe zainteresowania i zabawy</b><br />
          Ulubione zajęcia malucha często są rozbudowane i oparte na powtarzalnych wzorcach. Posiada on rzadko występujące wśród dzieci zainteresowania – jego uwagę zwracają np. cyfry nieskończone czy rozkłady jazdy. Trudno przekierować uwagę malucha na inny temat.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problemy sensoryczne</b><br />
          Występuje np. obniżona reakcja na ból, nadwrażliwość na dotyk, unikanie przytulania,<br /> tolerowanie tylko wybranych ubrań lub potraw, nietypowa reakcja na dźwięki (dot. zarówno hałasu, jak i szeptu).
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problem z komunikacją i relacjami z rówieśnikami</b><br />
          Maluch nie chce bawić się z innymi dziećmi lub jest w stosunku do nich bardzo apodyktyczny. <br />Trudno mu nawiązywać i utrzymywać znajomości. Nie potrafi podtrzymać dialogu – podczas rozmowy narzuca wątki i przerywa.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problem z empatią</b><br />
          Dziecko rozpoznaje podstawowe emocje, ale nie uwzględnia ich w swoim zachowaniu.
        </p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='5'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Przygotowanie do oceny</h4>
        <p className='text-[16px] text-gray-700'>Ocena ADOS-2 przeprowadzana jest w specjalistycznym centrum diagnostycznym w obecności przeszkolonego terapeuty/diagnosty ADOS-2.  Przed przeprowadzeniem oceny przeprowadzana jest ankiet/wywiad  z rodzicami lub opiekunami dziecka, aby dowiedzieć się więcej o jego rozwoju i zachowaniu.</p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='6'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Proces oceny</h4>
        <p className='text-[16px] text-gray-700'>Podczas sesji ADOS-2, specjalista prowadzi szereg standardowych zadań oraz rozwiązań mających na celu wywołanie interakcji z badanym pacjentem. Wszystkie one mają na za zadanie wywołać określone zachowania związane z autyzmem. Przykładowo, specjalista może prosić starsze już dziecko o opowiedzenie historii, zasymulowanie posiłku, udział w grze "naśladowczej" czy pokazanie, jak reaguje na bodźce społeczne, choćby na przykład na uśmiech drugiej osoby.
          <br />
          <br />
          Wszystkie zachowania  obserwowane są, a także oceniane przez specjalistę w czterech kategoriach: <br />
           komunikacji 
           interakcji społecznej 
           zabawy 
           twórczego wykorzystania pomysłów oraz materiałów 
          <br />
          Każde zachowanie jest oceniane na podstawie specyficznych kryteriów i przypisywane jest mu określona liczba punktów.
        </p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='7'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Analiza Wyników</h4>
        <p className='text-[16px] text-gray-700'>Po zakończeniu sesji oceniającej, specjalista analizuje zgromadzone dane, przypisując punkty do poszczególnych kategorii obserwowanych zachowań.  Punkty są zsumowane z każdej badanej kategorii aby uzyskać wynik całkowity/całościowy. Im wyższy jest wynik, tym większe jest prawdopodobieństwo, że osoba diagnozowana ma spektrum autyzmu.</p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='8'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Interpretacja wyników</h4>
        <p className='text-[16px] text-gray-700'>Wyniki ADOS-2 są interpretowane przez specjalistę, który uwzględni również informacje z innych źródeł, takich jak:  wywiady z rodzicami/prawni opiekunowie,  nauczyciele lub inne osoby znające dziecko, a także obserwacje z ustawień środowisk, takich jak: dom,  plac zabaw, przedszkole/szkoła, a w przypadku osób dorosłych: miejsce pracy.
          <br />
          <br />
          Wyniki ADOS-2 są tylko jednym elementem procesu diagnozowania. Specjalista będzie również brał pod uwagę historię rozwoju dziecka, a także wyniki innych testów, takich jak testy inteligencji, testy funkcji wykonawczych, testy percepcji społecznej, a w niektórych przypadkach również testy genetyczne.
        </p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='9'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Potwierdzenie Diagnozy</h4>
        <p className='text-[16px] text-gray-700'>Diagnoza autyzmu ma duże znaczenie dla planowania leczenia i wsparcia, które pomogą osobie radzić sobie z trudnościami związanymi z zaburzeniem. Podsumowując, ADOS-2 to niezwykle istotne narzędzie służące do diagnozowania, które pomaga specjalistom zrozumieć unikalne zdolności i wyzwania stojące przed osobami z tym zaburzeniem. Jednak to narzędzie nie powinno być stosowane izolacyjnie, ale jako część kompleksowej oceny obejmującej różne aspekty życia i rozwoju danej osoby.</p>
      </section>

      <section className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px]' id='10'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Korzyści wynikające z wczesnego diagnozowania spektrum autyzmu i zespołu Aspergera:</h4>

        <p className='text-[16px] text-gray-700'><b>Interwencja w młodym wieku:</b><br />
          Im wcześniej zacznie się interwencję, tym większa szansa na osiągnięcie lepszych rezultatów. Dzieci ze spektrum autyzmu często zyskują najwięcej na interwencji rozpoczętej przed 3 rokiem życia, kiedy mózg jest najbardziej plastyczny i zdolny do nauki nowych umiejętności.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Dostosowanie systemu edukacji:</b><br />
          Wczesna diagnoza pozwala na odpowiednie dostosowanie systemu edukacji do potrzeb dziecka,<br /> co przekłada się na lepsze efekty w nauce i rozwijaniu umiejętności społecznych.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Łagodzenie objawów:</b><br />
          Wczesne leczenie i terapia mogą pomóc w łagodzeniu niektórych objawów autyzmu,<br /> takich jak trudności w komunikacji czy wyzwania związane z zachowaniami.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Wsparcie dla rodziców:</b><br />
          Wczesna diagnoza autyzmu może pomóc rodzicom zrozumieć, co się dzieje z ich dzieckiem,<br /> i dostarczyć im niezbędnych narzędzi i strategii, które pomogą im lepiej wspierać rozwój swojego dziecka.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Planowanie przyszłości:</b><br />
          Wiedza o tym, że dziecko ma autyzm, może pomóc rodzicom i specjalistom planować przyszłość,<br /> na przykład wybierając odpowiednie programy edukacyjne, strategie interwencyjne, a później również wsparcie dla dorosłych.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Redukcja stresu:</b><br />
          Choć otrzymanie diagnozy autyzmu może być trudne, dla wielu rodzin może to również przynieść pewne poczucie ulgi. <br />Rozpoznanie, co stoi za trudnościami dziecka, może pomóc zmniejszyć stres i niepewność związane z nieznanym.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Budowanie sieci wsparcia:</b><br />
          Diagnoza autyzmu może pomóc rodzinom znaleźć i połączyć się z odpowiednimi grupami wsparcia i zasobami, <br />które mogą pomóc zarówno im, jak i ich dziecku.<br /> <br />
          Pamiętać należy, że wczesna diagnoza i interwencja nie oznacza "wyleczenia" autyzmu, ale może znacznie poprawić jakość życia <br />osoby z autyzmem i jej rodziny. Wczesne i odpowiednie wsparcie może pomóc osobom z autyzmem osiągnąć swój pełen potencjał.
        </p>

      </section>

      <div className='w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px] mb-[100px]' id='11'>
        <h4 className='text-[19px] font-semibold text-gray-800 mb-6'>Ważna informacja</h4>
        <p className='text-[16px] text-gray-700'>Wykonanie samego badania ADOS-2 może być przydatne m.in. dla dorosłych osób, które podejrzewają u siebie autyzm/zespół Aspergera<br /> i chciałyby zweryfikować te przypuszczenia “na własny użytek”, oraz dla rodziców dzieci, które chciałyby rozpocząć wstępną diagnostykę pociechy w kierunku zaburzeń ze spektrum. Samo badanie ADOS-2 trwa około dwie godziny, a w  jego koszt jest wliczona końcowa, psychologiczna opinia sporządzana przez Specjalistę prowadzącego diagnozę.</p>
      </div>

    </section>
    <section className='max-w-screen-lg mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        */

        {/* Spis treści */}
        /*
        <div className="mb-10">
          <h3 className='font-bold text-green-500 mb-4'>Spis treści</h3>
          <ul className='space-y-2'>
            <li><a href="#6" className='text-green-500 hover:underline'>Proces oceny</a></li>
            <li><a href="#7" className='text-green-500 hover:underline'>Analiza Wyników</a></li>
            <li><a href="#8" className='text-green-500 hover:underline'>Interpretacja wyników</a></li>
            <li><a href="#9" className='text-green-500 hover:underline'>Potwierdzenie Diagnozy</a></li>
            <li><a href="#10" className='text-green-500 hover:underline'>Korzyści wynikające z wczesnego diagnozowania</a></li>
            <li><a href="#11" className='text-green-500 hover:underline'>Ważna informacja</a></li>
          </ul>
        </div>

        <div className="bg-[#fff] shadow p-4 sm:p-8 mt-8 rounded-[15px]" id='6'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Proces oceny</h4>
          <p>Tutaj umieść treść dotyczącą procesu oceny.</p>
        </div>

        <div className="bg-[#fff] shadow p-4 sm:p-8 mt-8 rounded-[15px]" id='7'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Analiza Wyników</h4>
          <p>Tutaj umieść treść dotyczącą analizy wyników.</p>
        </div>

        <div className="bg-[#fff] shadow p-4 sm:p-8 mt-8 rounded-[15px]" id='8'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Interpretacja wyników</h4>
          <p>Tutaj umieść treść dotyczącą interpretacji wyników.</p>
        </div>

        <div className="bg-[#fff] shadow p-4 sm:p-8 mt-8 rounded-[15px]" id='9'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Potwierdzenie Diagnozy</h4>
          <p>Tutaj umieść treść dotyczącą potwierdzenia diagnozy.</p>
        </div>

        <div className="bg-[#fff] shadow p-4 sm:p-8 mt-8 rounded-[15px]" id='10'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Korzyści wynikające z wczesnego diagnozowania</h4>
          <p>Tutaj umieść treść dotyczącą korzyści z wczesnego diagnozowania.</p>
        </div>

        <div className="w-full bg-[#fff] shadow p-8 mt-8 rounded-[15px] mb-[100px]" id='11'>
          <h4 className='text-[19px] font-semibold text-gray-800 mb-6 border-b border-green-500 pb-2'>Ważna informacja</h4>
          <p>Tutaj umieść ważne informacje, które chcesz przekazać.</p>
        </div>
      </section>
    </>
  )
}

export default Ados ; */

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const AccordionItem = forwardRef(({ id, title, content, isActive }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={ref} id={id} className="border-t-2 border-gray-200">
      <h4 
        className={`cursor-pointer bg-gray-100 p-4 hover:bg-gray-200 flex justify-between items-center ${isActive ? 'active-title' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </h4>
      {isOpen && content}
    </div>
  );
});

const Ados = () => {
  const accordionItems = [
    {
      id: 'ados-czym-jest',
      title: 'ADOS-2 – czym jest? Jakie są jego możliwości?',
      shortTitle: 'Czym jest ADOS-2?',
      content: (
      <div className=' mx-4 my-2'>
      <p className=' text-gray-700'>ADOS-2, czyli Autism Diagnostic Observation Schedule, Second Edition, jest narzędziem wykorzystywanym do diagnozy autyzmu oraz innych zaburzeń ze spektrum autyzmu (ASD) <b>dla dzieci od 12 miesiąca życia do osób dorosłych</b>, które nie zostały dotąd zdiagnozowane<br /> a podejrzewają u siebie lub swoich bliskich spektrum autyzmy lub zespół Aspergera. Wiek Pacjenta ma jedynie wpływ na to, na jakich interakcjach z diagnostą opiera się u konkretnej osoby diagnostyka ADOS-2. Test jest również dostosowany do możliwości osób, które mają trudności ze słownym komunikowaniem się.</p>
      </div>
      ),
      ref: useRef(null),
    },
    {
      id: 'ados-wiarygodnosc',
      title: 'ADOS-2 to najbardziej wiarygodne narzędzie do diagnozowania zespołu Aspergera oraz spectrum autyzmu',
      shortTitle: 'Wiarygodność ADOS-2',
      content: ( 
        <div className=' mx-4 my-2'>
          <p className=' text-gray-700'>Test uznawany jest za jedno z najdokładniejszych narzędzi do diagnozowania zaburzeń ze spektrum autyzmu oraz kluczowy element  diagnozy ASD na całym świecie. Badanie ADOS-2 umożliwia określenie, czy u osoby badanej występują objawy ze spektrum autyzmu, oraz porównanie poziomu jej funkcjonowania intelektualnego i społecznego z normą dla jej grupy wiekowej.</p>
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'ados-koncepcja',
      title: 'Koncepcja ADOS-2',
      content: ( 
        <div className=' mx-4 my-2'>
          <p className=' text-gray-700'>ADOS-2 to standardowy, semi-strukturalny test obserwacyjny. Został zaprojektowany w celu oceny komunikacji, interakcji społecznej, zabawy oraz twórczego użytkowania pomysłów i materiałów. ADOS-2 składa się z pięciu modułów, z których każdy jest przeznaczony dla osób w różnym wieku <br /> i na różnym poziomie rozwoju języka. <b> Diagnozą można objąć dziecko od 12 miesiąca życia. </b></p><br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 1:</span> dla dzieci, które nie mówią lub używają jedynie pojedynczych słów. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 2:</span> dla dzieci, które posługują się prostymi frazami lub zdaniami, ale niekoniecznie mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 3:</span> dla dzieci i młodzieży, które mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł 4:</span> dla dorosłych, którzy mówią płynnie. <br />
          <span className='text-[16px] text-gray-800 font-[600]'>Moduł dla małych dzieci (Toddler Module):</span> dla dzieci w wieku od 12 do 30 miesięcy, które nie mówią regularnie<br />
          <p className='text-[16px] text-gray-700 pt-6 font-thin'>Coraz częściej obserwujemy u dzieci zaburzenia charakterystyczne dla autyzmu i zespołu Aspergera. Autyzm to zaburzenia rozwoju dziecka z zakresu zarówno interakcji społecznych czy komunikacji, jak <br />i stereotypowych zachowań. Zespół Aspergera to zaburzenia ze spektrum autyzmu. Jego objawy są zazwyczaj dyskretniejsze niż syndromy autyzmu. Dotyczą głównie relacji społecznych, komunikacji niewerbalnej oraz zachowań. Jeśli u dziecka, nawet po 12 miesiącu życia, pojawią się niepokojące objawy, warto skonsultować się ze specjalistą.</p>
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'niepokojace-objawy',
      title: 'Niepokojące objawy',
      content: ( 
        <div className=' mx-4 my-2'>
          <p className='text-[16px] text-gray-700'><b>Problemy ze skupieniem uwagi</b><br />
          Dziecko częściej koncentruje się na przedmiotach niż na relacjach z ludźmi.<br />Niechętnie lub z opóźnieniem reaguje na swoje imię. Trudno dotrzeć do niego z komunikatem.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Zbyt silne lub nietypowe reakcje emocjonalne</b><br />
          Dziecko intensywnie przeżywa emocje: krzyczy, jest agresywne – również w stosunku do siebie. <br />Trudno mu się wyciszyć. Jest nieustępliwe w zgłaszaniu potrzeb.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Nadmierne przywiązanie do rutyny i schematów</b><br />
          Maluch lubi wykonywać czynności według ściśle określonego porządku. <br />Trudno mu zaakceptować zmiany w planie dnia lub w organizacji najbliższej przestrzeni.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Nietypowe zainteresowania i zabawy</b><br />
          Ulubione zajęcia malucha często są rozbudowane i oparte na powtarzalnych wzorcach. Posiada on rzadko występujące wśród dzieci zainteresowania – jego uwagę zwracają np. cyfry nieskończone czy rozkłady jazdy. Trudno przekierować uwagę malucha na inny temat.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problemy sensoryczne</b><br />
          Występuje np. obniżona reakcja na ból, nadwrażliwość na dotyk, unikanie przytulania,<br /> tolerowanie tylko wybranych ubrań lub potraw, nietypowa reakcja na dźwięki (dot. zarówno hałasu, jak <br />i szeptu).
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problem z komunikacją i relacjami z rówieśnikami</b><br />
          Maluch nie chce bawić się z innymi dziećmi lub jest w stosunku do nich bardzo apodyktyczny. <br />Trudno mu nawiązywać i utrzymywać znajomości. Nie potrafi podtrzymać dialogu – podczas rozmowy narzuca wątki i przerywa.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Problem z empatią</b><br />
          Dziecko rozpoznaje podstawowe emocje, ale nie uwzględnia ich w swoim zachowaniu.
        </p>
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'przygotowanie-do-oceny',
      title: 'Przygotowanie do oceny',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Ocena ADOS-2 przeprowadzana jest w specjalistycznym centrum diagnostycznym w obecności przeszkolonego terapeuty/diagnosty ADOS-2.  Przed przeprowadzeniem oceny przeprowadzana jest ankiet/wywiad  z rodzicami lub opiekunami dziecka, aby dowiedzieć się więcej o jego rozwoju i zachowaniu.</p>        
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'proces-oceny',
      title: 'Proces oceny',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Podczas sesji ADOS-2, specjalista prowadzi szereg standardowych zadań oraz rozwiązań mających na celu wywołanie interakcji z badanym pacjentem. Wszystkie one mają na za zadanie wywołać określone zachowania związane z autyzmem. Przykładowo, specjalista może prosić starsze już dziecko o opowiedzenie historii, zasymulowanie posiłku, udział w grze "naśladowczej" czy pokazanie, jak reaguje na bodźce społeczne, choćby na przykład na uśmiech drugiej osoby. <br /><br />
        Wszystkie zachowania  obserwowane są, a także oceniane przez specjalistę w czterech kategoriach: <br /><br />
          - komunikacji <br />
          - interakcji społecznej <br />
          - zabawy <br />
          - twórczego wykorzystania pomysłów oraz materiałów <br />
          <br />
          Każde zachowanie jest oceniane na podstawie specyficznych kryteriów i przypisywane jest mu określona liczba punktów.
          </p> <br />

        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'analiza-wynikow',
      title: 'Analiza Wyników',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Po zakończeniu sesji oceniającej, specjalista analizuje zgromadzone dane, przypisując punkty do poszczególnych kategorii obserwowanych zachowań.  Punkty są zsumowane z każdej badanej kategorii aby uzyskać wynik całkowity/całościowy. Im wyższy jest wynik, tym większe jest prawdopodobieństwo, że osoba diagnozowana ma spektrum autyzmu.</p>
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'interpretacja-wynikow',
      title: 'Interpretacja wyników',
      content: ( 
        <div className=' mx-4 my-2'>
          <p className='text-[16px] text-gray-700'>Wyniki ADOS-2 są interpretowane przez specjalistę, który uwzględni również informacje z innych źródeł, takich jak:  wywiady z rodzicami/prawni opiekunowie,  nauczyciele lub inne osoby znające dziecko, a także obserwacje z ustawień środowisk, takich jak: dom,  plac zabaw, przedszkole/szkoła,<br /> a w przypadku osób dorosłych: miejsce pracy.
          <br />
          <br />
          Wyniki ADOS-2 są tylko jednym elementem procesu diagnozowania. Specjalista będzie również brał pod uwagę historię rozwoju dziecka, a także wyniki innych testów, takich jak testy inteligencji, testy funkcji wykonawczych, testy percepcji społecznej, a w niektórych przypadkach również testy genetyczne.
        </p>        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'potwierdzenie-diagnozy',
      title: 'Potwierdzenie Diagnozy',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Diagnoza autyzmu ma duże znaczenie dla planowania leczenia i wsparcia, które pomogą osobie radzić sobie z trudnościami związanymi z zaburzeniem. Podsumowując, ADOS-2 to niezwykle istotne narzędzie służące do diagnozowania, które pomaga specjalistom zrozumieć unikalne zdolności i wyzwania stojące przed osobami z tym zaburzeniem. Jednak to narzędzie nie powinno być stosowane izolacyjnie, ale jako część kompleksowej oceny obejmującej różne aspekty życia i rozwoju danej osoby.</p>
        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'korzysci-z-diagnozy',
      title: 'Korzyści wynikające z wczesnego diagnozowania spektrum autyzmu i zespołu Aspergera',
      shortTitle: 'Wczesna diagnoza - korzyści',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Diagnoza autyzmu ma duże znaczenie dla planowania leczenia i wsparcia, które pomogą osobie radzić sobie z trudnościami związanymi z zaburzeniem. Podsumowując, ADOS-2 to niezwykle istotne narzędzie służące do diagnozowania, które pomaga specjalistom zrozumieć unikalne zdolności i wyzwania stojące przed osobami z tym zaburzeniem. Jednak to narzędzie nie powinno być stosowane izolacyjnie, ale jako część kompleksowej oceny obejmującej różne aspekty życia i rozwoju danej osoby.</p>
        <p className='text-[16px] text-gray-700'><b>Interwencja w młodym wieku:</b><br />
          Im wcześniej zacznie się interwencję, tym większa szansa na osiągnięcie lepszych rezultatów. Dzieci ze spektrum autyzmu często zyskują najwięcej na interwencji rozpoczętej przed 3 rokiem życia, kiedy mózg jest najbardziej plastyczny i zdolny do nauki nowych umiejętności.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Dostosowanie systemu edukacji:</b><br />
          Wczesna diagnoza pozwala na odpowiednie dostosowanie systemu edukacji do potrzeb dziecka,<br /> co przekłada się na lepsze efekty w nauce i rozwijaniu umiejętności społecznych.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Łagodzenie objawów:</b><br />
          Wczesne leczenie i terapia mogą pomóc w łagodzeniu niektórych objawów autyzmu,<br /> takich jak trudności w komunikacji czy wyzwania związane z zachowaniami.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Wsparcie dla rodziców:</b><br />
          Wczesna diagnoza autyzmu może pomóc rodzicom zrozumieć, co się dzieje z ich dzieckiem,<br /> i dostarczyć im niezbędnych narzędzi i strategii, które pomogą im lepiej wspierać rozwój swojego dziecka.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Planowanie przyszłości:</b><br />
          Wiedza o tym, że dziecko ma autyzm, może pomóc rodzicom i specjalistom planować przyszłość,<br /> na przykład wybierając odpowiednie programy edukacyjne, strategie interwencyjne, a później również wsparcie dla dorosłych.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Redukcja stresu:</b><br />
          Choć otrzymanie diagnozy autyzmu może być trudne, dla wielu rodzin może to również przynieść pewne poczucie ulgi. <br />Rozpoznanie, co stoi za trudnościami dziecka, może pomóc zmniejszyć stres i niepewność związane z nieznanym.
        </p>

        <p className='text-[16px] text-gray-700 pt-6'><b>Budowanie sieci wsparcia:</b><br />
          Diagnoza autyzmu może pomóc rodzinom znaleźć i połączyć się z odpowiednimi grupami wsparcia i zasobami, <br />które mogą pomóc zarówno im, jak i ich dziecku.<br /> <br />
          Pamiętać należy, że wczesna diagnoza i interwencja nie oznacza "wyleczenia" autyzmu, ale może znacznie poprawić jakość życia <br />osoby z autyzmem i jej rodziny. Wczesne i odpowiednie wsparcie może pomóc osobom z autyzmem osiągnąć swój pełen potencjał.
        </p>

        </div>
       ),
       ref: useRef(null),
    },
    {
      id: 'wazne-info',
      title: 'Ważna informacja',
      content: ( 
        <div className=' mx-4 my-2'>
        <p className='text-[16px] text-gray-700'>Wykonanie samego badania ADOS-2 może być przydatne m.in. dla dorosłych osób, które podejrzewają u siebie autyzm/zespół Aspergera i chciałyby zweryfikować te przypuszczenia “na własny użytek”, oraz dla rodziców dzieci, które chciałyby rozpocząć wstępną diagnostykę pociechy w kierunku zaburzeń ze spektrum. Samo badanie ADOS-2 trwa około dwie godziny, a w  jego koszt jest wliczona końcowa, psychologiczna opinia sporządzana przez Specjalistę prowadzącego diagnozę.</p>
        </div>
       ),
       ref: useRef(null),
    },
    
  ];

  
  const [activeItem, setActiveItem] = useState(null);
  const accordionRef = useRef(null);
  

    useEffect(() => {
      const handleScroll = () => {
        if (!accordionRef.current) return;
        const { scrollTop, clientHeight } = accordionRef.current;
        
        const currentActiveItem = accordionItems.reduce((currentActive, item) => {
          if (item.ref.current) {
            const { offsetTop, clientHeight: itemHeight } = item.ref.current;
            if (offsetTop <= scrollTop + (clientHeight * 0.25) && offsetTop + itemHeight > scrollTop + (clientHeight * 0.25)) {
              return item.id;
            }
          }
          return currentActive;
        }, null);
      
        setActiveItem(currentActiveItem);
      };
  
      if (accordionRef.current) {
        accordionRef.current.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        if (accordionRef.current) {
          accordionRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }, [accordionItems]);
  
    const handleNavigationClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;  // Spowolnienie filmiku o połowę
    }
  }, []);

  return (
    <>
      <section className=' relative'>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          className="absolute top-0 left-0 w-full h-[620px] object-cover z-0" 
          src="/assets/movie3.mp4"
        ></video>
        <div className="absolute top-0 left-0 w-full h-[620px] bg-black opacity-40 z-5"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-[620px]"> 
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-4">
            Diagnoza ADOS-2
          </h2>
          <p className="text-center text-white">
            Diagnoza autyzmu u dzieci od 18 miesiąca życia , młodzieży oraz osób dorosłych
          </p>
        </div>
        
        <div className='max-w-lg lg:max-w-[70%] mx-auto mt-8 p-4 flex mb-20'>
          <aside className="w-1/4 pr-4">
            <h3 className="mb-4 text-lg lg:text-3xl font-bold"></h3>
            <ul>
              {accordionItems.map(item => (
                <li key={item.id} className="mb-2">
                  <ScrollLink
                    to={item.id}
                    onClick={() => handleNavigationClick(item.id)}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${activeItem === item.id ? "text-green-500" : "text-blue-500"} hover:underline`}
                  >
                    {item.shortTitle || item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </aside>
          <div ref={accordionRef} className='w-3/4 space-y-4 overflow-y-auto max-h-[600px] lg:max-h-[500px] pb-[500px]'>
            {accordionItems.map(item => (
              <AccordionItem 
                  ref={item.ref}
                  key={item.id} 
                  {...item} 
                  isActive={activeItem === item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ados;