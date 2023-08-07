import Info from "@components/Info"
const Home = () => {
  return (

    <><section className=" mx-[200px] flex justify-center mt-[60px] min-h-[700px]">
      <div className="flex flex-col items-center">
        <h1 className="font-outfit pb-5 text-[70px] text-center font-black leading-[65px] text-transparent bg-clip-text bg-gradient-to-r from-[#cc007a92] to-pink-800">Poradnia Psychologiczno Pedagogiczna Magnolia</h1>
        <p className="text-[20px] font-normal text-gray-400 font-poppins">Twoje miejsce relaksu i spokoju...</p>
        <div className="rounded-[20px] overflow-hidden mt-8 h-[450px]">
          <video className="w-full h-auto" autoPlay loop muted>
            <source src="/assets/movie.mp4" type="video/mp4" />
            {/* Dodaj inne formaty filmu w przypadku nieobsługiwanych przeglądarek */}
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </section><Info /></>
)}

export default Home