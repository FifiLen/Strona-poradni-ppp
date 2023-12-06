'use client'
import Link from 'next/link';
import React, { useState } from 'react';



const Page = () => {
  // const meetings = [
    
    
    
  //   {
  //     date: "22.11.2023",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
      
  //   },{
  //     date: "29.11.2023",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
      
  //   },
  //   {
  //     date: "04.10.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     host: "dr Maciej Dębski",
  //     expired: true,
  //   },
  //   {
  //     date: "11.10.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     host: "dr Maciej Dębski",
  //     expired: true,
  //   },
  //   {
  //     date: "18.10.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     expired: true,
  //   },
  //   {
  //     date: "25.10.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     expired: true
  //   },
  //   {
  //     date: "08.11.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     expired: true
  //   },
  //   {
  //     date: "15.11.2023 (Te spotkanie już się odbyło)",
  //     duration: "Godzina: 20:00 - 21:00",
  //     topic: "Webinar E-Uzależnienia",
  //     expired: true
  //   },
    
  // ];
  
  // const questions = [
  //   { question: "Pytanie 1?", answer: "Odpowiedź 1" },
  //   { question: "Pytanie 2?", answer: "Odpowiedź 2" },
  //   { question: "Pytanie 2?", answer: "Odpowiedź 2" },
  //   { question: "Pytanie 2?", answer: "Odpowiedź 2" },
  //   { question: "Pytanie 2?", answer: "Odpowiedź 2" },
  //   { question: "Pytanie 2?", answer: "Odpowiedź 2" },
    
  // ];

  // const [activeQuestion, setActiveQuestion] = useState(null);

  const InfoBlock = ({ infoText, alignLeft }) => {
    const infoBlockStyle = {
      top: '-10%',
      left: alignLeft ? '0%' : 'auto',
      right: alignLeft ? 'auto' : '-300%',
      transform: alignLeft ? 'translateX(-50%) translateX(-10%)' : 'translateX(-50%) translateX(10%)',
    };
  
    return (
      <div className={`info-container ${alignLeft ? 'left' : 'right'}`} style={infoBlockStyle}>
        <p>{infoText}</p>
      </div>
    );
  };
  
  
    const [showInfo1, setShowInfo1] = useState(false);
    const [showInfo2, setShowInfo2] = useState(false);

  return (
    <div className='w-full'>
      <div className='max-w-6xl pb-20 m-auto flex-col justify-center items-start pt-10'>
        <div className='flex-col mb-10 pb-6 border-b'>
          <h2 className='font-display text-2xl md:text-xl text-gray-700 text-center'>Przegapiłeś spotkanie z cyklu o E-uzależnieniach?</h2>
  
          <div className='flex gap-8 mt-3 justify-center items-center'>
            <Link href={"https://sklep.rybnikonline.eu/?product_cat=szkolenia-online-offline"} target='_blank'>
              <div className='h-16 w-60 md:w-[300px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button className='text-sm'>Po nagrania zajrzyj tutaj →</button>
              </div>
            </Link>
  
            <Link href={"https://www.youtube.com/channel/UCsEXOxpnjOWB5XMJo46-whg"} target='_blank'>
              <div className='h-16 w-60 md:w-[300px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button className='text-sm'>Q&A po cyklu spotkań →</button>
              </div>
            </Link>
          </div>
        </div>
  
        <div className='flex-col border-b pb-10'>
          <h2 className='font-display text-6xl md:text-6xl text-center'>Nadchodzący cykl webinariów</h2>
          <p className='font-display text-3xl md:text-3xl mt-4 text-gray-700 text-center'>Stany lękowe/nadwrażliwość</p>
          <p className='mt-12 text-xl text-center text-gray-700'>Prowadzący:</p>
  
          <div className="mt-6 flex justify-center gap-20">
        <div className='flex-col items-center justify-center text-center space-y-5'>
          <div
            className="img-container"
            onMouseEnter={() => setShowInfo1(true)}
            onMouseLeave={() => setShowInfo1(false)}
          >
            <img
              src="/assets/test.png"
              height={170}
              width={170}
              alt=""
            />
            {showInfo1 && <InfoBlock
              infoText={
                <>
                  <p className='font-semibold'>Wioletta Ginter</p>
                  <p>Magister pedagogiki specjalizujący się w poradnictwie <br /> i pomocy psychopedagogicznej. Jako aktywny pedagog specjalny, terapeuta ręki, specjalista w  edukacji włączającej i wykładowca, posiada bogate doświadczenie, przekazując swoją wiedzę zarówno uczniom, jak i nauczycielom w  różnych instytucjach edukacyjnych.</p>
                </>
              }
              alignLeft={true}
            />}
          </div>
          <p className='text-lg'>Wioletta Ginter</p>
        </div>

        <div className='flex-col items-center justify-center text-center space-y-5'>
  <div
    className="img-container"
    onMouseEnter={() => setShowInfo2(true)}
    onMouseLeave={() => setShowInfo2(false)}
  >
    <img
      src="/assets/t5.png"
      height={170}
      width={170}
      alt=""
    />
    {showInfo2 && <InfoBlock
      infoText={
        <>
          <p className='font-semibold'>Anna Ławniczak</p>
          <p>Magister psychologii, specjalizujący się w seksuologii klinicznej i psychologii kryminologicznej. Wykładowca studiów podyplomowych z obszaru pedagogiki specjalnej, seksuologii, seksuologii klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się w pracę na rzecz dzieci w szkołach i przedszkolach.</p>
        </>
      }
      alignLeft={false}
    />}
  </div>
  <p className='text-lg'>Anna Ławniczak</p>
</div>
      </div>
  
          <div className='flex justify-center items-center gap-4 mt-16'>
            <Link href={"https://app.livewebinar.com/579-366-824"} target='_blank'>
              <div className='h-20 w-96 md:w-[900px] rounded-md border border-gray-300 flex items-center justify-center'>
                <button>Zapisy na zbliżające się webinaria →</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}  
//     <div className="flex flex-col md:flex-row items-start min-h-screen mt-4 p-12 space-y-12 md:space-y-0 md:space-x-12">
//       {/* <div className="md:w-1/2 space-y-8">
//         <h1 className="text-3xl text-gray-900 border-b-2 pb-2">Kalendarz spotkań online</h1>
//         <div className="w-full p-6 space-y-6">
//           <ul>
//             {meetings.map((meeting, index) => (
//               <li key={index} className={`py-3 px-3 border-b-2 rounded-sm ${index % 2 === 0 ? 'border-[#921d7f]' : 'border-gray-300'} ${meeting.expired ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
//                 <div className={`text-md font-bold mb-1 ${meeting.expired ? 'line-through' : ''}`}>{meeting.date}</div>
//                 <div className="text-xs mb-1">{meeting.duration}</div>
//                 <div className="text-lg">{meeting.topic}</div>
//                 {meeting.host && <div className="text-sm mt-1 italic">{meeting.host}</div>}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div> */}
// {/* 
//       <div className="md:w-1/2 space-y-8">
//         <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">Najciekawsze pytania po spotkaniach</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//           {questions.map((item, index) => (
//             <div 
//               key={index} 
//               className="p-4 py-8 border-2 border-gray-600 rounded-md hover:border-[#921d7f] transition duration-300"
//               onMouseEnter={() => setActiveQuestion(index)}
//               onMouseLeave={() => setActiveQuestion(null)}
//             >
//               {activeQuestion === index ? (
//                 <div className="text-sm text-gray-600">{item.answer}</div>
//               ) : (
//                 <div className="truncate text-gray-900 font-semibold">{item.question}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
// */}
//   <div className=' w-3/4 space-y-10'>
//        <div className="md:w-1/2 space-y-8">
//         <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">Zapisz się na webinar</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
//           <Link href="https://app.livewebinar.com/579-366-824"><div className=' p-6 border-2 border-gray-600 rounded md flex justify-start items-center'>
//             Zapisz się na webinar →
//           </div></Link>
          
//         </div>
//       </div>

//       <div className="md:w-1/2 space-y-8">
//         <h2 className="text-3xl text-gray-900 mb-5 border-b-2 pb-2">Przegapiłeś spotkanie?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
//         <div className=' p-6 border-2 border-gray-600 rounded md flex justify-start items-center'>
//         <a href="https://sklep.rybnikonline.eu/?product_cat=szkolenia-online-offline" target="_blank" rel="noopener noreferrer">Zajrzyj tutaj →</a>
//         </div>
//         </div>
//       </div>
// </div>



//     </div>
//   );
// }

export default Page;