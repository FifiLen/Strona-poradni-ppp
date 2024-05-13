'use client'
import React, { useEffect } from 'react'
import iframeResizer from 'iframe-resizer/js/iframeResizer';

useEffect

const Integration = () => {
  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";
    
    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement('script');
    gtmInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0QW3ZG23F5');
    `;

    // Dodaj dodatkowy skrypt do głowy dokumentu
    document.head.appendChild(gtmInlineScript);

    // Opcjonalnie: Możesz usunąć skrypty, gdy komponent zostanie odmontowany
    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(gtmInlineScript);
    }
}, []);
useEffect(() => {
  const iframes = iframeResizer({
    log: true,
    checkOrigin: false,
    autoResize: true,
    heightCalculationMethod: 'bodyScroll',
  }, 'iframe');

  // Opcjonalnie: Posprzątaj po sobie przy odmontowywaniu komponentu
  return () => {
    if (iframes && iframes.length > 0) {
      iframes.forEach(iFrame => {
        iFrame.iFrameResizer.close();
      });
    }
  };
}, []);

return (
  <div className="relative w-full overflow-hidden">
    <iframe
      scrolling="no"
      className="w-full border-none"
      src='https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=800'
    ></iframe>
  </div>
);
};

export default Integration;
