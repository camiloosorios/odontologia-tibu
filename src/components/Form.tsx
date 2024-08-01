"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {

    const initialStateForm = {
        name : '',
        phone : 0,
        message : ''
    }

    const initialStateErorrs = {
        name : false,
        phone : false,
        message : false
    }

    const [form, setForm] = useState(initialStateForm);
    const [errors, setErrors] = useState(initialStateErorrs);

    const handleChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        const isNumber = ['phone'].includes(id);
        setForm({
            ...form,
            [id] : isNumber ? +value : value
        });
    }

    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newErrors = {
            name: form.name.trim().length === 0,
            phone: form.phone <= 0,
            message: form.message.trim().length === 0
        };

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone && !newErrors.message) {
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    toast.success('Mensaje enviado con éxito!');
                    setForm(initialStateForm);
                } else {
                    toast.error('Error al enviar el mensaje');
                }
            } catch (error) {
                toast.error('Error al enviar el mensaje');
            }
        } else {
            toast.error('Todos los campos son requeridos.');
        }
    }

    return (
        <form className='bg-gray-100 p-10 rounded-xl shadow-xl' onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label htmlFor="name" className='uppercase font-semibold text-gray-600'>Nombre</label>
                <input  type="text" 
                        id='name'
                        value={form.name}
                        onChange={handleChange}
                        className='bg-gray-100 w-full rounded-lg p-2 text-sm border border-gray-300 text-gray-600' 
                        placeholder='Nombre' 
                />
                {errors.name ? (<p className="text-red-500 italic text-sm pl-2">El nombre es requerido</p>) : null}
            </div>
            <div className='mb-5'>
                <label htmlFor="phone" className='uppercase font-semibold text-gray-600'>Teléfono</label>
                <input  type="number" 
                        id='phone'
                        value={form.phone}
                        onChange={handleChange}
                        className='bg-gray-100 w-full rounded-lg p-2 text-sm border border-gray-300 text-gray-600' 
                        placeholder='Telefono' 
                />
                {errors.phone ? (<p className="text-red-500 italic text-sm pl-2">El número de teléfono es requerido</p>) : null}
            </div>
            <div className='mb-5'>
                <label htmlFor="message" className='uppercase font-semibold text-gray-600'>Mensaje</label>
                <textarea   cols={4} 
                            id='message'
                            value={form.message}
                            onChange={handleChange}
                            className='bg-gray-100 w-full rounded-lg p-2 border border-gray-300 text-sm text-gray-600' 
                            placeholder='Quisiera consultar...'
                ></textarea>
                {errors.message ? (<p className="text-red-500 italic text-sm pl-2">El mensaje es requerido</p>) : null}
            </div>
            <button className='bg-teal-400 hover:bg-teal-500 ease-out duration-300 px-10 py-3 rounded-xl mt-10 mx-auto text-xl block w-full text-white'>Enviar</button>
        </form>
    )
}
