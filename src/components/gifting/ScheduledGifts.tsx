
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
import { Gift, Clock, Home, Calendar, Check, Search, Filter } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ActiveSequence } from "./types";

// Mock data for all scheduled gifts
const scheduledGiftsData: Array<{
  id: string;
  client: string;
  property: string;
  date: string;
  gift: string;
  occasion: string;
  status: "Delivered" | "Scheduled" | "Pending";
}> = [
  { 
    id: "gift1",
    client: "Emma Thompson", 
    property: "123 Maple Street, Portland", 
    date: "Apr 2, 2024", 
    gift: "Custom Wine Delivery", 
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift2",
    client: "James Peterson", 
    property: "456 Oak Avenue, Seattle", 
    date: "Mar 15, 2024", 
    gift: "Personalized Thank You Card", 
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift3",
    client: "Sarah Miller", 
    property: "789 Pine Road, San Francisco", 
    date: "Feb 20, 2024", 
    gift: "Luxury Home Gift Basket", 
    occasion: "Closing Gift",
    status: "Delivered"
  },
  { 
    id: "gift4",
    client: "Michael Roberts", 
    property: "101 Cedar Lane, Austin", 
    date: "Mar 5, 2024", 
    gift: "Custom Cutting Board", 
    occasion: "Housewarming",
    status: "Delivered"
  },
  { 
    id: "gift5",
    client: "Lisa Chen", 
    property: "222 Birch Blvd, Denver", 
    date: "Apr 10, 2024", 
    gift: "Premium Champagne", 
    occasion: "1-Year Anniversary",
    status: "Scheduled"
  },
  { 
    id: "gift6",
    client: "David Williams", 
    property: "333 Elm Street, Chicago", 
    date: "Apr 15, 2024", 
    gift: "Artisanal Cheese Basket", 
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift7",
    client: "Jennifer Brown", 
    property: "444 Walnut Ave, Miami", 
    date: "Apr 20, 2024", 
    gift: "Gourmet Cookie Delivery", 
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift8",
    client: "Robert Garcia", 
    property: "555 Cherry St, Los Angeles", 
    date: "May 1, 2024", 
    gift: "Luxury Candle Set", 
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
                  <TableCell className="font-medium">{gift.client}</TableCell>
                  <TableCell className="max-w-[180px] truncate">{gift.property}</TableCell>
                  <TableCell>{gift.date}</TableCell>
                  <TableCell>{gift.gift}</TableCell>
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
                    <Button variant="outline" size="sm">View Details</Button>
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
