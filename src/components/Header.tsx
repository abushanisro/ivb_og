"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/ivblog.png"; // Update path as needed

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <a href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={logo}
              alt="Idea Log Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-bold text-foreground tracking-wide">IDEA_LOG</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">IVB_Hub</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#directory" className="text-muted-foreground hover:text-primary transition-colors">
            Directory
          </a>
      
          <a
            href="https://dtxfpni9mqg.typeform.com/to/Jx5xFiDd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="ml-4 bg-gradient-primary">Submit Idea</Button>
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-background border-t z-40">
          <nav className="flex flex-col space-y-3 mt-2">
            <a href="#directory" className="text-muted-foreground hover:text-primary transition-colors">
              Directory
            </a>
            <a
              href="https://dtxfpni9mqg.typeform.com/to/Jx5xFiDd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-gradient-primary mt-2">Submit Idea</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
