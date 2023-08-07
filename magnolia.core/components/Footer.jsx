import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 flex justify-center h-[270px]">
      <div className="container mx-[200px]">
        <div className="flex flex-wrap justify-start gap-10">
          <div className="footer-section">
            <img src="/assets/lotus-2.png" alt="Logo" className="w-16 h-16" />
          </div>
          <div className="footer-section mt-3 ml-8">
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="list-none p-0">
              <li className='mb-2'>
                <Link href="/">
                  <span>Strona główna</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/Offer">
                  <span>Oferta</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/PriceList">
                  <span>Cennik</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/Staff">
                  <span>Kadra</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/Contact">
                  <span>Kontakt</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section mt-3 ml-10">
            <h4 className="font-semibold mb-2">Sprawdź</h4>
            <ul className="list-none p-0">
              <li className='mb-2'>
                <Link href="/C-Eye">
                  <span>C-Eye Pro</span>
                </Link>
              </li>
              <li className='mb-2'>
                <Link href="/Biofeedback-VR">
                  <span>Biofeedback VR</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section mt-3 ml-auto">
            <h4 className="font-semibold mb-2">Skontaktuj się</h4>
            <ul className="list-none p-0">
              <li className='mb-2'>
                <span>Email: example@gmail.com</span>
              </li>
              <li className='mb-2'>
                <span>Telefon: 123-456-789</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
