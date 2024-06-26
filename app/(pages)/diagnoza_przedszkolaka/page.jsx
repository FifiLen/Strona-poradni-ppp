import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

import { AlertDemo } from "../../../components/Alert";
import Link from "next/link";

const DiagnozaPrzedszkolaka = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="border-y border-gray-300 py-4 md:py-6 ">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Diagnoza Przedszkolaka
          </h2>
        </div>
      </div>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/diagnozaP.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Diagnoza Przedszkolaka
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Etap przedszkolny jest momentem, w&nbsp;którym rodzice
                i&nbsp;nauczyciele zaczynają dostrzegać potencjalne trudności
                rozwojowe u&nbsp;dzieci. Dlaczego właśnie wtedy? Przedszkolak,
                nawet jeśli wcześniej uczęszczał do&nbsp;żłobka, teraz trafia
                pod opiekę wykwalifikowanych nauczycieli, którzy mogą dokładniej
                ocenić jego możliwości i&nbsp;ewentualne problemy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10 max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Tekst informacyjny */}
            <div className="flex-col justify-start items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dwa wymiary diagnozy
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Diagnoza dziecka w&nbsp;wieku przedszkolnym może przebiegać
                na&nbsp;dwa sposoby:
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Ocena gotowości do&nbsp;podjęcia nauki szkolnej
                  </AccordionTrigger>
                  <AccordionContent>
                    Procedura diagnozowania gotowości szkolnej jest dobrze
                    opisana w&nbsp;dostępnej literaturze specjalistycznej. Wciąż
                    jednak wiele wątpliwości budzi diagnoza w&nbsp;sytuacjach
                    trudnych, kiedy rodzice dostrzegają problem, kiedy dziecko
                    wzbrania się przed chodzeniem do&nbsp;przedszkola.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Analiza psycho-fizycznego funkcjonowania dziecka
                  </AccordionTrigger>
                  <AccordionContent>
                    Jak przeprowadzić diagnozę aby&nbsp;była rzetelna? Jakimi
                    narzędziami posłużyć się podczas diagnozowania i&nbsp;czy
                    narzędzie diagnostyczne to&nbsp;jedyna ścieżka
                    diagnostyczna? To tylko niektóre z&nbsp;pytań, które często
                    stają przed nauczycielami.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/diagnozaP2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/diagnozaP3.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Rola Nauczyciela i&nbsp;Specjalistów
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Nauczyciel przedszkolny może samodzielnie przeprowadzić
                diagnozę, ale zazwyczaj zadanie to&nbsp;powierza się
                specjalistom. Pierwszym krokiem jest obserwacja
                i&nbsp;zgłoszenie problemów rodzicom. Następnie rodzic może udać
                się z&nbsp;dzieckiem do&nbsp;Poradni
                Psychologiczno-Pedagogicznej, gdzie zostanie przeprowadzona
                kompleksowa diagnoza przed którą zadane zostaną pytania
                dotyczące sytuacji rodzinnej oraz&nbsp;bytowej dziecka,
                a&nbsp;także o&nbsp;wcześniejsze diagnozowanie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10 max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Tekst informacyjny */}
            <div className="flex-col justify-start items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Przygotowanie do&nbsp;diagnozy
              </h2>
              <ul className="text-gray-700 text-base text-left mb-6 list-disc ml-6">
                <li>
                  Psycholog: ocena kondycji psychicznej, w&nbsp;tym poziomu
                  lęku.
                </li>
                <li>Laryngolog: ocena słuchu.</li>
                <li>Okulista: ocena wzroku.</li>
                <li>Neurolog: ocena układu nerwowego.</li>
              </ul>
            </div>

            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/diagnozaP4.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/diagnozaP5.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Narzędzia Diagnostyczne dla Przedszkolaków
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Diagnoza wymaga zastosowania narzędzi, które umożliwiają
                kompleksową ocenę rozwoju psychofizycznego, społecznego
                i&nbsp;poznawczego dziecka:
              </p>
              <ul className="text-gray-700 text-base text-left mb-6 space-y-4 list-disc ml-6">
                <li>
                  Profil Psychoedukacyjny Schoplera (PEP-R): Narzędzie ocenia
                  poziom rozwoju w&nbsp;różnych obszarach, takich jak
                  komunikacja, umiejętności społeczne, motoryka duża
                  i&nbsp;mała, oraz funkcjonowanie poznawcze.
                </li>
                <li>
                  Skale Gotowości Szkolnej (School Readiness Scales): Narzędzie
                  ocenia przygotowanie dziecka do&nbsp;podjęcia nauki szkolnej
                  w&nbsp;zakresie umiejętności społecznych, emocjonalnych,
                  poznawczych&nbsp;i językowych.
                </li>
                <li>
                  Kwestionariusz Rozwoju Mowy (Speech and Language Development
                  Questionnaire): Narzędzie ocenia rozwój mowy i&nbsp;języka
                  dziecka, identyfikując ewentualne opóźnienia
                  lub&nbsp;zaburzenia.
                </li>
                <li>
                  Skale Rozwoju Dzieci Denver II (Denver Developmental Screening
                  Test II): Narzędzie ocenia rozwój dziecka w czterech
                  obszarach: motoryka duża, motoryka mała, mowa i&nbsp;kontakty
                  społeczne.
                </li>
                <li>
                  Testy Inteligencji (Intelligence Tests): Narzędzia takie jak
                  Skala Inteligencji Stanford-Binet czy Skala Inteligencji
                  Dzieci Wechslera (WISC) oceniają ogólny poziom intelektualny
                  dziecka.
                </li>
                <li>
                  Kwestionariusz Zachowań Przedszkolaka (Preschool Behavior
                  Questionnaire): Narzędzie ocenia zachowania adaptacyjne oraz
                  ewentualne problemy emocjonalne i&nbsp;behawioralne.
                </li>
                <li>
                  Skale Rozwoju Społeczno-Emocjonalnego (Social-Emotional
                  Development Scales): Narzędzie ocenia rozwój emocjonalny
                  i&nbsp;społeczny dziecka, w&nbsp;tym umiejętności radzenia
                  sobie ze&nbsp;stresem, relacje z&nbsp;rówieśnikami
                  i&nbsp;dorosłymi. Stosowane w&nbsp;ocenie dzieci
                  z&nbsp;podejrzeniem zaburzeń emocjonalnych i&nbsp;społecznych.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10 max-w-7xl mx-auto">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            {/* Tekst informacyjny */}
            <div className="flex-col justify-start items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Rzetelna diagnoza
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Każde narzędzie powinno być stosowane z&nbsp;uwzględnieniem
                kontekstu kulturowego i&nbsp;językowego dziecka. Warto stosować
                różne narzędzia, aby uzyskać pełny obraz możliwości
                i&nbsp;trudności dziecka. Rodzice powinni być zaangażowani
                w&nbsp;proces diagnostyczny, dostarczając ważnych informacji
                na&nbsp;temat zachowania i&nbsp;rozwoju dziecka.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Stosowanie odpowiednich narzędzi diagnostycznych pozwala
                na&nbsp;wczesne wykrycie problemów rozwojowych
                i&nbsp;zaplanowanie skutecznych działań terapeutycznych
                i&nbsp;edukacyjnych.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Rzetelna diagnoza jest kluczem do&nbsp;skutecznych działań
                edukacyjno-terapeutycznych. Im&nbsp;dokładniejsza ocena, tym
                lepsze wsparcie możemy zapewnić dziecku, co&nbsp;jest
                fundamentem jego przyszłego sukcesu edukacyjnego.
              </p>
            </div>

            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/diagnozaP6.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl mx-auto my-20">
        <div className="border border-blue-800 bg-blue-100 rounded-lg p-6">
          <h2 className="text-3xl md:text-3xl text-left font-semibold mb-6 font-display">
            Skontaktuj się z&nbsp;nami
          </h2>
          <p className="text-gray-700 text-base text-left mb-6">
            Zapraszamy na&nbsp;diagnozę przedszkolaka, gdzie specjaliści pomogą
            w&nbsp;ocenie rozwoju Twojego dziecka. Koszt diagnozy zaczyna się
            od&nbsp;500 zł.
          </p>
          <div className="flex items-center justify-start">
            <Link
              href={"/Kontakt"}
              className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
            >
              Umów wizytę
              <FaCircleArrowRight className=" rotate-[-45deg]" />
            </Link>
          </div>
        </div>
      </section>

      <AlertDemo />
    </div>
  );
};

export default DiagnozaPrzedszkolaka;
