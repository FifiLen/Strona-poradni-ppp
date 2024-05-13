import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const HeroSocial = () => {
  return (
    <section>

    <div className='bg-[#FFFDD3] h-80 flex flex-col items-center justify-center  text-center'>
      <h2 className='text-3xl md:text-5xl font-semibold tracking-tighter mb-4'>Bądź na bieżąco z naszymi mediami społecznościowymi!</h2>
      <p className='mb-6 text-base md:text-xl'>Obserwuj nas, aby otrzymywać najnowsze informacje, aktualności i więcej!</p>
      <div className='flex gap-6'>
        <Link href='https://www.facebook.com/poradnia.magnolia' target='_blank'>
          <FaFacebook className='w-12 h-12 hover:text-blue-700 text-blue-600' />
        </Link>
        
        <Link href='https://www.youtube.com/@PPP-MAGNOLIA' target='_blank'>
          <FaYoutube className='w-12 h-12 hover:text-red-600 text-red-500' />
        </Link>
        <Link href='https://www.tiktok.com/@poradnia_magnolia_rybnik' target='_blank'>
          <FaTiktok className='w-12 h-12 hover:text-black text-zinc-800' />
        </Link>
      </div>
    </div>
   
    </section>
  );
};

export default HeroSocial;
