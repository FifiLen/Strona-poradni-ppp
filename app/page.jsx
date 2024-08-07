"use client";
import React, { useState, useEffect } from "react";
import HeroPartZero from "../components/HeroPartZero";
import FirstMainPageSection from "../components/FirstMainPageSection";
import SecondMainPageSection from "../components/SecondMainPageSection";
import HeroPartTwo from "../components/HeroPartTwo";
import ThirdMainPageSection from "../components/ThirdMainPageSection";
import HeroContact from "../components/HeroContact";
import InfoPoradnia from "../components/InfoPoradnia";
import Zabawy from "../components/Zabawy";

import Modal from "../components/Modal";
import MainSocial from "../components/MainSocial";

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
      <FirstMainPageSection />
      {/* <InfoPoradnia /> */}
      <SecondMainPageSection />
      <MainSocial />

      <ThirdMainPageSection />
      <HeroPartTwo />
      <Zabawy />

      {/* <HeroPartFive /> */}
      <HeroContact />
      {isFirstVisit && <Modal />}
    </main>
  );
};
export default Home;
