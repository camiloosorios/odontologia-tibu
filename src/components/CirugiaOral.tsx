import Image from 'next/image'
import React from 'react'

export default function CirugiaOral() {
    return (
        <article className='bg-gray-300 pb-20'>
            <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-20 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Cirugia oral</h2>
            <div className="container mx-auto py-10 md:pt-20 grid md:grid-cols-2 md:items-center">
                <div className='mb-10 mx-10'>
                    <p className='text-xl text-justify text-gray-600 my-10 font-monserrat'>Rama de la odontología que abarca diversos procedimientos, el más común relacionado a esta área en nuestra consulta es la extracción dental que consiste en la remoción de una pieza dental que tiene mal pronóstico y es imposible mantenerla en boca. La más común son los molares de juicio conocidas como cordales.</p>
                </div>
                <div className='flex justify-center'>
                    <Image src="/cirugia.jpg" alt='Imagen rehabilitacion' width={600} height={500} className='shadow-lg'></Image>
                </div>
            </div>
        </article>
    )
}
