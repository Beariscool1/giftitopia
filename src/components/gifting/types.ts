
export interface GiftItem {
  time: string;
  gift: string;
  status?: string;
  date?: string;
}

export interface GiftSequence {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  included: GiftItem[];
  popular: boolean;
}

export interface GiftOption {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
}

export interface ActiveSequence {
  id: string;
  client: string;
  property: string;
  closingDate: string;
  sequence: string;
  status: Array<GiftItem & {
    status: "Delivered" | "Scheduled" | "Pending";
    date: string;
  }>;
}
