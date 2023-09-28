'use client'
import React, { useEffect, useState } from 'react';
useEffect

const PriceList = () => {
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


    const [categoryOpen, setCategoryOpen] = useState({});
  
    const services = [
        {
          category: "Wsparcie psychologiczne",
          name: "Wsparcie psychologiczne",
          price: "150zł / 50 min - stacjonarnie / online",
          info: (
            <div>
              <p>
                Oferujemy wsparcie psychologiczne dla różnych grup wiekowych, w tym dzieci, młodzieży, kobiet, mężczyzn, par i seniorów. Nasze usługi obejmują:
              </p>
              <ul>
                <li>Wsparcie w kryzysie,</li>
                <li>Terapia psychologiczna osób w żałobie,</li>
                <li>Wsparcie w trudnościach szkolnych,</li>
                <li>Wsparcie w trudnościach interpersonalnych,</li>
                <li>Trudności w relacjach z rówieśnikami,</li>
                <li>Wsparcie w stanach lękowych,</li>
                <li>Wsparcie w stanach depresyjnych,</li>
                <li>Trudności z niską samooceną,</li>
                <li>Redukcja i zarządzanie stresem,</li>
                <li>Kontrolowanie wściekłości i złości,</li>
                <li>Ataki paniki,</li>
                <li>Zaburzenia odżywiania i obraz ciała,</li>
                <li>Kwestie relacji partnerskich,</li>
                <li>Nadwrażliwość,</li>
                <li>Wsparcie w zmianach życiowych,</li>
                <li>Depresja poporodowa,</li>
                <li>Kryzys wieku średniego,</li>
                <li>Zaburzenia adaptacyjne związane ze stratą, rozwodem, chorobą medyczną i innymi zmianami życiowymi,</li>
                <li>Zespół stresu pourazowego dla ofiar traumy seksualnej, przemocy, nadużyć i innych urazów,</li>
                <li>Usługi wsparcia dla Seniorów.</li>
              </ul>
              <p>
                Cena sesji wsparcia psychologicznego wynosi 150zł za 50 minut i jest dostępna zarówno w trybie stacjonarnym, jak i online.
              </p>
            </div>
          )
        },
        


      {
        category: "Psychoterapia dla dorosłych",
        name: "Terapia uzależnień",
        price: "150zł / 45 min - stacjonarnie",
        variant: "130zł / 45 min - online",
        variant2: "40 EUR / 45 min - online w j. angielskim",
        info: (
          <p>
            Terapia uzależnień skupiająca się&nbsp;na różnych formach uzależnień, takich&nbsp;jak:
            <ul>
              <li>alkohol,</li>
              <li>używki,</li>
              <li>hazard,</li>
              <li>sex,</li>
              <li>portale randkowe,</li>
              <li>social media,</li>
              <li>gry komputerowe,</li>
              <li>Internet.</li>
            </ul>
          </p>
        )
      },

      {
        category: "Terapie",
        name: "Terapia par",
        price: "200zł / 60 min - stacjonarnie / online",
        info: (
          <div>
            <p>
              Terapia par to profesjonalne wsparcie mające na celu pomóc w rozwiązywaniu problemów w związku. Cena sesji terapeutycznej dla par wynosi 200zł za 60 minut i jest dostępna zarówno w trybie stacjonarnym, jak i online.
            </p>
            <p>
              Sesje online są również dostępne w różnych językach:
            </p>
            <ul>
              <li>50 EUR / 60 min - online w języku angielskim,</li>
              <li>50 EUR / 60 min - online w języku hiszpańskim,</li>
              <li>50 EUR / 60 min - online w języku ukraińskim,</li>
              <li>50 EUR / 60 min - online w języku rosyjskim.</li>
            </ul>
          </div>
        )
      },

      {
        category: "Terapie",
        name: "Terapia rodzin",
        price: "200zł / 60 min - stacjonarnie / online",
        info: (
          <div>
            <p>
              Specjalistyczna terapia rodzin ma na celu wsparcie rodziny w trudnych sytuacjach, rozwiązanie konfliktów wewnętrznych oraz poprawę komunikacji między członkami rodziny. Cena sesji terapeutycznej dla rodzin wynosi 200zł za 60 minut i jest dostępna zarówno w trybie stacjonarnym, jak i online.
            </p>
          </div>
        )
      },


      {
        category: "Opinie",
        name: "Opinia o braku przeciwwskazań do podjęcia pracy zarobkowej",
        price: "250 zł - stacjonarnie/online",
        info: (
          <div>
            <p>
              Oferujemy opinię dotyczącą braku przeciwwskazań do podjęcia pracy zarobkowej lub opinii do szkoły muzycznej. To profesjonalne badanie, które ma na celu ocenę zdolności i przygotowania osoby do podjęcia określonej aktywności zawodowej lub edukacyjnej.
            </p>
            <p>
              Cena opinii wynosi 250 zł, a czas trwania badania to około 1,5 godziny. Badanie jest dostępne zarówno w formie stacjonarnej, jak i online.
            </p>
          </div>
        )
      }
      
      
      
    ];
  
    const groupedServices = services.reduce((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    }, {});
  
    const navigationLinks = Object.keys(groupedServices);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
  
      // Zaktualizuj stan, aby otworzyć/zamknąć kategorię
      setCategoryOpen((prevState) => ({
        ...prevState,
        [id]: !prevState[id] || false,
      }));
    }
  
    return (
      <div className="p-4 max-w-5xl mx-auto mt-20 mb-20 relative scroll-smooth">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 text-center">Cennik</h1>
        <p className="text-gray-600 mb-6 text-center italic">Oferta dla dorosłych</p>
  
        {/* Nawigacja */}
        <nav className="mb-8 text-center">
          {navigationLinks.map(link => (
            <button 
              onClick={() => scrollToSection(link)}
              className="inline-block px-4 py-2 mr-2 mb-2 bg-white border rounded text-gray-700 hover:bg-gray-200 transition duration-300 focus:outline-none"
            >
              {link}
            </button>
          ))}
        </nav>
  
        {/* Wyświetlanie usług według kategorii */}
        {Object.entries(groupedServices).map(([category, servicesInCategory]) => (
          <div key={category} id={category}>
           <h2
  onClick={() => scrollToSection(category)}
  className="cursor-pointer text-lg text-white mb-3 border-[1px] bg-[#921d7f] rounded-lg p-4 flex items-center justify-between"
>
  <div>{category}</div>
  <div className=' mr-4'>{categoryOpen[category] ? '-' : '+'}</div>
</h2>

            {categoryOpen[category] && (
              
              servicesInCategory.map((service, sIndex) => (
                <div
                  key={service.name}
                  className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-lg ${sIndex !== 0 ? 'mt-4' : ''}`}
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
                      <p className="text-xl font-bold mt-2 text-[#921d7f]">{service.price}</p>
                      <p className="mt-2 text-gray-600">{service.variant}</p>
                      <p className="mt-2 text-gray-600">{service.variant2}</p>
                      <p className="mt-2 text-gray-600">{service.variant3}</p>
                      <p className="mt-2 text-gray-600">{service.info}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
  
        {/* Przycisk do przewijania na górę */}
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#921d7f] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#7a175e] transition duration-300"
          title="Przewiń do góry"
        >
          ↑
        </button>
      </div>
    );
  }
  export default PriceList;