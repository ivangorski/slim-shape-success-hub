
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    toast({
      title: "Message received!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });

    // Reset the form
    const form = e.currentTarget as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions about our programs? Want to learn more about how we can help you achieve your weight loss goals? Reach out to us!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                required
                className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us more about your goals..."
                required
                className="min-h-[150px] border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
