import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AlertDemo } from "../../../components/Alert";
import { CardFooter } from "../../../components/ui/card";
import Link from "next/link";

const Warsztaty = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Zajęcia warsztatowe - Oferta wakacyjna
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
                  src="/assets/testtlo.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="workshop session"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Dlaczego warto skorzystać z&nbsp;naszych zajęć warsztatowych?
              </h2>

              <p className="text-gray-700 text-base text-left mb-6">
                Nasze zajęcia warsztatowe to doskonała okazja do rozwoju
                umiejętności psychospołecznych i pedagogicznych. Są przeznaczone
                dla dzieci, młodzieży i dorosłych, oferując ciekawe i angażujące
                aktywności. Chociaż promujemy je jako ofertę wakacyjną,
                warsztaty będą dostępne przez cały rok.
              </p>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Warsztaty dla dzieci</AccordionTrigger>
                  <AccordionContent>
                    Oferujemy różnorodne warsztaty dla dzieci, które rozwijają
                    ich umiejętności społeczne, emocjonalne i poznawcze. Mogą to
                    być zajęcia z zakresu radzenia sobie z emocjami,
                    komunikacji, a także rozwijające kreatywność i umiejętności
                    techniczne.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Warsztaty dla młodzieży</AccordionTrigger>
                  <AccordionContent>
                    Nasze warsztaty dla młodzieży pomagają rozwijać umiejętności
                    społeczne, zarządzanie stresem, samoświadomość oraz
                    przygotowanie do życia zawodowego. Oferujemy zajęcia z
                    komunikacji, pracy zespołowej, asertywności oraz technik
                    relaksacyjnych.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Warsztaty dla dorosłych</AccordionTrigger>
                  <AccordionContent>
                    Dorośli mogą skorzystać z naszych warsztatów, aby rozwijać
                    swoje umiejętności interpersonalne, radzenia sobie ze
                    stresem oraz technik relaksacyjnych. Oferujemy także
                    szkolenia z zakresu rodzicielstwa, komunikacji małżeńskiej
                    oraz rozwoju osobistego.
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
                Jak wyglądają nasze zajęcia warsztatowe?
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                <span className="font-semibold text-xl">
                  Nasze zajęcia warsztatowe
                </span>{" "}
                są prowadzone przez doświadczonych psychologów, pedagogów oraz
                terapeutów, którzy dbają o przyjazną i wspierającą atmosferę.
                Każde zajęcia są dostosowane do poziomu zaawansowania
                uczestników, zapewniając rozwój umiejętności w wybranej
                dziedzinie.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Zajęcia odbywają się w małych grupach, co umożliwia indywidualne
                podejście do każdego uczestnika. Zapewniamy wszystkie niezbędne
                materiały i narzędzia, a także wygodne i bezpieczne warunki do
                nauki i twórczej pracy.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Workshop Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
                  src="/assets/testtlo.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="child in workshop"
                />
              </div>
            </div>

            {/* Informational Text */}
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Zajęcia warsztatowe dla dzieci, młodzieży i dorosłych:
              </h2>
              <div className="mt-3 text-blue-800">
                <p>
                  wspierają rozwój umiejętności psychospołecznych i
                  emocjonalnych,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>pomagają w nauce zarządzania stresem i emocjami,</p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>
                  oferują szeroki wybór tematyki warsztatów dostosowanych do
                  różnych grup wiekowych,
                </p>
              </div>
              <div className="mt-3 text-blue-600">
                <p>
                  zapewniają przyjazną i wspierającą atmosferę podczas zajęć,
                </p>
              </div>
              <div className="mt-3 text-blue-800">
                <p>dostępne przez cały rok, z ofertą specjalną na wakacje.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl text-center font-semibold mb-10 font-display">
            Specjalne warsztaty letnie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-500 bg-blue-100">
              <CardHeader>
                <CardTitle>Warsztaty kreatywne</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nasze warsztaty kreatywne to idealna okazja dla dzieci i
                  młodzieży do rozwijania swoich umiejętności artystycznych.
                  Oferujemy zajęcia z malarstwa, rzeźby, teatru i wielu innych.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-800 bg-green-100">
              <CardHeader>
                <CardTitle>Zajęcia sportowe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Zajęcia sportowe pomagają dzieciom i młodzieży rozwijać
                  kondycję fizyczną i umiejętności zespołowe. Oferujemy
                  różnorodne aktywności, takie jak piłka nożna, siatkówka, biegi
                  i gimnastyka.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-500 bg-orange-100">
              <CardHeader>
                <CardTitle>Warsztaty technologiczne</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Warsztaty technologiczne to zajęcia, podczas których
                  uczestnicy uczą się podstaw programowania, robotyki i
                  inżynierii. To doskonała okazja, aby rozwinąć zainteresowania
                  związane z nowoczesnymi technologiami.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mt-10 py-6 md:py-24">
        <div className="mx-auto">
          <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
            {/* Informational Text */}
            <div className="mx-6 md:ml-16 flex-col justify-center items-center">
              <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                Specjalne warsztaty letnie
              </h2>
              <p className="text-gray-700 text-base text-left mb-6">
                Nasze letnie warsztaty są dostosowane do potrzeb uczestników w
                każdym wieku. To wyjątkowa okazja do nauki i zabawy w przyjaznym
                i wspierającym środowisku. Oferujemy zajęcia z różnych dziedzin,
                które pomogą w rozwijaniu umiejętności i pasji.
              </p>
              <p className="text-gray-700 text-base text-left mb-6">
                Podczas warsztatów letnich uczestnicy będą mogli brać udział w
                kreatywnych projektach, aktywnościach na świeżym powietrzu oraz
                specjalnych wydarzeniach, które sprawią, że czas spędzony z nami
                będzie niezapomniany.
              </p>
            </div>

            {/* Video Embed */}
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_SECOND_VIDEO_ID"
                  title="Summer Workshop Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Nowość
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Programy mentoringowe
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Oferujemy indywidualne programy mentoringowe, które pomagają
              dzieciom i młodzieży rozwijać swoje talenty i umiejętności. Każdy
              uczestnik otrzymuje indywidualne wsparcie od doświadczonego
              mentora.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaCircleArrowRight className="rotate-[-45deg]" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Indywidualne podejście
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Każdy uczestnik programu mentoringowego otrzymuje indywidualne
                  wsparcie od mentora, który pomaga rozwijać jego talenty i
                  umiejętności.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaCircleArrowRight className="rotate-[-45deg]" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Specjalistyczne zajęcia
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Programy obejmują specjalistyczne zajęcia z różnych dziedzin,
                  takich jak matematyka, nauki przyrodnicze, języki obce, sztuka
                  i technologia.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaCircleArrowRight className="rotate-[-45deg]" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Rozwój osobisty
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Uczestnicy uczą się technik zarządzania czasem, radzenia sobie
                  ze stresem oraz rozwijania umiejętności komunikacyjnych i
                  przywódczych.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaCircleArrowRight className="rotate-[-45deg]" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Projektowanie kariery
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Mentorzy pomagają uczestnikom w planowaniu ścieżki edukacyjnej
                  i zawodowej, umożliwiając im osiągnięcie sukcesu w
                  przyszłości.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-7xl mx-auto my-20">
        <Card className="border-blue-800 bg-blue-100">
          <CardHeader>
            <CardTitle>Dołącz do naszych warsztatów</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Nasze zajęcia warsztatowe to doskonała okazja do rozwijania
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
              Umów wizytę
              <FaCircleArrowRight className="rotate-[-45deg]" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <AlertDemo />
    </div>
  );
};

export default Warsztaty;
