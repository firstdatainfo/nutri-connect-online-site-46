
import React, { useState, useEffect } from 'react';
import useAdmin from '@/hooks/useAdmin';
import PageEditor from './PageEditor';
import { Skeleton } from '@/components/ui/skeleton';

interface EditablePageContentProps {
  pageType: string;
  initialContent: {
    title: string;
    content: string;
    imageUrl?: string;
    phoneNumber?: string;
    email?: string;
    date?: string;
  };
}

const EditablePageContent: React.FC<EditablePageContentProps> = ({ pageType, initialContent }) => {
  const { isAdmin } = useAdmin();
  const [content, setContent] = useState(initialContent);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Pré-carrega todas as imagens do site imediatamente ao inicializar a aplicação
  useEffect(() => {
    // Função para pré-carregar imagens comuns do site
    const preloadImages = () => {
      const commonImages = [
        '/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png',
        '/lovable-uploads/19cefa6f-5a74-4dc2-9425-7df166d07de4.png',
        '/lovable-uploads/7f21824b-576f-4ec6-8c01-344ca77b5a02.png',
        '/lovable-uploads/8f1a6fd3-0913-42f9-afcb-77778ed69afb.png',
        '/lovable-uploads/7a5efdad-1164-4363-aa4a-00030cdd18eb.png',
        '/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png'
      ];
      
      let loadedCount = 0;
      const totalImages = commonImages.length + (content.imageUrl ? 1 : 0);
      
      // Função para marcar uma imagem como carregada
      const markImageLoaded = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          setImagesLoaded(true);
        }
      };
      
      // Pré-carrega todas as imagens uma a uma
      commonImages.forEach(src => {
        const img = new Image();
        img.onload = markImageLoaded;
        img.onerror = markImageLoaded; // Em caso de erro, também marcar como "carregado"
        img.src = src;
        
        // Se a imagem já estiver em cache, também marcar como carregada
        if (img.complete) markImageLoaded();
      });
      
      // Se o conteúdo atual tiver uma imagem, também pré-carregá-la com prioridade alta
      if (content.imageUrl) {
        const img = new Image();
        img.onload = markImageLoaded;
        img.onerror = markImageLoaded;
        img.src = content.imageUrl;
        
        // Se a imagem já estiver em cache, também marcar como carregada
        if (img.complete) markImageLoaded();
      }
      
      // Fallback para garantir que as imagens sejam exibidas após um curto período
      setTimeout(() => setImagesLoaded(true), 300);
    };
    
    // Executa o pré-carregamento imediatamente com prioridade máxima
    preloadImages();
  }, [content.imageUrl]);

  const handleContentChange = (newContent: typeof content) => {
    setContent(newContent);
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        
        <div className="prose max-w-none">
          <p>{content.content}</p>
        </div>
        
        {content.imageUrl && (
          <div className="mt-6">
            {imagesLoaded ? (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="rounded-lg max-h-[400px] object-contain" 
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            ) : (
              <Skeleton className="w-full h-64 bg-gray-200" />
            )}
          </div>
        )}
        
        {(content.phoneNumber || content.email || content.date) && (
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            {content.phoneNumber && (
              <p className="mb-2"><strong>Telefone:</strong> {content.phoneNumber}</p>
            )}
            {content.email && (
              <p className="mb-2"><strong>Email:</strong> {content.email}</p>
            )}
            {content.date && (
              <p className="mb-2"><strong>Data:</strong> {content.date}</p>
            )}
          </div>
        )}
      </div>
      
      <PageEditor
        pageType={pageType}
        initialContent={initialContent}
        onContentChange={handleContentChange}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default EditablePageContent;
