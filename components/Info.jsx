import React from 'react';
import Link from 'next/link';

const Info = () => {
  const infoData = [
    {
      title: (<p>Terapia wspomagana <br /> Virtual Reality</p>),
      description: "",
      special: false,
      video: '/assets/movie8.mp4',
      path: '/Vr-terapy'
    },
   /* {
      title: "Easy Biofeedback VR",
      description: "",
      special: false,
      video: '/assets/movie.mp4',
      path: '/Biofeedback-VR'
    }, */
    {
      title: "Integracja sensoryczna",
      description: "",
      special: false,
      video: '/assets/movie5.mp4',
      path: '/Integration',
    },
    {
      title: "WWRD",
      description: "",
      special: false,
      video: '/assets/movie7.mp4',
      path: 'https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=952'
    },
   /* {
      title: "Terapia Sensoryczna",
      description: "",
      special: false,
      video: '/assets/movie.mp4',
      path: 'https://server376071.nazwa.pl/wordpress/wpn_magnolia/?page_id=800',
    },
   /* {
      title: "Terapia Ręki",
      description: "",
      special: false,
      video: '/assets/movie.mp4',
      path: '/Vr-terapy'
    }, */
    
    {
      title: "C-eye Pro®",
      description: "",
      special: false,
      video: '/assets/movie6.mp4',
      path: '/C-Eye'
    },
  /*  {
      title: "Tomatis Pro®",
      description: "",
      special: false,
      video: '/assets/movie.mp4',
      path: '/Vr-terapy'
    }, */
    {
      title: "ADOS-2",
      description: "Diagnoza od 18 miesiąca życia",
      special: false,
      video: '/assets/movie3.mp4',
      path: '/ADOS-2'
    },
    
    // ... dodaj resztę danych w tym samym formacie
  ];

  return (
    <section className="mx-10 sm:mx-48 min-h-[700px] mb-14 mt-5">
      <div className="info-heading mb-7">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-4">Co nas wyróżnia?</h2>
        <p className="text-center text-gray-500">Poznaj naszą ofertę</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {infoData.map((info, index) => {
          const isExternalLink = info.path.startsWith('http');

          return (
            isExternalLink ? (
              <a href={info.path} target="_blank" rel="noopener noreferrer" key={index}>
                <div className={`relative rounded-xl p-5 shadow-lg flex flex-col justify-between lg:justify-end lg:h-[250px] cursor-pointer ${info.special ? 'bg-green-500 text-white' : 'bg-white md:text-white text-gray-800'}`}>
                  <video autoPlay loop muted className="hidden md:block absolute top-0 left-0 w-full h-full object-cover rounded-xl">
                    <source src={info.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`z-10 relative ${!info.special && 'text-gray-800 md:text-white'}`}>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                    <p className="mt-3">{info.description}</p>
                  </div>
                </div>
              </a>
            ) : (
              <Link href={info.path} key={index}>
                <div className={`relative rounded-xl p-5 shadow-lg flex flex-col justify-between lg:justify-end lg:h-[250px] cursor-pointer ${info.special ? 'bg-green-500 text-white' : 'bg-white md:text-white text-gray-800'}`}>
                  <video autoPlay loop muted className="hidden md:block absolute top-0 left-0 w-full h-full object-cover rounded-xl">
                    <source src={info.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={`z-10 relative ${!info.special && 'text-gray-800 md:text-white'}`}>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                    <p className="mt-3">{info.description}</p>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      </div>
   {/*   <div className="flex justify-end mt-5">
        <Link href="/Offer" passHref>
          <div className="flex items-center font-semibold text-gray-700 cursor-pointer relative group hover:text-pink-400">
            <span className="mr-1">Dowiedz się więcej</span>
            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
            </svg>
          </div>
        </Link>
      </div> */}
    </section>
  );
};

export default Info;