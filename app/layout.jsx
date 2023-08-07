import '@styles/globals.css';

import Nav from '@components/Nav';
import Footer from '@components/Footer';
export const metadata = {
    title: 'Poradnia Pscyhologiczno Pedagogiczna Magnolia',
    description: 'Twoje miejsce relaksu i spokoju…'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body className=' bg-gradient-to-r from-[#c3c3c32c] to-white'>
            <div className='main'>

            </div>

            <main className='app'>
              <Nav />
            {children}
              <Footer />
            </main>
            
        </body>
    </html>
  )
}

export default Rootlayout