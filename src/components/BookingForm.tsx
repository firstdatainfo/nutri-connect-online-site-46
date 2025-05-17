
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { pt } from "date-fns/locale"; // Importando o locale pt para datas
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Agendamento Confirmado",
        description: `Sua consulta de ${getTipoConsulta(type)} foi agendada para ${date ? format(date, "d 'de' MMMM 'de' yyyy", { locale: pt }) : ""} às ${time}.`,
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

  // Função para obter o tipo de consulta em português baseado no valor
  const getTipoConsulta = (tipo: string): string => {
    const consulta = consultationTypes.find(c => c.value === tipo);
    return consulta ? consulta.label : "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Seu número de telefone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Tipo de Consulta</Label>
        <Select value={type} onValueChange={setType} required>
          <SelectTrigger>
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
        <div className="space-y-1.5">
          <Label>Data Preferida</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
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

        <div className="space-y-1.5">
          <Label>Horário Preferido</Label>
          <Select value={time} onValueChange={setTime} required>
            <SelectTrigger>
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

      <div className="space-y-1.5">
        <Label htmlFor="notes">Observações Adicionais</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Qualquer informação adicional ou requisitos especiais"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-nutrition-green hover:bg-nutrition-teal"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Agendando..." : "Agendar Consulta"}
      </Button>
    </form>
  );
};

export default BookingForm;
