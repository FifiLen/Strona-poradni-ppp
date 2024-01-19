import Link from 'next/link';


const WebinarButton = () => {


return (
  <Link href="/Webinary" className='cursor-pointer'>
  <div className=' w-full py-2 bg-[#921d7f] flex justify-center items-center'>
    
    <button className=' text-white text-sm'>Przegapiłeś cykl webinarów o E-uzaleznieniach? <span className=' italic font-light'>(Zajrzyj tutaj→)</span> </button>
    
  </div>
  </Link>
)
}
export default WebinarButton;

