
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Instagram, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Serviços", path: "/services" },
    { name: "Comunidade", path: "/community" },
    { name: "Contato", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Apple size={28} className="text-nutrition-green" />
            <span className="font-display font-bold text-xl text-nutrition-green">Lidiane Dos Reis</span>
          </Link>

          {/* Social Media & Contact - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/lidianedosreisnutri/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-nutrition-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="tel:5566992456034" 
              className="text-gray-600 hover:text-nutrition-green transition-colors flex items-center space-x-2"
              aria-label="Telefone"
            >
              <Phone size={20} />
              <span className="text-sm">55 66 99245-6034</span>
            </a>
            <a 
              href="mailto:lidiane_dosreis@outlook.com" 
              className="text-gray-600 hover:text-nutrition-green transition-colors flex items-center space-x-2"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="text-sm">lidiane_dosreis@outlook.com</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-nutrition-green ${
                  isActive(item.path)
                    ? "text-nutrition-green"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal">
              <Link to="/consultation">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {/* Social Media & Contact - Mobile */}
            <div className="flex items-center space-x-4 mb-4 px-4">
              <a 
                href="https://www.instagram.com/lidianedosreisnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-nutrition-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="tel:5566992456034" 
                className="text-gray-600 hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Telefone"
              >
                <Phone size={20} />
                <span className="text-sm">55 66 99245-6034</span>
              </a>
              <a 
                href="mailto:lidiane_dosreis@outlook.com" 
                className="text-gray-600 hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Email"
              >
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
            </div>
            
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium px-4 py-2 rounded-md ${
                    isActive(item.path)
                      ? "bg-nutrition-light-green/10 text-nutrition-green"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  asChild 
                  className="w-full bg-nutrition-green hover:bg-nutrition-teal"
                  onClick={() => setIsMenuOpen(false)}
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
