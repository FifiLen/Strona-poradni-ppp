import React from 'react'
import Link from 'next/link';
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { PiVirtualReality } from "react-icons/pi";
import dynamic from 'next/dynamic';


const FaChild = dynamic(() => import('react-icons/fa').then(mod => mod.FaChild));

const HeroPartZero = () => {
  return (
    <div>

      <video className=' h-[50vh] md:h-[82vh] w-full object-cover' preload='auto' src="/assets/hero.mp4" autoPlay loop muted></video>

      {/* Kontener dla bloków pod filmikiem */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3 pb-20 gap-3 px-3`} style={{ maxWidth: '95rem', margin: '0 auto' }}>

      <Link href={'/Dzieci'} className=' hover:scale-105  transition-all duration-500'>
        <div className='bg-gradient-to-bl flex justify-start items-end p-4 from-green-500/30 via-green-500/80 to-green-300/40 w-full h-[8rem] rounded-xl relative'>
        <div className='absolute top-0 left-0 p-4'>
          <FaChild className=' text-2xl'/>
        </div>
          <div className='flex justify-between items-center w-full'>
            <div>
              <h2 className='text-xl font-semibold tracking-tighter text-zinc-800'>Wsparcie dla dzieci</h2>
              <p className='text-sm'>Zajęcia WWR, TUS, Logopeda i więcej..</p>
            </div>
            <p className='font-semibold px-2 py-1 border-[1.5px] border-black rounded-full'>↗</p>
          </div>
        </div>
        </Link>

      <Link href={'/Dorosli'} className=' hover:scale-105 transition-all duration-500'>
       <div className='bg-gradient-to-bl flex justify-start items-end p-4 from-blue-400/30 via-blue-500/60 to-blue-300/40 w-full h-[8rem] rounded-xl relative'>
       <div className='absolute top-0 left-0 p-4'>
          <LiaHandsHelpingSolid className=' text-3xl'/>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div>
            <h2 className='text-xl font-semibold tracking-tighter text-zinc-800'>Wsparcie dla dorosłych</h2>
            <p className='text-sm'>Psycholog, psychoterapia, terapie par</p>
          </div>
          <p className='font-semibold px-2 py-1 border-[1.5px] border-black rounded-full'>↗</p>
        </div>
      </div>
      </Link>

      <Link href={'/Centrum_uzaleznien'} className=' hover:scale-105 transition-all duration-500'>
        <div className='bg-gradient-to-bl flex justify-start items-end p-4 from-red-400/30 via-orange-500/80 to-red-300/40 w-full h-[8rem] rounded-xl relative'>
        <div className='absolute top-0 left-0 p-4'>
          <FaPersonCircleExclamation className=' text-3xl'/>
        </div>
          <div className='flex justify-between items-center w-full'>
            <div>
              <h2 className='text-xl font-semibold tracking-tighter text-zinc-800'>Centrum uzależnień</h2>
              <p className='text-sm'>E-uzależnienia, uzależnienia, diagnoza</p>
            </div>
            <p className='font-semibold px-2 py-1 border-[1.5px] border-black rounded-full'>↗</p>
          </div>
        </div>
        </Link>

        <Link href={'/terapia_vr'} className=' hover:scale-105 transition-all duration-500'>
        <div className='bg-gradient-to-bl flex justify-start items-end p-4 from-[#d400d0] via-[#fecf3e] to-[#d400d0] w-full h-[8rem] rounded-xl relative'>
        <div className='absolute top-0 left-0 p-4'>
          <PiVirtualReality className=' text-3xl'/>
        </div>
          <div className='flex justify-between items-center w-full'>
            <div>
              <h2 className='text-xl font-semibold tracking-tighter text-zinc-800'>Terapia VR</h2>
              <p className='text-sm'>Terapia VR, Zajęcia dla dzieci i więcej..</p>
            </div>
            <p className='font-semibold px-2 py-1 border-[1.5px] border-black rounded-full'>↗</p>
          </div>
        </div>
        </Link>

      </div>
      </div>
  )
}

export default HeroPartZero