import React, { useState } from 'react';

const Lista = ({ title, included }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex justify-center items-center'>
    <div className="mb-4 ">
      <div className="flex items-center">
        <button
          onClick={handleToggle}
          className={`p-3 px-5 rounded-lg text-white bg-[#921d7f] hover:bg-gray-300 focus:outline-none cursor-pointer`}
        >
          {isExpanded ? '-' : '+'}
        </button>
        <div className="ml-4 flex items-start justify-start">
          <div className="bg-[#921d7f] text-white p-3 w-[800px] rounded-lg uppercase">
            {title}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className=" p-2 mt-2 rounded-lg w-[800px]">
          {included}
        </div>
      )}
    </div>
    </div>
  );
};

const ListaContainer = () => {
  const listaItems = [
    { title: 'Element 1', included: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam quaerat quis? Minus, et voluptatum." },
    { title: 'Element 2', included: "Zawartość" },
    { title: 'Element 3', included: "Zawartość" },
  ];

  

 
  return (
    <div>
      {listaItems.map((item, index) => (
        <Lista key={index} title={item.title} included={item.included}/>
        
      ))}
    </div>
  );
};

export default ListaContainer;
