
import React from "react";
import Hero from "@/components/Hero";

const HeroSection = () => {
  return (
    <Hero 
      title="Lidiane Dos Reis" 
      subtitle="Nutricionista Clínica Integrativa, Esportiva, Estética e Genômica" 
      ctaText="Agende uma Consulta" 
      ctaLink="/consultation" 
      profileImage="/lovable-uploads/eb101949-77ca-4a72-80ff-91e3190e410a.png"
      showWave={false} 
      reducedSpacing={true} 
    />
  );
};

export default HeroSection;
