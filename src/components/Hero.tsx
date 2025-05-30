
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
  profileImage = "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png",
  reducedSpacing = true
}: HeroProps) => {
  const isMobile = useIsMobile();

  // Layout para dispositivos móveis
  if (isMobile) {
    return (
      <div className={`relative ${reducedSpacing ? 'py-2' : 'py-3'} w-full bg-white`}>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 gap-3">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-3 text-nutrition-green">{title}</h1>
              <p className="text-sm text-gray-700 mb-4 max-w-md mx-auto">{subtitle}</p>
              {ctaText && (
                <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-6 py-2 rounded-full">
                  <Link to={ctaLink}>{ctaText}</Link>
                </Button>
              )}
            </div>
            
            {profileImage && (
              <div className="flex justify-center">
                <img src={profileImage} alt={title} className="rounded-xl shadow-lg object-cover max-h-56" loading="eager" fetchPriority="high" decoding="sync" />
              </div>
            )}
          </div>
        </div>

        {showWave && (
          <div className="hero-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        )}
      </div>
    );
  }

  // Layout para desktop
  return (
    <div className={`relative ${reducedSpacing ? 'py-12' : 'py-16'} w-full bg-white`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-nutrition-green">{title}</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">{subtitle}</p>
            {ctaText && (
              <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-white px-8 py-3 rounded-full text-lg">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            {profileImage && (
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt={title} 
                  className="rounded-xl shadow-xl object-cover max-w-md w-full" 
                  loading="eager" 
                  fetchPriority="high" 
                  decoding="sync" 
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {showWave && (
        <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Hero;
