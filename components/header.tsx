"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { RainbowButton } from "./RainbowButton";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "COMMITTEE", path: "/committee" },
  { name: "KEYNOTE SPEAKERS", path: "#" },
  { name: "CALL FOR PAPERS", path: "/call-for-papers" },
  { name: "FOR ATTENDEES", path: "/for-attendees" },
  { name: "HISTORY", path: "/history" },
  { name: "CONTACT US", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || pathname !== "/" 
          ? "bg-white/80 shadow-sm" 
          : "bg-white/10 backdrop-blur-sm backdrop-saturate-100"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Section 1: Logos */}
          <div className="flex items-center gap-5 custom:gap-2">
            <div className="flex items-center gap-1 custom:gap-2">
              <img className="h-[42px] w-[42px] custom:h-[50px] custom:w-[50px] rounded-full object-cover" src="/uni.jpg" alt="University Logo" />
              <img className="h-10 w-10 custom:h-12 custom:w-12 object-cover rounded-full" src="/logo.png" alt="ICISN Logo" />
              <img className="h-10 w-24 custom:h-12 custom:w-32" src="https://www.springer.com/public/images/springer-logo.svg" alt="Springer Logo" />  
              <Link href="/" className="flex items-center">
              <img
                src="/icisn.png"
                alt="ICISN 2026 Logo"
                className="hidden xs:block h-18 w-24"
              />
            </Link>
            </div>
            
            
          </div>

          {/* Section 2: Navigation Links - Hidden on mobile */}
          <nav className="hidden custom:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  pathname === item.path
                    ? scrolled || pathname !== "/"
                      ? "text-black border-b-2 border-black pb-1"
                      : "text-white border-b-2 border-white pb-1"
                    : scrolled || pathname !== "/"
                    ? "text-gray-900"
                    : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Section 3: Submit Button and Mobile Menu */}
          <div className="flex items-center gap-0">
            <RainbowButton className="text-white">
              <a href="https://cmt3.research.microsoft.com/ICISN2026">Submit Papers</a>
            </RainbowButton>

            {/* Mobile Menu Button */}
            <div className="custom:hidden relative">
              <button 
                className="p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative w-5 h-5">
                  <span className={cn(
                    "absolute h-[2px] w-5 bg-current transform transition-all duration-300",
                    isOpen ? "rotate-45 top-2" : "top-0"
                  )} />
                  <span className={cn(
                    "absolute h-[2px] w-5 bg-current top-2 transform transition-all duration-300",
                    isOpen ? "opacity-0" : "opacity-100"
                  )} />
                  <span className={cn(
                    "absolute h-[2px] w-5 bg-current transform transition-all duration-300",
                    isOpen ? "-rotate-45 top-2" : "top-4"
                  )} />
                </div>
              </button>

              {/* Mobile Menu Dropdown */}
              <div className={cn(
                "fixed right-4 top-[5.5rem] bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl transform transition-all duration-300 w-[220px] border border-gray-100",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              )}>
                <div className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
                        pathname === item.path
                          ? "text-primary bg-gradient-to-r from-primary/5 to-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
