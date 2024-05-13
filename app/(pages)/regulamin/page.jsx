import React from 'react'

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "/components/ui/hover-card"
import Link from 'next/link'

const Regulamin = () => {
  return (
    <div>
    <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
          Regulamin
          </h2>
        </div>
      </div>


      <div className=' max-w-6xl mx-3 md:mx-auto grid grid-row-3 gap-y-3 md:gap-y-8 my-20'>
       
       
        <HoverCard>
            <HoverCardTrigger className=" p-6 rounded-md border border-zinc-700 text-center flex items-center justify-center hover:bg-slate-300/20 transition-all duration-300 cursor-pointer "><a href='/assets/Zgłoszenie_dziecka_na_zajecia.zip' download={'Zgłoszenie_dziecka_na_zajecia'} className='text-black'>Zgłoszenie na zajęcia WWRD</a><DocumentArrowDownIcon width={20} className=' ml-3'/></HoverCardTrigger>
            <HoverCardContent>
                Kliknij aby pobrać plik.
            </HoverCardContent>
        </HoverCard>
        


        <HoverCard>
            <HoverCardTrigger className=" p-6 rounded-md border border-zinc-700 text-center flex items-center justify-center hover:bg-slate-300/20 transition-all duration-300 cursor-pointer text-black"><a href='/assets/Oświadczenie-o-zapoznaniu-się-z-regulaminem-zajęć-WWR.jpg' download={'Oświadczenie_o_zapoznaniu_się_z_regulaminem_zajęć_WWRD'} className='text-black'>Oświadczenie o zapoznaniu się z regulaminem zajęć WWRD</a><DocumentArrowDownIcon width={20} className=' ml-3'/></HoverCardTrigger>
            <HoverCardContent>
                Kliknij aby pobrać plik.
            </HoverCardContent>
        </HoverCard>


        <HoverCard>
            <HoverCardTrigger className=" p-6 rounded-md border border-zinc-700 text-center flex items-center justify-center hover:bg-slate-300/20 transition-all duration-300 cursor-pointer text-black"><a href='/assets/Regulamin_zajęć_WWRD.zip' download={'Regulamin_zajęć_WWRD'} className='text-black'>Regulamin zajęć WWRD</a><DocumentArrowDownIcon width={20} className=' ml-3'/></HoverCardTrigger>
            <HoverCardContent>
                Kliknij aby pobrać plik.
            </HoverCardContent>
        </HoverCard>
      </div>

      </div>
  )
}

export default Regulamin