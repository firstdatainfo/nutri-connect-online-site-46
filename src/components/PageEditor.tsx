
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import ContentEditor from "./ContentEditor";
import { useToast } from "@/components/ui/use-toast";

interface PageContent {
  title: string;
  content: string;
  imageUrl?: string;
  phoneNumber?: string;
  email?: string;
  date?: string;
}

interface PageEditorProps {
  pageType: string;
  initialContent: PageContent;
  onContentChange: (content: PageContent) => void;
  isAdmin?: boolean;
}

const PAGE_CONTENT_KEY = "page_content_";

const PageEditor: React.FC<PageEditorProps> = ({
  pageType,
  initialContent,
  onContentChange,
  isAdmin = false // Por padrão, não é admin
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [pageContent, setPageContent] = useState<PageContent>(initialContent);
  const { toast } = useToast();

  // Carrega o conteúdo salvo do localStorage ao iniciar
  useEffect(() => {
    const savedContent = localStorage.getItem(`${PAGE_CONTENT_KEY}${pageType}`);
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setPageContent(parsedContent);
        onContentChange(parsedContent);
      } catch (error) {
        console.error("Erro ao carregar conteúdo da página:", error);
      }
    } else {
      setPageContent(initialContent);
    }
  }, [pageType, initialContent, onContentChange]);

  const handleSaveContent = (data: PageContent) => {
    setPageContent(data);
    
    // Salva no localStorage para persistência
    localStorage.setItem(
      `${PAGE_CONTENT_KEY}${pageType}`,
      JSON.stringify(data)
    );
    
    onContentChange(data);
    
    toast({
      title: "Conteúdo salvo",
      description: `O conteúdo da página ${pageType} foi salvo com sucesso.`,
      duration: 3000,
    });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => setIsEditing(true)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <Edit className="h-4 w-4" />
      </Button>

      <ContentEditor
        open={isEditing}
        onOpenChange={setIsEditing}
        pageType={pageType}
        initialData={pageContent}
        onSave={handleSaveContent}
      />
    </>
  );
};

export default PageEditor;
