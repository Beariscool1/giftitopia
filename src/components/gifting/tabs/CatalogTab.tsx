
import React from "react";
import { GiftOption } from "../types";
import { GiftOptionCard } from "../cards/GiftOptionCard";

interface CatalogTabProps {
  giftOptions: GiftOption[];
}

export const CatalogTab: React.FC<CatalogTabProps> = ({ giftOptions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {giftOptions.map((gift) => (
        <GiftOptionCard key={gift.id} gift={gift} />
      ))}
    </div>
  );
};
