
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
  title: "Gestão de Pacientes",
  description: "Controle completo da sua agenda, dados dos pacientes e histórico de consultas em um só lugar.",
  icon: <Carrot size={24} />,
  link: "/services",
  color: "nutrition-orange",
  buttonText: "Saiba Mais"
}, {
  title: "Atendimento Online",
  description: "Realize consultas online, compartilhe materiais e mantenha contato direto com seus pacientes.",
  icon: <MessageCircle size={24} />,
  link: "/consultation",
  color: "nutrition-teal",
  buttonText: "Saiba Mais"
}];
const ServicesSection = () => {
  return <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ferramentas para otimizar seu atendimento</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossas soluções foram desenvolvidas para facilitar sua rotina e melhorar a experiência dos seus pacientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} {...service} />)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;
