import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tratamiento from "@/components/Tratamiento";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Tratamientos - Odontología en Tibú',
    description: 'Explora nuestros diversos tratamientos odontológicos y elige el que mejor se adapte a tus necesidades.',
    openGraph: {
        title: 'Tratamientos - Odontología en Tibú',
        description: 'Explora nuestros diversos tratamientos odontológicos y elige el que mejor se adapte a tus necesidades.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
        url: 'https://odontologia-tibu.vercel.app/tratamientos',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Odontología en Tibú',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tratamientos - Odontología en Tibú',
        description: 'Explora nuestros diversos tratamientos odontológicos y elige el que mejor se adapte a tus necesidades.',
        images: [
            {
                url: 'https://res.cloudinary.com/dvbpbcfiy/image/upload/v1722964603/odontologia-tibu.png',
                width: 1200,
                height: 630,
            }
        ],
    }
};

export default function Tratamientos() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat py-20 lg:py-52 text-white">Tratamientos</h1>
            </Header>
            <main className="bg-gray-300 py-20">
                <div className="container mx-auto px-5">
                    <Tratamiento />
                </div>
            </main>
            <Footer />
        </>
    );
}
