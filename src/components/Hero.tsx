import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
const Hero = ({
  title,
  subtitle,
  ctaText = "Agendar Consulta",
  ctaLink = "/consultation",
  image = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  showWave = true,
  // Definimos a imagem padrão para todas as páginas
  profileImage = "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png",
  reducedSpacing = true
}: HeroProps) => {
  const isMobile = useIsMobile();

  // Renderização condicional para dispositivos móveis
  if (isMobile && profileImage) {
    return <div className={`relative overflow-hidden bg-nutrition-light-blue/10 ${reducedSpacing ? 'pt-4 pb-6' : 'pt-12 pb-16'}`}>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            {/* Imagem de perfil no topo sem qualquer efeito */}
            <div className="mb-4">
              <img src={profileImage} alt={title} className={`rounded-full border-4 border-white shadow-xl ${reducedSpacing ? 'w-40 h-40' : 'w-56 h-56'} object-cover`} style={{
              display: 'block'
            }} loading="eager" fetchPriority="high" decoding="sync" />
            </div>
            
            {/* Conteúdo de texto abaixo da imagem */}
            <div className="text-center py-[19px]">
              <h1 className="text-3xl font-bold mb-3">
                {title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {subtitle}
              </p>
              {ctaText && <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-5 text-lg h-auto">
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

  // Layout padrão para desktop sem efeitos
  return <div className={`relative overflow-hidden bg-nutrition-light-blue/10 ${reducedSpacing ? 'pt-4 pb-6 md:pt-6 md:pb-8' : 'pt-12 pb-16 md:pt-16 md:pb-20'}`}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-5">
              {subtitle}
            </p>
            {ctaText && <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-5 text-lg h-auto">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>}
          </div>

          <div className="relative flex justify-center md:justify-end">
            {/* Imagem de perfil sem qualquer efeito */}
            <div className="relative">
                <img src={profileImage} alt={title} style={{
              display: 'block'
            }} loading="eager" fetchPriority="high" decoding="sync" className="object-none" />
              </div>
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