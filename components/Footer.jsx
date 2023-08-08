import React from 'react';
import Link from 'next/link';
import { FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-16 flex justify-center bg-[#67185a] border-t border-pink-300">
      <div className="container mx-auto px-4 md:px-0 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="footer-section">
            <img src="/assets/magnolia.png" alt="Logo" className="w-52 h-52" />
          </div>
          <div className="footer-section mt-3">
            <h4 className="font-semibold mb-2 text-white text-lg">Menu</h4>
            <ul className="list-none p-0">
              {['/', '/Offer', '/PriceList', '/Staff', '/Contact'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-white font-semibold hover:text-pink-400">
                      <FaAngleRight />
                      <span>{['Strona główna', 'Oferta', 'Cennik', 'Kadra', 'Kontakt'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section mt-3">
            <h4 className="font-semibold mb-2 text-white text-lg">Sprawdź</h4>
            <ul className="list-none p-0">
              {['/C-Eye', '/ADOS-2', '/Vr-terapy', '/Biofeedback-VR', '/Join'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-white font-semibold hover:text-pink-400">
                      <FaAngleRight />
                      <span>{['C-Eye Pro', 'ADOS-2', 'Terapia VR', 'Biofeedback VR', 'Dołącz do zespołu Magnolii'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section mt-3">
            <h4 className="font-semibold mb-2 text-white text-lg">Znajdź nas</h4>
            <ul className="list-none p-0">
            <li className="mb-2 flex items-center">
    <FaMailBulk className="text-white w-4 h-4 mr-2" />
    <span className="text-white font-semibold">poradniamagnolia@gmail.com</span>
  </li>
  <li className="mb-2 flex items-center">
    <FaPhone className="text-white w-4 h-4 mr-2" />
    <span className="text-white font-semibold">+48 797 173 501</span>
  </li>
  <li className="mb-2 flex items-center">
    <FaPhone className="text-white w-4 h-4 mr-2" />
    <span className="text-white font-semibold">+48 502 162 365</span>
  </li>
  <li className="mb-2 flex items-center">
    <FaPhone className="text-white w-4 h-4 mr-2" />
    <span className="text-white font-semibold">+48 690 515 224</span>
  </li>
  <li className="mb-2 flex items-center">
    <FaPhone className="text-white w-4 h-4 mr-2" />
    <span className="text-white font-semibold">+48 503 192 950</span>
  </li>
              <li className="flex items-center space-x-4 mt-4 ">
                <Link href="https://www.facebook.com/"><FaFacebookF className=" w-12 h-12 text-pink-100 hover:text-pink-400" /></Link>
                <Link href="https://www.instagram.com/"><FaInstagram className="w-12 h-12 text-pink-100 hover:text-pink-400" /></Link>
                <Link href="https://www.linkedin.com/"><FaLinkedinIn className="w-12 h-12 text-pink-100 hover:text-pink-400" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
