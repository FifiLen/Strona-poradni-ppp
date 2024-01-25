import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const metadata = {
  title: 'Poradnia Psychologiczno Pedagogiczna Magnolia',
  keywords: ['Poradnia psychologiczna', 'Zajęcia WWRD', 'Poradnia Rybnik', 'PPP-Rybnik', 'Psycholog Rybnik', 'Diagnoza'],
  description: 'Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości'
}


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


