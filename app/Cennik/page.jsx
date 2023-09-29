'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [activeTile, setActiveTile] = useState(null);

  useEffect(() => {
    const updateActiveTile = () => setActiveTile(Math.floor(Math.random() * 3));
    const interval = setInterval(updateActiveTile, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='mt-14'>
        <h2 className='text-4xl text-[#921d7f] text-center'>Cennik</h2>
        <p className='text-center italic'>Zachęcamy do zapoznania się z naszą ofertą</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-40 mb-20 md:gap-0 md:space-x-10'>
        {tiles.map((tile, index) => (
          <Link key={index} href={tile.href}>
            <div className={`w-96 h-96 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer relative ${activeTile === index ? 'active-tile' : ''} mb-20 md:mb-0`}>
              <img src={tile.imgSrc} alt={tile.imgAlt} className="w-40 mx-auto -mt-14 relative" />
              <div className="h-40 w-full flex flex-col justify-end absolute bottom-20 bg-white rounded-lg">
                <div className="text-[#921d7f] text-center pb-12">
                  <h2 className="text-xl">{tile.title}</h2>
                  <p className='italic'>{tile.subtitle}</p>
                </div>
              </div>
              <div className="h-2 w-full flex flex-col justify-end absolute bottom-0 bg-[#921d7f] rounded-lg p-2"></div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white border-t-2 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer text-center">
        <p>Chcielibyśmy poinformować, że nasza poradnia oferuje atrakcyjne <b>pakiety usług terapeutycznych</b>.</p>
        <p>Wybierając nasze pakiety zapłacisz mniej w porównaniu do pojedynczych sesji.</p>
        <p>Skontaktuj się z nami, aby dowiedzieć się więcej.</p>
      </div>
    </>
  );
};

const tiles = [
  { href: '/Cennik_centrum', imgSrc: "/assets/circle3.png", imgAlt: "circle", title: "Oferta cetrum uzależnień", subtitle: "Cennik dla każdego" },
  { href: '/Cennik_dorosli', imgSrc: "/assets/circle2.png", imgAlt: "circle", title: "Oferta dedykowana dorosłym", subtitle: "Cennik dla dorosłych" },
  { href: '/Cennik_dzieci', imgSrc: "/assets/circle1.png", imgAlt: "circle", title: "Oferta dedykowana dzieciom", subtitle: "Cennik dla dzieci" },
];

export default Home;
