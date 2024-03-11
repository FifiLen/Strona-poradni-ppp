'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Formularz = () => {
  const [section, setSection] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setSection(section + 1);
    setProgress((section + 0) * 20); // Each section represents 20% progress
  };

  const renderSection = () => {
    switch (section) {
      case 1:
        return <DaneOsobowe onNext={handleNext} />;
      case 2:
        return <HistoriaMedyczna onNext={handleNext} />;
      case 3:
        return <Rodzina onNext={handleNext} />;
      case 4:
        return <RozwojDziecka onNext={handleNext} />;
      case 5:
        return <FunkcjonowanieDziecka />;
      default:
        return null;
    }
  };

  return (
    <div className="my-40 flex justify-center items-center">
      <div className="max-w-md w-full">
        <div>
          <div className="mb-4">
            <div className="bg-gray-200 h-4 rounded-lg overflow-hidden">
              <div className={`bg-blue-500 h-4 w-${progress}%`} />
            </div>
            <div className="text-center mt-2">{`${progress}% completed`}</div>
          </div>
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const DaneOsobowe = ({ onNext }) => {
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [dataUrodzenia, setDataUrodzenia] = useState('');

  return (
    <div className="bg-blue-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Dane osobowe dziecka</h2>
      <form>
        {/* Form fields */}
        <button onClick={onNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Następny</button>
      </form>
    </div>
  );
};

const HistoriaMedyczna = ({ onNext }) => {
  return (
    <div className="bg-green-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Historia medyczna dziecka</h2>
      {/* Form fields */}
      <button onClick={onNext} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Następny</button>
    </div>
  );
};

const Rodzina = ({ onNext }) => {
  return (
    <div className="bg-yellow-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Rodzina dziecka</h2>
      {/* Form fields */}
      <button onClick={onNext} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Następny</button>
    </div>
  );
};

const RozwojDziecka = ({ onNext }) => {
  return (
    <div className="bg-pink-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Rozwój dziecka</h2>
      {/* Form fields */}
      <button onClick={onNext} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Następny</button>
    </div>
  );
};

const FunkcjonowanieDziecka = () => {
  return (
    <div className="bg-purple-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Aktualne funkcjonowanie dziecka</h2>
      {/* Form fields */}
    </div>
  );
};

export default Formularz;
