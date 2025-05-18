
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

interface MapProps {
  defaultLongitude?: number;
  defaultLatitude?: number;
  defaultZoom?: number;
}

const MapComponent: React.FC<MapProps> = ({
  defaultLongitude = -52.2566, // Barra do Garças Longitude
  defaultLatitude = -15.8901,  // Barra do Garças Latitude
  defaultZoom = 12
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapboxMap | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(localStorage.getItem('mapboxToken') || '');
  const [tempToken, setTempToken] = useState<string>('');
  const [isTokenSet, setIsTokenSet] = useState<boolean>(!!localStorage.getItem('mapboxToken'));

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || map.current) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12', // Using streets style for city view
      center: [defaultLongitude, defaultLatitude],
      zoom: defaultZoom,
      pitch: 45,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.scrollZoom.disable(); // Keep scroll zoom disabled or enable as per preference

    // Add a marker for Barra do Garças
    new mapboxgl.Marker()
      .setLngLat([defaultLongitude, defaultLatitude])
      .addTo(map.current);
    
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [mapboxToken, defaultLongitude, defaultLatitude, defaultZoom]);

  const handleTokenSubmit = () => {
    if (tempToken) {
      localStorage.setItem('mapboxToken', tempToken);
      setMapboxToken(tempToken);
      setIsTokenSet(true);
    }
  };

  if (!isTokenSet) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-gray-100 p-6 rounded-lg">
        <Label htmlFor="mapboxToken" className="mb-2 text-lg font-medium">Token do Mapbox Necessário</Label>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Por favor, insira seu token de acesso público do Mapbox para visualizar o mapa. <br />
          Você pode obter um em <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>.
        </p>
        <Input
          id="mapboxToken"
          type="text"
          value={tempToken}
          onChange={(e) => setTempToken(e.target.value)}
          placeholder="Cole seu token aqui"
          className="w-full max-w-md mb-4"
        />
        <Button onClick={handleTokenSubmit}>Salvar Token e Carregar Mapa</Button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default MapComponent;
