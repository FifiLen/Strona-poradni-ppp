import React from "react";

const ContactPage = () => {
  return (
    <section className="px-2 sm:px-6 md:px-[80px] lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-4 mb-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
        <div className="bg-[#7e0276] p-8 rounded-[20px] shadow-2xl">
          <h2 className="text-4xl font-black mb-4 text-white">Kontakt</h2>
          <div className="mb-4">
            <h3 className="text-[22px] font-bold text-white">Numer telefonu:</h3>
            <p className="text-white font-light">+48 123 456 789</p>
            <p className="text-white font-light">+48 123 456 789</p>
            <p className="text-white font-light">+48 123 456 789</p>
            <p className="text-white font-light">+48 123 456 789</p>
          </div>
          <div className="mb-4">
            <h3 className="text-[22px] font-bold text-white">Email:</h3>
            <p className="text-white font-light">poradniamagnolia@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-[22px] font-bold text-white">Godziny otwarcia poradni:</h3>
            <p className="text-white font-normal">przy ul. Magnolii 25</p>
            <br />
            <p className="text-white font-light">Poniedziałek: 7:00 - 21:00</p>
            <p className="text-white font-light">Wtorek: 7:00 - 21:00</p>
            <p className="text-white font-light">Środa: 7:00 - 21:00</p>
            <p className="text-white font-light">Czwartek: 7:00 - 21:00</p>
            <p className="text-white font-light">Piątek: 7:00 - 21:00</p>
          </div>
          <div className="mb-4">
            <h3 className="text-[22px] font-bold text-white">Godziny otwarcia poradni:</h3>
            <p className="text-white font-normal">przy ul. Rudzkiej 13, budynek B, III piętro, pokój 3.3</p>
            <br />
            <p className="text-white font-light">Poniedziałek: 7:00 - 21:00</p>
            <p className="text-white font-light">Wtorek: 7:00 - 21:00</p>
            <p className="text-white font-light">Środa: 7:00 - 21:00</p>
            <p className="text-white font-light">Czwartek: 7:00 - 21:00</p>
            <p className="text-white font-light">Piątek: 7:00 - 21:00</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-[410px] lg:h-[810px] rounded-[25px] shadow-2xl">
            <img
              src="/assets/map.png"
              alt="Mapa"
              className="w-full h-full object-cover rounded-[25px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
