"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useAccessibility } from "@/lib/providers/accessibility-context";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/assets/galeria/galeria-1.jpeg", alt: "Zdjęcie 1 z galerii" },
  { src: "/assets/galeria/galeria-2.jpg", alt: "Zdjęcie 2 z galerii" },
  { src: "/assets/galeria/galeria-3.jpg", alt: "Zdjęcie 3 z galerii" },
  { src: "/assets/galeria/galeria-4.jpeg", alt: "Zdjęcie 4 z galerii" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { fontSizeLevel, highContrast } = useAccessibility();

  const openImage = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = useCallback((direction: "next" | "prev") => {
    setSelectedImage((prevIndex) => {
      if (prevIndex === null) return null;
      if (direction === "next") {
        return prevIndex < images.length - 1 ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : images.length - 1;
      }
    });
  }, []);

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`mx-auto max-w-[1260px] px-4 sm:px-8 md:px-12 lg:px-16 mt-24 mb-32 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 ${
          highContrast ? "text-yellow-400" : "text-gray-800"
        }`}
      >
        Nasze miejsce
      </h2>
      <p
        className={`${fontSizeClass} italic text-center mb-8 ${
          highContrast ? "text-yellow-400" : "text-zinc-600"
        }`}
      >
        (Kliknij na zdjęcie aby powiększyć)
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-6">
        {images.map((image, index) => (
          <Button
            key={index}
            onClick={() => openImage(index)}
            className="p-0 h-auto overflow-hidden rounded-lg shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            variant="ghost"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Button>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <Button
                onClick={() => navigateImage("prev")}
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                size="icon"
                variant="ghost"
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Poprzednie zdjęcie</span>
              </Button>
              <Button
                onClick={() => navigateImage("next")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                size="icon"
                variant="ghost"
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Następne zdjęcie</span>
              </Button>
              <Button
                onClick={closeImage}
                className="absolute top-2 right-2"
                size="icon"
                variant="ghost"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Zamknij</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
