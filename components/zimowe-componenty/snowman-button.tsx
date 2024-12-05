"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SnowmanButtonProps {
  href: string;
  children: React.ReactNode;
}

export function SnowmanButton({ href, children }: SnowmanButtonProps) {
  return (
    <Link href={href}>
      <div className="relative flex flex-row  sm:flex-col items-center justify-center w-full max-w-lg p-3 px-20 rounded-lg bg-gradient-to-b from-blue-700 to-blue-300 shadow-lg hover:bg-blue-800 hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 group">
        {/* Snowman illustration */}
        <div className="absolute -top-5 z-10 right-0">
          <Image
            src="/assets/Snowman.png"
            alt="Bałwan"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <div className="absolute -top-[1.6rem] z-10 left-0">
          <Image
            src="/assets/Christmas-tree.png"
            alt="Bałwan"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        {/* Button text */}
        <span className="text-sm tracking-tight font-semibold text-white">
          {children}
        </span>
        {/* Snow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full snow-flake"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 10}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
