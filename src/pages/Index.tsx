
import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "./home/HeroSection";
import FeaturesSection from "./home/FeaturesSection";
import HowItWorksSection from "./home/HowItWorksSection";
import TestimonialsSection from "./home/TestimonialsSection";
import CTASection from "./home/CTASection";
import { useScrollAnimation } from "./home/ScrollAnimation";

const Index = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  
  const smoothScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Initialize scroll animations
  useScrollAnimation();

  // Real estate testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Agent, Century 21",
      comment: "Bespoke Mindful Gifts has transformed my client relationships. My repeat business has increased by 40% since I started using their gift sequences.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Broker, Keller Williams",
      comment: "The automation saves me hours each week while making my clients feel special. It's the perfect balance of personal touch and efficiency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jennifer Chen",
      role: "Luxury Property Specialist",
      comment: "My high-end clients expect exceptional service. These thoughtful gift sequences have become a signature part of my premium offering.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection 
        testimonials={testimonials} 
        onHowItWorksClick={() => smoothScroll(howItWorksRef)} 
      />
      
      <FeaturesSection />
      
      <HowItWorksSection ref={howItWorksRef} />
      
      <TestimonialsSection testimonials={testimonials} />
      
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
