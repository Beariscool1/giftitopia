
import React from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Check, Clock } from "lucide-react";
import { ScheduledGift } from "../data/scheduledGiftsData";

interface GiftsTableProps {
  gifts: ScheduledGift[];
}

const GiftsTable: React.FC<GiftsTableProps> = ({ gifts }) => {
  return (
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
        {gifts.map((gift) => (
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
  );
};

export default GiftsTable;
