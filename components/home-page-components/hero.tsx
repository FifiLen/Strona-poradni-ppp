import React, { memo } from "react";

const VideoPlayer = memo(() => (
  <div className="relative w-full h-0 pb-[56.25%]">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/assets/hero/zimowe-hero.mp4" type="video/mp4" />
      Twoja przeglądarka nie wspiera odtwarzania wideo.
    </video>
  </div>
));

export default function Hero() {
  return (
    <section className=" relative w-full">
      <div className=" w-full h-full">
        <VideoPlayer />
      </div>
    </section>
  );
}
