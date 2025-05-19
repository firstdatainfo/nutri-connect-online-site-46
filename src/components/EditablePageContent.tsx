
import React, { useState } from 'react';
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
