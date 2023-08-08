/*import React, { useState } from 'react';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber) {
      setFormError('Wszystkie pola są wymagane.');
      return;
    }

    
    if (password !== confirmPassword) {
      setPasswordError('Hasła nie są identyczne.');
      return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPasswordError(
        'Hasło powinno mieć co najmniej 8 znaków, zawierać co najmniej jedną wielką literę i jeden znak specjalny.'
      );
      return;
    }

    
    console.log('Wysłane dane:');
    console.log('Imię:', firstName);
    console.log('Nazwisko:', lastName);
    console.log('Email:', email);
    console.log('Hasło:', password);
    console.log('Potwierdź hasło:', confirmPassword);
    console.log('Numer telefonu:', phoneNumber);

    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
    setPasswordError('');
    setFormError('');
  };

  return (
    <section className="Register pt-12">
      <h1 className="font-bold text-center">Rejestracja</h1>

      <div className="flex flex-col items-center mt-8">
        <form className="bg-white border-solid border rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
          <div className="flex mb-4">
            <div className="mr-2">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="firstName">
                Imię *
              </label>
              <input
                className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
                id="firstName"
                type="text"
                placeholder="Imię…"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="ml-2">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="lastName">
                Nazwisko *
              </label>
              <input
                className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
                id="lastName"
                type="text"
                placeholder="Nazwisko…"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="email">
              Email *
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
              id="email"
              type="email"
              placeholder="Email…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="password">
              Hasło *
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Hasło powinno mieć co najmniej 8 znaków, zawierać co najmniej jedną wielką literę i jeden znak specjalny.
            </p>
            <input
              className={`appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              } placeholder:text-sm placeholder:text-gray-300`}
              id="password"
              type="password"
              placeholder="Hasło…"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="confirmPassword">
              Potwierdź hasło *
            </label>
            <input
              className={`appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              } placeholder:text-sm placeholder:text-gray-300`}
              id="confirmPassword"
              type="password"
              placeholder="Potwierdź hasło…"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="phoneNumber">
              Numer telefonu *
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
              id="phoneNumber"
              type="tel"
              placeholder="Numer telefonu…"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {formError && <p className="text-red-500 text-xs italic mt-1">{formError}</p>}
          <button
            className="bg-[#cc007a92] hover:bg-[#ff6ac300] hover:border hover:text-gray-600 hover:duration-[0.5s] text-white font-bold py-2 px-4 mt-7 border rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;

*/
import React from 'react';
import Link from 'next/link';

const Registration = () => {
  return (
    <section className='flex flex-col justify-center items-center h-[500px] mx-auto'>
      <h1 className='text-4xl mb-4 font-semibold'>Uprzejmie informujemy</h1>
      <p className='text-md mb-4 text-center'>Rejestracje poprzez strone internetową będą dostępne od 25 sierpnia,<br/> zapraszamy do kontaktu drogą mailową bądź telefonicznie</p>
      <Link href="/Contact">
      <button className='bg-[#921d7f] text-white px-8 py-4 rounded'>Kontakt</button>
      </Link>
    </section>
  )
}

export default Registration
