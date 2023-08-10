'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const staffData = [
  {
    id: 1,
    name: 'Wioletta Ginter',
    specialty: 'Pedagog',
    description: (
     <p>Magister pedagogiki specjalizujący się<br /> w poradnictwie i pomocy psychopedagogicznej. Jako aktywny pedagog specjalny, terapeuta ręki, specjalista w edukacji włączającej <br />i wykładowca, posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom <br />w różnych instytucjach edukacyjnych. Specjalista ORE w zakresie edukacji włączającej.</p> ),
    imageUrl: '/assets/Test.png',
  },
  
  {
    id: 2,
    name: 'Klaudia Rogalska',
    specialty: 'Trener',
    description: 'Magister filologii angielskiej. Wykładowca na kierunku język angielski oraz PR. Metodykiem i trener nauczycieli języków obcych. Trener TIK w tym wykorzystania nowych technologii w pracy z uczniami ze SPE. Terapeuta w obszarze wykorzystania Wirtualnej Rzeczywistości w Terapii Przyszłości. Specjalista ORE w zakresie edukacji włączającej. Specjalista i trener regionalny woj. śląskiego TIK. Autor kursów online i autorskich materiałów dydaktycznych.',
    imageUrl: '/assets/T10.png',
  },
  {
    id: 3,
    name: 'Sylwia Cuber',
    specialty: 'Pedagog',
    description: (<p>
      Magister pedagogiki specjalność: edukacja przedszkolna i wczesnoszkolna, oligofrenopedagogika, edukacja elementarna z dodatkowym językiem angielskim, czynny pedagog specjalny <br /> w szkole podstawowej, specjalista ORE <br />w zakresie edukacji włączającej, trener treningu umiejętności społecznych (TUS) dzieci ze spektrum autyzmu, edukacja <br />i terapia osób ze spektrum autyzmu. Wykładowca studiów podyplomowych <br />z zakresu pedagogiki specjalnej.
    </p>),
    imageUrl: '/assets/T2.png',
  },
  
  {
    id: 4,
    name: 'Aleksandra Wowra',
    specialty: 'Pedagog',
    description:(<p>
      Magister pedagogiki – specjalność: opiekuńczo – wychowawczej, oligofrenopedagog, specjalista ORE <br />w zakresie edukacji włączającej, czynny pedagog specjalny. Wykładowca <br />na kierunkach pedagogiki specjalnej <br />na studiach podyplomowych.
    </p>),
    imageUrl: '/assets/T9.png',
  },
  {
    id: 5,
    name: 'Anna Ławniczak',
    specialty: 'Psycholog',
    description: (<p>
      Magister psychologii, specjalizujący się <br /> w seksuologii klinicznej i psychologii kryminologicznej. Wykładowca studiów podyplomowych z obszaru pedagogiki specjalnej, seksuologii, seksuologii klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się w pracę na rzecz dzieci w szkołach i przedszkolach. Specjalista ORE w zakresie edukacji włączającej.
    </p>),
    imageUrl: '/assets/T5.png',
  },
  {
    id: 6,
    name: 'Joanna Zawadzka',
    specialty: 'Psycholog',
    description: (<p>
      Magister języka polskiego, specjalista <br /> z zakresu terapii pedagogicznej, diagnozy <br />i profilaktyki społecznej. Terapeuta <br />z obszaru diagnozy dysleksji rozwojowej, egzaminator OKE, nauczyciel języka polskiego jako obcego,  prezes Oddziału Towarzystwo Dysleksji w Rybniku.Doradca i autor publikacji dla IBE- Instytut Badań Edukacyjnych. Pracuje z uczniami uzdolnionymi (przygotowanie do egzaminów/olimpiad).
      </p>),
    imageUrl: '/assets/T3.png'    
  },
  {
    id: 7,
    name: 'Jakub Ruks',
    specialty: 'Etyk',
    description: 'Doktor filozofii. Wykładowca na kierunkach: etyka oraz filozofia. Czynny nauczyciel etyki i filozofii w szkole podstawowej i ponadpodstawowej. Trener pracujący z uczniem uzdolnionym - przygotowanie do certyfikatów z języka niemieckiego. Specjalista z zakresu  wiedzy o młodym człowieku. Autor scenariuszy zajęć do etyki na wszystkich poziomach kształcenia. Specjalista ORE w zakresie edukacji włączającej.',
    imageUrl: '/assets/T4.png',
  },
  {
    id: 8,
    name: 'Małgorzata Solowska',
    specialty: 'Trener',
    description: (<p>
      Magister języka angielskiego, magister historii, trener i moderator TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus, prelegent konferencji i szkoleń międzynarodowych oraz ogólnopolskich. Specjalista ORE <br />w zakresie edukacji włączającej. Trener TIK w tym wykorzystania nowych technologii w pracy z uczniami ze SPE. Wykładowca studiów podyplomowych <br />z zakresu zarządzania oświatą, historii oraz języka angielskiego.
    </p>),
    imageUrl: '/assets/T6.png',
  },
  {
    id: 9,
    name: 'Anna Falkowska',
    specialty: 'Pedagog, Socjolog',
    description: (<p>Doktor nauk społecznych z dziedziny pedagogiki i socjologii.  Doradca zawodowy oraz specjalista z zakresu prawa ochrony środowiska i edukacji ekologicznej. Specjalista ORE z zakresu edukacji włączającej. Trener TIK. Specjalista programów do interaktywnej edukacji. Wykładowca akademicki na uczelniach <br />o profilu przyrodniczym, autorka wielu publikacji naukowych i po-konferencyjnych. Ekspert edukacji ekologicznej.</p>),
    imageUrl: '/assets/T8.png',
  },
  
  {
    id: 10,
    name: 'Monika Kromolan',
    specialty: 'Psycholog',
    description: (<p>
      Magister psychologii z zakresu neuropsychologii i psychologii klinicznej. Specjalista w zintegrowanej edukacji wczesnoszkolnej, edukacji informatycznej oraz edukacji i rehabilitacji osób <br />z niepełnosprawnością intelektualną. Terapeuta WWRD i hipoterapii. Specjalista w zakresie komunikacji alternatywnej <br />i wspomagającej oraz diagnozy alternatywnych i wspomagających metod porozumiewania się.
    </p>),
    imageUrl: '/assets/woman.png',
  },
  {
    id: 11,
    name: 'Gabriela Marcisz',
    specialty: 'Psychoterapeuta',
    description: (<p>
      Magister psychologii, psychoterapeuta. Terapeuta dorosłych, par i rodzin. Specjalista psychoterapii w Ośrodku Interwencji Kryzysowej, Poradni Zdrowia Psychicznego, Poradni Leczenia Nerwic <br /> i na Dziennym Oddziale Leczenia Nerwic. Specjalista skupiony na pracy z całymi rodzinami i osobami pełnoletnimi.
    </p>),
    imageUrl: '/assets/woman.png',
  },
  
  
  {
    id: 12,
    name: 'Katarzyna Duźniak',
    specialty: 'Pedagog',
    description: (<p>
      Magister pedagogiki, specjalizuje się <br />w pracy socjalnej oraz opiekuńczo-wychowawczej. Wieloletni terapeuta uzależnień,  biegła sądowa w sprawach alkoholizmu, pracowała w czołowych placówkach zdrowia psychicznego. Specjalizuje się we wszystkich formach uzależnień. Wykładowca studiów podyplomowych oraz licencjackich od 2008r. Specjalista ORE w zakresie edukacji włączającej.
    </p>) ,
    imageUrl: '/assets/woman.png',
  },
  {
    id: 13,
    name: 'Paulina Rosa',
    specialty: 'Logopeda',
    description: (<p>
      Magister polonistyki, logopeda, egzaminator TELC języka polskiego jako obcego, trener języka polskiego jako obcego, czynny nauczyciel w szkole podstawowej i ponadpodstawowej, terapeuta sesji logopedycznych. Trener <br /> z obszaru edukacji  włączającej. Wykładowca na studiach podyplomowych.
    </p>) ,
    imageUrl: '/assets/woman.png',
  },
  
  {
    id: 14,
    name: 'Anna Kowalska',
    specialty: 'Psycholog',
    description: (<p>
      Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej i Edukacji Społecznej, muzykoterapeuta. Psychodietetyk, trener nowoczesnego doradztwa zawodowego <br /> i edukacyjnego. Teraputa z zakresu psychoterapii par, EFT - terapii skoncentrowanej na emocjach, pracy <br />z dziećmi i młodzieżą. Specjalista edukacji włączającej. Wykładowca studiów podyplomowych z zakresu swoich specjalizacji.
    </p>),
    imageUrl: '/assets/woman.png',
  },
  
];

const DoctorCards = () => {

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