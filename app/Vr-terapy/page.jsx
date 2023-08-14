'use client'
import React, { useEffect } from 'react';

const Vr = () => {
  useEffect(() => {
    if (window.iFrameResize) {
      window.iFrameResize({ log: true }, '#myIframe');
    }
  }, []);

  return (
    <div className="relative overflow-y-auto h-[calc(100vh-64px)] w-full">
      <iframe
        style={{
          width: '1px',
          minWidth: '100%',
          height: '6800px',
          border: 'none'
        }}
        id="myIframe"
        src='https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=1066'
      ></iframe>
    </div>
  );
}

export default Vr;
