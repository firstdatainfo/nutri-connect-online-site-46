
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
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAdmin]);
  
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
