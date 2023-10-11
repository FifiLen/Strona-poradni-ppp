'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';




const WebinarButton = () => {
  const [showWebinarModal, setShowWebinarModal] = useState(false);

  const openWebinarModal = () => {
    setShowWebinarModal(true);
  };

  const closeWebinarModal = () => {
    setShowWebinarModal(false);
  };

  const meetings = [
    {
      date: "18.10.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      
    },{
      date: "25.10.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Webinar E-Uzależnienia",
      
    },
    // Add other meetings here...
  ];
  const Tile = styled.li`
display: flex;
border-bottom: 1px solid #ccc;
padding: 20px 0;
align-items: center;
background-color: ${(props) => (props.isEven ? '#921d7f' : '#ffffff')};
color: ${(props) => (props.isEven ? '#ffffff' : '#000000')};
`;

const dataStyle = {
flex: 1,
display: "flex",
justifyContent: "center",
transform: "rotate(-90deg)",
transformOrigin: "center center",
whiteSpace: "nowrap",
fontSize: "24px",
borderBottom: "1px solid #ccc",
padding: "10px",
fontFamily: "'Playfair Display', serif",
};

const dateColumnStyle = {
flex: 2,
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
borderRight: "1px solid #ccc",
padding: "10px",
borderBottom: "none",
textAlign: "center",
paddingLeft: 0,
};

const topicColumnStyle = {
flex: 5,
display: "flex",
flexDirection: "column",
paddingLeft: "40px",
padding: "10px",
textAlign: "left",
};

const dateText = {
marginBottom: "5px",
fontSize: "24px",
fontFamily: "'Playfair Display', serif",
fontWeight: "bold",
};


 

  return (
    <>
      <div className="text-center w-full">
        <button onClick={openWebinarModal} className="bg-gradient-to-r from-[#921d7f] to-[#b23b9e] text-white px-4 py-2 w-full">
          Zapraszamy na darmowy webinar o uzależnieniach <br className=' md:hidden'/><span className='italic text-sm'>(kliknij i poznaj szczegóły)</span>
        </button>
      </div>
      {/* Modal z informacjami o webinarze */}
      {showWebinarModal && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full md:w-[1600px] h-[280px] md:h-[600px] p-6 rounded-lg shadow-lg">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", minHeight: "100vh", }}>
                <h1 className=' text-3xl md:text-5xl text-center' style={{ fontFamily: "'Playfair Display', serif", }}>Kalendarz spotkań online</h1>
                <p className='pt-6 md:pb-10 text-center'>Zapraszamy na darmowe webinary dla rodziców i nauczycieli dotyczące uzależnień behawioralnych</p>
                <div className='w-full md:w-[80%] scale-90 md:scale-100 hidden md:block' >
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {meetings.map((meeting, index) => (
                      <Tile key={index} isEven={index % 2 === 0}>
                        <div style={dataStyle}>DATA</div>
                        <div style={dateColumnStyle}>
                          <div style={dateText}>{meeting.date}</div>
                          <div>{meeting.duration}</div>
                        </div>
                        <div style={topicColumnStyle}>
                          <div style={dateText}>{meeting.topic}</div>
                          <div>{meeting.host}</div>
                        </div>
                      </Tile>
                    ))}
                  </ul>
                </div>
                {/* Przycisk Zapisz się */}
                <div className='flex justify-center items-center gap-5 mt-10'>
                <div className="text-center">
    <a href='/Webinary'
      
      className="bg-[#921d7f] hover:bg-[#b23b9e] text-white py-2 px-2 md:px-6 rounded-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block text-[10px] md:text-xl"
    >
      Kalendarz Webinarów
    </a>
  </div>
  <div className="text-center">
    <a
      href="https://app.livewebinar.com/579-366-824"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#921d7f] hover:bg-[#b23b9e] text-white py-2 px-2 md:px-6 rounded-sm  font-semibold transition duration-300 ease-in-out transform hover:scale-105 inline-block text-[10px] md:text-xl"
    >
      Zapisz się teraz
    </a>
  </div>
  {/* Przycisk Zamknij */}
  <div className="text-center">
  <button
    onClick={closeWebinarModal}
    className="bg-[#921d7f] hover:bg-[#b23b9e] text-white py-2 px-2 md:px-6 rounded-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105  flex items-center gap-2 text-[10px] md:text-xl"
  >
     Zamknij<FaTimes />
  </button>
  </div>
  {/* Add another button */}
  
</div>

                
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WebinarButton;
