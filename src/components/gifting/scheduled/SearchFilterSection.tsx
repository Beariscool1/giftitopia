
import React from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Search, Clock, Check } from "lucide-react";
import { ScheduledGiftStatus } from "../data/scheduledGiftsData";

interface SearchFilterSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: "all" | ScheduledGiftStatus;
  setFilterStatus: (status: "all" | ScheduledGiftStatus) => void;
}

const SearchFilterSection: React.FC<SearchFilterSectionProps> = ({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
}) => {
  return (
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
  );
};

export default SearchFilterSection;
