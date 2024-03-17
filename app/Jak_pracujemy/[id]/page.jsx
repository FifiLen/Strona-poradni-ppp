
import projects from "@app/Projects";
import Link from "next/link";


export default function Page({ params }) {
  const project = projects.find(p => p.id === parseInt(params.id));

  // Jeśli nie znaleziono projektu, zwróć komunikat
  if (!project) {
    return <div className="container">Projekt nie został znaleziony.</div>;
  }

  return (
    <div className=" my-10 mx-auto max-w-7xl px-4 py-8">
      <Link href={"/Jak_pracujemy"}>
      <div className=" p-2 border border-black w-32 text-black flex justify-center items-center rounded-md font-semibold mb-4">Powrót →</div>
      </Link>
      <h1 className="text-5xl font-semibold mt-10 mb-8">{project.name}</h1>
      <h3 className=" text-4xl text-pink-700 font-semibold mb-4">Dla kogo?</h3>
      {project.descriptionAkapit.map((item, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg">{item.content}</p>
          </div>
        ))}
      <p className="text-pink-700 text-xl font-semibold mb-12">Wiek: {project.age}</p>
      {/* <div className="grid grid-cols-3 gap-6">
        {project.gridImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-md" />
        ))}
      </div> */}
      <div className="mb-8 mt-20">
      <h3 className=" text-4xl text-pink-700 font-semibold mb-10">Dla czego warto?</h3>


      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-12">

      {project.additionalDescription.map((item, index) => (
  <div key={index} className="mb-6">
    <div>
      <h4 className="text-3xl font-semibold mb-2">{item.title}</h4>
      <p className="text-lg">{item.content}</p>
    </div>
    {/* Powtórz ten blok dla drugiej kolumny */}
  </div>
))}

</div>



        
        
      </div>

      {/* <div className="grid grid-cols-3 gap-6">
        {project.gridImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-md" />
        ))}
      </div> */}

    </div>
  );
};