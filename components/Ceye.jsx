import Link from 'next/link';
import React, { useState } from 'react';

const Ceye = () => {
    const [isHovered, setIsHovered] = useState([false, false, false]);

    const rectangles = [
        { 
            href: "/C-Eye", 
            title: "C-Eye® PRO",
            label: "Dowiedz się więcej o C-Eye® PRO",
            textColor: "text-gray-800",
            hoverTextColor: "text-white"
        },
        { 
            href: "/Vr-terapy", 
            title: "Terapia VR",
            label: "Dowiedz się więcej o Terapii VR", 
            textColor: "text-gray-800",
            hoverTextColor: "text-white"
        },
        { 
            href: "/Biofeedback-VR", 
            title: "Easy Biofeedback VR",
            label: "Dowiedz się więcej o Biofeedback VR", 
            textColor: "text-white",
            hoverTextColor: "text-white"
        }
    ];

    return (
        <section className='mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-36 hidden'>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-4">Technologie z których korzystamy</h3>
            <p className='text-center pb-8 text-gray-600'>Dowiedz się więcej na ich temat</p>

            {rectangles.map((rectangle, index) => (
                <div 
                    key={index}
                    className={`relative rounded-xl overflow-hidden h-48 sm:h-[200px] md:h-[250px] lg:h-64 xl:h-64 shadow-lg transition-shadow duration-500 hover:shadow-xl mb-4 ${index === 2 ? 'bg-green-500' : 'bg-white'}`}
                    onMouseEnter={() => {
                        const newState = [...isHovered];
                        newState[index] = true;
                        setIsHovered(newState);
                    }}
                    onMouseLeave={() => {
                        const newState = [...isHovered];
                        newState[index] = false;
                        setIsHovered(newState);
                    }}
                >
                    <div className={`absolute inset-0 bg-opacity-30 backdrop-blur-lg flex items-center justify-center z-10 transform scale-0 transition-transform duration-1000 ease-in-out ${isHovered[index] ? 'scale-100' : 'scale-0'}`}>
                        <Link href={rectangle.href}>
                            <button className={`px-4 py-2 border border-gray-800 rounded-lg bg-white text-gray-800 transition-transform transform hover:scale-105`}>
                                {rectangle.label}
                            </button>
                        </Link>
                    </div>

                    <div className={`p-4 absolute bottom-0 transition-all duration-1000 ease-in-out ${isHovered[index] ? 'blur-md' : ''}`}>
                        <h3 className={`mb-2 text-xl font-semibold ${isHovered[index] || index === 2 ? 'text-white' : rectangle.textColor}`}>{rectangle.title}</h3>
                        <p className={`${isHovered[index] || index === 2 ? 'text-white' : 'text-gray-600'}`}>Innowacyjne urządzenie medyczne, które rewolucjonizuje dziedzinę diagnostyki oczu. Wykorzystując najnowocześniejszą technologię, umożliwia szybkie, precyzyjne i nieinwazyjne badanie oka w celu wykrycia różnych chorób i zaburzeń wzroku.</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Ceye;
