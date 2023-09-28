'use client'
import React, { useEffect, useState } from 'react';
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


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

    // Set an interval to update the active tile every 5 seconds (5000 milliseconds)
    const interval = setInterval(updateActiveTile, 5000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

 
  return (
    <>

    <div className=' mt-14'>
        <h2 className=' text-4xl text-[#921d7f] text-center'>Cennik</h2>
        <p className=' text-center italic'>Zachęcamy do zapoznania się z naszą ofertą</p>
    </div>

<div className={`flex justify-center items-center gap-10 mt-40 mb-20 ${windowWidth < 768 ? 'flex-col' : 'flex-row'}`}>

{/* Kafelek 1 */}
<Link href='/Cennik_centrum'>
<div className={`w-96 h-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 2 ? 'active-tile' : ''}`}>
    <div className="flex flex-col justify-end absolute bottom-56 left-0 w-full h-full">
    <img src="/assets/kafelek_circle4.png" alt="circle" className="w-44 mx-auto -mt-14 z-10 relative" />
  </div>
  <div className="h-40 w-full flex flex-col justify-end absolute bottom-20 bg-white rounded-lg">
    <div className="text-[#921d7f] text-center pb-12">
      <h2 className="text-xl">Oferta cetrum uzależnień</h2>
      <p className=' italic'>Cennik dla kazdego</p>
    </div>
  </div>
  <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
  
  <div className="overlay">
        <div className=' p-4 bg-slate-100 rounded-lg border-2'>
          <p>Kliknij w banerek, przekierujemy Cię w&nbsp;odpowiednie miejsce</p>
          
          </div>
      </div>
      
</div>
</Link>




{/* Kafelek 1 */}
<Link href='/Cennik_dorosli'>
<div className={`w-96 h-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 1 ? 'active-tile' : ''}`}>
<div className="flex flex-col justify-end absolute bottom-56 left-0 w-full h-full">
    <img src="/assets/kafelek_circle2.png" alt="circle" className="w-56 mx-auto -mt-14 z-10 relative" />
  </div>
  <div className="h-40 w-full flex flex-col justify-end absolute bottom-20 bg-white rounded-lg">
    <div className="text-[#921d7f] text-center pb-12">
      <h2 className="text-xl">Oferta dedykowana dorosłym</h2>
      <p className=' italic'>Cennik dla dorosłych</p>
    </div>
  </div>
  <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
  
  <div className="overlay">
        <div className=' p-4 bg-slate-100 rounded-lg border-2'>
          <p>Kliknij w banerek, przekierujemy Cię w&nbsp;odpowiednie miejsce</p>
          
          </div>
        
      </div>
      
</div>
</Link>


{/* Kafelek 3 */}




{/* Kafelek 1 */}
<Link href='/Cennik_dzieci'>
<div className={`w-96 h-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === 0 ? 'active-tile' : ''}`}>
<div className="flex flex-col justify-end absolute bottom-56 left-0 w-full h-full">
    <img src="/assets/kafelek_circle.png" alt="circle" className="w-40 mx-auto -mt-14 z-10 relative" />
  </div>
  <div className="h-40 w-full flex flex-col justify-end absolute bottom-20 bg-white rounded-lg">
    <div className="text-[#921d7f] text-center pb-12">
      <h2 className="text-xl">Oferta dedykowana dzieciom</h2>
      <p className=' italic'>Cennik dla dzieci</p>
    </div>
  </div>
  <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-[2px]"></div>
  
  <div className="overlay">
        <div className=' p-4 bg-slate-100 rounded-lg border-2'>
          <p>Kliknij w banerek, przekierujemy Cię w&nbsp;odpowiednie miejsce</p>
          
          </div>
        
      </div>
      
</div>
</Link>

</div>
<div className="bg-white border-t-2 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer text-center">
    <p>Chcielibyśmy poinformować, ze nasza poradnia oferuje atrakcyjne <b>pakiety usług terapeutycznych</b>.</p>
    <p>Wybierając nasze pakiety zapłacisz mniej w porównaniu do pojedyńczych sesji.</p>
    <p>Skontaktuj się z nami, aby dowiedzieć się więcej.</p>
</div>


    </>
  );
};


export default Home;