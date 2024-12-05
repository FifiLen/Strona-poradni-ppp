"use client";

import React from "react";
import IntroSection from "./IntroSection";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import BenefitsSection from "./BenefitsSection";
import EffectsSection from "./EffectsSection";
import IndicationsSection from "./IndicationsSection";
import PricingSection from "./PricingSection";
import TherapyProcessSection from "./TherapyProcessSection";
import WhyHorsesSection from "./WhyHorsesSection";

const Hippotherapy = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      <IntroSection />
      <BenefitsSection />
      <TherapyProcessSection />
      <IndicationsSection />
      <WhyHorsesSection />
      <EffectsSection />
      <PricingSection />
    </div>
  );
};

export default Hippotherapy;
