
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-12 bg-nutrition-green text-white w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Conheça nossas principais ferramentas</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Pronto para transformar sua nutrição? Agende uma consulta hoje.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-nutrition-green">
            <Link to="/consultation">Agendar Consulta</Link>
          </Button>
          <Button asChild size="lg" className="bg-transparent text-white border border-white hover:bg-white/10">
            <Link to="/community">Entre para Comunidade</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
