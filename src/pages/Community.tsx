import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CommunityPost from "@/components/CommunityPost";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Community = () => {
  const [newPostContent, setNewPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  // Dados de exemplo para posts da comunidade
  const posts = [{
    id: "1",
    author: "Maria Silva",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    content: "Acabei de completar minha primeira semana no novo plano nutricional e já estou me sentindo com mais energia! Alguém mais teve resultados rápidos com seus planos?",
    timestamp: new Date(2023, 4, 15, 14, 30),
    likes: 24,
    comments: [{
      id: "1-1",
      author: "João Santos",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      content: "Sim! Notei melhor sono e mais energia já na primeira semana. Continue assim!",
      timestamp: new Date(2023, 4, 15, 15, 45)
    }, {
      id: "1-2",
      author: "Ana Costa",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      content: "Isso é incrível! Eu levei cerca de duas semanas para notar mudanças, mas agora me sinto fantástica!",
      timestamp: new Date(2023, 4, 15, 16, 20)
    }]
  }, {
    id: "2",
    author: "Carlos Mendes",
    authorImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    content: "Aqui está um café da manhã rápido e nutritivo que tenho apreciado: aveia overnight com frutas vermelhas, sementes de chia e uma colher de iogurte grego. Quais são seus cafés da manhã saudáveis preferidos?",
    timestamp: new Date(2023, 4, 14, 9, 15),
    likes: 36,
    comments: [{
      id: "2-1",
      author: "Sofia Almeida",
      authorImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      content: "Adoro torrada de abacate com ovos pochê e tomates cereja!",
      timestamp: new Date(2023, 4, 14, 9, 30)
    }],
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }, {
    id: "3",
    author: "Mariana Oliveira",
    authorImage: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    content: "Estou procurando recomendações de boas fontes de proteína vegetal que não sejam à base de soja. Alguém tem sugestões?",
    timestamp: new Date(2023, 4, 13, 18, 45),
    likes: 18,
    comments: [{
      id: "3-1",
      author: "Dra. Maria Costa",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      content: "Lentilhas, grão-de-bico e sementes de cânhamo são opções excelentes! Quinoa também é uma fonte completa de proteínas.",
      timestamp: new Date(2023, 4, 13, 19, 20)
    }, {
      id: "3-2",
      author: "Ricardo Fernandes",
      content: "Tenho usado proteína de ervilha em pó nos meus smoothies. O sabor é bem suave e funciona muito bem!",
      timestamp: new Date(2023, 4, 13, 19, 45)
    }]
  }];

  // Dados de exemplo para eventos futuros
  const events = [{
    id: "e1",
    title: "Workshop de Culinária Saudável",
    date: "15 de Junho, 2023",
    time: "18:00 - 20:00",
    location: "Virtual - Zoom",
    description: "Aprenda a preparar refeições rápidas e nutritivas que toda a família vai gostar. Inclui demonstração de culinária ao vivo e sessão de perguntas e respostas."
  }, {
    id: "e2",
    title: "Nutrição para Performance Atlética",
    date: "22 de Junho, 2023",
    time: "17:30 - 19:00",
    location: "Centro NutriVida",
    description: "Junte-se ao nosso nutricionista esportivo para uma discussão sobre como otimizar sua nutrição para melhorar o desempenho atlético e recuperação."
  }, {
    id: "e3",
    title: "Workshop de Alimentação Consciente",
    date: "5 de Julho, 2023",
    time: "12:00 - 13:30",
    location: "Virtual - Zoom",
    description: "Desenvolva uma relação mais saudável com a comida através de práticas de alimentação consciente. Este workshop combina ciência da nutrição com técnicas de mindfulness."
  }];

  // Lidar com envio de novo post
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostContent.trim()) {
      setIsSubmitting(true);

      // Simular chamada de API para postar
      setTimeout(() => {
        setIsSubmitting(false);
        setNewPostContent("");
        toast({
          title: "Post Compartilhado",
          description: "Seu post foi compartilhado com a comunidade."
        });
      }, 1500);
    }
  };
  return <>
      <Navbar />
      <main>
        <Hero title="Comunidade NutriVida" subtitle="Conecte-se com outras pessoas em sua jornada nutricional, compartilhe experiências e inspire-se." ctaText="Participe da Discussão" ctaLink="#community-feed" image="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" showWave={false} />

        <section id="community-feed" className="py-16 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                
                <TabsTrigger value="events">Próximos Eventos</TabsTrigger>
                <TabsTrigger value="resources">Recursos</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Formulário de envio de post */}
                <div className="bg-white rounded-lg shadow p-5 mb-8">
                  <h2 className="text-xl font-semibold mb-4">Compartilhe com a Comunidade</h2>
                  <form onSubmit={handlePostSubmit}>
                    <Textarea placeholder="O que está em sua mente? Compartilhe dicas, faça perguntas ou celebre suas conquistas..." className="mb-4" value={newPostContent} onChange={e => setNewPostContent(e.target.value)} rows={4} />
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-nutrition-green hover:bg-nutrition-teal" disabled={!newPostContent.trim() || isSubmitting}>
                        {isSubmitting ? "Postando..." : "Compartilhar Post"}
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Diretrizes da comunidade */}
                <div className="bg-nutrition-light-green/10 rounded-lg p-4 mb-8">
                  <h3 className="font-semibold text-nutrition-green mb-2">Diretrizes da Comunidade</h3>
                  <p className="text-sm text-gray-700">
                    Por favor, lembre-se de ser respeitoso, solidário e construtivo em suas interações. 
                    Esta comunidade é um espaço seguro para todos em sua jornada nutricional. 
                    Evite oferecer conselhos médicos ou promover produtos/serviços específicos.
                  </p>
                </div>

                {/* Feed da comunidade */}
                <div>
                  {posts.map(post => <CommunityPost key={post.id} {...post} />)}
                </div>

                {/* Botão para carregar mais */}
                <div className="text-center pt-4">
                  <Button variant="outline">Carregar Mais Posts</Button>
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Próximos Eventos</h2>
                    <p className="text-gray-600 mb-6">
                      Participe de nossos workshops, webinars e encontros para aprimorar seu conhecimento nutricional e conectar-se com nossa comunidade.
                    </p>
                    
                    <div className="space-y-6">
                      {events.map(event => <div key={event.id} className="border-b border-gray-100 pb-6 last:border-0">
                          <h3 className="text-xl font-medium text-nutrition-green mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-3">
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <Button className="bg-nutrition-green hover:bg-nutrition-teal">
                            Inscrever-se
                          </Button>
                        </div>)}
                    </div>
                  </div>

                  {/* Sugerir evento */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Sugerir um Evento</h2>
                    <p className="text-gray-600 mb-4">
                      Tem uma ideia para um evento comunitário ou um tópico que gostaria que abordássemos? Conte-nos!
                    </p>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Título do Evento" className="mb-4" />
                      </div>
                      <div>
                        <Textarea placeholder="Descrição do Evento" rows={4} />
                      </div>
                      <div className="text-right">
                        <Button className="bg-nutrition-green hover:bg-nutrition-teal">
                          Enviar Sugestão
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="space-y-8">
                  {/* Artigos */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Artigos sobre Nutrição</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
                        <h3 className="text-xl font-medium text-nutrition-green mb-2">Entendendo os Macronutrientes</h3>
                        <p className="text-gray-600 mb-4">
                          Aprenda sobre proteínas, carboidratos e gorduras, e como equilibrá-los para uma saúde ideal.
                        </p>
                        <Button variant="outline" className="border-nutrition-green text-nutrition-green hover:bg-nutrition-green/10">
                          Ler Artigo
                        </Button>
                      </div>
                      <div className="pt-6 md:pt-0 md:pl-6">
                        <h3 className="text-xl font-medium text-nutrition-green mb-2">Preparação de Refeições para Profissionais Ocupados</h3>
                        <p className="text-gray-600 mb-4">
                          Dicas práticas e estratégias para preparar refeições saudáveis quando você está com pouco tempo.
                        </p>
                        <Button variant="outline" className="border-nutrition-green text-nutrition-green hover:bg-nutrition-green/10">
                          Ler Artigo
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button variant="link" className="text-nutrition-green">
                        Ver Todos os Artigos
                      </Button>
                    </div>
                  </div>

                  {/* Banco de receitas */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Banco de Receitas Saudáveis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Salada de Vegetais" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold mb-1">Salada de Quinoa Mediterrânea</h3>
                        <p className="text-sm text-gray-600 mb-3">15 minutos de preparo • Rica em proteínas • Sem glúten</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          Ver Receita
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80" alt="Bowl de Café da Manhã" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold mb-1">Bowl Energético para o Café da Manhã</h3>
                        <p className="text-sm text-gray-600 mb-3">10 minutos de preparo • Alto teor de fibras • Vegetariano</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          Ver Receita
                        </Button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <img src="https://images.unsplash.com/photo-1513192800243-82f12f93ef79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Smoothie Bowl" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="font-semibold mb-1">Smoothie de Proteína com Frutas Vermelhas</h3>
                        <p className="text-sm text-gray-600 mb-3">5 minutos de preparo • Rico em antioxidantes • Opção sem laticínios</p>
                        <Button className="w-full bg-nutrition-green hover:bg-nutrition-teal">
                          Ver Receita
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-8">
                      <Button variant="link" className="text-nutrition-green">
                        Explorar Todas as Receitas
                      </Button>
                    </div>
                  </div>

                  {/* Recursos para download */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-6">Recursos Gratuitos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-green/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Modelo de Planejamento de Refeições</h3>
                          <p className="text-sm text-gray-600 mb-3">Um modelo personalizável de planejamento semanal de refeições para ajudar você a organizar suas refeições.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-green border-nutrition-green hover:bg-nutrition-green/10">
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-blue/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Guia de Compras no Supermercado</h3>
                          <p className="text-sm text-gray-600 mb-3">Um guia abrangente para navegar no supermercado e fazer escolhas mais saudáveis.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-blue border-nutrition-blue hover:bg-nutrition-blue/10">
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-light-orange/20 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Rastreador Nutricional</h3>
                          <p className="text-sm text-gray-600 mb-3">Um rastreador diário imprimível de nutrição e consumo de água para monitorar seus hábitos.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-orange border-nutrition-orange hover:bg-nutrition-orange/10">
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex p-4 border border-gray-100 rounded-lg">
                        <div className="bg-nutrition-teal/10 p-4 rounded-lg mr-4">
                          <svg className="w-8 h-8 text-nutrition-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Ideias de Lanches Saudáveis</h3>
                          <p className="text-sm text-gray-600 mb-3">Uma coleção de mais de 50 ideias de lanches nutritivos para diferentes momentos do dia.</p>
                          <Button variant="outline" size="sm" className="text-nutrition-teal border-nutrition-teal hover:bg-nutrition-teal/10">
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Community;