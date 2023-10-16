'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md'; 
import { FaTimes } from 'react-icons/fa';


const MENU_LIST = [
  { text: "Strona Główna", href: "/" },
  { text: "Centrum uzależnień", href: "/Centrum_uzaleznien" },
  { text: "Wsparcie dla dzieci", href: "/Dzieci" },
  { text: "Wsparcie dla dorosłych", href: "/Dorosli" },
  { text: "Nasi specjaliści", href: "/Kadra" },
  { text: "Cennik", href: "/Cennik" },
  { text: "Webinary", href: "/Webinary" },
  { text: "Blog", href: "https://magnolia-blog-eta.vercel.app" },


  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

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
            <div className="text-base"><FaTimes/></div>
            : 
            <>
              <div className="mb-1 w-5 h-0.5 bg-black"></div>
              <div className="mb-1 w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </>
          }
        </div>
        <div className={`absolute top-full right-0 w-80 bg-white z-10 overflow-hidden text-right ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          {MENU_LIST.map((menu) => {
            const commonClass = "flex items-center justify-between nav-item cursor-pointer whitespace-nowrap text-black py-2 px-4";
            
            if (menu.submenu) {
              return (
                <div key={menu.text}>
                  <div 
                    className={commonClass} 
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    {menu.text} <MdNavigateNext />
                  </div>
                  {submenuOpen && (
                    <div className="submenu">
                      {menu.submenu.map((subitem) => (
                        <Link href={subitem.href} key={subitem.text} passHref>
                          <div className={commonClass}>
                            {subitem.text} <MdNavigateNext />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              if (menu.href.startsWith('http')) {
                return (
                  <a key={menu.text} href={menu.href} target="_blank" rel="noopener noreferrer" className={commonClass}>
                    {menu.text} <MdNavigateNext />
                  </a>
                );
              } else {
                return (
                  <Link href={menu.href} key={menu.text} passHref>
                    <div className={commonClass}>
                      {menu.text} <MdNavigateNext />
                    </div>
                  </Link>
                );
              }
            }
          })}
        </div>

        <div className={`overflow-x-auto md:flex gap-8 hidden text-[13px] font-light`}>
          {MENU_LIST.map((menu) => {
            if (menu.href.startsWith('http')) {
              return (
                <a key={menu.text} href={menu.href} target="_blank" rel="noopener noreferrer" className="nav-item cursor-pointer whitespace-nowrap">
                  {menu.text}
                </a>
              );
            } else {
              return (
                <Link href={menu.href} key={menu.text} passHref>
                  <div className="nav-item cursor-pointer whitespace-nowrap">
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