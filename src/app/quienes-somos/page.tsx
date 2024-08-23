import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import QuienesSomos from "@/components/QuienesSomos";
import Ubicacion from "@/components/Ubicacion";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Quienes Somos - Odontología en Tibú',
    description: 'Conoce al equipo de Odontología en Tibú, descubre nuestra misión y visión, y aprende por qué somos la mejor opción para tu salud dental.',
    openGraph: {
        title: 'Quienes Somos - Odontología en Tibú',
        description: 'Conoce al equipo de Odontología en Tibú, descubre nuestra misión y visión, y aprende por qué somos la mejor opción para tu salud dental.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
        url: 'https://odontologia-tibu.vercel.app/quienes-somos',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Odontología en Tibú',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Quienes Somos - Odontología en Tibú',
        description: 'Conoce al equipo de Odontología en Tibú, descubre nuestra misión y visión, y aprende por qué somos la mejor opción para tu salud dental.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
    }
};

export default function QuienesSomosPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat py-20 lg:py-52 text-white">Quienes Somos</h1>
            </Header>
            <main className="bg-gray-300 py-0">
                <QuienesSomos hasLocation={false}/>
                <Ubicacion/>
            </main>
            <Footer />
        </>
    );
}
