
import React, { useState } from "react";
import { Gift, Clock, Users, Mail, Package, Heart, Users as UsersIcon, Pen } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 relative"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-scroll>
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional client gifting for real estate professionals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create memorable experiences for your clients at every touchpoint with thoughtfully curated gifts and seamless automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Gift className="h-6 w-6 text-primary" />}
            title="Closing Gift Sequences"
            description="Create lasting impressions with beautiful closing gifts followed by thoughtful follow-ups at 3, 6, and 12 months."
            image="https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Closing gift"
          />
          
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="Smart Scheduling"
            description="Set-and-forget gift timing based on closing dates, with automatic tracking and delivery notifications."
            image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Smart scheduling"
          />
          
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Client Management"
            description="Organize all your client property purchases and track their gifting journey in one centralized dashboard."
            image="/dashboard-preview.png"
            alt="Client management dashboard"
          />
          
          <FeatureCard 
            icon={<Pen className="h-6 w-6 text-primary" />}
            title="Personalized Notes"
            description="Include handwritten-style notes with each gift that feel personal and authentic to strengthen connections."
            image="https://images.unsplash.com/photo-1543357230-5f6db27346a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Personalized notes"
          />
          
          <FeatureCard 
            icon={<Package className="h-6 w-6 text-primary" />}
            title="Premium Gift Catalog"
            description="Select from thoughtfully curated gift options specifically chosen to delight new homeowners."
            image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Premium gift catalog"
          />
          
          <FeatureCard 
            icon={<Heart className="h-6 w-6 text-primary" />}
            title="Memorable Touchpoints"
            description="Create lasting connections that generate more referrals, reviews, and repeat business."
            image="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Memorable touchpoints"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image, alt }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
      <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 h-32 rounded-lg overflow-hidden">
        {!imageError ? (
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5">
            {title === "Client Management" ? (
              <div className="flex flex-col items-center justify-center w-full h-full bg-gray-50 p-2">
                <div className="w-full flex justify-between items-center mb-2 p-1 bg-white rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <UsersIcon className="h-3 w-3 text-primary" />
                    </div>
                    <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="h-2 w-8 bg-primary/30 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-1 w-full">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-4 bg-white rounded shadow-sm p-1">
                      <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : title === "Personalized Notes" ? (
              <div className="flex flex-col items-center justify-center w-full h-full bg-gray-50 p-3">
                <div className="w-full bg-white rounded shadow-sm p-2 mb-2">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                      <Pen className="h-3 w-3 text-primary" />
                    </div>
                    <div className="h-2 w-24 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                    <div className="h-1.5 w-5/6 bg-gray-100 rounded-full"></div>
                    <div className="h-1.5 w-4/6 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
                <div className="w-2/3 self-end bg-primary/10 rounded shadow-sm p-1.5">
                  <div className="flex justify-end">
                    <div className="h-2 w-16 bg-primary/20 rounded-full mb-1"></div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                </div>
              </div>
            ) : (
              <UsersIcon className="h-12 w-12 text-primary" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;
