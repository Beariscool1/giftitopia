
import React, { useState } from "react";
import { ArrowRight, Check, ImageOff } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 bg-secondary/50"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-scroll>
          <div className="inline-block rounded-full bg-background px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bestow Mindful Gifts works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your client relationships with thoughtful, automated gifting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <ProcessStep 
            number={1}
            title="Add your clients"
            description="Enter your client details and property information after each closing to start the gifting journey."
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Add clients"
            features={["Easy client import", "CRM integration"]}
            showArrow
          />
          
          <ProcessStep 
            number={2}
            title="Select gift sequence"
            description="Choose a curated gift sequence that delivers the perfect gifts at closing, 3, 6, and 12 months after."
            image="https://images.unsplash.com/photo-1605338857441-eaa54a20b2ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Select gifts"
            features={["Thoughtfully curated", "Customizable"]}
            showArrow
          />
          
          <ProcessStep 
            number={3}
            title="Let us handle the rest"
            description="We'll automatically deliver each gift at the perfect time while you build your business and client relationships."
            image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            imageAlt="Automated delivery"
            features={["Fully automated", "Delivery tracking"]}
            showArrow={false}
          />
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  showArrow: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  image, 
  imageAlt, 
  features, 
  showArrow 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  
  return (
    <div className="relative" data-scroll>
      <div className="bg-background rounded-xl p-8 h-full border relative z-10">
        <div className="absolute -top-6 -left-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">{number}</div>
        <h3 className="text-xl font-bold mb-4 mt-4">{title}</h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="mt-4 h-40 rounded-lg overflow-hidden">
          {!imageError ? (
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <img 
              src={fallbackImage}
              alt={imageAlt} 
              className="w-full h-full object-cover"
              onError={() => (
                <div className="w-full h-full flex items-center justify-center bg-secondary">
                  <ImageOff className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
            />
          )}
        </div>
        <div className="mt-auto pt-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground mt-2 first:mt-0">
              <Check className="text-green-500 mr-2 h-4 w-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      {showArrow && (
        <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-1/2 z-0">
          <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
        </div>
      )}
    </div>
  );
};

export default HowItWorksSection;
