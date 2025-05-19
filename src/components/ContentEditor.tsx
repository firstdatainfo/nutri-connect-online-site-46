
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputMask from 'react-input-mask';
import { 
  Image, 
  Text, 
  Bold, 
  Italic, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  FileImage,
  Link,
  List,
  ListOrdered,
  Edit
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";

// Esquema de validação para o formulário
const formSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
  imageUrl: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email("Email inválido").optional(),
  date: z.string().optional(),
});

type ContentEditorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pageType: string;
  onSave: (data: z.infer<typeof formSchema>) => void;
  initialData?: z.infer<typeof formSchema>;
};

const ContentEditor = ({ open, onOpenChange, pageType, onSave, initialData }: ContentEditorProps) => {
  const [activeTab, setActiveTab] = useState<"text" | "format" | "media" | "contact">("text");
  const [previewImage, setPreviewImage] = useState<string | null>(initialData?.imageUrl || null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
      imageUrl: "",
      phoneNumber: "",
      email: "",
      date: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSave(data);
    onOpenChange(false);
    form.reset();
    
    toast({
      title: "Conteúdo salvo",
      description: `O conteúdo da página ${pageType} foi atualizado com sucesso.`,
      duration: 3000,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      form.setValue("imageUrl", imageUrl);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Editar Conteúdo da Página {pageType}</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-2 border-b mb-4">
          <Button
            variant={activeTab === "text" ? "default" : "ghost"}
            onClick={() => setActiveTab("text")}
            size="sm"
            className="gap-1"
          >
            <Text size={16} /> Texto
          </Button>
          <Button
            variant={activeTab === "format" ? "default" : "ghost"}
            onClick={() => setActiveTab("format")}
            size="sm"
            className="gap-1"
          >
            <Bold size={16} /> Formatação
          </Button>
          <Button
            variant={activeTab === "media" ? "default" : "ghost"}
            onClick={() => setActiveTab("media")}
            size="sm"
            className="gap-1"
          >
            <Image size={16} /> Mídia
          </Button>
          <Button
            variant={activeTab === "contact" ? "default" : "ghost"}
            onClick={() => setActiveTab("contact")}
            size="sm"
            className="gap-1"
          >
            <Link size={16} /> Contato
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {activeTab === "text" && (
              <>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o título" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Conteúdo</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite o conteúdo"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {activeTab === "format" && (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">Formatação de Texto</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="icon">
                      <Bold size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Italic size={16} />
                    </Button>
                    <div className="border-r h-8 mx-1"></div>
                    <Button variant="outline" size="icon">
                      <AlignLeft size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <AlignCenter size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <AlignRight size={16} />
                    </Button>
                    <div className="border-r h-8 mx-1"></div>
                    <Button variant="outline" size="icon">
                      <List size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ListOrdered size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL da Imagem</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <Input placeholder="Cole a URL da imagem" {...field} />
                          <div className="flex items-center justify-center border-2 border-dashed rounded-md p-6">
                            <div className="text-center">
                              <FileImage className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="mt-2">
                                <Input
                                  id="image-upload"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleImageUpload}
                                />
                                <label htmlFor="image-upload">
                                  <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                                    <span>Escolher Arquivo</span>
                                  </Button>
                                </label>
                              </div>
                              <p className="mt-2 text-xs text-gray-500">
                                PNG, JPG ou WEBP até 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {previewImage && (
                  <div className="border rounded-md p-2">
                    <p className="text-sm font-medium mb-2">Prévia:</p>
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="max-h-[200px] mx-auto rounded-md object-contain" 
                    />
                  </div>
                )}
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <InputMask 
                            mask="(99) 99999-9999" 
                            value={field.value || ''} 
                            onChange={field.onChange}
                          >
                            {(inputProps: any) => 
                              <Input 
                                {...inputProps} 
                                placeholder="(99) 99999-9999" 
                                type="tel"
                              />
                            }
                          </InputMask>
                        </div>
                      </FormControl>
                      <FormDescription>Telefone para contato</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@exemplo.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data</FormLabel>
                      <FormControl>
                        <InputMask 
                          mask="99/99/9999" 
                          value={field.value || ''} 
                          onChange={field.onChange}
                        >
                          {(inputProps: any) => 
                            <Input 
                              {...inputProps} 
                              placeholder="DD/MM/AAAA" 
                              type="text"
                            />
                          }
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContentEditor;
