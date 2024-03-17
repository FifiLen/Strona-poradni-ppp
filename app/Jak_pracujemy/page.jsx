'use client'
import React from 'react';
import Link from 'next/link';
import projects from '@app/Projects';
import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';


const Program = () => {
  return (
    <>
      <div className="border-b border-gray-300 py-4 md:py-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-display text-slate-800 md:text-3xl font-semibold mb-2 md:mb-4 pt-3 text-center md:text-left">
            Jak pracujemy?
          </h2>
        </div>
      </div>
      <section className="mt-10 py-6 md:py-24">
        {projects.map(project => (
          <div className="mx-auto mb-40" key={project.id}>
            <div className="grid grid-cols-1 items-center flex-col md:flex-row xl:grid-cols-2">
              {/* Obrazek */}
              <div className="relative mb-4 md:mb-0">
                <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                  <Image src={`${project.gridImages[0]}`} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw" priority={true} alt="dziecko ubierające maskę" />
                </div>
              </div>

              {/* Tekst informacyjny */}
              <div className="mx-6 md:mr-16 flex-col justify-center items-center">
                <h2 className="text-4xl md:text-4xl text-left font-semibold mb-6 font-display">
                  {project.name}
                </h2>

                <p className="text-gray-700 text-base text-left mb-6">
                  {project.description}
                </p>

                <Link href={`/Jak_pracujemy/${project.id}`} className=' text-slate-800 flex justify-start'>
                  <div className='mt-6 w-fit cursor-pointer flex items-center justify-center shadow-md border bg-slate-50/80 border-slate-700 rounded-xl custom-shadow3'>
                    {`Dowiedz się więcej o ${project.name}`}<FaRegArrowAltCircleRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Program;
