'use client'
import Link from 'next/link';
import React, { useState } from 'react';



const Page = () => {
  const meetings = [
    
    
    {
      date: "15.11.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      
    },
    {
      date: "22.11.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      
    },{
      date: "29.11.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      
    },
    {
      date: "04.10.2023 (Te spotkanie już się odbyło)",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      host: "dr Maciej Dębski",
      expired: true,
    },
    {
      date: "11.10.2023 (Te spotkanie już się odbyło)",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      host: "dr Maciej Dębski",
      expired: true,
    },
    {
      date: "18.10.2023 (Te spotkanie już się odbyło)",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      expired: true,
    },
    {
      date: "25.10.2023 (Te spotkanie już się odbyło)",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      expired: true
    },
    {
      date: "08.11.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      expired: true
    },
    
  ];
  
  const questions = [
    { question: "Pytanie 1?", answer: "Odpowiedź 1" },
    { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-start min-h-screen mt-16 p-12 space-y-12 md:space-y-0 md:space-x-12">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-3xl text-gray-900 border-b-2 pb-2">Kalendarz spotkań online</h1>
        <div className="w-full p-6 space-y-6">
          <ul>
            {meetings.map((meeting, index) => (
              <li key={index} className={`py-3 px-3 border-b-2 rounded-sm ${index % 2 === 0 ? 'border-[#921d7f]' : 'border-gray-300'} ${meeting.expired ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                <div className={`text-md font-bold mb-1 ${meeting.expired ? 'line-through' : ''}`}>{meeting.date}</div>
                <div className="text-xs mb-1">{meeting.duration}</div>
                <div className="text-lg">{meeting.topic}</div>
                {meeting.host && <div className="text-sm mt-1 italic">{meeting.host}</div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
{/* 
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">Najciekawsze pytania po spotkaniach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className="p-4 py-8 border-2 border-gray-600 rounded-md hover:border-[#921d7f] transition duration-300"
              onMouseEnter={() => setActiveQuestion(index)}
              onMouseLeave={() => setActiveQuestion(null)}
            >
              {activeQuestion === index ? (
                <div className="text-sm text-gray-600">{item.answer}</div>
              ) : (
                <div className="truncate text-gray-900 font-semibold">{item.question}</div>
              )}
            </div>
          ))}
        </div>
      </div>
*/}
       <div className="md:w-1/2 space-y-8">
        <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">Zapisz się na webinar</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Link href="https://app.livewebinar.com/579-366-824"><div className=' p-6 border-2 border-gray-600 rounded md flex justify-start items-center'>
            Zapisz się na webinar →
          </div></Link>
          
        </div>
      </div>
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">PDF do pobrania</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        <div className=' p-6 border-2 border-gray-600 rounded md flex justify-start items-center'>
        <a href="/assets/zabawy.pdf" download target="_blank" rel="noopener noreferrer">Pobierz plik pdf →</a>
        </div>
        </div>
      </div>




    </div>
  );
}

export default Page;