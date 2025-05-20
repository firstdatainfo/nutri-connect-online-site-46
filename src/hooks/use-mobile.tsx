
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Verificação inicial
    handleResize();
    
    // Configurar listener de redimensionamento
    window.addEventListener("resize", handleResize);
    
    // Limpar listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
