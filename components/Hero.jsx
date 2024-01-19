import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
<>

<section className='h-screen'>
<div className=' flex justify-center items-start mt-28'>
    <div className='w-full md:w-1/2 mx-10 md:ml-20'>
      <h1 className=' text-8xl text-slate-800 font-display font-semibold'>Poradnia Magnolia</h1>
      <div className=' bg-slate-300/40 p-5 rounded-lg mt-8'>
        <p className='text-2xl font-semibold text-slate-800'>Kontakt</p>
        
        <div className=' flex justify-start items-center gap-3 mt-2'><FaPhoneAlt  className=' text-slate-800 text-lg'/><p className=' text-lg font-semibold text-slate-800 '>+48 797 173 501</p></div>
        <div className=' flex justify-start items-center gap-3 mt-2'><FaEnvelope   className=' text-slate-800 text-lg'/><p className=' text-lg font-semibold text-slate-800 '>poradniamagnolia@gmail.com</p></div>
        <div className=' flex justify-start items-center gap-3 mt-2'><FaMapMarkerAlt className=' text-slate-800 text-lg'/><p className=' text-lg font-semibold text-slate-800 '>Magnolii 25, 44-207 Rybnik</p></div>

      </div>

      <div className=' w-fit flex justify-start items-center gap-3 bg-slate-300/40 p-5 rounded-lg mt-4'>
        <p className='text-2xl font-semibold text-slate-800'>Oferta poradni</p><img src="/assets/download.gif" width={32} alt="Opis GIF-a" />
      </div>

      



      {/* <div className='mt-8 bg-white/50 backdrop-blur-lg shadow-xl shadow-gray-800/50 p-5 rounded-lg w-auto h-16'> {/* Pozycjonowanie kafelka
        <p>Zajęcia WWRD dla twojego dziecka →</p>
      </div> */}



    </div>

      
      {/* Pływające kafelki
      <div className='absolute top-20 left-10 bg-white/50 backdrop-blur-lg shadow-xl shadow-gray-800/50 p-5 rounded-lg w-auto h-16'> {/* Pozycjonowanie kafelka 
         <p>Zajęcia WWRD dla twojego dziecka →</p>
      </div> */}

    

     

      {/* Więcej kafelków w różnych miejscach */}

      {/* Kontener wideo */}
      <div className=' hidden md:block mx-20'>
      <video className='rounded-2xl hover:rounded-[36px] transition-all duration-300' src="/assets/bg-vid.mp4" autoPlay loop muted />
      </div>

    
    </div>

    <div className=' flex justify-center items-center gap-2 bg-[#8887C2]/25 p-5 rounded-lg mt-32'>
        <p className='text-xl font-semibold text-slate-800 text-center'>Bezpłatne zajęcia WWRD dla&nbsp;twojego dziecka</p><img src="/assets/gif-arrow.gif" width={32} alt="Opis GIF-a" />
    </div>


      
      </section>
      <div className=' absolute top-64 right-4'><img width={100} src="/assets/bg-flower4.png" alt="flower" /></div>
      <div className=' absolute bottom-44 left-96'><img width={120} src="/assets/bg-flower.png" alt="flower" /></div>
      <div className=' absolute top-20 left-10'><img width={80} src="/assets/bg-flower2.png" alt="flower" /></div>


    </>
  );
}

export default Hero;
