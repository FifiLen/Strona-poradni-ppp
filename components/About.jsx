import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 xl:px-44 py-6 flex flex-col justify-center sm:py-12">
      <div className="container mx-auto">
        <div className="relative py-3 sm:max-w-full mx-auto">
          <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-20">
            <div className="mx-auto">

              <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">Nasze Metody</h2>
                <ul className="list-disc list-inside text-base text-gray-600">
                  <li>Fizjoterapia z wykorzystaniem wirtualnej rzeczywistości dla dzieci od 12 miesiąca życia, młodzieży oraz osób dorosłych</li>
                  <li>Integracja sensoryczna z&nbsp; terapią ręki wykorzystująca możliwości sztucznej inteligencji</li>
                  <li>Biofeedback Virtual Reality - zaawansowana technologia monitorująca i&nbsp; kontrolująca funkcje fizjologiczne, takich jak tętno, poziom stresu, skurcze mięśni czy aktywność mózgu, w&nbsp; czasie rzeczywistym.</li>
                  <li>Wirtualna rzeczywistość w terapii: stanów lękowych, agresji, niedostosowania społecznego, nadwrażliwości, stresu, fobi, terapii reki, zaburzeń neurologicznych, choroby Parkinsona, zeza i&nbsp; wiele, wiele innych</li>
                  <li>Cyber Oko: badanie zmysłu wzroku i&nbsp; słuchu, wyrażanie emocji, test świadomości</li>
                  <li>Diagnoza ADOS -2, czyli Autism Diagnostic Observation Schedule, Second Edition, jest narzędziem wykorzystywanym do diagnozy autyzmu oraz innych zaburzeń ze spektrum autyzmu (ASD) dla dzieci od 12 miesiąca życia do osób dorosłych, które nie zostały dotąd zdiagnozowane.</li>
                </ul>
              </div>
              <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">W jakich językach prowadzona jest terapia/diagnoza?</h2>
                <ul className="list-disc list-inside text-base text-gray-600">
                  <li>polskim</li>
                  <li>angielskim</li>
                  <li>niemieckim</li>
                  <li>hiszpańkim</li>
                  <li>włoskim</li>
                  <li>ukraińskim</li>
                </ul>    <br />
                <p className="text-base text-gray-600">Jeżeli jesteś zainteresowany terapią lub diagnozą w innym języku niż polski - skontaktuj się z nami i omów warunki współpracy.</p>
                          </div>

              <div className="mb-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-600">Zapraszamy</h2>
                <p className="text-base text-gray-600">Chcemy, aby każdy czuł się wspierany i&nbsp; rozumiany. Nasza Poradnia jest miejscem, w którym&nbsp; technologia spotyka się z&nbsp; empatią, tworząc unikalną platformę do odkrywania, nauki i&nbsp; rozwoju zarówno uczniów z&nbsp; trudnościami w&nbsp; nauce jak i&nbsp; uczniów ponadprzeciętnie zdolnych! Odkrywaj z&nbsp; nami, jak innowacyjne metody oraz połączenie teraźniejszości z&nbsp; przyszłością mogą Cię rozwijać, żebyś mógł/mogła osiągnąć pełnię swojego potencjału.</p>
              </div>

              <div className="text-center">
                <Link href="/Contact"> 
                  <button className="bg-[#7e0276] text-white px-6 py-3 sm:px-10 sm:py-4 rounded-lg shadow-lg hover:bg-pink-500 ease-in duration-500">Skontaktuj się z nami</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
