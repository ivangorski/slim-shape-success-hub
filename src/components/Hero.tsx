
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Life,<br /><span className="gradient-text">One Step at a Time</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Join thousands who have successfully reached their weight loss goals with our science-backed, personalized approach.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="text-teal-500 mr-2 h-6 w-6 flex-shrink-0" />
                <p className="text-gray-700">Personalized nutrition plans based on your body type</p>
              </div>
              <div className="flex items-start">
                <Check className="text-teal-500 mr-2 h-6 w-6 flex-shrink-0" />
                <p className="text-gray-700">Expert coaching from certified nutritionists</p>
              </div>
              <div className="flex items-start">
                <Check className="text-teal-500 mr-2 h-6 w-6 flex-shrink-0" />
                <p className="text-gray-700">Supportive community to keep you accountable</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-lg px-6 py-6 h-auto">
                Start Your Transformation
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-6 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage-200 rounded-full opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200 rounded-full opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Person celebrating weight loss success" 
                className="rounded-2xl shadow-xl relative z-10 animate-float object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
