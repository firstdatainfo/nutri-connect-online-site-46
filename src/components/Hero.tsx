
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showWave?: boolean;
}

const Hero = ({
  title,
  subtitle,
  ctaText = "Book a Consultation",
  ctaLink = "/consultation",
  image = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  showWave = true,
}: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-nutrition-light-green/30 to-nutrition-light-blue/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {subtitle}
            </p>
            {ctaText && (
              <Button asChild size="lg" className="bg-nutrition-green hover:bg-nutrition-teal text-lg">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-nutrition-green to-nutrition-teal rounded-lg blur opacity-30"></div>
            <img
              src={image}
              alt="Nutrition"
              className="w-full h-auto object-cover rounded-lg shadow-xl relative z-10"
            />
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
