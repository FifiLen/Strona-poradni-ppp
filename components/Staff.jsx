import React from 'react';
import Link from 'next/link';

const Staff = () => {
  const staffData = [
    {
      name: 'Jan Kowalski',
      specialization: 'Psycholog',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'
    },
    {
      name: 'Anna Nowak',
      specialization: 'Psychoterapeuta',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'

    },
    {
      name: 'Anna Nowak',
      specialization: 'Psychoterapeuta',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'

    },
    {
      name: 'Anna Nowak',
      specialization: 'Psychoterapeuta',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'

    },
    {
      name: 'Anna Nowak',
      specialization: 'Psychoterapeuta',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'

    },
    {
      name: 'Anna Nowak',
      specialization: 'Psychoterapeuta',
      image: '/assets/doc2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quos.'

    },
    
    // Dodaj dane dla pozostałych członków personelu
    // ...
  ];

  return (
    <section className="mx-6 sm:mx-16 lg:mx-[200px] mb-[100px] mt-36 hidden">
      <h3 className="text-4xl font-semibold text-gray-800 pb-8 text-center sm:text-5xl">Poznaj naszych specjalistów</h3> 
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.specialization}</p>
              <p className="text-gray-600">{person.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-5">
        <Link href="/Staff" passHref>
          <div className="flex items-center font-semibold text-gray-700 cursor-pointer relative group hover:text-pink-400">
            <p className="mr-1">Dowiedz się więcej</p>
            <svg
              className="w-3 h-3 text-pink-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Staff;