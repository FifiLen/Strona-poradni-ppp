"use client";

import { useState, useCallback, useRef } from "react";
import { X, BadgeInfo, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Drawer from "./drawer";

const MotionSnowflake = motion(Snowflake);

const generateSnowflakes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 8 + 12,
  }));
};

const locations = [
  {
    address: "ul. Magnolii 25, 44-207 Rybnik-Golejów",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9023448425384!2d18.89149731571725!3d50.28917997945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711310231a6b2e7%3A0x8bf7f73708eaf739!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1sen!2spl!4v1638888888888!5m2!1sen!2spl",
  },
  {
    address: "ul. Rudzka 13c, budynek B, 44-200 Rybnik-Centrum",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9023448425384!2d18.89149731571725!3d50.28917997945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711310231a6b2e7%3A0x8bf7f73708eaf739!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1sen!2spl!4v1638888888888!5m2!1sen!2spl",
  },
  //   {
  //     address: "ul. Przykładowa 2",
  //     mapUrl:
  //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9023448425384!2d18.89149731571725!3d50.28917997945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711310231a6b2e7%3A0x8bf7f73708eaf739!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1sen!2spl!4v1638888888888!5m2!1sen!2spl",
  //   },
];

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const containerRef = useRef(null);

  const handleClose = useCallback(() => setIsVisible(false), []);
  const handleOpenDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const handleCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const snowflakes = generateSnowflakes(50);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 py-3 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {snowflakes.map((snowflake) => (
          <MotionSnowflake
            key={snowflake.id}
            className="text-white/20 absolute pointer-events-none"
            style={{
              left: `${snowflake.x}%`,
              top: `${snowflake.y}%`,
              scale: snowflake.size,
              opacity: snowflake.opacity,
            }}
            animate={{
              y: ["0%", "120%"],
              x: [
                `${snowflake.x}%`,
                `${snowflake.x + (Math.random() - 0.5) * 10}%`,
                `${snowflake.x + (Math.random() - 0.5) * 20}%`,
                `${snowflake.x + (Math.random() - 0.5) * 10}%`,
                `${snowflake.x}%`,
              ],
              opacity: [
                snowflake.opacity,
                snowflake.opacity,
                snowflake.opacity,
                snowflake.opacity,
                0,
              ],
              rotate: 360,
            }}
            transition={{
              duration: snowflake.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2">
            <BadgeInfo className="w-5 h-5 text-white mix-blend-difference" />
            <p className="text-sm font-medium text-white mix-blend-color">
              Nowy punkt Poradni MAGNOLIA: ul. Rudzka 13c, budynek B. (III
              piętro, pokój 3.3)
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="link"
              className="text-xs font-medium text-white mix-blend-difference underline hover:no-underline p-0"
              onClick={handleOpenDrawer}
            >
              Więcej informacji
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 rounded-full hover:bg-white/20 transition-colors p-0"
              onClick={handleClose}
              aria-label="Zamknij banner"
            >
              <X className="w-4 h-4 text-white mix-blend-difference" />
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        locations={locations}
      />
    </>
  );
}
