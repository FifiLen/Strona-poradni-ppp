import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";

const FirstMainPageSection = () => {
  return (
    <section className="w-full bg-[#274871]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <p className="text-2xl md:text-3xl font-semibold text-gray-50 tracking-[-0.2rem]">
            Witaj na stronie naszej poradni
          </p>
          <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tighter mt-3">
            O Poradni
          </h2>
          <p className="text-base md:text-lg text-zinc-200 mt-4">
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka bliska
            problemom{" "}
            <span className="bg-[#921d7f]/80 p-1 rounded-md ">dzieci</span>,{" "}
            <span className="bg-[#921d7f]/80 p-1 rounded-md ">młodzieży</span>{" "}
            oraz{" "}
            <span className="bg-[#921d7f]/80 p-1 rounded-md ">
              osób dorosłych
            </span>
            .
            <br />
            <br />
            Realizujemy{" "}
            <span className="bg-[#921d7f]/80 p-1 rounded-md ">
              darmowe zajęcia
            </span>{" "}
            Wczesnego Wspomagania Rozwoju Dziecka na podstawie opinii
            o&nbsp;potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
            dydaktycznych i&nbsp;terapeutycznych dla dzieci i&nbsp;młodzieży.
            Prowadzimy wsparcie psychologiczne osób dorosłych.
            <br />
            <br />Z pasją i&nbsp;oddaniem realizujemy zadania z&nbsp;zakresu
            pomocy rodzinie, parom planującym wspólną przyszłość lub już ją
            tworzących,&nbsp;a także osobom zmagającym się z&nbsp;uzależnieniami
            behawioralnymi (uzależnienie od&nbsp;gier komputerowych/sieciowych,
            mediów społecznościowych, portali randkowych/sex chatów, gier
            losowych, zakupów). Prowadzimy terapie psychologiczne zarówno
            stacjonarnie jak&nbsp;i on-line. Przeprowadzamy diagnozy
            psychologiczne osób w każdym wieku.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/O_nas">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#921d7f] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Zobacz zdjęcia naszej placówki
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="#kierunki">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#225da5] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Nasi specjaliści
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/place.jpg"
            fill
            alt="Studentka przy komputerze, rekrutacja 2024/2025"
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstMainPageSection;
