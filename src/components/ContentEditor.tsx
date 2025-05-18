
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Image, Text, Bold, Italic, AlignLeft, AlignCenter, AlignRight, FileImage } from "lucide-react";

// Esquema de validação para o formulário
const formSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
  imageUrl: z.string().optional(),
});

type ContentEditorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pageType: string;
  onSave: (data: z.infer<typeof formSchema>) => void;
  initialData?: z.infer<typeof formSchema>;
};

const ContentEditor = ({ open, onOpenChange, pageType, onSave, initialData }: ContentEditorProps) => {
  const [activeTab, setActiveTab] = useState<"text" | "format" | "media">("text");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
      imageUrl: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSave(data);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
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
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Bold size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Italic size={16} />
                    </Button>
                    <div className="border-r mx-2"></div>
                    <Button variant="outline" size="icon">
                      <AlignLeft size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <AlignCenter size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <AlignRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "media" && (
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
                              <Button variant="outline" size="sm">
                                Escolher Arquivo
                              </Button>
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
