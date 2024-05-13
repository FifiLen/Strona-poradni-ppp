import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = () => {
  return (
    <div className="fixed top-0 w-screen h-screen bg-black/60 z-[1000]">
      <div
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className=" bg-white rounded-[40px] fixed top-[50%] left-[50%] w-full max-w-[460px] p-1"
      >
        <Card className="w-full bg-blue-500/60 text-zinc-800 rounded-[40px] card-special-zsk">
          <CardHeader>
            <div>
              <img src="/assets/info.svg" width={120} alt="Opis obrazu" />
            </div>
            <CardTitle className="pb-3 pt-10 text-center">
              Dodatkowy punkt Poradni
              <br />
              Psychologiczno-Pedagogicznej MAGNOLIA{" "}
            </CardTitle>

            <CardDescription className="text-zinc-800 leading-8 ">
              Poradnia Psychologiczno-Pedagogiczna MAGNOLIA zaprasza na wizytę w
              nowo otwartym punkcie terapeutyczno-diagnostycznym. <br />
              Od czerwca 2024 roku z części usług będzie można skorzystać
              w budynku rybnickiego kampusu pod adresem: ul. Rudzka 13c, budynek
              B (III piętro, pokój 3.3).
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-between rounded-full border-[1.2px] bg-white border-zinc-800 py-[8px] pr-2 pl-4 text-zinc-800 text-[13px] font-medium hover:bg-zinc-800 hover:text-white"
            >
              <p className="text-center flex-1">Zamknij informacje</p>
              <IoMdCloseCircle className="text-xl ml-2" />
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
