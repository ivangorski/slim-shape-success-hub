
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
      id: "essential",
      title: "Essential Plan",
      price: "$49",
      period: "per month",
      description: "Perfect for beginners who want to start their weight loss journey",
      features: [
        "Personalized meal plan",
        "Weekly check-ins",
        "Access to recipe library",
        "Basic workout guides"
      ],
      popular: false,
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: "$99",
      period: "per month",
      description: "Our most popular program for committed individuals",
      features: [
        "Everything in Essential Plan",
        "1-on-1 nutrition coaching",
        "Custom workout routines",
        "Priority support",
        "Progress tracking tools"
      ],
      popular: true,
    },
    {
      id: "ultimate",
      title: "Ultimate Plan",
      price: "$199",
      period: "per month",
      description: "Complete transformation with maximum support",
      features: [
        "Everything in Premium Plan",
        "Daily coach check-ins",
        "Personalized supplement advice",
        "Stress management techniques",
        "Lifetime access to resources"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Transformation Path</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the program that best fits your lifestyle, goals, and budget. All plans come with our 30-day satisfaction guarantee.
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
                    Most Popular
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
                  Get Started Now
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
