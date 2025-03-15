
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CRMSyncStatus, ActiveSequence, CRMContact } from "@/components/gifting/types";
import { 
  importFromCRM, 
  exportToCRM, 
  getCRMConfigurations, 
  prepareCRMExportData 
} from "@/api/crm/crmClient";
import { ArrowUpFromLine, ArrowDownToLine, CheckCircle, RefreshCw, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CRMDataSyncProps {
  activeSequences: ActiveSequence[];
}

export const CRMDataSync: React.FC<CRMDataSyncProps> = ({ activeSequences }) => {
  const { toast } = useToast();
  const [selectedCRM, setSelectedCRM] = useState<string>("");
  const [syncTab, setSyncTab] = useState<string>("export");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [syncStatus, setSyncStatus] = useState<CRMSyncStatus | null>(null);
  const [importedContacts, setImportedContacts] = useState<CRMContact[]>([]);

  const crmConfigs = getCRMConfigurations();
  const enabledCRMs = crmConfigs.filter(config => config.enabled);

  const handleExport = async () => {
    if (!selectedCRM) {
      toast({
        title: "Error",
        description: "Please select a CRM to export data to",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setSyncStatus(null);
    setProgress(0);

    try {
      // Animate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 5;
          return newProgress > 90 ? 90 : newProgress;
        });
      }, 100);

      const exportData = prepareCRMExportData(activeSequences);
      const result = await exportToCRM(selectedCRM, exportData);
      
      clearInterval(interval);
      setProgress(100);
      setSyncStatus(result);

      if (result.success) {
        toast({
          title: "Export Successful",
          description: result.message,
        });
      } else {
        toast({
          title: "Export Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Export Error",
        description: "An unexpected error occurred during export",
        variant: "destructive",
      });
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
      }, 500);
    }
  };

  const handleImport = async () => {
    if (!selectedCRM) {
      toast({
        title: "Error",
        description: "Please select a CRM to import data from",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setSyncStatus(null);
    setImportedContacts([]);
    setProgress(0);

    try {
      // Animate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 5;
          return newProgress > 90 ? 90 : newProgress;
        });
      }, 100);

      const result = await importFromCRM(selectedCRM);
      
      clearInterval(interval);
      setProgress(100);
      setSyncStatus(result.status);
      setImportedContacts(result.contacts);

      if (result.status.success) {
        toast({
          title: "Import Successful",
          description: `Imported ${result.contacts.length} contacts from ${selectedCRM}`,
        });
      } else {
        toast({
          title: "Import Failed",
          description: result.status.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Import Error",
        description: "An unexpected error occurred during import",
        variant: "destructive",
      });
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
      }, 500);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">CRM Data Synchronization</h3>

      <Card>
        <CardHeader>
          <CardTitle>Sync Bestow Data with CRM</CardTitle>
          <CardDescription>
            Import clients from your CRM or export gift sequences to keep systems in sync
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="crm-select" className="text-sm font-medium">
                Select CRM
              </label>
              <Select 
                value={selectedCRM} 
                onValueChange={setSelectedCRM}
                disabled={isProcessing || enabledCRMs.length === 0}
              >
                <SelectTrigger id="crm-select">
                  <SelectValue placeholder="Select a CRM..." />
                </SelectTrigger>
                <SelectContent>
                  {enabledCRMs.map(config => (
                    <SelectItem key={config.name} value={config.name}>
                      {config.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {enabledCRMs.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No enabled CRM integrations. Please configure at least one CRM in the settings.
                </p>
              )}
            </div>

            <Tabs value={syncTab} onValueChange={setSyncTab}>
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="export" className="flex items-center gap-2">
                  <ArrowUpFromLine className="h-4 w-4" />
                  Export to CRM
                </TabsTrigger>
                <TabsTrigger value="import" className="flex items-center gap-2">
                  <ArrowDownToLine className="h-4 w-4" />
                  Import from CRM
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="export" className="pt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Export your active gift sequences and client information to the selected CRM system.
                  </p>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data to export:</span>
                      <span>{activeSequences.length} client sequences</span>
                    </div>
                    <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                      <li>Client contact information</li>
                      <li>Property details</li>
                      <li>Gift sequences and schedules</li>
                      <li>Delivery statuses</li>
                    </ul>
                  </div>
                  
                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress:</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} />
                    </div>
                  )}
                  
                  {syncStatus && (
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-start">
                        {syncStatus.success ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-sm font-medium">
                            {syncStatus.success ? "Export Successful" : "Export Failed"}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {syncStatus.message}
                          </p>
                          {syncStatus.details && syncStatus.success && (
                            <div className="mt-2 text-xs text-muted-foreground">
                              <div>Added: {syncStatus.details.added}</div>
                              <div>Updated: {syncStatus.details.updated}</div>
                              {syncStatus.details.failed > 0 && (
                                <div>Failed: {syncStatus.details.failed}</div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="import" className="pt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Import client data from your connected CRM system into Bestow.
                  </p>
                  
                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress:</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} />
                    </div>
                  )}
                  
                  {syncStatus && (
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-start">
                        {syncStatus.success ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-sm font-medium">
                            {syncStatus.success ? "Import Successful" : "Import Failed"}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {syncStatus.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {importedContacts.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Imported Contacts</h4>
                      <div className="border rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-border">
                          <thead className="bg-muted">
                            <tr>
                              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">
                                Name
                              </th>
                              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">
                                Email
                              </th>
                              <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">
                                Phone
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {importedContacts.map((contact) => (
                              <tr key={contact.id}>
                                <td className="px-4 py-2 text-sm">{contact.name}</td>
                                <td className="px-4 py-2 text-sm">{contact.email}</td>
                                <td className="px-4 py-2 text-sm">{contact.phone || "—"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={syncTab === "export" ? handleExport : handleImport} 
            disabled={isProcessing || !selectedCRM || enabledCRMs.length === 0}
            className="w-full"
          >
            {isProcessing ? (
              <span className="flex items-center">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                {syncTab === "export" ? "Exporting..." : "Importing..."}
              </span>
            ) : (
              <span className="flex items-center">
                {syncTab === "export" ? (
                  <>
                    <ArrowUpFromLine className="h-4 w-4 mr-2" />
                    Export to {selectedCRM || "CRM"}
                  </>
                ) : (
                  <>
                    <ArrowDownToLine className="h-4 w-4 mr-2" />
                    Import from {selectedCRM || "CRM"}
                  </>
                )}
              </span>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
