
import React, { useState, useEffect } from 'react';
import useAdmin from '@/hooks/useAdmin';
import PageEditor from './PageEditor';

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
      
      // Pré-carrega todas as imagens de uma vez com prioridade alta
      commonImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
        
        // Também carrega em um objeto de imagem para garantir o cache
        const img = new Image();
        img.src = src;
      });
      
      // Se o conteúdo atual tiver uma imagem, também pré-carregá-la com prioridade alta
      if (content.imageUrl) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = content.imageUrl;
        document.head.appendChild(link);
        
        const img = new Image();
        img.src = content.imageUrl;
      }
    };
    
    // Executa o pré-carregamento imediatamente com prioridade máxima
    setTimeout(preloadImages, 0);
  }, []);

  const handleContentChange = (newContent: typeof content) => {
    setContent(newContent);
  };

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        
        <div className="prose max-w-none">
          {/* Renderiza o conteúdo como HTML se necessário */}
          <p>{content.content}</p>
        </div>
        
        {content.imageUrl && (
          <div className="mt-6">
            <img 
              src={content.imageUrl} 
              alt={content.title} 
              className="rounded-lg max-h-[400px] object-contain" 
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
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
