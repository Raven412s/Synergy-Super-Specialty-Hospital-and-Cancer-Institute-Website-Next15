"use client";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    // Calculate the scroll percentage
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    // Update the isScrolled state based on the threshold
    setIsScrolled(scrollPercentage > 10); // Adjust the threshold as needed
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "h-16 xl:h-20 fixed w-full top-0 z-50 transition-all duration-300",
        (isHovered || isScrolled) ? "bg-fuchsia-200" : "bg-transparent"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-center items-center h-full px-4">
        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div
          className={cn(
            "hidden md:flex font-display items-center space-x-6 uppercase font-semibold transition-all duration-300",
            (isHovered || isScrolled) ? "text-primary" : "text-white"
          )}
        >
          <Link href="/discover">Discover Synergy</Link>
          <Link href="/services">Medical Services</Link>
          {/* Center: Logo & Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/vercel.svg" alt="Logo" height={40} width={50} />
          </Link>
          <Link href="/health-library">Health Library</Link>
          <Link href="/cancer-survivors">Cancer Survivors</Link>
        </div>

        {/* Right: Search & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 absolute right-5">
          <Link href="/search">
            <Button
              size="icon"
              className={cn("rounded-full size-9 bg-fuchsia-300 border  hover:bg-fuchsia-400 cursor-pointer ", (isHovered || isScrolled) ? "text-primary bg-fuchsia-400 border-indigo-900" : "text-fuchsia-50 bg-transparent border-transparent")}
            >
              <Search className="size-4 text-primary" />
            </Button>
          </Link>

          {/* Mobile Menu Button (Only Visible on Small Screens) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Hidden on Desktop) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4 text-lg uppercase font-semibold text-primary">
            <Link href="/discover" onClick={() => setIsOpen(false)}>
              Discover Synergy
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Medical Services
            </Link>
            <Link href="/health-library" onClick={() => setIsOpen(false)}>
              Health Library
            </Link>
            <Link href="/cancer-survivors" onClick={() => setIsOpen(false)}>
              Cancer Survivors
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
