
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const CTASection: React.FC = () => {
  return (
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
  );
};

export default CTASection;
