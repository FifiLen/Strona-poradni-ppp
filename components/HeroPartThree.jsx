"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const HeroPartThree = () => {
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
    <div className="w-full oNas3 flex flex-col items-center justify-center py-12 md:py-56 text-black">
      <div className="max-w-7xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div>
            <p
              className={`${bebas.className} text-2xl md:text-3xl font-bold my-2`}
            >
              MAGNOLIA
            </p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
              Dla dzieci i&nbsp;młodzieży
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
                style={{ maxHeight: "20vh" }}
                onScroll={handleScroll}
              >
                <p className="text-lg font-normal leading-relaxed tracking-tight">
                  Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka
                  bliska problemom dzieci, młodzieży oraz osób dorosłych.
                  Realizujemy darmowe zajęcia Wczesnego Wspomagania Rozwoju
                  Dziecka na podstawie opinii o potrzebie WWRD. Oferujemy
                  szeroki wachlarz zajęć dydaktycznych, terapeutycznych oraz
                  warsztatów wspierających wszechstronny rozwój dzieci i
                  młodzieży.
                  <br />
                  <br />
                  Wspieramy psychologicznie młodzież w problemach wieku
                  dorastania. Co roku organizujemy zajęcia przygotowujące do
                  egzaminów ósmoklasisty. Dla najmłodszych oferujemy spotkania w
                  gronie dzieci do 3 roku życia nie uczęszczających jeszcze do
                  przedszkola na zajęcia ogólnorozwojowe z elementami
                  bajkoterapii.
                </p>
              </div>
            </div>
            <div className="grid grid-col-1 md:flex gap-2 mt-6">
              <Link
                href="/Dzieci"
                className="py-3 px-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition duration-300"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  Wsparcie dla dzieci i młodzieży{" "}
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
              <Link
                href="/WWRD"
                className="py-3 px-4 bg-[#921d7f] hover:bg-[#a13f91] rounded-lg transition duration-300 text-white"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  Jak uzyskać darmowe zajęcia WWRD{" "}
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/assets/oNasDzieci.svg"
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

export default HeroPartThree;
