'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const staffData = [
  {
    id: 1,
    name: 'Wioletta Ginter',
    specialty: 'Pedagog',
    description: 'Wioletta Stefania Ginter to magister pedagogiki specjalizujący się w poradnictwie i pomocy psychopedagogicznej. Jako aktywny pedagog specjalny, terapeuta ręki, specjalista w edukacji włączającej i wykładowca, posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom w różnych instytucjach edukacyjnych.',
    imageUrl: '/assets/T7.png',
  },
  {
    id: 2,
    name: 'Anna Ławniczak',
    specialty: 'Psycholog',
    description: 'Anna Ławniczak to magister psychologii, specjalizujący się w seksuologii klinicznej i psychologii kryminologicznej. Jako terapeuta i wykładowca studiów podyplomowych, dzieli się swoją wiedzą i doświadczeniem zarówno w praktyce klinicznej, jak i w edukacji, aktywnie angażując się także w pracę psychologa w szkole.',
    imageUrl: '/assets/T5.png',
  },
  {
    id: 3,
    name: 'Katarzyna Duźniak',
    specialty: 'Pedagog',
    description: 'Katarzyna Duźniak, magister pedagogiki z Uniwersytetu Śląskiego, specjalizuje się w pracy socjalnej oraz opiekuńczo-wychowawczej. Z wieloletnim doświadczeniem w terapii uzależnień i jako biegła sądowa w sprawach alkoholizmu, pracowała w czołowych placówkach zdrowia psychicznego, a obecnie angażuje się jako specjalista psychoterapii uzależnień w Poradni Zdrowia Psychicznego i Uzależnień w Żorach.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 4,
    name: 'Aleksandra Wowra',
    specialty: 'Pedagog',
    description: 'magister pedagogiki – specjalność: opiekuńczo – wychowawczej, czynny pedagog specjalny w szkole ponadpodstawowej, oligofrenopedagog, specjalista ORE w zakresie edukacji włączającej,  trener edukacji włączającej w Niepublicznym Ośrodku Doskonalenia Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie), nauczyciel mianowany.',
    imageUrl: '/assets/T9.png',
  },
  {
    id: 5,
    name: 'Sylwia Cuber',
    specialty: 'Pedagog',
    description: 'Sylwia Cuber magister pedagogiki specjalność: edukacja przedszkolna i wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z dodatkowym językiem angielskim, czynny pedagog specjalny w szkole podstawowej, specjalista ORE w zakresie edukacji włączającej,  trener treningu umiejętności społecznych (TUS) dzieci ze spektrum autyzmu, studia podyplomowe: muzyka i plastyka w szkole podstawowej, studia podyplomowe: edukacja i terapia osób ze spektrum autyzmu, nauczyciel kontraktowy, trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/T2.png',
  },
  {
    id: 6,
    name: 'Monika Kromolan',
    specialty: 'Psycholog',
    description: 'Monika Kromolan to magister psychologii z zakresu neuropsychologii i psychologii klinicznej. Posiada również wykształcenie pedagogiczne, specjalizując się w zintegrowanej edukacji wczesnoszkolnej, edukacji informatycznej oraz edukacji i rehabilitacji osób z niepełnosprawnością intelektualną. Ma doświadczenie w różnych obszarach, takich jak terapia, wspomaganie rozwoju dziecka i hipoterapia. Monika Kromolan założyła Niepubliczny Punkt Przedszkolny "Błękitny Domek" i pełni tam funkcję dyrektora i terapeuty. Uzyskała wiele certyfikatów, w tym w zakresie komunikacji alternatywnej i wspomagającej oraz diagnozy alternatywnych i wspomagających metod porozumiewania się. Jej wiedza i umiejętności obejmują również obszary takie jak neurodydaktyka, masaże Shantala i hipoterapia w kontekście autyzmu i zespołu Aspergera.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 7,
    name: 'Joanna Zawadzka',
    specialty: 'Psycholog',
    description: 'Joanna Zawadzka magister języka polskiego, studia podyplomowe z zakresu organizacji  i zarządzania oświatą; studia podyplomowe - Terapia pedagogiczna, diagnoza i profilaktyka społeczna;  terapeuta z zakresu diagnozy psychologiczna dysleksji rozwojowej,  studia podyplomowe: język polski jako obcy, egzaminator OKE, prezes Oddziału Towarzystwo Dysleksji w Rybniku, 2006 – 2013 dyrektor Ośrodka Doskonalenia Nauczycieli w Rybniku prowadzone zajęcia z dyslekcji rozwojowej – jak rozpoznać ucznia z dysleksją, stylistyki języka polskiego, terapii pedagogicznej, przygotowanie do zawodu nauczyciela (dla nauczycieli zatrudnionych w szkole np.  po filologii angielskiej, kierunek: translatoryka; od 2003 Doradca i autor publikacji dla IBE- Instytut Badań Edukacyjnych',
    imageUrl: '/assets/T3.png',
  },
  {
    id: 8,
    name: 'Gabriela Marcisz',
    specialty: 'Psychoterapeuta',
    description: 'Gabriela Marcisz – psycholog, psychoterapeuta. Ukończyłam studia magisterskie z zakresu psychologii na Uniwersytecie Śląskim w Katowicach w 1997 roku. W zakresie psychoterapii ukończyłam 2,5-letnie szkolenie w podejściu systemowym w terapii rodzin prowadzone przez Krakowską Fundację Rozwoju Psychoterapii oraz całościowy czteroletni kurs psychoterapii prowadzony przez Śląską Szkołę Psychoterapii. Ukończyłam szkolenie I stopnia psychodramy. Doświadczenie zawodowe zdobywałam w ramach pracy w Ośrodku Interwencji Kryzysowej, Poradni Zdrowia Psychicznego, Poradni Leczenia Nerwic i na Dziennym Oddziale Leczenia Nerwic. Swoją pracę poddaję superwizji.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 9,
    name: 'Paulina Rosa',
    specialty: 'Logopeda',
    description: 'Paulina Rosa magister polonistyki, logopeda, nauczyciel dyplomowany, egzaminator TELC języka polskiego jako obcego, trener języka polskiego jako obcego, czynny nauczyciel w szkole ponadpodstawowej, terapeuta sesji logopedycznych. Trener edukacji włączającej w Niepublicznym Ośrodku Doskonalenia Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 10,
    name: 'Jakub Ruks',
    specialty: 'Etyk',
    description: 'Nazywam się Jakub Ruks. Jestem doktorem filozofii. Ukończyłem studia pod kierunkiem prof. UAM dr hab. Piotra Orlika. Na studiach zajmowałem się etyką teoretycznie.  Uważam, że oprócz teoretycznej wiedzy młody człowiek potrzebuje odniesienia do własnego życia. Etyka w szkole powinna odwoływać się w największym stopniu do doświadczeń codziennych, które obchodzą młodzież. Inaczej skazuje się ona na niebyt. Cieszy mnie ogromnie, iż w dzisiejszych czasach jest miejsce na racjonalność i poszukiwanie mądrości praktycznej. Takim miejscem jest dla mnie szkoła, w której uczę etyki od wielu lat”',
    imageUrl: '/assets/T4.png',
  },
  {
    id: 11,
    name: 'Małgorzata Solowska',
    specialty: 'Trener',
    description: 'Małgorzata Solowska - dyrektor zespołu szkół ponadgimnazjalnych, magister języka angielskiego, magister historii,  trener  i moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i szkoleń międzynarodowych oraz ogólnopolskich.',
    imageUrl: '/assets/T6.png',
  },
  {
    id: 12,
    name: 'Klaudia Rogalska',
    specialty: 'Trener',
    description: 'Nazywam się Klaudia Rogarska. Jestem nauczycielem języka angielskiego, metodykiem i trenerem nauczycieli języków obcych. Jest dla mnie jasne, że moją misją jest dzielenie się wiedzą i nauczanie, aby inni mogli się rozwijać i robić postępy Po 8 latach poszukiwań swojej drogi jako nauczyciel postanowiłam wziąć sprawy w swoje ręce i stworzyć coś, co pomoże innym nauczycielom odnaleźć się w dzisiejszej sytuacji nie tracąc pasji i powołania do nauczania. Chcę pomagać innym nauczycielom w rozwoju i jednocześnie wypełniać swoją misję. Jako trener nauczycieli online moim głównym celem jest dostarczanie nowych umiejętności, inspiracji do nauczania i wsparcia w codziennym życiu szkolnym poprzez kursy online i autorskie materiały dydaktyczne Każdego dnia rozwijam swój projekt, robiąc wszystko, co w mojej mocy, szkoląc się bardziej niż kiedykolwiek.',
    imageUrl: '/assets/T10.png',
  },
  {
    id: 13,
    name: 'Anna Falkowska',
    specialty: 'Pedagog, Socjolog',
    description: 'dr nauk społecznych z dziedziny pedagogiki, socjologii, doradcą zawodowym oraz specjalistą z zakresu prawo ochrony środowiska i edukacji ekologicznej',
    imageUrl: '/assets/T8.png',
  },
  {
    id: 14,
    name: 'Anna Kowalska',
    specialty: 'Psycholog',
    description: 'Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej, muzykoterapeuta. Absolwentka Wydziału Psychologii Uniwersytetu Warszawskiego,  psychodietetyk, trener nowoczesnego doradztwa zawodowego i edukacyjnego na Uniwersytecie Szkoły Wyższej Psychologii Społecznej w Warszawie oraz psychoonkolog na Katolickim Uniwersytecie Lubelskim. Ukończone czteroletnie szkolenie psychoterapeutyczne w Polskim Towarzystwie Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej Stowarzyszenia Intra w Warszawie (numer certyfikatu 57/T/2-21).  Terapia z zakresu psychoterapii par, EFT - terapii skoncentrowanej na emocjach, pracy z dziećmi i młodzieżą. trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  
];

const DoctorCards = () => {

  return (
    <section className="mx-6 sm:mx-16 lg:mx-[200px] mb-[100px] mt-20">
      <h3 className="text-4xl font-semibold text-gray-800 pb-8 text-center sm:text-5xl">Poznaj naszych specjalistów</h3> 
      
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