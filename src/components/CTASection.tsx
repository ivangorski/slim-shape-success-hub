
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-600 to-sage-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Take the first step toward a healthier you today. Join thousands who have successfully achieved their weight loss goals with our proven program.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-medium px-8">
            Start Your Journey Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700 font-medium px-8">
            Schedule a Free Consultation
          </Button>
        </div>
        
        <div className="mt-8 text-sm">
          <p>30-day money-back guarantee. No long-term contracts.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
