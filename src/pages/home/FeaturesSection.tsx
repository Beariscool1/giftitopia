
import React from "react";
import { Gift, Clock, Users, Mail, Package, Heart } from "lucide-react";

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
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-our-curated-gifts-1.jpg"
            alt="Closing gift"
          />
          
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="Smart Scheduling"
            description="Set-and-forget gift timing based on closing dates, with automatic tracking and delivery notifications."
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-subscription-page-header.jpg"
            alt="Smart scheduling"
          />
          
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Client Management"
            description="Organize all your client property purchases and track their gifting journey in one centralized dashboard."
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-how-it-works-3.jpg"
            alt="Client management"
          />
          
          <FeatureCard 
            icon={<Mail className="h-6 w-6 text-primary" />}
            title="Personalized Notes"
            description="Include handwritten-style notes with each gift that feel personal and authentic to strengthen connections."
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-our-mission-1.jpg"
            alt="Personalized notes"
          />
          
          <FeatureCard 
            icon={<Package className="h-6 w-6 text-primary" />}
            title="Premium Gift Catalog"
            description="Select from thoughtfully curated gift options specifically chosen to delight new homeowners."
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-our-curated-gifts-2.jpg"
            alt="Premium gift catalog"
          />
          
          <FeatureCard 
            icon={<Heart className="h-6 w-6 text-primary" />}
            title="Memorable Touchpoints"
            description="Create lasting connections that generate more referrals, reviews, and repeat business."
            image="https://www.bestowmindfulgifts.com/assets/images/bestow-mindful-gifts-reviews-1.jpg"
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
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
