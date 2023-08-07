import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <section className="mx-4 md:mx-[200px]">
            <h2 className="text-center text-3xl md:text-[55px] font-semibold text-gray-800 mt-[60px]">Dołącz do zespołu Magnolii</h2>
            <p className="text-gray-500 pb-8 pl-[1px] text-center">Zapraszamy do kontaktu</p>
            
            <div className="py-8 flex flex-col md:flex-row justify-center mt-[15px] mb-[100px] gap-5 items-stretch">
                <div className="w-full md:w-[600px] mb-4 md:mb-0">
                    <div className="bg-[rgb(61,162,117)] p-4 md:p-8 rounded-[20px] shadow-2xl h-full">
                        <h2 className="text-[40px] font-black mb-4 text-white">Uwaga</h2>
                        <div className='w-[100%]'>
                            <p className='font-semibold text-[18px] text-white'>Jeżeli jesteś zainteresowany podjęciem pracy w naszej Poradni, zapewniamy:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1em' }} className='mt-4 text-white font-light'>
                                <li>umowę b2b lub umowę zlecenie lub umowę o pracę - kwestia indywidualna</li>
                                <li>atrakcyjne wynagrodzenie</li>
                                <li>możliwość rozwoju zawodowego</li>
                                <li>wyposażony gabinet</li>
                                <li>miłą i życzliwą atmosferę</li>
                                <li>możliwość rozwoju</li>
                            </ul>
                            <p className='font-semibold text-[18px] mt-4 text-white'>Wymagania: </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1em' }} className=' mt-4 font-thin text-white'>
                                <li>kwalifikacje zawodowe,</li>
                                <li>gotowość/doświadczenie w prowadzeniu terapii indywidualnej<br /> z dziećmi i młodzieżą oraz z osobami dorosłymi,</li>
                                <li>kreatywność i samodzielność w działaniu,</li>
                                <li>zaangażowanie w pracę.</li>
                            </ul>
                            <p className='font-semibold text-[18px] mt-4 mb-4 text-white'>Jeśli wykonujesz swój zawód z pasją, <br/>masz szereg pomysłów z obszaru terapii – zapraszamy do zespołu. </p>

                            <p className='font-semibold mb-3 text-white'>Skontaktuj się z nami.</p>
                            <p className='text-white font-thin'>Niepubliczna Poradnią Psychologiczno-Pedagogiczna MAGNOLIA</p>
                            <p className='text-white font-thin'>ul. Magnolii 25</p>
                            <p className='text-white font-thin'>44-207 Rybnik</p>
                            <p className='text-white font-thin'>ul. Rudzka 13</p>
                            <p className='text-white font-thin'>budynek B, III piętro, pok. 3.3</p>
                            <p className='text-white font-thin'>44-200 Rybnik</p>
                            <p className='text-white font-thin'>Telefon/Whatsapp: 502 162 365</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-center w-full md:w-[600px]">
                    <Image
                        src="/assets/join.jpg"
                        alt="Mapa"
                        layout="fill"
                        objectFit="cover"
                        className="absolute z-0 rounded-[25px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Page;
