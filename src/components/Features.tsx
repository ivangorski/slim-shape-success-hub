
import React from "react";
import { Activity, Calendar, Heart, Scale, Search, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-teal-500" />,
      title: "Avaliação Personalizada",
      description: "Analisamos seu modelo de negócio, desafios e oportunidades para criar um plano único para sua empresa."
    },
    {
      icon: <Calendar className="h-8 w-8 text-teal-500" />,
      title: "Imersão de 2 Dias",
      description: "Experiência intensiva e prática que transforma a maneira como você enxerga a aplicação da IA nos negócios."
    },
    {
      icon: <Activity className="h-8 w-8 text-teal-500" />,
      title: "Implementação Sustentável",
      description: "Estratégias para implementar IA de forma gradual e eficaz, respeitando a cultura da sua organização."
    },
    {
      icon: <User className="h-8 w-8 text-teal-500" />,
      title: "Especialistas em IA",
      description: "Aprenda com profissionais que já implementaram soluções de IA em empresas líderes do mercado."
    },
    {
      icon: <Heart className="h-8 w-8 text-teal-500" />,
      title: "Comunidade de Líderes",
      description: "Conecte-se com outros executivos enfrentando desafios similares para troca de experiências e networking."
    },
    {
      icon: <Scale className="h-8 w-8 text-teal-500" />,
      title: "Resultados Mensuráveis",
      description: "Acompanhamento de KPIs e métricas para avaliar o impacto da implementação de IA no seu negócio."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Diferencial da Nossa Imersão</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa abordagem holística aborda todos os aspectos da transformação digital através da IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-all hover:shadow-lg">
              <div className="bg-teal-50 p-3 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
