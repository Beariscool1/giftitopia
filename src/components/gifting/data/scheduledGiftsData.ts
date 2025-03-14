
export type ScheduledGiftStatus = "Delivered" | "Scheduled" | "Pending";

export interface ScheduledGift {
  id: string;
  client: string;
  clientImage?: string;
  property: string;
  propertyImage?: string;
  date: string;
  gift: string;
  giftImage?: string;
  occasion: string;
  status: ScheduledGiftStatus;
}

// Mock data for all scheduled gifts
export const scheduledGiftsData: ScheduledGift[] = [
  { 
    id: "gift1",
    client: "Emma Thompson", 
    clientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "123 Maple Street, Portland", 
    propertyImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 2, 2024", 
    gift: "Custom Wine Delivery", 
    giftImage: "https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift2",
    client: "James Peterson", 
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "456 Oak Avenue, Seattle", 
    propertyImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Mar 15, 2024", 
    gift: "Personalized Thank You Card", 
    giftImage: "https://images.unsplash.com/photo-1579208030886-b937da9925dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift3",
    client: "Sarah Miller", 
    clientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "789 Pine Road, San Francisco", 
    propertyImage: "https://images.unsplash.com/photo-1604014093717-a274b021fbac?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Feb 20, 2024", 
    gift: "Luxury Home Gift Basket", 
    giftImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "Closing Gift",
    status: "Delivered"
  },
  { 
    id: "gift4",
    client: "Michael Roberts", 
    clientImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "101 Cedar Lane, Austin", 
    propertyImage: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Mar 5, 2024", 
    gift: "Custom Cutting Board", 
    giftImage: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "Housewarming",
    status: "Delivered"
  },
  { 
    id: "gift5",
    client: "Lisa Chen", 
    clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "222 Birch Blvd, Denver", 
    propertyImage: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 10, 2024", 
    gift: "Premium Champagne", 
    giftImage: "https://images.unsplash.com/photo-1550164631-c935e98a2d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "1-Year Anniversary",
    status: "Scheduled"
  },
  { 
    id: "gift6",
    client: "David Williams", 
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "333 Elm Street, Chicago", 
    propertyImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 15, 2024", 
    gift: "Artisanal Cheese Basket", 
    giftImage: "https://images.unsplash.com/photo-1578847949403-3f845a2538d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "6-Month Follow-up",
    status: "Scheduled"
  },
  { 
    id: "gift7",
    client: "Jennifer Brown", 
    clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "444 Walnut Ave, Miami", 
    propertyImage: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "Apr 20, 2024", 
    gift: "Gourmet Cookie Delivery", 
    giftImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "3-Month Follow-up",
    status: "Pending"
  },
  { 
    id: "gift8",
    client: "Robert Garcia", 
    clientImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    property: "555 Cherry St, Los Angeles", 
    propertyImage: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    date: "May 1, 2024", 
    gift: "Luxury Candle Set", 
    giftImage: "https://images.unsplash.com/photo-1636459562533-304187659d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    occasion: "9-Month Follow-up",
    status: "Scheduled"
  }
];
