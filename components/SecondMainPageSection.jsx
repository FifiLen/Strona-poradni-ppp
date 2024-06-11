import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { CgArrowTopRightO } from "react-icons/cg";

const SecondMainPageSection = () => {
  return (
    <section className="w-full bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/adult.jpg"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2 className="text-4xl md:text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            Dla dorosłych
          </h2>
          <p className="text-base md:text-lg text-zinc-600 mt-4">
            Gdy życie stawia wyzwania, którym trudno sprostać, zapraszamy
            Państwa do Poradni Psychologiczno-Pedagogicznej MAGNOLIA, która
            wspiera osoby dorosłe w rozwiązywaniu trudnych sytuacji rodzinnych
            i&nbsp;osobistych. Prowadzimy terapię par mierzących się
            z&nbsp;trudnościami w&nbsp;związku, wspieramy rodziców w&nbsp;ich
            dylematach wychowawczych, oferujemy konsultacje psychologiczne oraz
            psychoterapię osób zmagających się z depresją. <br />
            <br />
            Właśnie w&nbsp;MAGNOLI mogą Państwo sprawdzić swoje predyspozycje
            do&nbsp;pełnienia roli rodziców wypełniając test kompetencji
            rodzicielskich, sprawdzić swoje preferencje zawodowe wykonując test
            osobowości, przeprowadzić diagnozę ADHD będąc osobą dorosłą.
            Wspieramy Państwa w&nbsp;zmaganiach z&nbsp;uzależnieniami
            behawioralnymi związanymi z&nbsp;nadmiernym korzystaniem
            z&nbsp;internetu i&nbsp;mediów społecznościowych, korzystaniem
            z&nbsp;solarium, kompulsywnymi zakupami, grami hazardowymi, czy
            objadaniem się prowadzącym do otyłości. <br />
            <br /> Zawsze, gdy potrzebują Państwo wparcia psychologicznego
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA służy pomocą.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/Dorosli">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#921d7f] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Wsparcie dla osób dorosłych
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="/terapia_par">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#225da5] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Terapia dla par
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondMainPageSection;
