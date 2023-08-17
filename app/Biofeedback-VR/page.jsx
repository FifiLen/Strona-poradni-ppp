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
            Easy Biofeedback VR to innowacyjna technologia, która łączy w sobie zalety biofeedbacku i wirtualnej rzeczywistości, otwierając nowe perspektywy w dziedzinie terapii i treningu. Dzięki tej zaawansowanej technologii, możliwe jest monitorowanie i kontrolowanie funkcji fizjologicznych, takich jak tętno, poziom stresu, skurcze mięśni czy aktywność mózgu, w czasie rzeczywistym.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: 'EEG Biofeedback – ile trwa?',
      answer: (
        <div>
          <p>Sterowanie przedmiotami na monitorze za pomocą fal mózgowych posiada efekt terapeutyczny. <br /><br />

W przypadku lekkich zaburzeń koncentracji, trening powinien trwać minimum 12 spotkań. <br /><br />
W sytuacji średnich zaburzeń koncentracji wskazane jest przeprowadzenie od 20 do 60 sesji EEG biofeedbacku. <br /><br />

Osobie, która cierpi na ciężkie zaburzenia koncentracji zaleca się od 60 do 100 sesji EEG biofeedbacku. <br /><br />

Czas pojedynczej sesji treningowej jest zróżnicowany i zależy od wieku osoby badanej, jego stanu emocjonalnego i psychoruchowego. Zazwyczaj sesja komputerowa trwa kilka minut, natomiast całe spotkanie zajmuje od 30 do 45 minut.</p>
        </div>
      ),
    },
    {
      id: 3,
      question: 'Biofeedback – przebieg',
      answer: (
        <div>
          <p>Podczas każdego treningu ustalany jest wzorzec aktywności mózgu, który jest najbardziej optymalny dla danej osoby.</p>
          <p>Poprzez ustalenie progów dla trenowanych fal, które są wzmacniane albo osłabiane, wyznaczany jest indywidualny cel treningu.</p>
          <p>Osoba podczas treningu nieustannie monitoruje stan fal swojego mózgu, dzięki czemu może w pełni świadomie dążyć do założonego celu.</p>
          <h3>Jak badanie wygląda w praktyce?</h3>
          <p>Pacjent steruje animacją pokazującą się na monitorze komputera (np. steruje ruchem samochodów).</p>
          <p>W zależności od rodzaju fal mózgowych – ich częstotliwości i amplitudy, zależy, jak ta animacja przebiega (np. samochód dojeżdża do celu lub błądzi, lub samochód jest wyraźny bądź staje się nieostry).</p>
          <p>Osoba na bieżąco obserwuje, w jaki sposób przebiega aktywność jej mózgu ma możliwość, aby metodą prób i błędów uczyć się utrzymywać pożądane stany pracy mózgu, które z czasem mają dla mózgu stać się nawykiem.</p>
        </div>
      ),
    },
    
    
    {
      id: 4,
      question: 'Biofeedback - korzyści',
      answer: (
        <div>
          <p>Przeważnie podczas treningu mózgu za pomocą biofeedbacku wypracowuje się strategie opanowywania stresu i uzyskiwania swobodnego dostępu samodzielnej relaksacji. Biofeedback niesie jednak jeszcze więcej korzyści dla osoby, która go stosuje.</p>
          <p>Biofeedback pozwala na wypracowanie optymalnych wzorców aktywności mózgu, dzięki czemu osoby uzyskują poprawę w obszarze:</p>
          <ul>
            <li>działania pamięci i koncentracji</li>
            <li>regulacji emocji</li>
            <li>funkcjonowanie w warunkach stresu (obniża stres)</li>
            <li>opanowywania stresu i lęku</li>
            <li>regulowania stanów snu i czuwania</li>
          </ul>
          <p>Biofeedback często stosuje się równolegle z innymi terapiami lub treningami mózgu. Dzięki temu przyspiesza ich działanie i skuteczniej zbliża osobę do wyznaczonego celu.</p>
        </div>
      ),
    }
