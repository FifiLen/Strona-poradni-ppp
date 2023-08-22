'use client'
import { useEffect } from 'react';
import iframeResizer from 'iframe-resizer/js/iframeResizer';

const Page = () => {
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
        src='https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=952'
      ></iframe>
    </div>
  );
};

export default Page;


