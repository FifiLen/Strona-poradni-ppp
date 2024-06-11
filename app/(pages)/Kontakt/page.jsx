"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Formularz from "../../../components/Formularz";

const Kontakt = () => {
  return (
    <div className="bg-gray-100/20 font-sans overflow-x-hidden ">
      {/* Nagłówek */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-5xl pb-2 font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Kontakt
          </h2>
        </div>
      </div>

      <section className="py-6 md:py-24">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 gap-8 items-center flex-col md:flex-row md:grid-cols-2">
            {/* Obrazek */}

            {/* Tekst informacyjny */}
            <div className="mx-5 flex-col justify-center items-center">
              <img src="/assets/LogoMainPage.svg" alt="" className=" mb-5" />

              <ul className=" space-y-1 font-medium">
                <li className=" flex justify-start items-center gap-2">
                  <FaPhoneAlt />
                  +48 789 790 860
                </li>
                <li className=" flex justify-start items-center gap-2">
                  <FaPhoneAlt />
                  +48 690 515 224
                </li>
                <li className=" flex justify-start items-center gap-2">
                  <FaPhoneAlt />
                  +48 502 162 365
                </li>
                <li className=" flex justify-start items-center gap-2">
                  <FaEnvelope />
                  poradniamagnolia@gmail.com
                </li>
                <li className=" flex justify-start items-center gap-2">
                  <FaMapMarkerAlt />
                  Magnolii 25, 44-207 Rybnik
                </li>
              </ul>

              <p className=" text-md font-medium mt-3">Godziny otwarcia:</p>
              <p className=" mb-4">Poniedziałek - Piątek: 7:00 - 21:00</p>
              <hr className=" mb-4" />
              <Formularz />
            </div>
            <iframe
              width="600"
              height="740"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className=" rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
