import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  ctaText = "Book a Consultation",
  ctaLink = "/consultation",
  image = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  showWave = true,
  profileImage = "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
}: HeroProps) => {
  return <div className="relative bg-gradient-to-br from-nutrition-light-green/30 to-nutrition-light-blue/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className="animate-fade-in">
            {profileImage && <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src={profileImage} alt="Lidiane Dos Reis" className="w-full h-full object-cover" />
                </div>
              </div>}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center lg:text-left">
              {subtitle}
            </p>
            {ctaText && <div className="flex justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-nutrition-green hover:bg-nutrition-teal text-lg">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            </div>}
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-nutrition-green to-nutrition-teal rounded-lg blur opacity-30"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              
            </div>
          </div>
        </div>
      </div>

      {showWave && <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>}
    </div>;
};
export default Hero;