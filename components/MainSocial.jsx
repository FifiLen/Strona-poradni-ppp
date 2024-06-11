import React from "react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const MainSocial = () => {
  return (
    <div className=" py-10">
      <h4 className=" text-center font-semibold text-2xl md:text-3xl mb-2">
        Bądź na bieżąco z naszymi mediami społecznościowymi!
      </h4>
      <p className=" text-center font-normal">
        Obserwuj nas, aby otrzymywać najnowsze informacje, aktualności i więcej!
      </p>
      <div className="flex justify-center space-x-6 py-4">
        <a
          href="https://www.facebook.com/poradnia.magnolia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300"
          aria-label="Facebook"
        >
          <FaFacebook size={32} />
        </a>

        <a
          href="https://www.youtube.com/@PPP-MAGNOLIA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition duration-300"
          aria-label="YouTube"
        >
          <FaYoutube size={32} />
        </a>

        <div className="border-l-2 h-8 border-gray-300"></div>

        <a
          href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition duration-300"
          aria-label="TikTok"
        >
          <FaTiktok size={32} />
        </a>

        <a
          href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition duration-300"
          aria-label="Instagram"
        >
          <AiOutlineInstagram size={32} />
        </a>
      </div>
    </div>
  );
};

export default MainSocial;

// <section>

// <div className='bg-[#FFFDD3] h-80 flex flex-col items-center justify-center  text-center'>
//   <h2 className='text-3xl md:text-5xl font-semibold tracking-tighter mb-4'>Bądź na bieżąco z naszymi mediami społecznościowymi!</h2>
//   <p className='mb-6 text-base md:text-xl'>Obserwuj nas, aby otrzymywać najnowsze informacje, aktualności i więcej!</p>
//   <div className='flex gap-6'>
//     <Link href='https://www.facebook.com/poradnia.magnolia' target='_blank'>
//       <FaFacebook className='w-12 h-12 hover:text-blue-700 text-blue-600' />
//     </Link>

//     <Link href='https://www.youtube.com/@PPP-MAGNOLIA' target='_blank'>
//       <FaYoutube className='w-12 h-12 hover:text-red-600 text-red-500' />
//     </Link>
//     <Link href='https://www.tiktok.com/@poradnia_magnolia_rybnik' target='_blank'>
//       <FaTiktok className='w-12 h-12 hover:text-black text-zinc-800' />
//     </Link>
//   </div>
// </div>

// </section>
