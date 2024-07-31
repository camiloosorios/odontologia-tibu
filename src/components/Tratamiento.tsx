"use client";
import { tratamientosData } from "@/data/tratamientos";
import TratamientoCard from "./TratamientoCard";
import { usePathname } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";
import DiseñoDeSonrisa from "./DiseñoDeSonrisa";
import BlanqueamientoDental from "./BlanqueamientoDental";
import RehabilitacionOral from "./RehabilitacionOral";
import Periodoncia from "./Periodoncia";
import Endodoncia from "./Endodoncia";
import CirugiaOral from "./CirugiaOral";

const componentMap: { [key: string]: ComponentType } = {
    "diseno-sonrisa": DiseñoDeSonrisa,
    "blanqueamiento-dental": BlanqueamientoDental,
    "rehabilitacion-oral": RehabilitacionOral,
    "periodoncia": Periodoncia,
    "endodoncia": Endodoncia,
    "cirugia-oral": CirugiaOral,
};

export default function Tratamiento() {
    const pathname = usePathname();
    const [component, setComponent] = useState("");

    useEffect(() => {
        const url = pathname.split('/')[2];
        setComponent(url);
    }, [pathname]);

    if (!component) return (
        <div className="w-full bg-gray-200">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-fit mx-auto md:gap-10 text-gray-600 font-monserrat text-center py-20'>
                {tratamientosData.map(tratamiento => (
                    <TratamientoCard
                        key={tratamiento.title}
                        image={tratamiento.image}
                        title={tratamiento.title}
                        link={tratamiento.link}
                    />
                ))}
            </div>
        </div>
    );

    const SelectedComponent = componentMap[component];

    return SelectedComponent ? (
        <div className="w-full bg-gray-200">
            <SelectedComponent />
        </div>
    ) : null;
}
