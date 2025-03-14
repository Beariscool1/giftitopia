import React, { useState } from "react";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { MotionCard } from "@/components/ui/motion-card";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Search, Gift, Package, Calendar, Mail, ArrowRight, Check } from "lucide-react";

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock client data
  const clients = [
    {
      id: "client1",
      name: "Emma Thompson",
      email: "emma.thompson@example.com",
      phone: "(555) 123-4567",
      address: "123 Maple Street, Portland, OR 97201",
      status: "Active",
      lastGift: "3 months ago",
      upcomingGift: "Oct 15, 2023",
      tags: ["Buyer", "VIP"],
      transactions: 2,
    },
    {
      id: "client2",
      name: "James Peterson",
      email: "james.peterson@example.com",
      phone: "(555) 987-6543",
      address: "456 Oak Avenue, Seattle, WA 98101",
      status: "Active",
      lastGift: "1 month ago",
      upcomingGift: "Oct 18, 2023",
      tags: ["Seller", "First-Time"],
      transactions: 1,
    },
    {
      id: "client3",
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
      phone: "(555) 234-5678",
      address: "789 Pine Road, San Francisco, CA 94103",
      status: "Active",
      lastGift: "6 months ago",
      upcomingGift: "Oct 23, 2023",
      tags: ["Buyer", "Seller", "Referral"],
      transactions: 3,
    },
    {
      id: "client4",
      name: "Michael Roberts",
      email: "michael.roberts@example.com",
      phone: "(555) 345-6789",
      address: "101 Cedar Lane, Austin, TX 78701",
      status: "Active",
      lastGift: "2 weeks ago",
      upcomingGift: "Jan 10, 2024",
      tags: ["Buyer", "Military"],
      transactions: 1,
    },
    {
      id: "client5",
      name: "Lisa Chen",
      email: "lisa.chen@example.com",
      phone: "(555) 876-5432",
      address: "222 Birch Blvd, Denver, CO 80202",
      status: "Active",
      lastGift: "3 days ago",
      upcomingGift: "Dec 8, 2023",
      tags: ["Seller", "Investor"],
      transactions: 2,
    },
    {
      id: "client6",
      name: "David Williams",
      email: "david.williams@example.com",
      phone: "(555) 456-7890",
      address: "333 Elm Street, Chicago, IL 60601",
      status: "Active",
      lastGift: "1 week ago",
      upcomingGift: "Nov 12, 2023",
      tags: ["Buyer", "Repeat"],
      transactions: 2,
    },
  ];

  // Filter clients based on search term
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Client Management</h1>
            <p className="text-muted-foreground">
              Manage client relationships and gift preferences in one place.
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add New Client
          </Button>
        </div>

        <GlassPanel className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search clients by name, email, or tag..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">Filter</Button>
              <Button variant="outline" size="sm">Sort</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>
        </GlassPanel>
      </header>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start mb-6 bg-secondary">
          <TabsTrigger value="all" className="flex items-center">
            <Users className="mr-2 h-4 w-4" /> All Clients
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" /> Upcoming Gifts
          </TabsTrigger>
          <TabsTrigger value="vip" className="flex items-center">
            <Gift className="mr-2 h-4 w-4" /> VIP Clients
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <MotionCard key={client.id} hoverEffect="lift">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle>{client.name}</CardTitle>
                    <div className="flex space-x-1">
                      {client.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CardDescription>{client.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-muted-foreground">Last Gift:</p>
                        <p className="font-medium">{client.lastGift}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Next Gift:</p>
                        <p className="font-medium">{client.upcomingGift}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Address:</p>
                      <p className="font-medium">{client.address}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </Button>
                  <Button size="sm">
                    <Gift className="mr-2 h-4 w-4" /> Send Gift
                  </Button>
                </CardFooter>
              </MotionCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="flex flex-col space-y-4">
            {filteredClients
              .filter(client => client.upcomingGift)
              .sort((a, b) => new Date(a.upcomingGift).getTime() - new Date(b.upcomingGift).getTime())
              .map((client) => (
                <Card key={client.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-5 md:w-1/4 bg-secondary/30">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-medium">{client.upcomingGift}</p>
                      </div>
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{client.name}</h3>
                          <p className="text-sm text-muted-foreground">{client.email}</p>
                        </div>
                        <div className="flex space-x-1">
                          {client.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Package className="mr-2 h-4 w-4" /> View Details
                      </Button>
                      <Button size="sm">
                        <Gift className="mr-2 h-4 w-4" /> Manage Gift
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="vip">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <GlassPanel className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">VIP Client Program</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance relationships with your most valued clients through premium gifting experiences.
                  </p>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Premium Gift Selection</p>
                      <p className="text-sm text-muted-foreground">Access to exclusive high-value gifts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Priority Shipping</p>
                      <p className="text-sm text-muted-foreground">Expedited delivery options</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-50 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Custom Packaging</p>
                      <p className="text-sm text-muted-foreground">Branded gift presentation</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-auto">
                  <Button className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </GlassPanel>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredClients
                  .filter(client => client.tags.includes("VIP"))
                  .map((client) => (
                    <MotionCard key={client.id} hoverEffect="glow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{client.name}</CardTitle>
                          <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full font-medium">
                            VIP
                          </span>
                        </div>
                        <CardDescription>{client.email}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-muted-foreground">Transactions:</p>
                              <p className="font-medium">{client.transactions}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Next Gift:</p>
                              <p className="font-medium">{client.upcomingGift}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">View History</Button>
                        <Button size="sm">
                          <Gift className="mr-2 h-4 w-4" /> Premium Gift
                        </Button>
                      </CardFooter>
                    </MotionCard>
                  ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientManagement;
