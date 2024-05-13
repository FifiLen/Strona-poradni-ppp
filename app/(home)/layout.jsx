
import '/styles/global.css'
import { Analytics } from '@vercel/analytics/react';
import MainPageNav from '/components/MainPageNav.jsx'



import { Suspense } from 'react';
import Loading from '../(pages)/loading';
import { GoogleTagManager } from '@next/third-parties/google'


const Rootlayout = ({children}) => {

 
  return (
    
    <main className=' overflow-x-hidden'>
          <MainPageNav />
          {/* <ReactLenis root> */}
          
            
         
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Analytics />
          
        
        
        {/* </ReactLenis> */}
            
        
        <GoogleTagManager gtmId="G-0QW3ZG23F5" />
        
        </main>
  )
}

export default Rootlayout