"use client";
import CardComponent from "@/components/home-page-components/cardy-serwis";
import DlaDoroslychSection from "@/components/home-page-components/dla-doroslych";
import DlaDzieciIMlodziezySection from "@/components/home-page-components/dla-dzieci";
import NaszeZajeciaSection from "@/components/home-page-components/galeria-zajec";
import OPoradniSection from "@/components/home-page-components/o-poradni";
import NaszePupileSection from "@/components/home-page-components/pupile";
import MainSocial from "@/components/home-page-components/social-media";
import Hero from "@/components/home-page-components/hero";
import ContactSection from "@/components/home-page-components/contact";
import ContactPage from "./kontakt/page";

export default function Home() {
  return (
    <>
      <div className=" space-y-20">
        <Hero />
        <OPoradniSection />
        <CardComponent />

        <DlaDoroslychSection />
        <MainSocial />
        <NaszePupileSection />
        <DlaDzieciIMlodziezySection />

        {/* <NaszeZajeciaSection /> */}
        <ContactPage />
      </div>
    </>
  );
}
