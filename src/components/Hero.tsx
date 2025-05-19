import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
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
  reducedSpacing = true // Mudamos o valor padrão para true para aplicar em todas as páginas
}: HeroProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const isMobile = useIsMobile();

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

  // Renderização condicional para dispositivos móveis
  if (isMobile && profileImage) {
    return <div className={`relative overflow-hidden bg-nutrition-light-blue/10 ${reducedSpacing ? 'pt-4 pb-6' : 'pt-12 pb-16'}`}>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            {/* Imagem de perfil no topo em dispositivos móveis */}
            <div className="mb-4">
              {imagesLoaded ? <img src={profileImage} alt={title} className={`rounded-full border-4 border-white shadow-xl ${reducedSpacing ? 'w-40 h-40' : 'w-56 h-56'} object-cover z-20 relative`} /> : <Skeleton className={`rounded-full ${reducedSpacing ? 'w-40 h-40' : 'w-56 h-56'}`} />}
              <div className="absolute inset-0 bg-nutrition-green/20 rounded-full blur-xl -z-10 transform scale-90" />
            </div>
            
            {/* Conteúdo de texto abaixo da imagem */}
            <div className="text-center py-[19px]">
              <h1 className="text-3xl font-bold mb-3 animate-fade-in">
                {title}
              </h1>
              <p className="text-lg text-gray-600 mb-4 animate-slide-up">
                {subtitle}
              </p>
              {ctaText && <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-5 text-lg h-auto animate-fade-in">
                  <Link to={ctaLink}>{ctaText}</Link>
                </Button>}
            </div>
          </div>
        </div>

        {showWave && <div className="hero-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill">
              </path>
            </svg>
          </div>}
      </div>;
  }

  // Layout padrão para desktop
  return <div className={`relative overflow-hidden bg-nutrition-light-blue/10 ${reducedSpacing ? 'pt-4 pb-6 md:pt-6 md:pb-8' : 'pt-12 pb-16 md:pt-16 md:pb-20'}`}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-4 md:mb-5 animate-slide-up px-0 my-[20px] py-[14px] mx-0 md:text-xl">
              {subtitle}
            </p>
            {ctaText && <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-5 text-lg h-auto animate-fade-in">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>}
          </div>

          
        </div>
      </div>

      {showWave && <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill">
            </path>
          </svg>
        </div>}
    </div>;
};
export default Hero;