
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { MotionCard } from "@/components/ui/motion-card";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { 
  Gift, Package, Users, Clock, ArrowRight, Heart, Mail, Check
} from "lucide-react";

const Dashboard = () => {
  // Mock data
  const stats = [
    { title: "Active Clients", value: "24", icon: <Users className="h-5 w-5" />, color: "bg-blue-50 text-blue-500" },
    { title: "Gifts Sent", value: "143", icon: <Gift className="h-5 w-5" />, color: "bg-green-50 text-green-500" },
    { title: "Upcoming", value: "7", icon: <Clock className="h-5 w-5" />, color: "bg-amber-50 text-amber-500" },
    { title: "Response Rate", value: "92%", icon: <Heart className="h-5 w-5" />, color: "bg-rose-50 text-rose-500" },
  ];

  const upcomingGifts = [
    { 
      client: "Emma Thompson", 
      occasion: "Home Purchase Anniversary", 
      date: "Oct 15, 2023",
      gift: "Artisanal Wine Basket",
      status: "Scheduled"
    },
    { 
      client: "James Peterson", 
      occasion: "Birthday", 
      date: "Oct 18, 2023",
      gift: "Custom Coffee Set",
      status: "Scheduled"
    },
    { 
      client: "Sarah Miller", 
      occasion: "Home Purchase Anniversary", 
      date: "Oct 23, 2023",
      gift: "Personalized Door Sign",
      status: "Draft"
    },
  ];

  const recentActivity = [
    { 
      type: "Gift Delivered", 
      client: "Michael Roberts", 
      date: "Yesterday",
      description: "Housewarming Gift Basket delivered",
      icon: <Package className="h-4 w-4" />,
      color: "text-green-500 bg-green-50"
    },
    { 
      type: "Note Sent", 
      client: "Lisa Chen", 
      date: "3 days ago",
      description: "Thank you note delivered with gift",
      icon: <Mail className="h-4 w-4" />,
      color: "text-blue-500 bg-blue-50"
    },
    { 
      type: "Gift Scheduled", 
      client: "David Williams", 
      date: "1 week ago",
      description: "Anniversary gift scheduled for Nov 12",
      icon: <Clock className="h-4 w-4" />,
      color: "text-amber-500 bg-amber-50"
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button size="sm">
            <Gift className="mr-2 h-4 w-4" /> 
            Create New Gift
          </Button>
        </div>
        <GlassPanel className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 rounded-lg bg-card border"
              >
                <div className={`p-2 rounded-md mr-3 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MotionCard className="lg:col-span-2" hoverEffect="none">
          <CardHeader className="pb-2">
            <h2 className="text-xl font-bold">Upcoming Gifts</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingGifts.map((gift, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Gift className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{gift.client}</p>
                      <p className="text-sm text-muted-foreground">{gift.occasion}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">{gift.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{gift.gift}</p>
                    <span className={`inline-flex items-center px-2 py-1 mt-1 rounded-full text-xs ${
                      gift.status === "Scheduled" 
                        ? "bg-green-50 text-green-600" 
                        : "bg-amber-50 text-amber-600"
                    }`}>
                      {gift.status === "Scheduled" ? <Check className="mr-1 h-3 w-3" /> : <Clock className="mr-1 h-3 w-3" />}
                      {gift.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="mt-4 w-full justify-center">
              View All Scheduled Gifts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </MotionCard>

        <MotionCard hoverEffect="none">
          <CardHeader className="pb-2">
            <h2 className="text-xl font-bold">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border bg-card/50"
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-md mr-3 ${activity.color}`}>
                      {activity.icon}
                    </div>
                    <div>
                      <div className="flex items-center justify-between w-full">
                        <p className="font-medium text-sm">{activity.type}</p>
                        <span className="text-xs text-muted-foreground">{activity.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.client}</p>
                      <p className="text-xs mt-1">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="mt-4 w-full justify-center">
              View All Activity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </MotionCard>
      </div>
    </div>
  );
};

export default Dashboard;
