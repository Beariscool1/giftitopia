
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Gift, Clock, Users, Calendar, ArrowRight, Check, Mail, Package, Home, MapPin, Heart } from "lucide-react";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  
  const smoothScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('[data-scroll]');
      
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('animate-fade-in', 'opacity-100');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      {/* Hero Section */}
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
                  onClick={() => smoothScroll(howItWorksRef)}
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

      {/* Features Section */}
      <section 
        ref={featuresRef} 
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
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Closing Gift Sequences</h3>
              <p className="text-muted-foreground">
                Create lasting impressions with beautiful closing gifts followed by thoughtful follow-ups at 3, 6, and 12 months.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Closing gift" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Set-and-forget gift timing based on closing dates, with automatic tracking and delivery notifications.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584208124218-703c2daf0008?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Smart scheduling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Management</h3>
              <p className="text-muted-foreground">
                Organize all your client property purchases and track their gifting journey in one centralized dashboard.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Client management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Notes</h3>
              <p className="text-muted-foreground">
                Include handwritten-style notes with each gift that feel personal and authentic to strengthen connections.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579208030886-b937da9925dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Personalized notes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Gift Catalog</h3>
              <p className="text-muted-foreground">
                Select from thoughtfully curated gift options specifically chosen to delight new homeowners.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Premium gift catalog" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Memorable Touchpoints</h3>
              <p className="text-muted-foreground">
                Create lasting connections that generate more referrals, reviews, and repeat business.
              </p>
              <div className="mt-4 h-32 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513135467880-6c41603e3d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Memorable touchpoints" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        ref={howItWorksRef} 
        className="py-24 px-4 bg-secondary/50"
        id="how-it-works"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-scroll>
            <div className="inline-block rounded-full bg-background px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bespoke Mindful Gifts works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your client relationships with thoughtful, automated gifting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative" data-scroll>
              <div className="bg-background rounded-xl p-8 h-full border relative z-10">
                <div className="absolute -top-6 -left-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Add your clients</h3>
                <p className="text-muted-foreground mb-4">
                  Enter your client details and property information after each closing to start the gifting journey.
                </p>
                <div className="mt-4 h-40 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Add clients" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Easy client import</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>CRM integration</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-1/2 z-0">
                <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
              </div>
            </div>
            
            <div className="relative" data-scroll>
              <div className="bg-background rounded-xl p-8 h-full border relative z-10">
                <div className="absolute -top-6 -left-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Select gift sequence</h3>
                <p className="text-muted-foreground mb-4">
                  Choose a curated gift sequence that delivers the perfect gifts at closing, 3, 6, and 12 months after.
                </p>
                <div className="mt-4 h-40 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Select gifts" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Thoughtfully curated</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Customizable</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-12 transform translate-y-1/2 z-0">
                <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
              </div>
            </div>
            
            <div data-scroll>
              <div className="bg-background rounded-xl p-8 h-full border relative z-10">
                <div className="absolute -top-6 -left-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Let us handle the rest</h3>
                <p className="text-muted-foreground mb-4">
                  We'll automatically deliver each gift at the perfect time while you build your business and client relationships.
                </p>
                <div className="mt-4 h-40 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Automated delivery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Fully automated</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Delivery tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-scroll>
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
              Agent Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What real estate professionals are saying</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from agents who have transformed their client relationships with Bespoke Mindful Gifts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-8 shadow-soft" data-scroll>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border" data-scroll>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full transform -translate-x-1/3 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ready to impress your clients?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join hundreds of successful agents building stronger client connections and increasing referrals with Bespoke Mindful Gifts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-md">
                    Get Started Now
                  </Button>
                  <Button variant="outline" size="lg" className="text-md">
                    Request Demo
                  </Button>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-6 border shadow-soft max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-green-50 mr-3">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Agent Success</h3>
                    <p className="text-sm text-muted-foreground">Results with Bespoke Mindful Gifts</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-2xl font-bold">92%</p>
                    <p className="text-sm text-muted-foreground">Client response rate</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-2xl font-bold">3.2x</p>
                    <p className="text-sm text-muted-foreground">Increase in referrals</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <p className="text-2xl font-bold">8.7/10</p>
                    <p className="text-sm text-muted-foreground">Agent satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
