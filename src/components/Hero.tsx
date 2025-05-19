
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
  reducedSpacing?: boolean;
}

// Variável para controlar se é o primeiro carregamento da aplicação
let isFirstLoad = true;

const Hero = ({
  title,
  subtitle,
  ctaText = "Agendar Consulta",
  ctaLink = "/consultation",
  image = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  showWave = true,
  profileImage = "/lovable-uploads/f2516217-0055-405a-b448-25a9afd19bfb.png",
  reducedSpacing = false
}: HeroProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  // Pré-carrega as imagens antes da montagem do componente
  useEffect(() => {
    // Se não for o primeiro carregamento, não mostrar loader
    if (!isFirstLoad) {
      setImagesLoaded(true);
      setPageReady(true);
      return;
    }

    // Marcar que o primeiro carregamento já foi feito - fazemos isso imediatamente
    isFirstLoad = false;

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
            setPageReady(true);
          }
        };
        
        // Se a imagem já estiver em cache, considerá-la carregada
        if (img.complete) {
          loadedCount++;
          if (loadedCount === imagesToLoad.length) {
            setImagesLoaded(true);
            setPageReady(true);
          }
        }
      });
    };
    
    preloadImages();
  }, [profileImage, image]);

  return (
    <div className={`relative overflow-hidden bg-nutrition-light-blue/10 ${reducedSpacing ? 'pt-6 pb-8 md:pt-10 md:pb-10' : 'pt-12 pb-16 md:pt-16 md:pb-20'}`}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-5 animate-slide-up">
              {subtitle}
            </p>
            <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-5 text-lg h-auto animate-fade-in">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative">
              {imagesLoaded ? (
                <img 
                  src={profileImage} 
                  alt={title} 
                  className={`rounded-full border-4 border-white shadow-xl ${reducedSpacing ? 'w-48 h-48 md:w-64 md:h-64' : 'w-56 h-56 md:w-72 md:h-72'} object-cover z-20 relative`}
                />
              ) : (
                <Skeleton className={`rounded-full ${reducedSpacing ? 'w-48 h-48 md:w-64 md:h-64' : 'w-56 h-56 md:w-72 md:h-72'}`} />
              )}
              
              <div className="absolute inset-0 bg-nutrition-green/20 rounded-full blur-xl -z-10 transform scale-90" />
            </div>
          </div>
        </div>
      </div>

      {showWave && (
        <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="shape-fill">
            </path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Hero;
