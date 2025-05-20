
import React from "react";
import Hero from "@/components/Hero";

const HeroSection = () => {
  return (
    <Hero 
      title="Nutrição para otimizar seus atendimentos" 
      subtitle="O sistema facilita a sua rotina, otimiza seu tempo e ajuda a fidelizar seus pacientes. Além de gerenciar seu consultório de maneira eficiente, você tem acesso a uma plataforma completa!" 
      ctaText="Começar Agora" 
      ctaLink="/consultation" 
      profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
      showWave={false} 
      reducedSpacing={true} 
    />
  );
};

export default HeroSection;
