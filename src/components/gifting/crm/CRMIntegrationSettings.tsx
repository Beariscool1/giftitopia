
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { CRMIntegrationConfig } from "@/components/gifting/types";
import { saveCRMConfiguration, deleteCRMConfiguration, getCRMConfigurations } from "@/api/crm/crmClient";
import { Link, Database, Trash2, RefreshCw, Check, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

export const CRMIntegrationSettings: React.FC = () => {
  const { toast } = useToast();
  const [configurations, setConfigurations] = useState<CRMIntegrationConfig[]>(getCRMConfigurations());
  const [newCrmName, setNewCrmName] = useState("");
  const [newCrmUrl, setNewCrmUrl] = useState("");
  const [newCrmKey, setNewCrmKey] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleAddCRM = () => {
    if (!newCrmName) {
      toast({
        title: "Error",
        description: "Please enter a name for the CRM integration",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    
    // Create a new configuration
    const newConfig: CRMIntegrationConfig = {
      name: newCrmName,
      baseUrl: newCrmUrl || undefined,
      apiKey: newCrmKey || undefined,
      enabled: true,
      lastSyncedAt: new Date().toISOString(),
    };
    
    try {
      saveCRMConfiguration(newConfig);
      setConfigurations(getCRMConfigurations());
      
      toast({
        title: "CRM Added",
        description: `Successfully added ${newCrmName} integration`,
      });
      
      // Reset form
      setNewCrmName("");
      setNewCrmUrl("");
      setNewCrmKey("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add CRM integration",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleCRM = (name: string, enabled: boolean) => {
    const config = configurations.find(c => c.name === name);
    
    if (config) {
      saveCRMConfiguration({
        ...config,
        enabled
      });
      
      setConfigurations(getCRMConfigurations());
      
      toast({
        title: enabled ? "CRM Enabled" : "CRM Disabled",
        description: `${name} integration ${enabled ? "enabled" : "disabled"} successfully`,
      });
    }
  };

  const handleDeleteCRM = (name: string) => {
    if (deleteCRMConfiguration(name)) {
      setConfigurations(getCRMConfigurations());
      
      toast({
        title: "CRM Removed",
        description: `Successfully removed ${name} integration`,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to remove CRM integration",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">CRM Integration Settings</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Connections
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New CRM Integration</CardTitle>
          <CardDescription>
            Connect Bestow to your CRM system to sync client and gift data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="crm-name">CRM Name</Label>
              <Input
                id="crm-name"
                placeholder="e.g., Salesforce, HubSpot, etc."
                value={newCrmName}
                onChange={(e) => setNewCrmName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="crm-url">API Endpoint URL (Optional)</Label>
              <Input
                id="crm-url"
                placeholder="https://api.example.com/v1"
                value={newCrmUrl}
                onChange={(e) => setNewCrmUrl(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="crm-key">API Key (Optional)</Label>
              <Input
                id="crm-key"
                type="password"
                placeholder="Your CRM API key"
                value={newCrmKey}
                onChange={(e) => setNewCrmKey(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleAddCRM} 
            disabled={isSaving || !newCrmName}
            className="w-full"
          >
            {isSaving ? "Adding..." : "Add CRM Integration"}
          </Button>
        </CardFooter>
      </Card>

      {configurations.length > 0 ? (
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">Configured Integrations</h4>
          
          {configurations.map((config) => (
            <Card key={config.name}>
              <CardHeader className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{config.name}</CardTitle>
                    <CardDescription>
                      {config.lastSyncedAt
                        ? `Last synced: ${new Date(config.lastSyncedAt).toLocaleString()}`
                        : "Not synchronized yet"}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={config.enabled}
                      onCheckedChange={(checked) => handleToggleCRM(config.name, checked)}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCRM(config.name)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <div className="text-sm">
                  <div className="grid grid-cols-2 gap-1">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="flex items-center">
                      {config.enabled ? (
                        <>
                          <Check className="h-4 w-4 text-green-500 mr-1" /> Active
                        </>
                      ) : (
                        <>
                          <X className="h-4 w-4 text-destructive mr-1" /> Disabled
                        </>
                      )}
                    </span>
                    
                    {config.baseUrl && (
                      <>
                        <span className="text-muted-foreground">API URL:</span>
                        <span className="truncate">{config.baseUrl}</span>
                      </>
                    )}
                    
                    {config.apiKey && (
                      <>
                        <span className="text-muted-foreground">API Key:</span>
                        <span>•••••••••••••••</span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="py-4 flex justify-between">
                <Button variant="outline" size="sm" className="gap-2">
                  <Database className="h-4 w-4" />
                  Test Connection
                </Button>
                <Button size="sm" className="gap-2">
                  <Link className="h-4 w-4" />
                  Manage Connection
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Alert>
          <Database className="h-4 w-4" />
          <AlertTitle>No CRM integrations configured</AlertTitle>
          <AlertDescription>
            Add your first CRM integration above to begin syncing data.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
