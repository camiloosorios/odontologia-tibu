import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Header>
        <div className="mt-40 text-white">
          <h1 className="text-4xl lg:text-6xl text-center font-monserrat">Odontología en Tibú</h1>
          <div className="mx-10 lg:mx-20">
            <h3 className="text-xl lg:text-2xl mt-5 container text-center font-monserrat">Tu salud oral es nuestra prioridad. Ofrecemos una amplia gama de servicios odontológicos y estética dental para ayudarte a alcanzar tu mejor sonrisa.</h3>
          </div>
          <button className='bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-5 rounded-xl mt-10 mx-auto text-2xl block'>¡Agenda tu cita hoy!</button>
        </div>
        <div className='mt-10 flex justify-center lg:justify-end lg:mx-20 items-center gap-10'>
          <Link href="#">
            <Image src="/fb-icon.svg" alt="Icono facebook" width={25} height={25}></Image>
          </Link>
          <Link href="#">
            <Image src="/ig-icon.svg" alt="Icono instagram" width={35} height={35}></Image>
          </Link>
        </div>
      </Header>
      <main className='bg-gray-300'>
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className='mb-10'>
            <h3 className='text-gray-600 text-4xl font-bold text-center font-monserrat'>Tu Estética Dental y Salud Oral en Manos Expertas</h3>
            <p className='text-xl text-center text-gray-600 my-10 mx-10 font-monserrat'>Contamos con equipos de última tecnología y personal calificado para llevar a cabo cualquier tipo de procedimientos. Agenda una consulta y obtén la sonrisa que siempre has deseado.</p>
            <button className='bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-5 rounded-xl mt-10 mx-auto text-xl block text-white'>Conoce mas sobre nosotros</button>
          </div>
          <div className='flex justify-center'>
            <Image src="/image1.jpg" alt='Imagen paciente' width={600} height={600} className='md:rounded-l-3xl shadow-lg'></Image>
          </div>
        </div>
      </main>
      <section className='grid grid-cols-1 md:grid-cols-3 py-20 md:py-32 bg-teal-400 gap-10 px-5 xl:px-60'>
        <div className=' mb-10 md:mb-0 md:container'>
          <Image src="/check-icon.svg" width={50} height={50} alt='Check icon' className='inline-block p-2'></Image>
          <h3 className='inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold'>Profesionales</h3>
          <p className='font-monserrat text-xl md:text-lg lg:text-xl text-gray-600'>Personal calificado para todo tipo de procedimientos y tratamientos.</p>
        </div>
        <div className=' mb-10 md:mb-0 md:container'>
          <Image src="/check-icon.svg" width={50} height={50} alt='Check icon' className='inline-block p-2'></Image>
          <h3 className='inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold'>Equipo Moderno</h3>
          <p className='font-monserrat text-xl md:text-lg lg:text-xl text-gray-600'>Contamos con equipos modernos y tratamientos para alcanzar tu sonrisa soñada.</p>
        </div>
        <div className=' md:container'>
          <Image src="/check-icon.svg" width={50} height={50} alt='Check icon' className='inline-block p-2'></Image>
          <h3 className='inline-block text-2xl md:text-xl lg:text-2xl font-monserrat text-gray-600 font-semibold'>Seguimiento</h3>
          <p className='font-monserrat text-xl md:text-lg lg:text-xl text-gray-600'>Siempre recibirás seguimiento durante tu tratamiento para alcanzar los objetivos planeados.</p>
        </div>
      </section>
      <section className='bg-gray-300'>
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className='flex justify-center'>
            <Image src="/odontologa.jpg" alt='Imagen odontologa' width={400} height={600} className='md:rounded-3xl shadow-lg'></Image>
          </div>
          <div className='mb-10'>
            <h3 className='text-gray-600 text-4xl font-bold text-center font-monserrat mt-10 lg:mt-0'>Od. Llency Jaimes Sanabria</h3>
            <p className='text-xl text-center text-gray-600 my-10 mx-10 font-monserrat'>Odontóloga general egresada de la Universidad Nacional de Colombia, 7 años de experiencia en diagnóstico y tratamiento de las diferentes patologías orales, cirugías orales, estética y blanqueamiento dental, endodoncia, limpieza dental, coronas y prótesis dentales.</p>
            <button className='bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-3 rounded-xl mt-10 mx-auto text-xl block text-white'>Ver ubicación</button>
          </div>
        </div>
      </section>
      <section className='bg-gray-400'>
        <div className="container mx-auto py-20 md:py-30 grid md:grid-cols-2 md:items-center">
          <div className='mb-10 text-white'>
            <h3 className='text-4xl font-bold text-center font-monserrat'>¡Contactanos!</h3>
            <p className='text-xl text-center font-semibold mt-10 mx-10 font-monserrat'>¿Tienes alguna pregunta o estás interesado en programar una cita?</p>
            <p className='text-lg text-center font-semibold mt-5 mx-10 font-monserrat'>No dudes en ponerte en contacto a través de <Link href='https://api.whatsapp.com/send?phone=573135477178&text=Hola%20me%20gustaria%20obtener%20mas%20informaci%C3%B3n%20sobre%20tus%20servicios!%F0%9F%98%80' target='_blank' className='text-teal-400 font-bold'>WhatsApp</Link> o completa el formulario.</p>
          </div>
          <div className='flex justify-center'>
            <Form />
          </div>
        </div>
      </section>
      <div className="w-72 flex fixed bottom-5 right-5 bg-green-500 text-white justify-between rounded-xl py-2">
        <Link href="https://api.whatsapp.com/send?phone=573135477178&text=Hola%20me%20gustaria%20obtener%20mas%20informaci%C3%B3n%20sobre%20tus%20servicios!%F0%9F%98%80" target="_blank" className='flex items-center mx-auto gap-5'><Image src="/whatsapp.svg" alt='Logo whatsapp' width={35} height={35}></Image>¿Tienes alguna duda?</Link>
      </div>
      <Footer />
    </>
  );
}
