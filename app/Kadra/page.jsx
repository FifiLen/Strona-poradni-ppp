'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
useEffect

const staffData = [
  {
    id: 1,
    name: 'Wioletta Ginter',
    specialty: 'Pedagog',
    description: (
     <p>Magister pedagogiki specjalizujący się w&nbsp; poradnictwie i&nbsp;pomocy psychopedagogicznej. Jako aktywny pedagog specjalny, terapeuta ręki, specjalista w&nbsp; edukacji włączającej i&nbsp;wykładowca, posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i&nbsp;nauczycielom w&nbsp; różnych instytucjach edukacyjnych. Specjalista ORE w&nbsp; zakresie edukacji włączającej.</p> ),
    imageUrl: '/assets/Test.png',
  },
  {
    id: 5,
    name: 'Anna Ławniczak',
    specialty: 'Psycholog',
    description: (<p>
    Magister psychologii, specjalizujący się w&nbsp;seksuologii klinicznej i&nbsp;psychologii kryminologicznej. Wykładowca studiów podyplomowych z&nbsp;obszaru pedagogiki specjalnej, seksuologii, seksuologii klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się w&nbsp;pracę na&nbsp;rzecz dzieci w&nbsp;szkołach i&nbsp;przedszkolach. Specjalista ORE w&nbsp;zakresie edukacji włączającej.
    </p>),
    imageUrl: '/assets/T5.png',
  },
  {
    id: 10,
    name: 'Monika Kromolan',
    specialty: 'Psycholog',
    description: (<p>
Magister psychologii z&nbsp;zakresu neuropsychologii i&nbsp;psychologii klinicznej. Specjalista w&nbsp;zintegrowanej edukacji wczesnoszkolnej, edukacji informatycznej oraz edukacji i&nbsp;rehabilitacji osób z&nbsp;niepełnosprawnością intelektualną. Terapeuta WWRD i&nbsp;hipoterapii. Specjalista w&nbsp;zakresie komunikacji alternatywnej i&nbsp;wspomagającej oraz diagnozy alternatywnych i&nbsp;wspomagających metod porozumiewania się.
    </p>),
    imageUrl: '/assets/T11.png',
  },
  {
    id: 12,
    name: 'Gabriela Marcisz',
    specialty: 'Psychoterapeuta',
    description: (<p>
Magister psychologii, psychoterapeuta. Terapeuta dorosłych, par i&nbsp;rodzin. Specjalista psychoterapii w&nbsp;Ośrodku Interwencji Kryzysowej, Poradni Zdrowia Psychicznego, Poradni Leczenia Nerwic i&nbsp;na Dziennym Oddziale Leczenia Nerwic. Specjalista skupiony na&nbsp;pracy z&nbsp;całymi rodzinami i&nbsp;osobami pełnoletnimi.
    </p>),
    imageUrl: '/assets/T13.png',
  },
  {
    id: 13,
    name: 'Anna Kowalska',
    specialty: 'Psycholog',
    description: (<p>
Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i&nbsp;Edukacji Społecznej, muzykoterapeuta. Psychodietetyk, trener nowoczesnego doradztwa zawodowego i&nbsp;edukacyjnego. Teraputa z&nbsp;zakresu psychoterapii par, EFT - terapii skoncentrowanej na&nbsp;emocjach, pracy z&nbsp;dziećmi i&nbsp;młodzieżą. Specjalista edukacji włączającej. Wykładowca studiów podyplomowych z&nbsp;zakresu swoich specjalizacji.
    </p>),
    imageUrl: '/assets/T15.png',
  },
  
  {
    id: 2,
    name: 'Klaudia Rogalska',
    specialty: 'Trener',
    description: (
      <p>Magister filologii angielskiej. Wykładowca na&nbsp;kierunku język angielski oraz&nbsp;PR. Metodykiem i&nbsp;trener nauczycieli języków obcych. Trener TIK w&nbsp;tym wykorzystania nowych technologii w&nbsp;pracy z&nbsp;uczniami ze&nbsp;SPE. Terapeuta w&nbsp;obszarze wykorzystania Wirtualnej Rzeczywistości w&nbsp;Terapii Przyszłości. Specjalista ORE w&nbsp;zakresie edukacji włączającej. Specjalista i&nbsp;trener regionalny woj. śląskiego TIK. Autor kursów online i&nbsp;autorskich materiałów dydaktycznych. </p>
    ),
    imageUrl: '/assets/T10.png',
  },
  {
    id: 3,
    name: 'Sylwia Cuber',
    specialty: 'Pedagog',
    description: (<p>
      Magister pedagogiki specjalność: edukacja przedszkolna i&nbsp;wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z&nbsp;dodatkowym językiem angielskim, czynny pedagog specjalny w&nbsp;szkole podstawowej, specjalista ORE w&nbsp;zakresie edukacji włączającej, trener treningu umiejętności społecznych (TUS) dzieci ze&nbsp;spektrum autyzmu, edukacja i&nbsp;terapia osób ze&nbsp;spektrum autyzmu. Wykładowca studiów podyplomowych z&nbsp;zakresu pedagogiki specjalnej.
    </p>),
    imageUrl: '/assets/T2.png',
  },
  
  {
    id: 4,
    name: 'Aleksandra Wowra',
    specialty: 'Pedagog',
    description:(<p>
      Magister pedagogiki – specjalność: opiekuńczo – wychowawczej, oligofrenopedagog, specjalista ORE w&nbsp;zakresie edukacji włączającej, czynny pedagog specjalny. Wykładowca na&nbsp;kierunkach pedagogiki specjalnej na&nbsp;studiach podyplomowych.
    </p>),
    imageUrl: '/assets/T9.png',
  },
  
  {
    id: 6,
    name: 'Joanna Zawadzka',
    specialty: 'Psycholog',
    description: (<p>
      Magister języka polskiego, specjalista z&nbsp;zakresu terapii pedagogicznej, diagnozy i&nbsp;profilaktyki społecznej. Terapeuta z&nbsp;obszaru diagnozy dysleksji rozwojowej, egzaminator OKE, nauczyciel języka polskiego jako obcego,  prezes Oddziału Towarzystwo Dysleksji w&nbsp;Rybniku. Doradca i&nbsp;autor publikacji dla IBE- Instytut Badań Edukacyjnych. Pracuje z&nbsp;uczniami uzdolnionymi (przygotowanie do&nbsp;egzaminów/olimpiad).
        </p>),
    imageUrl: '/assets/T3.png'    
  },
  {
    id: 7,
    name: 'Jakub Ruks',
    specialty: 'Etyk',
    description: (<p>
      Doktor filozofii. Wykładowca na&nbsp;kierunkach: etyka oraz filozofia. Czynny nauczyciel etyki i&nbsp;filozofii w&nbsp;szkole podstawowej i&nbsp;ponadpodstawowej. Trener pracujący z&nbsp;ucznem uzdolnionym - przygotowanie do&nbsp;certyfikatów z&nbsp;języka niemieckiego. Specjalista z&nbsp;zakresu  wiedzy o&nbsp;młodym człowieku. Autor scenariuszy zajęć do&nbsp;etyki na&nbsp;wszystkich poziomach kształcenia. Specjalista ORE w&nbsp;zakresie edukacji włączającej.
    </p>),
    imageUrl: '/assets/T4.png',
  },
  {
    id: 8,
    name: 'Małgorzata Solowska',
    specialty: 'Trener',
    description: (<p>
Magister języka angielskiego, magister historii, trener i&nbsp;moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i&nbsp;szkoleń międzynarodowych oraz ogólnopolskich. Specjalista ORE w&nbsp;zakresie edukacji włączającej. Trener TIK w&nbsp;tym wykorzystania nowych technologii w&nbsp;pracy z&nbsp;uczniami ze&nbsp;SPE. Wykładowca studiów podyplomowych z&nbsp;zakresu zarządzania oświatą, historii oraz języka angielskiego.
    </p>),
    imageUrl: '/assets/T6.png',
  },
  {
    id: 9,
    name: 'Anna Falkowska',
    specialty: 'Pedagog, Socjolog',
    description: (<p>
Doktor nauk społecznych z&nbsp;dziedziny pedagogiki i&nbsp;socjologii.  Doradca zawodowy oraz specjalista z&nbsp;zakresu prawa ochrony środowiska i&nbsp;edukacji ekologicznej. Specjalista ORE z&nbsp;zakresu edukacji włączającej. Trener TIK. Specjalista programów do&nbsp;interaktywnej&nbsp;edukacji. Wykładowca akademicki na&nbsp;uczelniach o&nbsp;profilu przyrodniczym, autorka wielu publikacji naukowych i&nbsp;po-konferencyjnych. Ekspert edukacji ekologicznej.
      </p>),
    imageUrl: '/assets/T8.png',
  },
  
  
  {
    id: 11,
    name: 'Paulina Rosa',
    specialty: 'Logopeda',
    description: (<p>
Magister polonistyki, logopeda, egzaminator TELC języka polskiego jako obcego, trener języka polskiego jako obcego, czynny nauczyciel w&nbsp;szkole podstawowej i&nbsp;ponadpodstawowej, terapeuta sesji logopedycznych. Trener z&nbsp;obszaru edukacji włączającej. Wykładowca na&nbsp;studiach podyplomowych.
    </p>) ,
    imageUrl: '/assets/T12.png',
  },
  
  
  {
    id: 14,
    name: 'Martyna Papała',
    specialty: 'Dyrektor szkoły dla młodzieży, Nauczyciel matematyki, Trener TIK',
    description: (
      <p>
        Dyrektor szkoły dla młodzieży oraz nauczyciel matematyki w szkole ponadpodstawowej.
        Trener z zakresu TIK. Ukończyła formy doskonalenia zawodowego realizowane w ramach projektu:
        "Uczeń ze specjalnymi potrzebami edukacyjnymi - opracowanie modelu szkolenia i doradztwa".
        Wykładowca na studiach podyplomowych z obszaru zarządzania oświatą.
        Prowadzi zajęcia z matematyki dla uczniów przygotowujących się do egzaminów, ale też
        potrzebujących pomocy w rozumieniu zawiłości świata matematycznego.
      </p>
    ),
    imageUrl: '/assets/T16.png',
  },
  
  {
    id: 15,
    name: 'Katarzyna Duźniak',
    specialty: 'Pedagog',
    description: (<p>
Magister pedagogiki, specjalizuje się w&nbsp;pracy socjalnej oraz opiekuńczo-wychowawczej. Wieloletni terapeuta uzależnień, biegła sądowa w&nbsp;sprawach alkoholizmu, pracowała w&nbsp;czołowych placówkach zdrowia psychicznego. Specjalizuje się we&nbsp;wszystkich formach uzależnień. Wykładowca studiów podyplomowych oraz licencjackich od&nbsp;2008r. Specjalista ORE w&nbsp;zakresie edukacji włączającej.
    </p>) ,
    imageUrl: '/assets/woman.png',
  },
  
  
  
  
];

const DoctorCards = () => {
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
    <section className="mx-6 sm:mx-16 lg:mx-[200px] mb-[100px] mt-20">
      <h3 className="text-4xl font-semibold text-gray-800 pb-8 text-center sm:text-5xl">Poznaj naszych Specjalistów</h3> 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full">
              <img src={person.imageUrl} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.specialization}</p>
              <p className="text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default DoctorCards;