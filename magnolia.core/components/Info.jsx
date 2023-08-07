import Link from 'next/link';
import React from 'react';

const Info = () => {
  return (
    <section className="mx-[200px] mt-[40px] min-h-[700px]">
      <div className="info-heading mb-[30px]">
        <h2 className="text-left text-[40px] font-semibold text-gray-800">W czym możemy Ci pomóc?</h2>
      </div>
      <div className="info-cards-container flex justify-center">
        <div className="info-card">
          <div className="info-card-inner">
            <h3 className="info-card-title">Pedagog</h3>
            <p className="info-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, animi!</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-inner">
            <h3 className="info-card-title">Psycholog</h3>
            <p className="info-card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, facilis!</p>
          </div>
        </div>
        <div className="info-card special">
          <div className="info-card-inner">
            <h3 className="info-card-title">Terapeuta</h3>
            <p className="info-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, doloremque.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-inner">
            <h3 className="info-card-title">Fizjoterapeuta</h3>
            <p className="info-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="info-card-inner">
            <h3 className="info-card-title">Logopeda</h3>
            <p className="info-card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, voluptatum!</p>
          </div>
        </div>
        <div className="info-card special">
          <div className="info-card-inner">
            <h3 className="info-card-title">Coach</h3>
            <p className="info-card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, quis?</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-5">
        <Link href="/Offer" passHref>
          <div className="flex items-center font-semibold text-gray-700 cursor-pointer relative">
            <p className="mr-1">Dowiedz się więcej</p>
            <svg
              className="w-3 h-3 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
            <div className="underline"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Info;
