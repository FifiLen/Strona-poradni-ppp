'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "/components/ui/hover-card"



const Page = () => {


  return (
    <div className='w-full'>
      <div className='max-w-6xl pb-20 m-auto flex-col justify-center items-start pt-10'>
        <div className='flex-col mb-10 pb-6 border-b'>
          <h2 className='font-display text-2xl md:text-xl text-gray-700 text-center'>Przegapiłeś spotkanie z cyklu o E-uzależnieniach?</h2>
  
          <div className='flex gap-8 mt-3 justify-center items-center'>
            <Link href={"https://sklep.rybnikonline.eu/?product_cat=szkolenia-online-offline"} target='_blank'>
              <div className='h-16 w-60 md:w-[300px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button className='text-sm'>Po nagrania zajrzyj tutaj →</button>
              </div>
            </Link>
  
            <Link href={"https://www.youtube.com/channel/UCsEXOxpnjOWB5XMJo46-whg"} target='_blank'>
              <div className='h-16 w-60 md:w-[300px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button className='text-sm'>Q&A po cyklu spotkań →</button>
              </div>
            </Link>
          </div>
        </div>
  
        <div className='flex-col border-b pb-10'>
          <h2 className='font-display text-6xl md:text-6xl text-center'>Nadchodzący cykl webinariów</h2>
          <p className='font-display text-3xl md:text-3xl mt-4 text-gray-700 text-center'>Stany lękowe/nadwrażliwość</p>
          <p className='mt-12 text-xl text-center text-gray-700'>Prowadzący:</p>
  
          <div className="mt-6 flex justify-center gap-20">
        <div className='flex items-center justify-center text-center gap-6'>

        <HoverCard>
  <HoverCardTrigger className=' text-black p-4 border rounded-md'>Wioletta Ginter</HoverCardTrigger>
  <HoverCardContent>
  Magister pedagogiki specjalizujący się w poradnictwie i&nbsp;pomocy psychopedagogicznej. Jako aktywny pedagog specjalny, terapeuta ręki, specjalista w  edukacji włączającej i wykładowca, posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom w  różnych instytucjach edukacyjnych.
  </HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger className=' text-black p-4 border rounded-md'>Anna Ławniczak</HoverCardTrigger>
  <HoverCardContent>
  Magister psychologii, specjalizujący się w seksuologii klinicznej i psychologii kryminologicznej. Wykładowca studiów podyplomowych z obszaru pedagogiki specjalnej, seksuologii, seksuologii klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się w pracę na rzecz dzieci w szkołach i przedszkolach.  </HoverCardContent>
</HoverCard>

          
          
        </div>

      </div>
  
          <div className='flex justify-center items-center gap-4 mt-16'>
            <Link href={"https://app.livewebinar.com/579-366-824"} target='_blank'>
              <div className='h-20 w-96 md:w-[900px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button>Zapisy na zbliżające się webinaria →</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}  

export default Page;