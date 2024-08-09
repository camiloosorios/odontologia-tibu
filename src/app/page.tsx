import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Map from "@/components/Map";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Odontología en Tibú - Consultorio Dental',
  description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
  robots: 'index, follow',
  openGraph: {
    title: 'Odontología en Tibú - Consultorio Dental',
    description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
        width: 1200,
        height: 630,
      }
    ],
    url: 'https://odontologia-tibu.vercel.app',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Odontología en Tibú',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odontología en Tibú - Consultorio Dental',
    description: 'Ofrecemos una amplia gama de servicios odontológicos en Tibú. Agenda tu cita hoy y mejora tu salud oral con nuestros expertos.',
    images: [
      {
        url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  keywords : "odontología, salud dental, cuidado dental, tratamiento dental, clínica dental, dentista, consultorio dental, servicios odontológicos, estética dental, odontología preventiva, odontología restauradora, ortodoncia, periodoncia, endodoncia, cirugía dental, blanqueamiento dental, implantes dentales, prótesis dentales, tratamiento de caries, higiene bucal, salud oral, diagnóstico dental, radiografía dental, evaluación dental, atención dental, blanqueamiento dental en Tibú, ortodoncia en Tibú, implantes dentales en Tibú, tratamientos de encías, tratamientos de caries, dientes sensibles, dentista para niños, cuidado de la mandíbula, tratamiento de endodoncia, cirugía de muelas del juicio, estética dental avanzada, diseño de sonrisa, tratamientos para el mal aliento, tratamiento de bruxismo, rellenos dentales, odontología en Tibú, dentista en Tibú, clínica dental en Tibú, consultorio dental en Tibú, servicios odontológicos en Tibú, salud dental en Tibú, tratamientos dentales en Tibú, cuidado dental en Tibú, centro odontológico en Tibú, especialistas dentales en Tibú, cirugía dental en Tibú, ortodoncia en Tibú, blanqueamiento dental en Tibú, dentista cerca de mí, clínica dental cerca de mí, mejor dentista en Tibú, centro de odontología en Tibú, mejores servicios dentales en Tibú, odontología en Norte de Santander, atención dental en Norte de Santander, tratamientos dentales modernos, última tecnología en odontología, cuidados dentales innovadores, soluciones dentales personalizadas, avances en tratamiento dental, odontología estética avanzada, tendencias en cuidado dental, tecnología en cuidado dental, cómo elegir un dentista, beneficios de la atención dental regular, importancia de la higiene bucal, consejos para el cuidado dental, cómo prevenir problemas dentales, salud dental para toda la familia, qué esperar en una visita al dentista",
};

export default function Home() {

  return (
    <>
      <Header>
        <div className="mt-40 text-white">
          <h1 className="text-4xl lg:text-6xl text-center font-monserrat">Odontología en Tibú</h1>
          <div className="mx-10 lg:mx-20">
            <h3 className="text-xl lg:text-2xl mt-5 container text-center font-monserrat">Tu salud oral es nuestra prioridad. Ofrecemos una amplia gama de servicios odontológicos y estética dental para ayudarte a alcanzar tu mejor sonrisa.</h3>
          </div>
          <Button href='#contact'>
            <span className="bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-5 rounded-xl mt-10 mx-auto text-2xl block w-fit">
              ¡Agenda tu cita hoy!
            </span>
          </Button>
        </div>
        <div className="mt-10 flex justify-center lg:justify-end lg:mx-20 items-center gap-10">
          <Link href="https://www.facebook.com/people/Consultorio-Odontolog%C3%ADa-Tib%C3%BA/61563906201342/" target='_blank' rel="noopener noreferrer">
            <Image src="/images/fb-icon.svg" alt="Icono de facebook" width={25} height={25}></Image>
          </Link>
          <Link href="https://www.instagram.com/od.llencyjaimes/?igsh=MWdrMDJzaXc2bmthbw%3D%3D" target='_blank' rel="noopener noreferrer">
            <Image src="/images/ig-icon.svg" alt="Icono de instagram" width={35} height={35}></Image>
          </Link>
        </div>
      </Header>
      <main className="bg-gray-300">
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className="mb-10">
            <h3 className="text-gray-600 text-4xl font-bold text-center font-monserrat">Tu Estética Dental y Salud Oral en Manos Expertas</h3>
            <p className="text-xl text-justify text-gray-600 my-10 mx-10 font-monserrat">Contamos con equipos de última tecnología y personal calificado para llevar a cabo cualquier tipo de procedimientos. Agenda una consulta y obtén la sonrisa que siempre has deseado.</p>
            <Button href='#about-us'>
              <span className="bg-teal-400 hover:bg-teal-500 text-white ease-out duration-300 px-10 py-5 rounded-xl mt-10 mx-auto text-xl block w-fit">
                Conoce mas sobre nosotros
              </span>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image src="/images/image1.jpg" alt='Imagen de paciente en el consultorio' width={600} height={600} className="md:rounded-l-3xl shadow-lg"></Image>
          </div>
        </div>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-3 py-20 md:py-32 bg-teal-400 gap-10 px-5 xl:px-60">
        <div className="mb-10 md:mb-0 md:container">
          <Image src="/images/check-icon.svg" width={50} height={50} alt="Icono de check" className="inline-block p-2"></Image>
          <h3 className="inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold">Profesionales</h3>
          <p className="font-monserrat text-xl md:text-lg lg:text-xl text-gray-600">Personal calificado para todo tipo de procedimientos y tratamientos.</p>
        </div>
        <div className=" mb-10 md:mb-0 md:container">
          <Image src="/images/check-icon.svg" width={50} height={50} alt="Icono de check" className="inline-block p-2"></Image>
          <h3 className="inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold">Equipo Moderno</h3>
          <p className="font-monserrat text-xl md:text-lg lg:text-xl text-gray-600">Contamos con equipos modernos y tratamientos para alcanzar tu sonrisa soñada.</p>
        </div>
        <div className=" md:container">
          <Image src="/images/check-icon.svg" width={50} height={50} alt="Icono de check" className="inline-block p-2"></Image>
          <h3 className="inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold">Seguimiento</h3>
          <p className="font-monserrat text-xl md:text-lg lg:text-xl text-gray-600">Siempre recibirás seguimiento durante tu tratamiento para alcanzar los objetivos planeados.</p>
        </div>
      </section>
      <section className="bg-gray-300" id="about-us">
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <Image src="/images/odontologa.jpg" alt="Odontóloga Llency Jaimes Sanabria en su consultorio" width={400} height={600} className="md:rounded-3xl shadow-lg w-full md:w-[500px]"></Image>
          </div>
          <div className="mb-10">
            <h3 className="text-gray-600 text-4xl font-bold text-center font-monserrat mt-10 lg:mt-0">Od. Llency Jaimes Sanabria</h3>
            <p className="text-xl text-justify text-gray-600 my-10 mx-10 font-monserrat">Odontóloga general egresada de la Universidad Nacional de Colombia, 7 años de experiencia en diagnóstico y tratamiento de las diferentes patologías orales, cirugías orales, estética y blanqueamiento dental, endodoncia, limpieza dental, coronas y prótesis dentales.</p>
            <Button href="#location">
              <span className="bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-3 rounded-xl mt-10 mx-auto text-xl block text-white w-fit">
                Ver ubicación
              </span>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-gray-400" id="contact">
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className="mb-10 text-white">
            <h3 className="text-4xl font-bold text-center font-monserrat">¡Contactanos!</h3>
            <p className="text-xl text-center font-semibold mt-10 mx-10 font-monserrat">¿Tienes alguna pregunta o estás interesado en programar una cita?</p>
            <p className="text-lg text-center font-semibold mt-5 mx-10 font-monserrat">No dudes en ponerte en contacto a través de <Link href="https://api.whatsapp.com/send?phone=573135477178&text=Hola%20me%20gustaria%20obtener%20mas%20informaci%C3%B3n%20sobre%20tus%20servicios!%F0%9F%98%80" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-bold">WhatsApp</Link> o completa el formulario.</p>
          </div>
          <div className="flex justify-center">
            <Form />
          </div>
        </div>
      </section>
      <section className="bg-gray-300" id="location">
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
      </section>
      <div className="w-72 flex fixed bottom-5 right-5 bg-green-500 text-white justify-between rounded-xl py-2">
        <Link href="https://api.whatsapp.com/send?phone=573135477178&text=Hola%20me%20gustaria%20obtener%20mas%20informaci%C3%B3n%20sobre%20tus%20servicios!%F0%9F%98%80" target="_blank" rel="noopener noreferrer" className="flex items-center mx-auto gap-5"><Image src="/images/whatsapp.svg" alt="Logo de whatsapp" width={35} height={35}></Image>¿Tienes alguna duda?</Link>
      </div>
      <Footer />
    </>
  );
}
