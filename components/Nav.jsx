// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { MdNavigateNext } from 'react-icons/md'; 
// import { FaTimes } from 'react-icons/fa';


// const MENU_LIST = [
//   { text: "Strona Główna", href: "/" },
//   { text: "Centrum uzależnień", href: "/Centrum_uzaleznien" },
//   { text: "Wsparcie dla dzieci", href: "/Dzieci" },
//   { text: "Wsparcie dla dorosłych", href: "/Dorosli" },
//   { text: "Nasi specjaliści", href: "/Kadra" },
//   { text: "Oferta", href: "/assets/oferta-PPP-Magnolia.pdf" },
//   { text: "Webinary", href: "/Webinary" },
//   { text: "Blog", href: "https://magnolia-blog-eta.vercel.app" },


  
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   return (
//     <header>
//       <nav className="nav sticky top-0 flex justify-between items-center bg-white z-20">
//         <Link href="/">
//           <div className="flex items-center space-x-2 cursor-pointer">
//             <Image src="/assets/magnolia.png" alt="Magnolia Logo" width={45} height={45} className="object-contain" />
//             <h1 className=" font-medium text-2xl hidden md:block whitespace-nowrap text-[#921d7f] pr-20 sm:pr-4 md:pr-16 lg:pr-0">Magnolia</h1>
//           </div>
//         </Link>
//         <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
//           {isMenuOpen ? 
//             <div className="text-base"><FaTimes/></div>
//             : 
//             <>
//               <div className="mb-1 w-5 h-0.5 bg-black"></div>
//               <div className="mb-1 w-5 h-0.5 bg-black"></div>
//               <div className="w-5 h-0.5 bg-black"></div>
//             </>
//           }
//         </div>
//         <div className={`absolute top-full right-0 w-80 bg-white z-10 overflow-hidden text-right ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
//           {MENU_LIST.map((menu) => {
//             const commonClass = "flex items-center justify-between nav-item cursor-pointer whitespace-nowrap text-black py-2 px-4";
            
//             if (menu.submenu) {
//               return (
//                 <div key={menu.text}>
//                   <div 
//                     className={commonClass} 
//                     onClick={() => setSubmenuOpen(!submenuOpen)}
//                   >
//                     {menu.text} <MdNavigateNext />
//                   </div>
//                   {submenuOpen && (
//                     <div className="submenu">
//                       {menu.submenu.map((subitem) => (
//                         <Link href={subitem.href} key={subitem.text} passHref>
//                           <div className={commonClass}>
//                             {subitem.text} <MdNavigateNext />
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             } else {
//               if (menu.href.startsWith('http')) {
//                 return (
//                   <a key={menu.text} href={menu.href} target="_blank" rel="noopener noreferrer" className={commonClass}>
//                     {menu.text} <MdNavigateNext />
//                   </a>
//                 );
//               } else {
//                 return (
//                   <Link href={menu.href} key={menu.text} passHref>
//                     <div className={commonClass}>
//                       {menu.text} <MdNavigateNext />
//                     </div>
//                   </Link>
//                 );
//               }
//             }
//           })}
//         </div>

//         <div className={`overflow-x-auto md:flex gap-8 hidden text-[13px] font-light`}>
//           {MENU_LIST.map((menu) => {
//             if (menu.href.startsWith('http')) {
//               return (
//                 <a key={menu.text} href={menu.href} target="_blank" rel="noopener noreferrer" className="nav-item cursor-pointer whitespace-nowrap">
//                   {menu.text}
//                 </a>
//               );
//             } else {
//               return (
//                 <Link href={menu.href} key={menu.text} passHref>
//                   <div className="nav-item cursor-pointer whitespace-nowrap">
//                     {menu.text}
//                   </div>
//                 </Link>
//               );
//             }
//           })}
//         </div>
//         <div className="nav__buttons hidden md:flex">
//           <Link href="/Kontakt" passHref>
//             <div className="button2 text-[12px] font-light cursor-pointer px-8 py-2 whitespace-nowrap rounded-lg hover:border">
//               Kontakt
//             </div>
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar; 

'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  GlobeAltIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Nasi Specjaliści', description: 'Dowiedz się więcej o zespole Magnolii', href: '/Kadra', icon: UserGroupIcon },
  { name: 'Webinary', description: 'Zapisz się na nasze webinaria', href: '/Webinary', icon: BookOpenIcon },
  { name: 'Blog', description: 'Zajrzyj na nasz blog o E-uzależnieniach', href: 'https://magnolia-blog-eta.vercel.app', icon: ChatBubbleBottomCenterIcon },
  { name: 'Facebook', description: 'Zajrzyj na naszego Facebooka', href: 'https://www.facebook.com/poradnia.magnolia', icon: GlobeAltIcon },
  { name: 'YouTube', description: 'Zobacz nasze materiały na YouTubie', href: 'https://www.youtube.com/@PPP-MAGNOLIA', icon: PlayIcon },
]

const callsToAction = [
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/90 border-b border-gray-300">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex justify-start items-center gap-3">
          <img className="h-10 w-auto" src="/assets/magnolia.png" alt="" />
            <span className=' font-semibold text-gray-900 hover:text-[#921d7f] transition-all duration-300'>Magnolia</span>
            <span className="sr-only">Magnolia</span>
            
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Otwórz menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
         
          <a href="/" className="text-sm  leading-6 text-gray-600">
            Strona główna
          </a>

          <a href="/Centrum_uzaleznien" className="text-sm  leading-6 text-gray-600">
            Centrum uzależnień
          </a>

          <a href="/Dzieci" className="text-sm  leading-6 text-gray-600">
            Wsparcie dla dzieci
          </a>

          <a href="/Dorosli" className="text-sm  leading-6 text-gray-600">
            Wsparcie dla dorosłych
          </a>

          <a href="/assets/oferta-PPP-Magnolia.pdf" className="text-sm  leading-6 text-gray-600">
            Oferta
          </a>
        


          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-gray-600">
              O nas
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-32 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#921d7f]" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/Kontakt" className="text-sm bg-white font-semibold py-2 px-5 border rounded-md  leading-6 text-gray-900">
            Kontakt
          </a>
        </div>
      </nav>


      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Magnolia</span>
              <img
                className="h-8 w-auto"
                src="/assets/magnolia.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Zamknij menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mt-5"
                >
                  Strona główna
                </a>
                <a
                  href="/Centrum_uzaleznien"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Centrum uzależnień
                </a>
                <a
                  href="/Dzieci"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wsparcie dla dzieci
                </a>
                <a
                  href="/Dorosli"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wsparcie dla dorosłych
                </a>
                <a
                  href="/assets/oferta-PPP-Magnolia.pdf"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wsparcie dla dorosłych
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        O nas
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="/Kontakt"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
