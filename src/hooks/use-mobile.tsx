
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

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= DESKTOP_BREAKPOINT : true
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
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

// Hook para obter o tamanho da tela atual para ajustes mais precisos
export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
