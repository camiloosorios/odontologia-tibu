import Image from 'next/image'
import React from 'react'

export default function DiseñoDeSonrisa() {
  return (
    <article className='bg-gray-300 pb-20'>
      <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-10 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Diseño de sonrisa</h2>
      <div className="container mx-auto py-5 md:pt-20 grid md:grid-cols-2 md:items-center">
        <div className='mb-10'>
          <p className='text-xl text-justify text-gray-600 my-10 mx-10 font-monserrat'>Un diseño de sonrisa es un tratamiento odontológico que busca corregir problemas de mordida, de alineamiento dental, aliviar afecciones comunes de salud oral como
            las caries, enfermedades en las encías como la gingivitis, o los cálculos dentales.
          </p>
          <p className='text-xl text-justify text-gray-600 my-10 mx-10 font-monserrat'>Es un tratamiento que puede ayudar a mejorar tu sonrisa y hacerla más atractiva.
            ¿Buscas un diseño de sonrisa? Este es un tratamiento ideal para armonizar tu rostro, obtener dientes más blancos, en la posición y forma ideal ¡Conoce más de este tratamiento junto a nosotros!
          </p>
        </div>
        <div className='flex justify-center'>
          <Image src="/image1.jpg" alt='Imagen paciente' width={600} height={600} className='md:rounded-l-3xl shadow-lg'></Image>
        </div>
      </div>
      <div className='container mx-auto text-gray-600 font-monserrat bg-teal-400 pt-5 px-10'>
        <h3 className="text-3xl w-fit my-10 font-bold mb-10 relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-gray-500 after:to-teal-500">
          Tipos de diseño de sonrisa
        </h3>
        <p className='text-xl lg:font-semibold text-justify mb-5'>Existen dos tipos de diseño de sonrisa: no invasivo y complejo. El diseño de sonrisa no invasivo involucra procedimientos sencillos y mínimamente invasivos como el blanqueamiento dental, mientras que el diseño de sonrisa complejo puede requerir varios procedimientos combinados, como la colocación de carillas dentales y ortodoncia.</p>
        <p className='text-xl lg:font-semibold text-justify pb-10'>No todos los pacientes reciben el mismo tratamiento de diseño de sonrisa, esto depende de la complejidad de las imperfecciones a solucionar y el estado general de tu salud dental</p>
      </div>
    </article>
  )
}
