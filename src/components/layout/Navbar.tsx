
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Gift, LayoutDashboard, Users, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-1" /> },
    { label: "Gifting", href: "/gifting", icon: <Gift className="h-4 w-4 mr-1" /> },
    { label: "Clients", href: "/clients", icon: <Users className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:px-6 lg:px-8",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 relative"
        >
          <div className="bg-primary/10 p-2 rounded-xl">
            <Gift className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">Giftitopia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                "hover:bg-secondary flex items-center",
                location.pathname === item.href
                  ? "bg-secondary text-primary"
                  : "text-foreground/80"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button size="sm" variant="outline">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <GlassPanel
          variant="light"
          intensity="high"
          className="mt-3 p-4 space-y-4 md:hidden animate-fade-in"
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center",
                  location.pathname === item.href
                    ? "bg-secondary text-primary"
                    : "hover:bg-secondary/50"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 pt-2 border-t">
            <Button variant="outline" className="w-full justify-start">Log in</Button>
            <Button className="w-full justify-start">Get Started</Button>
          </div>
        </GlassPanel>
      )}
    </header>
  );
};

export default Navbar;
