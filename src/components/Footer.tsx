import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className='grid grid-cols-1 md:grid-cols-3 container pl-5 md:mx-auto md:justify-items-center gap-5'>
                <div className='mb-2 lg:mb-10'>
                    <h3 className='text-2xl lg:text-2xl font-monserrat py-5 lg:py-10 font-bold'>Enlaces Rápidos</h3>
                    <nav className='flex flex-col'>
                        <Link href="#" className='hover:text-teal-400 transition-colors ease-out duration-300 mb-3 text-lg'>Quienes somos</Link>
                        <Link href="#" className='hover:text-teal-400 transition-colors ease-out duration-300 mb-3 text-lg'>Tratamientos</Link>
                        <Link href="#" className='hover:text-teal-400 transition-colors ease-out duration-300 text-lg'>Agenda tu cita</Link>
                    </nav>
                </div>
                <div className='mb-2 lg:mb-10'>
                    <h3 className='text-2xl font-monserrat py-5 lg:py-10 font-bold'>Contactanos</h3>
                    <ul>
                        <li className='text-lg'>Calle 7 1-144 local 3.</li>
                        <li className='mb-3 text-lg'>Tibú, Norte de Santander</li>
                        <li className='mb-3 text-lg md:text-sm lg:text-lg'>consultorioodontologicotibu@gmail.com</li>
                        <li className='text-lg'>3135477178</li>
                    </ul>
                </div>
                <div className='mb-2 lg:mb-10 md:mb-0'>
                    <h3 className='text-2xl lg:text-2xl font-monserrat py-5 lg:py-10 font-bold'>Horarios de Atención</h3>
                    <ul>
                        <li className='text-lg'>Lun – Sab 8:00am – 12:00pm, 2:00am - 6:30pm</li>
                        <li className='text-lg'>Dom – Fes 8:00am - 12:00pm</li>
                    </ul>
                </div>
            </div>
            <p className='text-center text-teal-600 py-5'>Todos los derechos reservados &copy; Odontología Tibú {new Date().getFullYear()}</p>
        </footer>
    )
}
