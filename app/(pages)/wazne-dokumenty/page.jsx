"use client";
import React from "react";
import Formularz from "../../../components/Formularz";

const DownloadsPage = () => {
  const files = [
    {
      name: "Polityka RODO",
      path: "/assets/RODO.pdf",
    },
    {
      name: "PLIKI cookies",
      path: "/assets/Cookies.pdf",
    },
    {
      name: "Tryb postępowania reklamacyjnego",
      path: "/assets/Postepowaniereklamacyjne.pdf",
    },
    {
      name: "Akredytacja",
      path: "/assets/Akredytacja.pdf",
    },
    {
      name: "Certyfikat SUS 2.0 DEKRA",
      path: "/assets/Certyfikat-SUS-DEKRA.pdf",
    },
    {
      name: "TGLS",
      path: "/assets/TGLS.pdf",
    },
  ];

  return (
    <div className="py-20 mx-auto max-w-7xl px-20">
      <h1 className="text-4xl font-semibold pb-6 text-center">Ważne pliki</h1>
      <ul className="space-y-4">
        {files.map((file, index) => (
          <li key={index}>
            <a
              href={file.path}
              download
              className="underline-offset-1 underline text-blue-600"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold py-6">
        Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie
        zdalnej
      </h2>
      <a
        href="/assets/wymaganiatechniczne.pdf"
        download={
          "Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie zdalnej"
        }
        className=" underline-offset-1 underline text-green-900 py-6"
      >
        Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie
        zdalnej
      </a>
      <br />
      <br />
      <a
        href="/assets/REGULAMIN.pdf"
        download={"Regulamin"}
        className=" underline-offset-1 underline text-green-900 py-6"
      >
        Regulamin
      </a>
      <h4 className="text-xl font-semibold py-6">Formularz kontaktowy</h4>
      <Formularz />
    </div>
  );
};

export default DownloadsPage;
