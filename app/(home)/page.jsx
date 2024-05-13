"use client";
import React, { useState, useEffect } from "react";
import HeroPartZero from "/components/HeroPartZero";
import HeroPartOne from "/components/HeroPartOne";
import HeroPartTwo from "/components/HeroPartTwo";
import HeroPartThree from "/components/HeroPartThree";
import HeroPartFour from "/components/HeroPartFour";
import HeroPartFive from "/components/HeroPartFive";
import HeroSocial from "/components/HeroSocial";
import HeroContact from "/components/HeroContact";
import Modal from "/components/Modal";

const Home = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const checkFirstVisit = () => {
      // Sprawdź, czy w localStorage jest zapisana wartość 'hasVisited'
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        // Jeśli 'hasVisited' nie istnieje, ustaw 'isFirstVisit' na true i zapisz w localStorage
        setIsFirstVisit(true);
        localStorage.setItem("hasVisited", "true");
      }
    };

    checkFirstVisit();
  }, []);
  return (
    <main>
      <HeroPartZero />
      <HeroPartOne />
      <HeroPartFour />

      <HeroPartThree />
      <HeroPartTwo />
      <HeroSocial />
      {/* <HeroPartFive /> */}
      <HeroContact />
      {isFirstVisit && <Modal />}
    </main>
  );
};
export default Home;
