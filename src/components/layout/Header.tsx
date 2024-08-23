"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";

export default function Header({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [treatments, setTreatments] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="relative lg:h-[70vh]">
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/background.jpg')]"></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto">
                <div className="pt-5 lg:flex items-start lg:items-center justify-between">
                    <div className="flex justify-between">
                        <Link href="/" aria-label="Inicio">
                            <Image src="/images/logo.png" alt="Logo del consultorio dental" width={400} height={400} className="w-3/5 lg:w-[400px]" />
                        </Link>
                        <button onClick={toggleMenu} aria-label="Menú" className="lg:hidden">
                            <Image src="/images/menu.svg" alt="Ícono de menú" width={40} height={40} />
                        </button>
                    </div>
                    <nav className={`relative lg:static lg:flex font-nunito border-4 lg:border-0 border-t-teal-400 bg-gray-200 lg:bg-transparent text-gray-600 lg:text-white ${menuOpen ? "opacity-100 transition-opacity duration-500" : "opacity-0 lg:opacity-100"}`}>
                        <ul className="absolute lg:static lg:flex p-10 lg:gap-10 bg-gray-200 w-full lg:bg-transparent">
                            <li className="text-lg font-semibold">
                                <Link href="/quienes-somos"
                                    className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">
                                    Quiénes somos
                                </Link>
                            </li>
                            <li className="text-lg font-semibold">
                                <Link href="/tratamientos"
                                    className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl"
                                    onMouseEnter={() => setTreatments(true)}
                                    onMouseLeave={() => setTreatments(false)}
                                >
                                    Tratamientos
                                </Link>
                                <div
                                    className={`p-8 bg-white text-gray-600 absolute top-24 right-20 border-4 border-t-teal-400 invisible ${treatments ? "lg:visible" : ""}`}
                                    onMouseEnter={() => setTreatments(true)}
                                    onMouseLeave={() => setTreatments(false)}
                                >
                                    <ul className="flex flex-col gap-3">
                                        <Link href="/tratamientos/diseno-sonrisa" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Diseño de sonrisa</Link>
                                        <Link href="/tratamientos/blanqueamiento-dental" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Blanqueamiento dental</Link>
                                        <Link href="/tratamientos/rehabilitacion-oral" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Rehabilitación oral</Link>
                                        <Link href="/tratamientos/periodoncia" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Periodoncia</Link>
                                        <Link href="/tratamientos/endodoncia" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Endodoncia</Link>
                                        <Link href="/tratamientos/cirugia-oral" className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">Cirugía oral</Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="text-lg font-semibold">
                                <Link href="/contacto"
                                    className="hover:text-teal-400 transition-colors ease-out duration-300 text-xl">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {children}
            </div>
        </header>
    );
}
