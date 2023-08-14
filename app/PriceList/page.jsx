'use client'
import React from 'react';
import { FaRegComments, FaPuzzlePiece, FaBook, FaBrain, FaChartLine, FaCoffee, FaChild, FaChalkboardTeacher, FaCalendarAlt, FaAnchor, FaChevronRight } from 'react-icons/fa';

const PriceList = () => {
  const services = [
    { name: "Diagnoza", price: "150zł / 60 min", variant: "Online: 130zł / 60 min", icon: <FaRegComments size={40} color="#4B5563" /> },
    { name: "Sesje terapeutyczne", price: "140zł / 60 min", variant: "Online: 120zł / 60 min", icon: <FaPuzzlePiece size={40} color="#4B5563" /> },
    { name: "Terapia Integracji Sensorycznej", price: "90zł / 45 min", variant: "120 zł / 45 minut (ze wspomaganiem Virtual Reality)", info:(<p>Zajęcia grupowe (ze wspomaganiem VR/AR/AI) - 70zł / 40min</p>)},
    { name: "Zajęcia grupowe", price: "160zł / 60 min", variant: "Pakiet 5 spotkań: 700zł", icon: <FaChild size={40} color="#4B5563" /> },
    { name: "Psycholog", price: "250zł / 4h", variant: "Online: 220zł / 4h", icon: <FaBrain size={40} color="#4B5563" /> },
    { name: "Pedagog", price: "130zł / 60 min", variant: "Pakiet 3 spotkań: 350zł", icon: <FaChartLine size={40} color="#4B5563" /> },
    { name: "Neurolog", price: "120zł / 60 min", variant: "Pakiet 5 spotkań: 500zł", icon: <FaCoffee size={40} color="#4B5563" /> },
    { name: "Logopeda", price: "400zł / dzień", variant: "Online: 350zł / dzień", icon: <FaChalkboardTeacher size={40} color="#4B5563" /> },
    { name: "Neurorehabilitacja z C-eye® Pro", price: "300zł / 60min - diagnoza w siedzibie PP-P", variant: "900 zł / 60 min – w domu Pacjenta do 25km", variant2: "1.500 zł / 60 min – w domu Pacjenta do 60km", 
    info: (
    <p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub więcej w jednym miejscu - cena ustalana indywidualnie. <br />Diagnoza na grupy osób - cena ustalana indywidualnie <br /><br />Prowadzimy diagnozy w: 
    <ul>
      <li>- ośrodkach rehabilitacyjnych,</li>
      <li>- domach seniora</li>
      <li>- oddziałach szpitalnych,</li>
      <li>- szkołach i przedszkolach specjalnych,</li>
      <li>- OREW-ach,</li>
      <li>- SOSW-ach,</li>
      <li>- ośrodkach szkolno - wychowawczych,</li>
      <li>- gabinetach terapeutycznych,</li>
      <li>- gabinetach lekarskich,</li>
      <li>- fundacjach/stowarzyszeniach.</li>
      </ul> <br />
      Diagnoza w języku angielskim - cena ustalana indywidualnie. <br /><br />
      Neurorehabilitacja z C-Eye:
      <ul>
        <li>180 zł  / 60 min. - w siedzibie PP-P</li>
        <li>300 zł / 60 min. -  w domu Pacjenta do 25km</li>
        <li>500 zł / 60 min - w domu Pacjenta do 60km</li>
      </ul><br />
      Wydanie opinii wraz z omówieniem - 120 zł.<br />
      Neurorehabilitacja z C-Eye w j. angielskim: dopłata 20% ceny.
      </p>)},


    { name: "Badanie ADOS-2", price: "600zł / 120min - w siedzibie PP-P", variant: "2000zł / 120min - w domu pacjenta do 25km", variant2:"3.000 zł /120 min – w domu pacjenta do 60km",info: (<p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub więcej w jednym miejscu - cena ustalana indywidualnie. <br />Diagnoza w języku angielskim: dopłata 20% ceny</p>), icon: <FaBook size={40} color="#4B5563" /> },
    { name: "Wirtualna rzeczywistość", price: "150zł / 3h", variant: "Online: 130zł / 3h", icon: <FaCalendarAlt size={40} color="#4B5563" /> },
    { name: "Terapie wspomagane VR/AR/AI", price: "140zł / 60 min", variant: "Pakiet 3 spotkań: 380zł", icon: <FaAnchor size={40} color="#4B5563" /> },
    { name: "Szkolenia", price: "140zł / 60 min", variant: "Pakiet 3 spotkań: 380zł", icon: <FaAnchor size={40} color="#4B5563" /> },
    { name: "Spotkania dla Rodziców/Opiekunów prawnych", price: "140zł / 60 min", variant: "Pakiet 3 spotkań: 380zł", icon: <FaAnchor size={40} color="#4B5563" /> },

  ];

  const handleServiceClick = (serviceName) => {
    console.log(`Wybrano usługę: ${serviceName}`);
    // W przyszłości tutaj można przekierować do panelu rejestracji z odpowiednio wybraną usługą
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mt-20 mb-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Cennik</h1>
      <p className="text-gray-600 mb-6">Zachęcamy do zapoznania się z naszą ofertą.</p>

      {services.map((service, index) => (
        <div key={service.name} className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-lg ${index !== 0 ? 'mt-4' : ''}`}>
          <div className="flex items-center">
            <div className="mr-4">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
              <p className="text-xl font-bold mt-2 text-blue-500">{service.price}</p>
              <p className="mt-2 text-gray-600">{service.variant}</p>
              <p className="mt-2 text-gray-600">{service.variant2}</p>
              <p className="mt-2 text-gray-600">{service.variant3}</p>
              <p className="mt-2 text-gray-600">{service.info}</p>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PriceList;