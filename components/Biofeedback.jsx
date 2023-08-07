/*'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Ceye = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className='mx-[200px] pb-6'>
      <div
        className={`info-card ceye ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div className="overlay">
            <div className="flex items-center font-semibold text-gray-700 cursor-pointer relative">
              <Link href="/Biofeedback-VR">
            <p className="mr-1">Terapia VR</p>
              </Link>
            <div className="underline"></div>
          </div>
          </div>
        )}
        <div className="info-card-inner">
          <h3 className="info-card-title">Terapia VR</h3>
          <p className="info-card-text">Innowacyjne urządzenie medyczne, które rewolucjonizuje dziedzinę diagnostyki oczu. Wykorzystując najnowocześniejszą technologię, <br></br>umożliwia szybkie, precyzyjne i nieinwazyjne badanie oka w celu wykrycia różnych chorób i zaburzeń wzroku.</p>
        </div>
      </div>
    </section>
  );
};

export default Ceye; */
