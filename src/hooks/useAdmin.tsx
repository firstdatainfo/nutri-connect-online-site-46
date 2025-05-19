
import { useState, useEffect } from 'react';

// Em uma aplicação real, isso viria de um sistema de autenticação
// Por enquanto, usaremos localStorage para simular
const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  
  useEffect(() => {
    // Verifica se o usuário está logado como admin
    const checkAdmin = () => {
      const adminStatus = localStorage.getItem('isAdmin');
      setIsAdmin(adminStatus === 'true');
    };
    
    checkAdmin();
    
    // Permite alternar o modo admin pressionando Alt+A
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'a') {
        const newStatus = !isAdmin;
        localStorage.setItem('isAdmin', newStatus.toString());
        setIsAdmin(newStatus);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Pré-carrega imagens comuns do site para melhor experiência
    preloadCommonImages();
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAdmin]);
  
  // Função para pré-carregar imagens comuns do site
  const preloadCommonImages = () => {
    const commonImages = [
      '/lovable-uploads/ca42dc66-026e-45dc-818c-96ec602d6825.png',
      '/lovable-uploads/19cefa6f-5a74-4dc2-9425-7df166d07de4.png',
      '/lovable-uploads/7f21824b-576f-4ec6-8c01-344ca77b5a02.png',
      '/lovable-uploads/8f1a6fd3-0913-42f9-afcb-77778ed69afb.png'
    ];
    
    commonImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
  const login = () => {
    localStorage.setItem('isAdmin', 'true');
    setIsAdmin(true);
  };
  
  const logout = () => {
    localStorage.setItem('isAdmin', 'false');
    setIsAdmin(false);
  };

  return { isAdmin, login, logout };
};

export default useAdmin;