,    
{
  id: 5,
  question: 'Interaktywne wirtualne środowisko dostosowane do danych biologicznych',
  answer: (
    <div>
      <p>Wykorzystując specjalne sensory i urządzenia, Easy Biofeedback VR umożliwia precyzyjny pomiar i analizę danych biologicznych użytkownika. Zgromadzone informacje są następnie wykorzystywane do interakcji z wirtualnym środowiskiem, które może być dostosowane na podstawie bieżących parametrów fizjologicznych.</p>
    </div>
  ),
},
    {
      id: 6,
      question: 'Redukcja stresu poprzez wizualne bodźce wirtualnego środowiska',
      answer: (
        <div>
          <p>Pacjenci mogą monitorować swoje poziomy stresu i otrzymywać wizualne bodźce wirtualnego środowiska, które pomagają w redukcji stresu. Jeśli poziom stresu wzrasta, wirtualne środowisko reaguje, prezentując sceny zaprojektowane do wywoływania relaksu i obniżania napięcia. Dzięki interaktywnemu charakterowi tej technologii, osoby korzystające z niej mają możliwość nauki skutecznych technik relaksacyjnych i samoregulacji w sposób kontrolowany i angażujący.</p><br />
        </div>
      )
    },
    {
      id: 7,
      question: 'Efektywny trening, rehabilitacja i terapia',
      answer: (
        <div>
          <p>Easy Biofeedback VR znajduje również zastosowanie w treningu sportowym, rehabilitacji fizycznej oraz terapii nerwic i lęków. W trakcie treningu, technologia umożliwia śledzenie postępów użytkownika i dostosowywanie programu treningowego na podstawie bieżących danych biologicznych. Dzięki temu, proces doskonalenia umiejętności lub powrotu do zdrowia może być bardziej efektywny i spersonalizowany.</p><br />
        </div>
      )
    },
    {
      id: 8,
      question: 'Dostęp do skutecznych technik samoregulacji',
      answer: (
        <div>
          <p>Niezależnie od tego, czy korzystasz z Easy Biofeedback VR w profesjonalnym gabinecie terapeutycznym, czy w zaciszu własnego domu, ta technologia zapewnia większą autonomię i dostęp do skutecznych technik samoregulacji. Otwiera nowe możliwości w terapii i treningu, umożliwiając osiąganie lepszych wyników i poprawę jakości życia.</p>
        </div>
      )
    },
    {
      id: 9,
      question: 'Innowacyjność, nauka i skuteczność',
      answer: (
        <div>
          <p>Easy Biofeedback VR to zaawansowana technologia, która łączy w sobie naukę, innowację i skuteczność. Pozwól, aby Twoje doświadczenie terapeutyczne lub treningowe stało się jeszcze bardziej interaktywne i efektywne dzięki Easy Biofeedback VR.</p>
        </div>
      )
    },
    {
      id: 10,
      question: 'Aparat do terapii, wg A. TOMATIS Uwaga Słuchowa PRO',
      answer: (
        <div>
          <br />
          <p>Aparat do terapii, wg A. TOMATIS Uwaga Słuchowa PRO to <b>wyrób medyczny</b>,<br /> jego Deklaracja zgodności dla wyrobu medycznego <b>(93/42/EEC)</b></p><br />

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
          <h1 className="text-4xl text-white font-bold">Biofeedback VR</h1>
          <p className="text-white">Technologia Łącząca Biofeedback i Wirtualną Rzeczywistość</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 mb-16 min-h-screen flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800  mb-10 mt-10 sm:mt-16 lg:mt-20 text-center">Biofeedback VR</h2>
          <div className="flex-1 overflow-y-auto pb-6">
              <div className="mx-auto">
                  <ul className="divide-y divide-gray-300">
                      {faqList.map((faq) => (
                          <li key={faq.id} className="py-4">
                              <button
                                  className="faq-button w-full flex justify-between items-center focus:outline-none"
                                  onClick={() => toggleAnswer(faq.id)}
                              >
                                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
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
    )};

export default Biofeedback; 