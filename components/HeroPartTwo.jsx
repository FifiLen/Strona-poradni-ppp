"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const HeroPartTwo = () => {
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
    <div className="w-full oNas2 flex flex-col items-center justify-center py-12 md:py-56 text-white">
      <div className="max-w-7xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="hidden md:block">
            <Image
              src="/assets/oNasGrid2.svg"
              width={700}
              height={700}
              alt="Clinic Environment"
            />
          </div>
          <div>
            <p
              className={`${bebas.className} text-2xl md:text-3xl font-bold my-2`}
            >
              MAGNOLIA
            </p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
              Nasze pupile
            </h2>
            <div className="relative w-full ">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gray-300"
                style={{
                  width: `${scrollPercentage}%`,
                  backgroundColor: "yellow",
                }}
              ></div>
              <div
                ref={scrollContainerRef}
                className="flex flex-col justify-start items-start overflow-auto pr-4 relative"
                style={{ maxHeight: "20vh" }}
                onScroll={handleScroll}
              >
                <p className="text-lg font-normal leading-relaxed tracking-tight">
                  Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to również dom
                  dla szeregu „braci mniejszych”. Na co dzień pracujemy w
                  towarzystwie czworonogów: kochanego psiaka o imieniu Lili rasy
                  Golden Retriver oraz króliczków miniaturek Lusi i Trusi.
                  Utrzymujemy bliski kontakt ze staniną koni, umożlwiającą nam
                  prowadzenie hipoterapii. Stawiamy na bliski kontakt z naturą,
                  gdyż wierzymy, że życie w harmonii z przyrodą i otaczającym
                  nas światem korzystnie wpływa na samopoczucie ludzi w każdym
                  wieku. Podczas pobytu w naszej placówce zapewniamy Państwu
                  możliwość skorzystania ze strefy relaksu z widokiem na
                  akwarium przy dźwiękach odprężającej muzyki. Nasi najmłodsi
                  podopieczni uczęszczają na zajęcia w towarzystwie króliczków
                  oraz korzystają z dobroczynnego wpływu dogoterapii oraz
                  hipoterapii.
                </p>
              </div>
            </div>
            <div className="grid grid-col-1 md:flex gap-2 mt-6">
              <Link
                href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
                className="py-3 px-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition duration-300"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2 text-black">
                  Zajrzyj na naszego TikToka{" "}
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPartTwo;
