
import { Apple, Carrot, MessageCircle, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [{
  title: "Avaliações Nutricionais",
  description: "Crie avaliações personalizadas e acompanhe a evolução dos seus pacientes com gráficos e relatórios completos.",
  icon: <Apple size={24} />,
  link: "/services",
  color: "nutrition-green",
  buttonText: "Saiba Mais"
}, {
  title: "Planos Alimentares",
  description: "Monte planos alimentares personalizados de acordo com as necessidades e objetivos de cada paciente.",
  icon: <Users size={24} />,
  link: "/services",
  color: "nutrition-blue",
  buttonText: "Saiba Mais"
}, {
  title: "Planejamento de Refeições",
  description: "Planos de refeições práticos e receitas projetadas para se adequar à sua agenda, orçamento e habilidades culinárias.",
  icon: <Carrot size={24} />,
  link: "/services#meal-planning",
  color: "nutrition-orange",
  buttonText: "Saiba Mais",
  imageUrl: "/lovable-uploads/4307f02a-427b-4f6d-a244-b658a9d78848.png"
}, {
  title: "Atendimento Online",
  description: "Realize consultas online, compartilhe materiais e mantenha contato direto com seus pacientes.",
  icon: <MessageCircle size={24} />,
  link: "/services",
  color: "nutrition-teal",
  buttonText: "Saiba Mais"
}];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Nutrir é mais que alimentar: é promover benefícios ao seu corpo.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "Nutrir é mais que alimentar: é transformar vidas, promover saúde e despertar o potencial máximo de cada corpo e mente através do poder dos alimentos."
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
