import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Gift, Clock, Users, Calendar, ArrowRight, Check, Mail, Package } from "lucide-react";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            <div className="md:w-1/2 space-y-6 z-10">
              <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground mb-2">
                Strengthen client relationships
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Automate your client gifting experience
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Never miss a gifting opportunity. Build stronger relationships and increase referrals with personalized, automated gift sending.
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
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-medium bg-primary-${i * 100} text-primary-foreground`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">500+</span> agents already using Giftitopia
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
                        <Calendar className="h-5 w-5 text-blue-500" />
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
                      <div className="h-12 rounded-md bg-secondary"></div>
                      <div className="h-12 rounded-md bg-secondary"></div>
                      <div className="h-12 rounded-md bg-secondary"></div>
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
            <h2 className="section-title mb-4">Everything you need for client gifting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your client gifting workflow with powerful automation tools designed specifically for real estate professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Gifting</h3>
              <p className="text-muted-foreground">
                Schedule gifts ahead of time to be sent automatically on important dates like closing day, anniversaries, and holidays.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">CRM Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly connects with Dotloop, Bullseye, and other popular real estate CRM systems to sync client data.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Client Management</h3>
              <p className="text-muted-foreground">
                Keep track of client preferences, special dates, and gifting history in one centralized platform.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Notes</h3>
              <p className="text-muted-foreground">
                Include custom handwritten-style notes with each gift to add a personal touch that clients will remember.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Gift Catalog</h3>
              <p className="text-muted-foreground">
                Choose from a curated selection of high-quality gifts that make a lasting impression on your clients.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border bg-card transition-all duration-300 hover:shadow-soft hover:-translate-y-1" data-scroll>
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gift Scheduling</h3>
              <p className="text-muted-foreground">
                Plan your client touchpoints years in advance, ensuring no important date or opportunity is missed.
              </p>
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
            <h2 className="section-title mb-4">How Giftitopia works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your client relationships with automated gifting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative" data-scroll>
              <div className="bg-background rounded-xl p-8 h-full border relative z-10">
                <div className="absolute -top-6 -left-2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Connect your CRM</h3>
                <p className="text-muted-foreground mb-4">
                  Easily integrate with your existing CRM system to import client data and important dates.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Automatic data sync</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Works with popular CRMs</span>
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
                <h3 className="text-xl font-bold mb-4 mt-4">Select gifts & occasions</h3>
                <p className="text-muted-foreground mb-4">
                  Choose from our premium gift catalog and set up automations for important client milestones.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Curated gift options</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Customizable templates</span>
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
                <h3 className="text-xl font-bold mb-4 mt-4">Relax & build relationships</h3>
                <p className="text-muted-foreground mb-4">
                  We handle the logistics - you focus on growing your business while we strengthen your client relationships.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Automatic delivery</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Check className="text-green-500 mr-2 h-4 w-4" />
                    <span>Track client engagement</span>
                  </div>
                </div>
              </div>
            </div>
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
                  Ready to transform your client relationships?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join hundreds of successful agents who are building stronger client connections and increasing referrals with Giftitopia.
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
                    <p className="text-sm text-muted-foreground">Results with Giftitopia</p>
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

