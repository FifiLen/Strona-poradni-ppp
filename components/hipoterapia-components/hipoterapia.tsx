// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { useAccessibility } from "@/lib/providers/accessibility-context";
// import { GiCheckMark } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";
// import { FaCircleArrowRight } from "react-icons/fa6";
// import Link from "next/link";

// interface ServiceSection {
//   title: string;
//   description?: string;
//   imageSrc?: string;
//   imageAlt?: string;
//   accordionItems?: { title: string; content: string }[];
// }

// const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
//   title,
//   description,
//   imageSrc,
//   imageAlt,
//   accordionItems,
//   index,
// }) => {
//   const { fontSizeLevel, highContrast } = useAccessibility();
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [contentHeight, setContentHeight] = useState<number | null>(null);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (contentRef.current) {
//         setContentHeight(contentRef.current.offsetHeight);
//       }
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);

//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   const getFontSizeClass = (level: number) => {
//     const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
//     return sizes[level] || "text-base";
//   };

//   const getHeaderFontSizeClass = (level: number) => {
//     const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
//     return sizes[level] || "text-3xl";
//   };

//   const fontSizeClass = getFontSizeClass(fontSizeLevel);
//   const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

//   const isEven = index % 2 === 0;

//   return (
//     <section className="py-12 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-0">
//         <div
//           className={`flex flex-col lg:flex-row items-stretch ${
//             isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//           }`}
//         >
//           {imageSrc && (
//             <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//               <div
//                 className="relative w-full overflow-hidden rounded-2xl"
//                 style={{
//                   height: contentHeight ? `${contentHeight}px` : "500px",
//                 }}
//               >
//                 {imageSrc.endsWith(".mp4") ? (
//                   <video
//                     src={imageSrc}
//                     title={imageAlt}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     loop
//                     muted
//                     autoPlay
//                     controls={false}
//                   />
//                 ) : (
//                   <Image
//                     src={imageSrc}
//                     alt={imageAlt}
//                     fill
//                     style={{ objectFit: "cover" }}
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     priority={index === 0}
//                   />
//                 )}
//               </div>
//             </div>
//           )}
//           <div
//             ref={contentRef}
//             className={`w-full ${imageSrc ? "lg:w-1/2" : "lg:w-full"} ${
//               isEven ? "lg:pl-12" : "lg:pr-12"
//             } flex flex-col justify-center`}
//           >
//             <h2
//               className={`font-display mb-6 tracking-tight font-semibold text-left ${headerFontSizeClass}`}
//             >
//               {title}
//             </h2>
//             {description && (
//               <p
//                 className={`${
//                   highContrast ? "text-yellow-400" : "text-gray-700"
//                 } ${fontSizeClass} text-left mb-6`}
//               >
//                 {description}
//               </p>
//             )}
//             {accordionItems && (
//               <Accordion type="single" collapsible className="w-full mb-6">
//                 {accordionItems.map((item, idx) => (
//                   <AccordionItem key={idx} value={`item-${idx + 1}`}>
//                     <AccordionTrigger>{item.title}</AccordionTrigger>
//                     <AccordionContent>
//                       <p
//                         className={`${fontSizeClass} ${
//                           highContrast ? "text-yellow-400" : "text-gray-700"
//                         }`}
//                       >
//                         {item.content}
//                       </p>
//                     </AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default function HippotherapyComponent() {
//   const { fontSizeLevel, highContrast } = useAccessibility();

//   const getFontSizeClass = (level: number) => {
//     const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
//     return sizes[level] || "text-base";
//   };

//   const getHeaderFontSizeClass = (level: number) => {
//     const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
//     return sizes[level] || "text-3xl";
//   };

//   const fontSizeClass = getFontSizeClass(fontSizeLevel);
//   const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

//   const serviceSections: ServiceSection[] = [
//     {
//       title: "Hipoterapia",
//       description: `
// Hipoterapia, nazywana również terapią wspomaganą udziałem koni, jest formą terapii wykorzystującą interakcję z tymi pięknymi i łagodnymi zwierzętami do celów rehabilitacyjnych oraz rozwojowych. Hipoterapia jest nieoceniona przy leczeniu osób z dysfunkcjami fizycznymi, emocjonalnymi oraz rozwojowymi. W świecie koni możesz przełamać lęki i pokonać własne słabości dzięki przebywaniu w towarzystwie tych pięknych zwierząt, obcowanie z nimi, dotykanie, a także poruszanie się na ich grzebiecie.

