import React from 'react';

const CEye = () => {
  return (
    <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-8 sm:mt-[80px] bg-green-500 p-1 rounded-lg shadow-xl mb-20">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg">
        <h2 className="text-5xl font-extrabold text-green-500 mb-4">C-eye® PRO</h2>
        <p className="text-xl text-gray-800 text-center mb-8">
        System bazujący na eye trackingu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border border-green-500 p-6 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4">Rehabilitacja</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>Nowoczesna forma terapii</li>
              <li>Atrakcyjne treści multimedialne</li>
              <li>Rehabilitacja mózgu</li>
              <li>Monitorowanie wyników</li>
            </ul>
          </div>
          <div className="border border-green-500 p-6 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4">Diagnoza</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>Badanie zmysłów wzroku i słuchu</li>
              <li>Obiektywna ocena stanu pacjenta</li>
              <li>Test świadomości</li>
            </ul>
          </div>
          <div className="border border-green-500 p-6 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <h3 className="text-2xl font-semibold mb-4">Komunikacja</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-6">
              <li>Kontakt ze światem</li>
              <li>Wyrażanie emocji</li>
              <li>Decydowanie o sobie</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-6 sm:p-12 mt-8 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-green-500 mb-4">
            C-eye® Pro - Sprzęt do rehabilitacji i opieki neurologicznej
          </h4>
          <p className="text-gray-800 mb-6">
            C-eye® to sprzęt będący obecnie standardem w rehabilitacji funkcji poznawczych i w
            opiece nad pacjentami neurologicznymi pozbawionymi możliwości kontaktu z otoczeniem za
            pomocą mowy czy gestów. W systemie C-eye® wykorzystywana jest technologia śledzenia
            wzroku (eye tracking), dzięki której można w obiektywny i wiarygodny sposób prowadzić
            sesje diagnostyczne i terapeutyczne z pacjentami, dla których ostatnią możliwością
            kontaktu z otoczeniem pozostały ruchy gałek ocznych. Sesje diagnostyczne i terapeutyczne
            polegają na wybieraniu przez pacjenta wyświetlanych na ekranie treści. System umożliwia
            dostosowanie terapii do możliwości i potrzeb pacjenta.
          </p>
          <h4 className="text-3xl font-bold text-green-500 mb-4">
            C-eye® Pro jest produktem medycznym
          </h4>
          <p className="text-gray-800">
            C-eye® Pro jest produktem medycznym, wykorzystującym eye tracking. Jest to narzędzie,
            które pomaga terapeutom w ocenie stanu świadomości oraz rehabilitacji pacjentów z
            różnorodnymi zaburzeniami neurologicznymi. System C-eye® Pro to również narzędzie pracy
            wielu specjalistów, takich jak logopedzi, neurologopedzi, psycholodzy, neuropsycholodzy,
            terapeuci AAC, terapeuci widzenia, terapeuci zajęciowi i fizjoterapeuci.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEye;
