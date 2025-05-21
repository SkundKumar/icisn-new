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
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled || pathname !== "/" 
          ? "bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-white/10 before:via-transparent before:to-transparent before:opacity-50" 
          : "bg-white/20 backdrop-blur-3xl border-b border-white/50 rounded-2xl before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-white/10 before:via-transparent before:to-transparent before:opacity-50"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Section 1: Logos */}
          <div className="flex items-center gap-5 custom:gap-2">
            <div className="flex items-center gap-1 custom:gap-2">
              <img className="h-[42px] w-[42px] custom:h-[50px] custom:w-[50px] rounded-full object-cover transition-all duration-300 hover:scale-105 ring-2 ring-white/30" src="/uni.jpg" alt="University Logo" />
              <img className="h-10 w-10 custom:h-12 custom:w-12 object-cover rounded-full transition-all duration-300 hover:scale-105 ring-2 ring-white/30" src="/logo.png" alt="ICISN Logo" />
              <img className="h-10 w-24 custom:h-12 custom:w-32 transition-all duration-300 hover:scale-105" src="https://www.springer.com/public/images/springer-logo.svg" alt="Springer Logo" />
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
          <nav className="hidden custom:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors relative group",
                  pathname === item.path
                    ? scrolled || pathname !== "/"
                      ? "text-black border-b-2 border-black pb-1 after:absolute after:inset-0 after:bg-white/20 after:rounded-lg after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                      : "text-white border-b-2 border-white pb-1 after:absolute after:inset-0 after:bg-white/20 after:rounded-lg after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                    : scrolled || pathname !== "/"
                    ? "text-gray-900 after:absolute after:inset-0 after:bg-white/20 after:rounded-lg after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                    : "text-white after:absolute after:inset-0 after:bg-white/20 after:rounded-lg after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Section 3: Submit Button and Mobile Menu */}
          <div className="flex items-center">
            <RainbowButton className="text-white transition-all duration-300 ml-5">
              <a href="https://cmt3.research.microsoft.com/ICISN2026" className="font-medium">Submit Papers</a>
            </RainbowButton>

            {/* Mobile Menu Button */}
            <div className="custom:hidden relative">
              <button 
                className="p-1 hover:bg-white/30 rounded-lg transition-colors duration-300"
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
                "fixed right-4 top-[5.5rem] bg-white/60 backdrop-blur-xl rounded-2xl transform transition-all duration-500 w-[220px] border border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-white/10 before:via-transparent before:to-transparent before:opacity-50",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              )}>
                <div className="flex flex-col py-2 relative">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 relative group",
                        pathname === item.path
                          ? scrolled || pathname !== "/"
                            ? "text-black border-b-2 border-black after:absolute after:inset-0 after:bg-white/20 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                            : "text-black border-b-2 border-gray-800 after:absolute after:inset-0 after:bg-white/20 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                          : scrolled || pathname !== "/"
                          ? "text-gray-900 after:absolute after:inset-0 after:bg-white/20 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                          : "text-black after:absolute after:inset-0 after:bg-white/20 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
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
