
import React, { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { MotionCard } from "@/components/ui/motion-card";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Package, Calendar, FileText, Clock, Heart, Home, Check } from "lucide-react";

const GiftAutomation = () => {
  const [activeTab, setActiveTab] = useState("sequences");

  // Mock data for gift sequences
  const giftSequences = [
    {
      id: "sequence1",
      name: "Premium Closing Package",
      description: "A luxury closing gift followed by 3, 6, and 12-month follow-ups.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$350",
      included: [
        { time: "At Closing", gift: "Luxury Home Gift Basket" },
        { time: "3-Month", gift: "Personalized Thank You Card" },
        { time: "6-Month", gift: "Custom Wine Delivery" },
        { time: "1-Year", gift: "Home Anniversary Gift" },
      ],
      popular: true,
    },
    {
      id: "sequence2",
      name: "Essential Relationship Builder",
      description: "Perfect for maintaining connections after closing.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$225",
      included: [
        { time: "At Closing", gift: "Housewarming Package" },
        { time: "6-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "Anniversary Card & Gift" },
      ],
      popular: false,
    },
    {
      id: "sequence3",
      name: "Luxury Homeowner Experience",
      description: "Premium gifts that make a lasting impression.",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$450",
      included: [
        { time: "At Closing", gift: "Premium Gift Box" },
        { time: "3-Month", gift: "Gourmet Food Delivery" },
        { time: "6-Month", gift: "Home Decor Item" },
        { time: "9-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "Premium Anniversary Gift" },
      ],
      popular: false,
    },
    {
      id: "sequence4",
      name: "First-Time Buyer Special",
      description: "Specially curated for first-time homeowners.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$275",
      included: [
        { time: "At Closing", gift: "First Home Celebration Box" },
        { time: "3-Month", gift: "Home Maintenance Guide" },
        { time: "6-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "First Anniversary Gift" },
      ],
      popular: false,
    },
  ];

  // Individual gift options for catalog
  const giftOptions = [
    {
      id: "gift1",
      name: "Luxury Homeowner Welcome",
      description: "A premium housewarming gift for new homeowners.",
      price: "$150",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
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
      name: "Custom Address Gift Set",
      description: "Personalized home items featuring their new address.",
      price: "$90",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
      tags: ["Personalized"],
    },
    {
      id: "gift4",
      name: "Home Celebration Box",
      description: "Curated gifts perfect for new homeowners.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
      tags: ["Trending"],
    },
    {
      id: "gift5",
      name: "Seasonal Gift Box",
      description: "Themed gift based on the season.",
      price: "$80",
      image: "https://images.unsplash.com/photo-1594125356987-95c3adc77c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Follow-up",
      tags: ["Seasonal"],
    },
    {
      id: "gift6",
      name: "Home Anniversary Package",
      description: "Celebrate one year in their new home.",
      price: "$110",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Anniversary",
      tags: ["Premium"],
    },
  ];

  // Active gift sequences for clients
  const activeSequences = [
    {
      id: "active1",
      client: "Emma Thompson",
      property: "123 Maple Street, Portland, OR",
      closingDate: "Oct 2, 2023",
      sequence: "Premium Closing Package",
      status: [
        { time: "At Closing", gift: "Luxury Home Gift Basket", status: "Delivered", date: "Oct 3, 2023" },
        { time: "3-Month", gift: "Personalized Thank You Card", status: "Delivered", date: "Jan 2, 2024" },
        { time: "6-Month", gift: "Custom Wine Delivery", status: "Scheduled", date: "Apr 2, 2024" },
        { time: "1-Year", gift: "Home Anniversary Gift", status: "Pending", date: "Oct 2, 2024" },
      ]
    },
    {
      id: "active2",
      client: "James Peterson",
      property: "456 Oak Avenue, Seattle, WA",
      closingDate: "Dec 15, 2023",
      sequence: "Essential Relationship Builder",
      status: [
        { time: "At Closing", gift: "Housewarming Package", status: "Delivered", date: "Dec 16, 2023" },
        { time: "6-Month", gift: "Seasonal Gift", status: "Scheduled", date: "Jun 15, 2024" },
        { time: "1-Year", gift: "Anniversary Card & Gift", status: "Pending", date: "Dec 15, 2024" },
      ]
    },
    {
      id: "active3",
      client: "Sarah Miller",
      property: "789 Pine Road, San Francisco, CA",
      closingDate: "Feb 10, 2024",
      sequence: "Luxury Homeowner Experience",
      status: [
        { time: "At Closing", gift: "Premium Gift Box", status: "Delivered", date: "Feb 12, 2024" },
        { time: "3-Month", gift: "Gourmet Food Delivery", status: "Scheduled", date: "May 10, 2024" },
        { time: "6-Month", gift: "Home Decor Item", status: "Pending", date: "Aug 10, 2024" },
        { time: "9-Month", gift: "Seasonal Gift", status: "Pending", date: "Nov 10, 2024" },
        { time: "1-Year", gift: "Premium Anniversary Gift", status: "Pending", date: "Feb 10, 2025" },
      ]
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Gift Sequences</h1>
        <p className="text-muted-foreground">
          Create meaningful connections with clients through automated gift sequences timed to their closing date.
        </p>
      </header>

      <Tabs defaultValue="sequences" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start mb-8 bg-secondary">
          <TabsTrigger value="sequences" className="flex items-center">
            <Clock className="mr-2 h-4 w-4" /> Gift Sequences
          </TabsTrigger>
          <TabsTrigger value="catalog" className="flex items-center">
            <Package className="mr-2 h-4 w-4" /> Gift Catalog
          </TabsTrigger>
          <TabsTrigger value="active" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" /> Active Sequences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sequences">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {giftSequences.map((sequence) => (
              <MotionCard key={sequence.id} hoverEffect="lift">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={sequence.image} 
                    alt={sequence.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  {sequence.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{sequence.name}</CardTitle>
                      <CardDescription>{sequence.description}</CardDescription>
                    </div>
                    <span className="font-bold">{sequence.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-medium mb-2">Sequence includes:</h4>
                  <ul className="space-y-1">
                    {sequence.included.map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Clock className="h-3 w-3 mr-2 text-muted-foreground" />
                        <span className="font-medium">{item.time}:</span>
                        <span className="ml-1 text-muted-foreground">{item.gift}</span>
                      </li>
                    ))}
                  </ul>
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

          <GlassPanel className="mt-8 p-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-accent/30">
                <FileText className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create a Custom Sequence</h3>
                <p className="text-muted-foreground mb-4">
                  Design your own series of closing and follow-up gifts tailored to your clients' preferences.
                </p>
                <Button>
                  <Gift className="mr-2 h-4 w-4" /> Build Custom Sequence
                </Button>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

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

        <TabsContent value="active">
          <div className="space-y-6">
            {activeSequences.map((sequence) => (
              <Card key={sequence.id} className="overflow-hidden">
                <CardHeader className="pb-2 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{sequence.client}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Home className="h-3 w-3 mr-1" />
                        {sequence.property}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>Closing Date: {sequence.closingDate}</span>
                      </div>
                      <div className="mt-1 text-primary font-medium">{sequence.sequence}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-secondary"></div>
                    <ul className="space-y-4">
                      {sequence.status.map((item, index) => (
                        <li key={index} className="relative pl-9">
                          <div className={`absolute left-3 top-1 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center ${
                            item.status === 'Delivered' 
                              ? 'bg-green-100 text-green-600' 
                              : item.status === 'Scheduled' 
                                ? 'bg-blue-100 text-blue-600'
                                : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.status === 'Delivered' 
                              ? <Check className="h-3 w-3" />
                              : <Clock className="h-3 w-3" />
                            }
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <span className="font-medium">{item.time}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                item.status === 'Delivered' 
                                  ? 'bg-green-50 text-green-600' 
                                  : item.status === 'Scheduled' 
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'bg-gray-50 text-gray-600'
                              }`}>
                                {item.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.gift}</p>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t pt-4">
                  <Button variant="outline" size="sm" className="mr-2">Edit Sequence</Button>
                  <Button size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
            
            <GlassPanel className="mt-4 p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">Add New Client Sequence</h3>
                  <p className="text-muted-foreground">Set up a new gift sequence for a recent closing.</p>
                </div>
                <Button>
                  <Gift className="mr-2 h-4 w-4" /> Add Client
                </Button>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftAutomation;
