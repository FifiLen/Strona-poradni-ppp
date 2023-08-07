import React from 'react';

const Kontakt = () => {
  return (
    <section className='mx-[200px] mt-16 mb-[100px]'>
      <h3 className="text-[50px] font-semibold text-gray-800 text-center">Kontakt</h3>

      <div className='flex justify-center gap-6 mt-[72px]'>
  <div className='align-middle h-[200px] w-full flex justify-center items-center mb-[110px] mt-12'>
    <div className='text-center mx-auto max-w-screen-xl border-l-2 border-r-2 p-[72px] rounded-2xl shadow-xl'>
      <h4 className='font-semibold text-[19px] text-gray-700 pb-3'>Godziny otwarcia poradni</h4>
      <p className='text-gray-600 text-[17px]'>przy ul. Magnolii 25</p> <br />
      <span><b className='text-gray-700'>Poniedziałek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Wtorek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Środa: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Czwartek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Piątek: </b>7:00 - 21:00</span> <br />
      <span><b className='text-gray-700'>Zajęcia terapeutyczne w roku szkolnym: </b> 7:00 - 21:00</span>
    </div>
  </div>

  <div className='align-middle h-[200px] w-full flex justify-center items-center mb-16 mt-12'>
    <div className='text-center mx-auto max-w-screen-xl border-l-2 border-r-2 p-[72px] rounded-2xl shadow-xl'>
      <h4 className='font-semibold text-[19px] text-gray-700 pb-3'>Godziny otwarcia poradni</h4>
      <p className='text-gray-600 text-[17px]'>przy ul. Rudzkiej 13, budynek B, III piętro, pokój 3.3</p> <br />
      <span><b className='text-gray-700'>Poniedziałek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Wtorek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Środa: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Czwartek: </b>7:00 - 21:00</span><br />
      <span><b className='text-gray-700'>Piątek: </b>7:00 - 21:00</span> <br />
      <span><b className='text-gray-700'>Zajęcia terapeutyczne w roku szkolnym: </b> 7:00 - 21:00</span>
    </div>
  </div>
</div>





<div className="flex justify-center mt-10 gap-6">
  <div className="flex items-center space-x-4">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7 10a3 3 0 110-6 3 3 0 010 6zM2 6a6 6 0 1110.884 3.468c.006-.123.041-.244.106-.354l.707-.707A2.972 2.972 0 0116 5c.778 0 1.52.298 2.079.836l.707.707a4 4 0 10-5.657 5.657l-2.828 2.828a4 4 0 01-5.657 0L2 13.657A5.98 5.98 0 012 13c0-.95.221-1.876.636-2.686l.707-.707C3.32 8.825 2 9.886 2 11.313V6zm4 0a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <p className="text-gray-600">Telefon: 123-456-789</p>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a1 1 0 011-1h2V6H6a3 3 0 00-3 3v2h2V9zm7 0h2a1 1 0 011 1v2a3 3 0 00-3-3zM9 13h2v2H9v-2z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <p className="text-gray-600">Email: contact@example.com</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Kontakt;
