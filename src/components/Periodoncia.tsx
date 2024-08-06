import Image from "next/image";

export default function Periodoncia() {
    return (
        <article className="bg-gray-300 pb-20">
            <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-20 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Periodoncia</h2>
            <div className="container mx-auto py-10 md:pt-20 grid md:grid-cols-2 md:items-center">
                <div className="mb-10 mx-10">
                    <p className="text-xl text-justify text-gray-600 my-10 font-monserrat">La Periodoncia es la especialidad de la Odontología que se encarga del cuidado y tratamiento de las enfermedades que afectan a las encías y los tejidos de soporte de los dientes. Estas enfermedades son causadas principalmente por la acumulación de placa bacteriana y cálculo dental entre la encía y el diente. Los síntomas incluyen gingivitis leve (enrojecimiento e inflamación de las encías) y gingivitis avanzada (con sangrado), así como periodontitis (pérdida de hueso debido a la invasión del cálculo y placa dental en el surco gingival).</p>
                    <p className="text-xl text-justify text-gray-600 my-10 font-monserrat">La salud de las encías es fundamental para mantener una sonrisa saludable.</p>
                </div>
                <div className="flex justify-center">
                    <Image src="/rehabilitacion.jpg" alt="Imagen rehabilitacion" width={500} height={500} className="shadow-lg"></Image>
                </div>
            </div>
        </article>
    )
}
