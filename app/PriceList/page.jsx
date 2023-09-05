'use client'
import React, { useEffect } from 'react';
useEffect

const PriceList = () => {
  useEffect(() => {
    // Utwórz skrypt dla gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";
    
    // Dodaj skrypt do głowy dokumentu
    document.head.appendChild(gtagScript);

    // Utwórz dodatkowy skrypt dla konfiguracji Google Tag Managera
    const gtmInlineScript = document.createElement('script');
    gtmInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0QW3ZG23F5');
    `;

    // Dodaj dodatkowy skrypt do głowy dokumentu
    document.head.appendChild(gtmInlineScript);

    // Opcjonalnie: Możesz usunąć skrypty, gdy komponent zostanie odmontowany
    return () => {
        document.head.removeChild(gtagScript);
        document.head.removeChild(gtmInlineScript);
    }
}, []);

  const services = [
  
    { 
      category: "Badanie ADOS-2",
      name: "Badanie ADOS-2", price: "600zł / 120min - w siedzibie PP-P", variant: "2000zł / 120min - w domu pacjenta do 25km", variant2:"3.000 zł /120 min – w domu pacjenta do 60km",info: (<p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub więcej w jednym miejscu - cena ustalana indywidualnie. <br />Diagnoza w języku angielskim: dopłata 20% ceny</p>)
    },
    { 
      category: "Neurorehabilitacja z C-eye® Pro",
      name: "Neurorehabilitacja z C-eye® Pro", price: "300zł / 60min - diagnoza w siedzibie PP-P", variant: "900 zł / 60 min – w domu Pacjenta do 25km", variant2: "1.500 zł / 60 min – w domu Pacjenta do 60km", 
      info: (
        <p>Dalsze miejscowości - cena ustalana indywidualnie. <br />Diagnoza 2 osób lub&nbsp;więcej w&nbsp;jednym miejscu - cena ustalana&nbsp;indywidualnie. <br />Diagnoza na&nbsp;grupy osób - cena ustalana&nbsp;indywidualnie <br /><br />Prowadzimy diagnozy w:&nbsp;
        <ul>
          <li>- ośrodkach rehabilitacyjnych,</li>
          <li>- domach seniora</li>
          <li>- oddziałach szpitalnych,</li>
          <li>- szkołach i&nbsp;przedszkolach specjalnych,</li>
          <li>- OREW-ach,</li>
          <li>- SOSW-ach,</li>
          <li>- ośrodkach szkolno&nbsp;- wychowawczych,</li>
          <li>- gabinetach terapeutycznych,</li>
          <li>- gabinetach lekarskich,</li>
          <li>- fundacjach/stowarzyszeniach.</li>
          </ul> <br />
          Diagnoza w&nbsp;języku angielskim - cena ustalana indywidualnie. <br /><br />
          Neurorehabilitacja z&nbsp;C-Eye:
          <ul>
            <li>180 zł  / 60 min. - w&nbsp;siedzibie PP-P</li>
            <li>300 zł / 60 min. -&nbsp;w&nbsp;domu Pacjenta do&nbsp;25km</li>
            <li>500 zł / 60 min - w&nbsp;domu Pacjenta do&nbsp;60km</li>
          </ul><br />
          Wydanie opinii wraz&nbsp;z&nbsp;omówieniem - 120 zł.<br />
          Neurorehabilitacja z&nbsp;C-Eye w&nbsp;j. angielskim: dopłata 20% ceny.
          </p>
  )},


/* Diagnozy */


    {
        category: "Diagnozy",
        name: "Diagnoza KOGS",
        price: "600zł - stacjonarnie",
        variant: "500zł - online",
        info: (
          <p>
          Diagnoza dojrzałości i&nbsp;gotowości szkolnej dla dzieci w&nbsp;wieku od&nbsp;5 do&nbsp;7 lat. <br />
          Czas trwania: 3 – 5 godzin, rozłożonych na&nbsp;2 dni. <br /><br />
          Proces diagnozy obejmuje:&nbsp;
          <ul>
              <li>- Konsultacja z&nbsp;rodzicami,</li>
              <li>- Badanie psychologiczne,</li>
              <li>- Badanie pedagogiczne,</li>
              <li>- Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
          </ul> <br />
          *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
      </p>
      
        )
    },

    {
      category: "Diagnozy",
      name: "Diagnoza Dysleksji",
      price: "600zł - stacjonarnie",
      variant: "500zł - online",
      info: (
        <p>
        Dla dzieci w&nbsp;wieku od&nbsp;8 do&nbsp;15 lat. <br />
        Czas trwania: 3 – 5 godzin rozłożonych na&nbsp;2 dni. <br /><br />
        <ul>
            <li>Konsultacja z&nbsp;rodzicami,</li>
            <li>Badanie psychologiczne,</li>
            <li>Badanie pedagogiczne,</li>
            <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
        </ul><br />
        *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
    </p>
    
      )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Dysortografii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
      <p>
      Dla dzieci w&nbsp;wieku od&nbsp;8 do&nbsp;15 lat. <br />
      Czas trwania: 3 – 5 godzin rozłożonych na&nbsp;2 dni. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami,</li>
          <li>Badanie psychologiczne,</li>
          <li>Badanie pedagogiczne,</li>
          <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },
  
  {
    category: "Diagnozy",
    name: "Diagnoza Dysgrafii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
      <p>
      Dla dzieci w&nbsp;wieku od&nbsp;8 do&nbsp;13 lat. <br />
      Czas trwania: 3 – 5 godzin rozłożonych na&nbsp;2 dni. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami,</li>
          <li>Badanie psychologiczne,</li>
          <li>Badanie pedagogiczne,</li>
          <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Dyskalkulii",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
      <p>
      Dla dzieci w&nbsp;wieku od&nbsp;13 do&nbsp;16 lat. <br />
      Czas trwania: 3 – 5 godzin rozłożonych na&nbsp;2 dni. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami,</li>
          <li>Badanie psychologiczne,</li>
          <li>Badanie pedagogiczne,</li>
          <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
    </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza funkcjonalna dotycząca aktualnego poziomu rozwoju dziecka",
    price: "450zł - stacjonarnie",
    info: (
      <p>
      Dla dzieci w&nbsp;wieku od&nbsp;1 miesiąca do&nbsp;10 roku życia. <br />
      Czas trwania: 3 – 4 godzin rozłożonych na&nbsp;2 dni. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami,</li>
          <li>Badanie psychologiczno-pedagogiczne,</li>
          <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza intelektu",
    price: "450zł - stacjonarnie",
    variant: "350zł - online (młodzież, osoby dorosłe)",
    info: (
      <p>
      Dla dzieci, młodzieży oraz&nbsp;dorosłych w&nbsp;wieku od&nbsp;2 do&nbsp;69 lat. <br />
      Czas trwania: 2 – 4 godzin. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami/osobami dorosłymi,</li>
          <li>Badanie psychologiczne,</li>
          <li>Wydanie informacji o&nbsp;wynikach badania wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza ucznia szczególnie zdolnego",
    price: "600zł - stacjonarnie",
    variant: "500zł - online",
    info: (
      <p>
      Dla dzieci w&nbsp;wieku od&nbsp;5 do&nbsp;7 lat. <br />
      Czas trwania: 3 do&nbsp;5 godzin, przeprowadzane w&nbsp;ciągu 2 dni. <br /><br />
      <ul>
          <li>Konsultacja z&nbsp;rodzicami,</li>
          <li>Badanie psychologiczne,</li>
          <li>Badanie pedagogiczne,</li>
          <li>Wydanie opinii wraz&nbsp;z&nbsp;omówieniem.</li>
      </ul><br />
      *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza ADHD u dorosłych",
    price: "560 zł (w tym 60 zł za testy psychologiczne) - stacjonarnie",
    variant: "450 zł - online",
    info: (
      <p>
      Diagnostyka ADHD u&nbsp;osób dorosłych pozwala zidentyfikować objawy związane z&nbsp;tym zaburzeniem, które może kontynuować się również w&nbsp;dorosłości. Proces diagnozy obejmuje zastosowanie specjalistycznych testów psychologicznych oraz&nbsp;szczegółowe badanie z&nbsp;opinią. <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza Pełna Integracji Sensorycznej + wydanie opinii",
    price: "350 zł / 45 min - stacjonarnie",
    info: (
      <p>
      Specjalistyczne badanie mające na&nbsp;celu ocenę funkcjonowania sensorycznego pacjenta. Integracja sensoryczna odnosi się do&nbsp;sposobu, w&nbsp;jaki organizm odbiera, interpretuje i&nbsp;reaguje na&nbsp;bodźce zewnętrzne. Nieprawidłowości w&nbsp;tej dziedzinie mogą prowadzić do&nbsp;problemów w&nbsp;uczeniu się, koordynacji ruchowej oraz&nbsp;zachowaniu. Diagnoza pełna integracji sensorycznej pozwala zidentyfikować potencjalne trudności, a&nbsp;następnie dostosować odpowiednią terapię. Cena zawiera również wydanie specjalistycznej opinii po&nbsp;zakończonym badaniu.
      <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOLD",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
      <p>
      Diagnoza dzieci w&nbsp;wieku od&nbsp;6 miesiąca do&nbsp;ukończenia 9 roku życia. Ocena prawidłowego i&nbsp;zaburzonego rozwoju mowy dziecka.
      <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOZE",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
      <p>
      Ocena i&nbsp;opis nieprawidłowości w&nbsp;zachowaniu i&nbsp;reakcjach emocjonalnych dziecka od&nbsp;wieku niemowlęcego do&nbsp;końca okresu szkolnego.
      <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOJD-AFA",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
      <p>
      Ocena Języka Dziecka Afatycznego – ocena jakościowa i&nbsp;planowanie terapii.
      <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },

  {
    category: "Diagnozy",
    name: "Diagnoza KOSF",
    price: "300 zł / 90 - 120 min - stacjonarnie",
    info: (
      <p>
      Badanie słuchu fonemowego u&nbsp;dzieci w&nbsp;wieku od&nbsp;trzech do&nbsp;siedmiu i&nbsp;pół lat. Percepcja mowy i&nbsp;rozwój słuchu u&nbsp;dzieci.
      <br />  <br />  *Diagnoza wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
  </p>
  
    )
  },


    /* Opinie */
    {
      category: "Opinie",
      name: "Wydanie opinii specjalisty",
      variant: null,
      price: "50 zł",
      info: null
    },
    {
      category: "Opinie",
      name: "Zaświadczenie",
      variant: null,
      price: "30 zł",
      info: null
    },

    {
      category: "Opinie",
      name: "Opinia o braku prziwskazań do podjęcia pracy zarobkowej",
      price: "320zł - stacjonarnie",
      variant: "260zł - online",
      info: (
        <p>
        Opinia o&nbsp;braku przeciwwskazań do&nbsp;podjęcia pracy zarobkowej lub&nbsp;opinia do&nbsp;szkoły muzycznej. <br />
        Czas trwania badania: około 1,5 godziny. <br /><br />
        *Opinia wsparta jest C-eye® Pro, Biofeedback oraz&nbsp;wirtualną rzeczywistością.
    </p>
    
      )
  },
  

    /* Badania */



    {
      category: "Badania",
      name: "Badanie psychologiczne w kierunku określania słabych i mocnych stron funkcjonowania dziecka",
      price: "600zł - stacjonarnie",
      variant: "500zł - online",
      info: (
        <p>
        Dla dzieci i&nbsp;młodzieży w&nbsp;wieku od&nbsp;5 do&nbsp;20 lat. <br />
        Czas trwania: 3 do&nbsp;5 godzin, przeprowadzane w&nbsp;ciągu 2 dni. <br /><br />
        <ul>
            <li>Konsultacja z&nbsp;rodzicami,</li>
            <li>Badanie psychologiczne,</li>
            <li>Wydanie opinii wraz z&nbsp;omówieniem.</li>
        </ul>
    </p>
    
      )
    },

    {
      category: "Badania",
      name: "Badanie psychologiczno–pedagogiczne pod kątem dysleksji, dysortografii, dysgrafii",
      price: "350 zł / 120 minut - stacjonarnie",
      variant: "300 zł / 120 minut - online",
      info: (
        <p>
        Kompleksowe badanie mające na&nbsp;celu zidentyfikowanie potencjalnych trudności w&nbsp; nauce, związanych z&nbsp;dysleksją, dysortografią oraz dysgrafią. Obejmuje zarówno analizę psychologiczną, jak&nbsp;i&nbsp;pedagogiczną, pozwalając na&nbsp;precyzyjne określenie potrzeb edukacyjnych osoby badanej.
    </p>
    
      )
    },


    /* Terapie */


    {
      category: "Terapie",
      name: "Terapia rodzin",
      price: "300zł stacjonarnie / 90 minut",
      variant: "250zł online / 90 minut",
      variant2: "70 EUR / 90 min - w j. angielskim",
      info: (
        <p>
        Specjalistyczna terapia rodzin, mająca na&nbsp;celu wsparcie rodziny w&nbsp;trudnych sytuacjach, rozwiązanie konfliktów wewnętrznych i&nbsp;poprawę komunikacji między członkami rodziny.
    </p>
    
      )
    },

    {
      category: "Terapie",
      name: "Terapia par",
      price: "220zł / 60 min - stacjonarnie",
      variant: "180zł / 60 min - online",
      variant2: "40 EUR / 60 min - online w j. angielskim",
      info: (
        <p>
        Terapia dla&nbsp;par mająca na&nbsp;celu wsparcie i&nbsp;pomoc w&nbsp;rozwiązywaniu problemów w&nbsp;związku.
    </p>
    
      )
    },

    {
      category: "Terapie",
      name: "Terapia uzależnień",
      price: "150zł / 45 min - stacjonarnie",
      variant: "130zł / 45 min - online",
      variant2: "40 EUR / 45 min - online w j. angielskim",
      info: (
        <p>
    Terapia uzależnień skupiająca się&nbsp;na różnych formach uzależnień, takich&nbsp;jak:
    <ul>
        <li>alkohol,</li>
        <li>używki,</li>
        <li>hazard,</li>
        <li>sex,</li>
        <li>portale randkowe,</li>
        <li>social media,</li>
        <li>gry komputerowe,</li>
        <li>Internet.</li>
    </ul>
</p>

      )
    },

    {
      category: "Terapie",
      name: "Zajęcia z pedagogiem specjalnym z elementami terapii behawioralnej",
      price: "150 zł / 45/60min - stacjonarnie",
      variant: "130 zł - online",
      variant2: "40 EUR / 60 min - online w j. angielskim",
      info: (
        <p>
        Indywidualne zajęcia&nbsp;z pedagogiem specjalnym skupiające się&nbsp;na wsparciu rozwoju oraz&nbsp;terapii behawioralnej.
    </p>
    
      )
    },

    {
      category: "Terapie",
      name: "Sesja Terapii Wirtualnej",
      price: "150 zł / 45 minut",
      info: (
        <p>
        Zastosowanie nowoczesnych technologii&nbsp;w praktyce terapeutycznej. Terapia wirtualna pozwala&nbsp;na prowadzenie sesji&nbsp;w wygodnych warunkach, bez&nbsp;konieczności wychodzenia&nbsp;z domu, z&nbsp;zachowaniem pełnej prywatności i&nbsp;bezpieczeństwa.
    </p>
    
      )
    },

    {
      category: "Terapie",
      name: "Sesje terapii ręki grupowe ze wspomaganiem VR",
      price: "80 zł / 50 minut",
      info: (
        <p>
        Terapia ręki&nbsp;z wykorzystaniem technologii wirtualnej rzeczywistości (VR). Grupowe zajęcia mają&nbsp;na celu poprawę umiejętności manualnych, koordynacji oraz&nbsp;precyzji ruchów ręki. Wspomaganie technologią VR sprawia, że&nbsp;terapia staje&nbsp;się bardziej angażująca i&nbsp;efektywna.
    </p>
    
      )
    },

    {
      category: "Terapie",
      name: "Sesje terapii integracji sensorycznej grupowe ze wspomaganiem VR",
      price: "80 zł / 50 minut",
      info: (
        <p>
        Terapia integracji sensorycznej&nbsp;z wykorzystaniem technologii wirtualnej rzeczywistości (VR). Zajęcia grupowe pozwalają&nbsp;na wszechstronną stymulację sensoryczną w&nbsp;innowacyjny sposób, jednocześnie promując interakcje społeczne i&nbsp;naukę w&nbsp;grupie.
    </p>
    
      )
    },

    /* Konsultacje */

    {
      category: "Konsultacje",
      name: "Konsultacja psychiatryczna",
      price: "150zł / 60 min",
      info: (
        <p>
        Specjalistyczna konsultacja psychiatryczna,&nbsp;dostosowana do&nbsp;potrzeb pacjenta, w&nbsp;celu diagnozy i&nbsp;ewentualnych zaleceń leczenia.
    </p>
    
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoterapeutą",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
        <p>
        Konsultacje rodzicielskie z&nbsp;doświadczonym psychoterapeutą, mające na&nbsp;celu wsparcie rodziców w&nbsp;wychowywaniu i&nbsp;zrozumieniu potrzeb swoich dzieci.
    </p>
    
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoonkologiem",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
        <p>
        Konsultacje rodzicielskie z&nbsp;doświadczonym psychoonkologiem, mające na&nbsp;celu wsparcie rodziców w&nbsp;trudnych momentach związanych z&nbsp;diagnozą i&nbsp;leczeniem nowotworu.
    </p>
    
      )
    },

    {  
      category: "Konsultacje",
      name: "Konsultacje rodzicielskie z psychoterapeutą od uzależnień",
      price: "250 zł / 90min - stacjonarnie",
      variant: "200 zł / 90min - online",
      variant2: "40 EUR / 60 min - online w j.angielskim",
      info: (
        <p>
        Specjalistyczne konsultacje skierowane do&nbsp;rodziców dzieci i&nbsp;młodzieży borykających się z&nbsp;problemami uzależnienia. Pomoc dla&nbsp;rodzin w&nbsp;zrozumieniu i&nbsp;radzeniu sobie z&nbsp;trudnościami związanymi z&nbsp;uzależnieniem.
    </p>
    
      )
    },

    {
      category: "Konsultacje",
      name: "Konsultacja Pedagogiczna /Terapia Pedagogiczna",
      price: "90 zł / 45 min stacjonarnie",
      info: (
        <p>
        Konsultacje i&nbsp;terapia pedagogiczna skierowane do&nbsp;dzieci i&nbsp;młodzieży z&nbsp;trudnościami w&nbsp;nauce i&nbsp;zachowaniu. Pomoc pedagoga w&nbsp;rozwiązywaniu problemów edukacyjnych oraz wsparcie w&nbsp;indywidualnym rozwoju ucznia.
    </p>
    
      )
    },
    
    {
      category: "Konsultacje",
      name: "Konsultacja Behawioralna/ Terapia Behawioralna",
      price: "90 zł / 45 min - stacjonarnie",
      info: (
        <p>
        Konsultacje i&nbsp;terapia behawioralna mają na&nbsp;celu zidentyfikowanie i&nbsp;zmianę niepożądanych zachowań. Terapia ta&nbsp;bazuje na&nbsp;zrozumieniu mechanizmów uczenia się i&nbsp;zachowania, pomagając osobom w&nbsp;nabywaniu nowych umiejętności oraz radzeniu sobie z&nbsp;trudnościami emocjonalnymi i&nbsp;behawioralnymi.
    </p>
    
      )
    },


    /* Oceny */

    {
      category: "Oceny",
      name: "KOLD-PT - Karty Oceny Logopedycznej Dziecka",
      price: "300 zł / 120 min",
      ageRange: "od 6 miesiąca życia",
      info: (
        <p>
        Badanie logopedyczne przeznaczone dla dzieci od&nbsp;12.&nbsp;miesiąca życia. Za&nbsp;pomocą KOLD-PT dokonuje się wszechstronnej diagnozy funkcji mowy i&nbsp;języka, co&nbsp;umożliwia wczesne wykrywanie ewentualnych nieprawidłowości oraz planowanie indywidualnej terapii. Badanie prowadzone jest w&nbsp;formie kart oceny, które są&nbsp;dostosowane do&nbsp;wieku i&nbsp;poziomu rozwoju dziecka.
    </p>
    
      )
    },


    /* Logopeda */

    {
      category: "Logopeda",
      name: "Logopeda – neurologopeda – logopeda kliniczny",
      price: "250zł - Diagnoza z planem terapii",
      variant: "100zł / 45 min - Sesja terapeutyczna",
      variant2: "150zł / 45 min - Sesja terapeutyczna wspomagana VR",
      info: (
        <p>
        Profesjonalna diagnoza i&nbsp;terapia logopedyczna, skierowana do&nbsp;osób potrzebujących wsparcia w&nbsp;zakresie komunikacji i&nbsp;mowy. Dostępne są&nbsp;również nowoczesne metody terapii z&nbsp;wykorzystaniem technologii VR.
    </p>
    
      )
    },


    /* Wsparcie Psychologiczne */

    {
      category: "Wsparcie psychologiczne",
      name: "Wsparcie psychologiczne",
      price: "150zł / 45 min - stacjonarnie",
      variant: "130zł / 45 min - online",
      variant2: "50 EUR / 45 min - online w j.angielskim",
      info: (
        <p>
        Wsparcie psychologiczne dla&nbsp;dzieci, młodzieży, kobiet, mężczyzn, par, seniorów: 
        <ul>
            <li>- wsparcie w&nbsp;kryzysie,</li>
            <li>- terapia psychologiczna osób w&nbsp;żałobie,</li>
            <li>- wsparcie w&nbsp;trudnościach szkolnych,</li>
            <li>- wsparcie w&nbsp;trudnościach interpersonalnych,</li>
            <li>- trudności w&nbsp;relacjach z&nbsp;rówieśnikami,</li>
            <li>- wsparcie w&nbsp;stanach lękowych,</li>
            <li>- wsparcie w&nbsp;stanach depresyjnych,</li>
            <li>- trudności z&nbsp;niską samooceną,</li>
            <li>- redukcja i&nbsp;zarządzanie stresem,</li>
            <li>- kontrolowanie wściekłości i&nbsp;złości,</li>
            <li>- ataki paniki,</li>
            <li>- zaburzenia odżywiania i&nbsp;obrazowanie ciała,</li>
            <li>- kwestie relacji partnerskich,</li>
            <li>- nadwrażliwość,</li>
            <li>- wsparcie w&nbsp;zmianach życiowych,</li>
            <li>- depresja poporodowa,</li>
            <li>- kryzys wieku średniego,</li>
            <li>- zaburzenia adaptacyjne związane ze&nbsp;stratą, rozwodem, chorobą medyczną i&nbsp;innymi zmianami życiowymi,</li>
            <li>- zespół stresu pourazowego dla ofiar traumy seksualnej, przemocy, nadużyć i&nbsp;innych urazów,</li>
            <li>- usługi wsparcia dla&nbsp;Seniorów,</li>
            <li>- uzależnienia (alkohol, używki, hazard, sex, portale randkowe, social media, gry komputerowe, Internet).</li>
        </ul>
    </p>
    
      )
  },


  /* Fizjoterapia */
  {
    category: "Fizjoterapie",
    name: "Fizjoterapia / Terapia Ruchowa",
    variant: "Sesje fizjoterapii grupowe ze wspomaganiem VR",
    price: "80 zł / 50 minut",
    info: (
      <p>
                Fizjoterapia z&nbsp;wykorzystaniem technologii wirtualnej rzeczywistości (VR). Sesje terapeutyczne skupiają się na&nbsp;poprawie funkcji ruchowych, siły i&nbsp;koordynacji pacjenta. Wykorzystanie VR sprawia, że&nbsp;terapia jest bardziej angażująca, umożliwiając pacjentowi bardziej efektywne i&nbsp;przyjemne ćwiczenia.
      </p>
    )
  },

  {
    category: "Fizjoterapie",
    name: "Sesje fizjoterapii grupowe ze wspomaganiem VR",
    price: "80 zł / 50 minut",
    info: (
      <p>
      Fizjoterapia z&nbsp;wykorzystaniem technologii wirtualnej rzeczywistości (VR). Grupowe sesje terapeutyczne skupiają się na&nbsp;poprawie funkcji ruchowych, siły i&nbsp;koordynacji pacjenta. Wykorzystanie VR sprawia, że&nbsp;terapia jest bardziej angażująca, umożliwiając pacjentom bardziej efektywne i&nbsp;przyjemne ćwiczenia.
  </p>
  
    )
  },

  /* Masaze */

  {
    category: "Masaże",
    name: "Masaż Shantala",
    price: "150 zł / 45/60min - stacjonarnie",
    info: (
      <p>
      Masaż Shantala to&nbsp;tradycyjny indyjski masaż dla&nbsp;niemowląt, pomagający w&nbsp;rozwoju fizycznym i&nbsp;emocjonalnym dziecka.
  </p>
  
    )
  },

  /* Treningi */

  {
    category: "Treningi",
    name: "Trening Umiejętności Społecznych – zajęcia grupowe",
    price: "50 zł / 45 min za osobę",
    info: (
      <p>
      Zajęcia skoncentrowane na&nbsp;rozwijaniu umiejętności społecznych uczestników. Dzięki&nbsp;treningowi uczestnicy uczą się efektywnej komunikacji, rozpoznawania emocji, budowania pozytywnych relacji z&nbsp;innymi oraz&nbsp;radzenia sobie z&nbsp;konfliktami. Zajęcia prowadzone są w&nbsp;formie grupowej, co&nbsp;pozwala na&nbsp;praktyczne ćwiczenie nabytych umiejętności w&nbsp;interakcjach z&nbsp;innymi.
  </p>
  
    )
  },

  /* Praca z uczniem zdolnym */
  {
    category: "Praca z uczniem zdolnym",
    name: "Kurs przygotowujący do egzaminu ósmoklasisty",
    price: "1.800zł za pełen pakiet przedmiotów (możliwość skorzystania z jednego bloku za 800 zł)",
    info: (
      <>
       <div>

Celem kursu jest takie połączenie teorii z&nbsp;praktyką, aby w&nbsp;dniu egzaminu nie spotkało ucznia żadne zaskoczenie.<br />
Materiał zostanie powtórzony, a&nbsp;to, co&nbsp;trzeba przećwiczyć – przećwiczone.<br /><br />

Zajęcia odbywają się w&nbsp;blokach przedmiotowych: 
<ul>
    <li><strong>polski</strong></li>
    <li><strong>matematyka</strong></li>
    <li><strong>język angielski</strong></li>
</ul><br />

Pełna oferta kursu obejmuje <strong>120 godzin</strong> zajęć prowadzonych w&nbsp;blokach przedmiotowych po&nbsp;3h dydaktyczne:
<ul>
    <li>40h język polski;</li>
    <li>40h matematyka;</li>
    <li>40h język angielski.</li>
</ul>

Dodatkowo uczniowie otrzymują dostęp do&nbsp;platformy eLearning, gdzie znajdą ponad 200 godzin dodatkowych zadań, co&nbsp;umożliwi wykonywanie ćwiczeń i&nbsp;zadań poza zajęciami z&nbsp;Nauczycielem.<br /><br />

Omówienie próbnego egzaminu.<br /><br />

Pełna oferta to <strong>1.800zł</strong> za&nbsp;pakiet przedmiotów.<br />
Istnieje możliwość skorzystania z&nbsp;jednego bloku za <strong>800 zł</strong>.<br /><br />

Dodatkowo, dla&nbsp;chętnych uczniów, proponujemy zajęcia z&nbsp;technik uczenia się, aby ułatwić i&nbsp;usprawnić przygotowanie do&nbsp;egzaminu.<br /><br />

Kameralne grupy zarówno <strong>ONLINE</strong> jak i&nbsp;<strong>STACJONARNE</strong>.<br /><br />

Zajęcia stacjonarne:<br />
Rybnik, kampus, ul. Rudzka 13c, budynek B, III piętro, pok. 3.3<br />
Rybnik - Golejów, ul. Magnolii 25<br />
Zajęcia stacjonarne od <strong>16.00</strong> do <strong>18.15</strong>.<br /><br />

Zajęcia online od <strong>17.00</strong> do <strong>19.15</strong> raz w&nbsp;tygodniu
</div>

        </>
    )
},

/* Kursy Językowe */

{
  category: "Kursy językowe",
  name: "Kurs języka angielskiego przygotowujący do międzynarodowego egzaminy telc B2",
  price: "3.000 zł",
  info: (
    <p>
    <strong>100 h</strong> z&nbsp;trenerem <strong>Klaudią Rogalską</strong>.<br />
    <strong>300 h</strong> na&nbsp;platformie eLearning. <br />
    Kurs online w&nbsp;czasie rzeczywistym (Real Time online).<br />
    <strong>17.00</strong> do&nbsp;<strong>19.15</strong><br />
    3 x 45 min
</p>

  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka angielskiego przygotowujący do międzynarodowego egzaminy telc C1",
  price: "4.000 zł",
  info: (
    <p>
    <strong>100 h</strong> z&nbsp;trenerem <strong>Klaudią Rogalską</strong>.<br />
    <strong>300 h</strong> na&nbsp;platformie eLearning.<br />
    Kurs online w&nbsp;czasie rzeczywistym (Real Time online).<br />
    <strong>17.00</strong> do&nbsp;<strong>19.15</strong><br />
    3 x 45 min
</p>

  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka niemieckiego przygotowujący do międzynarodowego egzaminy telc B2",
  price: "3.000 zł",
  info: (
    <p>
    <strong>100 h</strong> z&nbsp;trenerem <strong>dr Jakubem Ruks</strong>.<br />
    <strong>300 h</strong> na&nbsp;platformie eLearning.<br />
    Kurs online w&nbsp;czasie rzeczywistym (Real Time online).<br />
    <strong>17.00</strong> do&nbsp;<strong>19.15</strong><br />
    3 x 45 min
</p>

  )
},

{
  category: "Kursy językowe",
  name: "Kurs języka niemieckiego przygotowujący do międzynarodowego egzaminy telc C1",
  price: "4.000 zł",
  info: (
    <p>
    <strong>100 h</strong> z&nbsp;trenerem <strong>dr Jakubem Ruks</strong>.<br />
    <strong>300 h</strong> na&nbsp;platformie eLearning.<br />
    Kurs online w&nbsp;czasie rzeczywistym (Real Time online).<br />
    <strong>17.00</strong> do&nbsp;<strong>19.15</strong><br />
    3 x 45 min
</p>

  )
}







  ];

  const handleServiceClick = (serviceName) => {
    console.log(`Wybrano usługę: ${serviceName}`);
    // W przyszłości tutaj można przekierować do panelu rejestracji z odpowiednio wybraną usługą
  };


  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const navigationLinks = Object.keys(groupedServices);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="p-4 max-w-5xl mx-auto mt-20 mb-20 relative scroll-smooth">
      
      <h1 className="text-5xl font-bold text-gray-800 mb-2 text-center">Cennik</h1>
      <p className="text-gray-600 mb-6 text-center">Zachęcamy do zapoznania się z naszą ofertą.</p>

      {/* Nawigacja */}
      <nav className="mb-8 text-center">
        {navigationLinks.map(link => (
          <button 
            onClick={() => scrollToSection(link)}
            className="inline-block px-4 py-2 mr-2 mb-2 bg-white border rounded text-gray-700 hover:bg-gray-200 transition duration-300 focus:outline-none"
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Wyświetlanie usług według kategorii */}
      {Object.entries(groupedServices).map(([category, servicesInCategory]) => (
        <div key={category} id={category}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-20">{category}</h2>
          {servicesInCategory.map((service, sIndex) => (
            <div key={service.name} className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-lg ${sIndex !== 0 ? 'mt-4' : ''}`}>
              <div className="flex items-center">
                <div className="mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
                  <p className="text-xl font-bold mt-2 text-[#921d7f]">{service.price}</p>
                  <p className="mt-2 text-gray-600">{service.variant}</p>
                  <p className="mt-2 text-gray-600">{service.variant2}</p>
                  <p className="mt-2 text-gray-600">{service.variant3}</p>
                  <p className="mt-2 text-gray-600">{service.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Przycisk do przewijania na górę */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#921d7f] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#7a175e] transition duration-300"
        title="Przewiń do góry"
      >
        ↑
      </button>
    </div>
  );
}
  
  export default PriceList;