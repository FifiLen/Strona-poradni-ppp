'use client'
/*import React from 'react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Wioletta Ginter',
    specialty: 'Pedagog',
    description: 'Wioletta Stefania Ginter magister pedagogiki – specjalność: poradnictwo i pomoc psychopedagogiczna, czynny pedagog specjalny w szkole podstawowej, terapeuta ręki i motoryki małej I i II stopnia, nauczyciel kontraktowy, specjalista ORE w zakresie edukacji włączającej, seksualność osób z niepełnosprawnością i spektrum autyzmu, wykładowca na studiach podyplomowych na kierunkach, wychowawca kolonijny, nauczyciel kontraktowy, trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 2,
    name: 'Anna Ławniczak',
    specialty: 'Psycholog',
    description: 'Anna Ławniczak Magister, psycholog, seksuolog, terapeuta, seksuolog kliniczny,psychologia kryminologiczna i kryminalistyczna, wykładowca studiów podyplomowych, czynny psycholog w szkole.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 3,
    name: 'Katarzyna Duźniak',
    specialty: 'Pedagog',
    description: 'Katarzyna Duźniak jest magistrem pedagogiki specjalizującym się w pracy socjalnej i opiekuńczo-wychowawczej. Posiada stopień magistra pedagogiki z Uniwersytetu Śląskiego. Ma doświadczenie w udzielaniu profesjonalnej pomocy psychologicznej oraz w terapii uzależnień. Przez wiele lat pracowała jako specjalista psychoterapii uzależnień w różnych placówkach, takich jak Państwowy Szpital dla Nerwowo i Psychicznie Chorych oraz Ośrodek Leczenia Uzależnień, Opieki Psychiatrycznej i Pomocy Rodzinie "Integrum". Jest również biegłym sądowym w sprawach uzależnienia od alkoholu i ma doświadczenie jako trenerka edukacji. Obecnie pracuje jako specjalista psychoterapii uzależnień w Poradni Zdrowia Psychicznego i Uzależnień w Żorach.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 4,
    name: 'Aleksandra Wowra',
    specialty: 'Pedagog',
    description: 'magister pedagogiki – specjalność: opiekuńczo – wychowawczej, czynny pedagog specjalny w szkole ponadpodstawowej, oligofrenopedagog, specjalista ORE w zakresie edukacji włączającej,  trener edukacji włączającej w Niepublicznym Ośrodku Doskonalenia Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie), nauczyciel mianowany.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 5,
    name: 'Sylwia Cuber',
    specialty: 'Pedagog',
    description: 'Sylwia Cuber magister pedagogiki specjalność: edukacja przedszkolna i wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z dodatkowym językiem angielskim, czynny pedagog specjalny w szkole podstawowej, specjalista ORE w zakresie edukacji włączającej,  trener treningu umiejętności społecznych (TUS) dzieci ze spektrum autyzmu, studia podyplomowe: muzyka i plastyka w szkole podstawowej, studia podyplomowe: edukacja i terapia osób ze spektrum autyzmu, nauczyciel kontraktowy, trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
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
    imageUrl: '/assets/doc2.jpg',
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
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 11,
    name: 'Jakub Ruks',
    specialty: 'Etyk',
    description: 'Nazywam się Jakub Ruks. Jestem doktorem filozofii. Ukończyłem studia pod kierunkiem prof. UAM dr hab. Piotra Orlika. Na studiach zajmowałem się etyką teoretycznie.  Uważam, że oprócz teoretycznej wiedzy młody człowiek potrzebuje odniesienia do własnego życia. Etyka w szkole powinna odwoływać się w największym stopniu do doświadczeń codziennych, które obchodzą młodzież. Inaczej skazuje się ona na niebyt. Cieszy mnie ogromnie, iż w dzisiejszych czasach jest miejsce na racjonalność i poszukiwanie mądrości praktycznej. Takim miejscem jest dla mnie szkoła, w której uczę etyki od wielu lat”',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 12,
    name: 'Małgorzata Solowska',
    specialty: 'Trener',
    description: 'Małgorzata Solowska - dyrektor zespołu szkół ponadgimnazjalnych, magister języka angielskiego, magister historii,  trener  i moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i szkoleń międzynarodowych oraz ogólnopolskich.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 13,
    name: 'Klaudia Rogalska',
    specialty: 'Trener',
    description: 'Nazywam się Klaudia Rogarska. Jestem nauczycielem języka angielskiego, metodykiem i trenerem nauczycieli języków obcych. Jest dla mnie jasne, że moją misją jest dzielenie się wiedzą i nauczanie, aby inni mogli się rozwijać i robić postępy Po 8 latach poszukiwań swojej drogi jako nauczyciel postanowiłam wziąć sprawy w swoje ręce i stworzyć coś, co pomoże innym nauczycielom odnaleźć się w dzisiejszej sytuacji nie tracąc pasji i powołania do nauczania. Chcę pomagać innym nauczycielom w rozwoju i jednocześnie wypełniać swoją misję. Jako trener nauczycieli online moim głównym celem jest dostarczanie nowych umiejętności, inspiracji do nauczania i wsparcia w codziennym życiu szkolnym poprzez kursy online i autorskie materiały dydaktyczne Każdego dnia rozwijam swój projekt, robiąc wszystko, co w mojej mocy, szkoląc się bardziej niż kiedykolwiek.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 14,
    name: 'Anna Falkowska',
    specialty: 'Pedagog, Socjolog',
    description: 'dr nauk społecznych z dziedziny pedagogiki, socjologii, doradcą zawodowym oraz specjalistą z zakresu prawo ochrony środowiska i edukacji ekologicznej',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 15,
    name: 'Anna Kowalska',
    specialty: 'Psycholog',
    description: 'Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej, muzykoterapeuta. Absolwentka Wydziału Psychologii Uniwersytetu Warszawskiego,  psychodietetyk, trener nowoczesnego doradztwa zawodowego i edukacyjnego na Uniwersytecie Szkoły Wyższej Psychologii Społecznej w Warszawie oraz psychoonkolog na Katolickim Uniwersytecie Lubelskim. Ukończone czteroletnie szkolenie psychoterapeutyczne w Polskim Towarzystwie Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej Stowarzyszenia Intra w Warszawie (numer certyfikatu 57/T/2-21).  Terapia z zakresu psychoterapii par, EFT - terapii skoncentrowanej na emocjach, pracy z dziećmi i młodzieżą. trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === doctors.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? doctors.length - 1 : prevSlide - 1));
  };

  return (
    <div className="flex items-center justify-center mb-[100px]">
      <div className="w-[900px] h-[660px] bg-white shadow-lg rounded-lg p-8">
        <div className="relative flex items-center justify-center">
          <div className="h-[190px] w-[300px] rounded-full overflow-hidden">
            <Image
              src={doctors[currentSlide].imageUrl}
              alt={`Dr. ${doctors[currentSlide].name}`}
              height={100}  
              width={100}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="ml-4 mt-2">
          <h2 className="text-3xl font-bold mb-2">{doctors[currentSlide].name}</h2>
          <p className="text-xl text-gray-600 mb-4">{doctors[currentSlide].specialty}</p>
          <p className="text-gray-700">{doctors[currentSlide].description}</p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-[rgb(61,162,117)] hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-5"
            onClick={goToPrevSlide}
          >
            Poprzedni
          </button>
          <button
            className="bg-[rgb(61,162,117)] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-5"
            onClick={goToNextSlide}
          >
            Następny
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel; */



