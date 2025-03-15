
import React, { useState } from "react";
import { ImageOff } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-scroll>
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Agent Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What real estate professionals are saying</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from agents who have transformed their client relationships with Bestow Mindful Gifts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image
  const fallbackImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
  
  return (
    <div className="bg-card border rounded-xl p-8 shadow-soft" data-scroll>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-secondary flex items-center justify-center">
          {!imageError ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <img 
              src={fallbackImage}
              alt={testimonial.name} 
              className="w-full h-full object-cover"
              onError={() => <ImageOff className="h-8 w-8 text-muted-foreground" />}
            />
          )}
        </div>
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-muted-foreground">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialsSection;
