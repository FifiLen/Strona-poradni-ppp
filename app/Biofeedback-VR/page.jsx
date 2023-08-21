'use client'
import React, { useState, useEffect } from 'react';

const Biofeedback = () => {
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

  const faqList = [
    {
      id: 1,
      question: 'Zaawansowana technologia monitorowania i kontroli funkcji fizjologicznych',
      answer: (
        <div>
          <p>
          Easy&nbsp;Biofeedback&nbsp;VR to innowacyjna technologia, która łączy w&nbsp;sobie zalety biofeedbacku i&nbsp;wirtualnej rzeczywistości, otwierając nowe perspektywy w&nbsp;dziedzinie terapii i&nbsp;treningu. Dzięki tej zaawansowanej technologii, możliwe jest monitorowanie i&nbsp;kontrolowanie funkcji fizjologicznych, takich jak tętno, poziom stresu, skurcze mięśni czy aktywność mózgu, w&nbsp;czasie rzeczywistym.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: 'EEG Biofeedback – ile trwa?',
      answer: (
        <div>
    <p>Sterowanie przedmiotami na monitorze za&nbsp;pomocą fal mózgowych posiada efekt terapeutyczny. <br /><br />

W&nbsp;przypadku lekkich zaburzeń koncentracji, trening powinien trwać minimum 12&nbsp;spotkań. <br /><br />
W&nbsp;sytuacji średnich zaburzeń koncentracji wskazane jest przeprowadzenie od&nbsp;20 do&nbsp;60 sesji EEG&nbsp;biofeedbacku. <br /><br />

Osobie, która cierpi na&nbsp;ciężkie zaburzenia koncentracji zaleca się od&nbsp;60 do&nbsp;100 sesji EEG&nbsp;biofeedbacku. <br /><br />

Czas pojedynczej sesji treningowej jest zróżnicowany i&nbsp;zależy od&nbsp;wieku osoby badanej, jego stanu emocjonalnego i&nbsp;psychoruchowego. Zazwyczaj sesja komputerowa trwa kilka minut, natomiast całe spotkanie zajmuje od&nbsp;30 do&nbsp;45 minut.</p>
</div>

      ),
    },
    {
      id: 3,
      question: 'Biofeedback – przebieg',
      answer: (
        <div>
        <p>Podczas każdego treningu ustalany jest wzorzec aktywności mózgu, który jest najbardziej optymalny dla&nbsp;danej osoby.</p>
        <p>Poprzez ustalenie progów dla&nbsp;trenowanych fal, które są&nbsp;wzmacniane albo osłabiane, wyznaczany jest indywidualny cel treningu.</p>
        <p>Osoba podczas treningu nieustannie monitoruje stan fal swojego mózgu, dzięki czemu może w&nbsp;pełni świadomie dążyć do&nbsp;założonego celu.</p>
        <h3>Jak badanie wygląda w&nbsp;praktyce?</h3>
        <p>Pacjent steruje animacją pokazującą się na&nbsp;monitorze komputera (np. steruje ruchem samochodów).</p>
        <p>W&nbsp;zależności od&nbsp;rodzaju fal mózgowych – ich częstotliwości i&nbsp;amplitudy, zależy, jak ta animacja przebiega (np. samochód dojeżdża do&nbsp;celu lub błądzi, lub samochód jest wyraźny bądź staje się nieostry).</p>
        <p>Osoba na&nbsp;bieżąco obserwuje, w&nbsp;jaki sposób przebiega aktywność jej mózgu ma&nbsp;możliwość, aby metodą prób i&nbsp;błędów uczyć się utrzymywać pożądane stany pracy mózgu, które z&nbsp;czasem mają dla&nbsp;mózgu stać się nawykiem.</p>
        </div>
    
      ),
    },
    
    
    {
      id: 4,
      question: 'Biofeedback - korzyści',
      answer: (
        <div>
    <p>Przeważnie podczas treningu mózgu za&nbsp;pomocą biofeedbacku wypracowuje się strategie opanowywania stresu i&nbsp;uzyskiwania swobodnego dostępu samodzielnej relaksacji. Biofeedback niesie jednak jeszcze więcej korzyści dla&nbsp;osoby, która go stosuje.</p>
    <p>Biofeedback pozwala na&nbsp;wypracowanie optymalnych wzorców aktywności mózgu, dzięki czemu osoby uzyskują poprawę w&nbsp;obszarze:</p>
    <ul>
        <li>działania pamięci i&nbsp;koncentracji</li>
        <li>regulacji emocji</li>
        <li>funkcjonowanie w&nbsp;warunkach stresu (obniża stres)</li>
        <li>opanowywania stresu i&nbsp;lęku</li>
        <li>regulowania stanów snu i&nbsp;czuwania</li>
    </ul>
    <p>Biofeedback często stosuje się równolegle z&nbsp;innymi terapiami lub treningami mózgu. Dzięki temu przyspiesza ich działanie i&nbsp;skuteczniej zbliża osobę do&nbsp;wyznaczonego celu.</p>
</div>

      ),
    }
,    
{
  id: 5,
  question: 'Interaktywne wirtualne środowisko dostosowane do danych biologicznych',
  answer: (
    <div>
    <p>Wykorzystując specjalne sensory i&nbsp;urządzenia, Easy Biofeedback VR umożliwia precyzyjny pomiar i&nbsp;analizę danych biologicznych użytkownika. Zgromadzone informacje są&nbsp;następnie wykorzystywane do&nbsp;interakcji z&nbsp;wirtualnym środowiskiem, które może być dostosowane na&nbsp;podstawie bieżących parametrów fizjologicznych.</p>
</div>

  ),
},
    {
      id: 6,
      question: 'Redukcja stresu poprzez wizualne bodźce wirtualnego środowiska',
      answer: (
        <div>
    <p>Pacjenci mogą monitorować swoje poziomy stresu i&nbsp;otrzymywać wizualne bodźce wirtualnego środowiska, które pomagają w&nbsp;redukcji stresu. Jeśli poziom stresu wzrasta, wirtualne środowisko reaguje, prezentując sceny zaprojektowane do&nbsp;wywoływania relaksu i&nbsp;obniżania napięcia. Dzięki interaktywnemu charakterowi tej technologii, osoby korzystające z&nbsp;niej mają możliwość nauki skutecznych technik relaksacyjnych i&nbsp;samoregulacji w&nbsp;sposób kontrolowany i&nbsp;angażujący.</p>
</div>

      )
    },
    {
      id: 7,
      question: 'Efektywny trening, rehabilitacja i terapia',
      answer: (
        <div>
        <p>Easy Biofeedback VR znajduje również zastosowanie w&nbsp;treningu sportowym, rehabilitacji fizycznej oraz terapii nerwic i&nbsp;lęków. W&nbsp;trakcie treningu, technologia umożliwia śledzenie postępów użytkownika i&nbsp;dostosowywanie programu treningowego na&nbsp;podstawie bieżących danych biologicznych. Dzięki temu, proces doskonalenia umiejętności lub powrotu do&nbsp;zdrowia może być bardziej efektywny i&nbsp;spersonalizowany.</p>
    </div>
    
      )
    },
    {
      id: 8,
      question: 'Dostęp do skutecznych technik samoregulacji',
      answer: (
        <div>
<p>Niezależnie od tego, czy korzystasz z&nbsp;Easy Biofeedback VR w&nbsp;profesjonalnym gabinecie terapeutycznym, czy w&nbsp;zaciszu własnego domu, ta technologia zapewnia większą autonomię i&nbsp;dostęp do skutecznych technik samoregulacji. Otwiera nowe możliwości w&nbsp;terapii i&nbsp;treningu, umożliwiając osiąganie lepszych wyników i&nbsp;poprawę jakości życia.</p>
        </div>
      )
    },
    {
      id: 9,
      question: 'Innowacyjność, nauka i skuteczność',
      answer: (
        <div>
<p>Easy Biofeedback VR to zaawansowana technologia, która łączy w&nbsp;sobie naukę, innowację i&nbsp;skuteczność. Pozwól, aby Twoje doświadczenie terapeutyczne lub treningowe stało się jeszcze bardziej interaktywne i&nbsp;efektywne dzięki Easy Biofeedback VR.</p>
        </div>
      )
    },
    {
      id: 10,
      question: 'Aparat do terapii, wg A. TOMATIS Uwaga Słuchowa PRO',
      answer: (
        <div>
          <br />
          <p>Aparat do terapii, wg&nbsp;A.&nbsp;TOMATIS Uwaga Słuchowa PRO to <b>wyrób medyczny</b>,<br /> jego Deklaracja zgodności dla wyrobu medycznego <b>(93/42/EEC)</b></p><br />

        </div>
      )
    }

    // Dodaj inne pytania i odpowiedzi według potrzeb
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  // Dodajemy efekt, aby dodawać/usuwać klasę CSS "expanded" w zależności od wartości "expandedId"
  useEffect(() => {
    const faqElements = document.querySelectorAll('.faq-content');
    faqElements.forEach((element) => {
      if (expandedId === null || element.id !== `faq-${expandedId}`) {
        element.classList.remove('expanded');
      } else {
        element.classList.add('expanded');
      }
    });
  }, [expandedId]);

  return (
    <>
      <div className="relative h-[520px] overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
  <source src="/assets/movie9.mp4" type="video/mp4" />
  Twoja przeglądarka nie obsługuje tagu video.
</video>

        <div className="absolute top-0 left-0 w-full h-[620px] bg-black opacity-40 z-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">Biofeedback VR</h1>
          <p className="text-sm sm:text-base md:text-lg text-white">Technologia Łącząca Biofeedback i Wirtualną Rzeczywistość</p>
        </div>
      </div>
  
      <div className="max-w-3xl mx-auto mt-10 mb-6 min-h-screen flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-5 sm:mb-8 md:mb-10 lg:mb-12 text-center mt-10">Biofeedback VR</h2>
        
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="mx-auto">
            <ul className="divide-y divide-gray-300">
              {faqList.map((faq) => (
                <li key={faq.id} className="py-4">
                  <button
                    className="faq-button w-full flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAnswer(faq.id)}
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 ${expandedId === faq.id ? 'transform rotate-180' : ''}`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  {expandedId === faq.id && (
                    <div
                      id={`faq-${faq.id}`}
                      className="faq-content mt-2 pr-4 text-gray-600"
                    >
                      {faq.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
                  }  

export default Biofeedback; 