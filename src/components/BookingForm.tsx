
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Calendar as CalendarIcon, Mail, MessageCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Configurações para envio de mensagens
const CONTACT_CONFIG = {
  whatsappNumber: "5511999999999", // Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
  emailAddress: "contato@nutrivida.com"
};

const consultationTypes = [
  { value: "initial", label: "Consulta Inicial (60 min)" },
  { value: "followup", label: "Sessão de Acompanhamento (30 min)" },
  { value: "plan", label: "Planejamento Alimentar Personalizado (45 min)" },
  { value: "coaching", label: "Coaching de Saúde (60 min)" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00"
];

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [type, setType] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendToWhatsApp, setSendToWhatsApp] = useState(true);
  const [sendToEmail, setSendToEmail] = useState(true);
  const [emailPreviewOpen, setEmailPreviewOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para obter o tipo de consulta em português baseado no valor
  const getTipoConsulta = (tipo: string): string => {
    const consulta = consultationTypes.find(c => c.value === tipo);
    return consulta ? consulta.label : "";
  };

  const formatEmailContent = () => {
    const formattedDate = date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: pt }) : "";
    const consultationType = getTipoConsulta(type);
    
    return {
      subject: `Agendamento de ${consultationType}`,
      body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #4caf50; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">Solicitação de Agendamento</h2>
        
        <p>Olá,</p>
        <p>Gostaria de agendar uma consulta com os seguintes detalhes:</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.phone}</p>
          <p><strong>Tipo de Consulta:</strong> ${consultationType}</p>
          <p><strong>Data:</strong> ${formattedDate}</p>
          <p><strong>Horário:</strong> ${time}</p>
          ${formData.notes ? `<p><strong>Observações:</strong> ${formData.notes}</p>` : ''}
        </div>
        
        <p>Aguardo confirmação da disponibilidade.</p>
        <p>Atenciosamente,<br>${formData.name}</p>
      </div>
      `,
      plainText: `Olá, gostaria de agendar uma consulta:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo: ${consultationType}
Data: ${formattedDate}
Horário: ${time}
${formData.notes ? `Observações: ${formData.notes}` : ''}`
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formatar a mensagem para WhatsApp
    const { plainText, subject, body } = formatEmailContent();
    
    if (sendToWhatsApp) {
      const encodedMessage = encodeURIComponent(plainText);
      const whatsappLink = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');
    }

    if (sendToEmail) {
      // Se o usuário quiser visualizar o email antes, mostra o preview
      setEmailPreviewOpen(true);
    } else {
      // Envio direto sem preview
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(plainText); // Usa o texto plano para compatibilidade
      const mailtoLink = `mailto:${CONTACT_CONFIG.emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
      window.open(mailtoLink, '_blank');
      
      finishSubmission();
    }
  };

  const sendEmailAfterPreview = () => {
    const { subject, plainText } = formatEmailContent();
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(plainText); // Usa o texto plano para compatibilidade
    const mailtoLink = `mailto:${CONTACT_CONFIG.emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
    window.open(mailtoLink, '_blank');
    
    setEmailPreviewOpen(false);
    finishSubmission();
  };

  const finishSubmission = () => {
    // Simulação de uma chamada API (mantém a funcionalidade original)
    setTimeout(() => {
      setIsSubmitting(false);
      const consultationType = getTipoConsulta(type);
      const formattedDate = date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: pt }) : "";
      
      toast({
        title: "Agendamento Enviado",
        description: `Sua solicitação de ${consultationType} para ${formattedDate} às ${time} foi enviada.`,
      });
      
      // Reset form
      setDate(undefined);
      setType("");
      setTime("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        notes: ""
      });
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="transition-none"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="transition-none"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Telefone</Label>
            <InputMask
              mask="(99) 99999-9999"
              value={formData.phone}
              onChange={handleInputChange}
            >
              {(inputProps: any) => (
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  required
                  className="transition-none"
                  {...inputProps}
                />
              )}
            </InputMask>
          </div>
        </div>

        <div className="space-y-1">
          <Label>Tipo de Consulta</Label>
          <Select value={type} onValueChange={setType} required>
            <SelectTrigger className="transition-none">
              <SelectValue placeholder="Selecione o tipo de consulta" />
            </SelectTrigger>
            <SelectContent>
              {consultationTypes.map((consultationType) => (
                <SelectItem key={consultationType.value} value={consultationType.value}>
                  {consultationType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label>Data Preferida</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal transition-none",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: pt }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  locale={pt}
                  className="pointer-events-auto"
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1">
            <Label>Horário Preferido</Label>
            <Select value={time} onValueChange={setTime} required>
              <SelectTrigger className="transition-none">
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="notes">Observações Adicionais</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Qualquer informação adicional ou requisitos especiais"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            className="transition-none"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="sendToWhatsApp" 
              checked={sendToWhatsApp} 
              onCheckedChange={(checked) => setSendToWhatsApp(checked as boolean)}
            />
            <Label 
              htmlFor="sendToWhatsApp" 
              className="text-sm font-medium leading-none cursor-pointer flex items-center"
            >
              <MessageCircle className="mr-1 h-4 w-4" /> 
              Enviar para WhatsApp
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="sendToEmail" 
              checked={sendToEmail} 
              onCheckedChange={(checked) => setSendToEmail(checked as boolean)}
            />
            <Label 
              htmlFor="sendToEmail" 
              className="text-sm font-medium leading-none cursor-pointer flex items-center"
            >
              <Mail className="mr-1 h-4 w-4" /> 
              Enviar para Email
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-nutrition-green hover:bg-nutrition-teal transition-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : "Agendar Consulta"}
        </Button>
      </form>

      <Dialog open={emailPreviewOpen} onOpenChange={setEmailPreviewOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Visualização do Email</DialogTitle>
          </DialogHeader>
          
          <div className="mt-2 border rounded-md p-4 max-h-[60vh] overflow-auto">
            <div dangerouslySetInnerHTML={{ __html: formatEmailContent().body }} />
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setEmailPreviewOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={sendEmailAfterPreview} className="bg-nutrition-green hover:bg-nutrition-teal">
              Enviar Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingForm;
