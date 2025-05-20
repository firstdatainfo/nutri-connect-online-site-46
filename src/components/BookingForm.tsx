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
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";
import emailjs from '@emailjs/browser';

// Configurações para envio de mensagens
const CONTACT_CONFIG = {
  whatsappNumber: "5566992456034",
  // Formato: código do país + DDD + número (sem espaços ou caracteres especiais)
  emailAddress: "lidiane_dosreis@outlook.com",
  emailServiceId: "service_u2y1bq7",
  emailTemplateId: "template_x2l793i",
  emailPublicKey: "VMppyCObQswdims-9"
};

// Inicializar EmailJS
emailjs.init(CONTACT_CONFIG.emailPublicKey);

const consultationTypes = [{
  value: "initial",
  label: "Consulta Inicial (60 min)"
}, {
  value: "followup",
  label: "Sessão de Acompanhamento (30 min)"
}, {
  value: "plan",
  label: "Planejamento Alimentar Personalizado (45 min)"
}, {
  value: "coaching",
  label: "Coaching de Saúde (60 min)"
}];
const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [type, setType] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    age: "",
    birthDate: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendToWhatsApp, setSendToWhatsApp] = useState(true);
  const [sendToEmail, setSendToEmail] = useState(true);
  const {
    toast
  } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para obter o tipo de consulta em português baseado no valor
  const getTipoConsulta = (tipo: string): string => {
    const consulta = consultationTypes.find(c => c.value === tipo);
    return consulta ? consulta.label : "";
  };

  const formatBirthDate = (birthDateString: string) => {
    if (!birthDateString) return "";
    try {
      const [year, month, day] = birthDateString.split("-");
      if (year && month && day) {
        return format(new Date(parseInt(year), parseInt(month) -1, parseInt(day)), "dd/MM/yyyy", { locale: pt });
      }
    } catch (e) {
      console.error("Error formatting birth date", e);
    }
    return birthDateString; // Retorna a string original se o formato for inválido
  }

  const formatEmailContent = () => {
    const formattedDate = date ? format(date, "d 'de' MMMM 'de' yyyy", {
      locale: pt
    }) : "";
    const consultationType = getTipoConsulta(type);
    const formattedBirthDate = formatBirthDate(formData.birthDate);

    return {
      subject: `Agendamento de ${consultationType}`,
      body: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #4caf50; border-bottom: 2px solid #4caf50; padding-bottom: 10px;">Solicitação de Agendamento</h2>
        
        <p>Olá Lidiane,</p>
        <p>Recebemos uma nova solicitação de agendamento com os seguintes detalhes:</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Nome:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefone:</strong> ${formData.phone}</p>
          <p><strong>CPF:</strong> ${formData.cpf}</p>
          <p><strong>Idade:</strong> ${formData.age}</p>
          <p><strong>Data de Nascimento:</strong> ${formattedBirthDate}</p>
          <p><strong>Tipo de Consulta:</strong> ${consultationType}</p>
          <p><strong>Data:</strong> ${formattedDate}</p>
          <p><strong>Horário:</strong> ${time}</p>
          ${formData.notes ? `<p><strong>Observações:</strong> ${formData.notes}</p>` : ''}
        </div>
        
        <p>Por favor, confirme este agendamento quando possível.</p>
        <p>Atenciosamente,<br>Sistema de Agendamento</p>
      </div>
      `,
      plainText: `Olá Lidiane, gostaria de agendar uma consulta:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
CPF: ${formData.cpf}
Idade: ${formData.age}
Data de Nascimento: ${formattedBirthDate}
Tipo: ${consultationType}
Data: ${formattedDate}
Horário: ${time}
${formData.notes ? `Observações: ${formData.notes}` : ''}`
    };
  };

  const sendEmailViaEmailJS = async () => {
    try {
      const {
        subject
      } = formatEmailContent();
      const formattedDate = date ? format(date, "d 'de' MMMM 'de' yyyy", {
        locale: pt
      }) : "";
      const consultationType = getTipoConsulta(type);
      const formattedBirthDate = formatBirthDate(formData.birthDate);

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        cpf: formData.cpf,
        age: formData.age,
        birth_date: formattedBirthDate, // Certifique-se que o nome da variável aqui (birth_date) corresponde ao que você usará no template EmailJS, ex: {{birth_date}}
        subject: subject,
        to_email: CONTACT_CONFIG.emailAddress,
        consultation_type: consultationType,
        date: formattedDate,
        time: time,
        notes: formData.notes || "Nenhuma observação",
        message: `Tipo: ${consultationType}, Data: ${formattedDate}, Hora: ${time}` // Pode ser ajustado ou removido se redundante com os outros campos
      };
      console.log("Enviando email com os parâmetros:", templateParams);

      // Usando o método send com a versão mais recente do EmailJS
      await emailjs.send(CONTACT_CONFIG.emailServiceId, CONTACT_CONFIG.emailTemplateId, templateParams);
      console.log("Email enviado com sucesso!");
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Formatar a mensagem para WhatsApp
      const {
        plainText
      } = formatEmailContent();
      let emailSuccess = false;

      // Enviar para email via EmailJS se selecionado
      if (sendToEmail) {
        emailSuccess = await sendEmailViaEmailJS();
        if (!emailSuccess) {
          toast({
            title: "Alerta",
            description: "Não foi possível enviar o email. Verifique os dados ou tente novamente mais tarde.", 
            variant: "destructive"
          });
        } else {
          toast({
            title: "Sucesso",
            description: "Email enviado com sucesso para " + CONTACT_CONFIG.emailAddress,
            variant: "default"
          });
        }
      }

      // Enviar para WhatsApp se selecionado
      if (sendToWhatsApp) {
        const encodedMessage = encodeURIComponent(plainText);
        window.location.href = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodedMessage}`;
      }

      // Finalizar submissão apenas se não redirecionar para WhatsApp
      // Se WhatsApp foi selecionado, a página será redirecionada
      if (!sendToWhatsApp) {
        finishSubmission(emailSuccess);
      } else {
        setIsSubmitting(false);
      }
      
    } catch (error) {
      console.error("Erro durante o envio:", error);
      setIsSubmitting(false);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const finishSubmission = (emailSuccess = true) => {
    // Simulação de uma chamada API (mantém a funcionalidade original)
    setTimeout(() => {
      setIsSubmitting(false);
      const consultationType = getTipoConsulta(type);
      const formattedDate = date ? format(date, "d 'de' MMMM 'de' yyyy", {
        locale: pt
      }) : "";
      
      // Mostrar toast de sucesso geral, mesmo que o email tenha falhado,
      // mas indicando a falha do email se for o caso.
      // A notificação específica de falha do email já foi mostrada no handleSubmit.
      if (emailSuccess || sendToWhatsApp) { // Se email foi sucesso OU whatsapp foi aberto
        toast({
          title: "Agendamento Enviado",
          description: `Sua solicitação de ${consultationType} para ${formattedDate} às ${time} foi processada. ${!emailSuccess && sendToEmail ? 'O envio do email falhou.' : ''}`,
          variant: emailSuccess || !sendToEmail ? "default" : "destructive" // default se email sucesso ou não selecionado, destructive se falhou e estava selecionado
        });
      }


      // Reset form only if email was successful or not attempted
      if (emailSuccess || !sendToEmail) {
          setDate(undefined);
          setType("");
          setTime("");
          setFormData({
            name: "",
            email: "",
            phone: "",
            cpf: "",
            age: "",
            birthDate: "",
            notes: ""
          });
      }
    }, 1500);
  };

  return <>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Nome Completo</Label>
          <Input id="name" name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleInputChange} required className="transition-none" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleInputChange} required className="transition-none" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Telefone</Label>
            <InputMask mask="(99) 99999-9999" value={formData.phone} onChange={handleInputChange}>
              {(inputProps: any) => <Input id="phone" name="phone" placeholder="(00) 00000-0000" required className="transition-none" {...inputProps} />}
            </InputMask>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label htmlFor="cpf">CPF</Label>
            <InputMask mask="999.999.999-99" value={formData.cpf} onChange={handleInputChange}>
              {(inputProps: any) => <Input id="cpf" name="cpf" placeholder="000.000.000-00" required className="transition-none" {...inputProps} />}
            </InputMask>
          </div>
          <div className="space-y-1">
            <Label htmlFor="age">Idade</Label>
            <Input id="age" name="age" type="number" placeholder="Sua idade" value={formData.age} onChange={handleInputChange} required className="transition-none" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="birthDate">Data de Nascimento</Label>
            <Input id="birthDate" name="birthDate" type="date" value={formData.birthDate} onChange={handleInputChange} required className="transition-none" />
          </div>
        </div>

        <div className="space-y-1">
          <Label>Tipo de Consulta</Label>
          <Select value={type} onValueChange={setType} required>
            <SelectTrigger className="transition-none">
              <SelectValue placeholder="Selecione o tipo de consulta" />
            </SelectTrigger>
            <SelectContent>
              {consultationTypes.map(consultationType => <SelectItem key={consultationType.value} value={consultationType.value}>
                  {consultationType.label}
                </SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label>Data Preferida</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal transition-none", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "d 'de' MMMM 'de' yyyy", {
                  locale: pt
                }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={pt} className="pointer-events-auto" disabled={date => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 || date.getDay() === 6} />
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
                {timeSlots.map(slot => <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="notes">Observações Adicionais</Label>
          <Textarea id="notes" name="notes" placeholder="Qualquer informação adicional ou requisitos especiais" value={formData.notes} onChange={handleInputChange} rows={3} className="transition-none" />
        </div>
        
        <Button type="submit" className="w-full bg-nutrition-green hover:bg-nutrition-teal transition-none" disabled={isSubmitting}>
          {isSubmitting ? <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </> : "Agendar Consulta"}
        </Button>
      </form>
    </>;
};
export default BookingForm;
