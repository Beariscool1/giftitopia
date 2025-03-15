
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionCard } from "@/components/ui/motion-card";
import { Gift, ImageOff, Tag, Palette } from "lucide-react";
import { GiftOption } from "../types";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface GiftOptionCardProps {
  gift: GiftOption;
}

export const GiftOptionCard: React.FC<GiftOptionCardProps> = ({ gift }) => {
  const [imageError, setImageError] = useState(false);
  const [showBrandingDetails, setShowBrandingDetails] = useState(false);

  return (
    <MotionCard key={gift.id} hoverEffect="lift">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        {!imageError ? (
          <img 
            src={gift.image} 
            alt={gift.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <ImageOff className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {gift.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
          {gift.brandable && (
            <span className="px-2 py-1 bg-primary/70 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center">
              <Tag className="h-3 w-3 mr-1" /> Brandable
            </span>
          )}
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
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-full">
            {gift.category}
          </span>
          
          {gift.brandable && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 px-2"
                    onClick={() => setShowBrandingDetails(!showBrandingDetails)}
                  >
                    <Palette className="h-4 w-4 mr-1 text-primary" />
                    <span className="text-xs">Branding Options</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Click to see branding options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        {showBrandingDetails && gift.brandingOptions && (
          <div className="mt-2 p-2 bg-secondary/50 rounded-md">
            <h4 className="text-xs font-medium mb-1">Branding Options:</h4>
            <div className="space-y-1">
              {gift.brandingOptions.map((option) => (
                <div key={option.id} className="flex justify-between items-center text-xs">
                  <span>{option.name}</span>
                  <Badge variant="outline" className="text-xs">{option.additionalCost}</Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">View Details</Button>
        <Button size="sm">
          <Gift className="mr-2 h-4 w-4" /> Select
        </Button>
      </CardFooter>
    </MotionCard>
  );
};
