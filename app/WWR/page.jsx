'use client'
import React, { useRef, useEffect } from 'react';

const Page = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;  // Spowolnienie filmiku o połowę
        }
    }, []);

    return (
        <div className="relative h-[400px]">
            {/* Filmik jako tło */}
            <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                src="/assets/movie4.mp4">
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>

            {/* Kontent (nagłówek i paragraf) na filmie */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-4">
                    WWR
                </h2>
                <p className="text-center text-white">
                    Wczesne wspomaganie rozwoju dziecka
                </p>
            </div>
        </div>
    );
}

export default Page;
