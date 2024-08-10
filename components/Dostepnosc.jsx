"use client";
import React from "react";
import { useAccessibility } from "./AccessibilityContext"; // Ensure this path is correct
import { FaAdjust } from "react-icons/fa"; // Use a contrast icon from react-icons

const AccessibilityControls = () => {
  const {
    increaseFontSize,
    decreaseFontSize,
    resetFontSize, // Use the reset function
    toggleHighContrast,
    highContrast,
  } = useAccessibility();

  return (
    <div className="flex justify-center py-2 space-x-2">
      <button
        onClick={decreaseFontSize}
        className="mx-1 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        aria-label="Zmniejsz czcionkę"
      >
        A-
      </button>
      <button
        onClick={resetFontSize}
        className="mx-1 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        aria-label="Resetuj do bazowej wielkości"
      >
        A
      </button>
      <button
        onClick={increaseFontSize}
        className="mx-1 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        aria-label="Zwiększ czcionkę"
      >
        A+
      </button>
      <button
        onClick={toggleHighContrast}
        className="mx-1 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        aria-label="Zmień kontrast"
      >
        <FaAdjust className="h-4 w-4" />
        <span className="sr-only">
          {highContrast ? "Wyłącz wysoki kontrast" : "Włącz wysoki kontrast"}
        </span>
      </button>
    </div>
  );
};

export default AccessibilityControls;
