import Link from "next/link";
import { Button } from "../ui/button";
import { SnowmanButton } from "../zimowe-componenty/snowman-button";
import { ChevronsRight, Snowflake } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative">
      {/* Snowflake background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <Snowflake
            key={i}
            className={`absolute w-6 h-6 text-blue-300 opacity-30 animate-spin ${
              i % 2 === 0 ? "text-blue-400" : "text-blue-300"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-4xl md:text-5xl tracking-tight font-semibold mb-8 sm:mb-12">
          Witaj na stronie <br />
          naszej poradni
        </h2>

        <h3 className="text-3xl sm:text-4xl md:text-4xl tracking-tight font-semibold mb-8 sm:mb-12">
          O Poradni
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700">
          <div className="space-y-8">
            <p className="text-base font-semibold tracking-tight leading-relaxed">
              Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka bliska
              problemom{" "}
              <span className="bg-blue-400 text-white px-3 py-1 rounded-md">
                dzieci
              </span>
              ,{" "}
              <span className="bg-blue-400 text-white px-3 py-1 rounded-md">
                młodzieży
              </span>{" "}
              oraz{" "}
              <span className="bg-blue-400 text-white px-3 py-1 rounded-md">
                osób dorosłych
              </span>
              .
            </p>

            <p className="text-base font-semibold tracking-tight leading-relaxed">
              Realizujemy{" "}
              <span className="bg-blue-400 text-white px-3 py-1 rounded-md">
                darmowe zajęcia
              </span>{" "}
              Wczesnego Wspomagania Rozwoju Dziecka na podstawie opinii o
              potrzebie WWRD. Oferujemy szeroki wachlarz zajęć dydaktycznych i
              terapeutycznych dla dzieci i młodzieży. Prowadzimy wsparcie
              psychologiczne osób dorosłych.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold tracking-tight leading-relaxed">
              Z pasją i oddaniem realizujemy zadania z zakresu pomocy rodzinie,
              parom planującym wspólną przyszłość lub już ją tworzących, a także
              osobom zmagającym się z uzależnieniami behawioralnymi
              (uzależnienie od gier komputerowych/sieciowych, mediów
              społecznościowych, portali randkowych/sex chatów, gier losowych,
              zakupów). Prowadzimy terapie psychologiczne zarówno stacjonarnie
              jak i on-line. Przeprowadzamy diagnozy psychologiczne osób w
              każdym wieku.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <SnowmanButton href="/galeria">
            Zobacz zdjęcia naszej placówki
          </SnowmanButton>

          <Button
            asChild
            size="lg"
            variant="link"
            id="zima"
            className="text-base sm:text-lg text-[#921d7f] hover:text-black transition-colors duration-300 p-0 relative group"
          >
            <Link href="/kadra">
              Nasi specjaliści
              <ChevronsRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              <Snowflake className="absolute top-full left-1/2 transform -translate-x-1/2 text-blue-300 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
