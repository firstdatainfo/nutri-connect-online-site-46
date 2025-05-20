
import React from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [{
  quote: "A Lidiane transformou completamente minha relação com a alimentação. Não apenas perdi peso, mas também ganhei energia e confiança.",
  author: "Maria Silva",
  role: "Cliente - Gerenciamento de Peso",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
}, {
  quote: "A abordagem personalizada para minhas necessidades nutricionais me ajudou a gerenciar minha diabetes de uma forma que eu nunca pensei ser possível.",
  author: "Carlos Santos",
  role: "Cliente - Gerenciamento de Saúde",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
}, {
  quote: "Como atleta, eu precisava de orientação nutricional específica. A Lidiane forneceu exatamente o que eu precisava para melhorar meu desempenho.",
  author: "Ana Martins",
  role: "Cliente - Nutrição Esportiva",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80"
}];

const TestimonialsSection = () => {
  return (
    <section className="py-2 md:py-4 bg-white w-full">
      <div className="container mx-auto px-2">
        <div className="text-center mb-2">
          <h2 className="text-lg md:text-xl font-bold mb-0 md:mb-1">Histórias de Sucesso</h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
            Depoimentos de clientes que transformaram sua saúde através dos nossos programas de nutrição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