// Hipoterapia opiera się na wykorzystaniu ruchu tego majestatycznego zwierzęcia jako „przedmiotu” terapeutycznego. Koń, poprzez swój rytmiczny i powtarzalny ruch, imituje ludzki chód, co stymuluje odpowiedzi na ów ruch w ciele jeźdźca. Osoba biorąca udział w terapii siedzi na koniu, co wymaga od niej stabilizacji tułowia oraz zachowania równowagi, to z kolei aktywuje wiele grup mięśniowych. Terapia odbywa się pod nadzorem wykwalifikowanego terapeuty hipoterapii, który dostosowuje zajęcia do indywidualnych potrzeb pacjenta, nadzorując zarówno bezpieczeństwo, jak i skuteczność terapii.
//       `,
//       imageSrc: "/assets/hipoterapia1.mp4",
//       imageAlt: "Hipoterapia Video",
//     },
//     {
//       title: "Potężne zwierzę może być „stanowiskiem” terapeutycznym",
//       description: `
// Koń może zastępować materac (szeroki zad), terapeutyczną piłkę, lub wałek (kłoda), klin (szyja), drabinkę do podciągania (grzywa). Idąc stępem wprowadza pacjenta leżącego na nim na brzuchu – w ruchy zbliżone do pełzania. Pacjenta opartego na łokciach i kolanach – w ruchy zbliżone do czworakowania, pacjenta siedzącego – w ruchy zbliżone do chodzenia. Nie ma innego “przyrządu”, który byłby tak uniwersalny.

// Siedząc na koniu łatwiej opanować pojęcia przestrzenne, schemat własnego ciała, nauczyć się liczyć do czterech (patrz nogi konia), wymawiać trudne głoski oraz wyrazy.
//       `,
//       imageSrc: "/assets/hipoterapiaFilm2.mp4",
//       imageAlt: "Hipoterapia Video",
//       accordionItems: [
//         {
//           title: "Korzyści z hipoterapii jako stanowiska terapeutycznego",
//           content: `
// - Koń zastępuje różne przyrządy terapeutyczne.
// - Ułatwia naukę pojęć przestrzennych i schematu ciała.
// - Wspomaga naukę liczenia i mowy.
//           `,
//         },
//       ],
//     },
//     {
//       title: "Koń zmniejsza spastyczność mięśni",
//       description: `
// Uszkodzenie ośrodkowego układu nerwowego może spowodować wzmożone napięcie mięśni (spastyczność), szczególnie kończyn górnych i dolnych. Podstawowym warunkiem usprawniania jest obniżenie spastyczności. Podczas hipoterapii dzieje się to automatycznie i jest możliwe dzięki:
//       `,
//       imageSrc: "/assets/hipoterapia4.mp4",
//       imageAlt: "Hipoterapia Video",
//       accordionItems: [
//         {
//           title: "Czynniki wpływające na zmniejszenie spastyczności",
//           content: `
// - Rozgrzanie mięśni (temperatura ciała konia jest wyższa od temperatury ciała ludzkiego).
// - Rytmiczne kołysanie w stępie.
// - Przeciwstawne skręty biodra-barki (dysocjacja) spowodowane ruchem konia.
// - Ułożenie kończyn dolnych w trójzgięciu i odwiedzeniu podczas dosiadania konia.
//           `,
//         },
//       ],
//     },
//     {
//       title: "Sesja terapeutyczna",
//       description: `
// W trakcie sesji hipoterapeuta instruuje jak reagować na ruchy konia. Terapia może obejmować pozycje na koniu - siedzenie przodem, tyłem czy nawet leżenie aby stymulować grupy mięśniowe. Terapeuta stosuje ćwiczenia integracji sensorycznej oraz motorycznej, takie jak: łapanie piłki czy wykonywanie określonych zadań rąk podczas jazdy.

