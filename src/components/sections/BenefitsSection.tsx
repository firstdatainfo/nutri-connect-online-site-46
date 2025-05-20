
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  return (
    <section className="py-2 md:py-4 bg-nutrition-light-blue/20 w-full">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Sobre Lidiane Dos Reis" 
              className="rounded-lg shadow-lg h-full w-full object-cover max-h-[280px]" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-lg md:text-xl font-bold mb-1">Por que escolher a Lidiane?</h2>
            <p className="text-xs md:text-sm text-gray-700 mb-2">
              Como nutricionista certificada, estou dedicada a fornecer orientação personalizada para ajudá-lo a alcançar seus objetivos de saúde.
            </p>
            <div className="space-y-1">
              <div className="flex items-start">
                <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold">Abordagem Personalizada</h3>
                  <p className="text-xs text-gray-600">Planos personalizados que se adequam ao seu estilo de vida e objetivos específicos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold">Orientação Especializada</h3>
                  <p className="text-xs text-gray-600">Nutricionista certificada com experiência em diversas especialidades.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-nutrition-green/10 rounded-full p-1 mr-1.5 mt-0.5">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-nutrition-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-semibold">Suporte Contínuo</h3>
                  <p className="text-xs text-gray-600">Orientação contínua e ajustes para garantir seu progresso na jornada de saúde.</p>
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-3">
              <Button asChild className="bg-nutrition-green hover:bg-nutrition-teal text-xs h-7 py-0">
                <Link to="/about">Saiba Mais Sobre Mim</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
