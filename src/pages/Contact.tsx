
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada",
        description: "Recebemos sua mensagem e responderemos em breve.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title="Contato"
          subtitle="Tem perguntas ou deseja saber mais sobre nossos serviços? Entre em contato conosco hoje."
          ctaText=""
          ctaLink=""
          showWave={false}
          image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
        />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Seu número de telefone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Consulta Geral</SelectItem>
                        <SelectItem value="services">Informações sobre Serviços</SelectItem>
                        <SelectItem value="appointment">Pergunta sobre Agendamento</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudá-lo?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-nutrition-green hover:bg-nutrition-teal"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-gray-600 mb-8">
                  Estamos aqui para responder suas perguntas e fornecer suporte em sua jornada nutricional.
                </p>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-nutrition-green/10 rounded-full p-3 mr-4">
                      <Mail className="w-6 h-6 text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">Para consultas gerais:</p>
                      <a href="mailto:lidiane_dosreis@outlook.com" className="text-nutrition-green hover:underline">lidiane_dosreis@outlook.com</a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-nutrition-green/10 rounded-full p-3 mr-4">
                      <Phone className="w-6 h-6 text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                      <p className="text-gray-600 mb-1">Celular:</p>
                      <a href="tel:5566992456034" className="text-nutrition-green hover:underline">55 66 99245-6034</a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-nutrition-green/10 rounded-full p-3 mr-4">
                      <Instagram className="w-6 h-6 text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                      <a 
                        href="https://www.instagram.com/lidianedosreisnutri/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-nutrition-green hover:underline">
                        @lidianedosreisnutri
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-nutrition-green/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600">
                        Segunda - Sexta: 9:00 - 18:00<br />
                        Sábado: 10:00 - 14:00<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Siga-nos</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/lidianedosreisnutri/" target="_blank" rel="noopener noreferrer" className="bg-nutrition-green/10 hover:bg-nutrition-green/20 transition-colors p-2 rounded-full">
                        <Instagram className="w-6 h-6 text-nutrition-green" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">Localização</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for a map - in a real implementation, you'd include a Google Maps or similar component */}
              <div className="w-full h-full flex items-center justify-center bg-nutrition-light-blue/20">
                <p className="text-gray-600 text-lg font-medium">Mapa Interativo</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
