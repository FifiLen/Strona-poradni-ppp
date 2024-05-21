import React from "react";
import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { PiVirtualReality } from "react-icons/pi";
import dynamic from "next/dynamic";

const FaChild = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaChild)
);

const HeroPartZero = () => {
  return (
    <div>
      <video
        className=" h-[50vh] md:h-[82vh] w-full object-cover"
        preload="auto"
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Kontener dla bloków pod filmikiem */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3 pb-20 gap-3 px-3`}
        style={{ maxWidth: "95rem", margin: "0 auto" }}
      >
        <Link
          href={"/Dzieci"}
          className=" hover:scale-105  transition-all duration-500"
        >
          <div className="bg-gradient-to-bl flex justify-start items-end p-4 from-[#921d7f] via-[#5a004b] to-[#921d7f] w-full h-[8rem] rounded-xl relative">
            <div className="absolute top-0 left-0 p-4">
              <FaChild className=" text-2xl text-white" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-tighter text-white">
                  Wsparcie dla dzieci
                </h2>
                <p className="text-sm text-gray-300">
                  Zajęcia WWR, TUS, Logopeda i więcej..
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"/Dorosli"}
          className=" hover:scale-105 transition-all duration-500"
        >
          <div className="bg-gradient-to-bl flex justify-start items-end p-4 from-[#274871] via-[#225da5] to-[#274871] w-full h-[8rem] rounded-xl relative">
            <div className="absolute top-0 left-0 p-4">
              <FaHandsHelping className=" text-3xl text-white" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-tighter text-white">
                  Wsparcie dla dorosłych
                </h2>
                <p className="text-sm text-gray-300">
                  Psycholog, psychoterapia, terapie par
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"/Centrum_uzaleznien"}
          className=" hover:scale-105 transition-all duration-500"
        >
          <div className="bg-gradient-to-bl flex justify-start items-end p-4 from-[#921d7f] via-[#5a004b] to-[#921d7f] w-full h-[8rem] rounded-xl relative">
            <div className="absolute top-0 left-0 p-4">
              <FaPersonCircleExclamation className=" text-3xl text-white" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-tighter text-white">
                  Centrum uzależnień
                </h2>
                <p className="text-sm text-gray-300">
                  E-uzależnienia, uzależnienia, diagnoza
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"/terapia_vr"}
          className=" hover:scale-105 transition-all duration-500"
        >
          <div className="bg-gradient-to-bl flex justify-start items-end p-4 from-[#274871] via-[#225da5] to-[#274871] w-full h-[8rem] rounded-xl relative">
            <div className="absolute top-0 left-0 p-4">
              <PiVirtualReality className=" text-3xl text-white" />
            </div>
            <div className="flex justify-between items-center w-full">
              <div>
                <h2 className="text-xl font-semibold tracking-tighter text-white">
                  Terapia VR
                </h2>
                <p className="text-sm text-gray-300">
                  Terapia VR, Zajęcia dla dzieci i więcej..
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroPartZero;
