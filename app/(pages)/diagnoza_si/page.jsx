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

const TerapiaSI = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Terapia SI&nbsp;- Integracja Sensoryczna
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
                  src="/assets/diagnozasi.mp4"
                  title="Terapia SI Video"
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
                Terapia SI
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Na co dzień rzadko zastanawiamy się nad olbrzymią pracą naszego
                umysłu wykonywaną w celu odbioru, przesyłu, uporządkowania
                i&nbsp;wykorzystania informacji płynących z&nbsp;narządów
                zmysłu. Układ nerwowy człowieka w&nbsp;każdej sekundzie
                bombardowany jest milionami impulsów nerwowych niosących
                informację o&nbsp;tym, co dzieje się z&nbsp;naszym ciałem
                oraz&nbsp;otoczeniem, w&nbsp;którym się znajdujemy.
                W&nbsp;ułamku sekundy informacje te muszą zostać zarejestrowane,
                ocenione pod&nbsp;względem ważności, wyciszone lub
                zintensyfikowane. Niezwykle istotne jest również połączenie
                informacji odbieranych różnymi zmysłami w&nbsp;jedną całość. Gdy
                bodźce sensoryczne nie&nbsp;są właściwie opracowywane przez
                układ nerwowy, pojawia się chaos informacyjny, który skutkuje
                niejednokrotnie trudnościami w&nbsp;harmonijnym rozwoju
                psychofizycznym dziecka, niepokojem, nieodpowiednim zachowaniem
                oraz&nbsp;obniżoną zdolnością do&nbsp;uczenia się.
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
                Nie tylko 5 zmysłów
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Wpływ na&nbsp;efektywną pracę układu nerwowego mają
                nie&nbsp;tylko informacje pochodzące ze zmysłu wzroku, słuchu,
                dotyku czy smaku, ale również ze zmysłu przedsionkowego,
                dostarczającego informacji o&nbsp;ruchu człowieka,
                oraz&nbsp;zmysłu czucia proprioceptywnego, odpowiedzialnego
                za&nbsp;rejestrowanie zmian w&nbsp;pozycji ciała.
                Z&nbsp;działania tych ostatnich na&nbsp;co dzień nie zdajemy
                sobie sprawy, a&nbsp;to właśnie propriocepcja i&nbsp;zmysł
                przedsionkowy, łącznie ze zmysłem dotyku, stanowią punkt
                odniesienia do właściwego uporządkowania innych informacji
                sensorycznych. Zmysł przedsionkowy jest tym, który rozwija się
                najwcześniej, bo&nbsp;już w&nbsp;życiu płodowym człowieka.
                Kołyszący ruch doświadczany podczas poruszania się przyszłej
                mamy jest pierwszym treningiem integracji sensorycznej maluszka.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/diagnozasi.mp4"
                  title="Terapia SI Video"
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
            {/* Informational Text */}
            <div className="flex flex-col justify-center items-start mx-6">
              <h2 className="text-4xl text-left font-semibold mb-6 font-display">
                W labiryncie zmysłów
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Zaburzenie przetwarzania informacji płynących ze zmysłów
                doprowadza do różnych dysfunkcji - od&nbsp;zmniejszonej
                sprawności fizycznej po&nbsp;zaburzenia zachowania
                i&nbsp;uczenia się. Wśród najczęstszych objawów zaburzeń SI
                wymienia się nadmierną lub&nbsp;niedostateczną wrażliwość na
                bodźce dotykowe, słuchowe czy&nbsp;ruchowe, wyższy niż
                przeciętny lub&nbsp;obniżony poziom aktywności ruchowej,
                problemy z&nbsp;koordynacją, impulsywność czy trudności
                w&nbsp;nauce. Zaburzenia SI bardzo często powodują duży niepokój
                u&nbsp;niemowląt i&nbsp;dzieci starszych, pojawiają się problemy
                ze snem, wybiórczość pokarmowa, rozchwianie emocjonalne,
                trudności w&nbsp;komunikacji werbalnej. Mówi się, że&nbsp;dzieci
                z poważnymi dysfunkcjami integracji sensorycznej czują się
                ciągle jak na&nbsp;karuzeli pędzącej w&nbsp;takt głośnej muzyki,
                oświetlonej milionem świateł, na&nbsp;której nie&nbsp;potrafią
                utrzymać równowagi. W&nbsp;konsekwencji ich zachowanie odbiega
                od oczekiwań społecznych, trudno im spełnić wymagania szkolne,
                a&nbsp;nawet pokonać „kroki milowe” w&nbsp;rozwoju
                psychofizycznym. Dzieciom z&nbsp;zaburzeniami SI przykleja się
                często łatkę niegrzecznych, nadpobudliwych lub&nbsp;mniej
                zdolnych. Z&nbsp;pomocą przychodzi diagnoza i&nbsp;terapia SI.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/diagnozasi.mp4"
                  title="Terapia SI Video"
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
      {/* Section 1 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/diagnozasi.mp4"
                  title="Terapia SI Video"
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
                Terapia SI - terapia inna niż wszystkie
              </h2>
              <p className="text-left mb-6">
                Terapia integracji sensorycznej polega na ćwiczeniach,
                w&nbsp;których dziecko doświadcza zróżnicowanych bodźców
                sensorycznych podczas ruchu, rozwiązując jednocześnie proste
                zadania logiczne lub kreujące spostrzegawczość. Aktywność ta,
                prowadzona w&nbsp;atmosferze zabawy, w sposób atrakcyjny
                i&nbsp;budzący zaangażowanie dziecka, prowadzi do
                przeorganizowania pracy mózgu i&nbsp;lepszego porządkowania
                i&nbsp;wykorzystywania informacji płynących ze zmysłów. Terapia
                SI różni się od wielu innych działań rewalidacyjnych, gdyż sama
                w sobie nie&nbsp;uczy konkretnych umiejętności, takich jak
                liczenie, zapamiętywanie, rysowanie czy różnicowanie dźwięków,
                a&nbsp;jedynie stymuluje układ nerwowy do właściwej pracy, tak
                aby sprawna i&nbsp;precyzyjna nauka stała się możliwa. Terapia
                SI przygotowuje grunt pod przyszłe wyzwania, którym sprostać
                musi dziecko w&nbsp;trybie nauki szkolnej.
              </p>

              <p className="text-left mb-6">
                Terapia jest tym skuteczniejsza, im większe zaangażowanie
                wzbudzimy w działaniu ćwiczącego. Zajęcia integracji
                sensorycznej powinny zawsze odpowiadać potrzebom
                i&nbsp;aktualnym możliwościom dziecka. Trudność
                i&nbsp;intensywność ćwiczeń jest stopniowana, a&nbsp;postępy
                monitorowane przez terapeutę. W&nbsp;terapii SI kluczową rolę
                odgrywa jednak powtarzalność i&nbsp;regularność ćwiczeń zarówno
                na&nbsp;sali SI, jak i&nbsp;w&nbsp;domu.
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
                Magia sali integracji sensorycznej
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas zajęć integracji sensorycznej eksplorujemy otoczenie,
                dostarczając młodym umysłom odpowiednich bodźców zmysłowych.
                Tworząc ścieżki i&nbsp;pomoce sensoryczne, bazujemy
                na&nbsp;materiałach naturalnych. Stymulujemy zmysł dotyku,
                organizując zabawę w&nbsp;r&oacute;żnorodnych substancjach,
                takich jak piasek, ryż, groch, orzechy, kisiel, pianka, masa
                solna, slime, ciecz newtonowska. Dostarczamy wrażeń związanych
                z&nbsp;temperaturą, odkrywając zimno metalowych przedmiotów,
                kamieni czy lodu, a&nbsp;także ciepło nagrzanych pestek
                czereśni.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Ćwiczymy zmysł słuchu, doświadczając dźwięków o różnej
                głośności, natężeniu, intensywności. Szukamy źródeł dźwięków,
                przeprowadzamy aktywny trening słuchowy. Stymulujemy zmysł
                przedsionkowy i&nbsp;propriocepcję, proponując aktywność ruchową
                dostosowaną do&nbsp;zdiagnozowanych potrzeb dzieci. Ćwiczenia
                odbywają się na równoważni lub&nbsp;huśtawkach, przynosząc
                doświadczenia w&nbsp;sposobie odbioru ruchu liniowego
                i&nbsp;obrotowego. Balansujemy na piłkach, platformach,
                deskorolkach, aby poczuć zmiany w&nbsp;ułożeniu ciała
                w&nbsp;przestrzeni.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Pokonujemy tory przeszkód, aby trenować umiejętność wyboru,
                planowania i&nbsp;wykonania precyzyjnego ruchu. Ćwiczymy
                koordynację ręka-oko, rzucając do&nbsp;celu. Uczymy się schematu
                własnego ciała, odczytywania sygnałów płynących z&nbsp;mięśni
                i&nbsp;ścięgien podczas przetaczania i&nbsp;przepychania
                ciężkich przedmiotów, „walki” z&nbsp;workiem treningowym,
                przeciągania liny.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Wszystkie te zabiegi przyczyniają się do usprawnienia odbioru,
                przesyłania i&nbsp;opracowania informacji przez układ nerwowy
                dziecka. W&nbsp;przypadku nadwrażliwości lub&nbsp;podwrażliwości
                sensorycznej dostosowana zostaje reakcja organizmu
                w&nbsp;stosunku do intensywności bodźca.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="/assets/diagnozasi.mp4"
                  title="Terapia SI Video"
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
                Kiedy na diagnozę, kiedy na terapię?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Zaburzenia integracji sensorycznej mogą przejawiać nawet
                najmłodsze niemowlęta, jednak ze względu na&nbsp;trudność
                w&nbsp;jednoznacznej ocenie przyczyn zachowań tak małego
                dziecka, diagnozę integracji sensorycznej przeprowadza się
                najwcześniej u&nbsp;dzieci, które ukończyły 12 miesiąc życia.
                Pełną diagnozę SI przeprowadza się u dzieci czteroletnich.
                Rodziców zainteresowanych uzyskaniem porady, jak dbać
                o&nbsp;prawidłowy rozwój integracji sensorycznej niemowlaka,
                zapraszamy na krótki instruktaż ukazujący techniki ćwiczeń
                integracji sensorycznej podczas codziennej aktywności.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Terapia integracji sensorycznej jest najbardziej skuteczna
                w&nbsp;przypadku dzieci przed ukończeniem 7 roku życia.
                W&nbsp;tym czasie plastyczność układu nerwowego jest największa,
                tym&nbsp;samym stymulowanie rozwoju połączeń nerwowych przebiega
                najsprawniej. Zwykle terapię integracji sensorycznej zaleca się
                dzieciom do 12 roku życia. Warto też zauważyć, że w&nbsp;każdym
                wieku możliwa jest praca nad sprawnym działaniem układu
                nerwowego ze&nbsp;względu na możliwości naprawcze organizmu.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Z&nbsp;zaburzeń integracji sensorycznej nie wyrasta się.
                Trudności w&nbsp;przetwarzaniu sensorycznym nie&nbsp;znikają
                samoistnie bez właściwej stymulacji układu nerwowego, raczej
                pogłębiają się lub&nbsp;zmienia się sposób manifestacji problemu
                przez organizm człowieka, dlatego warto jak najwcześniej zadbać
                o&nbsp;prawidłowy rozwój dziecka.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl text-left font-semibold mb-8 font-display">
            Diagnoza SI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-blue-500 bg-blue-100">
              <CardHeader>
                <CardTitle>Zebranie wywiadu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Diagnoza SI składa się z&nbsp;kilku etapów. Pierwszy
                  z&nbsp;nich obejmuje zebranie wywiadu dotyczącego okoliczności
                  porodu, przebytych przez dziecko chorób, wykrytych dysfunkcji
                  czy trudności rozwojowych.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-500 bg-green-100">
              <CardHeader>
                <CardTitle>
                  Kwestionariusz wywiadu sensomotorycznego dziecka
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Drugi etap to&nbsp;wypełnienie przez rodzica Kwestionariusza
                  Wywiadu Sensomotorycznego Dziecka. W&nbsp;kwestionariuszu
                  znajdą się pytania dotyczące poszczególnych etapów rozwoju
                  dziecka, preferencji podczas zabawy, reakcji na bodźce,
                  aktualnych umiejętności, intensywności reakcji emocjonalnych,
                  otwartości w&nbsp;kontaktach międzyludzkich itp.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-500 bg-blue-100">
              <CardHeader>
                <CardTitle>Testy i obserwacje</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Trzeci etap to&nbsp;testy w&nbsp;postaci ćwiczeń, prób
                  i&nbsp;obserwacji dziecka podczas swobodnej aktywności
                  na&nbsp;sali integracji sensorycznej.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-500 bg-green-100">
              <CardHeader>
                <CardTitle>Analiza wyników</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Po&nbsp;przeprowadzeniu badań diagnosta dokonuje analizy
                  wyników kwestionariuszy i&nbsp;prób testowych. Analiza
                  prowadzi do postawienia diagnozy i&nbsp;rozpoznania
                  charakterystycznych zaburzeń integracji sensorycznej.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alert Demo Section */}
      <AlertDemo />
    </div>
  );
};

export default TerapiaSI;
