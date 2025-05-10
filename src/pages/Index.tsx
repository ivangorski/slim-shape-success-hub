
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProgramCards />
        <Testimonials />
        <Features />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
