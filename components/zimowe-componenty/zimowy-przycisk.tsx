import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ZimowyPrzycisk() {
  return (
    <Button className="relative w-full max-w-md h-32 bg-[#A7C7FF] rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="absolute inset-0 flex items-center justify-start pl-8">
        <span className="text-4xl font-bold text-white z-10">Kontakt</span>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden">
        <Image
          src="/styles/Snowman.png"
          alt="Winter scene with snowman"
          width={200}
          height={200}
          className="object-contain transform -scale-x-100 translate-x-4 translate-y-2"
        />
      </div>
    </Button>
  );
}
