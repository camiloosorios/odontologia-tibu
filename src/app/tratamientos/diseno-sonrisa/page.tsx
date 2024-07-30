import DiseñoDeSonrisa from '@/components/DiseñoDeSonrisa'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function DiseñoDeSonrisaPage() {
    return (
        <>
            <Header>
                <h1 className="text-4xl lg:text-6xl text-center font-monserrat mt-60 text-white">Tratamientos</h1>
            </Header>
            <DiseñoDeSonrisa/>
            <Footer/>
        </>
    )
}
