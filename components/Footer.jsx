import React from 'react';
import Link from 'next/link';
import { FaAngleRight, FaFacebookF, FaInstagram, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <><footer className="py-16 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 text-gray-800">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-10">
          <div className="footer-section text-center">
            <img src="/assets/magnolia.png" alt="Logo" className="w-32 h-32" />
          </div>
          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Menu</h4>
            <ul className="list-none p-0">
              {['/', '/Dzieci', '/Dorosli', '/Centrum_uzaleznien', '/Kadra', '/Cennik', '/Kontakt'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
                      <FaAngleRight />
                      <span>{['Strona główna', 'Wsparcie dla dzieci', 'Wsparcie dla dorosłych', 'Centrum uzależnień', 'Nasi specjaliści', 'Cennik', 'Kontakt'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Sprawdź</h4>
            <ul className="list-none p-0">
              {['/Join', '/O_nas', '/Wynajem', '/Grafiki', '/assets/oferta-PPP-Magnolia.pdf'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
                      <FaAngleRight />
                      <span>{['Dołącz do Magnolii', 'O nas', 'Wynajem', 'Grafiki na stronie', 'Oferta poradni'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="list-none p-0">
              {['/', '/', '/', '/', '/', '/'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
                      <FaAngleRight />
                      <span>{['+48 797 173 501', '+48 502 162 365', '+48 690 515 224', '+48 503 192 950', 'Magnolii 25, Rybnik', 'poradniamagnolia@gmail.com'][idx]}</span>
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
                  <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
                    <FaFacebookF />
                    <span>Facebook</span>
                  </span>
                </a>
              </li>
              <li className='mb-2'>
                <a href="https://www.instagram.com/poradnia_magnolia/" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
                    <FaInstagram />
                    <span>Instagram</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>


        </div>

      </div>

    </footer>
    <hr />
  <h4 className="font-semibold mt-7 text-2xl max-w-7xl mx-auto">Otrzymaj pomoc</h4>
  <div className="max-w-7xl mx-auto flex my-10">
    <ul className="list-none p-0 flex flex-wrap gap-4">
      <li className='mb-2 p-4 border rounded-lg w-fit bg-yellow-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-yellow-600" />
          <span className="underline text-yellow-600">Centrum Wsparcia dla Osób Dorosłych w Kryzysie Psychicznym: 800 702 222</span>
        </span>
      </li>
      <li className='mb-2 p-4 border rounded-lg w-fit bg-yellow-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-yellow-600" />
          <span className="underline text-yellow-600">Niebieska Linia: 800120002</span>
        </span>
      </li>
      
      <li className='mb-2 p-4 border rounded-lg w-fit bg-green-100/30'>
       <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-green-600" />
          <span className="underline text-green-600">Telefon dla rodziców i opiekunów dzieci w kryzysie: 800 800 602</span>
        </span>
      </li>
      <li className='mb-2 p-4 border rounded-lg w-fit bg-yellow-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-yellow-600" />
          <span className="underline text-yellow-600">Telefon zaufania dla dzieci i młodzieży: 116 111</span>
        </span>
      </li>
      <li className='mb-2 p-4 border rounded-lg w-fit bg-yellow-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-yellow-600" />
          <span className="underline text-yellow-600">Dziecięcy telefon zaufania Rzecznika Praw Dziecka: 800121212</span>
        </span>
      </li>
      <li className='mb-2 p-4 border rounded-lg w-fit bg-green-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-green-600" />
          <span className="underline text-green-600">Numer alarmowy w sytuacji zagrożenia życia i zdrowia: 112</span>
        </span>
      </li>
      <li className='mb-2 p-4 border rounded-lg w-fit bg-green-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-green-600" />
          <span className="underline text-green-600">Telefon dla rodziców i nauczycieli w sprawie bezpieczeństwa dzieci: 8001001</span>
        </span>
      </li>
      
      <li className='mb-2 p-4 border rounded-lg w-fit bg-green-100/30'>
        <span className="flex items-center space-x-2 text-gray-600 font-medium hover:text-[#921d7f]">
          <FaPhone className="text-green-600" />
          <span className="underline text-green-600">Policyjny telefon zaufania ds. przeciwdziałania przemocy w rodzinie: 800 120 226</span>
        </span>
      </li>
      
    </ul>
  </div>
  
  </>
  );
};

export default Footer;
