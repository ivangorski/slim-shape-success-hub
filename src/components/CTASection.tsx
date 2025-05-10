
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-600 to-sage-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar Sua Organização?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Dê o primeiro passo em direção à transformação digital hoje. Junte-se a centenas de líderes que já revolucionaram seus negócios com nossa imersão em IA.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-medium px-8">
            Inicie Sua Jornada Agora
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700 font-medium px-8">
            Agende uma Consulta Gratuita
          </Button>
        </div>
        
        <div className="mt-8 text-sm">
          <p>Vagas limitadas. Garantia de satisfação ou seu dinheiro de volta.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
