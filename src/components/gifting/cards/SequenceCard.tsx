
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionCard } from "@/components/ui/motion-card";
import { Gift, Clock, ImageOff, Tag } from "lucide-react";
import { GiftSequence } from "../types";
import { Badge } from "@/components/ui/badge";

interface SequenceCardProps {
  sequence: GiftSequence;
}

export const SequenceCard: React.FC<SequenceCardProps> = ({ sequence }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <MotionCard key={sequence.id} hoverEffect="lift">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        {!imageError ? (
          <img 
            src={sequence.image} 
            alt={sequence.name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <ImageOff className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {sequence.popular && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Most Popular
            </span>
          )}
          {sequence.branded && (
            <span className="px-2 py-1 bg-primary/70 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center">
              <Tag className="h-3 w-3 mr-1" /> Branded
            </span>
          )}
        </div>
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
        
        {sequence.branded && (
          <div className="mt-3 p-2 rounded-md bg-secondary/50">
            <Badge variant="outline" className="mb-1">
              <Tag className="h-3 w-3 mr-1" /> Branding Options
            </Badge>
            <p className="text-xs text-muted-foreground">
              All gifts in this sequence can be customized with your logo, colors, and personalized message.
            </p>
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
