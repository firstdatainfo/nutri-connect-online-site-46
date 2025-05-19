import { Apple, Carrot, MessageCircle, Users } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import MapComponent from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

// Pré-carregamento de imagens principais
const preloadImages = () => {
  const images = ["/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png", "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"];
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
    const img = new Image();
    img.src = src;
  });
};

// Executa o pré-carregamento imediatamente
if (typeof window !== 'undefined') {
  preloadImages();
}
const Index = () => {
  const isMobile = useIsMobile();
  const services = [{
    title: "Nutrição Clínica Integrativa",
    description: "Abordagem personalizada que integra diferentes aspectos da saúde para criar planos nutricionais completos.",
    icon: <Apple size={24} />,
    link: "/services",
    color: "nutrition-green",
    buttonText: "Saiba Mais"
  }, {
    title: "Nutrição Esportiva",
    description: "Planos nutricionais especializados para atletas e praticantes de atividades físicas visando melhorar o desempenho.",
    icon: <Users size={24} />,
    link: "/services",
    color: "nutrition-blue",
    buttonText: "Saiba Mais"
  }, {
    title: "Nutrição Estética",
    description: "Programas alimentares focados em melhorar a aparência da pele, cabelos e composição corporal.",
    icon: <Carrot size={24} />,
    link: "/services",
    color: "nutrition-orange",
    buttonText: "Saiba Mais"
  }, {
    title: "Consultas Online",
    description: "Atendimento virtual personalizado com acompanhamento completo do seu progresso.",
    icon: <MessageCircle size={24} />,
    link: "/consultation",
    color: "nutrition-teal",
    buttonText: "Saiba Mais"
  }];
  const testimonials = [
    {
      quote: "A Lidiane transformou completamente minha relação com a alimentação. Não apenas perdi peso, mas também ganhei energia e confiança.",
      author: "Maria Silva",
      role: "Cliente - Gerenciamento de Peso",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }, {
      quote: "A abordagem personalizada para minhas necessidades nutricionais me ajudou a gerenciar minha diabetes de uma forma que eu nunca pensei ser possível.",
      author: "Carlos Santos",
      role: "Cliente - Gerenciamento de Saúde",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }, {
      quote: "Como atleta, eu precisava de orientação nutricional específica. A Lidiane forneceu exatamente o que eu precisava para melhorar meu desempenho.",
      author: "Ana Martins",
      role: "Cliente - Nutrição Esportiva",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
    }
  ];
  return <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero 
          title="Lidiane Dos Reis" 
          subtitle="Nutricionista Clínica Integrativa, Esportiva, Estética, Microbiota Intestinal e Genômica" 
          ctaText="Agende uma Consulta" 
          ctaLink="/consultation" 
          profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png" 
          image="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80" 
          showWave={false} 
          reducedSpacing={true} 
        />

        {/* Services Section - Reduzido ainda mais o padding superior */}
        <section className="pt-0 pb-8 md:pt-0 md:pb-12 bg-white -mt-8 md:-mt-10">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-10 gap-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Cuidado Individualizado e Especialização de Qualidade</h2>
                <p className="text-base md:text-lg text-gray-600">
                  Acreditamos que uma nutrição eficaz vai além de fórmulas prontas ou dietas genéricas. Cada organismo é único, assim como cada objetivo de saúde. Por isso, nosso trabalho é guiado por um profundo cuidado com o paciente, aliando escuta ativa, diagnóstico preciso e acompanhamento contínuo.
                </p>
                <p className="text-base md:text-lg text-gray-600 mt-3">
                  Contamos com uma equipe especializada em diferentes áreas da nutrição — clínica, funcional, esportiva e comportamental — garantindo que cada pessoa receba orientação técnica e humanizada. Nossa especialização permite oferecer soluções baseadas em evidências científicas, adaptadas às necessidades reais de quem busca não apenas resultados, mas também uma relação saudável e equilibrada com a alimentação. Aqui, o cuidado vem em primeiro lugar, e a especialização faz toda a diferença.
                </p>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <img src="/lovable-uploads/72e02af0-d74d-4ed9-930a-2d5f6fcdcae0.png" alt="Frutas e vegetais saudáveis com estetoscópio" className="h-auto max-h-60 md:max-h-72 object-contain" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-8 md:py-12 bg-nutrition-light-blue/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Sobre Lidiane Dos Reis" className="rounded-lg shadow-xl h-full w-full object-cover max-h-[400px]" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Por que escolher a Lidiane?</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Acredito que uma boa nutrição é a base de uma vida saudável e satisfatória. Como nutricionista certificada, estou dedicada a fornecer orientação personalizada e suporte para ajudá-lo a alcançar seus objetivos de saúde.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">Abordagem Personalizada</h3>
                      <p className="text-sm md:text-base text-gray-600">Reconheço que as necessidades nutricionais de cada pessoa são únicas, e crio planos personalizados que se adequam ao seu estilo de vida e objetivos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">Orientação Especializada</h3>
                      <p className="text-sm md:text-base text-gray-600">Sou uma nutricionista certificada com experiência em diversas especialidades da área.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">Suporte Contínuo</h3>
                      <p className="text-sm md:text-base text-gray-600">Ofereço orientação contínua e ajustes para garantir que você permaneça no caminho certo em sua jornada de saúde.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-6">
                  <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal">
                    <Link to="/about">Saiba Mais Sobre Mim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container-custom">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Histórias de Sucesso</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Ouça de nossos clientes que transformaram sua saúde e vidas através de nossos programas de nutrição.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Pronto para Transformar sua Saúde?</h2>
            <p className="text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto">
              Dê o primeiro passo rumo a uma vida mais saudável. Agende uma consulta comigo hoje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
                <Link to="/consultation">Agendar Consulta</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent text-white border border-white hover:bg-white/10">
                <Link to="/community">Junte-se à Nossa Comunidade</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information/Map Section */}
        
      </main>
      <Footer />
    </>;
};
export default Index;
