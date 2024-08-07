import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";

const Zabawy = () => {
  return (
    <div className=" px-7 sm:px-0">
      <div className="pt-40 max-w-7xl mx-auto">
        <h2 className="text-6xl font-semibold tracking-tighter pb-5">
          Nasze zajęcia{" "}
        </h2>
        <Link
          href="/O_nas"
          className=" p-3 flex items-center bg-[#921d7f] text-white w-fit mb-8 rounded-xl gap-2"
        >
          Zobacz więcej
          <CgArrowTopRightO className="text-2xl" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-8 h-screen max-w-7xl mx-auto pb-40">
        <div className="bg-blue-100 rounded-xl overflow-hidden md:row-span-5">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/grid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-blue-200 rounded-xl overflow-hidden md:col-span-2 md:row-span-3">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/grid2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-blue-300 rounded-xl overflow-hidden md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-4">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/grid3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-blue-400 rounded-xl overflow-hidden md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/grid5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-blue-500 rounded-xl overflow-hidden md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-3">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/grid4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Zabawy;
