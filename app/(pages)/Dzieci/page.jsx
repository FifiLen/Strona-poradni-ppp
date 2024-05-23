import Link from "next/link";

import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";
import Image from "next/image";

import { AlertDemo } from "/components/Alert";

const Dzieci = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Nagłówek */}
      <div className="border-b border-gray-300 py-4 md:py-6 bg-gradient-to-br from-green-100 via-green-300 to-green-600">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Wsparcie i rozwój dla Twojego dziecka
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
                  src="/assets/subhero-min.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia WWRD dla dzieci <br />{" "}
                <span className=" text-sm text-gray-600">
                  (do czasu rozpoczęcia nauki w szkole)
                </span>
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Wczesne Wspomaganie Rozwoju Dziecka (WWRD) to program mający na
                celu wsparcie dzieci w kluczowych aspektach rozwoju.
                Skoncentrowany jest na wczesnym wykrywaniu i interwencji w
                przypadku różnorodnych trudności i zaburzeń rozwojowych. Dzięki
                indywidualnemu podejściu i dostosowanym metodom, WWRD pomaga w
                rozwijaniu umiejętności motorycznych, poznawczych, społecznych i
                emocjonalnych, umożliwiając każdemu dziecku osiągnięcie pełni
                swojego potencjału.{" "}
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Czym zajmuje się Logopeda w pracy z WWRD?
                  </AccordionTrigger>
                  <AccordionContent>
                    Logopeda w Wczesnym Wspomaganiu Rozwoju Dziecka (WWRD)
                    diagnozuje i terapeutycznie wspiera dzieci z opóźnieniami w
                    rozwoju mowy. Opracowuje spersonalizowane plany
                    terapeutyczne, prowadzi sesje terapeutyczne, wspiera
                    rodziców w integracji terapii w życie codzienne dziecka.
                    Kluczowe są empatia, cierpliwość i monitorowanie postępów
                    dziecka.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Czym zajmuje się Neurologopeda w pracy z WWRD?
                  </AccordionTrigger>
                  <AccordionContent>
                    Neurologopeda w Obszarze Wczesnego Wspomagania Rozwoju
                    Dziecka (WWRD) zajmuje się diagnozowaniem i terapeutycznym
                    wsparciem dzieci z zaburzeniami neurologicznymi wpływającymi
                    na rozwój mowy. Tworzy spersonalizowane plany terapeutyczne,
                    przeprowadza sesje terapeutyczne, oraz wspomaga rodziców w
                    skutecznym integrowaniu terapii w codzienne życie dziecka.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Czym zajmuje się Fizjoterapeuta w pracy z WWRD?
                  </AccordionTrigger>
                  <AccordionContent>
                    Fizjoterapeuta w Obszarze Wczesnego Wspomagania Rozwoju
                    Dziecka (WWRD) specjalizuje się w diagnozowaniu i
                    terapeutycznym wspieraniu dzieci z zaburzeniami
                    neurologicznymi, które mogą wpływać na rozwój motoryki oraz
                    funkcje ruchowe. Opracowuje spersonalizowane plany
                    terapeutyczne, prowadzi sesje terapeutyczne, oraz aktywnie
                    angażuje się w pomoc rodzicom w skutecznym integrowaniu
                    terapii w codzienne życie dziecka.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Jaki jest cel Integracji Sensorycznej w WWRD?
                  </AccordionTrigger>
                  <AccordionContent>
                    Kluczowym celem Integracji Sensorycznej jest zrozumienie,
                    jak dzieci przetwarzają i reagują na bodźce z otoczenia, a
                    także jak te reakcje wpływają na ich rozwój motoryczny,
                    emocjonalny i społeczny. Poprzez różnorodne ćwiczenia i
                    doświadczenia sensoryczne, terapeuta wspomaga rozwijanie
                    umiejętności adaptacyjnych oraz integrację bodźców
                    sensorycznych.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Jaki jest cel Terapii Ręki w WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="">
                    Terapia Ręki skupia się na zidentyfikowaniu ewentualnych
                    ograniczeń w funkcji rąk, takich jak trudności z chwytem,
                    koordynacją ruchową czy zręcznością palców. Przy użyciu
                    specjalistycznych ćwiczeń, manipulacji i zabaw terapeuta
                    stara się poprawić siłę, precyzję oraz funkcjonalność rąk
                    dziecka.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href={"/WWRD"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  Sprawdź jak uzyskać darmowe zajęcia WWRD{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <img
                  src="/assets/psychiatraDzieciecy.png"
                  loading="lazy"
                  alt="dziecko ubierające maskę"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Pomoc dla dzieci i młodzieży
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Psychiatra dziecięcy to lekarz specjalizujący się w
                diagnozowaniu i leczeniu zaburzeń psychicznych u dzieci i
                młodzieży. Oto kilka kluczowych obszarów, w&nbsp;których
                psychiatra dziecięcy może pomóc:{" "}
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Diagnoza i ocena</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Psychiatra dziecięcy może przeprowadzić kompleksową ocenę
                      stanu psychicznego dziecka, w tym przeprowadzić wywiady z
                      rodzicami i dzieckiem, zastosować narzędzia diagnostyczne
                      i w razie potrzeby skonsultować się z innymi
                      specjalistami.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Leczenie zaburzeń emocjonalnych i behawioralnych
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Psychiatra dziecięcy jest uprawniony do przepisywania
                      leków, które mogą być pomocne w regulacji nastroju,
                      zmniejszaniu lęku, poprawie koncentracji lub w innych
                      celach związanych z konkretnymi zaburzeniami psychicznymi.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Farmakoterapia</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Mogą leczyć szeroki zakres problemów, takich jak
                      zaburzenia lękowe, depresja, ADHD (zaburzenie
                      nadpobudliwości ruchowej z deficytem uwagi), zaburzenia
                      zachowania, zaburzenia nastroju, zaburzenia odżywiania,
                      PTSD (zespół stresu pourazowego) i inne.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Terapia</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Mogą prowadzić lub zalecać różne formy terapii, takie jak
                      terapia poznawczo-behawioralna (CBT), terapia rodzinna,
                      terapia indywidualna czy grupowa, w zależności od potrzeb
                      dziecka i rodziny.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Wsparcie i edukacja dla rodzin
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Pomagają rodzicom i opiekunom zrozumieć zaburzenie
                      dziecka, uczyć strategii radzenia sobie oraz zapewniają
                      wskazówki, jak najlepiej wspierać rozwój dziecka i jego
                      dobrostan.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Zarządzanie kryzysowe</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Psychiatra dziecięcy może interweniować w sytuacjach
                      kryzysowych, takich jak myśli samobójcze, ciężkie epizody
                      depresyjne, agresywne zachowania lub inne ostre stany,
                      które wymagają natychmiastowej uwagi.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Pomoc w trudnych okolicznościach
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Mogą oferować wsparcie i interwencje w trudnych sytuacjach
                      życiowych, takich jak rozwód, śmierć w rodzinie, traumy,
                      przemoc w rodzinie czy inne stresujące wydarzenia
                      wpływające na dziecko
                    </p>{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  <div>
                    {" "}
                    <p>Umów wizytę u psychiatry dziecięcego</p>
                    <p className=" text-[11px] text-gray-700">
                      (Wizyty co dwa tygodnie)
                    </p>
                  </div>
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/logopeda.png"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="dziecko ubierające maskę"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia z logopedą dla dzieci i&nbsp;młodzieży
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Zajęcia z logopedą dla dzieci i młodzieży są skoncentrowane na
                diagnozowaniu i terapii różnorodnych trudności komunikacyjnych.
                Logopeda pracuje z dziećmi nad poprawą wymowy, rozwojem mowy i
                języka, a także nad komunikacją niewerbalną. Dzięki
                indywidualnemu podejściu oraz zastosowaniu różnorodnych metod i
                technik, terapia logopedyczna pomaga w przezwyciężaniu barier
                komunikacyjnych, wspierając rozwój językowy i umiejętności
                społeczne uczestników.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Kiedy udać się do logopedy?
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>
                        <strong>
                          Grupa Wiekowa: Niemowlęta (Do 1 Roku Życia):
                        </strong>
                        <ul>
                          <li>
                            Jeśli po ukończeniu roku życia dziecko nie wydaje
                            żadnych dźwięków.
                          </li>
                          <li>
                            Jeśli zauważasz, że dziecko nie reaguje na dźwięki
                            lub nie wydaje dźwięków&nbsp;w&nbsp;odpowiedzi.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Grupa Wiekowa: Małe Dzieci (1-3 Lata):</strong>
                        <ul>
                          <li>
                            Jeśli dziecko w&nbsp;wieku 2 lat nie próbuje
                            wypowiadać pierwszych słów.
                          </li>
                          <li>
                            Jeśli dziecko ma problemy z wymawianiem niektórych
                            dźwięków, takich jak "p," "b," lub "m."
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Grupa Wiekowa: Przedszkolaki (3-5 Lat):</strong>
                        <ul>
                          <li>
                            Jeśli dziecko w&nbsp;wieku 3 lat nadal nie jest
                            w&nbsp;stanie tworzyć prostych zdań.
                          </li>
                          <li>
                            Jeśli trudności w&nbsp;wymawianiu głosek, takich jak
                            "l," "f," "w," "k," "g," "h," lub "ł," są widoczne.
                          </li>
                          <li>
                            Jeśli zauważasz, że dziecko utyka językiem podczas
                            mówienia.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>
                          Grupa Wiekowa: Młodsza Szkoła Podstawowa (6-10 Lat):
                        </strong>
                        <ul>
                          <li>
                            Jeśli dziecko nadal ma trudności z&nbsp;wymawianiem
                            głosek, takich jak "s," "z," "c," lub "dz."
                          </li>
                          <li>
                            Jeśli dziecko modyfikuje sylaby w&nbsp;wyrazach lub
                            skraca wyrazy w&nbsp;sposób nieadekwatny do wieku.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>
                          Grupa Wiekowa: Starsze Dzieci i Młodzież (11-18 Lat):
                        </strong>
                        <ul>
                          <li>
                            Jeśli po osiągnięciu 11 roku życia dziecko nadal ma
                            trudności z&nbsp;wymawianiem głosek, takich jak
                            "sz," "ż," "cz," lub "dż."
                          </li>
                          <li>
                            Jeśli wymowa głoski "r" jest nadal problemem, a
                            dziecko ma trudności z&nbsp; poprawnym jej
                            wypowiadaniem.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Grupa Wiekowa: Dorośli (18+ Lat):</strong>
                        <ul>
                          <li>
                            Jeśli dorośli doświadczają trudności z mową, takie
                            jak chrypa, utrata głosu lub problemy z wymawianiem
                            niektórych dźwięków.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Zalety terapii logopedycznej
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>
                        <strong>Poprawa komunikacji:</strong> Terapia
                        logopedyczna pomaga poprawić zdolności komunikacyjne, co
                        ma kluczowe znaczenie w&nbsp;codziennym życiu, pracy
                        i&nbsp;relacjach społecznych.
                      </li>
                      <li>
                        <strong>Wspieranie rozwoju językowego:</strong> Dla
                        dzieci terapia logopedyczna jest szczególnie korzystna,
                        pomagając w&nbsp;rozwijaniu umiejętności mówienia,
                        słuchania, czytania, i&nbsp;pisania.
                      </li>
                      <li>
                        <strong>Przezwyciężanie wad wymowy:</strong> Terapia
                        logopedyczna pomaga w&nbsp;eliminowaniu wad wymowy, co
                        może być istotne dla zdrowego rozwoju dziecka,
                        i&nbsp;pewności siebie.
                      </li>
                      <li>
                        <strong>Leczenie zaburzeń głosu:</strong> Osoby z
                        zaburzeniami głosu, takimi jak chrypa czy afonia, mogą
                        skorzystać z terapii logopedycznej, aby przywrócić
                        zdrowy, i&nbsp;wyraźny głos.
                      </li>
                      <li>
                        <strong>Wsparcie dla osób z autyzmem:</strong> Terapia
                        logopedyczna może pomóc osobom z autyzmem
                        w&nbsp;rozwijaniu umiejętności komunikacji,
                        i&nbsp;interakcji społecznych.
                      </li>
                      <li>
                        <strong>
                          Pomoc osobom po udarach i urazach mózgu:
                        </strong>{" "}
                        Osoby po udarach lub urazach mózgu często potrzebują
                        terapii logopedycznej do przywrócenia funkcji mowy,
                        i&nbsp;komunikacji.
                      </li>
                      <li>
                        <strong>Wsparcie osób starszych:</strong> Terapia
                        logopedyczna może pomóc osobom starszym
                        w&nbsp;utrzymaniu zdrowej komunikacji, i&nbsp;uniknięciu
                        problemów&nbsp;związanych z&nbsp;zaburzeniami mowy
                        związanymi z&nbsp;wiekiem.
                      </li>
                      <li>
                        <strong>Podniesienie pewności siebie:</strong> Poprawa
                        umiejętności komunikacyjnych dzięki terapii
                        logopedycznej może znacząco podnieść pewność siebie
                        pacjentów.
                      </li>
                      <li>
                        <strong>Indywidualne podejście:</strong> Terapeuci
                        logopedyczni dostosowują terapię do indywidualnych
                        potrzeb każdego pacjenta, co zapewnia efektywną pomoc.
                      </li>
                      <li>
                        <strong>Zwiększenie jakości życia:</strong> Ogólnie
                        rzecz biorąc, terapia logopedyczna pomaga pacjentom
                        poprawić jakość swojego życia, i&nbsp;rozwoju
                        językowego.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Dietetyk dziecięcy w leczeniu logopedycznym u dzieci
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        Każdy rodzic pragnie, aby jego dziecko rozwijało się
                        zdrowo i harmonijnie. Czasami jednak pojawiają się
                        wyzwania, takie jak problemy z prawidłową artykulacją
                        czy inne trudności w zakresie mowy, które wymagają
                        wsparcia logopedycznego. Co ciekawe, coraz częściej
                        podkreśla się znaczenie holistycznego podejścia do
                        leczenia, w ramach którego istotną rolę odgrywa
                        współpraca logopedy z dietetykiem dziecięcym. Dlaczego
                        jest to tak ważne?
                      </li>
                      <li>
                        <b>Rozwój narządów artykulacyjnych:</b> Jak podkreśla
                        wielu ekspertów, w tym logopedzi, sposób odżywiania i
                        rodzaj spożywanych pokarmów mają bezpośredni wpływ na
                        rozwój narządów artykulacyjnych, takich jak język,
                        wargi, szczęka czy żuchwa. Twarde, wymagające gryzienia
                        i żucia pokarmy, wspomagają trening mięśni niezbędnych
                        do artykulacji. Dietetyk dziecięcy może pomóc dobrać
                        dietę, która będzie wspierać rozwój tych struktur.
                      </li>
                      <li>
                        <b>Poprawa nawyków żywieniowych:</b> Nieprawidłowe
                        nawyki żywieniowe, takie jak ciągłe korzystanie z
                        butelek zamiast nauka picia z kubka, mogą negatywnie
                        wpłynąć na rozwój mowy u dzieci. Dietetyk dziecięcy może
                        doradzić, jak stopniowo wprowadzać zmiany w sposobie
                        odżywiania, aby wspomagały one leczenie logopedyczne.
                      </li>
                      <li>
                        <b>Wsparcie sensoryczne:</b> Niektóre dzieci z
                        trudnościami w zakresie mowy mogą również doświadczać
                        problemów sensorycznych, w tym oporu przed nowymi
                        teksturami czy smakami pokarmów. Dietetyk dziecięcy może
                        współpracować z logopedą i rodzicami, aby pomóc dziecku
                        stopniowo przyzwyczajać się do różnorodnych pokarmów, co
                        może mieć pozytywny wpływ nie tylko na rozwój mowy, ale
                        również na ogólny rozwój sensoryczny.
                      </li>
                      <li>
                        <b>Indywidualne potrzeby żywieniowe:</b> Każde dziecko
                        jest inne i może mieć indywidualne potrzeby żywieniowe,
                        wynikające na przykład z alergii pokarmowych,
                        nietolerancji czy innych stanów zdrowotnych. Dietetyk
                        dziecięcy może pomóc dostosować dietę dziecka w taki
                        sposób, aby nie tylko wspierała ona jego rozwój mowy,
                        ale również ogólny stan zdrowia.
                      </li>
                      <li>
                        Włączenie dietetyka dziecięcego do procesu leczenia
                        logopedycznego pozwala na całościowe podejście do
                        zdrowia i rozwoju dziecka. Poprzez skoordynowaną
                        współpracę specjalistów, rodzice mogą uzyskać wsparcie
                        nie tylko w zakresie mowy, ale także w kwestiach
                        żywieniowych, co ma kluczowe znaczenie dla zdrowia i
                        dobrego samopoczucia każdego dziecka.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Ortodonta dziecięcy w leczeniu logopedycznym u dzieci
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        Kiedy myślimy o pracy logopedy, skupiamy się przede
                        wszystkim na rozwoju i korygowaniu mowy oraz funkcji
                        artykulacyjnych. Jednak w wielu przypadkach, dla pełnej
                        skuteczności terapii logopedycznej, niezbędna jest
                        współpraca z innymi specjalistami, w tym z ortodontą.
                        Jakie są powody tej multidyscyplinarnej współpracy?
                      </li>
                      <li>
                        <b>Strukturalne podstawy prawidłowej artykulacji:</b>{" "}
                        Logopeda pracujący nad korekcją mowy i funkcji
                        artykulacyjnych często napotyka na bariery, które mają
                        podłoże strukturalne. Wady zgryzu czy nieprawidłowości w
                        budowie szczęk mogą znacząco utrudniać lub nawet
                        uniemożliwiać osiągnięcie celów terapii logopedycznej. W
                        takich przypadkach interwencja ortodontyczna może być
                        kluczowa dla umożliwienia prawidłowej pracy narządów
                        artykulacyjnych.
                      </li>
                      <li>
                        <b>Nieprawidłowe funkcje a struktura szczęk:</b>{" "}
                        Logopeda identyfikuje nieprawidłowości takie jak
                        nieprawidłowy typ połykania, nieszczelność warg, czy
                        oddychanie przez usta, które nie tylko wpływają na mowę,
                        ale również mogą przyczyniać się do powstawania wad
                        zgryzu. Współpraca z ortodontą umożliwia nie tylko
                        leczenie istniejących wad, ale także zapobieganie
                        dalszym nieprawidłowościom.
                      </li>
                      <li>
                        <b>Współpraca w diagnozie i planowaniu terapii:</b>{" "}
                        Zrozumienie zależności między strukturą a funkcją jest
                        kluczowe dla skutecznego leczenia. Logopeda,
                        współpracując z ortodontą, może lepiej zrozumieć
                        indywidualne przypadki pacjentów, co pozwala na
                        precyzyjniejsze planowanie terapii logopedycznej oraz
                        dostosowanie jej do możliwości strukturalnych pacjenta
                        po interwencji ortodontycznej.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  Umów wizytę u Logopedy
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <img
                  src="/assets/subhero3.jpg"
                  loading="lazy"
                  alt="dziecko ubierające maskę"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia dla dzieci z&nbsp;Integracji sensorycznej
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Integracja sensoryczna to kluczowy proces, pomagający dzieciom
                prawidłowo przetwarzać informacje zmysłowe. Zajęcia z terapii
                sensorycznej skierowane są do dzieci z trudnościami w tej
                dziedzinie, oferując szereg ćwiczeń i zabaw terapeutycznych.
                Celem jest wsparcie rozwoju motorycznego, poznawczego i
                społeczno-emocjonalnego, co przekłada się na lepsze
                funkcjonowanie dziecka w codziennym życiu. Terapia jest
                szczególnie korzystna dla dzieci z zaburzeniami rozwojowymi,
                takimi jak autyzm czy ADHD.
              </p>
              <Link
                href={"/diagnoza_si"}
                className=" text-slate-800 flex justify-start"
              >
                <div className=" w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  Dowiedz się więcej o Integracji Sensorycznej{" "}
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <img
                  src="/assets/dietetykDziecięcy.png"
                  loading="lazy"
                  alt="dziecko ubierające maskę"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dietetyk dziecięcy
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Rola dietetyka dziecięcego w życiu naszych pociech jest
                nieoceniona, szczególnie w obliczu rosnącej liczby przypadków
                nadwagi i otyłości wśród najmłodszych. Specjalista ten nie tylko
                tworzy zbilansowane i dostosowane do indywidualnych potrzeb
                jadłospisy, ale również edukuje i wspiera całą rodzinę w
                budowaniu zdrowych nawyków żywieniowych{" "}
              </p>{" "}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Jak może pomóc dietetyk dziecięcy
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        <b>Ocena stanu zdrowia i rozwoju dziecka:</b>Dietetyk
                        przeprowadza szczegółową analizę, oceniając masę ciała,
                        wzrost oraz ogólną budowę ciała dziecka w kontekście
                        jego wieku i etapu rozwoju. To pozwala na wczesne
                        wykrycie ewentualnych odchyleń i szybkie podjęcie
                        odpowiednich kroków.
                      </li>
                      <li>
                        <b>Analiza zachowań żywieniowych:</b> Zrozumienie, jakie
                        nawyki żywieniowe dziecko już posiada, pozwala
                        dietetykowi na identyfikację obszarów do poprawy.
                        Rozpoznanie niezdrowych wzorców jest kluczowe dla
                        opracowania skutecznego planu działania.
                      </li>
                      <li>
                        <b>Szczegółowa analiza składników odżywczych:</b>{" "}
                        Dietetyk bada, jakie składniki pokarmowe są obecne w
                        diecie dziecka, ocenia ich ilości i wpływ na zdrowie.
                        Dzięki temu możliwe jest skomponowanie jadłospisu, który
                        zaspokoi wszystkie potrzeby żywieniowe dziecka,
                        jednocześnie edukując rodziców o znaczeniu
                        poszczególnych składników w żywieniu.
                      </li>
                      <li>
                        <b>Wsparcie w zakresie aktywności fizycznej:</b> Oprócz
                        diety, aktywność fizyczna jest kluczowym elementem
                        zdrowego stylu życia. Dietetyk może zalecić odpowiednie
                        formy ruchu, dostosowane do wieku i możliwości dziecka,
                        wspierając w ten sposób jego ogólny rozwój i dobre
                        samopoczucie.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Dlaczego warto skorzystać z pomocy dietetyka dziecięcego
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        <b>Edukacja:</b> Rodzice otrzymują cenną wiedzę na temat
                        zdrowego odżywiania, co pomaga w kształtowaniu dobrych
                        nawyków żywieniowych w całej rodzinie.
                      </li>
                      <li>
                        <b>Zapobieganie chorobom:</b> Prawidłowo zbilansowana
                        dieta może zapobiegać wielu chorobom związanym z
                        nieprawidłowym odżywianiem, takim jak otyłość, cukrzyca
                        typu 2 czy choroby serca.
                      </li>
                      <li>
                        <b>Wsparcie emocjonalne:</b> Dzieci, które mają problemy
                        związane z jedzeniem, czy to ze względu na nadwagę,
                        alergie, czy inne stany zdrowia, mogą odczuwać lęk i
                        frustrację. Dietetyk dziecięcy nie tylko pomaga w
                        rozwiązaniu tych problemów, ale również oferuje wsparcie
                        emocjonalne, co ma ogromne znaczenie dla samopoczucia
                        dziecka.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  Umów wizytę u dietetyka dziecięcego
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Obrazek */}
            <div className="mb-4 md:mb-0">
              <div className="w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <img
                  src="/assets/ortodontaDzieciecy.png"
                  loading="lazy"
                  alt="dziecko ubierające maskę"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tekst informacyjny */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Ortodonta dziecięcy
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Ortodonta dziecięcy pełni kluczową rolę w zapewnieniu
                prawidłowego rozwoju zębów i szczęki u dzieci, co ma istotny
                wpływ na ich zdrowie ogólne, wygląd oraz samopoczucie. Oto jak
                ortodonta dziecięcy może pomóc i dlaczego jego wizyta może być
                niezbędna:
              </p>{" "}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Jak ortodonta dziecięcy może pomóc:
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        <b>Wczesne wykrywanie problemów ortodontycznych:</b>{" "}
                        Ortodonta dziecięcy jest w stanie zidentyfikować
                        problemy z układem zębowo-szczękowym na wczesnym etapie,
                        nawet gdy dziecko ma jeszcze mieszaninę zębów mlecznych
                        i stałych. Wczesne wykrycie pozwala na zaplanowanie
                        najskuteczniejszej terapii.
                      </li>
                      <li>
                        <b>Planowanie leczenia:</b> Po dokładnym zbadaniu stanu
                        uzębienia dziecka, ortodonta może zaproponować plan
                        leczenia, który może obejmować aparaty ortodontyczne,
                        ekspandery szczęki, a w niektórych przypadkach nawet
                        wczesne interwencje chirurgiczne, aby skorygować
                        problemy z rosnącymi zębami i szczęką.
                      </li>
                      <li>
                        <b>Prewencja długoterminowych problemów:</b> Wczesna
                        interwencja ortodontyczna może zapobiegać poważniejszym
                        problemom w przyszłości, takim jak zniekształcenia
                        szczęki, niewłaściwe zgryzanie czy trudności z mówieniem
                        i jedzeniem.
                      </li>
                      <li>
                        <b>Wsparcie w rozwoju mowy i żucia:</b> Prawidłowo
                        ustawione zęby i szczęka są kluczowe dla rozwoju mowy i
                        efektywnego żucia. Ortodonta dziecięcy może pomóc w
                        zapewnieniu, że dziecko będzie mogło mówić i jeść
                        komfortowo.
                      </li>
                      <li>
                        <b>Estetyka i pewność siebie:</b> Proste zęby i
                        harmonijny uśmiech mają znaczący wpływ na samoocenę
                        dziecka. Leczenie ortodontyczne może znacząco poprawić
                        wygląd dziecka, co przekłada się na jego pewność siebie
                        i relacje z rówieśnikami.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Dlaczego warto skorzystać z pomocy ortodonty dziecięcego
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className=" space-y-3">
                      <li>
                        <b>Wczesna diagnoza:</b> Regularne wizyty u ortodonty
                        dziecięcego pozwalają na wczesną diagnozę i leczenie, co
                        może skrócić czas trwania terapii i jej skuteczność.
                      </li>
                      <li>
                        <b>Specjalistyczna opieka:</b> Ortodonci dziecięcy
                        specjalizują się w pracy z małymi pacjentami, co
                        oznacza, że posiadają nie tylko specjalistyczną wiedzę,
                        ale również umiejętności w nawiązywaniu kontaktu z
                        dziećmi i sprawianiu, by wizyty były jak najmniej
                        stresujące.
                      </li>
                      <li>
                        <b>Zapobieganie przyszłym problemom:</b> egularna opieka
                        ortodontyczna może zapobiegać wielu problemom
                        zdrowotnym, w tym bólom głowy, trudnościom w żuciu i
                        mówieniu oraz problemom związanych z higieną jamy
                        ustnej.
                      </li>
                      <li>
                        <b>Wsparcie w higienie jamy ustnej:</b> Ortodonta
                        dziecięcy edukuje dzieci i ich rodziców na temat
                        odpowiedniej higieny jamy ustnej, co jest szczególnie
                        ważne w przypadku dzieci noszących aparaty
                        ortodontyczne.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href={"/Kontakt"}
                className=" text-slate-800 flex justify-start"
              >
                <div className="mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3">
                  Umów wizytę u ortodonty dziecięcego
                  <FaRegArrowAltCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AlertDemo />
    </div>
  );
};

export default Dzieci;
