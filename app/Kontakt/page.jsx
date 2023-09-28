'use client'
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaAngleRight, FaEnvelope, FaClock } from 'react-icons/fa';
import InfoReservation from '@components/InfoReservation';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obsługa przesłania formularza
  };

  return (
    <section className="py-16 bg-[#F5F5F5] border-t-4">
      <div className="container mx-auto px-4 md:px-0 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Kolumna 1: Tekst kontaktowy */}
          <div className="footer-section">
            <h2 className="font-semibold text-4xl mb-4">Kontakt</h2>
            <div className="mb-4 space-y-2">
              <div className="flex items-center">
                <FaAngleRight className="mr-2" />
                <p className="font-semibold text-gray-600">+48 797 173 501</p>
              </div>
              <div className="flex items-center">
                <FaAngleRight className="mr-2" />
                <p className="font-semibold text-gray-600">+48 502 162 365</p>
              </div>
              <div className="flex items-center">
                <FaAngleRight className="mr-2" />
                <p className="font-semibold text-gray-600">+48 690 515 224</p>
              </div>
              <div className="flex items-center">
                <FaAngleRight className="mr-2" />
                <p className="font-semibold text-gray-600">+48 503 192 950</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-600">poradniamagnolia@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-800">Magnolii 25, 44-207 Rybnik</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800">Godziny otwarcia</h4>
              <p className="font-semibold text-gray-600">Poniedziałek - Piątek: 7:00 - 21:00</p>
            </div>
          </div>


          {/* Kolumna 3: Formularz kontaktowy 
          <div className="footer-section">
            <div className="w-full p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold text-sm">
                    Imię/Pseudonim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block font-semibold text-sm">
                    Numer telefonu
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block font-semibold text-sm">
                    Temat
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold text-sm">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#921d7f] text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
          */}

          {/* Kolumna 2: Zdjęcie mapki */}
          <div className="footer-section">
            <img
              src="/assets/map.png"
              alt="Mapa"
              className="h-[450px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
