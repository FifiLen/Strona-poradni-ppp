import '/styles/global.css'
import { Analytics } from '@vercel/analytics/react';
import Nav from '/components/Nav';
import Footer from '/components/Footer';



import { Suspense } from 'react';
import Loading from './loading';
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata = {
    title: 'Poradnia Psychologiczno Pedagogiczna Magnolia',
    keywords: ['Poradnia psychologiczna', 'Zajęcia WWRD', 'Poradnia Rybnik', 'PPP-Rybnik', 'Psycholog Rybnik', 'Diagnoza'],
    description: 'Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości'
}

const Rootlayout = ({children}) => {

 
  return (
   

            <main className='overflow-x-hidden'>
              <Nav />
              <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
            <Analytics />
            
              
            
       
        <GoogleTagManager gtmId="G-0QW3ZG23F5" />
        
        </main>
  )
}

export default Rootlayout