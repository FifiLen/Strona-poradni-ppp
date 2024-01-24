'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


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
<div className=' h-screen bg-white'></div>


<div className='absolute top-0 h-screen bg-white md:bg-white/40 backdrop-blur-lg w-screen z-50 '>
  <div className='flex justify-center items-center h-screen'>
    <div className=' block md:flex w-full max-w-4xl mx-auto items-center'>
      {/* Lewa sekcja dla tekstu */}
      <div className='flex-1 p-4'>
        <h2 className='text-center md:text-left text-slate-800 font-semibold text-7xl'>Poradnia Magnolia</h2>
        <p className=' mt-6 text-center md:text-left'>Dobrze Cię widzieć, jak możemy Ci dzisiaj pomóc?</p>
      </div>

      {/* Prawa sekcja dla kafelków */}
      <div className='flex-1 p-4 grid grid-cols-1 gap-4'>
        {/* Tutaj umieść kafelki z opcjami wyboru */}
        <Link href={"/WWRD"} className=' text-slate-800'><div className=' cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow'>Szukam zajęć z WWRD dla mojego dziecka <FaRegArrowAltCircleRight /></div></Link>
        <Link href={"/Dzieci"} className=' text-slate-800'> <div className=' cursor-pointer flex gap-3 items-center justify-center p-5 shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow2'>Szukam Specjalisty dla dzieci i młodzieży <FaRegArrowAltCircleRight /></div></Link>
        <Link href={"/Dorosli"} className=' text-slate-800'><div className=' cursor-pointer flex gap-3 items-center justify-center p-5 shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>Potrzebuje wsparcia dla osoby dorosłej <FaRegArrowAltCircleRight /></div></Link>

        {/* Dodaj więcej kafelków w zależności od potrzeb */}
      
      </div>
    </div>
  </div>
</div>

   


</>
  );
};

export default Home;


//     <>
//     <div>
//     <p className=' text-center mb-2 mt-2'>Zapraszamy do skorzystania z ofert on-line lub stacjonarnie → <a className=' text-[#921d7f]' href="/assets/oferta-PPP-Magnolia.pdf" download={'Oferta'}>Oferta Poradni</a></p>

   

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mt-10 md:mt-6 mb-10 md:mb-6 justify-center mx-10 md:mx-20 ">
//         {/* Kafelek 3 */}

//         <Link href='/Centrum_uzaleznien'>
//   <div className="w-full h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative overflow-hidden" style={{ backgroundImage: "url('/assets/kafelek3.jpg')", backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//     <div className="flex flex-col justify-end h-full p-6">
//       <div className="text-[#921d7f] text-center pb-16 bg-white rounded-lg">
//         <img src="/assets/circle1.png" alt="circle" loading="lazy" className="w-32 h-28 mx-auto -mt-14 z-10" />
//         <h2 className="text-xl mt-3">Wyciągniemy Cię z tego</h2>
//       </div>
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#921d7f] rounded-b-lg"></div>
//   </div>
// </Link>



        
//         {/* Kafelek 1 */}




//         <Link href='/Dzieci'>
//         <div className="w-full h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative overflow-hidden" style={{ backgroundImage: "url('/assets/kafelek1.jpg')", backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//     <div className="flex flex-col justify-end h-full p-6">
//       <div className="text-[#921d7f] text-center pb-12 bg-white rounded-lg">
//         <img src="/assets/circle3.png" alt="circle" loading="lazy" className="w-28 h-28 mx-auto -mt-14 z-10 relative rounded-full" />
//         <h2 className="text-xl">Specjalistyczna pomoc <br /> dla Twojego dziecka</h2>
//       </div>
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#921d7f] rounded-b-lg"></div>
//   </div>
// </Link>





//         {/* Kafelek 2 */}
//         <Link href='/Dorosli'>
//       {/* Ustawiono 'overflow-hidden' i 'position-relative' dla kontenera zewnętrznego */}
//       <div className="w-full h-[550px] md:h-[600px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative overflow-hidden" style={{ backgroundImage: "url('/assets/kafelek2.jpg')", backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        
//         {/* Uporządkowano strukturę i usunięto nadmiarowe pozycjonowanie */}
//         <div className="flex flex-col justify-end h-full p-6">
          
//           {/* Upewniono się, że tekst jest dobrze umieszczony i widoczny na tle */}
//           <div className="text-[#921d7f] text-center pb-16 bg-white rounded-lg">
//           <img src="/assets/circle2.png" alt="circle" loading="lazy" className="w-44 h-34 mx-auto -mt-14 z-10 relative" />

//             <h2 className="text-xl mt-2">Pozwól sobie pomóc</h2>
//           </div>
//         </div>

//         {/* Uproszczono pasek na dole i zapewniono jego poprawne pozycjonowanie */}
//         <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#921d7f] rounded-b-lg"></div>
        
//         {/* Przeniesiono overlay bezpośrednio nad resztą zawartości, aby zapewnić, że nie koliduje z innymi elementami */}
       
//       </div>
//     </Link>
//       </div>
      
      
//       </div>
    
//     </>
{/* <>
<div>
  {/* <p className=' bg-white text-center text-sm text-gray-600 py-1'>Zapraszamy do skorzystania z ofert on-line lub stacjonarnie → <a className=' text-[#921d7f]' href="/assets/oferta-PPP-Magnolia.pdf" download={'Oferta'}>Oferta Poradni</a></p> 
<Hero />
<SubHero />
<SubHeroCd />
</div>

</> */}