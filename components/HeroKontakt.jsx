'use client'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Formularz from '/components/Formularz';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })



const HeroKontakt = () => {

return(


<div className="bg-gray-100/20 font-sans overflow-x-hidden ">
{/* Nagłówek */}



<section className="py-6 md:py-24">
  <div className="container mx-auto flex justify-center">
    <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
      {/* Obrazek */}
      

      {/* Tekst informacyjny */}
      <div className="mx-5 flex-col justify-center items-center">
      <p className={` ${bebas.className} font-semibold mt-3 md:mt-4 mb-3 text-2xl md:text-3xl  `}>Kontakt</p>
        {/* <h2 className="text-6xl text-left font-semibold tracking-tighter mb-6 font-display text-slate-800">
        Poradnia Magnolia
        </h2> */}
        <div className=' mb-5'>
        <img src="/assets/LogoMainPage.svg" alt="" />
        </div>
        
        <ul className=' space-y-1 font-medium'>
          <li className=' flex justify-start items-center gap-2'><FaPhoneAlt />+48 797 173 501</li>
          <li className=' flex justify-start items-center gap-2'><FaPhoneAlt />+48 502 162 365</li>
          <li className=' flex justify-start items-center gap-2'><FaEnvelope />poradniamagnolia@gmail.com</li>
          <li className=' flex justify-start items-center gap-2'><FaMapMarkerAlt />Magnolii 25, 44-207 Rybnik</li>
        </ul>

        <p className=' text-md font-medium mt-3'>Godziny otwarcia:</p>
        <p className=' mb-4'>Poniedziałek - Piątek: 7:00 - 21:00</p>
        <hr className=' mb-4'/>
        <Formularz />
      </div>
      <div className="text-center mb-4 md:mb-0 mx-5">
      <div className="image-container">
        <img src="/assets/map.png" alt="dziecko ubierające maskę" />
      </div>


</div>
    </div>
  </div>
</section>



</div>
)};

export default HeroKontakt;



