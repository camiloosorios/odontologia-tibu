import Contacto from "@/components/Contacto";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Contacto - Odontología en Tibú',
    description: 'Ponte en contacto con nosotros para consultas, citas y más. Estamos aquí para ayudarte con todas tus necesidades dentales.',
    openGraph: {
        title: 'Contacto - Odontología en Tibú',
        description: 'Ponte en contacto con nosotros para consultas, citas y más. Estamos aquí para ayudarte con todas tus necesidades dentales.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
        url: 'https://odontologia-tibu.vercel.app/contacto',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Odontología en Tibú',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto - Odontología en Tibú',
        description: 'Ponte en contacto con nosotros para consultas, citas y más. Estamos aquí para ayudarte con todas tus necesidades dentales.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
    }
};

export default function ContactoPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat py-20 lg:py-52 text-white">Contacto</h1>
            </Header>
            <main className="bg-gray-400 py-0">
                <Contacto />
            </main>
            <Footer />
        </>
    );
}
