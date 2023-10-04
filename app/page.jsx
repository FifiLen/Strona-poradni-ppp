'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';

const Home = () => {

  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";

    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement('script');
    gtmInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0QW3ZG23F5');
    `;

    // Dodaj dodatkowy skrypt do głowy dokumentu
    document.head.appendChild(gtmInlineScript);

    // Opcjonalnie: Możesz usunąć skrypty, gdy komponent zostanie odmontowany
    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(gtmInlineScript);
    }
  }, []);



  return (
    <>
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mt-10 md:mt-14 mb-10 md:mb-6 justify-center mx-4 md:mx-10">
        {/* Kafelek 3 */}




        <Link href='/Centrum_uzaleznien'>
        <div className={`w-full h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative`} style={{ backgroundImage: "url('/assets/kafelek3.jpg')", backgroundSize: 'cover' }}>
          <div className="flex flex-col justify-end absolute bottom-28 left-0 w-full h-full">
             <img src="/assets/circle1.png" alt="circle" loading="lazy" className="w-32 h-28 mx-auto -mt-14 z-10 relative" />
            </div>
            <div className="h-40 w-full flex flex-col justify-end absolute bottom-0 bg-white rounded-lg">
              <div className="text-[#921d7f] text-center pb-16">
                <h2 className="text-xl">Wyciągniemy Cię z tego</h2>
              </div>
            </div>
            <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
            <div className="overlay">
              <div className=' p-4 bg-slate-100 rounded-lg border-2'><p>Kliknij w banerek by dowiedzieć się więcej</p></div>
            </div>
          </div>
        </Link>
        
        {/* Kafelek 1 */}




        <Link href='/Dzieci'>
        <div className={`w-full h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative`} style={{ backgroundImage: "url('/assets/kafelek1.jpg')", backgroundSize: 'cover' }}>
            <div className="flex flex-col justify-end absolute bottom-28 left-0 w-full h-full">
              <img src="/assets/circle3.png" alt="circle" loading="lazy" className="w-28 h-28 mx-auto -mt-14 z-10 relative rounded-full" />
            </div> 
            <div className="h-40 w-full flex flex-col justify-end absolute bottom-0 bg-white rounded-lg">
              <div className="text-[#921d7f] text-center pb-12">
                <h2 className="text-xl">Specjalistyczna pomoc <br /> dla Twojego dziecka</h2>
              </div>
            </div>
            <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
            <div className="overlay">
              <div className=' p-4 bg-slate-100 rounded-lg border-2'>
                <p>Kliknij w banerek by dowiedzieć się więcej</p>
              </div>
            </div>
          </div>
        </Link>




        {/* Kafelek 2 */}
        <Link href='/Dorosli'>
        <div className={`w-full  h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative`} style={{ backgroundImage: "url('/assets/kafelek2.jpg')", backgroundSize: 'cover' }}>
         <div className="flex flex-col justify-end absolute bottom-28 left-0 w-full h-full">
            <img src="/assets/circle2.png" alt="circle" className="w-44 h-38 mx-auto -mt-14 z-10 relative" loading="lazy"/>
          </div>
          <div className="h-40 w-full flex flex-col justify-end absolute bottom-0 bg-white rounded-lg">
            <div className="text-[#921d7f] text-center pb-16">
              <h2 className="text-xl">Pozwól sobie pomóc</h2>
            </div>
          </div>
          <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
          <div className="overlay">
            <div className=' p-4 bg-slate-100 rounded-lg border-2'><p>Kliknij w banerek by dowiedzieć się więcej</p></div>
          </div>
        </div>
        </Link>
      </div>
      
      <p className=' text-center mb-6'>Zapraszamy do skorzystania z oferty on-line lub stacjonarnie</p>
      </div>
    
    </>
  );
};

export default Home;
