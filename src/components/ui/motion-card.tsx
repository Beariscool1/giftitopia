
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

interface MotionCardProps extends React.ComponentProps<typeof Card> {
  hoverEffect?: "lift" | "glow" | "scale" | "none";
  clickEffect?: boolean;
  intensity?: "subtle" | "medium" | "strong";
  children: React.ReactNode;
}

export const MotionCard = ({
  hoverEffect = "lift",
  clickEffect = true,
  intensity = "medium",
  className,
  children,
  ...props
}: MotionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getHoverClass = () => {
    if (hoverEffect === "none") return "";
    
    const intensityMap = {
      subtle: {
        lift: "hover:-translate-y-1",
        glow: "hover:shadow-soft",
        scale: "hover:scale-[1.01]"
      },
      medium: {
        lift: "hover:-translate-y-2",
        glow: "hover:shadow-hover",
        scale: "hover:scale-[1.02]"
      },
      strong: {
        lift: "hover:-translate-y-3",
        glow: "hover:shadow-xl",
        scale: "hover:scale-[1.03]"
      }
    };
    
    return intensityMap[intensity][hoverEffect];
  };
  
  const getClickClass = () => {
    if (!clickEffect) return "";
    return "active:scale-[0.98] active:translate-y-0";
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300",
        getHoverClass(),
        getClickClass(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </Card>
  );
};

export { CardContent, CardHeader, CardFooter };
