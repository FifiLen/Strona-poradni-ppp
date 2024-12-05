"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { name: "Centrum uzależnień", href: "/centrum-uzaleznien" },
  { name: "Dzieci", href: "/wsparcie-dla-dzieci" },
  { name: "Dorośli", href: "/wsparcie-dla-doroslych" },
  { name: "SI", href: "/wsparcie-dla-dzieci/diagnoza-si" },
  // { name: "Bobath", href: "/bobath" },
  { name: "Terapia VR", href: "/terapia-vr" },
  { name: "Hipoterapia", href: "/hipoterapia" },
  { name: "Oferta", href: "/oferta" },
];

const aboutDropdownItems = [
  { name: "Nasi Specjaliści", href: "/kadra" },
  { name: "Galeria", href: "/galeria" },
  { name: "Regulamin", href: "/regulamin" },
];

interface MainNavProps {
  highContrast?: boolean;
  onToggleContrast?: () => void;
}

export default function MainNav({
  highContrast = false,
  onToggleContrast,
}: MainNavProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-4 shadow-md shadow-slate-900/5 transition-all duration-300 dark:shadow-none sm:px-6 lg:px-8",
        highContrast ? "bg-black text-white" : "text-slate-700",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" aria-label="Home page">
            <Image
              src="/assets/logo/logo.png"
              alt="Logo Magnolia"
              width={120}
              height={80}
            />
          </Link>
          <nav className="hidden lg:flex lg:items-center lg:space-x-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 font-medium tracking-tight hover:bg-slate-100 hover:text-slate-900"
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="group inline-flex items-center rounded-lg px-2 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  O nas
                  <ChevronDown className="ml-1 h-4 w-4 stroke-current opacity-50 group-hover:opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/kontakt">
            <div className="relative flex flex-col items-center justify-center w-full max-w-xs p-2 px-4 rounded-lg bg-blue-500 shadow-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-300">
              {/* Ilustracja */}
              <div className="absolute -top-6 -z-50">
                <Image
                  src="/assets/Snowman.png"
                  alt="Bałwan"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              {/* Tekst przycisku */}
              <span className="text-xs tracking-tight font-semibold text-white">
                Kontakt
              </span>
            </div>
          </Link>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-slate-500 p-2 hover:bg-slate-100/50 hover:stroke-slate-600 active:stroke-slate-900 [&:not(:focus-visible)]:focus:outline-none lg:hidden"
                aria-label="Toggle site navigation"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className=" text-left">
                  Poradnia Magnolia
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-lg font-semibold text-slate-700 hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <h3 className="mb-2 text-lg font-semibold text-slate-700">
                    O nas
                  </h3>
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-base text-slate-600 hover:text-slate-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/kontakt"
                  className="mt-6 block py-2 text-lg font-semibold text-slate-700 hover:text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
