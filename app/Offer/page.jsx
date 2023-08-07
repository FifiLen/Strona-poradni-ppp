'use client'
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Offer = () => {
  const servicesDescriptions = [
    {
      title: "Konsultacja psychologiczna",
      description: "Konsultacja psychologiczna to specjalistyczne spotkanie, które ma na celu zrozumienie i rozwiązanie konkretnego problemu osoby zgłaszającej się po pomoc. Każda osoba jest inna, dlatego nasza konsultacja jest dostosowana do indywidualnych potrzeb pacjenta.",
      price: "150zł / 60 min"
    },
    {
      title: "Konsultacja pedagogiczna",
      description: "Nasza konsultacja pedagogiczna skierowana jest do rodziców, nauczycieli oraz dzieci i młodzieży, którzy potrzebują wsparcia w kwestiach edukacyjnych oraz wychowawczych.",
      price: "140zł / 60 min"
    },
    {
      title: "Terapia dla dzieci",
      description: "Terapia dla dzieci oferowana przez naszą poradnię skupia się na indywidualnych potrzebach każdego malucha, pomagając mu w trudnych momentach życia oraz wspierając jego rozwój.",
      price: "160zł / 60 min"
    },
    {
      title: "Warsztaty rozwojowe",
      description: "Nasze warsztaty rozwojowe mają na celu wsparcie Twojego rozwoju osobistego poprzez praktyczne ćwiczenia, dyskusje oraz refleksje prowadzone przez doświadczonych specjalistów.",
      price: "250zł / 4h"
    },
    {
      title: "Konsultacje zawodowe",
      description: "Nie wiesz, jaki kierunek wybrać w życiu zawodowym? Chcesz dokonać zmiany? Skorzystaj z naszych konsultacji zawodowych i odkryj swoje prawdziwe powołanie.",
      price: "130zł / 60 min"
    },
    {
      title: "Mediacje rodzinne",
      description: "Mediacje rodzinne pomagają w rozwiązaniu konfliktów w rodzinie, stawiając na dialog i porozumienie. Nasz doświadczony mediator pomoże odnaleźć wspólne rozwiązanie dla wszystkich stron.",
      price: "120zł / 60 min"
    },
    {
      title: "Szkolenia dla nauczycieli",
      description: "Oferujemy szkolenia dla nauczycieli, które pomogą w rozwiązaniu problemów dydaktycznych, wychowawczych oraz pomogą w rozwoju zawodowym.",
      price: "400zł / dzień"
    },
    {
      title: "Terapia grupowa",
      description: "Terapia grupowa to okazja do pracy nad sobą w grupie osób o podobnych problemach. Prowadzona przez doświadczonego terapeutę pozwala na głęboką refleksję oraz wymianę doświadczeń.",
      price: "80zł / 90 min"
    },
    {
      title: "Warsztaty dla rodziców",
      description: "Chcesz być lepszym rodzicem i lepiej rozumieć swoje dziecko? Nasze warsztaty dla rodziców oferują praktyczne narzędzia i wiedzę, która Ci w tym pomoże.",
      price: "150zł / 3h"
    },
    {
      title: "Konsultacje rodzinne",
      description: "Rodzina to podstawa, ale czasami potrzebujemy wsparcia, by rozwiązać rodzinne problemy. Nasze konsultacje rodzinne pomogą Ci zrozumieć i rozwiązać trudności, z którymi się borykasz.",
      price: "140zł / 60 min"
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto mt-20 mb-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oferta</h1>
      <p className="text-gray-600 mb-6">Zapraszamy do zapoznania się z naszą ofertą</p>
      {servicesDescriptions.map((service) => (
        <div key={service.title} className="bg-white p-4 rounded-lg shadow-lg mt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-3">{service.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{service.price}</p>
            <button onClick={() => console.log(`Wybrano usługę: ${service.title}`)}>
              <FaChevronRight size={30} color="#4B5563" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offer;
