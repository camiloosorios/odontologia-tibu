"use client"
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1IjoiY2EwNTExNyIsImEiOiJjbDczcXpubWEwMDRpM29sZnB5d2NkZnlqIn0.CSe6Yg8Cg2BV4_Hb-idu_Q';

mapboxgl.accessToken = mapboxToken;

interface MapProps {
    longitude: number;
    latitude: number;
}

function Map({ longitude, latitude }: MapProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [longitude, latitude],
                zoom: 17,
            });

            map.on('load', () => {
                console.log('Map loaded');
                console.log('Current zoom level:', map.getZoom());
            });

            new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

            return () => map.remove();
        }
    }, [longitude, latitude]);

    return <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />;
}

export default Map;
