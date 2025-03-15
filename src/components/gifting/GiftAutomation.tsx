import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Package, Calendar, Tag } from "lucide-react";
import { SequencesTab } from "./tabs/SequencesTab";
import { CatalogTab } from "./tabs/CatalogTab";
import { ActiveSequencesTab } from "./tabs/ActiveSequencesTab";
import { GiftSequence, GiftOption, ActiveSequence } from "./types";

const GiftAutomation = () => {
  const [activeTab, setActiveTab] = useState("sequences");

  // Mock data for gift sequences
  const giftSequences: GiftSequence[] = [
    {
      id: "sequence1",
      name: "Premium Closing Package",
      description: "A luxury closing gift followed by 3, 6, and 12-month follow-ups.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$350",
      included: [
        { time: "At Closing", gift: "Luxury Home Gift Basket" },
        { time: "3-Month", gift: "Personalized Thank You Card" },
        { time: "6-Month", gift: "Custom Wine Delivery" },
        { time: "1-Year", gift: "Home Anniversary Gift" },
      ],
      popular: true,
    },
    {
      id: "sequence2",
      name: "Essential Relationship Builder",
      description: "Perfect for maintaining connections after closing.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$225",
      included: [
        { time: "At Closing", gift: "Housewarming Package" },
        { time: "6-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "Anniversary Card & Gift" },
      ],
      popular: false,
    },
    {
      id: "sequence3",
      name: "Luxury Homeowner Experience",
      description: "Premium gifts that make a lasting impression.",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$450",
      included: [
        { time: "At Closing", gift: "Premium Gift Box" },
        { time: "3-Month", gift: "Gourmet Food Delivery" },
        { time: "6-Month", gift: "Home Decor Item" },
        { time: "9-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "Premium Anniversary Gift" },
      ],
      popular: false,
    },
    {
      id: "sequence4",
      name: "First-Time Buyer Special",
      description: "Specially curated for first-time homeowners.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$275",
      included: [
        { time: "At Closing", gift: "First Home Celebration Box" },
        { time: "3-Month", gift: "Home Maintenance Guide" },
        { time: "6-Month", gift: "Seasonal Gift" },
        { time: "1-Year", gift: "First Anniversary Gift" },
      ],
      popular: false,
    },
    {
      id: "sequence5",
      name: "Branded Luxury Welcome",
      description: "Custom-branded premium closing gifts that showcase your brand.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      price: "$395",
      included: [
        { time: "At Closing", gift: "Branded Luxury Gift Box" },
        { time: "3-Month", gift: "Branded Thank You Card" },
        { time: "6-Month", gift: "Branded Wine Set" },
        { time: "1-Year", gift: "Premium Branded Anniversary Gift" },
      ],
      popular: false,
      branded: true,
    },
  ];

  // Individual gift options for catalog
  const giftOptions: GiftOption[] = [
    {
      id: "gift1",
      name: "Luxury Homeowner Welcome",
      description: "A premium housewarming gift for new homeowners.",
      price: "$150",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
      tags: ["Popular", "Best Seller"],
    },
    {
      id: "gift2",
      name: "Artisanal Wine Basket",
      description: "Premium wines paired with gourmet snacks.",
      price: "$120",
      image: "https://images.unsplash.com/photo-1568213214202-aee0a28567f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Anniversary",
      tags: ["Premium"],
    },
    {
      id: "gift3",
      name: "Custom Address Gift Set",
      description: "Personalized home items featuring their new address.",
      price: "$90",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
      tags: ["Personalized"],
    },
    {
      id: "gift4",
      name: "Home Celebration Box",
      description: "Curated gifts perfect for new homeowners.",
      price: "$95",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Closing",
      tags: ["Trending"],
    },
    {
      id: "gift5",
      name: "Seasonal Gift Box",
      description: "Themed gift based on the season.",
      price: "$80",
      image: "https://images.unsplash.com/photo-1594125356987-95c3adc77c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Follow-up",
      tags: ["Seasonal"],
    },
    {
      id: "gift6",
      name: "Home Anniversary Package",
      description: "Celebrate one year in their new home.",
      price: "$110",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Anniversary",
      tags: ["Premium"],
    },
    {
      id: "gift7",
      name: "Custom Logo Gift Box",
      description: "Premium gift box with your branding and choice of items.",
      price: "$130",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Branded",
      tags: ["Premium", "Customizable"],
      brandable: true,
      brandingOptions: [
        { id: "b1", name: "Embossed Logo", description: "Embossed logo on box", additionalCost: "+$10" },
        { id: "b2", name: "Custom Insert", description: "Custom message insert", additionalCost: "+$5" },
        { id: "b3", name: "Color Options", description: "Brand color palette", additionalCost: "+$15" },
      ]
    },
    {
      id: "gift8",
      name: "Branded Wine Set",
      description: "Premium wine set with custom labels featuring your brand.",
      price: "$160",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Branded",
      tags: ["Luxury", "Memorable"],
      brandable: true,
      brandingOptions: [
        { id: "b4", name: "Custom Labels", description: "Custom wine labels", additionalCost: "+$20" },
        { id: "b5", name: "Branded Box", description: "Branded presentation box", additionalCost: "+$15" },
      ]
    },
    {
      id: "gift9",
      name: "Customized Cutting Board",
      description: "Hardwood cutting board with laser-engraved branding.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1584753388888-32e613cb3b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Kitchen",
      tags: ["Personalized", "Eco-Friendly"],
      brandable: true,
      brandingOptions: [
        { id: "b6", name: "Logo Engraving", description: "Laser-engraved logo", additionalCost: "+$10" },
        { id: "b7", name: "Custom Message", description: "Personal message", additionalCost: "+$5" },
      ]
    },
    {
      id: "gift10",
      name: "Branded Luxury Throw",
      description: "Premium throw blanket with subtle logo embroidery.",
      price: "$110",
      image: "https://images.unsplash.com/photo-1584346475448-38e1a66671af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      category: "Home",
      tags: ["Cozy", "Premium"],
      brandable: true,
      brandingOptions: [
        { id: "b8", name: "Logo Embroidery", description: "Subtle logo embroidery", additionalCost: "+$15" },
        { id: "b9", name: "Custom Color", description: "Choose your brand colors", additionalCost: "+$10" },
      ]
    },
  ];

  // Active gift sequences for clients
  const activeSequences: ActiveSequence[] = [
    {
      id: "active1",
      client: "Emma Thompson",
      property: "123 Maple Street, Portland, OR",
      closingDate: "Oct 2, 2023",
      sequence: "Premium Closing Package",
      status: [
        { time: "At Closing", gift: "Luxury Home Gift Basket", status: "Delivered", date: "Oct 3, 2023" },
        { time: "3-Month", gift: "Personalized Thank You Card", status: "Delivered", date: "Jan 2, 2024" },
        { time: "6-Month", gift: "Custom Wine Delivery", status: "Scheduled", date: "Apr 2, 2024" },
        { time: "1-Year", gift: "Home Anniversary Gift", status: "Pending", date: "Oct 2, 2024" },
      ]
    },
    {
      id: "active2",
      client: "James Peterson",
      property: "456 Oak Avenue, Seattle, WA",
      closingDate: "Dec 15, 2023",
      sequence: "Essential Relationship Builder",
      status: [
        { time: "At Closing", gift: "Housewarming Package", status: "Delivered", date: "Dec 16, 2023" },
        { time: "6-Month", gift: "Seasonal Gift", status: "Scheduled", date: "Jun 15, 2024" },
        { time: "1-Year", gift: "Anniversary Card & Gift", status: "Pending", date: "Dec 15, 2024" },
      ]
    },
    {
      id: "active3",
      client: "Sarah Miller",
      property: "789 Pine Road, San Francisco, CA",
      closingDate: "Feb 10, 2024",
      sequence: "Luxury Homeowner Experience",
      status: [
        { time: "At Closing", gift: "Premium Gift Box", status: "Delivered", date: "Feb 12, 2024" },
        { time: "3-Month", gift: "Gourmet Food Delivery", status: "Scheduled", date: "May 10, 2024" },
        { time: "6-Month", gift: "Home Decor Item", status: "Pending", date: "Aug 10, 2024" },
        { time: "9-Month", gift: "Seasonal Gift", status: "Pending", date: "Nov 10, 2024" },
        { time: "1-Year", gift: "Premium Anniversary Gift", status: "Pending", date: "Feb 10, 2025" },
      ]
    },
    {
      id: "active4",
      client: "Daniel Johnson",
      property: "567 Market Street, New York, NY",
      closingDate: "Jan 5, 2024",
      sequence: "Branded Luxury Welcome",
      status: [
        { time: "At Closing", gift: "Branded Luxury Gift Box", status: "Delivered", date: "Jan 6, 2024" },
        { time: "3-Month", gift: "Branded Thank You Card", status: "Scheduled", date: "Apr 5, 2024" },
        { time: "6-Month", gift: "Branded Wine Set", status: "Pending", date: "Jul 5, 2024" },
        { time: "1-Year", gift: "Premium Branded Anniversary Gift", status: "Pending", date: "Jan 5, 2025" },
      ],
      branded: true,
      brandingDetails: {
        logo: "https://placehold.co/100x100/5f0ef9/ffffff.png?text=DJ",
        colors: ["#5f0ef9", "#ffffff"],
        message: "Thank you for trusting us with your home purchase! - Daniel Johnson Realty"
      }
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Gift Sequences</h1>
        <p className="text-muted-foreground">
          Create meaningful connections with clients through automated gift sequences timed to their closing date.
        </p>
      </header>

      <Tabs defaultValue="sequences" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start mb-8 bg-secondary">
          <TabsTrigger value="sequences" className="flex items-center">
            <Clock className="mr-2 h-4 w-4" /> Gift Sequences
          </TabsTrigger>
          <TabsTrigger value="catalog" className="flex items-center">
            <Package className="mr-2 h-4 w-4" /> Gift Catalog
          </TabsTrigger>
          <TabsTrigger value="active" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" /> Active Sequences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sequences">
          <SequencesTab giftSequences={giftSequences} />
        </TabsContent>

        <TabsContent value="catalog">
          <CatalogTab giftOptions={giftOptions} activeSequences={activeSequences} />
        </TabsContent>

        <TabsContent value="active">
          <ActiveSequencesTab activeSequences={activeSequences} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftAutomation;
