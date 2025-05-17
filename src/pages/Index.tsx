
import { Apple, Carrot, MessageCircle, Users, Phone, Instagram, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [{
    title: "Nutrição Clínica Integrativa",
    description: "Abordagem personalizada que integra diferentes aspectos da saúde para criar planos nutricionais completos.",
    icon: <Apple size={24} />,
    link: "/services",
    color: "nutrition-green"
  }, {
    title: "Nutrição Esportiva",
    description: "Planos nutricionais especializados para atletas e praticantes de atividades físicas visando melhorar o desempenho.",
    icon: <Users size={24} />,
    link: "/services",
    color: "nutrition-blue"
  }, {
    title: "Nutrição Estética",
    description: "Programas alimentares focados em melhorar a aparência da pele, cabelos e composição corporal.",
    icon: <Carrot size={24} />,
    link: "/services",
    color: "nutrition-orange"
  }, {
    title: "Consultas Online",
    description: "Atendimento virtual personalizado com acompanhamento completo do seu progresso.",
    icon: <MessageCircle size={24} />,
    link: "/consultation",
    color: "nutrition-teal"
  }];
  
  const testimonials = [{
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
  }];
  
  return <>
      <Navbar />
      <main>
        <Hero 
          title="Lidiane Dos Reis" 
          subtitle="Nutricionista Clínica Integrativa, Esportiva, Estética, Microbiota Intestinal e Genômica" 
          ctaText="Agende uma Consulta" 
          ctaLink="/consultation" 
          profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png" 
          image="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1513&q=80" 
        />

        {/* Services Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Nossos Serviços</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça as diferentes áreas de atuação e descubra como podemos ajudar você a alcançar seus objetivos de saúde.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 md:py-16 bg-nutrition-light-blue/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Sobre Lidiane Dos Reis" className="rounded-lg shadow-xl" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Por que escolher a Lidiane?</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                  Acredito que uma boa nutrição é a base de uma vida saudável e satisfatória. Como nutricionista certificada, estou dedicada a fornecer orientação personalizada e suporte para ajudá-lo a alcançar seus objetivos de saúde.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 md:mr-4 mt-1">
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
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 md:mr-4 mt-1">
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
                    <div className="bg-nutrition-green/10 rounded-full p-2 mr-3 md:mr-4 mt-1">
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
                <div className="mt-6 md:mt-8">
                  <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal">
                    <Link to="/about">Saiba Mais Sobre Mim</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Histórias de Sucesso</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Ouça de nossos clientes que transformaram sua saúde e vidas através de nossos programas de nutrição.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Pronto para Transformar sua Saúde?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
              Dê o primeiro passo rumo a uma vida mais saudável. Agende uma consulta comigo hoje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
                <Link to="/consultation">Agendar Consulta</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent text-white border border-white hover:bg-white/10">
                <Link to="/community">Junte-se à Nossa Comunidade</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Entre em Contato</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos disponíveis para responder suas perguntas e ajudá-lo em sua jornada de saúde.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 md:p-6 rounded-lg bg-nutrition-light-green/10 hover:bg-nutrition-light-green/20 transition-colors">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-nutrition-green text-white mb-3 md:mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Telefone</h3>
                <p className="text-sm md:text-base text-gray-700">55 66 99245-6034</p>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-lg bg-nutrition-light-blue/10 hover:bg-nutrition-light-blue/20 transition-colors">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-nutrition-blue text-white mb-3 md:mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Email</h3>
                <p className="text-sm md:text-base text-gray-700">lidiane_dosreis@outlook.com</p>
              </div>
              
              <div className="text-center p-4 md:p-6 rounded-lg bg-nutrition-light-green/10 hover:bg-nutrition-light-green/20 transition-colors">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-nutrition-teal text-white mb-3 md:mb-4">
                  <Instagram size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Instagram</h3>
                <p className="text-sm md:text-base text-gray-700">@lidianedosreisnutri</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;
