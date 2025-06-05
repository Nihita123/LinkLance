import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
        <Link to="/" className="text-xl font-bold text-primary">
          LinkLance
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/explore" className="hover:text-primary transition">
            Explore
          </Link>
          <Link to="/post-project" className="hover:text-primary transition">
            Post Project
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
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
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
                <Link to="/explore" className="hover:text-primary">
                  Explore
                </Link>
                <Link to="/post-project" className="hover:text-primary">
                  Post Project
                </Link>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
                <div className="pt-4 border-t">
                  <Link to="/login">
                    <Button variant="outline" className="w-full mb-2">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
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
