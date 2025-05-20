
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-3 md:py-4 bg-gradient-to-r from-nutrition-green to-nutrition-teal text-white w-full">
      <div className="container mx-auto px-2 text-center">
        <h2 className="text-lg md:text-xl font-bold mb-1">Pronto para Transformar sua Saúde?</h2>
        <p className="text-xs md:text-sm mb-2 max-w-2xl mx-auto">
          Dê o primeiro passo rumo a uma vida mais saudável. Agende uma consulta comigo hoje.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <Button asChild size="sm" variant="secondary" className="text-nutrition-green text-xs h-7 py-0">
            <Link to="/consultation">Agendar Consulta</Link>
          </Button>
          <Button asChild size="sm" className="bg-transparent text-white border border-white hover:bg-white/10 text-xs h-7 py-0">
            <Link to="/community">Junte-se à Nossa Comunidade</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
