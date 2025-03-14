
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActiveSequence } from "./types";
import { scheduledGiftsData, ScheduledGiftStatus } from "./data/scheduledGiftsData";
import SearchFilterSection from "./scheduled/SearchFilterSection";
import GiftsTable from "./scheduled/GiftsTable";

interface ScheduledGiftsProps {
  activeSequences?: ActiveSequence[];
}

const ScheduledGifts: React.FC<ScheduledGiftsProps> = ({ activeSequences }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | ScheduledGiftStatus>("all");

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
        
        <SearchFilterSection 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
      </header>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Scheduled Gifts</CardTitle>
        </CardHeader>
        <CardContent>
          <GiftsTable gifts={filteredGifts} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduledGifts;