// Sesje terapeutyczne mogą odbywać się również „przy koniu” zanim pacjent nabierze pewności siebie i swobody w relacji z tym łagodnym ale dużym zwierzęciem.
//       `,
//       imageSrc: "/assets/HipoterapiaSesja.mp4",
//       imageAlt: "Hipoterapia Video",
//     },
//     {
//       title: "Koń pobudza zmysły",
//       description: `
// Dotyk końskiej sierści, łaskotanie grzywy, rozmaitość kształtów, odgłos kroków, przyjazne parskanie i mile kojarzony zapach stymulują zmysły dotyku, słuchu, wzroku i węchu. Towarzyszy temu ciągłe wytrącanie z równowagi i konieczność jej natychmiastowego odnajdywania, jeżeli nie chcemy zbyt prędko rozstać się z tym bogactwem wrażeń. Czucie głębokie (proprioceptywne) jest stymulowane przez nieustające przeciwstawne bodźce dopływające z mięśni, ścięgien i stawów całego ciała. Wszystko to niezwykle rozwija zaburzoną zdolność równoczesnego odbierania bodźców i ich kojarzenia. Dzięki temu kształtuje się poczucie własnego ciała i orientacji przestrzennej.
//       `,
//       imageSrc: "/assets/hipoterapia.jpg",
//       imageAlt: "Dziecko podczas hipoterapii",
//     },
//     {
//       title: "Na co wpływa hipoterapia?",
//       description: `
// **Kodowanie w mózgu prawidłowego wzorca chodu.** Podczas ruchu konia w stępie na miednicę siedzącego prawidłowo pacjenta, przenoszony jest wzorzec ruchowy, odpowiadający kolejnym fazom chodu zdrowego człowieka. Częstotliwość przekazywanych pacjentowi trójwymiarowych impulsów, pochodzących z grzbietu końskiego, waha się od 90 do 110 na minutę.

// **Normalizację napięcia mięśniowego**, niezbędną do nauki prawidłowego, czynnego ruchu. Sprzyja temu prawidłowa pozycja przyjmowana przez jeźdźca podczas jazdy, rytmiczny ruch jego ciała, naprzemienne rozluźnianie i napinanie mięśni oraz temperatura konia, która jest o około 1 stopień wyższa od temperatury człowieka.

// **Doskonalenie równowagi, koordynacji, orientacji w przestrzeni oraz poczucia rytmu.** Dla dziecka nie poruszającego się samodzielnie, jazda na koniu (płynny, skoordynowany trójwymiarowy ruch) pozwala na uzyskanie świadomości położenia w przestrzeni własnego ciała, a tym samym zdobywanie doświadczenia ruchu w przestrzeni.

// **Poprawę stanu psychicznego pacjenta.** Poprzez kontakt z żywym zwierzęciem dziecko zyskuje nowego przyjaciela; poznaje jego imię, uczy się współżycia z inną żywą istotą. Koń jest większy od pacjenta, ale jest mu posłuszny, co pozwala dziecku na wzrost odwagi, poczucia sukcesu, a tym samym własnej wartości. Zajęcia, w których dziecko czynnie uczestniczy, wpływają na wzrost koncentracji, samokontroli, pobudzają inicjatywę, dają lepsze zrozumienie własnych możliwości i potrzeb. Jeżeli hipoterapia jest prowadzona fachowo, zajęcia odbierane są jako zabawa.
//       `,
//       imageSrc: "/assets/hipoterapia3.jpg",
//       imageAlt: "Sesja hipoterapii",
//     },
//     {
//       title: "Zamiast materaca czy piłki",
//       description: `
// Koń może zastąpić materac (szeroki zad), piłkę, wałek, drabinę do podciągania (grzywa). Dla dziecka ciekawsze jest schylanie się do ucha konia, klepanie go po łopatce czy kładzenie się na plecach na końskim zadzie niż ćwiczenia w sali. Dla niego to zabawa, dla rehabilitanta ćwiczenia fizykoterapeutyczne. Niektórzy zaczynają od rehabilitacyjnych ćwiczeń, a później tak zakochują się w koniach, że zaczynają jeździć indywidualnie.

