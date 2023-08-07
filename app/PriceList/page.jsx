'use client'
import React from 'react';
import { FaRegComments, FaPuzzlePiece, FaBook, FaBrain, FaChartLine, FaCoffee, FaChild, FaChalkboardTeacher, FaCalendarAlt, FaAnchor, FaChevronRight } from 'react-icons/fa';

const PriceList = () => {
  const services = [
    { name: "Konsultacja psychologiczna", price: "150zł / 60 min", variant: "Online: 130zł / 60 min", icon: <FaRegComments size={40} color="#4B5563" /> },
    { name: "Konsultacja pedagogiczna", price: "140zł / 60 min", variant: "Online: 120zł / 60 min", icon: <FaPuzzlePiece size={40} color="#4B5563" /> },
    { name: "Terapia dla dzieci", price: "160zł / 60 min", variant: "Pakiet 5 spotkań: 700zł", icon: <FaChild size={40} color="#4B5563" /> },
    { name: "Warsztaty rozwojowe", price: "250zł / 4h", variant: "Online: 220zł / 4h", icon: <FaBrain size={40} color="#4B5563" /> },
    { name: "Konsultacje zawodowe", price: "130zł / 60 min", variant: "Pakiet 3 spotkań: 350zł", icon: <FaChartLine size={40} color="#4B5563" /> },
    { name: "Mediacje rodzinne", price: "120zł / 60 min", variant: "Pakiet 5 spotkań: 500zł", icon: <FaCoffee size={40} color="#4B5563" /> },
    { name: "Szkolenia dla nauczycieli", price: "400zł / dzień", variant: "Online: 350zł / dzień", icon: <FaChalkboardTeacher size={40} color="#4B5563" /> },
    { name: "Terapia grupowa", price: "80zł / 90 min", variant: "Pakiet 5 spotkań: 350zł", icon: <FaBook size={40} color="#4B5563" /> },
    { name: "Warsztaty dla rodziców", price: "150zł / 3h", variant: "Online: 130zł / 3h", icon: <FaCalendarAlt size={40} color="#4B5563" /> },
    { name: "Konsultacje rodzinne", price: "140zł / 60 min", variant: "Pakiet 3 spotkań: 380zł", icon: <FaAnchor size={40} color="#4B5563" /> }
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
            </div>
          </div>
          <button onClick={() => handleServiceClick(service.name)}>
            <FaChevronRight size={30} color="#4B5563" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default PriceList;