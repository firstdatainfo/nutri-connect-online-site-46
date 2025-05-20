
import { Apple, Carrot, MessageCircle, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Pré-carregamento de imagens otimizado
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    [
      "/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png",
      "/lovable-uploads/72e02af0-d74d-4ed9-930a-2d5f6fcdcae0.png",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80"
    ].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
}

const Index = () => {
  const isMobile = useIsMobile();
  
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
  
  const testimonials = [{
    quote: "A Lidiane transformou completamente minha relação com a alimentação. Não apenas perdi peso, mas também ganhei energia e confiança.",
    author: "Maria Silva",
    role: "Cliente - Gerenciamento de Peso",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }, {
    quote: "A abordagem personalizada para minhas necessidades nutricionais me ajudou a gerenciar minha diabetes de uma forma que eu nunca pensei ser possível.",
    author: "Carlos Santos",
    role: "Cliente - Gerenciamento de Saúde",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }, {
    quote: "Como atleta, eu precisava de orientação nutricional específica. A Lidiane forneceu exatamente o que eu precisava para melhorar meu desempenho.",
    author: "Ana Martins",
    role: "Cliente - Nutrição Esportiva",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80"
  }];
  
  return <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <Hero 
          title="Lidiane Dos Reis" 
          subtitle="Nutricionista Clínica Integrativa, Esportiva, Estética e Genômica" 
          ctaText="Agende uma Consulta" 
          ctaLink="/consultation" 
          profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
          showWave={false} 
          reducedSpacing={true} 
        />

        {/* Serviços */}
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
                <img src="/lovable-uploads/72e02af0-d74d-4ed9-930a-2d5f6fcdcae0.png" alt="Nutrição saudável" className="h-auto max-h-32 md:max-h-40 object-contain" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-2 md:py-4 bg-nutrition-light-blue/20 w-full">
          <div className="container mx-auto px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
              <div className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sobre Lidiane Dos Reis" className="rounded-lg shadow-lg h-full w-full object-cover max-h-[280px]" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-lg md:text-xl font-bold mb-1">Por que escolher a Lidiane?</h2>
                <p className="text-xs md:text-sm text-gray-700 mb-2">
                  Como nutricionista certificada, estou dedicada a fornecer orientação personalizada para ajudá-lo a alcançar seus objetivos de saúde.
                </p>
                <div className="space-y-1">
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold">Abordagem Personalizada</h3>
                      <p className="text-xs text-gray-600">Planos personalizados que se adequam ao seu estilo de vida e objetivos específicos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold">Orientação Especializada</h3>
                      <p className="text-xs text-gray-600">Nutricionista certificada com experiência em diversas especialidades.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold">Suporte Contínuo</h3>
                      <p className="text-xs text-gray-600">Orientação contínua e ajustes para garantir seu progresso na jornada de saúde.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 md:mt-3">
                  <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-xs h-7 py-0">
                    <Link to="/about">Saiba Mais Sobre Mim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-2 md:py-4 bg-white w-full">
          <div className="container mx-auto px-2">
            <div className="text-center mb-2">
              <h2 className="text-lg md:text-xl font-bold mb-0 md:mb-1">Histórias de Sucesso</h2>
              <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
                Depoimentos de clientes que transformaram sua saúde através dos nossos programas de nutrição.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-3 md:py-4 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white w-full">
          <div className="container mx-auto px-2 text-center">
            <h2 className="text-lg md:text-xl font-bold mb-1">Pronto para Transformar sua Saúde?</h2>
            <p className="text-xs md:text-sm mb-2 max-w-2xl mx-auto">
              Dê o primeiro passo rumo a uma vida mais saudável. Agende uma consulta comigo hoje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <Button asChild size="sm" variant="secondary" className="text-nutrition-green text-xs h-7 py-0">
                <Link to="/consultation">Agendar Consulta</Link>
              </Button>
              <Button asChild size="sm" className="bg-transparent text-white border border-white hover:bg-white/10 text-xs h-7 py-0">
                <Link to="/community">Junte-se à Nossa Comunidade</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;
