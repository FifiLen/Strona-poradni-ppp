import React from 'react';
import { FaPhoneAlt, FaBuilding, FaRegClock, FaWhatsapp } from 'react-icons/fa'; 

const InfoReservation = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[170px] mb-24 max-w-full"> 
      <div className='bg-white shadow-md rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-gray-800 mb-6 lg:mb-8 text-center">Godziny urzędowania recepcji</h2>
        <p className='text-lg text-gray-500 mb-6 lg:mb-8 text-center'>*Godziny urzędowania recepcji nie są tożsame z godzinami otwarcia Poradni</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Items */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center text-gray-600">
              <FaPhoneAlt className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mr-4 lg:mr-6" />
              <div>
                <h3 className="font-semibold text-xl lg:text-xl">Obsługa telefoniczna</h3>
                <p className="text-lg">od 7.30 do 18.30 (sobota: 9.00 do 13.00)</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <FaWhatsapp className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mr-4 lg:mr-6" />
              <div>
                <h3 className="font-semibold text-xl lg:text-xl">Obsługa WhatsApp</h3>
                <p className="text-lg">tel. 502 162 365 <br className='hidden lg:block'/>(poniedziałek – sobota: 9.00 – 21.00)</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center text-gray-600">
              <FaBuilding className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mr-4 lg:mr-6" />
              <div>
                <h3 className="font-semibold text-xl lg:text-xl">Obsługa w placówce</h3>
                <p className="text-lg">poniedziałek - piątek: od 9.00 do 16.00<br className='hidden lg:block'/> (sobota nieczynne)</p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <FaRegClock className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mr-4 lg:mr-6" />
              <div>
                <h3 className="font-semibold text-xl lg:text-xl">Godziny pracy</h3>
                <p className="text-lg">poniedziałek - piątek: od 7.30 do 19.00<br className='hidden lg:block'/> (sobota nieczynne)</p>
              </div>
            </div>
          </div>

        </div>
        <p className="text-lg text-gray-500 mt-6 text-center">O wszelkich zmianach będziemy Państwa informować na bieżąco. Zapraszamy do kontaktu.</p>
      </div>
    </section>
  );
};

export default InfoReservation;
