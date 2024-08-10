"use client";
import React, { createContext, useState, useContext } from "react";

// Create the context
const AccessibilityContext = createContext();

// Create a custom hook to use the context
export const useAccessibility = () => {
  return useContext(AccessibilityContext);
};

// Create the provider component
export const AccessibilityProvider = ({ children }) => {
  // Define font size levels corresponding to Tailwind classes
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // 1 is default

  const [highContrast, setHighContrast] = useState(false);

  // Methods to adjust settings
  const increaseFontSize = () =>
    setFontSizeLevel((prev) => Math.min(prev + 1, 4)); // Max level for larger text
  const decreaseFontSize = () =>
    setFontSizeLevel((prev) => Math.max(prev - 1, 0)); // Min level for smaller text
  const resetFontSize = () => setFontSizeLevel(1); // Reset to default level
  const toggleHighContrast = () => setHighContrast((prev) => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSizeLevel,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        highContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
