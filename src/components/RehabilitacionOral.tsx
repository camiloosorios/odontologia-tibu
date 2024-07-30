import Image from 'next/image'
import React from 'react'

export default function RehabilitacionOral() {
    return (
        <article className='bg-gray-300 pb-20'>
            <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-20 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Rehabilitación oral</h2>
            <div className="container mx-auto py-10 md:pt-20 grid md:grid-cols-2 md:items-center">
                <div className='mb-10 mx-10'>
                    <p className='text-xl text-justify text-gray-600 my-10 font-monserrat'>Rama de la odontología que busca recuperar la función y estética de los dientes, las encías y mejorar la función masticatoria, así como otros problemas dentales mediante diversas técnicas.</p>
                    <h3 className="text-2xl text-gray-600 w-fit font-bold mb-5 ">
                        Precios
                    </h3>
                    <p className='text-xl text-gray-600 font-monserrat text-justify mb-5'>Al ser un proceso especializado y personalizado al caso de cada paciente, los precios de la rehabilitación oral varían de paciente en paciente y caso por caso.</p>
                </div>
                <div className='flex justify-center'>
                    <Image src="/rehabilitacion.jpg" alt='Imagen rehabilitacion' width={500} height={500} className='shadow-lg'></Image>
                </div>
            </div>
            <div className='container mx-auto text-gray-600 font-monserrat px-10 bg-teal-400 py-5'>
                <h3 className="text-3xl w-fit my-10 font-bold mb-10 relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-gray-500 after:to-teal-500">
                    Tipos de tratamientos en rehabilitación oral
                </h3>
                <p className='text-xl lg:font-semibold text-justify mb-5'>Hay varios tipos de tratamientos de rehabilitación oral, a menudo se dividen por funcionales o estéticos, pero aquí consideramos ambos factores para darte la mejor atención, por lo que siempre cuidamos la función estética de todos los tratamientos que realizamos. A continuación, te hablaremos de los tratamientos comunes en nuestros pacientes de rehabilitación oral.</p>
            </div>
            <div className='container mx-auto text-gray-600 font-monserrat px-10 pt-10 bg-gray-300'>
                <h3 className="text-2xl text-gray-600 w-fit font-bold mb-5 ">
                    Rehabilitación oral con prótesis fijas
                </h3>
                <p className='text-xl text-gray-600 font-monserrat text-justify mb-5'>
                    Las coronas dentales, son un tipo de prótesis parcial que se coloca sobre el diente para restaurar su forma, función y estética. Esta es una solución para dientes con cambio de color, fracturados, afectados por caries o que necesitan endodoncia. Podemos asesorarte sobre si necesitas coronas individuales o un puente dental.
                </p>
                <h3 className="text-2xl text-gray-600 w-fit font-bold mb-5 my-5">
                    Rehabilitación oral con prótesis removibles
                </h3>
                <p className='text-xl text-gray-600 font-monserrat text-justify mb-5'>
                    Las prótesis removibles, son una solución estética creada a medida que con los cuidados correctos puede mejorar la función masticatoria y ayudar a mantener la integridad estructural de tu boca, evitando el desgaste de tus encías. En los tratamientos de rehabilitación oral con prótesis removibles, tenemos:
                </p>
            </div>
            <div className="container mx-auto pb-10 pt-5 grid md:grid-cols-2 md:items-center px-10">
                <div>
                    <h3 className="text-2xl text-gray-600 w-fit font-bold">
                        Prótesis parciales removibles
                    </h3>
                    <p className='text-xl text-justify text-gray-600 my-5 font-monserrat'>Las prótesis parciales reemplazan los dientes del maxilar o mandíbula, y se realizan a medida para tener una semejanza a los dientes restantes en cuanto a forma y color. Cada prótesis que realizamos implica un estudio previo y la realización de moldes específicos.</p>
                </div>
                <div className='flex justify-center'>
                    <Image src="/parcial.jpg" alt='Imagen protesis parcial' width={400} height={400} className='p-5'></Image>
                </div>
            </div>
            <div className="container mx-auto grid md:grid-cols-2 md:items-center px-10">
                <div className='mb-10'>
                    <h3 className="text-2xl text-gray-600 w-fit font-bold">
                    	Prótesis completas removibles
                    </h3>
                    <p className='text-xl text-justify text-gray-600 my-5 font-monserrat'>La prótesis dental completa es una solución ideal para aquellos pacientes que han perdido todos sus dientes debido a diversos factores, y quieren lucir una sonrisa radiante y comer sólidos sin problemas.</p>
                </div>
                <div className='flex justify-center'>
                    <Image src="/completa.jpg" alt='Imagen protesis completa' width={400} height={400} className='p-5'></Image>
                </div>
            </div>
        </article>
    )
}