// Kontakt z koniem, ze zwierzęciem pięknym, dużym, imponującym, tajemniczym, a jednocześnie przyjaznym i chętnie współpracującym pozwala na poprawę poczucia własnej wartości, kształtowanie poczucia sprawstwa (bycia sprawcą działań) oraz osiąganie coraz większej samodzielności, przełamywanie lęku i oporów przed kontaktem z otoczeniem społecznym, zwiększenie motywacji do nawiązywania bliższego kontaktu i poprawy komunikacji ze światem, poprawa zachowań społecznych, kształtowanie wrażliwości, odpowiedzialności, opiekuńczości i innych pożądanych zachowań społecznych.
//       `,
//       imageSrc: "/assets/hipoterapia6.mp4",
//       imageAlt: "Hipoterapia Video",
//     },
//   ];

//   const indicationsChildren = [
//     "Mózgowe porażenie dziecięce: kontrola głowy i czynna pozycja siedząca.",
//     "Stany po urazach czaszkowo-mózgowych.",
//     "Minimalne uszkodzenia mózgu (ADHD).",
//     "Choroby mięśni min. 3 w skali Lovetta.",
//     "Dzieci niedowidzące i niewidome.",
//     "Choroby psychiczne.",
//   ];

//   const indicationsOrthopedic = [
//     "Wady postawy.",
//     "Skoliozy I stopnia wg Coba.",
//     "Stany po amputacji i wady rozwojowe kończyn.",
//   ];

//   const indicationsOther = [
//     "Zespoły genetyczne, np. Zespół Downa (z obowiązkowym zdjęciem rtg – bocznym i czynnościowym odcinka szyjnego kręgosłupa).",
//     "Przepukliny oponowo-rdzeniowe, w zależności od wysokości uszkodzenia, obrazu klinicznego, współwystępowania wodogłowia.",
//     "Zespoły psychologiczne: zaburzenia emocjonalne, upośledzenia umysłowe, niedostosowanie społeczne.",
//   ];

//   const indicationsAdults = [
//     "Stwardnienie rozsiane.",
//     "Stany po udarze.",
//     "Stany po urazach czaszkowo-mózgowych.",
//     "Uzależnienia.",
//     "Patologie społeczne.",
//   ];

//   const contraindications = [
//     "Uczulenie na sierść, pot lub zapach konia.",
//     "Niewygojone rany.",
//     "Nietolerancja formy leczenia przez pacjenta, np. niepohamowany lęk.",
//     "Schorzenia okulistyczne – wymagana konsultacja.",
//     "Pogorszenie stanu w zespołach neurologicznych, stanach po urazach czaszkowo-mózgowych, ADHD, chorobach mięśni.",
//     "Brak kontroli głowy w rozwoju motorycznym.",
//     "Podwyższona temperatura.",
//     "Ostre choroby infekcyjne.",
//     "Padaczka.",
//     "Upośledzenia umysłowe w stopniu głębokim.",
//     "Zaburzenia mineralizacji kości (osteoporoza).",
//     "Utrwalone deformacje i zniekształcenia, przykurcze, ograniczenia zakresu ruchu kostno-stawowego, np. zwichnięcia w stawach biodrowych.",
//   ];

//   const pricingCards = [
//     {
//       title: "Hipoterapia w ramach WWR",
//       content: `
// Hipoterapia w ramach zajęć WWR jest darmowa. Zapraszamy do skorzystania z naszej oferty darmowych zajęć WWR dla twojego dziecka.
//       `,
//       footerLink: "/WWRD",
//       footerLinkText: "Jak zapisać dziecko na darmowe zajęcia WWR?",
//       type: "blue",
//     },
//     {
//       title: "Usługa komercyjna",
//       content: `
// Cena za komercyjną hipoterapię wynosi 100zł za 30 minut. Skontaktuj się z nami, aby umówić się na sesję.
//       `,
//       footerLink: "/WWRD",
//       footerLinkText: "Kontakt",
//       type: "green",
//     },
//   ];

//   return (
//     <div
//       className={`font-sans overflow-x-hidden ${
//         highContrast ? "bg-black text-yellow-400" : "bg-gray-100/20"
//       }`}
//     >
//       {serviceSections.map((section, index) => (
//         <ServiceSectionComponent key={index} {...section} index={index} />
//       ))}

