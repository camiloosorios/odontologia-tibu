import Image from "next/image";
import Button from "./Button";

type QuienesSomosType = {
    hasLocation : boolean
}

export default function QuienesSomos({ hasLocation } : QuienesSomosType) {
  return (
    <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
            <Image src="/images/odontologa.jpg" alt="Odontóloga Llency Jaimes Sanabria en su consultorio" width={400} height={600} className="md:rounded-3xl shadow-lg w-full md:w-[500px]"></Image>
        </div>
        <div className="mb-10">
            <h3 className="text-gray-600 text-4xl font-bold text-center font-monserrat mt-10 lg:mt-0">Od. Llency Jaimes Sanabria</h3>
            <p className="text-xl text-justify text-gray-600 my-10 mx-10 font-monserrat">Odontóloga general egresada de la Universidad Nacional de Colombia, 7 años de experiencia en diagnóstico y tratamiento de las diferentes patologías orales, cirugías orales, estética y blanqueamiento dental, endodoncia, limpieza dental, coronas y prótesis dentales.</p>
            {hasLocation && (
                <Button href="#location">
                <span className="bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-3 rounded-xl mt-10 mx-auto text-xl block text-white w-fit">
                    Ver ubicación
                </span>
            </Button>
            )}
        </div>
    </div>
  )
}

