
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
  Search,
  Plus,
  Pencil,
  CreditCard,
  BrainCircuit,
  FileType,
  ImageIcon,
  CalendarDays
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputMask from 'react-input-mask';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import ContentEditor from "@/components/ContentEditor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs as TabsComponent, TabsList as TabsListComponent, TabsTrigger as TabsTriggerComponent, TabsContent as TabsContentComponent } from "@/components/ui/tabs";
import Map from "@/components/Map";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("consultas");
  const [editorOpen, setEditorOpen] = useState(false);
  const [currentEditPage, setCurrentEditPage] = useState("");
  const [activeConfigTab, setActiveConfigTab] = useState<string>("perfil");
  const [searchQuery, setSearchQuery] = useState("");
  const [consultaDialogOpen, setConsultaDialogOpen] = useState(false);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [selectedConsultaId, setSelectedConsultaId] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState("");
  const { toast } = useToast();
  
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

  // Páginas do sistema para editar
  const paginasSistema = [
    { id: 1, nome: "Página Inicial", rota: "/" },
    { id: 2, nome: "Sobre", rota: "/about" },
    { id: 3, nome: "Serviços", rota: "/services" },
    { id: 4, nome: "Comunidade", rota: "/community" },
    { id: 5, nome: "Consulta", rota: "/consultation" },
    { id: 6, nome: "Contato", rota: "/contact" },
  ];

  // Dados de exemplo para modelos de receituário
  const modelosReceituario = [
    { 
      id: 1, 
      nome: "Receituário Padrão", 
      descricao: "Modelo para prescrição de dieta padrão",
      preview: "/lovable-uploads/19cefa6f-5a74-4dc2-9425-7df166d07de4.png"
    },
    { 
      id: 2, 
      nome: "Receituário Simples", 
      descricao: "Modelo minimalista para indicações simples",
      preview: "/lovable-uploads/7f21824b-576f-4ec6-8c01-344ca77b5a02.png"
    },
    { 
      id: 3, 
      nome: "Receituário Completo", 
      descricao: "Modelo detalhado com todas as informações",
      preview: "/lovable-uploads/8f1a6fd3-0913-42f9-afcb-77778ed69afb.png"
    },
  ];

  const handleOpenEditor = (pageName: string) => {
    setCurrentEditPage(pageName);
    setEditorOpen(true);
  };

  const handleSaveContent = (data: any) => {
    console.log(`Salvando alterações para ${currentEditPage}:`, data);
    // Aqui implementamos a lógica para salvar as alterações
  };

  // Filtra consultas baseado na busca
  const filteredConsultas = consultas.filter(consulta => 
    consulta.paciente.toLowerCase().includes(searchQuery.toLowerCase()) ||
    consulta.data.includes(searchQuery) ||
    consulta.horario.includes(searchQuery) ||
    consulta.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Função para abrir o diálogo de edição de consulta
  const handleEditConsulta = (id: number) => {
    setSelectedConsultaId(id);
    setConsultaDialogOpen(true);
  };

  // Função para abrir o diálogo de mensagem
  const handleOpenMessageDialog = (id: number) => {
    setSelectedConsultaId(id);
    setMessageDialogOpen(true);
  };

  // Função para enviar mensagem
  const handleSendMessage = () => {
    if (mensagem.trim() === "") {
      toast({
        title: "Erro",
        description: "Por favor, escreva uma mensagem antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    // Aqui implementariamos o envio real da mensagem
    toast({
      title: "Mensagem enviada",
      description: `Mensagem enviada com sucesso para o paciente.`,
    });
    
    setMensagem("");
    setMessageDialogOpen(false);
  };

  // Função para abrir agenda completa
  const handleViewFullSchedule = () => {
    toast({
      title: "Abrindo agenda completa",
      description: "Funcionalidade de agenda completa será implementada em breve.",
    });
    // Aqui implementariamos a navegação para a página de agenda completa
  };

  // Função para adicionar nova consulta
  const handleAddNewConsulta = () => {
    setSelectedConsultaId(null); // Indica que estamos criando uma nova consulta
    setConsultaDialogOpen(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar/Menu de navegação */}
            <aside className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-col items-center justify-center mb-6">
                <Avatar className="w-24 h-24 mb-3">
                  <AvatarImage src="/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png" alt="Logo" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="p-2 bg-nutrition-green/10 rounded-md w-full text-center">
                  <h2 className="text-lg font-semibold text-nutrition-green flex items-center justify-center">
                    <LayoutDashboard className="text-nutrition-green mr-2" size={20} />
                    Painel Admin
                  </h2>
                </div>
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
                  variant={activeTab === "editar_paginas" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  onClick={() => setActiveTab("editar_paginas")}
                >
                  <Pencil className="mr-2" size={18} />
                  Editar Páginas
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
                    activeTab === "editar_paginas" ? "Editar Páginas do Sistema" :
                    "Configurações"
                  }</h1>
                  
                  <div className="flex gap-2">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        placeholder="Buscar..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    {activeTab !== "configuracoes" && activeTab !== "editar_paginas" && (
                      <Button onClick={activeTab === "consultas" ? handleAddNewConsulta : () => {}}>
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
                      <Button variant="outline" onClick={handleViewFullSchedule}>
                        <CalendarDays size={16} className="mr-2" />
                        Ver Agenda Completa
                      </Button>
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
                        {filteredConsultas.length > 0 ? (
                          filteredConsultas.map((consulta) => (
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
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleEditConsulta(consulta.id)}
                                  >
                                    <Edit size={14} className="mr-1" /> Editar
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleOpenMessageDialog(consulta.id)}
                                  >
                                    <MessageSquare size={14} className="mr-1" /> Mensagem
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                              Nenhuma consulta encontrada com os critérios de busca.
                            </TableCell>
                          </TableRow>
                        )}
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
                            <TableCell>
                              <InputMask
                                mask="(99) 99999-9999"
                                value={paciente.telefone}
                                disabled={true}
                              >
                                {(inputProps: any) => <Input {...inputProps} className="border-none p-0 h-auto" />}
                              </InputMask>
                            </TableCell>
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
                      {modelosReceituario.map((modelo) => (
                        <div key={modelo.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="font-medium mb-2">{modelo.nome}</h4>
                          <p className="text-sm text-gray-600 mb-3">{modelo.descricao}</p>
                          <div className="mb-3 border rounded-md overflow-hidden">
                            <img 
                              src={modelo.preview} 
                              alt={`Prévia de ${modelo.nome}`} 
                              className="w-full h-40 object-contain"
                            />
                          </div>
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

                {activeTab === "editar_paginas" && (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Selecione uma página para editar seu conteúdo, imagens e formatação.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {paginasSistema.map((pagina) => (
                        <div key={pagina.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{pagina.nome}</h3>
                              <p className="text-sm text-gray-500 mt-1">Rota: {pagina.rota}</p>
                            </div>
                            <Button variant="outline" onClick={() => handleOpenEditor(pagina.nome)}>
                              <Pencil size={16} className="mr-2" /> Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "configuracoes" && (
                  <div className="space-y-8">
                    <TabsComponent value={activeConfigTab} onValueChange={setActiveConfigTab} className="w-full">
                      <TabsListComponent className="mb-4 flex-wrap">
                        <TabsTriggerComponent value="perfil">Perfil</TabsTriggerComponent>
                        <TabsTriggerComponent value="impressao">Personalização de Impressão</TabsTriggerComponent>
                        <TabsTriggerComponent value="pagamentos">Gateways de Pagamento</TabsTriggerComponent>
                        <TabsTriggerComponent value="ia">Inteligência Artificial</TabsTriggerComponent>
                        <TabsTriggerComponent value="localizacao">Localização</TabsTriggerComponent>
                      </TabsListComponent>
                      
                      <TabsContentComponent value="perfil" className="border rounded-lg p-6">
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
                            <InputMask
                              mask="(99) 99999-9999"
                              defaultValue="55 66 99245-6034"
                            >
                              {(inputProps: any) => <Input {...inputProps} />}
                            </InputMask>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Horário de Funcionamento</label>
                            <Input defaultValue="Segunda à Sexta, 08:00 - 18:00" />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-sm font-medium mb-1">Logo da Clínica</label>
                            <div className="flex items-center space-x-4">
                              <Avatar className="w-24 h-24">
                                <AvatarImage src="/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png" alt="Logo" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <Button variant="outline">Alterar Logo</Button>
                            </div>
                          </div>
                        </div>
                        <Button className="mt-4">Salvar Alterações</Button>
                      </TabsContentComponent>

                      <TabsContentComponent value="impressao" className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">Personalização de Impressão</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Cabeçalho dos Documentos</label>
                              <Textarea placeholder="Texto para o cabeçalho dos documentos" rows={3} />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1">Rodapé dos Documentos</label>
                              <Textarea placeholder="Texto para o rodapé dos documentos" rows={2} />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-1">Logo para Impressão</label>
                              <div className="flex items-center space-x-3 mt-1">
                                <div className="border rounded-lg p-2 w-24 h-24 flex items-center justify-center bg-gray-50">
                                  <ImageIcon size={30} className="text-gray-400" />
                                </div>
                                <Button variant="outline" size="sm">Escolher Imagem</Button>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1">Cores do Documento</label>
                              <div className="flex space-x-3 mt-1">
                                <div>
                                  <label className="text-xs text-gray-500 block mb-1">Principal</label>
                                  <div className="flex space-x-2 items-center">
                                    <div className="w-6 h-6 bg-nutrition-green rounded-md"></div>
                                    <Input className="w-24" defaultValue="#22c55e" />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-xs text-gray-500 block mb-1">Secundária</label>
                                  <div className="flex space-x-2 items-center">
                                    <div className="w-6 h-6 bg-gray-700 rounded-md"></div>
                                    <Input className="w-24" defaultValue="#374151" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <h4 className="text-sm font-medium mb-2">Prévia do Documento</h4>
                            <div className="bg-white border rounded-lg h-[400px] overflow-y-auto shadow-sm">
                              <div className="p-4">
                                <div className="flex justify-between items-center border-b pb-4 mb-4">
                                  <img 
                                    src="/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png" 
                                    alt="Logo" 
                                    className="h-16"
                                  />
                                  <div className="text-right">
                                    <p className="font-medium">Consultório Lidiane Dos Reis</p>
                                    <p className="text-sm text-gray-600">CRN: 12345</p>
                                    <p className="text-sm text-gray-600">Tel: (66) 99245-6034</p>
                                  </div>
                                </div>
                                
                                <div className="mb-4">
                                  <h3 className="text-lg font-medium text-nutrition-green">Prescrição Nutricional</h3>
                                  <p className="text-sm">Data: 18/05/2025</p>
                                </div>
                                
                                <div className="mb-4">
                                  <p><span className="font-medium">Paciente:</span> Maria Silva</p>
                                  <p><span className="font-medium">Idade:</span> 32 anos</p>
                                </div>
                                
                                <div className="mb-6">
                                  <h4 className="font-medium mb-2">Recomendações:</h4>
                                  <div className="pl-4">
                                    <p className="mb-1">• Consumir 2L de água por dia</p>
                                    <p className="mb-1">• Evitar alimentos processados</p>
                                    <p className="mb-1">• Incluir vegetais em todas as refeições</p>
                                    <p className="mb-1">• Preferir grãos integrais</p>
                                  </div>
                                </div>
                                
                                <div className="mt-10 pt-4 border-t text-center text-sm text-gray-500">
                                  Consultório Lidiane Dos Reis - Rua Exemplo, 123 - Centro - Cidade - Estado
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="mt-4">Salvar Configurações</Button>
                      </TabsContentComponent>

                      <TabsContentComponent value="pagamentos" className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">Configurações de Gateway de Pagamento</h3>
                        <div className="space-y-6">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <CreditCard className="text-purple-600" />
                              <h3 className="font-medium">Pagar.me</h3>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium mb-1">API Key</label>
                                <Input type="password" placeholder="Digite sua API Key do Pagar.me" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Chave de Criptografia</label>
                                <Input type="password" placeholder="Digite sua Chave de Criptografia" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <CreditCard className="text-green-600" />
                              <h3 className="font-medium">Stone</h3>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium mb-1">Código da Loja</label>
                                <Input placeholder="Digite o código da sua loja Stone" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Token de Acesso</label>
                                <Input type="password" placeholder="Digite seu Token de Acesso Stone" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center space-x-3 mb-3">
                              <CreditCard className="text-blue-600" />
                              <h3 className="font-medium">Mercado Pago</h3>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium mb-1">Client ID</label>
                                <Input placeholder="Digite seu Client ID" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Client Secret</label>
                                <Input type="password" placeholder="Digite seu Client Secret" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Access Token</label>
                                <Input type="password" placeholder="Digite seu Access Token" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="mt-4">Salvar Configurações</Button>
                      </TabsContentComponent>

                      <TabsContentComponent value="ia" className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">Configurações de Inteligência Artificial</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <BrainCircuit className="text-purple-600" size={24} />
                            <h4 className="font-medium">Recursos de IA para Nutrição (Gratuitos)</h4>
                          </div>
                          
                          <div className="border rounded-lg p-4 space-y-4">
                            <div>
                              <div className="flex justify-between">
                                <label className="block text-sm font-medium mb-1">Modelo de IA</label>
                                <span className="text-xs text-gray-500">Todos gratuitos</span>
                              </div>
                              <select className="w-full border border-input rounded-md p-2.5 text-sm">
                                <option value="huggingface">Hugging Face (Gratuito)</option>
                                <option value="ollama">Ollama (Gratuito)</option>
                                <option value="google-gemini-free">Google Gemini Free Tier</option>
                              </select>
                              <p className="text-xs text-gray-500 mt-1">
                                Modelos gratuitos para geração de conteúdo nutricional
                              </p>
                            </div>
                            
                            <div className="space-y-2">
                              <label className="block text-sm font-medium">Recursos de IA Gratuitos Disponíveis</label>
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center space-x-2">
                                  <input type="checkbox" id="ai-receitas" className="rounded border-gray-300" checked />
                                  <label htmlFor="ai-receitas" className="text-sm">Sugestão de receitas básicas</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input type="checkbox" id="ai-alimentos" className="rounded border-gray-300" checked />
                                  <label htmlFor="ai-alimentos" className="text-sm">Dicas de alimentação saudável</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <input type="checkbox" id="ai-textos" className="rounded border-gray-300" checked />
                                  <label htmlFor="ai-textos" className="text-sm">Textos informativos simples</label>
                                </div>
                              </div>
                              <div className="mt-4 bg-blue-50 p-3 rounded-md">
                                <p className="text-xs text-blue-700">
                                  <strong>Dica:</strong> Todos os recursos de IA disponíveis aqui são completamente gratuitos. 
                                  Para funcionalidades mais avançadas, você pode usar modelos locais ou implementar sua própria solução.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="mt-4">Salvar Configurações</Button>
                      </TabsContentComponent>
                      
                      <TabsContentComponent value="localizacao" className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">Localização da Clínica</h3>
                        <Map defaultZoom={15} />
                      </TabsContentComponent>
                    </TabsComponent>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Editor de conteúdo */}
      <ContentEditor 
        open={editorOpen}
        onOpenChange={setEditorOpen}
        pageType={currentEditPage}
        onSave={handleSaveContent}
      />

      {/* Diálogo de Edição/Nova Consulta */}
      <Dialog open={consultaDialogOpen} onOpenChange={setConsultaDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedConsultaId ? "Editar Consulta" : "Nova Consulta"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="paciente" className="text-sm font-medium">Paciente</label>
              <select id="paciente" className="w-full border rounded-md p-2">
                {pacientes.map(paciente => (
                  <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="data" className="text-sm font-medium">Data</label>
              <Input 
                id="data" 
                type="date" 
                defaultValue={selectedConsultaId ? consultas.find(c => c.id === selectedConsultaId)?.data.split('/').reverse().join('-') : new Date().toISOString().split('T')[0]} 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="hora" className="text-sm font-medium">Horário</label>
              <Input 
                id="hora" 
                type="time" 
                defaultValue={selectedConsultaId ? consultas.find(c => c.id === selectedConsultaId)?.horario.replace(':', '') : "09:00"} 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">Status</label>
              <select id="status" className="w-full border rounded-md p-2">
                <option value="Confirmado">Confirmado</option>
                <option value="Pendente">Pendente</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConsultaDialogOpen(false)}>Cancelar</Button>
            <Button onClick={() => {
              toast({
                title: selectedConsultaId ? "Consulta atualizada" : "Consulta criada",
                description: selectedConsultaId ? "Consulta atualizada com sucesso!" : "Nova consulta criada com sucesso!",
              });
              setConsultaDialogOpen(false);
            }}>
              {selectedConsultaId ? "Salvar" : "Criar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Diálogo de Mensagem */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Enviar Mensagem</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Para</label>
              <div className="p-2 bg-gray-50 rounded-md">
                {selectedConsultaId ? 
                  consultas.find(c => c.id === selectedConsultaId)?.paciente :
                  "Selecione um paciente"
                }
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
              <Textarea 
                id="mensagem" 
                placeholder="Digite sua mensagem aqui..." 
                rows={5}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMessageDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSendMessage}>Enviar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
