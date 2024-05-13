"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const HeroPartFour = () => {
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
    <div className="w-full oNas4 flex flex-col items-center justify-center py-12 md:py-56 text-white">
      <div className="max-w-7xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="hidden md:block">
            <Image
              src="/assets/oNasGrid3.svg"
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
              Dla dorosłych
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
                  Gdy życie stawia wyzwania, którym trudno sprostać, zapraszamy
                  Państwa do Poradni Psychologiczno-Pedagogicznej MAGNOLIA,
                  która wspiera osoby dorosłe w rozwiązywaniu trudnych sytuacji
                  rodzinnych i osobistych. Prowadzimy terapię par mierzących się
                  z trudnościami w związku, wspieramy rodziców w ich dylematach
                  wychowawczych, oferujemy konsultacje psychologiczne oraz
                  psychoterapię osób zmagających się z depresją. Właśnie w
                  MAGNOLI mogą Państwo sprawdzić swoje predyspozycje do
                  pełnienia roli rodziców wypełniając test kompetencji
                  rodzicielskich, sprawdzić swoje preferencje zawodowe wykonując
                  test osobowości, przeprowadzić diagnozę ADHD będąc osobą
                  dorosłą. Wspieramy Państwa w zmaganiach z uzależnieniami
                  behawioralnymi związanymi z nadmiernym korzystaniem z
                  internetu i mediów społecznościowych, korzystaniem z solarium,
                  kompulsywnymi zakupami, grami hazardowymi, czy objadaniem się
                  prowadzącym do otyłości. Zawsze, gdy potrzebują Państwo
                  wparcia psychologicznego Poradnia Psychologiczno-Pedagogiczna
                  MAGNOLIA służy pomocą.
                </p>
              </div>
            </div>
            <div className="grid grid-col-1 md:flex gap-2 mt-6">
              <Link
                href="/Dorosli"
                className="py-3 px-4 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition duration-300"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2 text-black">
                  Wsparcie dla osób dorosłych
                  <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
              <Link
                href="/terapia_par"
                className="py-3 px-4 bg-white hover:bg-[#a13f91] rounded-lg transition duration-300 text-black"
              >
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  Terapia dla par <LuArrowUpRight className="font-medium" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPartFour;
