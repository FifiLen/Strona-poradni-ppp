'use client'
import Link from "next/link";


import Info from "@components/Info";


import Place from "@components/Place";

import About from "@components/About";
import About2 from "@components/About2";
import InfoReservation from "@components/InfoReservation";

const Home = () => {
 
  return (
    <>
<section className="flex justify-center mt-44 mb-48 sm:mt-32 sm:mb-8 md:mt-36 lg:mt-0 md:mb-10 lg:mb-12">
  <div className="flex flex-col items-center lg:items-start relative w-full">

    <div className="relative video-container w-full lg:block hidden">
      <video
        id="background-video"
        className="w-full h-[calc(100% - 200px)] object-cover shadow-bottom"
        autoPlay
        loop
        muted
      >
        <source src="/assets/movie.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 lg:translate-x-0 lg:left-48 xl:left-64">
      {/* Use responsive classes for the header */}
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight md:text-white text-center lg:text-left text-gray-800 dark:text-gray-800">
        Poradnia Psychologiczno<br />Pedagogiczna MAGNOLIA
      </h1>
      {/* Use responsive classes for the paragraph */}
      <p className="mt-2 text-base sm:text-lg md:text-xl leading-relaxed md:text-white text-center lg:text-left text-gray-500 dark:text-gray-500">
      Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości
      </p>
      <div className="flex mt-6 md:mt-8 justify-center lg:justify-start">
        {/* Button with responsive classes */}
        <button className="border bg-white hover:border-transparent text-sm sm:text-base md:text-lg h-[36px] px-4 sm:px-7 md:px-10 md:py-7 rounded-lg flex items-center justify-center">
          <Link href="/Contact" className="text-[#921d7f]">
            Kontakt
          </Link>
        </button>
        {/* Button with responsive classes */}
        <button className="bg-[#921d7f] text-white text-sm sm:text-base md:text-lg h-[36px] px-4 sm:px-7 md:px-10 md:py-7 ml-2 sm:ml-3 md:ml-4 rounded-lg flex items-center justify-center">
          <Link href="/UserPanel" className="text-white">
            Rejestracja wizyty
          </Link>
        </button>
      </div>
    </div>
  </div>
</section>


      <About2 />    
      <Info />
      <About /> 
      <Place />
      <InfoReservation />
      
      
    </>
  );
};

export default Home;