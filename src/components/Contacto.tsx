import Link from 'next/link'
import Form from './Form'

export default function Contacto() {
    return (
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
    )
}
