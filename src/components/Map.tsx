"use client";
import L from "leaflet";
import { useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css';

interface MapProps {
    lat: number;
    lng: number;
    zoom?: number;
}

export default function Map({ lat, lng, zoom = 30 }: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView([lat, lng], zoom);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(mapInstance.current);

            const customIcon = L.icon({
                iconUrl: 'location.svg',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });

            L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance.current)
                .bindPopup('Odontología Tibú')
                .openPopup();
        } else if (mapInstance.current) {
            mapInstance.current.setView([lat, lng], zoom);
        }
    }, [lat, lng, zoom]);

    return (
        <div ref={mapRef} style={{ height: '400px', width: '100%', zIndex: '0' }} className="shadow-lg">
        </div>
    );
}
