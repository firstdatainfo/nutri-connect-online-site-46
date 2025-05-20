
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const About = () => {
  // Modificado para manter apenas a Dra. Lidiane dos Reis
  const teamMember = {
    name: "Dra. Lidiane dos Reis",
    title: "Nutricionista",
    image: "/lovable-uploads/c96454b9-5d50-458c-8a97-2cb785105770.png", // Nova imagem carregada
    bio: "Dra. Lidiane dos Reis tem mais de 15 anos de experiência em nutrição clínica e possui doutorado em Ciências Nutricionais."
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero title="Sobre NutriVida" subtitle="Conheça a NutriVida: uma iniciativa dedicada a transformar vidas por meio da nutrição consciente e personalizada. Composta por uma equipe multidisciplinar de nutricionistas, médicos e especialistas em saúde, nossa missão é promover bem-estar sustentável, oferecendo orientações baseadas em ciência e empatia, ajudando cada indivíduo a alcançar seu equilíbrio único entre alimentação, saúde e qualidade de vida." showWave={false} image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" ctaText="Agendar Consulta" />

        {/* Seção Nossa História */}
        <section className="section-padding bg-white" id="nossa-historia">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
                <p className="text-lg text-gray-700 mb-6">
                  A NutriVida foi fundada em 2010 com uma missão simples: tornar a nutrição personalizada acessível a todos. O que começou como uma pequena prática cresceu e se tornou um centro abrangente de nutrição e bem-estar com uma equipe de profissionais dedicados.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Nossa fundadora, Dra. Lidiane dos Reis, reconheceu que muitas pessoas lutavam para navegar pelas informações nutricionais e precisavam de orientação especializada para alcançar seus objetivos de saúde. Ela reuniu uma equipe de nutricionistas e especialistas em bem-estar que compartilham sua paixão por ajudar os outros a transformar suas vidas através da nutrição adequada.
                </p>
                <div className="bg-nutrition-light-green/20 border-l-4 border-nutrition-green p-4 mb-6 rounded">
                  <p className="text-lg italic text-gray-700">
                    "Acreditamos que a nutrição adequada é a base para uma vida saudável e plena. Nossa missão é fornecer conhecimento, orientação e apoio personalizado para cada cliente em sua jornada de saúde."
                  </p>
                  <p className="text-right font-medium mt-2">— Dra. Lidiane dos Reis, Fundadora</p>
                </div>
                <p className="text-lg text-gray-700">
                  Hoje, continuamos a expandir nossos serviços e alcance, ajudando indivíduos e famílias em todo o país a alcançar melhor saúde através de planos nutricionais personalizados, educação e suporte contínuo.
                </p>
              </div>
              {/* Coluna da direita com a nova imagem */}
              <div className="flex items-center justify-center">
                <div className="rounded-xl shadow-xl w-full max-w-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/dda64908-e685-4ed3-8c2f-0579aa21112c.png" 
                    alt="Alimentos saudáveis incluindo frutas, vegetais e proteínas" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Valores */}
        <section className="section-padding bg-nutrition-light-blue/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Missão & Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos guiados por um compromisso com a excelência, integridade e compaixão em tudo o que fazemos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-green/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Personalização</h3>
                <p className="text-gray-600 text-center">
                  Acreditamos que a nutrição não segue um padrão único. Cada plano que criamos é adaptado às necessidades, preferências e objetivos únicos do indivíduo.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Baseado em Evidências</h3>
                <p className="text-gray-600 text-center">
                  Nossas recomendações são fundamentadas nas mais recentes pesquisas científicas e ciências nutricionais, não em modismos ou tendências.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-nutrition-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-nutrition-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Comunidade de Apoio</h3>
                <p className="text-gray-600 text-center">
                  Cultivamos uma comunidade de apoio e responsabilidade para ajudar nossos clientes a alcançar sucesso duradouro em sua jornada de saúde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Conheça Meu Trabalho - Modificada para mostrar apenas Dra. Lidiane */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Meu Trabalho</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sou nutricionista certificada e especialista em bem-estar, dedicada a ajudá-lo a alcançar seus objetivos de saúde.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-md">
                <div className="w-full h-[500px] overflow-hidden">
                  <img 
                    src="/lovable-uploads/66d8f232-ba58-456e-bb29-6e6e3d4efe7c.png" 
                    alt={teamMember.name} 
                    className="w-full h-full object-contain"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{teamMember.name}</h3>
                  <p className="text-nutrition-green font-medium mb-3">{teamMember.title}</p>
                  <p className="text-gray-600">{teamMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Credenciais */}
        <section className="section-padding bg-nutrition-light-green/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Credenciais</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Orgulho-me de manter os mais altos padrões profissionais e educação contínua.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Certificações</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Nutricionista Registrada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Especialista em Nutrição Esportiva</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Educadora em Diabetes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Coach de Saúde e Bem-Estar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Associações Profissionais</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Academia de Nutrição e Dietética</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Sociedade Brasileira de Nutrição</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Nutrição Esportiva, Cardiovascular e de Bem-Estar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-nutrition-green/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Conselho Nacional para Coaching de Saúde e Bem-Estar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
