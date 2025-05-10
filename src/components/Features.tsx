
import React from "react";
import { Activity, Calendar, Heart, Scale, Search, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-teal-500" />,
      title: "Personalized Assessment",
      description: "We analyze your body type, lifestyle, and goals to create a plan uniquely tailored to you."
    },
    {
      icon: <Calendar className="h-8 w-8 text-teal-500" />,
      title: "Flexible Meal Planning",
      description: "Enjoy delicious, satisfying meals that fit your preferences and dietary requirements."
    },
    {
      icon: <Activity className="h-8 w-8 text-teal-500" />,
      title: "Sustainable Exercise",
      description: "Exercise routines designed to fit into your schedule and match your fitness level."
    },
    {
      icon: <User className="h-8 w-8 text-teal-500" />,
      title: "Expert Coaching",
      description: "Get guidance from certified nutritionists and fitness professionals every step of the way."
    },
    {
      icon: <Heart className="h-8 w-8 text-teal-500" />,
      title: "Supportive Community",
      description: "Connect with others on the same journey for motivation, tips, and accountability."
    },
    {
      icon: <Scale className="h-8 w-8 text-teal-500" />,
      title: "Progress Tracking",
      description: "Easily track your results and see your transformation with our intuitive tools."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The TransformU Difference</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our holistic approach addresses all aspects of weight loss for lasting results.
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
