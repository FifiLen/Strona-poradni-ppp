import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className='absolute top-0 h-screen bg-white backdrop-blur-lg w-screen z-50 '>
      <div className='flex justify-center items-center h-screen'>
        <div> <h2 className=' text-6xl text-slate-800 font-display font-semibold'>Poradnia Magnolia</h2> 
          <p className=' text-xl text-center mt-4'>Za chwilę trawisz na stronę docelową…</p>  </div>
            
      </div>
    </div>
  );
}

export default LoadingSkeleton;
