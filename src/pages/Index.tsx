
import React, { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/pages/home/HeroSection";
import FeaturesSection from "@/pages/home/FeaturesSection";
import HowItWorksSection from "@/pages/home/HowItWorksSection";
import TestimonialsSection from "@/pages/home/TestimonialsSection";
import CTASection from "@/pages/home/CTASection";
import ScrollAnimation from "@/pages/home/ScrollAnimation";

// Sample data for testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent, Seattle",
    comment: "Since using Bestow Mindful Gifts, my client retention rate has doubled. The personalized gifts make such an impression that I get calls of thanks months after closing!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    name: "Michael Rodriguez",
    role: "Broker, Miami",
    comment: "The automations save me so much time, and the gifts themselves are beautiful. My clients love receiving them throughout their homeownership journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    name: "Rachel Kim",
    role: "Luxury Properties, Los Angeles",
    comment: "My high-end clients have very specific tastes, and Bestow's curated selections have impressed even my most discerning buyers. Worth every penny.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  }
];

const testimonialPreviews = testimonials.map(t => ({
  name: t.name,
  role: t.role,
  comment: t.comment,
  image: t.image
}));

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection 
          testimonials={testimonialPreviews} 
          onHowItWorksClick={scrollToFeatures} 
        />
        <div ref={featuresRef}>
          <FeaturesSection />
        </div>
        <HowItWorksSection />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <ScrollAnimation />
      <Footer />
    </div>
  );
};

export default Index;
