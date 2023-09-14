import React from 'react';

const Wynajem = () => {
  return (
    <main className='flex justify-center py-10'>
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
        <img src="/assets/wynajem1.png" alt="Opis pierwszego obrazka" className="w-full "/>
          <img src="/assets/wynajem2.png" alt="Opis pierwszego obrazka" className="w-full mt-4"/>
        
        <div className='grid grid-cols-3 gap-6 mt-4 className=" w-full max-w-fit"'>
          <img src="/assets/wynajem3.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
          <img src="/assets/wynajem4.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
          <img src="/assets/wynajem5.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
        </div>
        <div className='mt-6 text-left'> {/* Ustawienie tekstu od lewej strony */}
          <p className='text-slate-700  font-semibold text-lg'>Planujesz spotkanie dla kilkuosobowego zespołu w Rybniku?</p>
          <p className='text-slate-700  font-semibold text-lg'>Szukasz nowocześnie, urządzonego gabinetu, gdzie mógłbyś przyjmować swoich pacjentów?</p>
          <p className='text-slate-700  font-semibold text-lg'>Świetnie trafiłeś!</p><br />
          <p className='text-slate-700  font-medium text-sm'>Wybór odpowiedniego miejsca, to kluczowy aspekt organizacji spotkania biznesowego.</p>
          <p className='text-slate-700  font-medium text-sm'>Magnolia CENTER w swojej ofercie prezentuje elegancką sale konferencyjną oraz nowoczesne gabinety lekarskie/terapeutyczne.</p><br />
          <p className='text-slate-700  font-bold text-sm'>Przestrzeń została zaprojektowana tak, aby ułatwić dyskusje oraz warsztaty i profesjonalne negocjacje w środowisku dostosowanym do potrzeb klienta.</p>
          <div class="flex gap-10 pl-10 my-6">
 
            <ul class="list-disc marker:text-[#921d7f] marker:text-2xl text-slate-700  ">
                <li>Powierzchnia sali</li>
                <li>Przeznaczona na spotkania:</li>
                <li>Dostosowana na spotkania:</li>
                <li>Internet:</li>
                <li>Parking:</li>
                <li>Klimatyzacja:</li>
            </ul>
            
            <ul class="list-none text-slate-700  ">
                <li>34 M2</li>
                <li>Indywidualnie</li>
                <li>Prezentacyjne/szkolenia do 20 osób</li>
                <li>Szybko działające wi-fi</li>
                <li>12 miejsc postojowych</li>
                <li>Wszystkie sale oraz gabinety wyposażone są w klimatyzację</li>
            </ul>
          </div>
          <p className='text-slate-700   font-medium text-sm'>Możliwość wynajmu sali na godziny, jak i całodniowo</p>
          <p className='text-slate-700   font-medium text-sm'>Kawa oraz herbata bez ograniczeń</p>

          <p className='text-slate-700   font-bold text-lg mt-14 text-center'>Cennik Magnolia Center - Sala Konferencyjna</p>
          <div className='grid grid-cols-3 gap-6 mt-4'>
          <img src="/assets/wynajem6.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
          <img src="/assets/wynajem7.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
          <img src="/assets/wynajem8.png" alt="Opis pierwszego obrazka" className="w-full max-w-5xl"/>
        </div>
        
        <p className='text-slate-700 font-bold text-lg my-14 '>Gabinety</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Profesjonalne Gabinety dla Praktyki terapeutycznej/lekarskiej.</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Oferujemy wynajem gabinetów oraz specjalistycznych sal terapeutycznych dostosowanych do potrzeb pacjentów:</p>
        <p className='text-slate-700 font-bold text-sm mt-6'>1. Wynajem Gabinetów</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Dla lekarzy, terapeutów i specjalistów - komfortowe oraz wyposażone gabinety.</p>
        <p className='text-slate-700 font-medium text-sm '>Dla prawników oraz innych specjalistów</p>
        <p className='text-slate-700 font-bold text-sm mt-6'>2.Sala do Terapii Sensorycznej Przygotowana do pracy z dziećmi i osobami z zaburzeniami sensorycznymi.</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Przygotowana do pracy z dziećmi i osobami z zaburzeniami sensorycznymi.</p>
        <p className='text-slate-700 font-bold text-sm mt-6'>3. Sala do Terapii z Wykorzystaniem Wirtualnej Rzeczywistości (VR)</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Nowoczesna Sala do terapii VR, dostosowana i wyposażona w innowacyjny sprzęt do terapii vr.</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Nasza lokalizacja jest dogodna, a ceny konkurencyjne. Dbamy o czystość i bezpieczeństwo pomieszczeń. <br />Skup się na pracy terapeutycznej - resztą zajmiemy się my. <br />Skontaktuj się, by dowiedzieć się więcej!</p>
        <p className='text-slate-700 font-bold text-lg my-14 '>Wirtualne Biuro</p>
        <p className='text-slate-700 font-medium text-sm mt-6'>Posiadanie prestiżowego adresu, to kluczowa część sukcesu Twojej firmy.<br />Magnolia Center oferuje najlepszy adres na mapie Rybnika dla Twojej działalności. Jeśli planujesz założyć firmę, ale nie potrzebujesz stałego biura,<br /> to nasze Wirtualne Biuro jest idealnym rozwiązaniem.</p>
        <p className='text-slate-700 font-bold text-sm my-8 '>Wirtualne biuro w rybniku</p>
        <p className='text-slate-700 font-bold text-sm mt-8'>Nasza oferta obejmuje:</p>
        <ul className='text-slate-700 list-decimal text-sm pl-5'>
            <li>Prestiżowy Adres Otrzymasz dostęp do naszego renomowanego adresu w Magnolia Center, Rybnik, który z pewnością <br /> zaimponuje Twoim klientom i partnerom biznesowym</li>
            <li>Obsługa Korespondencji - Nasz zespół profesjonalistów zajmie się Twoją korespondencją przychodzącą i wychodzącą, <br />zapewniając Ci pełną dyskrecję i poufność.</li>
            <li>Dostęp do Biura na życzenie - Masz dostęp do naszego stylowo wyposażonego biura w Magnolia Center, Rybnik,<br /> gdy tylko tego potrzebujesz. Wynajmij nasze sale konferencyjne lub pracuj na miejscu, kiedy to konieczne.</li>
        </ul>
        <p className='text-slate-700   font-bold text-sm my-8'>Oferta specjalna</p>
        <p className='text-slate-700   font-medium text-sm mt-6'>Podpisując umowę na czas określony i opłacając ją z góry za 12 miesięcy, otrzymasz atrakcyjny rabat na nasze usługi. <br />Posiadamy również opcję umowy na czas nieokreślony z możliwością opłacania usługi co miesiąc,<br /> z miesięcznym okresem wypowiedzenia. Decydujesz o rodzaju umowy i jej czasie trwania,<br /> dostosowując ją do swoich potrzeb. <br />Załóż wirtualne biuro w Magnolia Center Rybnik, i ciesz się profesjonalnym wsparciem dla Twojej firmy. <br />Dzięki naszej elastycznej ofercie masz pełną kontrolę nad kosztami i dostępem do usług biurowych. <br /> Skontaktuj się z nami już dziś, aby dowiedzieć się więcej i rozpocząć współpracę z Magnolia Center. <br />Twój sukces zaczyna się tutaj.</p>
        <p className='text-slate-700   font-bold text-sm my-8 mb-14'>Cennik wirtualnego biura w rybniku</p>
        <div className='grid grid-cols-3 gap-6 mt-4'>
          <img src="/assets/wynajem9.png" alt="Opis pierwszego obrazka" />
          <img src="/assets/wynajem10.png" alt="Opis pierwszego obrazka" />
          <img src="/assets/wynajem11.png" alt="Opis pierwszego obrazka" />
        </div>
        <p className='text-slate-700   font-medium text-sm mt-12'>*Cena za miesiąc przy płatności z góry za cały rok</p>
        <p className='text-slate-700   font-medium text-sm mt-5'>**Cena przy umowie na czas nieokreślony</p>
        <p className='text-slate-700   font-medium text-sm mt-5'>***Sala Konferencyjna podlega wykorzystaniu w czasie ciągłym, po wcześniejszej rezerwacji</p>
        <p className='text-slate-700   font-medium text-sm mt-5'>Oferowane ceny są cenami netto</p>
        <p className='text-slate-700   font-medium text-sm mt-5'>Oferta dotyczy wyłącznie dokumentów, nie dotyczy przesyłek kurierskich (paczek)</p>
        <p className='text-slate-700   font-medium text-sm mt-5'>Kaucja w wysykości dwu miesięcznego czynszu, płatna do 3 dni po podpisaniu umowy wirtualnego biura</p>






















        </div>
      </div>
    </main>
  );
}

export default Wynajem;
