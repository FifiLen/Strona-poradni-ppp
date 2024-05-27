"use client";
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

const Logopedia = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Logopedia jako fundament rozwoju
          </h2>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/1.mp4"
                  title="Logopedia Video"
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
                Logopedia jako fundament rozwoju
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Terapia logopedyczna to działania mające głęboki wpływ
                na&nbsp;rozwój&nbsp; dziecka. Specjalista z&nbsp;zakresu
                logopedii stanowi nieocenione&nbsp; wsparcie dla&nbsp;rodzica
                na&nbsp;drodze rozwoju mowy dziecka począwszy od&nbsp; okresu
                niemowlęcego. Dzieje się tak, gdyż nawet sposób&nbsp;
                wykonywania codziennych czynności podczas opieki
                nad&nbsp;małym&nbsp; dzieckiem, ma olbrzymi wpływ na&nbsp;jego
                potencjał komunikacyjny w&nbsp; przyszłości. Prawidłowy rozwój
                mięśni posturalnych, rozkład&nbsp; napięcia mięśniowego,
                właściwy sposób oddychania oraz&nbsp; przyjmowania pokarmów,
                stymulujące zabawy oraz&nbsp;kontakt wzrokowy&nbsp;
                z&nbsp;opiekunem stanowią fundament rozwoju mowy
                i&nbsp;wielowymiarowej&nbsp; komunikacji z&nbsp;otoczeniem.
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
                Instruktaż logopedyczny
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Instruktaż logopedyczny dla&nbsp;rodziców niemowląt jest
                wspaniałą&nbsp; okazją do&nbsp;zapoznania się z&nbsp;dobrymi
                praktykami w&nbsp;zakresie&nbsp; czynności pielęgnacyjnych
                i&nbsp;opiekuńczych, zabaw wspierających&nbsp; rozwój
                oraz&nbsp;czynnikami ryzyka późniejszych trudności&nbsp;
                logopedycznych. Rozmowa z&nbsp;logopedą pomaga rozwiać
                wątpliwości&nbsp; dotyczące właściwego tempa rozszerzania diety
                maluszka,&nbsp; dostarczy informacji jak ćwiczyć mięśnie twarzy
                i&nbsp;języka dla&nbsp; usprawnienia aparatu mowy, doradzi
                kiedy, jak i&nbsp;czy używać&nbsp; smoczka. Logopeda
                zademonstruje, w&nbsp;jaki sposób nosić dziecko,&nbsp;
                aby&nbsp;wspomagać stabilizację głowy i&nbsp;ciała umożliwiając
                dziecku&nbsp; wizualną eksplorację otoczenia.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas spotkania rodzic może&nbsp; nauczyć się, jak inicjować
                interakcję z&nbsp;dzieckiem, dbać o&nbsp; kontakt wzrokowy,
                zapewniać dziecku możliwość obserwowania&nbsp; twarzy rodzica
                podczas mowy. Wszystko to daje rodzicowi pewność,&nbsp; że czas
                spędzony z&nbsp;dzieckiem służy jego rozwojowi.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/2.mp4"
                  title="Logopedia Video"
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
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/3.mp4"
                  title="Logopedia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>

            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                Pierwsze symptomy trudności logopedycznych
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Coraz częściej dzieci w&nbsp;wieku niemowlęcym, przedszkolnym
                a&nbsp;nawet&nbsp; wczesnoszkolnym borykają się
                z&nbsp;trudnościami o&nbsp;charakterze&nbsp; logopedycznym.
                Niejednokrotnie początkowo rodzice nie zdają&nbsp; sobie sprawy
                z&nbsp;narastającego problemu. Sygnałem nadchodzących&nbsp;
                problemów logopedycznych u&nbsp;najmłodszych dzieci są ot
                choćby&nbsp; problemy z&nbsp;karmieniem, brak interakcji
                społecznych, takie jak&nbsp; uśmiechanie się, nawiązywanie
                kontaktu wzrokowego czy reakcje na&nbsp; dźwięki i&nbsp;głosy.
                Niepokojące jest również nieprawidłowe napięcie&nbsp; mięśniowe
                niemowlaka i&nbsp;opóźniony rozwój motoryczny.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Uwagę&nbsp; powinien zwrócić sposób oddychania przez usta,
                oraz&nbsp;często&nbsp; otwarta buzia i&nbsp;wysunięty język.
                Początkowe trudności w&nbsp; późniejszym czasie, ok. 6-9
                miesiąca życia, objawiają się&nbsp; brakiem gaworzenia, czyli
                powtarzaniem sylab takich jak „ba-ba”,&nbsp; „da-da”, czy
                opóźnionym pojawianiem się pierwszych słów, po&nbsp; pierwszym
                roku życia. Rodzice mogą obserwować również trudności&nbsp;
                z&nbsp;rozumieniem poleceń i&nbsp;reagowaniem przez dziecko
                na&nbsp;własne&nbsp; imię.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;dalszej perspektywie narasta problem
                ze&nbsp;wzbogacaniem&nbsp; słownictwa, nazywaniem przedmiotów
                i&nbsp;czynności, niewyraźnym&nbsp; wypowiadaniem niektórych
                lub&nbsp;większości głosek, aż&nbsp;po mowę&nbsp; niezrozumiałą
                dla&nbsp;otoczenia. Pojawia się niejednokrotnie&nbsp;
                wybiórczość pokarmowa. W&nbsp;toku nauki szkolnej dzieci
                przejawiają&nbsp; trudności w&nbsp;opanowaniu czytania
                i&nbsp;poprawnego pisania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                Na styku logopedii i&nbsp;psychologii
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Problemy natury czysto logopedycznej są przyczyną problemów
                w&nbsp; funkcjonowaniu społecznym, prawidłowym poczuciu własnej
                wartości&nbsp; oraz&nbsp;właściwym uczuciu zdolności
                i&nbsp;sprawczości. Dzieci zdające&nbsp; sobie sprawę
                z&nbsp;istnienia swojej wady wymowy często czują się&nbsp;
                zawstydzone w&nbsp;towarzystwie rówieśników, rozwija się
                u&nbsp;nich&nbsp; nieśmiałość w&nbsp;nawiązywaniu kontaktów
                koleżeńskich, a&nbsp;trudności w&nbsp; komunikacji sprawiają, że
                dzieci te popadają we&nbsp;frustrację.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/4.mp4"
                  title="Logopedia Video"
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
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/1.mp4"
                  title="Logopedia Video"
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
                Terapia logopedyczna nie musi być nudna
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Zajęcia logopedyczne poprawiają wymowę, płynność mowy oraz&nbsp;
                komunikację językową dzieci. Ćwiczenia na&nbsp;zajęciach zwykle
                różnią&nbsp; się w&nbsp;zależności od&nbsp;indywidualnych
                potrzeb pacjenta, ale&nbsp;w&nbsp;każdym&nbsp; przypadku mogą
                stanowić nie tylko dodatkowy obowiązek, ale&nbsp; również
                doskonałą zabawę. Wszystko zależy od&nbsp;pomysłowości i&nbsp;
                kreatywności terapeuty oraz&nbsp;jego charyzmy
                i&nbsp;doświadczenia w&nbsp; pracy z&nbsp;najmłodszymi.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas zajęć logopedycznych w&nbsp;Poradni&nbsp;
                Psychologiczno-Pedagogicznej MAGNOLIA wykonujemy
                w&nbsp;ramach&nbsp;terapii oddechowej ćwiczenia w&nbsp;postaci
                zabawy bańkami mydlanymi,&nbsp;zawodów w&nbsp;dmuchaniu piłki
                do&nbsp;celu, zdmuchiwania piórek. Ćwiczymy&nbsp;przed
                nadchodzącymi urodzinami zdmuchiwanie świeczek oraz&nbsp;
                nadmuchiwanie baloników. Dmuchanie przez słomkę do&nbsp;kubeczka
                z&nbsp;wodą z&nbsp;jednej strony zapewnia naukę długiego
                i&nbsp;stabilnego&nbsp;wydechu z&nbsp;drugiej jest niecodzienną
                zabawą.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <p className="text-gray-700 text-base text-left mb-6">
                Atrakcyjnym&nbsp;wizualnie i&nbsp;bardzo motywującym ćwiczeniem
                jest dmuchanie i&nbsp;wprawianie w&nbsp;ruch wiatraczków. Wraz
                z&nbsp;dziećmi trenujemy&nbsp;artykulację naśladując głosy
                zwierząt. Śpiewamy proste piosenki&nbsp;i&nbsp;recitujemy
                rymowanki pomagające w&nbsp;ćwiczeniu rytmu, intonacji i&nbsp;
                wyraźnej artykulacji.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;ramach ćwiczeń świadomej kontroli&nbsp;artykulatorów
                przeglądamy się w&nbsp;lustrze i&nbsp;robimy śmieszne miny&nbsp;
                wykonując różne ruchy ust i&nbsp;języka, np. szeroki
                uśmiech,&nbsp;wysuwanie języka, robienie dzióbka. Czas
                na&nbsp;ćwiczeniach upływa&nbsp;szybko przynosząc wiele radości.
                W&nbsp;swojej pracy z&nbsp;dzieckiem&nbsp; wykorzystujemy wiele
                atrakcyjnych pomocy dydaktycznych. Stałymi&nbsp;gośćmi zajęć są
                pacynki, wraz z&nbsp;którymi dzieci wymawiają nowe&nbsp;dźwięki
                i&nbsp;głosy.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/2.mp4"
                  title="Logopedia Video"
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
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;zajęciach towarzyszą nam żywe zwierzęta, jak&nbsp;
                króliczki miniaturki, które ośmielają i&nbsp;otwierają dzieci
                na&nbsp;podjęcie próby kontaktu werbalnego. Pracując
                nad&nbsp;płynnością&nbsp;wypowiedzi maluchów stosujemy techniki
                powolnego mówienia i&nbsp;używania pauz, uczymy technik
                relaksacyjnych i&nbsp;kontrolowania&nbsp;napięcia mięśniowego.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Na&nbsp;późniejszych etapach terapii rozwijamy&nbsp;słownictwo
                i&nbsp;umiejętność budowy zdań grając w&nbsp;historie&nbsp;
                niedokończone. To tylko niektóre przykłady pracy naszych&nbsp;
                logopedów. Każdorazowo terapeuta dostosowuje program ćwiczeń
                do&nbsp;indywidualnych potrzeb pacjenta, jego wieku, rodzaju
                zaburzenia&nbsp;oraz&nbsp;postępów w&nbsp;terapii. Regularność
                i&nbsp;systematyczność są&nbsp;kluczowe, dlatego często zadania
                do&nbsp;wykonywania w&nbsp;domu są&nbsp;częścią terapii. Ważne
                jest, aby&nbsp;każde z&nbsp;tych ćwiczeń zarówno w&nbsp;domu,
                jak i&nbsp;na&nbsp;zajęciach, było przeprowadzane w&nbsp;formie
                zabawy, z&nbsp;dużą ilością pozytywnej interakcji
                i&nbsp;pochwał, co&nbsp;bardzo motywuje&nbsp;dzieci
                do&nbsp;pracy i&nbsp;pozwala im&nbsp;czuć się komfortowo.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/3.mp4"
                  title="Logopedia Video"
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
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <h2 className="text-4xl text-left font-semibold mb-8 font-display">
                Diagnoza logopedyczna
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Diagnoza logopedyczna dziecka to&nbsp;proces, który obejmuje
                kilka&nbsp; etapów i&nbsp;różne metody oceny, aby&nbsp;dokładnie
                zrozumieć problemy mowy&nbsp; i&nbsp;języka. Zazwyczaj diagnoza
                logopedyczna dziecka obejmuje wywiad&nbsp; z&nbsp;rodzicami
                lub&nbsp;opiekunami dotyczący historii rozwojowej dziecka&nbsp;
                oraz&nbsp;aktualnych problemów dotyczących mowy. Drugim
                niezbędnym&nbsp; elementem diagnozy jest obserwacja sposobu
                komunikacji dziecka w&nbsp; naturalnych sytuacjach takich
                jak&nbsp;zabawa, swobodna rozmowa,&nbsp; interakcja
                z&nbsp;rodzicami.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas wizyty logopeda ocenia artkulację&nbsp; dziecka, czyli
                sposób wymawiania poszczególnych dźwięków, sylab,&nbsp; słów
                i&nbsp;zdań. Sprawdza zasób słownictwa malucha, zarówno
                biernego&nbsp; (słowa, które rozumie), jak&nbsp;i&nbsp;czynnego
                (słowa, które używa).&nbsp; Analizuje, czy dziecko używa
                struktur gramatycznych adekwatnych do&nbsp; swojego wieku.
                Logopeda wykonuje testy sprawdzające, czy dziecko&nbsp;
                prawidłowo rozumie polecenia, pytania oraz&nbsp;bardziej
                złożone&nbsp; wypowiedzi. Bada budowę i&nbsp;funkcjonowanie
                narządów mowy oraz&nbsp; testuje ich koordynację, siłę
                i&nbsp;precyzję ruchów.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/4.mp4"
                  title="Logopedia Video"
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
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;końcu ocenia&nbsp; prawidłowość odruchów ssania,
                połykania i&nbsp;żucia, a&nbsp;także sposobu&nbsp; oddychania.
                Logopeda może zasugerować również&nbsp;konieczność&nbsp;
                wykonania badania słuchu, aby&nbsp;wykluczyć problemy
                ze&nbsp;słuchem jako&nbsp; przyczynę problemów logopedycznych.
                Nie bez&nbsp;znaczenia jest też&nbsp; ocena przetwarzania
                słuchowego, a&nbsp;więc sprawdzenie, jak&nbsp;dziecko&nbsp;
                przetwarza i&nbsp;interpretuje dźwięki mowy.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Po&nbsp;zebraniu wywiadu i&nbsp; wykonaniu badań i&nbsp;testów
                logopeda analizuje wszystkie zebrane&nbsp; informacje,
                aby&nbsp;zrozumieć naturę i&nbsp;zakres problemów dziecka.
                Na&nbsp; podstawie analizy specjalista formułuje diagnozę,
                określając&nbsp; rodzaj i&nbsp;stopień zaburzeń mowy, języka
                i&nbsp;komunikacji. Diagnoza zaś&nbsp; stanowi podstawę
                do&nbsp;opracowania planu terapii.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/5.mp4"
                  title="Logopedia Video"
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
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/1.mp4"
                  title="Logopedia Video"
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
                Terapia logopedyczna nie musi być nudna
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Zajęcia logopedyczne poprawiają wymowę, płynność mowy oraz&nbsp;
                komunikację językową dzieci. Ćwiczenia na&nbsp;zajęciach zwykle
                różnią&nbsp; się w&nbsp;zależności od&nbsp;indywidualnych
                potrzeb pacjenta, ale&nbsp;w&nbsp;każdym&nbsp; przypadku mogą
                stanowić nie tylko dodatkowy obowiązek, ale&nbsp; również
                doskonałą zabawę. Wszystko zależy od&nbsp;pomysłowości i&nbsp;
                kreatywności terapeuty oraz&nbsp;jego charyzmy
                i&nbsp;doświadczenia w&nbsp; pracy z&nbsp;najmłodszymi.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas zajęć logopedycznych w&nbsp;Poradni&nbsp;
                Psychologiczno-Pedagogicznej MAGNOLIA wykonujemy
                w&nbsp;ramach&nbsp;terapii oddechowej ćwiczenia w&nbsp;postaci
                zabawy bańkami mydlanymi,&nbsp;zawodów w&nbsp;dmuchaniu piłki
                do&nbsp;celu, zdmuchiwania piórek. Ćwiczymy&nbsp;przed
                nadchodzącymi urodzinami zdmuchiwanie świeczek oraz&nbsp;
                nadmuchiwanie baloników. Dmuchanie przez słomkę do&nbsp;kubeczka
                z&nbsp;wodą z&nbsp;jednej strony zapewnia naukę długiego
                i&nbsp;stabilnego&nbsp;wydechu z&nbsp;drugiej jest niecodzienną
                zabawą.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <p className="text-gray-700 text-base text-left mb-6">
                Atrakcyjnym&nbsp;wizualnie i&nbsp;bardzo motywującym ćwiczeniem
                jest dmuchanie i&nbsp;wprawianie w&nbsp;ruch wiatraczków. Wraz
                z&nbsp;dziećmi trenujemy&nbsp;artykulację naśladując głosy
                zwierząt. Śpiewamy proste piosenki&nbsp;i&nbsp;recitujemy
                rymowanki pomagające w&nbsp;ćwiczeniu rytmu, intonacji i&nbsp;
                wyraźnej artykulacji.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;ramach ćwiczeń świadomej kontroli&nbsp;artykulatorów
                przeglądamy się w&nbsp;lustrze i&nbsp;robimy śmieszne miny&nbsp;
                wykonując różne ruchy ust i&nbsp;języka, np. szeroki
                uśmiech,&nbsp;wysuwanie języka, robienie dzióbka. Czas
                na&nbsp;ćwiczeniach upływa&nbsp;szybko przynosząc wiele radości.
                W&nbsp;swojej pracy z&nbsp;dzieckiem&nbsp; wykorzystujemy wiele
                atrakcyjnych pomocy dydaktycznych. Stałymi&nbsp;gośćmi zajęć są
                pacynki, wraz z&nbsp;którymi dzieci wymawiają nowe&nbsp;dźwięki
                i&nbsp;głosy.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/2.mp4"
                  title="Logopedia Video"
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
            {/* Informational Text */}
            <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
              <p className="text-gray-700 text-base text-left mb-6">
                W&nbsp;zajęciach towarzyszą nam żywe zwierzęta, jak&nbsp;
                króliczki miniaturki, które ośmielają i&nbsp;otwierają dzieci
                na&nbsp;podjęcie próby kontaktu werbalnego. Pracując
                nad&nbsp;płynnością&nbsp;wypowiedzi maluchów stosujemy techniki
                powolnego mówienia i&nbsp;używania pauz, uczymy technik
                relaksacyjnych i&nbsp;kontrolowania&nbsp;napięcia mięśniowego.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Na&nbsp;późniejszych etapach terapii rozwijamy&nbsp;słownictwo
                i&nbsp;umiejętność budowy zdań grając w&nbsp;historie&nbsp;
                niedokończone. To tylko niektóre przykłady pracy naszych&nbsp;
                logopedów. Każdorazowo terapeuta dostosowuje program ćwiczeń
                do&nbsp;indywidualnych potrzeb pacjenta, jego wieku, rodzaju
                zaburzenia&nbsp;oraz&nbsp;postępów w&nbsp;terapii. Regularność
                i&nbsp;systematyczność są&nbsp;kluczowe, dlatego często zadania
                do&nbsp;wykonywania w&nbsp;domu są&nbsp;częścią terapii. Ważne
                jest, aby&nbsp;każde z&nbsp;tych ćwiczeń zarówno w&nbsp;domu,
                jak i&nbsp;na&nbsp;zajęciach, było przeprowadzane w&nbsp;formie
                zabawy, z&nbsp;dużą ilością pozytywnej interakcji
                i&nbsp;pochwał, co&nbsp;bardzo motywuje&nbsp;dzieci
                do&nbsp;pracy i&nbsp;pozwala im&nbsp;czuć się komfortowo.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/3.mp4"
                  title="Logopedia Video"
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

      {/* Galeria */}
      <section className="max-w-6xl hidden md:px-0 px-4 mx-auto mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tighter">
            Zobacz jak wyglądają nasze zajęcia logopedyczne
          </h2>
          <div className="grid grid-cols-1 row-span-2 md:grid-cols-3 gap-4 mx-auto">
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/vr.jpeg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                alt="Galeria obraz 1"
              />
            </div>
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/vr2.jpeg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                alt="Galeria obraz 2"
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/vrGrid.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/vrGrid2.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              />
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

      {/* Alert Demo Section */}
      <AlertDemo />
    </div>
  );
};

export default Logopedia;
