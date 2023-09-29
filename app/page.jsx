'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

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

  useEffect(() => {
    // Sprawdź, czy kod jest wykonywany po stronie przeglądarki
    if (typeof window !== 'undefined') {
      // Ustaw szerokość okna przeglądarki po jej załadowaniu
      setWindowWidth(window.innerWidth);

      // Obsługa zdarzenia zmiany rozmiaru okna przeglądarki
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Dodaj nasłuchiwanie zdarzenia zmiany rozmiaru okna
      window.addEventListener('resize', handleResize);

      // Zwolnij nasłuchiwanie po odmontowaniu komponentu
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [activeTile, setActiveTile] = useState(null);
  
  useEffect(() => {
    // Function to generate a random number between 0 and 2 (for three tiles)
    const getRandomTileIndex = () => Math.floor(Math.random() * 3);

    // Function to update the active tile
    const updateActiveTile = () => {
      const randomTileIndex = getRandomTileIndex();
      setActiveTile(randomTileIndex);
    };

    let interval;
    
    const startAnimation = () => {
      // Clear existing interval
      if (interval) {
        clearInterval(interval);
      }
      
      // Set a new interval to update the active tile every 10 seconds (10000 milliseconds)
      interval = setInterval(updateActiveTile, 10000);
    };

    const handleMouseMove = () => {
      // Clear the existing interval and start a new one when the mouse is moved
      startAnimation();
    };
    
    // Start the animation initially
    startAnimation();

    // Add a mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clear the interval and remove the event listener when the component unmounts
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={`flex justify-center items-center gap-10 mt-20 mb-20 ${windowWidth < 768 ? 'flex-col' : 'flex-row'}`}>
        {/* Kafelek 3 */}
        <Link href='/Centrum_uzaleznien'>
          <div className={`w-96 h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 2 ? 'active-tile' : ''}`} style={{ backgroundImage: "url('/assets/kafelek3.jpg')", backgroundSize: 'cover' }}>
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
          <div className={`w-96 h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 0 ? 'active-tile' : ''}`} style={{ backgroundImage: "url('/assets/kafelek1.jpg')", backgroundSize: 'cover' }}>
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
        <div className={`w-96 h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 1 ? 'active-tile' : ''}`} style={{ backgroundImage: "url('/assets/kafelek2.jpg')", backgroundSize: 'cover' }}>
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
      </div>
    </>
  );
};

export default Home;
