import Image from "next/image";

export default function Endodoncia() {
    return (
        <article className="bg-gray-300 pb-20">
            <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-20 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Endodoncia</h2>
            <div className="container mx-auto py-10 md:pt-20 grid md:grid-cols-2 md:items-center">
                <div className="mb-10 mx-10">
                    <p className="text-xl text-justify text-gray-600 my-10 font-monserrat">La endodoncia es una especialidad de la odontología que se enfoca en el tratamiento de las enfermedades de las raíces de los dientes. Consiste en la limpieza y sellado de los conductos radiculares para eliminar la inflamación y las bacterias, y luego la reconstrucción del diente dañado. Es un procedimiento que se realiza para salvar el diente y evitar la extracción.</p>
                    <p className="text-xl text-justify text-gray-600 my-10 font-monserrat">La endodoncia es una solución efectiva para abordar problemas en el interior del diente, preservando su estructura.</p>
                </div>
                <div className="flex justify-center">
                    <Image src="/rehabilitacion.jpg" alt="Imagen rehabilitacion" width={500} height={500} className="shadow-lg"></Image>
                </div>
            </div>
            <div className="container mx-auto text-gray-600 font-monserrat bg-teal-400 py-5 px-10">
                <h3 className="text-3xl w-fit my-10 font-bold mb-10 relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-gray-500 after:to-teal-500">
                    ¿Es Necesaria Una Endodoncia?
                </h3>
                <p className="text-xl lg:font-semibold text-justify mb-5">Necesitas una endodoncia cuando el diente cambia de color, tienes hipersensibilidad dental aumentada ante el frío y el calor, presentas dolor o molestias al morder o masticar, estas con inflamación de las encías en la zona adyacente al diente con caries, tu diente está roto o astillado, o tuviste una caída o golpe con mucho dolor.</p>
            </div>
        </article>
    )
}
