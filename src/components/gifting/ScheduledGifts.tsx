
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Gift, Clock, Home, Calendar, Check, Search, Filter, Eye } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ActiveSequence } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for all scheduled gifts
const scheduledGiftsData: Array<{
  id: string;
  client: string;
  clientImage?: string;
  property: string;
  propertyImage?: string;
  date: string;
  gift: string;
  giftImage?: string;
  occasion: string;
  status: "Delivered" | "Scheduled" | "Pending";
}> = [
  { 
    id: "gift1",
    client: "Emma Thompson", 
    clientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "123 Maple Street, Portland", 
    propertyImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 2, 2024", 
    gift: "Custom Wine Delivery", 
    giftImage: "https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift2",
    client: "James Peterson", 
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "456 Oak Avenue, Seattle", 
    propertyImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Mar 15, 2024", 
    gift: "Personalized Thank You Card", 
    giftImage: "https://images.unsplash.com/photo-1579208030886-b937da9925dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift3",
    client: "Sarah Miller", 
    clientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "789 Pine Road, San Francisco", 
    propertyImage: "https://images.unsplash.com/photo-1604014093717-a274b021fbac?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Feb 20, 2024", 
    gift: "Luxury Home Gift Basket", 
    giftImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "Closing Gift",
    status: "Delivered"
  },
  { 
    id: "gift4",
    client: "Michael Roberts", 
    clientImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "101 Cedar Lane, Austin", 
    propertyImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Mar 5, 2024", 
    gift: "Custom Cutting Board", 
    giftImage: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "Housewarming",
    status: "Delivered"
  },
  { 
    id: "gift5",
    client: "Lisa Chen", 
    clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "222 Birch Blvd, Denver", 
    propertyImage: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 10, 2024", 
    gift: "Premium Champagne", 
    giftImage: "https://images.unsplash.com/photo-1550164631-c935e98a2d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "1-Year Anniversary",
    status: "Scheduled"
  },
  { 
    id: "gift6",
    client: "David Williams", 
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "333 Elm Street, Chicago", 
    propertyImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 15, 2024", 
    gift: "Artisanal Cheese Basket", 
    giftImage: "https://images.unsplash.com/photo-1578847949403-3f845a2538d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift7",
    client: "Jennifer Brown", 
    clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "444 Walnut Ave, Miami", 
    propertyImage: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 20, 2024", 
    gift: "Gourmet Cookie Delivery", 
    giftImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift8",
    client: "Robert Garcia", 
    clientImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "555 Cherry St, Los Angeles", 
    propertyImage: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "May 1, 2024", 
    gift: "Luxury Candle Set", 
    giftImage: "https://images.unsplash.com/photo-1636459562533-304187659d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "9-Month Follow-up",
    status: "Scheduled"
  }
];

interface ScheduledGiftsProps {
  activeSequences?: ActiveSequence[];
}

const ScheduledGifts: React.FC<ScheduledGiftsProps> = ({ activeSequences }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "Delivered" | "Scheduled" | "Pending">("all");

  const filteredGifts = scheduledGiftsData.filter(gift => {
    // Apply search filter
    const matchesSearch = searchTerm === "" || 
      gift.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gift.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gift.gift.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply status filter
    const matchesStatus = filterStatus === "all" || gift.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Scheduled Gifts</h1>
        <p className="text-muted-foreground mb-6">
          View and manage all your scheduled client gifts for closings and follow-ups.
        </p>
        
        <GlassPanel className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search by client, property, or gift..." 
                className="w-full pl-10 pr-4 py-2 rounded-md border bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={filterStatus === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("all")}
              >
                All
              </Button>
              <Button 
                variant={filterStatus === "Scheduled" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("Scheduled")}
                className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200"
              >
                <Clock className="h-4 w-4 mr-1" /> Scheduled
              </Button>
              <Button 
                variant={filterStatus === "Pending" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("Pending")}
                className="bg-amber-50 text-amber-600 hover:bg-amber-100 border-amber-200"
              >
                <Clock className="h-4 w-4 mr-1" /> Pending
              </Button>
              <Button 
                variant={filterStatus === "Delivered" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("Delivered")}
                className="bg-green-50 text-green-600 hover:bg-green-100 border-green-200"
              >
                <Check className="h-4 w-4 mr-1" /> Delivered
              </Button>
            </div>
          </div>
        </GlassPanel>
      </header>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Scheduled Gifts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Gift</TableHead>
                <TableHead>Occasion</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGifts.map((gift) => (
                <TableRow key={gift.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={gift.clientImage} alt={gift.client} />
                        <AvatarFallback>{gift.client.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{gift.client}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[180px] truncate">
                    <div className="flex items-center gap-2">
                      {gift.propertyImage && (
                        <div className="h-8 w-8 rounded-md overflow-hidden flex-shrink-0">
                          <img src={gift.propertyImage} alt={gift.property} className="h-full w-full object-cover" />
                        </div>
                      )}
                      <span>{gift.property}</span>
                    </div>
                  </TableCell>
                  <TableCell>{gift.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {gift.giftImage && (
                        <div className="h-8 w-8 rounded-md overflow-hidden flex-shrink-0">
                          <img src={gift.giftImage} alt={gift.gift} className="h-full w-full object-cover" />
                        </div>
                      )}
                      <span>{gift.gift}</span>
                    </div>
                  </TableCell>
                  <TableCell>{gift.occasion}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      gift.status === "Scheduled" 
                        ? "bg-blue-50 text-blue-600" 
                        : gift.status === "Pending"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-green-50 text-green-600"
                    }`}>
                      {gift.status === "Delivered" ? <Check className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
                      {gift.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" /> View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduledGifts;
