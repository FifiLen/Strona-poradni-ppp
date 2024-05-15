import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { AlertDemo } from "/components/Alert";
import { CardFooter } from "../../../components/ui/card";
import Link from "next/link";

const Hipoterapia = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Hipoterapia - Terapia z udziałem koni
          </h2>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/hipoterapia.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="hipoterapia session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Hipoterapia
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Hipoterapia, nazywana również terapią wspomaganą udziałem koni,
                jest formą terapii wykorzystującą interakcję z tymi pięknymi i
                łagodnymi zwierzętami do celów rehabilitacyjnych oraz
                rozwojowych. Hipoterapia jest nieoceniona przy leczeniu osób z
                dysfunkcjami fizycznymi, emocjonalnymi oraz rozwojowymi. W
                świecie koni możesz przełamać lęki i pokonać własne słabości
                dzięki przebywaniu w towarzystwie koni, obcowanie z nimi,
                dotykanie, a także poruszanie się na końskim grzebiecie. <br />
                <br />
                Hipoterapia opiera się na wykorzystaniu ruchu konia jako
                „przedmiotu” terapeutycznego. Koń, poprzez swój rytmiczny i
                powtarzalny ruch, imituje ludzki chód, co stymuluje odpowiedzi
                na ów ruch w ciele jeźdźca. Osoba biorąca udział w terapii
                siedzi na koniu, a to wymaga od niej stabilizacji tułowia oraz
                zachowania równowagi, to z kolei aktywuje wiele grup
                mięśniowych. Terapia odbywa się pod nadzorem wykwalifikowanego
                terapeuty hipoterapii, który dostosowuje zajęcia do
                indywidualnych potrzeb pacjenta, nadzorując zarówno
                bezpieczeństwo, jak i skuteczność terapii.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Koń uniwersalnym stanowiskiem terapeutycznym
                  </AccordionTrigger>
                  <AccordionContent>
                    Koń może zastępować materac (szeroki zad), terapeutyczną
                    pitkę, lub wałek (kłoda), klin (szyja), bądź drabinkę do
                    podciągania (grzywa). Idąc stępem wprowadza pacjenta
                    leżącego na nim na brzuchu – w ruchy zbliżone do pełzania,
                    pacjenta opartego na łokciach i kolanach – w ruchy zbliżone
                    do czworakowania, pacjenta siedzącego – w ruchy zbliżone do
                    chodzenia. Nie ma innego “przyrządu”, który byłby tak
                    uniwersalny. Siedząc na koniu łatwiej opanować pojęcia
                    przestrzenne, schemat własnego ciała, nauczyć się liczyć do
                    czterech (patrz nogi konia), wymawiać trudne głoski i
                    wyrazy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Koń zmniejsza spastyczność mięśni
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-left mb-6">
                      Uszkodzenie ośrodkowego układu nerwowego może spowodować
                      wzmożone napięcie mięśni (spastyczność), szczególnie
                      kończyn górnych i dolnych. Podstawowym warunkiem
                      usprawniania jest obniżenie spastyczności. Podczas
                      hipoterapii dzieje się to automatycznie i jest możliwe
                      dzięki:
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-3xl font-semibold text-green-500" />
                      rozgrzaniu mięśni (temperatura ciała konia jest wyższa od
                      temperatury ciała ludzkiego),
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className="text-3xl font-semibold text-green-500" />
                      rytmicznemu kołysaniu w stępie,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-3xl font-semibold text-green-500" />
                      przeciwstawnym skrętom biodra-barki (dysocjacji)
                      spowodowanym ruchem konia,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-3xl font-semibold text-green-500" />
                      ułożeniu kończyn dolnych w trójzgięciu i odwiedzeniu
                      podczas dosiadania konia.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Informational Text */}
            <div className="mx-6 md:ml-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Sesja terapeutyczna
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                W trakcie sesji terapeuta instruuje jak reagować na ruchy konia.
                Terapia może obejmować pozycje na koniu - siedzenie przodem,
                tyłem czy nawet leżenie aby stymulować grupy mięśniowe.
                Terapeuta stosuje ćwiczenia integracji sensorycznej oraz
                motorycznej, takie jak łapanie piłki czy wykonywanie określonych
                zadań rąk podczas jazdy.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Sesje terapeutyczne mogą również odbywać się „przy koniu” zanim
                pacjent nabierze pewności siebie i swobody w relacji z tym
                łagodny ale dużym zwierzęciem.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="/assets/hipoterapia.mp4"
                  title="Hipoterapia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/hipoterapia2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="child in hipoterapia"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Koń pobudza zmysły
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Dotyk końskiej sierści, łaskotanie grzywy, rozmaitość kształtów,
                odgłos kroków, przyjazne parskanie i mile kojarzony zapach
                stymulują zmysły dotyku, słuchu, wzroku i węchu. Towarzyszy temu
                ciągłe wytrącanie z równowagi i konieczność jej natychmiastowego
                odnajdywania, jeżeli nie chcemy zbyt prędko rozstać się z tym
                bogactwem wrażeń. Czucie głębokie (proprioceptywne) jest
                stymulowane przez nieustające przeciwstawne bodźce dopływające z
                mięśni, ścięgien i stawów całego ciała. Wszystko to niezwykle
                rozwija zaburzoną zdolność równoczesnego odbierania bodźców i
                ich kojarzenia. Dzięki temu kształtuje się poczucie własnego
                ciała i orientacji przestrzennej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-10">
        <div className="max-w-7xl mx-auto">
          {" "}
          <h2 className="text-4xl md:text-4xl text-left font-semibold mb-8 font-display">
            Korzyści z Hipoterapii
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-10">
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Stymulacja sensoryczna i motoryczna</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ruch konia przekazuje uczestnikowi zajęć bodźce sensoryczne,
                    które pomagają w procesie integracji sensorycznej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Poprawa propriocepcji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jazda na koniu pomaga poprawić świadomość położenia własnego
                    ciała, co jest kluczowe w rehabilitacji wielu schorzeń
                    neurologicznych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Zwiększenie zakresu ruchu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z ograniczeniami w poruszaniu się mogą doświadczać
                    poprawy w zakresie ruchu stawów o elastyczności mięśni.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Kompleksowe podejście terapeutyczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Hipoterapia jest kompleksowym podejściem terapeutycznym,
                    które może przynieść znaczące korzyści dla osób z różnymi
                    potrzebami i ograniczeniami, stając się ważnym elementem ich
                    procesu rehabilitacji lub rozwoju osobistego.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Psychologiczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Zwiększenie poczucia własnej wartości i niezależności:
                    sukcesy w terapii mogą znacząco wpłynąć na samoocenę
                    uczestnika zajęć.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Redukcja lęku i depresji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Interakcje z koniem oraz terapeutycznym środowiskiem
                    przynoszą ulgę w objawach lęku i depresji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Rozwój umiejętności komunikacyjnych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Praca z koniem i terapeutami wymaga i wspiera rozwijanie
                    umiejętności werbalnych i niewerbalnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Budowanie relacji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pacjent rozwija specjalną więź z koniem, co może poprawić
                    jego zdolność do budowania relacji z innymi ludźmi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className=" items-center flex-col md:flex-row">
            {/* Informational Text */}
            <div className=" flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-8 font-display">
                Wskazania do hipoterapii
              </h2>
              <h4 className="text-2xl md:text-2xl text-left font-semibold font-display">
                Dzieci
              </h4>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Zespoły neurologiczne</AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Mózgowe porażenie dziecięce: kontrola głowy i czynna
                      pozycja siedząca.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po urazach czaszkowo-mózgowych.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Minimalne uszkodzenia mózgu (ADHD).
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Choroby mięśni min. 3 w skali Lovetta.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Dzieci niedowidzące i niewidome.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Choroby psychiczne.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Zespoły ortopedyczne</AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Wady postawy.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Skoliozy I stopnia wg Coba.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po amputacji i wady rozwojowe kończyn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Inne</AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Zespoły genetyczne, np. Zespół Down`a (z obowiązkowym
                      zdjęciem rtg – bocznym i czynnościowym odcinka szyjnego
                      kręgosłupa).
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Przepukliny oponowo-rdzeniowe, w zależności od wysokości
                      uszkodzenia, obrazu klinicznego, współwystępowania
                      wodogłowia.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Zespoły psychologiczne: zaburzenia emocjonalne,
                      upośledzenia umysłowe, niedostosowanie społeczne.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h4 className="text-2xl md:text-2xl text-left font-semibold font-display">
                      Dorośli
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stwardnienie rozsiane.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po udarze.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po urazach czaszkowo-mózgowych.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Uzależnienia.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Patologie społeczne.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h4 className="text-2xl md:text-2xl text-left font-semibold font-display">
                      Przeciwwskazania do hipoterapii
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      uczulenie na sierść, pot lub zapach konia,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      niewygojone rany,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      nietolerancja formy leczenia przez pacjenta, np.
                      niepohamowany lęk,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      schorzenia okulistyczne – wymagana konsultacja,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      pogorszenie stanu w zespołach neurologicznych, stanach po
                      urazach czaszkowo-mózgowych, ADHD, chorobach mięśni,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      brak kontroli głowy w rozwoju motorycznym,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      podwyższona temperatura,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      ostre choroby infekcyjne.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      padaczka,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      upośledzenia umysłowe w stopniu głębokim,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      zaburzenia mineralizacji kości (osteoporoza),
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      utrwalone deformacje i zniekształcenia, przykurcze,
                      ograniczenia zakresu ruchu kostno-stawowego, np.
                      zwichnięcia w stawach biodrowych.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl text-left font-semibold mb-8 font-display">
            Dlaczego konie?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-10">
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Koń daje wrażenie chodu ludzkiego</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Trójwymiarowy ruch grzbietu końskiego w stępie przekazywany
                    miednicy jeźdźca jest identyczny z ruchami miednicy
                    prawidłowo kroczącego człowieka. W tym samym czasie barki i
                    luźno zwisające kończyny dolne również zachowują się tak,
                    jak u idącego człowieka. Daje to możliwość nauki chodzenia
                    “bez chodzenia”. Hipoterapia może stanowić pierwszy etap tej
                    nauki, bądź stać się jej przełomowym momentem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Koń hamuje przetrwałe odruchy postawy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nieprawidłowe, mimowolne odruchy towarzyszące niektórym
                    postaciom mózgowego porażenia dziecięcego utrudniają
                    usprawnianie. Hipoterapia stwarza możliwość stopniowego
                    eliminowania tych automatyzmów dzięki:
                    <ul>
                      <li>łagodnym, kołyszącym ruchom w stępie,</li>
                      <li>
                        dysocjacji biodra – barki oraz trójzgięciu i odwiedzeniu
                        kończyn dolnych,
                      </li>
                      <li>
                        unikaniu drażnienia pewnych okolic ciała (np. podeszwy
                        stopy – jazda bez strzemion), unikaniu pewnych ruchów i
                        ułożeń dzięki przestrzeganiu zasady symetrycznego
                        dosiadu, spokojnemu i wyciszającemu prowadzeniu terapii.
                      </li>
                    </ul>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>
                    Koń przywraca zaburzoną symetrię mięśni tułowia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Łagodne, rytmiczne, równomierne kołysanie w stępie, na
                    przemian napina i rozluźnia mięśnie posturalne prawej i
                    lewej strony ciała. Mięśnie napięte i przykurczone ulegają
                    stopniowemu rozluźnieniu i rozciągnięciu. Mięśnie słabszej
                    wiotkiej strony ulegają wzmocnieniu. Dzięki temu po pewnym
                    okresie jazdy stępem w prawidłowym dosiadzie dochodzi do
                    symetrycznej równowagi mięśniowej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Koń koryguje postawę ciała</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Konieczność utrzymania prawidłowego dosiadu zmusza do
                    aktywnego prostowania się. Wzmocnieniu ulegają mięśnie
                    grzbietu, brzucha i obręczy biodrowej. Prowadzi to do
                    zmniejszenia przodopochylenia miednicy. Dzięki wzmocnieniu
                    mięśni kształtuje się nowa, prawidłowa postawa ciała.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>
                    Koń zapobiega przykurczom i ograniczeniom ruchomości w
                    stawach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Wspomniany łańcuch ruchów “grzbiet konia – miednica –
                    kręgosłup – barki, kończyny jeźdźca” uruchamia rytmicznie i
                    łagodnie kolejno wszystkie mięśnie i stawy. Hipoterapia i
                    jazda konna zmniejsza przede wszystkim przykurcze
                    przywodzicieli ud i ograniczenia ruchomości obręczy
                    biodrowej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Koń zwiększa możliwości lokomocyjne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby niepełnosprawne cierpią na ogół z powodu ograniczonych
                    możliwości ruchowych. Siedząc na koniu, popędzając go pracą
                    bioder, kręgosłupa – odbierają wrażenie prawidłowego chodu i
                    mogą go ćwiczyć. Koń oddaje do dyspozycji osoby
                    niepełnosprawnej swoje cztery, zdrowe nogi stwarzając tym
                    samym nieograniczone możliwości lokomocyjne. Takie
                    przeszkody jak odległość, nierówność terenu, piasek czy woda
                    przestają istnieć. Jest to przeżycie piękne i niezapomniane.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Koń może usprawniać bardzo łagodnie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jest to możliwe dzięki jego specyficznej budowie i łagodnemu
                    oddziaływaniu ruchu konia w stępie. W hipoterapii istnieje
                    cały szereg odpowiednich ułożeń, podporów i technik
                    asekuracji, regulujących stopień uruchamiania , wysiłku i
                    bodźcowania organizmu. Dzięki temu hipoterapię można
                    zaoferować nawet pacjentom ze znacznymi deficytami
                    fizycznymi i psychicznymi.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Koń stanowi źródło bodźców równoważnych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Hipoterapia daje nieograniczone możliwości stopniowania i
                    różnicowania bodźców równoważnych. Dzięki przyspieszeniom
                    poziomym i pionowym: kołysaniu, zmianom kierunku jazd,
                    zatrzymaniu się. ruszaniu, przyspieszaniu i zwalnianiu tempa
                    jazdy, zastosowaniu specjalnych ułożeń, odpowiednich ćwiczeń
                    i zabaw – ruch konia staje się potężnym generatorem bodźców
                    równoważnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Koń uaktywnia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rytmiczne pobudzające ruchy towarzyszące jeździe konnej
                    wzmagają wydzielanie hormonów, (szczególnie adrenaliny)
                    stymulujących układ wegetatywny. Następuje wyraźny wzrost
                    aktywności ruchowej, koncentracji uwagi i dobrego
                    samopoczucia. Ma to szczególne znaczenie w terapii osób
                    niepełnosprawnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>
                    Koń usprawnia pracę organów wewnętrznych
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzięki stymulacji układu hormonalnego i wegetatywnego ,
                    jazda konna poprawia krążenie, oddychanie, pracę jelit a
                    nawet pracę układu odpornościowego. Działanie to jest
                    szczególnie aktywne podczas jazdy stępem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Koń mobilizuje i nie nudzi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Koń Żywy i reagujący na otoczenie wymaga od osoby
                    niepełnosprawnej aktywności, nie pozwala jej na pozostanie
                    biernym, jak to bywa w niektórych innych formach terapii.
                    Osoby niepełnosprawne, szczególnie dzieci poddawane żmudnemu
                    i systematycznemu usprawnianiu często ulegają zniechęceniu i
                    nie chcą współpracować z terapeutą. Problemu tego nie
                    obserwujemy podczas zajęć z hipoterapii. Tutaj zaangażowanie
                    pacjenta w terapię jest olbrzymie i nieprzemijające. Trud
                    usprawniania staje się prawie niezauważalny, a sama terapia
                    przez swoją atrakcyjność jest jednocześnie nagrodą. Te
                    pozytywne emocje udaje się niekiedy przenieść na zajęcia
                    odbywające się przed lub po hipoterapii.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Koń uczy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Podczas zajęć z hipoterapii pacjent dzięki aktywizacji i
                    pozytywnemu nastawieniu do współpracy z terapeutą może
                    opanować szereg umiejętności i pojęć. Koń jest pomocny w
                    pracy pedagoga specjalnego, psychologa, logopedy. Obcowanie
                    z koniem i jego otoczeniem nie tylko wzbogaca wiedzę
                    pacjenta o świecie, ale uczy go również samodzielności,
                    odpowiedzialności i współpracy z innymi.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Koń relaksuje</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kontakt z koniem, poddanie się jego łagodnym, kołyszącym
                    ruchom sprzyja relaksowi i odprężeniu. Świat widziany z
                    końskiego grzbietu jest większy i piękniejszy. Obcowanie z
                    tym dużym, imponującym, przyjacielskim zwierzęciem ma wpływ
                    na równowagę emocjonalną i powoduje osłabienie reakcji
                    nerwicowych.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Image */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/hipoterapia3.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="hipoterapia session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Na co wpływa hipoterapia?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Kodowanie w mózgu prawidłowego wzorca chodu. Podczas ruchu konia
                w stępie na miednicę siedzącego prawidłowo pacjenta, przenoszony
                jest wzorzec ruchowy, odpowiadający kolejnym fazom chodu
                zdrowego człowieka. Częstotliwość przekazywanych pacjentowi
                trójwymiarowych impulsów, pochodzących z grzbietu końskiego,
                waha się od 90 do 110 na minutę.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Normalizację napięcia mięśniowego, niezbędną do nauki
                prawidłowego, czynnego ruchu. Sprzyja temu prawidłowa pozycja
                przyjmowana przez jeźdźca podczas jazdy, rytmiczny ruch jego
                ciała, naprzemienne rozluźnianie i napinanie mięśni oraz
                temperatura konia, która jest o około 1 stopień wyższa od
                temperatury człowieka.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Doskonalenie równowagi, koordynacji, orientacji w przestrzeni
                oraz poczucia rytmu. Dla dziecka nie poruszającego się
                samodzielnie, jazda na koniu (płynny, skoordynowany
                trójwymiarowy ruch) pozwala na uzyskanie świadomości położenia w
                przestrzeni własnego ciała, a tym samym zdobywanie doświadczenia
                ruchu w przestrzeni.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Poprawę stanu psychicznego pacjenta. Poprzez kontakt z żywym
                zwierzęciem dziecko zyskuje nowego przyjaciela; poznaje jego
                imię, uczy się współżycia z inną żywą istotą. Koń jest większy
                od pacjenta, ale jest mu posłuszny, co pozwala dziecku na wzrost
                odwagi, poczucia sukcesu, a tym samym własnej wartości. Zajęcia,
                w których dziecko czynnie uczestniczy, wpływają na wzrost
                koncentracji, samokontroli, pobudzają inicjatywę, dają lepsze
                zrozumienie własnych możliwości i potrzeb. Jeżeli hipoterapia
                jest prowadzona fachowo, zajęcia odbierane są jako zabawa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Informational Text */}
            <div className="mx-6 md:ml-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zamiast materaca czy piłki
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Koń może zastąpić materac (szeroki zad), piłkę, wałek, drabinę
                do podciągania (grzywa). Dla dziecka ciekawsze jest schylanie
                się do ucha konia, klepanie go po łopatce czy kładzenie się na
                plecach na końskim zadzie niż ćwiczenia w sali. Dla niego to
                zabawa, dla rehabilitanta ćwiczenia fizykoterapeutyczne.
                Niektórzy zaczynają od rehabilitacyjnych ćwiczeń, a później tak
                zakochują się w koniach, że zaczynają jeździć indywidualnie.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Kontakt z koniem, ze zwierzęciem pięknym, dużym, imponującym,
                tajemniczym, a jednocześnie przyjaznym i chętnie współpracującym
                pozwala na poprawę poczucia własnej wartości kształtowanie
                poczucia sprawstwa (bycia sprawcą działań) oraz osiąganie coraz
                większej samodzielności przełamywanie lęku i oporów przed
                kontaktem z otoczeniem społecznym, zwiększenie motywacji do
                nawiązywania bliższego kontaktu i poprawy komunikacji ze
                światem, poprawa zachowań społecznych kształtowanie wrażliwości,
                odpowiedzialności, opiekuńczości i innych pożądanych zachowań
                społecznych.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="/assets/hipoterapia2.mp4"
                  title="Hipoterapia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Dołącz do naszych zajęć hipoterapii</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nasze sesje hipoterapii to doskonała okazja do rozwijania
              umiejętności psychospołecznych, poznawania nowych pasji i
              spędzania czasu w twórczy sposób. Zapraszamy do zapoznania się z
              naszą ofertą i dołączenia do zajęć, które są dostępne przez cały
              rok, z ofertą specjalną na wakacje.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Kontakt"}
              className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
            >
              Skorzystaj z hipoterapi
              <FaCircleArrowRight className="rotate-[-45deg]" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <AlertDemo />
    </div>
  );
};

export default Hipoterapia;
