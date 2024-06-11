import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRightO } from "react-icons/cg";

const ThirdMainPageSection = () => {
  return (
    <section className="w-full bg-[#274871]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        {/* Text Column */}
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tighter mt-3">
            Dla dzieci i młodzieży
          </h2>
          <p className="text-base md:text-lg text-zinc-200 mt-4">
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to&nbsp;placówka
            bliska problemom dzieci, młodzieży oraz osób dorosłych. Realizujemy
            darmowe zajęcia Wczesnego Wspomagania Rozwoju Dziecka na podstawie
            opinii o&nbsp; potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
            dydaktycznych, terapeutycznych oraz warsztatów wspierających
            wszechstronny rozwój dzieci i&nbsp;młodzieży. <br />
            <br /> Wspieramy psychologicznie młodzież w&nbsp;problemach wieku
            dorastania. Co roku organizujemy zajęcia przygotowujące
            do&nbsp;egzaminów ósmoklasisty. Dla najmłodszych oferujemy spotkania
            w&nbsp;gronie dzieci do&nbsp;3 roku życia nie uczęszczających
            jeszcze do&nbsp;przedszkola na&nbsp;zajęcia ogólnorozwojowe
            z&nbsp;elementami bajkoterapii.
          </p>
          <div className="block md:flex items-center gap-2">
            <Link href="/Dzieci">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#921d7f] text-white text-sm font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Wsparcie dla dzieci i&nbsp;młodzieży
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
            <Link href="/WWRD">
              <button
                aria-label="poznaj naszą ofertę"
                className="bg-[#225da5] text-white text-sm font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
              >
                Jak uzyskać darmowe zajęcia WWR
                <CgArrowTopRightO className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/kids.jpg"
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

export default ThirdMainPageSection;
