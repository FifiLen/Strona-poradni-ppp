'use client'
import React from 'react';
import styled from 'styled-components';



const Page = () => {
  const meetings = [
    {
      date: "04.10.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Uzależnienia behawioralne - wprowadzenie",
      host: "Robert Rutkowski",
    },
    {
      date: "11.10.2023",
      duration: "Godzina: 20:00 - 21:00",
      topic: "Uzależnienia cyfrowe dzieci i młodzieży",
      host: "Robert Rutkowski",
    },
    
    // Dodaj inne spotkania tutaj...
  ];

  const Tile = styled.li`
  display: flex;
  borderBottom: 1px solid #ccc;
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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", minHeight: "100vh", marginTop: "50px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "50px", marginTop: "20px"}}>Kalendarz spotkań online</h1>
      <p className=' pt-6 pb-10 text-center'>Zapraszamy na darmowe webinary dla rodziców i nauczycieli dotyczące uzależnień behawioralnych</p>
      <div style={{ width: "80%" }}>
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
      <div style={{ height: "60px" }}></div>
    </div>
  );
}

export default Page;
