'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md'; // Ikona ">" z react-icons

const MENU_LIST = [
  { text: "Strona Główna", href: "/" },
  { text: "Centrum uzależnień", href: "/Centrum_uzaleznien" },
  { text: "Wsparcie dla dzieci", href: "/Dzieci" },
  { text: "Wsparcie dla dorosłych", href: "/Dorosli" },
  { text: "Nasi specjaliści", href: "/Kadra" },
  { text: "Cennik", href: "/Cennik" },
  { text: "Wsparcie", href: "/Webinary" },

  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
    <nav className="nav sticky top-0 flex justify-between items-center bg-white z-20">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/magnolia.png" alt="Magnolia Logo" width={50} height={50} className="object-contain" />
          <h1 className="logo font-semibold hidden md:block whitespace-nowrap pr-20 sm:pr-4 md:pr-16 lg:pr-0">MAGNOLIA</h1>
        </div>
      </Link>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? 
          <div className="text-xl">X</div>
          : 
          <>
            <div className="mb-1 w-5 h-0.5 bg-black"></div>
            <div className="mb-1 w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </>
        }
      
        </div>
        <div className={`absolute top-full right-0 w-64 bg-gray-400 rounded-md shadow-lg z-10 overflow-hidden text-right ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="flex justify-center items-center bg-gray-200 p-2">
        <Image src="/assets/magnolia.png" alt="Magnolia Logo" width={50} height={50} className="object-contain" />
        <h1 className="ml-2 text-white">MAGNOLIA</h1>
    </div>
    {MENU_LIST.map((menu) => {
        const commonClass = "flex items-center justify-between nav-item cursor-pointer whitespace-nowrap text-white py-2 px-4";

        if (menu.href.startsWith('http')) {
            // Linki zewnętrzne
            return (
                <a
                    key={menu.text}
                    href={menu.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClass}
                    onClick={() => setIsMenuOpen(false)}
                >
                    {menu.text} <MdNavigateNext />
                </a>
            );
        } else {
            // Linki wewnętrzne
            return (
                <Link href={menu.href} key={menu.text} passHref>
                    <div className={commonClass} onClick={() => setIsMenuOpen(false)}>
                        {menu.text} <MdNavigateNext />
                    </div>
                </Link>
            );
        }
    })}
</div>

      <div className={`overflow-x-auto md:flex gap-8 hidden text-[13px] font-light ${isMenuOpen ? '' : ''}`} >
        {MENU_LIST.map((menu) => {
    if (menu.href.startsWith('http')) {
        // Linki zewnętrzne
        return (
            <a
                key={menu.text}
                href={menu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item cursor-pointer whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
            >
                {menu.text}
            </a>
        );
    } else {
        // Linki wewnętrzne
       
        return (
            <Link href={menu.href} key={menu.text} passHref>
                <div className="nav-item cursor-pointer whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                    {menu.text}
                </div>
            </Link>
        );
       }
})}
        </div>
 

        <div className="nav__buttons hidden md:flex">
       
          <Link href="/Kontakt" passHref>
            <div className="button2 text-[12px] font-light cursor-pointer px-8 py-2 whitespace-nowrap rounded-lg">
              Kontakt
            </div>
          </Link>
</div> 
      </nav>
    </header>
  );
};

export default Navbar;
