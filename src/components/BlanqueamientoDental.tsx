import Image from "next/image";
import React from "react";

export default function BlanqueamientoDental() {
  return (
    <article className="bg-gray-300 pb-20">
      <h2 className="container mx-auto text-gray-600 text-4xl md:text-5xl font-bold text-center font-monserrat pt-20 w-fit relative after:content-[''] after:absolute after:left-0 after:right-0 after:mx-auto after:bottom-[-10px] after:w-full after:h-1 after:bg-gradient-to-r after:from-teal-400 after:to-teal-500">Blanqueamiento dental</h2>
      <div className="container mx-auto py-10 md:pt-20 grid md:grid-cols-2 md:items-center">
        <div className="mb-10">
          <p className="text-xl text-justify text-gray-600 my-10 mx-5 font-monserrat">Es un tratamiento que consigue aclarar el color de las piezas dentales. Mediante esta reducción de tonos en el diente, es posible lucir una sonrisa más joven con unos dientes claros, aspecto natural y estéticos.</p>
        </div>
        <div className="flex justify-center">
          <Image src="/images/blanqueamiento.jpg" alt="Imagen blanqueamiento" width={400} height={400} className="md:rounded-l-3xl shadow-lg"></Image>
        </div>
      </div>
    </article>
  )
}
