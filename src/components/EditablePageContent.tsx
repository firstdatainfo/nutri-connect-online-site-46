
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

  // Otimização do carregamento de imagens
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        '/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png',
        '/lovable-uploads/19cefa6f-5a74-4dc2-9425-7df166d07de4.png',
        '/lovable-uploads/7f21824b-576f-4ec6-8c01-344ca77b5a02.png',
        '/lovable-uploads/8f1a6fd3-0913-42f9-afcb-77778ed69afb.png',
        '/lovable-uploads/7a5efdad-1164-4363-aa4a-00030cdd18eb.png',
        '/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png'
      ];
      
      if (content.imageUrl) {
        imageUrls.unshift(content.imageUrl);
      }
      
      Promise.all(
        imageUrls.map(src => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
            if (img.complete) resolve(true);
          });
        })
      ).then(() => {
        setImagesLoaded(true);
      });
      
      // Fallback para garantir que as imagens sejam exibidas após um curto período
      setTimeout(() => setImagesLoaded(true), 200);
    };
    
    preloadImages();
  }, [content.imageUrl]);

  const handleContentChange = (newContent: typeof content) => {
    setContent(newContent);
  };

  return (
    <div className="relative w-full">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{content.title}</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-700">{content.content}</p>
        </div>
        
        {content.imageUrl && (
          <div className="mt-4">
            {imagesLoaded ? (
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="rounded-lg max-h-80 object-contain w-full" 
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            ) : (
              <Skeleton className="w-full h-64 bg-gray-200 rounded-lg" />
            )}
          </div>
        )}
        
        {(content.phoneNumber || content.email || content.date) && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            {content.phoneNumber && (
              <p className="mb-2"><strong>Telefone:</strong> {content.phoneNumber}</p>
            )}
            {content.email && (
              <p className="mb-2"><strong>Email:</strong> {content.email}</p>
            )}
            {content.date && (
              <p><strong>Data:</strong> {content.date}</p>
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
