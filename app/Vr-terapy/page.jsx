'use client'
import React, { useEffect } from 'react';
import { iframeResizer } from 'iframe-resizer';

const Vr = () => {
  useEffect(() => {
    iframeResizer({
      log: true,
      checkOrigin: false,
      autoResize: true,
      heightCalculationMethod: 'bodyScroll'
    }, '#myIframe');
  }, []);
  
  return (
    <div className="relative overflow-y-auto h-[calc(100vh-64px)] w-full">
      <iframe
        style={{
          width: '100%',
          border: 'none'
        }}
        id="myIframe"
        src='https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=1066'
      ></iframe>
    </div>
  );
}

export default Vr;
