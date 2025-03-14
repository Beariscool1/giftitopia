
import React, { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { MotionCard } from "@/components/ui/motion-card";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Package, Calendar, FileText, Clock, Heart } from "lucide-react";

const GiftAutomation = () => {
  const [activeTab, setActiveTab] = useState("catalog");

  // Mock data for gift catalog
  const giftOptions = [
    {
      id: "gift1",
      name: "Classic Housewarming",
      description: "A curated collection of home essentials.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Housewarming",
      tags: ["Popular", "Best Seller"],
    },
    {
      id: "gift2",
      name: "Artisanal Wine Basket",
      description: "Premium wines paired with gourmet snacks.",
      price: "$120",
      image: "https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Anniversary",
      tags: ["Premium"],
    },
    {
      id: "gift3",
      name: "Personalized Cutting Board",
      description: "Custom engraved wooden cutting board.",
      price: "$65",
      image: "https://images.unsplash.com/photo-1580664885948-0c0b5efc7e14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Housewarming",
      tags: ["Personalized"],
    },
    {
      id: "gift4",
      name: "Luxury Candle Set",
      description: "Handcrafted scented candles for any home.",
      price: "$75",
      image: "https://images.unsplash.com/photo-1624963689836-843bf7c7721e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Anniversary",
      tags: ["Trending"],
    },
    {
      id: "gift5",
      name: "Gourmet Coffee Collection",
      description: "Selection of premium coffees from around the world.",
      price: "$60",
      image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Thank You",
      tags: ["Best Seller"],
    },
    {
      id: "gift6",
      name: "Plant Subscription",
      description: "3-month subscription for house plants.",
      price: "$90",
      image: "https://images.unsplash.com/photo-1585320115967-4dabe748578c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Housewarming",
      tags: ["Subscription"],
    },
  ];

  // Automation templates
  const automationTemplates = [
    {
      id: "template1",
      name: "Closing Gift + Anniversary",
      description: "Send a gift at closing, then a follow-up on the 1-year anniversary.",
      events: ["Closing", "1-Year Anniversary"],
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: "template2",
      name: "Seasonal Touches",
      description: "Send thoughtful gifts during major holidays throughout the year.",
      events: ["Winter Holiday", "Spring", "Summer", "Fall"],
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: "template3",
      name: "Birthday Remembrance",
      description: "Never forget a client's birthday with this automated sequence.",
      events: ["Client Birthday"],
      icon: <Gift className="h-5 w-5" />,
    },
    {
      id: "template4",
      name: "Referral Thank You",
      description: "Automatically thank clients for their referrals.",
      events: ["Referral Received"],
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Gift Automation</h1>
        <p className="text-muted-foreground">
          Set up automatic gift sending to delight your clients at the perfect moments.
        </p>
      </header>

      <Tabs defaultValue="catalog" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start mb-8 bg-secondary">
          <TabsTrigger value="catalog" className="flex items-center">
            <Package className="mr-2 h-4 w-4" /> Gift Catalog
          </TabsTrigger>
          <TabsTrigger value="automation" className="flex items-center">
            <Clock className="mr-2 h-4 w-4" /> Automation Templates
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Custom Sequences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="catalog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftOptions.map((gift) => (
              <MotionCard key={gift.id} hoverEffect="lift">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={gift.image} 
                    alt={gift.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {gift.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{gift.name}</CardTitle>
                      <CardDescription>{gift.description}</CardDescription>
                    </div>
                    <span className="font-bold">{gift.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-full">
                      {gift.category}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="sm">
                    <Gift className="mr-2 h-4 w-4" /> Select
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="automation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationTemplates.map((template) => (
              <MotionCard key={template.id} hoverEffect="glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      {template.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {template.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-medium mb-2">Includes events:</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.events.map((event, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-secondary text-xs font-medium rounded-md flex items-center"
                      >
                        <Clock className="mr-1 h-3 w-3" />
                        {event}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Use This Template</Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>

          <GlassPanel className="mt-8 p-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-accent/30">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create a Custom Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Design your own sequence of gifts and touchpoints for any client journey.
                </p>
                <Button>
                  <Clock className="mr-2 h-4 w-4" /> Create Custom Sequence
                </Button>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="custom">
          <div className="flex flex-col items-center justify-center p-10 border rounded-lg bg-secondary/30">
            <div className="p-4 rounded-full bg-secondary mb-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Create Your First Custom Sequence</h3>
            <p className="text-muted-foreground text-center max-w-md mb-6">
              Build a completely customized gift sequence for your clients based on specific triggers and events.
            </p>
            <Button>
              <Clock className="mr-2 h-4 w-4" /> Create New Sequence
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftAutomation;
