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
        category: "Terapia uzależnień",
        name: "Terapia uzależnień",
        price: "150zł / 50 min - stacjonarnie / online",
        info: (
          <div>
            <p>
              Terapia uzależnień to profesjonalne wsparcie w radzeniu sobie z różnymi formami uzależnień, takimi jak:
            </p>
            <ul>
              <li>E-uzależnienia: gry, telefon, komputer, sex chaty, portale randkowe, media społecznościowe, hazard online, zakłady bukmacherskie online, sieć,</li>
              <li>Alkohol,</li>
              <li>Leki,</li>
              <li>Hazard,</li>
              <li>Erotomania/seks,</li>
              <li>Zaburzenia odżywiania,</li>
              <li>Internet,</li>
              <li>Narkotyki.</li>
            </ul>
            <p>
              Cena sesji terapeutycznej: 150zł za 50 minut, dostępna zarówno w trybie stacjonarnym, jak i online.
            </p>
            <p>
              Sesje online są również dostępne w innych językach:
            </p>
            <ul>
              <li>40 EUR / 50 min - online w języku angielskim,</li>
              <li>40 EUR / 50 min - online w języku hiszpańskim,</li>
              <li>40 EUR / 50 min - online w języku ukraińskim,</li>
              <li>40 EUR / 50 min - online w języku rosyjskim.</li>
            </ul>
          </div>
        )
      },

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
        <p className="text-gray-600 mb-6 text-center italic">Centrum uzależnień</p>
  
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