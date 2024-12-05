"use client";

import React from "react";
import { Button } from "../../@/components/ui/button";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
});

export function Navigation() {
  const navItems = [
    "O szkoleniu",
    "Korzyści",
    "Dla kogo",
    "Program",
    "Kontakt",
  ];

  return (
    <nav
      className={`container mx-auto px-4 py-4 flex items-center justify-between ${afacad.className}`}
    >
      <div className="text-xl font-semibold tracking-tight text-zinc-800">
        Szkolenie TUS
      </div>
      <ul className="hidden md:flex space-x-14">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-600 text-sm hover:text-gray-900"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <Button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
        Zapisz się
      </Button>
    </nav>
  );
}
