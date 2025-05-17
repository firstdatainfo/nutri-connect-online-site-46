
import { Link } from "react-router-dom";
import { Apple, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Apple size={24} className="text-nutrition-green" />
              <span className="font-display font-bold text-xl">Lidiane Dos Reis</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nutrição Clínica Integrativa, Esportiva, Estética, Microbiota Intestinal e Genômica
            </p>
            <div className="flex flex-col space-y-3 text-gray-300">
              <a 
                href="https://www.instagram.com/lidianedosreisnutri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>@lidianedosreisnutri</span>
              </a>
              <a 
                href="tel:5566992456034" 
                className="hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Telefone"
              >
                <Phone size={20} />
                <span>55 66 99245-6034</span>
              </a>
              <a 
                href="mailto:lidiane_dosreis@outlook.com" 
                className="hover:text-nutrition-green transition-colors flex items-center space-x-2"
                aria-label="Email"
              >
                <Mail size={20} />
                <span>lidiane_dosreis@outlook.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white transition-colors">Comunidade</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Planos Nutricionais</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Coaching de Bem-estar</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Planejamento de Refeições</Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white transition-colors">Consultas Online</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <a href="tel:5566992456034" className="hover:text-white transition-colors">
                  55 66 99245-6034
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:lidiane_dosreis@outlook.com" className="hover:text-white transition-colors">
                  lidiane_dosreis@outlook.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/lidianedosreisnutri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @lidianedosreisnutri
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Lidiane Dos Reis Nutricionista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
