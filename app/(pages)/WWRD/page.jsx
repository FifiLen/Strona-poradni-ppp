import React from 'react'

const page = () => {
  return (
    <div className=' max-w-6xl md:mx-auto my-20 mx-10'>
        
        <h1 className=' text-base font-semibold mb-10 text-[#921d7f]'>Bezpłatna Terapia Wczesnego Wspomagania Rozwoju Dziecka (WWRD) w Poradni Psychologiczno-Pedagogicznej MAGNOLIA:</h1>
        <p>W celu skorzystania z bezpłatnej Terapii Wczesnego Wspomagania Rozwoju Dziecka (WWRD) w Poradni Psychologiczno-Pedagogicznej MAGNOLIA, należy postępować zgodnie z poniższymi krokami:</p>
        
        <h2 className=' font-semibold mt-5 mb-3'>1. Wizyta u lekarza:</h2>
        <p>Pierwszym krokiem jest wizyta u lekarza pediatry lub lekarza specjalisty. <span className=' text-[#921d7f] font-semibold'>Lekarz musi wydać zaświadczenie lekarskie</span>, które potwierdza opóźnienie, zaburzenie lub niepełnosprawność u dziecka.</p>
        
        <h3 className='font-semibold text-[#921d7f] mt-5'>Ważne jest, aby lekarz dokładnie określił rodzaj zaburzenia lub niepełnosprawności oraz stwierdził potrzebę wczesnego wspomagania rozwoju z uwagi na konkretne przyczyny, takie jak:</h3>
        <ul className=' list-disc ml-4 my-3 mb-5 space-y-2'>
            <li>opóźniony lub zaburzony rozwój psychoruchowy (częsty i skuteczny argument!!)</li>
            <li>niepełnosprawność ruchowa w tym z afazją,</li>
            <li>niepełnosprawność intelektualną,</li>
            <li>niepełnosprawność sprzęgającą (kilka niepełnosprawności równocześnie)</li>
            <li>autyzm i Zespół Aspergera,</li>
            <li>zaburzenia wzroku, słuchu, mowy.</li>
        </ul>
        
        <h2 className=' font-semibold mb-3 mt-4'>2. Wizyta w poradni publicznej</h2>
        <p>Następnie udaj się do publicznej Poradni Psychologiczno-Pedagogicznej, która obsługuje Twój rejon,<span className=' text-[#921d7f]'>(rejonizacja – sprawdź pod opieką, której poradni Publicznej znajduje się przedszkole Twojego dziecka)</span> </p>

        <h2 className=' font-semibold mt-4 mb-3 text-[#921d7f]'>3. Zgłoś się z dzieckiem na diagnozę i wypełnij wniosek o wydanie opinii o potrzebie wczesnego wspomagania rozwoju.</h2>
        <p>Do wniosku dołącz dokumenty, takie jak zaświadczenie lekarskie, wcześniejsze opinie psychologiczne lub pedagogiczne oraz dokumenty medyczne. Poradnia ma obowiązek wydać opinię w ciągu 30 dni od złożenia wniosku.</p>

        <h2 className=' font-semibold mt-4 mb-3'>4. Odbierz opinię:</h2>
        <p>Po otrzymaniu opinii o potrzebie wczesnego wspomagania rozwoju z publicznej Poradni Psychologiczno-Pedagogicznej, przyjdź z nią do poradni Psychologiczno-Pedagogicznej MAGNOLIA.</p>

        <h4 className=' font-semibold mt-5 mb-4 text-[#921d7f]'>Poradnia Psychologiczno-Pedagogiczna MAGNOLIA:</h4>
        <ul>
          <li className=' my-2 font-semibold'>Kontakt Telefoniczny:</li>
          <li>+48 690 515 224</li>
          <li>+48 503 192 950</li>
          <li className='my-2 font-semibold' >e-mail:</li>
          <li>poradniamagnolia@gmail.com</li>
          <li className='my-2 font-semibold'>Godziny otwarcia:</li>
          <li>Poniedziałek - Piątek 7:00 - 21:00</li>
        </ul>
        
        <div className=' p-4 border-2 rounded-md mt-4 w-full'><a href="/assets/WWRD.pdf" target='_blank' className=' text-black'>Pobierz pdf z instrukcją darmowych zajęć WWRD →</a></div>
        
    </div>
  )
}

export default page