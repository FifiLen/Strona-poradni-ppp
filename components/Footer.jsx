import React from 'react';
import Link from 'next/link';
import { FaAngleRight, FaFacebookF, FaInstagram, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-16 bg-[#F5F5F5] border-t-4">
      <div className="container mx-auto px-4 md:px-0 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="footer-section text-center">
            <img src="/assets/magnolia.png" alt="Logo" className="w-32 h-32" />
          </div>
          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Menu</h4>
            <ul className="list-none p-0">
              {['/', '/Dzieci', '/Dorosli', '/Centrum_uzaleznien', '/Kadra','/Cennik', '/Kontakt'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-pink-400">
                      <FaAngleRight />
                      <span>{['Strona główna', 'Wsparcie dla dzieci','Wsparcie dla dorosłych', 'Centrum uzależnień', 'Nasi specjaliści','Cennik', 'Kontakt'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Sprawdź</h4>
            <ul className="list-none p-0">
              {['/Join', '/Faq','/O_nas','/Wynajem','/Grafiki','/assets/oferta-PPP-Magnolia.pdf'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-pink-400">
                      <FaAngleRight />
                      <span>{['Dołącz do Magnolii', 'FAQ','O nas','Wynajem','Grafiki na stronie','Oferta poradni'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="list-none p-0">
              {['/', '/','/','/','/','/'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-pink-400">
                      <FaAngleRight />
                      <span>{['+48 797 173 501', '+48 502 162 365', '+48 690 515 224', '+48 503 192 950','Magnolii 25, Rybnik','poradniamagnolia@gmail.com', ][idx]}</span>
                      
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>




          <div className="footer-section">
  <h4 className="font-semibold mb-4 text-lg">Social Media</h4>
  <ul className="list-none p-0">
    <li className='mb-2'>
      <a href="https://www.facebook.com/poradnia.magnolia" target="_blank" rel="noopener noreferrer">
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-pink-400">
          <FaFacebookF />
          <span>Facebook</span>
        </span>
      </a>
    </li>
    <li className='mb-2'>
      <a href="https://www.instagram.com/poradnia_magnolia/" target="_blank" rel="noopener noreferrer">
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-pink-400">
          <FaInstagram /> {/* Dodaj ikonę Instagrama */}
          <span>Instagram</span>
        </span>
      </a>
    </li>
  </ul>
</div>



          



        </div>
      </div>
    </footer>
  );
};

export default Footer;
