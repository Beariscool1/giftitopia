
import { CRMContact, CRMExportData, CRMIntegrationConfig, CRMSyncStatus, ActiveSequence } from "@/components/gifting/types";

// Mock storage for demo purposes - in production, this would be stored in a database
let configuredCRMs: CRMIntegrationConfig[] = [
  {
    name: "Generic CRM",
    enabled: true,
    mappings: [
      { contactField: "name", bestowField: "client" },
      { contactField: "email", bestowField: "email" },
    ]
  }
];

export const getCRMConfigurations = (): CRMIntegrationConfig[] => {
  return configuredCRMs;
};

export const saveCRMConfiguration = (config: CRMIntegrationConfig): CRMIntegrationConfig => {
  const index = configuredCRMs.findIndex(c => c.name === config.name);
  
  if (index >= 0) {
    configuredCRMs[index] = { ...config };
    return configuredCRMs[index];
  } else {
    configuredCRMs.push(config);
    return config;
  }
};

export const deleteCRMConfiguration = (name: string): boolean => {
  const initialLength = configuredCRMs.length;
  configuredCRMs = configuredCRMs.filter(c => c.name !== name);
  return configuredCRMs.length < initialLength;
};

export const exportToCRM = async (
  crmName: string, 
  data: CRMExportData
): Promise<CRMSyncStatus> => {
  const config = configuredCRMs.find(c => c.name === crmName);
  
  if (!config || !config.enabled) {
    return {
      success: false,
      message: `CRM "${crmName}" is not configured or enabled`,
      timestamp: new Date().toISOString()
    };
  }
  
  // This is a mock implementation - in a real app, you'd make API calls to the CRM
  console.log(`Exporting ${data.clients.length} clients and ${data.sequences.length} sequences to ${crmName}`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    success: true,
    message: `Successfully exported data to ${crmName}`,
    timestamp: new Date().toISOString(),
    details: {
      added: Math.floor(data.clients.length * 0.7),
      updated: Math.floor(data.clients.length * 0.3),
      failed: 0
    }
  };
};

export const importFromCRM = async (crmName: string): Promise<{
  contacts: CRMContact[],
  status: CRMSyncStatus
}> => {
  const config = configuredCRMs.find(c => c.name === crmName);
  
  if (!config || !config.enabled) {
    return {
      contacts: [],
      status: {
        success: false,
        message: `CRM "${crmName}" is not configured or enabled`,
        timestamp: new Date().toISOString()
      }
    };
  }
  
  // Mock implementation - would fetch from actual CRM API in production
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate mock contacts for demo
  const mockContacts: CRMContact[] = Array.from({ length: 5 }).map((_, i) => ({
    id: `import-${Date.now()}-${i}`,
    name: `Imported Contact ${i + 1}`,
    email: `imported${i + 1}@example.com`,
    phone: `(555) ${100 + i}-${1000 + i}`,
    address: `${1000 + i} Import Street, CRM City, CA`,
    tags: ['Imported', i % 2 === 0 ? 'VIP' : 'Standard'],
    crmId: `crm-${1000 + i}`,
    crmSystem: crmName
  }));
  
  return {
    contacts: mockContacts,
    status: {
      success: true,
      message: `Successfully imported ${mockContacts.length} contacts from ${crmName}`,
      timestamp: new Date().toISOString(),
      details: {
        added: mockContacts.length,
        updated: 0,
        failed: 0
      }
    }
  };
};

export const prepareCRMExportData = (activeSequences: ActiveSequence[]): CRMExportData => {
  const clients: CRMContact[] = activeSequences.map(seq => ({
    id: seq.id,
    name: seq.client,
    email: `${seq.client.toLowerCase().replace(/\s+/g, '.')}@example.com`, // Mock email
    address: seq.property,
    tags: ['Bestow Client']
  }));
  
  const sequences = activeSequences.map(seq => ({
    clientId: seq.id,
    sequenceId: seq.id,
    sequenceName: seq.sequence,
    startDate: seq.closingDate,
    gifts: seq.status.map(gift => ({
      name: gift.gift,
      scheduledDate: gift.date,
      status: gift.status
    }))
  }));
  
  return { clients, sequences };
};
