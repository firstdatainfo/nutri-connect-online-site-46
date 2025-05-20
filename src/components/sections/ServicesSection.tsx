
import { Apple, Carrot, MessageCircle, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [{
  title: "Nutrição Clínica Integrativa",
  description: "Abordagem personalizada que integra diferentes aspectos da saúde para criar planos nutricionais completos.",
  icon: <Apple size={16} />,
  link: "/services",
  color: "nutrition-green",
  buttonText: "Saiba Mais"
}, {
  title: "Nutrição Esportiva",
  description: "Planos nutricionais especializados para atletas e praticantes de atividades físicas.",
  icon: <Users size={16} />,
  link: "/services",
  color: "nutrition-blue",
  buttonText: "Saiba Mais"
}, {
  title: "Nutrição Estética",
  description: "Programas alimentares focados em melhorar a aparência da pele, cabelos e composição corporal.",
  icon: <Carrot size={16} />,
  link: "/services",
  color: "nutrition-orange",
  buttonText: "Saiba Mais"
}, {
  title: "Consultas Online",
  description: "Atendimento virtual personalizado com acompanhamento completo do seu progresso.",
  icon: <MessageCircle size={16} />,
  link: "/consultation",
  color: "nutrition-teal",
  buttonText: "Saiba Mais"
}];

const ServicesSection = () => {
  return (
    <section className="py-1 md:py-2 bg-white w-full">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-start justify-between mb-2 gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-1 py-1">Cuidado Individualizado e Especialização</h2>
            <p className="text-xs md:text-sm text-gray-600">
              Acreditamos que uma nutrição eficaz vai além de dietas genéricas. Cada organismo é único, assim como cada objetivo de saúde.
            </p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Nossa equipe é especializada em diferentes áreas da nutrição — clínica, funcional, esportiva e comportamental.
            </p>
          </div>
          <div className="flex-shrink-0 mt-1 md:mt-0">
            <img 
              src="/lovable-uploads/72e02af0-d74d-4ed9-930a-2d5f6fcdcae0.png" 
              alt="Nutrição saudável" 
              className="h-auto max-h-32 md:max-h-40 object-contain" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
