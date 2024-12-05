"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IconType } from "react-icons";
import {
  FaHeart,
  FaStar,
  FaBolt,
  FaCloud,
  FaSun,
  FaMoon,
  FaTree,
  FaLeaf,
} from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  a: FaHeart,
  e: FaStar,
  i: FaBolt,
  o: FaCloud,
  u: FaSun,
  n: FaMoon,
  s: FaTree,
  t: FaLeaf,
};

interface AnimatedHeaderProps {
  text: string;
  className?: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const chars = containerRef.current!.querySelectorAll(".char");

      const masterTimeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });

      chars.forEach((char: Element, index: number) => {
        const textElement = char.querySelector(".text");
        const iconElement = char.querySelector(".icon");

        if (iconElement) {
          masterTimeline
            .to(
              textElement,
              {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: "power2.in",
              },
              index * 0.1
            )
            .to(
              iconElement,
              {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
              },
              index * 0.1 + 0.1
            );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const characters = text.split("").map((char, index) => {
    const lowerChar = char.toLowerCase();
    const IconComponent = iconMap[lowerChar];

    return (
      <span key={index} className="char inline-block relative">
        <span className="text relative inline-block">{char}</span>
        {IconComponent && (
          <span className="icon absolute left-0 top-0 opacity-0 scale-0">
            <IconComponent className="w-[1em] h-[1em]" />
          </span>
        )}
      </span>
    );
  });

  return (
    <div ref={containerRef} aria-label={text}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold mb-8 sm:mb-12 ${className}`}
      >
        {characters}
      </h2>
    </div>
  );
};

export default AnimatedHeader;
