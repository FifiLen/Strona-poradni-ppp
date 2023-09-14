'use client'
import React, { useEffect } from 'react';
useEffect

const CEye = () => {
  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";
    
    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement('script');
    gtmInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0QW3ZG23F5');
    `;

    // Dodaj dodatkowy skrypt do głowy dokumentu
    document.head.appendChild(gtmInlineScript);

    // Opcjonalnie: Możesz usunąć skrypty, gdy komponent zostanie odmontowany
    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(gtmInlineScript);
    }
}, []);

return (
  <div>
    <div className="relative h-[520px] overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="/assets/movie6.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
      <div className="absolute top-0 left-0 w-full h-[620px] bg-black opacity-40 z-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl text-white font-bold">C-eye® PRO</h1>
        <p className="text-white">Sprzęt medyczny do rehabilitacji i opieki neurologicznej</p>
      </div>
    </div>


    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
  <h2 className="text-3xl sm:text-4xl font-semibold text-[#921d7f] mb-6 text-center pt-6">Czym jest C-eye® PRO?</h2>

  <div className="container mx-auto">
    <div className="text-center mt-6 flex justify-center items-center">
      <p className="text-lg text-gray-700 mb-8 w-full md:w-3/4">
        C-eye® to sprzęt będący obecnie standardem w&nbsp; rehabilitacji funkcji poznawczych i&nbsp;w&nbsp;opiece nad pacjentami neurologicznymi pozbawionymi możliwości kontaktu z&nbsp;otoczeniem za pomocą mowy czy gestów. W&nbsp;systemie C-eye® wykorzystywana jest technologia śledzenia wzroku (eye tracking), dzięki której można w obiektywny i&nbsp;wiarygodny sposób prowadzić sesje diagnostyczne i&nbsp;terapeutyczne z&nbsp;pacjentami, dla których ostatnią możliwością kontaktu z&nbsp;otoczeniem pozostały ruchy gałek ocznych. Sesje diagnostyczne i&nbsp;terapeutyczne polegają na wybieraniu przez pacjenta wyświetlanych na ekranie treści. System umożliwia dostosowanie terapii do możliwości i&nbsp;potrzeb pacjenta.
      </p>
    </div>
  </div>
</div>


    <section className="container mx-auto my-8 sm:my-16 px-4 sm:px-8 md:px-16 xl:px-32">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Rehabilitacja</h3>
          <p className="text-gray-700 mb-4">
            Nowoczesna terapia, treści multimedialne, rehabilitacja mózgu i monitorowanie postępów.
          </p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Diagnoza</h3>
          <p className="text-gray-700 mb-4">
            Badanie wzroku i słuchu, ocena stanu pacjenta oraz testy świadomości.
          </p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Komunikacja</h3>
          <p className="text-gray-700 mb-4">
            Kontakt ze światem, wyrażanie emocji i podejmowanie decyzji za pomocą innowacyjnych narzędzi komunikacji.
          </p>
        </div>
      </div>
    </section>


    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
    <h2 className="text-3xl sm:text-4xl font-semibold text-[#921d7f] mb-6 text-center">C-eye® Pro jest produktem medycznym</h2>
    <div className="text-center flex justify-center items-center">
        
        <p className="text-lg text-gray-700 mb-8 w-full md:w-3/4">
        C-eye® Pro jest produktem medycznym, wykorzystującym eye tracking. Jest to narzędzie, które pomaga terapeutom w&nbsp;ocenie stanu świadomości oraz rehabilitacji pacjentów z&nbsp;różnorodnymi zaburzeniami neurologicznymi. System C-eye® Pro to również narzędzie pracy wielu specjalistów, takich jak logopedzi, neurologopedzi, psycholodzy, neuropsycholodzy, terapeuci AAC, terapeuci widzenia, terapeuci zajęciowi i&nbsp;fizjoterapeuci.
        </p>
      </div>
</div>

    <section className="container mx-auto my-8 sm:my-16 px-4 sm:px-8 md:px-16 xl:px-32">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <img src="/assets/C-Eye_10.jpg" alt="Urządzenie C-eye® Pro" className="mx-auto mb-4 sm:mb-0 rounded-md" />
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#921d7f] mb-4">Rewolucja w Opiece Neurologicznej</h3>
          <p className="text-gray-700 mb-4">
            C-eye® Pro to przełomowe urządzenie medyczne wykorzystujące technologię śledzenia wzroku. Pomaga terapeutom w ocenie stanu świadomości oraz rehabilitacji pacjentów z różnymi zaburzeniami neurologicznymi.
          </p>
        </div>
      </div>
    </section>


    <div className="bg-white border-t  p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
  <h2 className="text-3xl sm:text-4xl font-semibold text-[#921d7f] mb-6 text-center pt-6 mt-8">Cennik</h2>

 <div className=" flex justify-center items-center">


 <div className="bg-white border-t  p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer text-lg w-full md:w-3/4 mb-6">

    <p><strong className=' text-slate-800'>Neurorehabilitacja z C-eye® Pro:</strong></p>
        <p>300 zł / 60 min - diagnoza w siedzibie PP-P</p>
        <p>900 zł / 60 min – w domu Pacjenta do 25km</p>
        <p>1.500 zł / 60 min – w domu Pacjenta do 60km</p>
        <p>Diagnoza 2 osób lub więcej w jednym miejscu <br />- cena ustalana indywidualnie.</p>
        <p>Diagnoza na grupy osób - cena ustalana indywidualnie.</p>
        <p>Dalsze miejscowości - cena ustalana indywidualnie.</p>
        <p>Diagnoza w języku angielskim - cena ustalana indywidualnie.</p>
        <p>Wydanie opinii wraz z omówieniem - 120 zł.</p>
        <p>Neurorehabilitacja z C-Eye w j. angielskim: dopłata 20% ceny.</p>

        <p>Prowadzimy diagnozy w:</p>
        <p>ośrodkach rehabilitacyjnych,</p>
        <p>domach seniora,</p>
        <p>oddziałach szpitalnych,</p>
        <p>szkołach i przedszkolach specjalnych,</p>
        <p>OREW-ach,</p>
        <p>SOSW-ach,</p>
        <p>ośrodkach szkolno - wychowawczych,</p>
        <p>gabinetach terapeutycznych,</p>
        <p>gabinetach lekarskich,</p>
        <p>fundacjach/stowarzyszeniach.</p>
    </div>
    </div>
  
</div>


    


  </div>
);
};

export default CEye;
