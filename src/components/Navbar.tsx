
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Serviços", path: "/services" }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-white/95"
    }`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/8c1fea53-eb04-4989-9147-107275ce78ac.png" 
              alt="Lidiane Dos Reis Logo" 
              className="h-8 w-auto" 
            />
            <span className="font-display font-bold text-base md:text-lg text-nutrition-green">Lidiane Dos Reis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-xs font-medium transition-colors hover:text-nutrition-green ${
                  isActive(item.path) ? "text-nutrition-green" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-nutrition-green hover:bg-nutrition-teal text-white text-xs h-8 px-3"
            >
              <Link to="/consultation">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t">
            {/* Social Media & Contact - Mobile */}
            <div className="flex items-center justify-center space-x-3 mb-2">
              <a 
                href="https://www.instagram.com/lidianedosreisnutri/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-nutrition-green" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="tel:5566992456034" 
                className="text-gray-600 hover:text-nutrition-green flex items-center space-x-1" 
                aria-label="Telefone"
              >
                <Phone size={18} />
                <span className="text-xs">55 66 99245-6034</span>
              </a>
              <a 
                href="mailto:lidiane_dosreis@outlook.com" 
                className="text-gray-600 hover:text-nutrition-green" 
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <div className="flex flex-col space-y-1">
              {navItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-xs font-medium px-3 py-1.5 rounded-md ${
                    isActive(item.path) 
                      ? "bg-nutrition-light-green/10 text-nutrition-green" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-1">
                <Button 
                  asChild 
                  className="w-full bg-nutrition-green hover:bg-nutrition-teal text-white text-xs h-8"
                >
                  <Link to="/consultation">Agendar Consulta</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
