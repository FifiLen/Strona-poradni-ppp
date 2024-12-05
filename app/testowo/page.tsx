"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BouncingElement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const leftElementRef = useRef<HTMLDivElement>(null);
  const newRightElementRef = useRef<HTMLDivElement>(null);
  const newObject1Ref = useRef<HTMLDivElement>(null);
  const newObject2Ref = useRef<HTMLDivElement>(null);
  const newObject3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const leftElement = leftElementRef.current;
    const newRightElement = newRightElementRef.current;
    const newObject1 = newObject1Ref.current;
    const newObject2 = newObject2Ref.current;
    const newObject3 = newObject3Ref.current;
    const text = textRef.current;

    if (
      !section ||
      !video ||
      !leftElement ||
      !newRightElement ||
      !newObject1 ||
      !newObject2 ||
      !newObject3 ||
      !text
    )
      return;

    const sectionHeight = section.offsetHeight;
    const sectionWidth = section.offsetWidth;
    const halfWidth = sectionWidth * 0.5;
    const initialWidth = sectionWidth * 0.4;
    const initialHeight = initialWidth * 0.5625; // 16:9 aspect ratio
    const midWidth = sectionWidth * 0.8;
    const midHeight = midWidth * 0.5625;
    const finalWidth = sectionWidth;
    const finalHeight = finalWidth * 0.5625;
    const sideWidth = halfWidth;
    const sideHeight = sideWidth * 0.5625;
    const newObjectSize = sectionWidth * 0.2;

    // Sprawdź, czy szerokość ekranu jest większa niż 768px (typowa szerokość tabletu)
    const isTabletOrLarger = window.matchMedia("(min-width: 768px)").matches;

    if (isTabletOrLarger) {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        onRepeat: () => {
          gsap.set(
            [
              video,
              leftElement,
              newRightElement,
              newObject1,
              newObject2,
              newObject3,
              text,
            ],
            {
              clearProps: "all",
            }
          );
        },
      });

      tl.set(video, {
        width: initialWidth,
        height: initialHeight,
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
      })
        .set(leftElement, {
          width: sideWidth,
          height: sideHeight,
          left: -sideWidth,
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        })
        .set(newRightElement, {
          width: sideWidth,
          height: sideHeight,
          left: sectionWidth + sideWidth / 2,
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        })
        .set([newObject1, newObject2, newObject3], {
          width: newObjectSize,
          height: newObjectSize,
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
        })
        .set(newObject1, { left: "25%" })
        .set(newObject2, { left: "50%" })
        .set(newObject3, { left: "75%" })
        .set(text, { opacity: 0, y: 20 })
        .to(video, {
          top: sectionHeight - midHeight / 2,
          width: midWidth,
          height: midHeight,
          ease: "power1.in",
          duration: 1,
        })
        .to(video, {
          top: sectionHeight - midHeight / 2 - 100,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
          duration: 0.4,
        })
        .to(
          video,
          {
            width: finalWidth,
            height: finalHeight,
            top: "50%",
            ease: "power2.inOut",
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(video, {
          width: sideWidth,
          height: sideHeight,
          left: sectionWidth - sideWidth / 2,
          ease: "power2.inOut",
          duration: 1,
        })
        .to(leftElement, {
          left: sideWidth / 2,
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.5,
        })
        .to(leftElement, {
          opacity: 0,
          ease: "power2.in",
          duration: 3,
        })
        .to(
          video,
          {
            left: sideWidth / 2,
            ease: "power2.inOut",
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(newRightElement, {
          left: sectionWidth - sideWidth / 2,
          opacity: 1,
          ease: "power2.inOut",
          duration: 3,
        })
        .to([video, newRightElement], {
          left: "50%",
          opacity: 0,
          ease: "power2.inOut",
          duration: 2,
        })
        .to([newObject1, newObject2, newObject3], {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.6,
        })
        .to([newObject1, newObject3], {
          left: "50%",
          opacity: 0,
          ease: "power2.inOut",
          duration: 2,
        })
        .to(
          newObject2,
          {
            backgroundColor: "#3b82f6",
            ease: "power2.inOut",
            duration: 1,
          },
          "-=1"
        )
        .to(newObject2, {
          y: -20,
          yoyo: true,
          repeat: 2,
          ease: "power2.inOut",
          duration: 0.4,
        })
        .to(newObject2, {
          top: -newObjectSize,
          ease: "power2.in",
          duration: 2,
        })
        .to(text, {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 1.6,
        })
        .to(
          text,
          {
            opacity: 0,
            y: -20,
            ease: "power2.in",
            duration: 1.6,
          },
          "+=4"
        );

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[90vh] max-w-7xl mx-auto relative overflow-hidden bg-gray-100"
    >
      <video
        ref={videoRef}
        className="absolute object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/hero/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        ref={leftElementRef}
        className="absolute rounded-lg bg-green-500 flex items-center justify-center text-white text-center p-4"
      >
        <div>
          <h2 className="text-xl font-bold mb-2">Nasza Misja</h2>
          <p>
            Zapewniamy kompleksową opiekę psychologiczną dla dzieci, młodzieży i
            dorosłych.
          </p>
        </div>
      </div>
      <div
        ref={newRightElementRef}
        className="absolute rounded-lg bg-red-500 flex items-center justify-center text-white text-center p-4"
      >
        <p>Zespół doświadczonych specjalistów</p>
      </div>
      <div
        ref={newObject1Ref}
        className="absolute rounded-lg bg-yellow-500 flex items-center justify-center text-white text-center p-4"
      >
        <p>Terapia indywidualna</p>
      </div>
      <div
        ref={newObject2Ref}
        className="absolute rounded-lg bg-purple-500 flex items-center justify-center text-white text-center p-4"
      >
        <p>Terapia grupowa</p>
      </div>
      <div
        ref={newObject3Ref}
        className="absolute rounded-lg bg-pink-500 flex items-center justify-center text-white text-center p-4"
      >
        <p>Warsztaty rozwojowe</p>
      </div>
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Poradnia Magnolia
        </h1>
        <p className="text-2xl text-gray-600">Zapraszamy</p>
      </div>
    </section>
  );
}
