
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";

interface MapProps {
  defaultLongitude?: number;
  defaultLatitude?: number;
  defaultZoom?: number;
  address?: string;
  phoneNumber?: string;
  email?: string;
}

const MapComponent: React.FC<MapProps> = ({
  defaultLongitude = -52.2566, // Barra do Garças Longitude
  defaultLatitude = -15.8901,  // Barra do Garças Latitude
  defaultZoom = 14,
  address = "Rua Moreira Cabral, Centro, Barra do Garças - MT",
  phoneNumber = "55 66 99245-6034",
  email = "lidiane_dosreis@outlook.com"
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
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [defaultLongitude, defaultLatitude],
      zoom: defaultZoom,
      pitch: 45
    });
    
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.scrollZoom.disable();

    // Add a marker for the location
    const marker = new mapboxgl.Marker({
      color: "#4CAF50"
    })
      .setLngLat([defaultLongitude, defaultLatitude])
      .addTo(map.current);
    
    // Add a popup to the marker
    new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 25
    })
      .setLngLat([defaultLongitude, defaultLatitude])
      .setHTML(`<strong>Consultório Lidiane Dos Reis</strong><br>${address}`)
      .addTo(map.current);
    
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2
      });
    });
    
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [mapboxToken, defaultLongitude, defaultLatitude, defaultZoom, address]);

  const handleTokenSubmit = () => {
    if (tempToken) {
      localStorage.setItem('mapboxToken', tempToken);
      setMapboxToken(tempToken);
      setIsTokenSet(true);
    }
  };

  if (!isTokenSet) {
    return (
      <div className="p-6 border rounded-lg bg-white shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Configurar Mapa</h3>
        <p className="mb-4 text-gray-600">Para visualizar o mapa, você precisa adicionar um token do Mapbox.</p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Token do Mapbox</Label>
            <Input 
              id="mapbox-token"
              type="text" 
              value={tempToken} 
              onChange={(e) => setTempToken(e.target.value)} 
              placeholder="Cole seu token do Mapbox aqui" 
            />
          </div>
          
          <Button onClick={handleTokenSubmit} className="bg-nutrition-green hover:bg-nutrition-teal">
            Salvar e Carregar Mapa
          </Button>
          
          <div className="text-sm text-gray-500 mt-2">
            <p>Você pode obter um token gratuito em <a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noopener noreferrer" className="text-nutrition-green hover:underline">mapbox.com</a></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative h-80 md:h-96">
        <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-nutrition-green mt-0.5" />
            <div>
              <h4 className="font-medium">Endereço</h4>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-nutrition-green mt-0.5" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-gray-600">
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-nutrition-green">
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-nutrition-green mt-0.5" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-600">
                <a href={`mailto:${email}`} className="hover:text-nutrition-green">
                  {email}
                </a>
              </p>
            </div>
          </div>
          
          <Button asChild className="w-full bg-nutrition-green hover:bg-nutrition-teal mt-2">
            <a href="https://maps.google.com/maps?q=-15.8901,-52.2566" target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2" size={18} />
              <span>Ver no Google Maps</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