import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const staffData = [
  {
    id: 1,
    name: 'Wioletta Ginter',
    specialty: 'Pedagog',
    description: 'Wioletta Stefania Ginter magister pedagogiki – specjalność: poradnictwo i pomoc psychopedagogiczna, czynny pedagog specjalny w szkole podstawowej, terapeuta ręki i motoryki małej I i II stopnia, nauczyciel kontraktowy, specjalista ORE w zakresie edukacji włączającej, seksualność osób z niepełnosprawnością i spektrum autyzmu, wykładowca na studiach podyplomowych na kierunkach, wychowawca kolonijny, nauczyciel kontraktowy, trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 2,
    name: 'Anna Ławniczak',
    specialty: 'Psycholog',
    description: 'Anna Ławniczak Magister, psycholog, seksuolog, terapeuta, seksuolog kliniczny,psychologia kryminologiczna i kryminalistyczna, wykładowca studiów podyplomowych, czynny psycholog w szkole.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 3,
    name: 'Katarzyna Duźniak',
    specialty: 'Pedagog',
    description: 'Katarzyna Duźniak jest magistrem pedagogiki specjalizującym się w pracy socjalnej i opiekuńczo-wychowawczej. Posiada stopień magistra pedagogiki z Uniwersytetu Śląskiego. Ma doświadczenie w udzielaniu profesjonalnej pomocy psychologicznej oraz w terapii uzależnień. Przez wiele lat pracowała jako specjalista psychoterapii uzależnień w różnych placówkach, takich jak Państwowy Szpital dla Nerwowo i Psychicznie Chorych oraz Ośrodek Leczenia Uzależnień, Opieki Psychiatrycznej i Pomocy Rodzinie "Integrum". Jest również biegłym sądowym w sprawach uzależnienia od alkoholu i ma doświadczenie jako trenerka edukacji. Obecnie pracuje jako specjalista psychoterapii uzależnień w Poradni Zdrowia Psychicznego i Uzależnień w Żorach.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 4,
    name: 'Aleksandra Wowra',
    specialty: 'Pedagog',
    description: 'magister pedagogiki – specjalność: opiekuńczo – wychowawczej, czynny pedagog specjalny w szkole ponadpodstawowej, oligofrenopedagog, specjalista ORE w zakresie edukacji włączającej,  trener edukacji włączającej w Niepublicznym Ośrodku Doskonalenia Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie), nauczyciel mianowany.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 5,
    name: 'Sylwia Cuber',
    specialty: 'Pedagog',
    description: 'Sylwia Cuber magister pedagogiki specjalność: edukacja przedszkolna i wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z dodatkowym językiem angielskim, czynny pedagog specjalny w szkole podstawowej, specjalista ORE w zakresie edukacji włączającej,  trener treningu umiejętności społecznych (TUS) dzieci ze spektrum autyzmu, studia podyplomowe: muzyka i plastyka w szkole podstawowej, studia podyplomowe: edukacja i terapia osób ze spektrum autyzmu, nauczyciel kontraktowy, trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
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
    imageUrl: '/assets/doc2.jpg',
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
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 11,
    name: 'Jakub Ruks',
    specialty: 'Etyk',
    description: 'Nazywam się Jakub Ruks. Jestem doktorem filozofii. Ukończyłem studia pod kierunkiem prof. UAM dr hab. Piotra Orlika. Na studiach zajmowałem się etyką teoretycznie.  Uważam, że oprócz teoretycznej wiedzy młody człowiek potrzebuje odniesienia do własnego życia. Etyka w szkole powinna odwoływać się w największym stopniu do doświadczeń codziennych, które obchodzą młodzież. Inaczej skazuje się ona na niebyt. Cieszy mnie ogromnie, iż w dzisiejszych czasach jest miejsce na racjonalność i poszukiwanie mądrości praktycznej. Takim miejscem jest dla mnie szkoła, w której uczę etyki od wielu lat”',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 12,
    name: 'Małgorzata Solowska',
    specialty: 'Trener',
    description: 'Małgorzata Solowska - dyrektor zespołu szkół ponadgimnazjalnych, magister języka angielskiego, magister historii,  trener  i moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i szkoleń międzynarodowych oraz ogólnopolskich.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 13,
    name: 'Klaudia Rogalska',
    specialty: 'Trener',
    description: 'Nazywam się Klaudia Rogarska. Jestem nauczycielem języka angielskiego, metodykiem i trenerem nauczycieli języków obcych. Jest dla mnie jasne, że moją misją jest dzielenie się wiedzą i nauczanie, aby inni mogli się rozwijać i robić postępy Po 8 latach poszukiwań swojej drogi jako nauczyciel postanowiłam wziąć sprawy w swoje ręce i stworzyć coś, co pomoże innym nauczycielom odnaleźć się w dzisiejszej sytuacji nie tracąc pasji i powołania do nauczania. Chcę pomagać innym nauczycielom w rozwoju i jednocześnie wypełniać swoją misję. Jako trener nauczycieli online moim głównym celem jest dostarczanie nowych umiejętności, inspiracji do nauczania i wsparcia w codziennym życiu szkolnym poprzez kursy online i autorskie materiały dydaktyczne Każdego dnia rozwijam swój projekt, robiąc wszystko, co w mojej mocy, szkoląc się bardziej niż kiedykolwiek.',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 14,
    name: 'Anna Falkowska',
    specialty: 'Pedagog, Socjolog',
    description: 'dr nauk społecznych z dziedziny pedagogiki, socjologii, doradcą zawodowym oraz specjalistą z zakresu prawo ochrony środowiska i edukacji ekologicznej',
    imageUrl: '/assets/doc2.jpg',
  },
  {
    id: 15,
    name: 'Anna Kowalska',
    specialty: 'Psycholog',
    description: 'Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej, muzykoterapeuta. Absolwentka Wydziału Psychologii Uniwersytetu Warszawskiego,  psychodietetyk, trener nowoczesnego doradztwa zawodowego i edukacyjnego na Uniwersytecie Szkoły Wyższej Psychologii Społecznej w Warszawie oraz psychoonkolog na Katolickim Uniwersytecie Lubelskim. Ukończone czteroletnie szkolenie psychoterapeutyczne w Polskim Towarzystwie Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej Stowarzyszenia Intra w Warszawie (numer certyfikatu 57/T/2-21).  Terapia z zakresu psychoterapii par, EFT - terapii skoncentrowanej na emocjach, pracy z dziećmi i młodzieżą. trener edukacji włączającej w Niepublicznym Ośrodku Doskonalena Nauczycieli w Rybniku (3.300 nauczycieli biorących udział w projekcie).',
    imageUrl: '/assets/doc2.jpg',
  },
  
];

const DoctorCards = () => {

  return (
    <section className="mx-6 sm:mx-16 lg:mx-[200px] mb-[100px] mt-36">
      <h3 className="text-4xl font-semibold text-gray-800 pb-8 text-center sm:text-5xl">Poznaj naszych specjalistów</h3> 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.specialization}</p>
              <p className="text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <Link href="/Staff" passHref>
          <div className="flex items-center font-semibold text-gray-700 cursor-pointer relative group hover:text-pink-400">
            <p className="mr-1">Dowiedz się więcej</p>
            <svg
              className="w-3 h-3 text-pink-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};



export default DoctorCards;