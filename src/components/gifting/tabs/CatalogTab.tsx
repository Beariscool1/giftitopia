
import React, { useState } from "react";
import { GiftOption } from "../types";
import { GiftOptionCard } from "../cards/GiftOptionCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tag, Search, Filter } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface CatalogTabProps {
  giftOptions: GiftOption[];
}

export const CatalogTab: React.FC<CatalogTabProps> = ({ giftOptions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showOnlyBrandable, setShowOnlyBrandable] = useState(false);
  
  const categories = Array.from(new Set(giftOptions.map(gift => gift.category)));
  
  const filteredGifts = giftOptions.filter(gift => {
    const matchesSearch = gift.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          gift.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(gift.category);
    const matchesBrandable = !showOnlyBrandable || gift.brandable;
    
    return matchesSearch && matchesCategory && matchesBrandable;
  });

  return (
    <div>
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search gifts..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant={showOnlyBrandable ? "default" : "outline"} 
            className="flex items-center gap-2"
            onClick={() => setShowOnlyBrandable(!showOnlyBrandable)}
          >
            <Tag className="h-4 w-4" />
            Brandable Only
          </Button>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Categories:</span>
          </div>
          <ToggleGroup type="multiple" value={selectedCategories} onValueChange={setSelectedCategories}>
            {categories.map(category => (
              <ToggleGroupItem key={category} value={category} aria-label={category} className="text-xs">
                {category}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGifts.map((gift) => (
          <GiftOptionCard key={gift.id} gift={gift} />
        ))}
      </div>
      
      {filteredGifts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No gifts match your current filters.</p>
          <Button variant="link" onClick={() => {
            setSearchTerm("");
            setSelectedCategories([]);
            setShowOnlyBrandable(false);
          }}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};
