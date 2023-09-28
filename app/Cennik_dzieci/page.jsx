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
        category: "Terapie dla dzieci i młodzieży",
        name: "Zajęcia z pedagogiem specjalnym z elementami terapii behawioralnej",
        price: "150 zł / 50min - stacjonarnie/online",
        variant: "40 EUR / 50 min - online w j. angielskim",
        info: (
          <p>
          Indywidualne zajęcia&nbsp;z pedagogiem specjalnym skupiające się&nbsp;na wsparciu rozwoju oraz&nbsp;terapii behawioralnej.
      </p>
      
        )
      },

      {
        category: "Terapie dla dzieci i młodzieży",
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
    category: "Konsultacje",
    name: "Konsultacja psychiatryczna",
    price: "150zł / 60 min - stacjonarnie",
    info: (
      <p>
      Specjalistyczna konsultacja psychiatryczna,&nbsp;dostosowana do&nbsp;potrzeb pacjenta, w&nbsp;celu diagnozy i&nbsp;ewentualnych zaleceń leczenia.
  </p>
  
    )
  },
  {
    category: "Konsultacje",
    name: "Konsultacje rodzicielskie z psychoterapeutą",
    price: "250 zł / 90min - stacjonarnie",
    variant2: "40 EUR / 60 min - online w j.angielskim",
    info: (
      <p>
      Konsultacje rodzicielskie z&nbsp;doświadczonym psychoterapeutą, mające na&nbsp;celu wsparcie rodziców w&nbsp;wychowywaniu i&nbsp;zrozumieniu potrzeb swoich dzieci.
  </p>
  
    )
  },
  
  {
    category: "Badania",
    name: "Badanie pod kątem dysleksji, dysortografii i dysgrafii",
    price: "250 zł / 120 minut - stacjonarnie",
    info: (
      <div>
        <p>
          Kompleksowe badanie psychologiczno-pedagogiczne ma na celu zidentyfikowanie potencjalnych trudności w nauce związanych z dysleksją, dysortografią oraz dysgrafią. Badanie obejmuje zarówno analizę psychologiczną, jak i pedagogiczną, co pozwala na precyzyjne określenie potrzeb edukacyjnych osoby badanej.
        </p>
        <p>
          Cena badania wynosi 250 zł, a czas trwania badania to 120 minut. Badanie odbywa się w trybie stacjonarnym.
        </p>
      </div>
    )
  },

  
  



{
  category: "Diagnozy dzieci i młodzieży",
  name: "KOLD-PT - Karty Oceny Logopedycznej Dziecka",
  price: "250 zł / 120 min",
  info: (
    <div>
      <p>
        KOLD-PT (Karty Oceny Logopedycznej Dziecka) to badanie logopedyczne przeznaczone dla dzieci od 12. miesiąca życia. Za pomocą KOLD-PT dokonuje się wszechstronnej diagnozy funkcji mowy i języka, co umożliwia wczesne wykrywanie ewentualnych nieprawidłowości oraz planowanie indywidualnej terapii. Badanie prowadzone jest w formie kart oceny, które są dostosowane do wieku i poziomu rozwoju dziecka.
      </p>
      <p>
        Cena badania logopedycznego KOLD-PT wynosi 250 zł za 120 minut.
      </p>
    </div>
  )
},
{
  category: "Diagnozy dzieci i młodzieży",
  name: "Diagnoza KOJD-AFA",
  price: "250 zł / 90 - 120 min - stacjonarnie",
  info: (
    <div>
      <p>
        Diagnoza KOJD-AFA (Ocena Języka Dziecka Afatycznego) to profesjonalna ocena jakościowa języka u dzieci z afazją. Badanie ma na celu dokładną ocenę zdolności językowych i komunikacyjnych dziecka oraz planowanie odpowiedniej terapii.
      </p>
      <p>
        Cena diagnozy KOJD-AFA wynosi 250 zł, a czas trwania badania wynosi od 90 do 120 minut. Badanie jest dostępne tylko w trybie stacjonarnym.
      </p>
    </div>
  )
},
{
  category: "Diagnozy dzieci i młodzieży",
  name: "Diagnoza KOZE",
  price: "250 zł / 90 - 120 min - stacjonarnie",
  info: (
    <div>
      <p>
        Diagnoza KOZE (Ocena Zachowania i Emocji Dziecka) to profesjonalna ocena i opis nieprawidłowości w zachowaniu i reakcjach emocjonalnych dziecka od wieku niemowlęcego do końca okresu szkolnego. Badanie ma na celu identyfikację ewentualnych problemów zachowania i emocji oraz dostarczenie kompleksowej oceny dla dalszych działań terapeutycznych lub wsparcia.
      </p>
      <p>
        Cena diagnozy KOZE wynosi 250 zł, a czas trwania badania wynosi od 90 do 120 minut. Badanie jest dostępne tylko w trybie stacjonarnym.
      </p>
    </div>
  )
},
{
  category: "Diagnozy dzieci i młodzieży",
  name: "Diagnoza KOLD",
  price: "250 zł / 90 - 120 min - stacjonarnie",
  info: (
    <div>
      <p>
        Diagnoza KOLD (Ocena Rozwoju Mowy Dziecka) to profesjonalna ocena dzieci w wieku od 6 miesiąca do ukończenia 9 roku życia. Badanie ma na celu ocenę prawidłowego i zaburzonego rozwoju mowy dziecka, co pozwala na wczesne wykrywanie ewentualnych trudności oraz planowanie odpowiedniej terapii.
      </p>
      <p>
        Cena diagnozy KOLD wynosi 250 zł, a czas trwania badania wynosi od 90 do 120 minut. Badanie jest dostępne tylko w trybie stacjonarnym.
      </p>
    </div>
  )
},
{
  category: "Diagnozy dzieci i młodzieży",
  name: "Diagnoza KOGS",
  price: "600zł - stacjonarnie",
  variant: "500zł - online",
  info: (
    <p>
    Diagnoza dojrzałości i&nbsp;gotowości szkolnej dla dzieci w&nbsp;wieku od&nbsp;5 do&nbsp;7 lat. <br />
    Czas trwania: 3 – 5 godzin, rozłożonych na&nbsp;2 dni. <br /><br />
    Proces diagnozy obejmuje:&nbsp;
    <ul>
        <li>- Konsultacja z&nbsp;rodzicami,</li>
        <li>- Badanie psychologiczne,</li>
        <li>- Badanie pedagogiczne,</li>
        <li>- Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
    </ul> <br />
    *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
</p>

  )
},

{
  category: "Diagnozy dzieci i młodzieży",
  name: "Diagnoza ucznia szczególnie zdolnego",
  price: "600zł - stacjonarnie",
  variant: "500zł - online",
  info: (
    <p>
    Dla dzieci w&nbsp;wieku od&nbsp;5 do&nbsp;7 lat. <br />
    Czas trwania: 3 do&nbsp;5 godzin, przeprowadzane w&nbsp;ciągu 2 dni. <br /><br />
    <ul>
        <li>Konsultacja z&nbsp;rodzicami,</li>
        <li>Badanie psychologiczne,</li>
        <li>Badanie pedagogiczne,</li>
        <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
    </ul><br />
    *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
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
        <p className="text-gray-600 mb-6 text-center italic">Oferta dla dzieci i młodzieży</p>
  
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