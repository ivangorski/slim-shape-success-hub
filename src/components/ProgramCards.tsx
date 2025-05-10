
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const ProgramCards = () => {
  const navigate = useNavigate();
  const { setSelectedProgram } = useCart();
  
  const programs = [
    {
      id: "essencial",
      title: "Plano Básico",
      price: "R$1.990",
      period: "por pessoa",
      description: "Perfeito para profissionais que querem iniciar sua jornada na IA",
      features: [
        "Material didático digital",
        "Certificado de participação",
        "Acesso à biblioteca de recursos",
        "1 dia de curso imersivo"
      ],
      popular: false,
    },
    {
      id: "premium",
      title: "Plano Premium",
      price: "R$3.990",
      period: "por pessoa",
      description: "Nosso programa mais popular para líderes comprometidos",
      features: [
        "Tudo do Plano Básico",
        "Mentoria individual pós-curso",
        "Casos de uso específicos para seu negócio",
        "Suporte prioritário",
        "Acesso a ferramentas exclusivas de IA"
      ],
      popular: true,
    },
    {
      id: "corporativo",
      title: "Plano Corporativo",
      price: "R$9.990",
      period: "até 5 pessoas",
      description: "Transformação completa para sua equipe executiva",
      features: [
        "Tudo do Plano Premium",
        "Consultoria estratégica personalizada",
        "Workshop exclusivo para sua empresa",
        "Implementação de projeto piloto",
        "Acesso vitalício a atualizações de conteúdo"
      ],
      popular: false,
    }
  ];

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    navigate("/checkout");
  };

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha Seu Caminho de Transformação</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecione o programa que melhor se adapta às necessidades da sua empresa. Todos os planos incluem nossa garantia de satisfação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.id} 
              className={`relative flex flex-col ${program.popular ? 'border-teal-500 shadow-lg' : 'border-gray-200'}`}
            >
              {program.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{program.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl md:text-4xl font-bold">{program.price}</span>
                  <span className="text-gray-500 text-sm">{program.period}</span>
                </div>
                <CardDescription className="mt-2">{program.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="text-teal-500 mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={program.popular ? "default" : "outline"} 
                  className={`w-full ${
                    program.popular 
                      ? 'bg-teal-600 hover:bg-teal-700' 
                      : 'border-teal-600 text-teal-600 hover:bg-teal-50'
                  }`}
                  onClick={() => handleProgramSelect(program)}
                >
                  Inscreva-se Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
