import Image from 'next/image'
import Link from 'next/link';
import Map from "@/components/Map";

export default function Ubicacion() {
    return (
        <>
            <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
                <div className="text-xl text-justify text-gray-600 font-monserrat">
                    <h3 className="text-gray-600 text-4xl font-bold text-center font-monserrat mt-10 lg:mt-0">¡Ven a nuestro consultorio!</h3>
                    <p className="py-10 mx-10 lg:mx-20 text-center">Estamos ubicados en la Calle 7 # 1-144, local 3. Costado derecho de la Catedral San Luis Beltrán.</p>
                    <p className="pt-5 text-center lg:mx-20 text-xl text-gray-600 font-monserrat pb-10">Ver ubicacion en <Link href={`https://www.google.com/maps/dir//8.6385775,-72.7336526/@8.6386478,-72.7335721,19z/data=!4m2!4m1!3e2?entry=ttu`} target="_blank" rel="noopener noreferrer" className="text-teal-500 font-bold">Google Maps</Link></p>
                </div>
                <div className="">
                    <Image src="/images/ubicacion.jpg" width={650} height={500} alt="Ubicacion odontologia en tibu" className="shadow-lg"></Image>
                </div>
            </div>
            <div className="container mx-auto pb-10 md:pb-20">
                <Map longitude={-72.733645} latitude={8.638583} />
            </div>
        </>
    )
}
