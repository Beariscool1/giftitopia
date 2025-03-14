
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Gift, Home, Calendar, Clock, Check } from "lucide-react";
import { ActiveSequence } from "../types";

interface ActiveSequencesTabProps {
  activeSequences: ActiveSequence[];
}

export const ActiveSequencesTab: React.FC<ActiveSequencesTabProps> = ({ activeSequences }) => {
  return (
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
  );
};
