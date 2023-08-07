import React from 'react';

const Registration = () => {
  return (
    <section className="Register pt-12">
      <h1 className="font-bold text-center">Rejestracja</h1>

      <div className="flex flex-col items-center mt-8">
        <form className="bg-white border-solid border rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex mb-4">
            <div className="mr-2">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="firstName">
                Imię
              </label>
              <input
                className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
                id="firstName"
                type="text"
                placeholder="Imię…"
              />
            </div>
            <div className="ml-2">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="lastName">
                Nazwisko
              </label>
              <input
                className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
                id="lastName"
                type="text"
                placeholder="Nazwisko…"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
              id="email"
              type="email"
              placeholder="Email…"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="phoneNumber">
              Numer telefonu
            </label>
            <input
              className="appearance-none bg-gray-100 border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-300"
              id="phoneNumber"
              type="tel"
              placeholder="Numer telefonu…"
            />
          </div>
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
