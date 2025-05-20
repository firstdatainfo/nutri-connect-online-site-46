
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Apple, Carrot, Heart, MessageCircle, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "personal-nutrition",
      title: "Planos Nutricionais Personalizados",
      description: "Planos de nutrição personalizados adaptados ao seu corpo único, estilo de vida, preocupações de saúde e objetivos.",
      icon: <Apple size={32} />,
      benefits: [
        "Avaliação do seu estado atual de saúde e necessidades nutricionais",
        "Planos de refeições personalizados baseados em suas preferências e restrições alimentares",
        "Educação nutricional para ajudá-lo a entender o 'porquê' das recomendações",
        "Ajustes contínuos para otimizar seus resultados",
        "Check-ins regulares para monitorar o progresso e fornecer suporte"
      ],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-green"
    },
    {
      id: "wellness-coaching",
      title: "Coaching de Bem-Estar",
      description: "Abordagem holística à saúde que aborda nutrição junto com sono, estresse, atividade física e outros fatores de estilo de vida.",
      icon: <Heart size={32} />,
      benefits: [
        "Avaliação abrangente do estilo de vida",
        "Definição de metas e responsabilidade",
        "Estratégias de mudança comportamental",
        "Técnicas de gerenciamento de estresse",
        "Orientação para otimização do sono"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-teal"
    },
    {
      id: "meal-planning",
      title: "Planejamento de Refeições",
      description: "Planos de refeições práticos e receitas projetadas para se adequar à sua agenda, orçamento e habilidades culinárias.",
      icon: <Carrot size={32} />,
      benefits: [
        "Planos de refeições semanais com receitas fáceis de seguir",
        "Listas de compras",
        "Orientação para preparação de refeições em lote",
        "Opções econômicas",
        "Ideias de refeições para toda a família"
      ],
      image: "https://images.unsplash.com/photo-1532768778661-1b347c5f5517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      color: "nutrition-orange"
    },
    {
      id: "virtual-consultations",
      title: "Consultas Virtuais",
      description: "Sessões online convenientes com nossos especialistas em nutrição no conforto da sua casa.",
      icon: <MessageCircle size={32} />,
      benefits: [
        "Agendamento flexível",
        "Sem tempo de deslocamento",
        "Mesma qualidade de atendimento das sessões presenciais",
        "Compartilhamento de tela para recursos educacionais",
        "Plataforma segura e privada"
      ],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-blue"
    },
    {
      id: "group-programs",
      title: "Programas em Grupo",
      description: "Participe dos nossos grupos de nutrição para educação, responsabilidade e comunidade.",
      icon: <Users size={32} />,
      benefits: [
        "Orientação nutricional com bom custo-benefício",
        "Apoio e motivação da comunidade",
        "Experiências de aprendizado compartilhado",
        "Programas estruturados com objetivos claros",
        "Troca de receitas saudáveis"
      ],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "nutrition-green"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section com a nova imagem */}
        <section className="bg-nutrition-light-blue/10 py-12 md:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nossos Serviços Nutricionais</h1>
                <p className="text-lg text-gray-700 mb-8">
                  Conheça nossa variedade de serviços nutricionais personalizados projetados para ajudá-lo a alcançar seus objetivos de saúde.
                </p>
                <Button asChild size="lg" className="bg-nutrition-green hover:bg-nutrition-green/90">
                  <Link to="/consultation">Agendar uma Consulta</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src="/lovable-uploads/d08fb607-d036-44b3-a7ea-8bcb1e13ff7a.png" 
                  alt="Dra. Lidiane dos Reis - Nutricionista" 
                  className="max-h-[500px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introdução aos Serviços */}
        <section className="bg-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossos Serviços</h2>
                <p className="text-gray-700 mb-4">
                  Na busca por saúde e bem-estar, cada pessoa é única — e é exatamente assim que tratamos cada paciente. Oferecemos serviços personalizados, fundamentados em evidências científicas e aliados a uma visão holística da saúde.
                </p>
                <p className="text-gray-700 mb-4">
                  Acreditamos que a nutrição vai muito além da dieta: ela envolve estilo de vida, hábitos, emoções e objetivos individuais. Por isso, atuamos em diferentes áreas da nutrição para entregar um atendimento completo e humanizado.
                </p>
                <p className="text-gray-700">
                  Seja na prevenção de doenças, no acompanhamento clínico ou no apoio ao desempenho físico, estamos aqui para guiá-lo(a) com cuidado, atenção e excelência. Conheça nossas especialidades e descubra como podemos ajudar você a alcançar resultados duradouros e significativos.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src="/lovable-uploads/328781bb-6e73-4640-a174-a95402b23668.png" 
                  alt="Nutrição e saúde" 
                  className="rounded-lg max-w-full h-auto shadow-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="bg-white py-16">
          <div className="container-custom">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index !== 0 ? "pt-20 mt-20 border-t border-gray-100" : ""
                }`}
              >
                {/* Imagem (alternando lados) */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`absolute -inset-1 bg-${service.color}/20 rounded-lg blur-xl opacity-70`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-lg shadow-xl relative z-10"
                  />
                </div>

                {/* Conteúdo */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`bg-${service.color}/10 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                    <div className={`text-${service.color}`}>{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Benefícios:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`bg-${service.color}/10 rounded-full p-1 mr-3 mt-1`}>
                          <svg className={`w-4 h-4 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`bg-${service.color} hover:bg-${service.color}/90`}>
                    <Link to="/consultation">Agendar Este Serviço</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Perguntas Frequentes */}
        <section className="bg-nutrition-light-blue/20 py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tem dúvidas sobre nossos serviços? Encontre respostas para perguntas comuns abaixo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Quanto tempo leva para ver resultados?</h3>
                <p className="text-gray-700">
                  Os resultados variam dependendo do seu ponto de partida, objetivos e consistência. Muitos clientes notam melhorias na energia e bem-estar nas primeiras 2-3 semanas. Mudanças físicas podem levar um pouco mais de tempo, geralmente 4-8 semanas de implementação consistente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Vocês trabalham com condições médicas específicas?</h3>
                <p className="text-gray-700">
                  Sim, nossa equipe inclui especialistas em várias condições de saúde, incluindo diabetes, doenças cardíacas, distúrbios digestivos, desequilíbrios hormonais e alergias/intolerâncias alimentares. Coordenamos com seus profissionais de saúde quando necessário.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Precisarei desistir de todos os meus alimentos favoritos?</h3>
                <p className="text-gray-700">
                  Absolutamente não! Acreditamos em nutrição sustentável, o que significa encontrar maneiras de incluir alimentos que você gosta enquanto equilibra as necessidades nutricionais gerais. Nossa abordagem não é sobre restrição, mas sim educação e escolhas conscientes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">O que acontece na primeira consulta?</h3>
                <p className="text-gray-700">
                  A consulta inicial inclui uma avaliação abrangente do seu histórico de saúde, dieta atual, estilo de vida e objetivos. Discutiremos sua relação com a comida, quaisquer desafios, e começaremos a delinear uma abordagem personalizada para ajudá-lo a alcançar seus objetivos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Como são realizadas as consultas virtuais?</h3>
                <p className="text-gray-700">
                  As consultas virtuais ocorrem por meio de uma plataforma de vídeo segura. Você receberá um link antes da sua consulta. A sessão segue o mesmo formato das reuniões presenciais, com a capacidade de compartilhar telas para revisar materiais ou demonstrar técnicas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Vocês aceitam planos de saúde?</h3>
                <p className="text-gray-700">
                  Alguns serviços de nutrição podem ser cobertos por planos de saúde, especialmente aqueles relacionados a condições médicas. Fornecemos a documentação necessária para você enviar ao seu plano de saúde para possível reembolso. Entre em contato conosco para discutir sua situação específica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section className="py-16 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Dê o primeiro passo em direção a uma saúde melhor e agende sua consulta hoje.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
              <Link to="/consultation">Agendar uma Consulta</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
