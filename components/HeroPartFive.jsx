import React from 'react'
import { Bebas_Neue } from 'next/font/google'

import { LuArrowUpRight } from "react-icons/lu";
import Image from 'next/image';
import Link from 'next/link';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })


const HeroPartFive = () => {
  return (
    <div className=' w-full oNas5 flex items-center justify-center md:px-0 px-4 py-20 md:py-36 md:bg-transparent'>
    <div className=' max-w-[85rem] mx-auto  w-full'>
      <div className=' grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-20'>
       

          <div className='col-span-1 order-2 md:order-1'>
      <div className='mt-0 md:mt-32'> 
      <Image src="/assets/Grid4.svg" width={700} height={700} loading="lazy" placeholder="empty" alt="Dzieci" />
        
      </div>
    </div>


          <div className=' col-span-1 flex justify-start  items-center order-1 md:order-2'>
            <div className='mt-0 md:mt-10 pb-0 md:pb-20'>
            <p className={` ${bebas.className} font-semibold mt-3 md:mt-4 mb-3 text-2xl md:text-3xl text-gradient`}>Zajęcia wspomagane VR</p>
            <h2 className=' text-5xl md:text-7xl font-semibold text-gradient tracking-tighter'>Odkryj wirtualny świat</h2>
            <p className='w-full md:w-4/5 mt-4 leading-8 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit alias debitis iste omnis magni quis, adipisci sit voluptatibus natus, quo harum ut corporis. Facilis magnam quibusdam dolor culpa porro blanditiis et veritatis recusandae eos obcaecati, perspiciatis libero nihil fuga quasi.</p>

            <div className=' grid grid-col-1 md:flex gap-2 mt-6'>
            <Link href={"/terapia_vr"}className=' py-3 px-4 bg-[#fecf3e] flex gap-2 justify-center items-center rounded-lg'>
                  <p className=' text-sm font-medium'>Dowiedz się więcej</p>
                  <LuArrowUpRight className=' font-medium'/>

              </Link>

              <Link href={"/Kontakt"} className='py-3 px-4 bg-[#d400d0] flex gap-2 justify-center items-center rounded-lg'>
                  <p className=' text-sm font-medium text-white'>Zapytaj o zajęcia wspomagane VR</p>
                  <LuArrowUpRight className=' font-medium text-white'/>
              </Link>
            </div>

            </div>
          </div>
      </div>
    </div>
    </div>

  )
}

export default HeroPartFive