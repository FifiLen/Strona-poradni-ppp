"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the shape of our context
interface AccessibilityContextType {
  fontSizeLevel: number;
  highContrast: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  toggleHighContrast: () => void;
}

// Create the context with a default value
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

// Custom hook to use the accessibility context
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};

// Props for the AccessibilityProvider component
interface AccessibilityProviderProps {
  children: ReactNode;
}

// AccessibilityProvider component
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // Default to normal size (index 1)
  const [highContrast, setHighContrast] = useState(false);

  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSizeLevel");
    const savedHighContrast = localStorage.getItem("highContrast");

    if (savedFontSize) setFontSizeLevel(parseInt(savedFontSize, 10));
    if (savedHighContrast) setHighContrast(savedHighContrast === "true");
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("fontSizeLevel", fontSizeLevel.toString());
    localStorage.setItem("highContrast", highContrast.toString());
  }, [fontSizeLevel, highContrast]);

  const increaseFontSize = () => {
    setFontSizeLevel((prev) => Math.min(prev + 1, 4)); // Max level is 4
  };

  const decreaseFontSize = () => {
    setFontSizeLevel((prev) => Math.max(prev - 1, 0)); // Min level is 0
  };

  const resetFontSize = () => {
    setFontSizeLevel(1); // Reset to default (normal) size
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const value = {
    fontSizeLevel,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
