
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LayoutDashboard, 
  MessageSquare, 
  Printer, 
  Edit,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

import Map from "@/components/Map";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("consultas");
  
  // Dados de exemplo para consultas
  const consultas = [
    { id: 1, paciente: "Maria Silva", data: "18/05/2025", horario: "09:00", status: "Confirmado" },
    { id: 2, paciente: "João Santos", data: "19/05/2025", horario: "10:30", status: "Pendente" },
    { id: 3, paciente: "Ana Oliveira", data: "20/05/2025", horario: "14:00", status: "Confirmado" },
    { id: 4, paciente: "Carlos Ferreira", data: "21/05/2025", horario: "15:30", status: "Cancelado" },
  ];
  
  // Dados de exemplo para pacientes
  const pacientes = [
    { id: 1, nome: "Maria Silva", telefone: "(66) 99999-1111", ultimaConsulta: "10/04/2025" },
    { id: 2, nome: "João Santos", telefone: "(66) 99999-2222", ultimaConsulta: "15/04/2025" },
    { id: 3, nome: "Ana Oliveira", telefone: "(66) 99999-3333", ultimaConsulta: "20/04/2025" },
    { id: 4, nome: "Carlos Ferreira", telefone: "(66) 99999-4444", ultimaConsulta: "25/04/2025" },
    { id: 5, nome: "Fernanda Lima", telefone: "(66) 99999-5555", ultimaConsulta: "01/05/2025" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar/Menu de navegação */}
            <aside className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-center mb-6 p-2 bg-nutrition-green/10 rounded-md">
                <LayoutDashboard className="text-nutrition-green mr-2" size={20} />
                <h2 className="text-lg font-semibold text-nutrition-green">Painel Admin</h2>
              </div>
              
              <nav className="space-y-1">
                <Button 
                  variant={activeTab === "consultas" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("consultas")}
                >
                  <Calendar className="mr-2" size={18} />
                  Consultas
                </Button>
                <Button 
                  variant={activeTab === "pacientes" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("pacientes")}
                >
                  <Users className="mr-2" size={18} />
                  Pacientes
                </Button>
                <Button 
                  variant={activeTab === "receituarios" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("receituarios")}
                >
                  <FileText className="mr-2" size={18} />
                  Receituários
                </Button>
                <Button 
                  variant={activeTab === "mensagens" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("mensagens")}
                >
                  <MessageSquare className="mr-2" size={18} />
                  Mensagens
                </Button>
                <Button 
                  variant={activeTab === "configuracoes" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("configuracoes")}
                >
                  <Settings className="mr-2" size={18} />
                  Configurações
                </Button>
              </nav>
            </aside>

            {/* Conteúdo principal */}
            <div className="flex-1">
              {/* Cabeçalho */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <h1 className="text-2xl font-bold">{
                    activeTab === "consultas" ? "Gestão de Consultas" :
                    activeTab === "pacientes" ? "Lista de Pacientes" :
                    activeTab === "receituarios" ? "Receituários" :
                    activeTab === "mensagens" ? "Mensagens" :
                    "Configurações"
                  }</h1>
                  
                  <div className="flex gap-2">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        placeholder="Buscar..."
                        className="pl-9"
                      />
                    </div>
                    {activeTab !== "configuracoes" && (
                      <Button>
                        <Plus size={18} className="mr-1" /> Novo
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo da aba */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {activeTab === "consultas" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Próximas Consultas</h3>
                      <Button variant="outline">Ver Agenda Completa</Button>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Paciente</TableHead>
                          <TableHead>Data</TableHead>
                          <TableHead>Horário</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {consultas.map((consulta) => (
                          <TableRow key={consulta.id}>
                            <TableCell>{consulta.paciente}</TableCell>
                            <TableCell>{consulta.data}</TableCell>
                            <TableCell>{consulta.horario}</TableCell>
                            <TableCell>
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                consulta.status === "Confirmado" ? "bg-green-100 text-green-800" :
                                consulta.status === "Pendente" ? "bg-yellow-100 text-yellow-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {consulta.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Edit size={14} className="mr-1" /> Editar
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageSquare size={14} className="mr-1" /> Mensagem
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {activeTab === "pacientes" && (
                  <div className="space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead>Telefone</TableHead>
                          <TableHead>Última Consulta</TableHead>
                          <TableHead>Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pacientes.map((paciente) => (
                          <TableRow key={paciente.id}>
                            <TableCell>{paciente.nome}</TableCell>
                            <TableCell>{paciente.telefone}</TableCell>
                            <TableCell>{paciente.ultimaConsulta}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <FileText size={14} className="mr-1" /> Ver Histórico
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Calendar size={14} className="mr-1" /> Agendar
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {activeTab === "receituarios" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Modelos de Receituários</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">Modelo de Receituário {i}</h4>
                          <p className="text-sm text-gray-600 mb-4">Modelo para prescrição de dieta padrão</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit size={14} className="mr-1" /> Editar
                            </Button>
                            <Button variant="outline" size="sm">
                              <Printer size={14} className="mr-1" /> Imprimir
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border border-dashed rounded-lg p-4 flex items-center justify-center">
                        <Button variant="ghost">
                          <Plus size={18} className="mr-2" /> Criar Novo Modelo
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "mensagens" && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-4">Mensagens Recentes</h3>
                    
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="border rounded-lg p-4 hover:border-nutrition-green transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Paciente {i}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Mensagem enviada recentemente pelo paciente {i}. Clique para ver mais detalhes...
                              </p>
                            </div>
                            <span className="text-xs text-gray-500">15/05/2025</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "configuracoes" && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Configurações do Perfil</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Nome da Clínica</label>
                          <Input defaultValue="Consultório Lidiane Dos Reis" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email de Contato</label>
                          <Input defaultValue="lidiane_dosreis@outlook.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Telefone</label>
                          <Input defaultValue="55 66 99245-6034" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Horário de Funcionamento</label>
                          <Input defaultValue="Segunda à Sexta, 08:00 - 18:00" />
                        </div>
                      </div>
                      <Button className="mt-4">Salvar Alterações</Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Localização da Clínica</h3>
                      <Map defaultZoom={15} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
