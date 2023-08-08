import React from 'react';
import Link from 'next/link';

const UserPanel = () => {
  return (
    <section className='flex flex-col justify-center items-center h-[500px] mx-auto'>
      <h1 className='text-4xl mb-4 font-semibold'>Uprzejmie informujemy</h1>
      <p className='text-md mb-4 text-center'>Funkcja "Panelu Pacjenta" zostanie dodana już niebawem</p>
      <Link href="/">
      <button className='bg-[#921d7f] text-white px-8 py-4 rounded'>Powrót na stronę główną</button>
      </Link>
    </section>
  )
}

export default UserPanel;
