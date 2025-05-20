
import { useState, useEffect } from "react";

// Breakpoints mais precisos para melhor responsividade
const MOBILE_BREAKPOINT = 640; // sm
const TABLET_BREAKPOINT = 768; // md
const DESKTOP_BREAKPOINT = 1024; // lg

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
    
    // Usar event listener para detecção de redimensionamento
    window.addEventListener("resize", handleResize);
    
    // Limpar event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState<boolean>(
    typeof window !== "undefined" 
      ? window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < DESKTOP_BREAKPOINT 
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setIsTablet(
        window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < DESKTOP_BREAKPOINT
      );
    };
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTablet;
}

export function useResponsiveValue<T>(
  mobileValue: T,
  tabletValue: T,
  desktopValue: T
): T {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  
  if (isMobile) return mobileValue;
  if (isTablet) return tabletValue;
  return desktopValue;
}
