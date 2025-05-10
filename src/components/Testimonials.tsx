
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana M.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      text: "Participei de muitos cursos de IA, mas a Imersão foi a primeira que realmente me mostrou como implementar na prática. Nossa empresa já está colhendo os resultados!",
      rating: 5,
      company: "Diretora de Inovação",
    },
    {
      id: 2,
      name: "Carlos T.",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      text: "Os facilitadores não apenas ensinam teoria, mas mostram o caminho prático para implementação. Em seis meses, conseguimos automatizar processos críticos com IA.",
      rating: 5,
      company: "CEO",
    },
    {
      id: 3,
      name: "Julia L.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      text: "Como líder de tecnologia, precisava entender como integrar IA aos nossos processos. A imersão me deu clareza para planejar nossa transformação digital.",
      rating: 5,
      company: "CTO",
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Reais de Líderes Reais</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de executivos que transformaram suas organizações através da nossa imersão em IA.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-teal-100 text-teal-800 font-semibold text-sm px-3 py-1 rounded-full">
                      {testimonial.company}
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-teal-700">
            Junte-se a mais de 500 executivos e inicie a transformação digital da sua empresa hoje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