//       {/* Wskazania do hipoterapii */}
//       <section className="py-6 md:py-12">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass} text-green-900`}
//           >
//             Wskazania do hipoterapii
//           </h2>
//           <h4
//             className={`font-display mb-6 font-semibold text-left ${fontSizeClass}`}
//           >
//             Dzieci
//           </h4>
//           <Accordion type="single" collapsible>
//             <AccordionItem value="item-1">
//               <AccordionTrigger>Zespoły neurologiczne</AccordionTrigger>
//               <AccordionContent>
//                 {indicationsChildren.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="flex items-center gap-3 text-left mb-6"
//                   >
//                     <GiCheckMark className="text-xl font-semibold text-green-500" />
//                     {item}
//                   </p>
//                 ))}
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-2">
//               <AccordionTrigger>Zespoły ortopedyczne</AccordionTrigger>
//               <AccordionContent>
//                 {indicationsOrthopedic.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="flex items-center gap-3 text-left mb-6"
//                   >
//                     <GiCheckMark className="text-xl font-semibold text-green-500" />
//                     {item}
//                   </p>
//                 ))}
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-3">
//               <AccordionTrigger>Inne</AccordionTrigger>
//               <AccordionContent>
//                 {indicationsOther.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="flex items-center gap-3 text-left mb-6"
//                   >
//                     <GiCheckMark className="text-xl font-semibold text-green-500" />
//                     {item}
//                   </p>
//                 ))}
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>

//           <h4
//             className={`font-display mt-8 mb-6 font-semibold text-left ${fontSizeClass}`}
//           >
//             Dorośli
//           </h4>
//           <Accordion type="single" collapsible>
//             <AccordionItem value="item-4">
//               <AccordionTrigger>Zespoły neurologiczne</AccordionTrigger>
//               <AccordionContent>
//                 {indicationsAdults.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="flex items-center gap-3 text-left mb-6"
//                   >
//                     <GiCheckMark className="text-xl font-semibold text-green-500" />
//                     {item}
//                   </p>
//                 ))}
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>

//           <h4
//             className={`font-display mt-8 mb-6 text-left text-red-700 font-semibold ${fontSizeClass}`}
//           >
//             Przeciwwskazania do hipoterapii
//           </h4>
//           <Accordion type="single" collapsible>
//             <AccordionItem value="item-5">
//               <AccordionTrigger>Lista przeciwwskazań</AccordionTrigger>
//               <AccordionContent>
//                 {contraindications.map((item, idx) => (
//                   <p
//                     key={idx}
//                     className="flex items-center gap-3 text-left mb-6"
//                   >
//                     <IoMdClose className="text-xl font-semibold text-red-500" />
//                     {item}
//                   </p>
//                 ))}
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </section>

//       {/* Cennik */}
//       <section className="py-6 md:py-12">
//         <div className="max-w-7xl mx-auto px-6 md:px-12">
//           <h2
//             className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass}`}
//           >
//             Cennik
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {pricingCards.map((card, index) => (
//               <Card
//                 key={index}
//                 className={`${
//                   highContrast
//                     ? "bg-gray-800"
//                     : card.type === "blue"
//                     ? "bg-blue-100"
//                     : "bg-green-100"
//                 } border-${card.type === "blue" ? "blue" : "green"}-500`}
//               >
//                 <CardHeader>
//                   <CardTitle>{card.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p
//                     className={`${
//                       highContrast ? "text-yellow-400" : "text-gray-700"
//                     } ${fontSizeClass} text-left mb-6`}
//                   >
//                     {card.content}
//                   </p>
//                   {card.title === "Usługa komercyjna" && (
//                     <p className="text-2xl font-semibold">100zł / 30 minut</p>
//                   )}
//                 </CardContent>
//                 <CardFooter>
//                   <Link
//                     href={card.footerLink}
//                     className={`p-2 rounded-md border border-${
//                       card.type === "blue" ? "blue" : "green"
//                     }-800 bg-${
//                       card.type === "blue" ? "blue" : "green"
//                     }-300 flex items-center justify-center gap-2`}
//                   >
//                     {card.footerLinkText}
//                     <FaCircleArrowRight className="rotate-[-45deg]" />
//                   </Link>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import Hippotherapy from "../hipoterapia/hippotherapy";

const hipoterapia = () => {
  return <Hippotherapy />;
};

export default hipoterapia;
