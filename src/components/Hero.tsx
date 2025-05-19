import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showWave?: boolean;
  profileImage?: string;
}
const Hero = ({
  title,
  subtitle,
  ctaText = "Agendar Consulta",
  ctaLink = "/consultation",
  image = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  showWave = true,
  profileImage = "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
}: HeroProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Pré-carrega as imagens assim que o componente montar
  useEffect(() => {
    const preloadImages = () => {
      const imagesToLoad = [profileImage, image].filter(Boolean);
      let loadedCount = 0;
      imagesToLoad.forEach(imgSrc => {
        if (!imgSrc) return;
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) {
            setImagesLoaded(true);
          }
        };
        // Se a imagem já estiver em cache, podemos considerar carregada
        if (img.complete) {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) {
            setImagesLoaded(true);
          }
        }
      });

      // Fallback para garantir que as imagens sejam exibidas após um curto período
      setTimeout(() => setImagesLoaded(true), 300);
    };
    preloadImages();
  }, [profileImage, image]);
  return <div className="relative overflow-hidden">
      <div className="container-custom relative z-10">
        
      </div>

      {showWave && <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>}
    </div>;
};
export default Hero;