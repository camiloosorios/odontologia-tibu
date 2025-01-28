import Image from 'next/image'
import Link from 'next/link';
import Map from "@/components/Map";

export default function Ubicacion() {
    return (
        <>
            <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
                <div className="text-xl text-justify text-gray-600 font-monserrat">
                    <h3 className="text-gray-600 text-4xl font-bold text-center font-monserrat mt-10 lg:mt-0">¡Ven a nuestro consultorio!</h3>
                    <p className="py-10 mx-10 lg:mx-20 text-center">Estamos ubicados en la Carrera 7 # 7-14 barrio el Carmen. Diagonal al hotel Avenida 2.</p>
                    <p className="pt-5 text-center lg:mx-20 text-xl text-gray-600 font-monserrat pb-10">Ver ubicacion en <Link href={`https://www.google.com/maps/dir//8.637542,-72.7352968/@8.6378261,-72.7766001,13z/data=!3m1!4b1!4m2!4m1!3e2?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D`} target="_blank" rel="noopener noreferrer" className="text-teal-500 font-bold">Google Maps</Link></p>
                </div>
                <div className="">
                    <Image src="/images/ubicacion.jpeg" width={650} height={500} alt="Ubicacion odontologia en tibu" className="shadow-lg"></Image>
                </div>
            </div>
            <div className="container mx-auto pb-10 md:pb-20">
                <Map longitude={-72.735425} latitude={8.638197} />
            </div>
        </>
    )
}
