'use client'
import React, { useState } from 'react';

const WebinarButton = () => {
  const [showWebinarModal, setShowWebinarModal] = useState(false);

  const openWebinarModal = () => {
    setShowWebinarModal(true);
  };

  const closeWebinarModal = () => {
    setShowWebinarModal(false);
  };

  

  return (
    <>
      <div className="text-center w-full">
        <button onClick={openWebinarModal} className="bg-gradient-to-r from-[#921d7f] to-[#b23b9e] text-white px-4 py-2 w-full ">
          Zapraszamy na darmowy webinar o uzależnieniach <span className=' italic text-sm'>(kliknij i poznaj szczegóły)</span>
        </button>
      </div>
{/* Modal z informacjami o webinarze */}
{showWebinarModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] p-6 rounded-lg shadow-lg">
            {/* Nagłówek */}
            <h2 className="text-2xl font-semibold mb-4">Darmowy Webinar o Uzależnieniach</h2>
            {/* Opis */}
            <p className="text-gray-700 mb-6">
              Dołącz do nas na bezpłatnym webinarze, gdzie będziemy omawiać temat uzależnień oraz sposoby ich
              przeciwdziałania. To doskonała okazja, aby zdobyć cenne informacje i wsparcie.
            </p>
            {/* Zdjęcie */}
            <img
              src="/assets/uzaleznienie1.jpg"
              alt="Webinar"
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Przycisk Zapisz się */}
            <div className="text-center">
              <a
                href="https://app.livewebinar.com/579-366-824"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#921d7f] hover:bg-[#b23b9e] text-white py-2 px-6 rounded-full  font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                Zapisz się teraz
              </a>
            </div>
            {/* Przycisk Zamknij */}
            <div className="text-right mt-4">
              <button
                onClick={closeWebinarModal}
                className="text-gray-600 hover:text-gray-800 font-semibold hover:underline"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebinarButton;
