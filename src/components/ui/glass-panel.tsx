
import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark";
  intensity?: "low" | "medium" | "high";
  border?: boolean;
  children: React.ReactNode;
}

export const GlassPanel = ({
  variant = "light",
  intensity = "medium",
  border = true,
  className,
  children,
  ...props
}: GlassPanelProps) => {
  const getBackdropIntensity = () => {
    switch (intensity) {
      case "low":
        return variant === "light" ? "backdrop-blur-sm" : "backdrop-blur-sm";
      case "medium":
        return variant === "light" ? "backdrop-blur-md" : "backdrop-blur-md";
      case "high":
        return variant === "light" ? "backdrop-blur-xl" : "backdrop-blur-xl";
      default:
        return "backdrop-blur-md";
    }
  };

  const getBackground = () => {
    switch (intensity) {
      case "low":
        return variant === "light" ? "bg-white/30" : "bg-black/10";
      case "medium":
        return variant === "light" ? "bg-white/60" : "bg-black/20";
      case "high":
        return variant === "light" ? "bg-white/80" : "bg-black/30";
      default:
        return variant === "light" ? "bg-white/60" : "bg-black/20";
    }
  };

  const getBorder = () => {
    if (!border) return "";
    return variant === "light" 
      ? "border border-white/30" 
      : "border border-white/10";
  };

  return (
    <div
      className={cn(
        "rounded-lg shadow-glass",
        getBackground(),
        getBackdropIntensity(),
        getBorder(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
