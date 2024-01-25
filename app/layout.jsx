import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

import { Suspense } from 'react';
import WebinarButton from '@components/Webinar';
import Loading from './loading';


export const metadata = {
    title: 'Poradnia Psychologiczno Pedagogiczna Magnolia',
    keywords: ['Poradnia psychologiczna', 'Zajęcia WWRD', 'Poradnia Rybnik', 'PPP-Rybnik', 'Psycholog Rybnik', 'Diagnoza'],
    description: 'Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='bg-white overflow-x-hidden'>
            <div className='main'>

            </div>

            <main className='app'>
              <Nav />
              <Suspense fallback={<Loading />}>
             {/* <WebinarButton /> */} 
            {children}
            </Suspense>
            <Analytics />
            
              <Footer />
            </main>
            
        </body>
        
    </html>
  )
}

export default Rootlayout