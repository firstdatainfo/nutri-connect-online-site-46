
import React from "react";
import Hero from "@/components/Hero";

const HeroSection = () => {
  return (
    <Hero 
      title="🌱 Nutrição com Ciência, Cuidado e Consciência" 
      subtitle="Na correria do dia a dia, é fácil esquecer que a saúde começa pelo que colocamos no prato. Aqui, acreditamos que alimentação saudável não é sobre restrições extremas ou dietas da moda — é sobre equilíbrio, bem-estar e respeito ao seu corpo." 
      ctaText="Começar Agora" 
      ctaLink="/consultation" 
      profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
      showWave={false} 
      reducedSpacing={true} 
    />
  );
};

export default HeroSection;
