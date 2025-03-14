
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionCard } from "@/components/ui/motion-card";
import { Gift } from "lucide-react";
import { GiftOption } from "../types";

interface GiftOptionCardProps {
  gift: GiftOption;
}

export const GiftOptionCard: React.FC<GiftOptionCardProps> = ({ gift }) => {
  return (
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
  );
};
