
import React from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ArrowRight, Check, Clock, Home, Gift } from "lucide-react";

interface TestimonialPreview {
  name: string;
  role: string;
  comment: string;
  image: string;
}

interface HeroSectionProps {
  testimonials: TestimonialPreview[];
  onHowItWorksClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ testimonials, onHowItWorksClick }) => {
  return (
    <section className="pt-24 lg:pt-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground mb-2">
              Build lasting client relationships
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Mindful closing gifts that leave lasting impressions
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Build stronger client relationships with beautiful, personalized gifts automatically sent at closing and throughout the homeownership journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-md">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-md"
                onClick={onHowItWorksClick}
              >
                How It Works
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> agents already using Bespoke Mindful Gifts
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <GlassPanel 
              className="w-full h-full p-8 rounded-2xl shadow-soft overflow-hidden"
              intensity="medium"
            >
              <div className="relative h-full">
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/5 rounded-full -mb-16 -ml-16"></div>
                
                <div className="relative z-10 bg-card border rounded-xl p-6 shadow-soft mb-6 transform transition-transform hover:-rotate-1 hover:scale-[1.01] duration-500">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-green-50 mr-3">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Gift Scheduled</h3>
                      <p className="text-sm text-muted-foreground">Emma Thompson • Closing Gift</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium flex items-center">
                      <Clock className="mr-1 h-3 w-3" /> Arriving Oct 15
                    </span>
                    <span className="text-muted-foreground">Personalized Note Included</span>
                  </div>
                </div>
                
                <div className="relative z-20 bg-card border rounded-xl p-6 shadow-soft mb-6 transform transition-transform hover:rotate-1 hover:scale-[1.01] duration-500 ml-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-50 mr-3">
                      <Home className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Anniversary Gift • 1 Year</h3>
                      <p className="text-sm text-muted-foreground">Michael Roberts • Home Purchase</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium flex items-center">
                      <Clock className="mr-1 h-3 w-3" /> Scheduled for Aug 12
                    </span>
                    <span className="text-muted-foreground">Custom Wine Basket</span>
                  </div>
                </div>
                
                <div className="relative z-30 bg-card border rounded-xl p-6 shadow-soft transform transition-transform hover:-rotate-1 hover:scale-[1.01] duration-500 ml-12">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-indigo-50 mr-3">
                      <Gift className="h-5 w-5 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Gift Catalog</h3>
                      <p className="text-sm text-muted-foreground">Browse thoughtfully curated options</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="h-12 rounded-md bg-secondary/80 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Gift" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-12 rounded-md bg-secondary/80 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Gift" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-12 rounded-md bg-secondary/80 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Gift" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;
