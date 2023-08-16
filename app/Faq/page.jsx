'use client'
import React, { useState, useEffect } from 'react';

const Faq = () => {
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

  const faqList = [
    {
      id: 1,
      question: 'Jak działa poradnictwo psychologiczno-pedagogiczne?',
      answer: (
        <div>
          <p>
          Opinie&nbsp;psychologiczno-pedagogiczne, w&nbsp;tym wydawane przez&nbsp;niepubliczne poradnie, stanowią dla&nbsp;szkoły podstawę
objęcia ucznia pomocą – zgodnie ze&nbsp;wskazaniami w&nbsp;tych opiniach. WAŻNE, żeby&nbsp;Niepubliczna Poradnia posiadała
wpis do&nbsp;rejestru i&nbsp;została założona zgodnie art.&nbsp;168 ustawy Prawo&nbsp;oświatowe, tym&nbsp;samym posiada uprawnienia do
wydania opinii.

          </p>
          <ul className="list-disc list-inside">
            <li>
              <a href="https://www.gov.pl/web/edukacja-i-nauka/poradnictwo-psychologiczno-pedagogiczne">
                https://www.gov.pl/web/edukacja-i-nauka/poradnictwo-psychologiczno-pedagogiczne
              </a>
            </li>
            <li>
              PP-P MAGNOLIA działa na podstawie wpisu Prezydenta Miasta Rybnika do ewidencji szkół i&nbsp; placówek niepublicznych:
              Nr wpisu: E-I.4430.51.2023 i&nbsp; została założona zgodnie art. 168 ustawy Prawo oświatowe.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      question: 'Jakie opinie może wydać tylko poradnia publiczna?',
      answer: (
        <div>
          <ul className="list-disc list-inside">
            <li>realizacji obowiązku szkolnego poza szkołą</li>
            <li>pierwszeństwa w przyjęciu ucznia z&nbsp; problemami zdrowotnymi do szkoły ponadpodstawowej</li>
            <li>objęcia ucznia zindywidualizowaną ścieżką kształcenia</li>
            <li>indywidualnego programu lub toku nauki.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      question: 'Kim jest uczeń zdolny i jak go rozpoznać?',
      answer: (
        <div>
          <p>Uczeń&nbsp;szczególnie zdolny to&nbsp;ten, który ma&nbsp;możliwości dojścia do&nbsp;wybitnych osiągnięć w&nbsp;danej dziedzinie. Zdarzają się również uczniowie uzdolnieni wszechstronnie.</p><br />
<p>Aby&nbsp;rozpoznać i&nbsp;zidentyfikować ucznia szczególnie uzdolnionego, trzeba sięgnąć po&nbsp;kilka metod diagnozujących. Metody&nbsp;te służą diagnozie pedagogicznej. Najprostszą i&nbsp;najłatwiej dostępną, jest obserwacja. Natomiast specjalistyczną, pogłębioną diagnozę prowadzą specjaliści zatrudnieni w&nbsp;poradniach psychologiczno&nbsp;–&nbsp;pedagogicznych.
</p><br />
          <p>Aby&nbsp;rozpoznać i&nbsp;zidentyfikować ucznia szczególnie uzdolnionego, trzeba sięgnąć po&nbsp;kilka metod diagnozujących. Metody&nbsp;te służą diagnozie pedagogicznej. Najprostszą i&nbsp;najłatwiej dostępną, jest obserwacja. Natomiast specjalistyczną, pogłębioną diagnozę prowadzą specjaliści zatrudnieni w&nbsp;poradniach psychologiczno&nbsp;–&nbsp;pedagogicznych.
</p><br />
          <p>Uczeń&nbsp;zdolny na&nbsp;zajęciach lekcyjnych nie&nbsp;zawsze musi być aktywny (trzeba pamiętać, że&nbsp;może zdarzyć się, że&nbsp;dziecko uzdolnione ma&nbsp;trudności w&nbsp;nawiązywaniu kontaktów społecznych), ale&nbsp;prezentowana przez&nbsp;niego wiedza wykracza poza program nauczania, a&nbsp;zadawane pytania świadczą o&nbsp;dociekliwości i&nbsp;poszukiwaniu.
</p><br />
          <p>Warto zwrócić uwagę na&nbsp;prace ucznia, ich treść, wytwory i&nbsp;osiągnięcia, sukcesy w&nbsp;konkursach, turniejach i&nbsp;olimpiadach (tu&nbsp;pomocą będą służyli rodzice, przeprowadźmy więc z&nbsp;nimi wywiad) – być może uczeń pracuje także z&nbsp;osobami spoza szkoły. Dobrze, gdy za&nbsp;zgodą rodziców i&nbsp;ucznia, nawiążemy z&nbsp;nimi kontakt i&nbsp;wymienimy spostrzeżenia.
        </p>
        </div>
      )
    },
    {
      id: 4,
      question: 'Kiedy szukać pomocy u terapeuty ręki?',
      answer: (
        <div>
          <p>Terapeuta ręki diagnozuje sprawność ręki. Proponuje zestaw indywidualnie dobranych ćwiczeń oraz działań, które&nbsp; umożliwiają usprawnienie mechanizmów odpowiadających za&nbsp; kontrolę ruchów kończyny górnej.</p><br />
          <p>W ramach terapii ręki prowadzone są działania, mające na&nbsp; celu udoskonalenie funkcjonowania całej kończyny górnej. Najczęściej kurs terapeuty ręki kończą specjaliści fizjoterapii, nauczyciele, logopedzi, rehabilitanci, pedagodzy specjalni, terapeuci zajmujących się wczesnym wspomaganiem rozwoju oraz osoby pracujące z&nbsp; dziećmi ze&nbsp; specjalnymi potrzebami edukacyjnym.</p><br />
          <p>Terapeuta ręki posiada wiedzę m.in. o:</p>
          <ul className=' list-disc list-inside'>
            <li>anatomii kończyny górnej</li>
            <li>funkcjonowaniu ręki</li>
            <li>sprawności ręki w&nbsp; ontogenezie</li>
            <li>warunkach prawidłowego rozwoju sprawności, profilaktyce</li>
            <li>możliwych przyczynach obniżonej lub zniesionej sprawności ręki</li>
            <li>formach terapii kończyny górnej</li>
          </ul>
          <br />
          <p className=' font-semibold'>Komu dedykowane są tego typu zajęcia terapeutyczne?</p><br />
          <p>Największą grupę odbiorców terapii ręki stanowią dzieci. Wśród nich są m.in.:</p>
          <ul className=' list-disc list-inside'>
            <li>niemowlęta i&nbsp; starsze dzieci, u&nbsp; których obserwuje się zaburzony lub opóźniony rozwój motoryczny</li>
            <li>dzieci z&nbsp; orzeczeniem o niepełnosprawności ruchowej</li>
            <li>dzieci, które wykazują deficyty w&nbsp; rozwoju grafomotorycznej sprawności ręki (opinia o dysgrafii lub ryzyko dysgrafii), z&nbsp; nieustaloną lateralizacją, z&nbsp; wadą wzroku lub zaburzeniem percepcji wzrokowej (a&nbsp; co za tym idzie nieprawidłową kontrolą oko – ręka)</li>
            <li>dzieci, które utraciły sprawność kończyny górnej np. w&nbsp; wyniku długiego unieruchomienia po&nbsp; złamaniu ręki</li>
          </ul><br />
          <p>Terapia ręki bywa potrzebna także osobom dorosłym, m.in.:</p><br />
          <ul className=' list-disc list-inside'>
            <li>po&nbsp; amputacji kończyny górnej, które&nbsp; potrzebują nauczyć się posługiwać drugą ręką</li>
            <li>z&nbsp; niepełnosprawnością ruchową – z&nbsp; wrodzoną niepełnosprawnością i&nbsp; nabytą w różnym wieku, po wypadkach, z&nbsp; utratą sprawności w&nbsp; wyniku choroby</li>
            <li>po unieruchomieniu ręki np. po zakończeniu leczenia złamania kości</li>
          </ul>

        </div>
      )
    },
    {
      id: 5,
      question: 'Czy można przeprowadzić badanie w poradni na wniosek jednego rodzica?',
      answer: (
        <div>
          <p>Co do zasady, poradnia może przeprowadzić badanie na&nbsp; wniosek złożony tylko przez jednego z&nbsp; rodziców. Pozwala na to § 5 ust. 1 rozporządzenia MEN z&nbsp; 7 września 2017 r. w&nbsp; sprawie orzeczeń i&nbsp; opinii wydawanych przez zespoły orzekające działające w&nbsp; publicznych poradniach psychologiczno-pedagogicznych w&nbsp; sprawie orzeczeń i&nbsp; opinii wydawanych przez zespoły orzekające. Stanowi on, że orzeczenia i&nbsp; opinie wydaje się na&nbsp; pisemny wniosek rodzica ucznia lub pełnoletniego ucznia. Z&nbsp; formalnego punktu widzenia, każde z&nbsp; rodziców może samodzielnie złożyć wniosek o&nbsp; przeprowadzenie badania w&nbsp; poradni.</p><br />
          <p>Jeżeli jednak poradnia ma informację, że drugi rodzic ucznia nie zgadza się na badanie, to powinna należy je wstrzymać.</p><br />
          <p className=' font-semibold'>Konflikt między rodzicami – jak powinien postępować zespół</p><br />
          <p>Jeżeli pomiędzy rodzicami jest konflikt, poradnia powinna uzyskać zgodę obojga rodziców na badanie. W takim przypadku należy również informować oboje rodziców odrębnie o prowadzonych działaniach. Jeśli okaże się, że rodzice zajmują w sprawie dziecka odmienne stanowiska, zadecydować powinien sąd.</p><br />
          <p className=' font-semibold'>O istotnych sprawach dziecka rodzice decydują wspólnie</p><br />
          <p>Zgodnie z art. 97 § 1 ustawy z 25 lutego 1964 r. Kodeks rodzinny i opiekuńczy, jeżeli władza rodzicielska przysługuje obojgu rodzicom, każde z nich jest obowiązane i uprawnione do jej wykonywania. Poradnia psychologiczno-pedagogiczna nie może więc działać wbrew woli jednego z rodziców. Jeżeli dziecko pozostaje pod władzą rodzicielską obojga rodziców, to poradnia musi działać zgodnie z wolą obojga.</p><br />
          <p className=' font-semibold'>W razie konfliktu rodziców, w postępowaniu weźmie udział sąd</p><br />
          <p>W ustawie z 25 lutego 1964 r. Kodeks rodzinny i opiekuńczy wskazano, co robić, jeżeli rodzice nie potrafią dojść do porozumienia. W takim przypadku o istotnych sprawach dziecka rozstrzygnie sąd rodzinny</p><br />
          <p>Rodzice podejmujący różne decyzje dotyczące dziecka powinni zgłosić się do sądu opiekuńczego. Wówczas sąd rozstrzygnie spór i zadecyduje w imieniu prawnych opiekunów. Należy liczyć się z tym, że decyzja sądu może być sprzeczna z wolą drugiego rodzica.</p><br />
          <p>Do sądu opiekuńczego może wystąpić również dyrektor poradni. Powinno mieć to miejsce, gdy brak pomocy dla dziecka lub ucznia może skutkować negatywnymi konsekwencjami dla jego rozwoju. Dotyczy to szczególnie przypadku konieczności rozpatrzenia wniosku o wydanie orzeczenia lub organizację nauczania indywidualnego.</p><br />
          <p className=' font-semibold'>W razie konfliktu między rodzicami, o istotnych sprawach dziecka rozstrzygnie sąd rodzinny.</p><br />
          <p className=' font-semibold'>Jak uzyskać informację o sytuacji rodzinnej?</p><br />
          <p>Ścieżka postępowania poradni wydaje się prosta, jeżeli sytuacja rodzinna dziecka jest znana. Nie zawsze tak jest. Ważną kwestią jest więc pozyskanie wiedzy o stanowisku obojga rodziców wobec podejmowanych działań.</p><br />
          <p>Najprostszym sposobem postępowania jest uzyskanie podpisów dwójki rodziców. Inną możliwością jest zadanie odpowiednich pytań w czasie wywiadu z rodzicem składającym wniosek o wydanie orzeczenia lub opinii.</p><br />
          <p>Co ważne – informacji nie można uzyskiwać już w czasie badania dziecka. Samo badanie może być bowiem przeprowadzone dopiero pod warunkiem, że oboje rodzice wyrażają na nie zgodę.</p><br />
          <p className=" font-semibold">Zasady dotyczą wszystkich poradni</p><br />
          <p>W tym miejscu należy zauważyć, że opisane zasady dotyczą wszystkich poradni. Uzyskanie zgody drugiego rodzica na badanie nie ogranicza się do badań w publicznych poradniach psychologiczno-pedagogicznych.</p>
        </div>
      )
    },
    {
      id: 6,
      question: '(Nie)zgoda na badanie diagnostyczne w poradni. Jakie kroki może podjąć psycholog?',
      answer: (
        <div>
          <p className=' font-semibold'>Po pierwsze – zgoda rodziców na zdiagnozowanie dziecka w poradni jest niezbędna</p><br />
          <p>Pierwszym krokiem podejmowanym przed rozpoczęciem diagnozy jest zlecenie jej przeprowadzenia. Z wnioskiem o badanie, w przypadku niepełnoletniego ucznia, występują do poradni psychologiczno-pedagogicznej rodzice lub opiekunowie prawni. To z nimi psycholog omawia cel badania, wyjaśnia w jaki sposób zostanie przeprowadzone, informuje o korzyściach i ewentualnych zagrożeniach, a następnie zawiera kontrakt. Psycholog powinien także poinformować rodziców/opiekunów prawnych ucznia o prawie do odmowy oraz o prawie do wycofania się z diagnozy w dowolnym momencie jej trwania.</p><br />
          <p className="font-semibold">Po drugie – diagnoza za zgodą dziecka</p><br />
          <p>Po uzyskaniu zgody rodziców lub opiekunów prawnych na przeprowadzenie badania diagnostycznego, psycholog powinien zwrócić się o wyrażenie zgody przez dziecko.</p><br />
          <p>Dziecko także jest klientem poradni psychologiczno-pedagogicznej, zaś poddanie go badaniu wbrew woli będzie stanowiło o pozbawieniu go prawa do decydowania o sobie.</p><br />
          <p>Psycholog, który na zlecenie rodziców ma poddać ucznia badaniu powinien w przystępny, adekwatny do jego wieku sposób:</p><br />
          <ul className=' list-disc list-inside'>
            <li>wyjaśnić, jak będzie przebiegało badanie</li>
            <li>poinformować czemu służy badanie</li>
            <li>poprosić o przyzwolenie lub zgodę na przeprowadzenie tego badania</li>
          </ul><br />
          <p>Podobnie jak przy pozyskiwaniu zgody rodziców/opiekunów prawnych, konieczne jest poinformowanie ucznia o prawie do odmowy lub wycofania się z diagnozy w trakcie jej trwania.</p><br />
          <p>Zadaniem psychologa jest doprowadzenie do możliwie najpełniejszego zrozumienia przez ucznia sytuacji, w której się znalazło.</p><br />
          <p className="font-semibold">Sprzeciw ucznia – czy można przeprowadzić badanie</p><br />
          <p>Co w sytuacji, gdy uczeń po przedstawieniu przez psychologa założeń, planowanego przebiegu i znaczenia badania diagnostycznego nie wyraża na nie zgody lub wycofuje się już po jego rozpoczęciu? Nie istnieją przepisy prawne czy zalecenia, które pozwalają wskazać w jakim wieku człowiek osiąga dojrzałość pozwalającą świadome podjęcie decyzji o poddaniu się badaniom psychologicznym. W tym przypadku można posiłkować się przepisami o prawach pacjenta. Zgodnie z art. 17 ust. 1 i ust. 3 ustawy z 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta, pacjent, który ukończył 16 lat ma prawo do wyrażenie zgody na przeprowadzenie badania, ma także prawo do wyrażenia sprzeciwu. Jeżeli wola nastolatka jest sprzeczna z wolą rodziców/opiekunów prawnych – do przeprowadzenia badania wymagane jest zezwolenie sądu opiekuńczego.</p><br />
          <p>W świetle prawa psycholog może rozpocząć lub kontynuować diagnozę, jeżeli zgodzili się na nią rodzice/opiekunowie prawni, gdyż to oni są klientem, o którym mowa w art. 12 ust. 1 i art. 13 ust. 1 ustawy o zwodzie psychologa i samorządzie zawodowym psychologów. Brak zgody ucznia rodzi natomiast problem natury etycznej – czy psycholog i rodzice mogą pozbawić go prawa do samostanowienia? Autorzy komentarza do standardów dla psychologów pracujących w poradniach psychologiczno-pedagogicznych zwracają uwagę na to, że w przypadku diagnozowania dzieci i młodzieży w placówkach oświatowych istnieje ryzyko, że udział w takim badaniu nie będzie dobrowolny [1].</p><br />
          <p className=' italic'>Psycholog może przeprowadzić badanie diagnostyczne mimo braku zgody ucznia, jeżeli jej uzyskanie jest niemożliwe ze względu na jego wiek lub stan zdrowia psychicznego. </p><br />
          <p className=' font-semibold'>Brak zgody rodziców na badanie w poradni – problem prawny i etyczny</p><br />
          <p>Z innym problemem mamy do czynienia w sytuacji, gdy na poddanie dziecka diagnozie nie zgadzają się jego rodzice/opiekunowie prawni. W tej sytuacji psycholog nie może bowiem postąpić niezgodnie z ich wolą – nie tylko ze względów etycznych, ale również prawnych. Ma natomiast obowiązek kierowania się dobrem dziecka i dążenia do tego,  by taką zgodę pozyskać.</p><br />
          <p>Pierwszym krokiem powinno być podjęcie próby przekonania rodziców/opiekunów do wyrażenia zgody na przeprowadzenie badania diagnostycznego. W trakcie rozmowy warto powołać się na prawo dziecka do korzystania z pomocy psychologicznej, którego to prawa nie powinno być pozbawiane. Dopiero gdy rozmowa okaże się nieskuteczna, należy rozważyć wniesienie do sądu rodzinnego wniosku o wgląd w sytuację dziecka. Sąd w dalszych działaniach podejmie stosowne rozstrzygnięcia w stosunku do dziecka oraz rodziców. Może m.in. zobowiązać ich do złożenia wniosku o przeprowadzenia badania czy wyrażenia zgody na udział w badaniu.</p><br />
          <p>Decyzja o wniesieniu wniosku do sądu rodzinnego musi być poprzedzona dokładną i wnikliwą analizą sytuacji dziecka. Poddanie ucznia diagnozie pod przymusem, po interwencji sądu może pociągać za sobą wile negatywnych skutków. Wniosek do sądu powinien zostać złożony wyłącznie wtedy, gdy istnieje uzasadnione podejrzenie, że brak diagnozy zagraża zdrowiu lub życiu dziecka albo wynika z zaniedbywania jego potrzeb [2].</p><br />
          <p className="italic">Odmowa zgody na przeprowadzenie badania diagnostycznego nie powinna być jedyną przesłanką do zawiadomienia sądu rodzinnego.</p><br />
          <p className="font-semibold">Konflikt między rodzicami a badanie dziecka w poradni psychologiczno-pedagogicznej</p><br />
          <p>Problemem, z  którym często mierzą się psychologowie, jest konflikt między rodzicami/opiekunami prawnymi sprawującymi władzę rodzicielską. W przypadku, gdy jedno z nich składa wniosek o wydanie opinii lub orzeczenia i wyraża zgodę na badanie diagnostyczne, zaś drugie sprzeciwia się wykonaniu takiej usługi i nie daje się przekonać do zmiany zdania, rozstrzygnięcia sporu może dokonać jedynie sąd rodzinny.</p><br />
          <p>Jeżeli sytuacja jest na tyle poważna, że w opinii dyrektora poradni zagrożone jest dobro dziecka, zalecane jest złożenie wniosku o wgląd w sytuację rodzinną dziecka. Dyrektor poradni psychologiczno-pedagogicznej może wystąpić do sądu jako pracownik instytucji oświatowej.</p><br />
          <p>W istotnych sprawach dziecka rodzice rozstrzygają wspólnie.  W przypadku braku porozumienia między nimi rozstrzyga sąd opiekuńczy.</p><br />
          <p className="font-semibold">Zgoda na badanie diagnostyczne jako poszanowanie autonomii ucznia</p><br />
          <p>Nie ulega wątpliwości, że diagnoza psychologiczna stanowi nieodłączny element procesu edukacyjnego. Jest więc adresowana do wszystkich uczniów i wszyscy powinni mieć możliwość skorzystania z niej. Badanie diagnostyczne nie powinno być jednak przymusowe i przeprowadzane pod presją lub z obawy, że odmowa doprowadzi do ingerencji organów państwowych. Celem, do którego powinien w pierwszej kolejności dążyć psycholog pracujący w poradni psychologiczno-pedagogicznej powinno być uświadomienie rodziców/opiekunów prawnych ucznia oraz jego samego o korzyściach płynących z poddania się badaniu. Dopiero kiedy nie przyniesie to efektu, a bezpieczeństwo ucznia jest zagrożone, należy rozważyć sięgnięcie po narzędzia prawne przewidujące ingerencję instytucjonalną. </p>
        </div>
      )
    },
    {
      id: 7,
      question: 'W jakich językach prowadzona jest terapia/diagnoza',
      answer: (
        <div>
          Terapie oraz prowadzimy w języku:
          <ul>
            <li>- polskim</li>
            <li>- angielskim</li>
            <li>- niemieckim</li>
            <li>- hiszpańskim</li>
            <li>- włoskim</li>
            <li>- ukraińskim</li>
          </ul>

          <p>Jeżeli jesteś zainteresowany terapią lub diagnozą w innym języku niż polski - skontaktuj się z nami i omów warunki współpracy.</p>
        </div>
      )
    }

    // Dodaj inne pytania i odpowiedzi według potrzeb
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  // Dodajemy efekt, aby dodawać/usuwać klasę CSS "expanded" w zależności od wartości "expandedId"
  useEffect(() => {
    const faqElements = document.querySelectorAll('.faq-content');
    faqElements.forEach((element) => {
      if (expandedId === null || element.id !== `faq-${expandedId}`) {
        element.classList.remove('expanded');
      } else {
        element.classList.add('expanded');
      }
    });
  }, [expandedId]);

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-16 h-screen flex flex-col">
      <h2 className="text-center text-[55px] font-semibold text-gray-800 mt-[60px]">FAQ</h2>
      <p className=' text-center text-[20px] font-light text-gray-500 mb-[30px]'>Poznaj odpowiedzi na najczęściej zadawane pytania</p>
      <div className="flex-1 overflow-y-auto pb-6">
        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-gray-300">
            {faqList.map((faq) => (
              <li key={faq.id} className="py-4">
                <button
                  className="faq-button w-full flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAnswer(faq.id)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 ${expandedId === faq.id ? 'transform rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                {expandedId === faq.id && (
                  <div
                    id={`faq-${faq.id}`}
                    className="faq-content mt-2 pr-4 text-gray-600"
                  >
                    {faq.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;