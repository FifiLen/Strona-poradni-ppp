'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';
import NavItem from './NavItem';

const MENU_LIST = [
  { text: "Strona główna", href: "/" },
  { text: "Oferta", href: "/Offer" },
  { text: "Cennik", href: "/PriceList" },
  { text: "Kadra", href: "/Staff" },
  { text: "Kontakt", href: "/Contact" },
  { text: "C-Eye Pro", href: "/C-Eye" },
  { text: "Biofeedback VR", href: "/Biofeedback-VR" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== navbarBackground) {
        setNavbarBackground(isTop);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navbarBackground]);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <header>
      <nav className={`nav sticky top-0 ${navbarBackground ? '' : 'nav--transparent'}`}>
        <Link href="/">
          <div className="logo-container">
            <Image
              src="/assets/lotus-2.png"
              alt="Magnolia Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h1 className="logo font-bold">Poradnia Magnolia</h1>
          </div>
        </Link>
        <div className={`nav__menu-bar`} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div onClick={() => setActiveIdx(idx)} key={menu.text}>
              <NavItem active={activeIdx === idx} {...menu} onClick={closeNav} />
            </div>
          ))}
        </div>
        <div className="nav__buttons">
          <Link href="/Registration">
            <button className="button1 text-[12px] font-light" onClick={closeNav}>
              Rejestracja
            </button>
          </Link>
          <Link href="/UserPanel">
          <button className="button2 text-[12px] font-light" onClick={closeNav}>
            Panel Pacjenta
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;