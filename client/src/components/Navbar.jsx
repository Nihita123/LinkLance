import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">LinkLance</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-primary transition">
            Home
          </a>
          <a href="#" className="hover:text-primary transition">
            Explore
          </a>
          <a href="#" className="hover:text-primary transition">
            Post Project
          </a>
          <a href="#" className="hover:text-primary transition">
            About
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="hover:text-primary">
                  Home
                </a>
                <a href="#" className="hover:text-primary">
                  Explore
                </a>
                <a href="#" className="hover:text-primary">
                  Post Project
                </a>
                <a href="#" className="hover:text-primary">
                  About
                </a>
                <div className="pt-4 border-t">
                  <Button variant="outline" className="w-full mb-2">
                    Login
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
