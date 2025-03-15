
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
  branded?: boolean;
}

export interface GiftOption {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  brandable?: boolean;
  brandingOptions?: BrandingOption[];
}

export interface BrandingOption {
  id: string;
  name: string;
  description: string;
  additionalCost: string;
  previewImage?: string;
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
  branded?: boolean;
  brandingDetails?: {
    logo?: string;
    colors?: string[];
    message?: string;
  };
}

// CRM Integration Types
export interface CRMContact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  notes?: string;
  tags?: string[];
  crmId?: string;
  crmSystem?: string;
}

export interface CRMIntegrationConfig {
  name: string;
  apiKey?: string;
  baseUrl?: string;
  enabled: boolean;
  lastSyncedAt?: string;
  mappings?: {
    contactField: string;
    bestowField: string;
  }[];
}

export interface CRMSyncStatus {
  success: boolean;
  message: string;
  timestamp: string;
  details?: {
    added: number;
    updated: number;
    failed: number;
    failedIds?: string[];
  };
}

export interface CRMExportData {
  clients: CRMContact[];
  sequences: Array<{
    clientId: string;
    sequenceId: string;
    sequenceName: string;
    startDate: string;
    gifts: {
      name: string;
      scheduledDate: string;
      status: string;
    }[];
  }>;
}
