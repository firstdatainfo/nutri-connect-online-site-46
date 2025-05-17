
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Consultation = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agende sua Consulta</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dê o primeiro passo rumo a uma saúde melhor com uma consulta nutricional personalizada.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-24">
                  {/* What to expect */}
                  <div className="bg-nutrition-light-blue/10 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">O que Esperar</h2>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Avaliação Completa</strong>
                          <p className="text-sm mt-1">Analisaremos seu histórico de saúde, objetivos e hábitos alimentares atuais.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Recomendações Personalizadas</strong>
                          <p className="text-sm mt-1">Você receberá orientações nutricionais adaptadas e um plano viável.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Recursos Educacionais</strong>
                          <p className="text-sm mt-1">Acesso a materiais adicionais para apoiar sua jornada.</p>
                        </span>
                      </li>
                      <li className="flex">
                        <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          <strong className="font-medium">Planejamento de Acompanhamento</strong>
                          <p className="text-sm mt-1">Discussão sobre próximos passos e opções de suporte contínuo.</p>
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" 
                          alt="Cliente" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <p className="font-semibold">Ana Martins</p>
                        <p className="text-sm text-gray-500">Cliente - 6 meses</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      "Marcar minha primeira consulta foi a melhor decisão que tomei para minha saúde. A abordagem personalizada fez toda a diferença, e vi resultados incríveis."
                    </blockquote>
                    
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-nutrition-orange fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 1.5l3.09 6.26L22 8.64l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.51 2 8.64l6.91-1.01L12 1.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking Form */}
              <div className="col-span-2 order-1 lg:order-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <Tabs defaultValue="book">
                    <TabsList className="grid grid-cols-2 mb-8">
                      <TabsTrigger value="book">Agendar Online</TabsTrigger>
                      <TabsTrigger value="info">Informações da Consulta</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="book">
                      <h2 className="text-2xl font-semibold mb-6">Agende sua Consulta</h2>
                      <BookingForm />
                    </TabsContent>
                    
                    <TabsContent value="info">
                      <h2 className="text-2xl font-semibold mb-6">Informações da Consulta</h2>
                      
                      <div className="space-y-8">
                        {/* Consultation Types */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">Tipos de Consulta</h3>
                          <div className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Consulta Inicial (60 min)</h4>
                              <p className="text-gray-600 mb-2">Uma primeira sessão completa para entender seu histórico de saúde, objetivos e desenvolver um plano inicial.</p>
                              <p className="font-medium">R$300</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Consulta de Acompanhamento (30 min)</h4>
                              <p className="text-gray-600 mb-2">Verificações regulares para monitorar o progresso, enfrentar desafios e ajustar seu plano conforme necessário.</p>
                              <p className="font-medium">R$150</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Plano Alimentar Personalizado (45 min)</h4>
                              <p className="text-gray-600 mb-2">Sessão focada no desenvolvimento de um plano de refeições personalizado adaptado às suas necessidades e preferências.</p>
                              <p className="font-medium">R$200</p>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-1">Coaching de Saúde (60 min)</h4>
                              <p className="text-gray-600 mb-2">Coaching holístico que aborda nutrição junto com outros fatores de bem-estar como estresse, sono e atividade física.</p>
                              <p className="font-medium">R$300</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* How to Prepare */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">Como se Preparar</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Mantenha um diário alimentar de 3 dias antes da sua consulta (se possível).</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Tenha disponíveis quaisquer resultados de exames médicos recentes ou registros de saúde.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Anote quaisquer perguntas ou preocupações específicas que gostaria de abordar.</span>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                                <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-gray-700">Para consultas virtuais, teste seu dispositivo e conexão com a internet com antecedência.</span>
                            </li>
                          </ul>
                        </div>
                        
                        {/* FAQ */}
                        <div>
                          <h3 className="text-xl font-medium mb-4 text-nutrition-green">Perguntas Frequentes</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-1">Quais métodos de pagamento vocês aceitam?</h4>
                              <p className="text-gray-600">Aceitamos todos os principais cartões de crédito/débito, PIX e transferência bancária.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">Qual é a política de cancelamento?</h4>
                              <p className="text-gray-600">Por favor, avise com pelo menos 24 horas de antecedência para cancelamentos para evitar uma taxa de 50%. Cancelamentos com menos de 12 horas de antecedência podem ser cobrados integralmente.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">Vocês oferecem descontos para pacotes?</h4>
                              <p className="text-gray-600">Sim, oferecemos tarifas com desconto para pacotes de consulta. Entre em contato para mais detalhes.</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-1">Quanto tempo levará para ver resultados?</h4>
                              <p className="text-gray-600">Isso varia de acordo com o indivíduo e os objetivos, mas muitos clientes notam melhorias na energia e digestão dentro de 2-3 semanas após implementar as recomendações.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Consultation;
