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
            Hipoterapia&nbsp;- Terapia z&nbsp;udziałem koni
          </h2>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/hipoterapia5.mp4"
                  title="Hipoterapia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Hipoterapia
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Hipoterapia, nazywana również terapią wspomaganą udziałem koni,
                jest formą terapii wykorzystującą interakcję z&nbsp;tymi
                pięknymi i&nbsp;łagodnymi zwierzętami do&nbsp;celów
                rehabilitacyjnych oraz&nbsp;rozwojowych. Hipoterapia jest
                nieoceniona przy leczeniu osób z&nbsp;dysfunkcjami fizycznymi,
                emocjonalnymi oraz&nbsp;rozwojowymi. W&nbsp;świecie koni możesz
                przełamać lęki i&nbsp;pokonać własne słabości dzięki przebywaniu
                w&nbsp;towarzystwie tych pięknych zwierząt, obcowanie
                z&nbsp;nimi, dotykanie, a&nbsp;także poruszanie się na&nbsp;ich
                grzebiecie. <br />
                <br />
                Hipoterapia opiera się na&nbsp;wykorzystaniu ruchu tego
                majestatycznego zwierzęcia jako „przedmiotu” terapeutycznego.
                Koń, poprzez swój rytmiczny i&nbsp;powtarzalny ruch, imituje
                ludzki chód, co&nbsp;stymuluje odpowiedzi na&nbsp;ów ruch
                w&nbsp;ciele jeźdźca. Osoba biorąca udział w&nbsp;terapii siedzi
                na&nbsp;koniu, co&nbsp;wymaga od&nbsp;niej stabilizacji tułowia
                oraz&nbsp;zachowania równowagi, to&nbsp;z&nbsp;kolei aktywuje
                wiele grup mięśniowych. Terapia odbywa się pod&nbsp;nadzorem
                wykwalifikowanego terapeuty hipoterapii, który dostosowuje
                zajęcia do&nbsp;indywidualnych potrzeb pacjenta, nadzorując
                zarówno bezpieczeństwo, jak i&nbsp;skuteczność terapii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                Potężne zwierzę może być „stanowiskiem” terapeutycznym
              </h2>

              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-xl font-semibold text-green-500" />
                Koń może zastępować materac (szeroki zad)
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-xl font-semibold text-green-500" />
                Terapeutyczną piłkę, lub&nbsp;wałek (kłoda)
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-xl font-semibold text-green-500" />
                Klin (szyja)
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-xl font-semibold text-green-500" />
                Drabinkę do&nbsp;podciągania (grzywa)
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-xl font-semibold text-green-500" />
                Drabinkę do&nbsp;podciągania (grzywa)
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Idąc stępem wprowadza pacjenta leżącego na&nbsp;nim
                na&nbsp;brzuchu – w&nbsp;ruchy zbliżone do&nbsp;pełzania.
                Pacjenta opartego na&nbsp;łokciach i&nbsp;kolanach –
                w&nbsp;ruchy zbliżone do&nbsp;czworakowania, pacjenta siedzącego
                – w&nbsp;ruchy zbliżone do&nbsp;chodzenia. Nie&nbsp;ma innego
                “przyrządu”, który byłby tak&nbsp;uniwersalny. Siedząc
                na&nbsp;koniu łatwiej opanować pojęcia przestrzenne, schemat
                własnego ciała, nauczyć się liczyć do&nbsp;czterech (patrz nogi
                konia), wymawiać trudne głoski oraz&nbsp;wyrazy.
              </p>
            </div>
            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/hipoterapia3.mp4"
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

      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/hipoterapia4.mp4"
                  title="Hipoterapia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>
            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6 md:ml-16">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                Koń zmniejsza spastyczność mięśni
              </h2>
              <p className="text-left mb-6">
                Uszkodzenie ośrodkowego układu nerwowego może spowodować
                wzmożone napięcie mięśni (spastyczność), szczególnie kończyn
                górnych i&nbsp;dolnych. Podstawowym warunkiem usprawniania jest
                obniżenie spastyczności. Podczas hipoterapii dzieje się to
                automatycznie i&nbsp;jest możliwe dzięki:
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-3xl font-semibold text-green-500" />
                rozgrzaniu mięśni (temperatura ciała konia jest wyższa
                od&nbsp;temperatury ciała ludzkiego),
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-2xl font-semibold text-green-500" />
                rytmicznemu kołysaniu w&nbsp;stępie,
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-3xl font-semibold text-green-500" />
                przeciwstawnym skrętom biodra-barki (dysocjacji) spowodowanym
                ruchem konia,
              </p>
              <p className="flex items-center gap-3 text-left mb-6">
                <GiCheckMark className="text-3xl font-semibold text-green-500" />
                ułożeniu kończyn dolnych w&nbsp;trójzgięciu i&nbsp;odwiedzeniu
                podczas dosiadania konia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                Sesja terapeutyczna
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;trakcie sesji hipoterapeuta instruuje jak reagować
                na&nbsp;ruchy konia. Terapia może obejmować pozycje
                na&nbsp;koniu - siedzenie przodem, tyłem czy&nbsp;nawet leżenie
                aby&nbsp;stymulować grupy mięśniowe. Terapeuta stosuje ćwiczenia
                integracji sensorycznej oraz&nbsp;motorycznej, takie jak:
                łapanie piłki czy&nbsp;wykonywanie określonych zadań rąk podczas
                jazdy.
              </p>

              <p className="text-gray-700 text-base text-left mb-6">
                Sesje terapeutyczne mogą odbywać się również „przy koniu” zanim
                pacjent nabierze pewności siebie i&nbsp;swobody w&nbsp;relacji
                z&nbsp;tym łagodnym ale&nbsp;dużym zwierzęciem.
              </p>
            </div>
            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
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

      <section className="mt-10 py-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className=" items-center flex-col md:flex-row">
            {/* Informational Text */}
            <div className=" flex-col justify-center items-center">
              <h2 className="text-4xl md:text-5xl text-left font-semibold mb-8 font-display text-green-900">
                Wskazania do&nbsp;hipoterapii
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
                      Mózgowe porażenie dziecięce: kontrola głowy i&nbsp;czynna
                      pozycja siedząca.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po&nbsp;urazach czaszkowo-mózgowych.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Minimalne uszkodzenia mózgu (ADHD).
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Choroby mięśni min.&nbsp;3 w&nbsp;skali Lovetta.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Dzieci niedowidzące i&nbsp;niewidome.
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
                      Skoliozy I&nbsp;stopnia wg&nbsp;Coba.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po&nbsp;amputacji i&nbsp;wady rozwojowe kończyn.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Inne</AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Zespoły genetyczne, np.&nbsp;Zespół Down`a
                      (z&nbsp;obowiązkowym zdjęciem rtg – bocznym
                      i&nbsp;czynnościowym odcinka szyjnego kręgosłupa).
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Przepukliny oponowo-rdzeniowe, w&nbsp;zależności
                      od&nbsp;wysokości uszkodzenia, obrazu klinicznego,
                      współwystępowania wodogłowia.
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
                      Stany po&nbsp;udarze.
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <GiCheckMark className=" text-2xl font-semibold text-green-500" />
                      Stany po&nbsp;urazach czaszkowo-mózgowych.
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
                    <h4 className="text-2xl md:text-2xl text-left text-red-700 font-semibold font-display">
                      Przeciwwskazania do&nbsp;hipoterapii
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      uczulenie na&nbsp;sierść, pot lub&nbsp;zapach konia,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      niewygojone rany,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      nietolerancja formy leczenia przez pacjenta,
                      np.&nbsp;niepohamowany lęk,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      schorzenia okulistyczne – wymagana konsultacja,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      pogorszenie stanu w&nbsp;zespołach neurologicznych,
                      stanach po&nbsp;urazach czaszkowo-mózgowych, ADHD,
                      chorobach mięśni,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      brak kontroli głowy w&nbsp;rozwoju motorycznym,
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
                      upośledzenia umysłowe w&nbsp;stopniu głębokim,
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      zaburzenia mineralizacji kości (osteoporoza),
                    </p>
                    <p className="flex items-center gap-3  text-left mb-6">
                      <IoMdClose className=" text-2xl font-semibold text-red-500" />
                      utrwalone deformacje i&nbsp;zniekształcenia, przykurcze,
                      ograniczenia zakresu ruchu kostno-stawowego,
                      np.&nbsp;zwichnięcia w&nbsp;stawach biodrowych.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                  src="/assets/hipoterapia.jpg"
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
                odgłos kroków, przyjazne parskanie i&nbsp;mile kojarzony zapach
                stymulują zmysły dotyku, słuchu, wzroku i&nbsp;węchu. Towarzyszy
                temu ciągłe wytrącanie z&nbsp;równoagi i&nbsp;konieczność jej
                natychmiastowego odnajdywania, jeżeli nie&nbsp;chcemy zbyt
                prędko rozstać się z&nbsp;tym bogactwem wrażeń. Czucie głębokie
                (proprioceptywne) jest stymulowane przez nieustające
                przeciwstawne bodźce dopływające z&nbsp;mięśni, ścięgien
                i&nbsp;stawów całego ciała. Wszystko to&nbsp;niezwykle rozwija
                zaburzoną zdolność równoczesnego odbierania bodźców i&nbsp;ich
                kojarzenia. Dzięki temu kształtuje się poczucie własnego ciała
                i&nbsp;orientacji przestrzennej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-10">
        <div className="max-w-7xl mx-auto">
          {" "}
          <h2 className="text-4xl md:text-4xl text-left font-semibold mb-8 font-display">
            Korzyści z&nbsp;Hipoterapii
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex gap-6 justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-10">
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>
                    Stymulacja sensoryczna i&nbsp;motoryczna
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ruch konia przekazuje uczestnikowi zajęć bodźce sensoryczne,
                    które&nbsp;pomagają w&nbsp;procesie integracji sensorycznej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Poprawa propriocepcji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jazda na&nbsp;koniu pomaga poprawić świadomość położenia
                    własnego ciała, co&nbsp;jest kluczowe w&nbsp;rehabilitacji
                    wielu schorzeń neurologicznych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Zwiększenie zakresu ruchu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby z&nbsp;ograniczeniami w&nbsp;poruszaniu się mogą
                    doświadczać poprawy w&nbsp;zakresie ruchu stawów
                    o&nbsp;elastyczności mięśni.
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
                    które może przynieść znaczące korzyści dla osób
                    z&nbsp;różnymi potrzebami i&nbsp;ograniczeniami, stając się
                    ważnym elementem ich procesu rehabilitacji lub&nbsp;rozwoju
                    osobistego.
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
                    Zwiększenie poczucia własnej wartości i&nbsp;niezależności:
                    sukcesy w&nbsp;terapii mogą znacząco wpłynąć
                    na&nbsp;samoocenę uczestnika zajęć.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Redukcja lęku i&nbsp;depresji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Interakcje z&nbsp;koniem oraz&nbsp;terapeutycznym
                    środowiskiem przynoszą ulgę w&nbsp;objawach lęku
                    i&nbsp;depresji.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-800 bg-green-100">
                <CardHeader>
                  <CardTitle>Rozwój umiejętności komunikacyjnych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Praca z&nbsp;koniem i&nbsp;terapeutami wymaga i&nbsp;wspiera
                    rozwijanie umiejętności werbalnych i&nbsp;niewerbalnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500 bg-blue-100">
                <CardHeader>
                  <CardTitle>Budowanie relacji</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pacjent rozwija specjalną więź z&nbsp;koniem, co&nbsp;może
                    poprawić jego zdolność do&nbsp;budowania relacji
                    z&nbsp;innymi ludźmi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
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
                  <CardTitle>Dają wrażenie chodu ludzkiego</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Trójwymiarowy ruch grzbietu końskiego w&nbsp;stępie
                    przekazywany miednicy jeźdźca jest identyczny z&nbsp;ruchami
                    miednicy prawidłowo kroczącego człowieka. W&nbsp;tym samym
                    czasie barki oraz&nbsp;luźno zwisające kończyny dolne
                    również zachowują się tak, jak u&nbsp;idącego człowieka.
                    Daje to&nbsp;możliwość nauki chodzenia “bez chodzenia”.
                    Hipoterapia może stanowić pierwszy etap tej nauki,
                    bądź&nbsp;stać się jej przełomowym momentem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Hamują rozwój wad postawy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nieprawidłowe, mimowolne odruchy towarzyszące niektórym
                    postaciom mózgowego porażenia dziecięcego utrudniają
                    usprawnianie. Hipoterapia stwarza możliwość stopniowego
                    eliminowania tych automatyzmów dzięki:
                    <ul className=" list-disc ml-5 space-y-2">
                      <li>łagodnym, kołyszącym ruchom w&nbsp;stępie,</li>
                      <li>
                        dysocjacji biodra – barki oraz&nbsp;trójzgięciu
                        i&nbsp;odwiedzeniu kończyn dolnych,
                      </li>
                      <li>
                        unikaniu drażnienia pewnych okolic ciała
                        (np.&nbsp;podeszwy stopy – jazda bez&nbsp;strzemion),
                        unikaniu pewnych ruchów i&nbsp;ułożeń dzięki
                        przestrzeganiu zasady symetrycznego dosiadu, spokojnemu
                        i&nbsp;wyciszającemu prowadzeniu terapii.
                      </li>
                    </ul>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>
                    Przywracają zaburzone w symetrii mięśnie tułowia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Łagodne, rytmiczne, równomierne kołysanie w&nbsp;stępie, na
                    przemian napina i&nbsp;rozluźnia mięśnie posturalne prawej
                    i&nbsp;lewej strony ciała. Mięśnie napięte
                    i&nbsp;przykurczone ulegają stopniowemu rozluźnieniu
                    i&nbsp;rozciągnięciu. Mięśnie słabszej wiotkiej strony
                    ulegają wzmocnieniu. Dzięki temu po&nbsp;pewnym okresie
                    jazdy stępem w&nbsp;prawidłowym dosiadzie dochodzi
                    do&nbsp;symetrycznej równowagi mięśniowej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Korygują postawę ciała</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Konieczność utrzymania prawidłowego dosiadu zmusza do
                    aktywnego prostowania się. Wzmocnieniu ulegają mięśnie
                    grzbietu, brzucha i&nbsp;obręczy biodrowej. Prowadzi
                    to&nbsp;do zmniejszenia przodopochylenia miednicy. Dzięki
                    wzmocnieniu mięśni kształtuje się nowa, prawidłowa postawa
                    ciała.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>
                    Zapobiegają przykurczom i&nbsp;ograniczeniom ruchomości
                    w&nbsp;stawach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Wspomniany łańcuch ruchów “grzbiet konia – miednica –
                    kręgosłup – barki, kończyny jeźdźca” uruchamia rytmicznie
                    i&nbsp;łagodnie kolejno wszystkie mięśnie i&nbsp;stawy.
                    Hipoterapia i&nbsp;jazda konna zmniejsza przede wszystkim
                    przykurcze przywodzicieli ud&nbsp;i&nbsp;ograniczenia
                    ruchomości obręczy biodrowej.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Zwiększają możliwości lokomocyjne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Osoby niepełnosprawne cierpią na&nbsp;ogół z&nbsp;powodu
                    ograniczonych możliwości ruchowych. Siedząc na&nbsp;koniu,
                    popędzając go&nbsp;pracą bioder, kręgosłupa – odbierają
                    wrażenie prawidłowego chodu i&nbsp;mogą go&nbsp;ćwiczyć. Koń
                    oddaje do&nbsp;dyspozycji osoby niepełnosprawnej swoje
                    cztery, zdrowe nogi stwarzając tym samym nieograniczone
                    możliwości lokomocyjne. Takie przeszkody jak odległość,
                    nierówność terenu, piasek czy&nbsp;woda przestają istnieć.
                    Jest to&nbsp;przeżycie piękne i&nbsp;niezapomniane.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-10">
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Łagodnie usprawniają ruchy człowieka</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Jest to&nbsp;możliwe dzięki jego specyficznej budowie
                    i&nbsp;łagodnemu oddziaływaniu ruchu konia w&nbsp;stępie.
                    W&nbsp;hipoterapii istnieje cały szereg odpowiednich ułożeń,
                    podporów i&nbsp;technik asekuracji, regulujących stopień
                    uruchamiania, wysiłku i&nbsp;bodźcowania organizmu. Dzięki
                    temu hipoterapię można zaoferować nawet pacjentom
                    ze&nbsp;znacznymi deficytami fizycznymi i&nbsp;psychicznymi.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Są źródłem bodźców równoważnych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Hipoterapia daje nieograniczone możliwości stopniowania
                    i&nbsp;różnicowania bodźców równoważnych. Dzięki
                    przyspieszeniom poziomym i&nbsp;pionowym: kołysaniu, zmianom
                    kierunku jazdy, zatrzymaniu się, ruszaniu, przyspieszaniu
                    i&nbsp;zwalnianiu tempa jazdy, zastosowaniu specjalnych
                    ułożeń, odpowiednich ćwiczeń i&nbsp;zabaw – ruch konia staje
                    się potężnym generatorem bodźców równoważnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Uaktywniają</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rytmiczne pobudzające ruchy towarzyszące jeździe konnej
                    wzmagają wydzielanie hormonów, (szczególnie adrenaliny)
                    stymulujących układ wegetatywny. Następuje wyraźny wzrost
                    aktywności ruchowej, koncentracji uwagi i&nbsp;dobrego
                    samopoczucia. Ma to&nbsp;szczególne znaczenie w&nbsp;terapii
                    osób niepełnosprawnych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Usprawniają pracę organów wewnętrznych</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Dzięki stymulacji układu hormonalnego i&nbsp;wegetatywnego,
                    jazda konna poprawia krążenie, oddychanie, pracę jelit
                    a&nbsp;nawet pracę układu odpornościowego. Działanie
                    to&nbsp;jest szczególnie aktywne podczas jazdy stępem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Mobilizują</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kontakt z&nbsp;koniem, poddanie się jego łagodnym,
                    kołyszącym ruchom sprzyja relaksowi i&nbsp;odprężeniu. Świat
                    widziany z&nbsp;końskiego grzbietu jest większy
                    i&nbsp;piękniejszy. Obcowanie z&nbsp;tym dużym, imponującym,
                    przyjacielskim zwierzęciem ma&nbsp;wpływ na&nbsp;równoagę
                    emocjonalną i&nbsp;powoduje osłabienie reakcji nerwicowych.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-lime-500 bg-lime-100">
                <CardHeader>
                  <CardTitle>Angażują w terapię</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Podczas zajęć z&nbsp;hipoterapii pacjent dzięki aktywizacji
                    i&nbsp;pozytywnemu nastawieniu do&nbsp;współpracy
                    z&nbsp;terapeutą może opanować szereg umiejętności
                    i&nbsp;pojęć. Koń jest pomocny w&nbsp;pracy pedagoga
                    specjalnego, psychologa, logopedy. Obcowanie z&nbsp;koniem
                    i&nbsp;jego otoczeniem nie&nbsp;tylko wzbogaca wiedzę
                    pacjenta o&nbsp;świecie, ale&nbsp;uczy go&nbsp;również
                    samodzielności, odpowiedzialności i&nbsp;współpracy
                    z&nbsp;innymi.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-500 bg-yellow-100">
                <CardHeader>
                  <CardTitle>Relaksują</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kontakt z&nbsp;koniem, poddanie się jego łagodnym,
                    kołyszącym ruchom sprzyja relaksowi i&nbsp;odprężeniu. Świat
                    widziany z&nbsp;końskiego grzbietu jest większy
                    i&nbsp;piękniejszy. Obcowanie z&nbsp;tym dużym, imponującym,
                    przyjacielskim zwierzęciem ma&nbsp;wpływ na&nbsp;równoagę
                    emocjonalną i&nbsp;powoduje osłabienie reakcji nerwicowych.
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
                Na&nbsp;co wpływa hipoterapia?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Kodowanie w&nbsp;mózgu prawidłowego wzorca chodu. Podczas ruchu
                konia w&nbsp;stępie na&nbsp;miednicę siedzącego prawidłowo
                pacjenta, przenoszony jest wzorzec ruchowy, odpowiadający
                kolejnym fazom chodu zdrowego człowieka. Częstotliwość
                przekazywanych pacjentowi trójwymiarowych impulsów, pochodzących
                z&nbsp;grzbietu końskiego, waha się od&nbsp;90 do&nbsp;110
                na&nbsp;minutę.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Normalizację napięcia mięśniowego, niezbędną do&nbsp;nauki
                prawidłowego, czynnego ruchu. Sprzyja temu prawidłowa pozycja
                przyjmowana przez jeźdźca podczas jazdy, rytmiczny ruch jego
                ciała, naprzemienne rozluźnianie i&nbsp;napinanie mięśni
                oraz&nbsp;temperatura konia, która jest o&nbsp;około
                1&nbsp;stopień wyższa od&nbsp;temperatury człowieka.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Doskonalenie równowagi, koordynacji, orientacji
                w&nbsp;przestrzeni oraz&nbsp;poczucia rytmu. Dla dziecka
                nie&nbsp;poruszającego się samodzielnie, jazda na&nbsp;koniu
                (płynny, skoordynowany trójwymiarowy ruch) pozwala
                na&nbsp;uzyskanie świadomości położenia w&nbsp;przestrzeni
                własnego ciała, a&nbsp;tym samym zdobywanie doświadczenia ruchu
                w&nbsp;przestrzeni.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Poprawę stanu psychicznego pacjenta. Poprzez kontakt
                z&nbsp;żywym zwierzęciem dziecko zyskuje nowego przyjaciela;
                poznaje jego imię, uczy się współżycia z&nbsp;inną żywą istotą.
                Koń jest większy od&nbsp;pacjenta, ale&nbsp;jest mu posłuszny,
                co&nbsp;pozwala dziecku na&nbsp;wzrost odwagi, poczucia sukcesu,
                a&nbsp;tym samym własnej wartości. Zajęcia, w&nbsp;których
                dziecko czynnie uczestniczy, wpływają na&nbsp;wzrost
                koncentracji, samokontroli, pobudzają inicjatywę, dają lepsze
                zrozumienie własnych możliwości i&nbsp;potrzeb. Jeżeli
                hipoterapia jest prowadzona fachowo, zajęcia odbierane są jako
                zabawa.
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
                Zamiast materaca czy&nbsp;piłki
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Koń może zastąpić materac (szeroki zad), piłkę, wałek, drabinę
                do&nbsp;podciągania (grzywa). Dla dziecka ciekawsze jest
                schylanie się do&nbsp;ucha konia, klepanie
                go&nbsp;po&nbsp;łopatce czy&nbsp;kładzenie się na&nbsp;plecach
                na&nbsp;końskim zadzie niż ćwiczenia w&nbsp;sali. Dla niego
                to&nbsp;zabawa, dla rehabilitanta ćwiczenia fizykoterapeutyczne.
                Niektórzy zaczynają od&nbsp;rehabilitacyjnych ćwiczeń,
                a&nbsp;później tak zakochują się w&nbsp;koniach,
                że&nbsp;zaczynają jeździć indywidualnie.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Kontakt z&nbsp;koniem, ze&nbsp;zwierzęciem pięknym, dużym,
                imponującym, tajemniczym, a&nbsp;jednocześnie przyjaznym
                i&nbsp;chętnie współpracującym pozwala na&nbsp;poprawę poczucia
                własnej wartości kształtowanie poczucia sprawstwa (bycia sprawcą
                działań) oraz&nbsp;osiąganie coraz większej samodzielności
                przełamywanie lęku i&nbsp;oporów przed kontaktem
                z&nbsp;otoczeniem społecznym, zwiększenie motywacji
                do&nbsp;nawiązywania bliższego kontaktu i&nbsp;poprawy
                komunikacji ze&nbsp;światem, poprawa zachowań społecznych
                kształtowanie wrażliwości, odpowiedzialności, opiekuńczości
                i&nbsp;innych pożądanych zachowań społecznych.
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

      <section className="mt-10 py-6 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl text-left font-semibold mb-8 font-display">
            Cennik
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-blue-500 bg-blue-100">
              <CardHeader>
                <CardTitle>Hipoterapia w ramach WWR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Hipoterapia w ramach zajęć WWR jest darmowa. Zapraszamy do
                  szkorzystania z naszej oferty darmowych zajęć WWR dla twojego
                  dziecka.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={"/WWRD"}
                  className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
                >
                  Jak zapisać dziecko na darmowe zajęcia WWR?
                  <FaCircleArrowRight className="rotate-[-45deg]" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-green-500 bg-green-100">
              <CardHeader>
                <CardTitle>Usługa komercyjna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Cena za komercyjną hipoterapię wynosi 100zł za 30 minut.
                  Skontaktuj się z nami, aby umówić się na sesję.
                </p>
                <p className="text-2xl font-semibold">100zł / 30 minut</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={"/WWRD"}
                  className="p-2 rounded-md border border-green-800 bg-green-300 flex items-center justify-center gap-2"
                >
                  Kontakt
                  <FaCircleArrowRight className="rotate-[-45deg]" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7
      <section className="max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Dołącz do&nbsp;naszych zajęć hipoterapii</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nasze sesje hipoterapii to&nbsp;doskonała okazja
              do&nbsp;rozwijania umiejętności psychospołecznych, poznawania
              nowych pasji i&nbsp;spędzania czasu w&nbsp;twórczy sposób.
              Zapraszamy do&nbsp;zapoznania się z&nbsp;naszą ofertą
              i&nbsp;dołączenia do&nbsp;zajęć, które są dostępne przez cały rok,
              z&nbsp;ofertą specjalną na&nbsp;wakacje.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Kontakt"}
              className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
            >
              Skorzystaj z&nbsp;hipoterapi
              <FaCircleArrowRight className="rotate-[-45deg]" />
            </Link>
          </CardFooter>
        </Card>
      </section> */}

      <AlertDemo />
    </div>
  );
};

export default Hipoterapia;
