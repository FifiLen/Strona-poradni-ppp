'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Formularz = () => {
  const [section, setSection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    imie: '',
    nazwisko: '',
    dataUrodzenia: '',
    historiaMedyczna: '',
    liczbaOsob: 1,
    milestones: [''],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setProgress(section * 20);
  }, [section]);

  const validateSection = () => {
    const errors = {};
    switch (section) {
      case 1:
        if (!formData.imie.trim()) {
          errors.imie = 'Imię jest wymagane';
        }
        if (!formData.nazwisko.trim()) {
          errors.nazwisko = 'Nazwisko jest wymagane';
        }
        if (!formData.dataUrodzenia) {
          errors.dataUrodzenia = 'Data urodzenia jest wymagana';
        }
        break;
      case 2:
        if (!formData.historiaMedyczna.trim()) {
          errors.historiaMedyczna = 'Historia medyczna jest wymagana';
        }
        break;
      case 3:
        if (formData.liczbaOsob < 1) {
          errors.liczbaOsob = 'Liczba osób w rodzinie musi być większa niż 0';
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const handleNext = () => {
    const validationErrors = validateSection();
    if (Object.keys(validationErrors).length === 0) {
      setSection(section + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMilestoneChange = (index, value) => {
    const updatedMilestones = [...formData.milestones];
    updatedMilestones[index] = value;
    setFormData({ ...formData, milestones: updatedMilestones });
  };

  const handleAddMilestone = () => {
    setFormData({ ...formData, milestones: [...formData.milestones, ''] });
  };

  const renderSection = () => {
    switch (section) {
      case 1:
        return (
          <DaneOsobowe
            formData={formData}
            errors={errors}
            onNext={handleNext}
            onInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <HistoriaMedyczna
            formData={formData}
            errors={errors}
            onNext={handleNext}
            onInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Rodzina
            formData={formData}
            errors={errors}
            onNext={handleNext}
            onInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <RozwojDziecka
            formData={formData}
            onNext={handleNext}
            onMilestoneChange={handleMilestoneChange}
            onAddMilestone={handleAddMilestone}
          />
        );
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

const DaneOsobowe = ({ formData, errors, onNext, onInputChange }) => {
  return (
    <div className="bg-blue-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Dane osobowe dziecka</h2>
      <form>
        <input
          type="text"
          name="imie"
          placeholder="Imię"
          value={formData.imie}
          onChange={onInputChange}
          className="mb-2 p-2 rounded border border-gray-400"
        />
        {errors.imie && <div className="text-red-500">{errors.imie}</div>}
        <input
          type="text"
          name="nazwisko"
          placeholder="Nazwisko"
          value={formData.nazwisko}
          onChange={onInputChange}
          className="mb-2 p-2 rounded border border-gray-400"
        />
        {errors.nazwisko && <div className="text-red-500">{errors.nazwisko}</div>}
        <input
          type="date"
          name="dataUrodzenia"
          placeholder="Data urodzenia"
          value={formData.dataUrodzenia}
          onChange={onInputChange}
          className="mb-2 p-2 rounded border border-gray-400"
        />
        {errors.dataUrodzenia && <div className="text-red-500">{errors.dataUrodzenia}</div>}
        <button
          onClick={onNext}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Następny
        </button>
      </form>
    </div>
  );
};

const HistoriaMedyczna = ({ formData, errors, onNext, onInputChange }) => {
  return (
    <div className="bg-green-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Historia medyczna dziecka</h2>
      <form>
        <textarea
          name="historiaMedyczna"
          placeholder="Opisz historię medyczną dziecka"
          value={formData.historiaMedyczna}
          onChange={onInputChange}
          className="mb-2 p-2 rounded border border-gray-400"
        />
        {errors.historiaMedyczna && <div className="text-red-500">{errors.historiaMedyczna}</div>}
        <button
          onClick={onNext}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Następny
        </button>
      </form>
    </div>
  );
};

const Rodzina = ({ formData, errors, onNext, onInputChange }) => {
  return (
    <div className="bg-yellow-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Rodzina dziecka</h2>
      <form>
        <input
          type="number"
          name="liczbaOsob"
          placeholder="Liczba osób w rodzinie"
          value={formData.liczbaOsob}
          onChange={onInputChange}
          className="mb-2 p-2 rounded border border-gray-400"
        />
        {errors.liczbaOsob && <div className="text-red-500">{errors.liczbaOsob}</div>}
        <button
          onClick={onNext}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Następny
        </button>
      </form>
    </div>
  );
};

const RozwojDziecka = ({ formData, onNext, onMilestoneChange, onAddMilestone }) => {
  return (
    <div className="bg-pink-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Rozwój dziecka</h2>
      <form>
        {formData.milestones.map((milestone, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Krok rozwoju ${index + 1}`}
            value={milestone}
            onChange={(e) => onMilestoneChange(index, e.target.value)}
            className="mb-2 p-2 rounded border border-gray-400"
          />
        ))}
        <button
          onClick={onAddMilestone}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Dodaj kolejny krok rozwoju
        </button>
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Następny
        </button>
      </form>
    </div>
  );
};

const FunkcjonowanieDziecka = () => {
  return (
    <div className="bg-purple-200 rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Funkcjonowanie dziecka</h2>
      {/* Add functionality for this section */}
    </div>
  );
};

export default Formularz;
