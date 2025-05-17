"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { RainbowButton } from "./RainbowButton" // Import the RainbowButton

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
          : "bg-white/10 backdrop-blur-sm backdrop-saturate-100 "
      )}
    >
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Section 1: Logos */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center space-x-1 md:space-x-2">
              <img className="h-10 w-12 md:h-12 md:w-14 rounded-full" src="/uni.png" alt="University Logo" />
              <img className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full" src="/logo.png" alt="ICISN Logo" />
            </div>
            <img className="h-8 w-20 md:h-12 md:w-32" src="https://www.springer.com/public/images/springer-logo.svg" alt="Springer Logo" />
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span
                className={cn(
                  "hidden md:block text-xl font-bold tracking-tighter font-playfair",
                  scrolled || pathname !== "/" ? "text-black" : "text-white"
                )}
              >
                ICISN
              </span>
            </Link>
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
          <div className="flex items-center space-x-4">
            <RainbowButton className="text-white">
              <a href="https://cmt3.research.microsoft.com/ICISN2026">Submit Papers</a>
            </RainbowButton>

            {/* Mobile Menu Button */}
            <button
              className="custom:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "custom:hidden fixed inset-0 top-20 bg-background z-40 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-6 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-lg font-medium tracking-wider transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
