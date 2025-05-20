
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
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react";
import MapComponent from "@/components/Map";
import InputMask from 'react-input-mask';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada",
        description: "Recebemos sua mensagem e responderemos em breve."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
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
          reducedSpacing={true}
        />

        <section className="bg-white py-0 -mt-4 md:-mt-6">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Envie-nos uma Mensagem</h2>
                <p className="text-gray-600 mb-6">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="phone">Telefone</Label>
                      <InputMask 
                        mask="(99) 99999-9999" 
                        value={formData.phone} 
                        onChange={handleChange}
                      >
                        {(inputProps: any) => (
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder="(00) 00000-0000" 
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
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

                  <div className="space-y-1">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudá-lo?" value={formData.message} onChange={handleChange} rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-nutrition-green hover:bg-nutrition-teal transition-none" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="mt-8 lg:mt-0">
                <h2 className="text-2xl font-bold mb-4">Informações de Contato</h2>
                <p className="text-gray-600 mb-6">
                  Entre em contato diretamente ou use o formulário à esquerda. Estamos sempre à disposição para ajudá-lo.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-nutrition-light-green/20 p-2 rounded-full">
                      <Phone size={20} className="text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Telefone</h3>
                      <p className="text-gray-700">55 66 99245-6034</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-nutrition-light-green/20 p-2 rounded-full">
                      <Mail size={20} className="text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-700">lidiane_dosreis@outlook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-nutrition-light-green/20 p-2 rounded-full">
                      <Instagram size={20} className="text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Instagram</h3>
                      <p className="text-gray-700">@lidianedosreisnutri</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-nutrition-light-green/20 p-2 rounded-full">
                      <MapPin size={20} className="text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Endereço</h3>
                      <p className="text-gray-700">Cuiabá, MT - Brasil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-nutrition-light-green/20 p-2 rounded-full">
                      <Clock size={20} className="text-nutrition-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Horário de Atendimento</h3>
                      <p className="text-gray-700">Segunda - Sexta: 8:00 - 18:00</p>
                    </div>
                  </div>
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

export default Contact;
