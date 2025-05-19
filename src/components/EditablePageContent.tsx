
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoading, setImageLoading] = useState(!!initialContent.imageUrl);

  // Pré-carrega a imagem quando o componente for montado
  useEffect(() => {
    if (content.imageUrl) {
      const img = new Image();
      img.src = content.imageUrl;
      setImageLoading(true);
      
      img.onload = () => {
        setImageLoaded(true);
        setImageLoading(false);
      };
      
      img.onerror = () => {
        console.error('Erro ao carregar imagem:', content.imageUrl);
        setImageLoading(false);
      };
    }
  }, [content.imageUrl]);

  const handleContentChange = (newContent: typeof content) => {
    setContent(newContent);
    
    // Reinicia o estado de carregamento se a imagem mudar
    if (newContent.imageUrl !== content.imageUrl) {
      setImageLoaded(false);
      setImageLoading(!!newContent.imageUrl);
    }
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
            {imageLoading && !imageLoaded ? (
              <Skeleton className="rounded-lg w-full h-[400px]" />
            ) : (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="rounded-lg max-h-[400px] object-contain" 
                style={{ opacity: imageLoaded ? 1 : 0 }}
                onLoad={() => setImageLoaded(true)}
              />
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
