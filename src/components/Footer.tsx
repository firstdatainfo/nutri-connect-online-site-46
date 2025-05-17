
import { Link } from "react-router-dom";
import { Apple, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Apple size={24} className="text-nutrition-green" />
              <span className="font-display font-bold text-xl">Lidiane Dos Reis</span>
            </div>
            <p className="text-gray-400 mb-4">
              Nutrição Clínica Integrativa, Esportiva, Estética, Microbiota Intestinal e Genômica
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a 
                href="https://www.instagram.com/lidianedosreisnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-nutrition-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="tel:5566992456034" 
                className="hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Phone"
              >
                <Phone size={20} />
                <span className="text-sm">55 66 99245-6034</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Nutrition Plans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Wellness Coaching</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Meal Planning</Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-400 hover:text-white transition-colors">Online Consultations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="tel:5566992456034" className="hover:text-white transition-colors">
                  55 66 99245-6034
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/lidianedosreisnutri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @lidianedosreisnutri
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Lidiane Dos Reis Nutricionista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
