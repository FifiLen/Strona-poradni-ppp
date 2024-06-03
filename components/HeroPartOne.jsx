"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const HeroPartOne = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const element = e.target;
    const totalHeight = element.scrollHeight - element.clientHeight;
    const scrolled = (element.scrollTop / totalHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    const element = scrollContainerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          element.scrollTo({ top: 20, behavior: "smooth" });
          setTimeout(() => {
            element.scrollTo({ top: 0, behavior: "smooth" });
          }, 600);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full oNas flex flex-col items-center justify-center py-12 md:py-56 text-black">
      <div className=" px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div>
            <p
              className={`${bebas.className} text-2xl md:text-3xl font-bold my-2`}
            >
              Witaj na stronie naszej poradni
            </p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
              O Poradni
            </h2>
            <div className="relative w-full ">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gray-300"
                style={{
                  width: `${scrollPercentage}%`,
                  backgroundColor: "#921d7f",
                }}
              ></div>
              <div
                ref={scrollContainerRef}
                className="flex flex-col justify-start items-start overflow-auto pr-4 relative"
                style={{ maxHeight: "30vh" }}
                onScroll={handleScroll}
              >
                <p className="text-lg font-normal leading-relaxed tracking-tight">
                  <span className="font-semibold">
                    Poradnia Psychologiczno-Pedagogiczna MAGNOLIA
                  </span>
                  , to placówka bliska problemom{" "}
                  <span className="bg-blue-200 p-[0.8px] rounded-md">
                    dzieci
                  </span>
                  ,{" "}
                  <span className="bg-green-200 p-[0.8px] rounded-md">
                    młodzieży
                  </span>{" "}
                  oraz{" "}
                  <span className="bg-pink-200 p-[0.8px] rounded-md">
                    osób dorosłych
                  </span>
                  .<br />
                  <br />
                  Realizujemy{" "}
                  <span className="font-semibold">darmowe zajęcia</span>{" "}
                  Wczesnego Wspomagania Rozwoju Dziecka na podstawie opinii o
                  potrzebie WWRD.
                  <br />
                  Oferujemy szeroki wachlarz zajęć dydaktycznych i
                  terapeutycznych dla&nbsp;dzieci i młodzieży. Prowadzimy
                  wsparcie psychologiczne osób dorosłych.
                  <br />
                  <br />
                  Z pasją i oddaniem realizujemy zadania z zakresu pomocy
                  rodzinie, parom planującym wspólną przyszłość lub już ją
                  tworzących, a także osobom zmagającym się z uzależnieniami
                  behawioralnymi (uzależnienie od gier komputerowych/sieciowych,
                  mediów społecznościowych, portali randkowych/sex chatów, gier
                  losowych, zakupów). Prowadzimy terapie psychologiczne zarówno
                  stacjonarnie jak i on-line. Przeprowadzamy diagnozy
                  psychologiczne osób w każdym wieku.
                  <br />
                  <br />
                  Poradnia Psychologiczno - Pedagogiczna MAGNOLIA działa na
                  podstawie wpisu Prezydenta Miasta Rybnika do ewidencji szkół i
                  placówek niepublicznych: <b>Nr wpisu: E-I.4430.51.2023</b>,
                  posiada wymagane prawem zgody na funkcjonowanie placówek
                  oświatowych wydanych przez Państwowego Inspektora Sanitarnego
                  oraz Państwowej Komendy Straży Pożarnej (zgody znajdziesz w
                  zakładce „dokumenty”).
                </p>
              </div>
            </div>
            <div className="grid grid-col-1 md:flex gap-2 mt-6">
              <Link
                href="/O_nas"
                className="py-3 px-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition duration-300"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  Zobacz zdjęcia naszej placówki{" "}
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
              <Link
                href="/Kadra"
                className="py-3 px-4 bg-[#921d7f] hover:bg-[#a13f91] rounded-lg transition duration-300 text-white"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  Sprawdź naszych specjalistów{" "}
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/assets/oNasGrid.svg"
              width={700}
              height={700}
              alt="Clinic Environment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPartOne;
