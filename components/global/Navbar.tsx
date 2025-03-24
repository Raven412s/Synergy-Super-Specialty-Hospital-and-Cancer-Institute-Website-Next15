'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { discoverSynergyPages, quickLinks } from "@/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import {usePathname} from "next/navigation"

export function Navbar() {
 const pathname = usePathname()
  const [activePageIndex, setActivePageIndex] = useState(0)
//   const [isOpen, setIsOpen] = useState(false);
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
const result:boolean = (isHovered || isScrolled || pathname !== "/")

  const activeLinks = discoverSynergyPages[activePageIndex]?.links || []

  return (
    <div     className={cn(
        "h-16 xl:h-20 fixed w-full top-0 z-50  transition-all duration-300 m-0 p-0 space-y-0",
        result ? "bg-white shadow-md" : "bg-transparent"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <NavigationMenu       className={cn(
            "hidden md:flex h-full font-display items-center space-x-6  transition-all duration-300",
            result ? "text-primary" : "text-white"
          )}>
        <NavigationMenuList className="w-full flex space-x-4">
          {/* Discover Synergy Trigger */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2  uppercase font-semibold font-display text-base">
              Discover Synergy
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-screen !min-w-screen bg-fuchsia-50 p-0 border-none !rounded-none">
              <div className="flex w-full">
                {/* LEFT: Page Names */}
                <div className="w-1/4  p-4 flex flex-col space-y-2 items-start ">
                  {discoverSynergyPages.map((page, index) => (
                    <Button
                    variant={"ghost"}
                      key={index}
                      onMouseEnter={() => setActivePageIndex(index)}
                      className={`text-left hover:text-indigo-600 w-full items-start justify-start ${
                        activePageIndex === index ? "text-indigo-600 font-semibold" : ""
                      }`}
                    >
                      {page.name}
                    </Button>
                  ))}
                </div>

                {/* CENTER: Links Grid */}
                <div className="w-2/4 border-x border-gray-300 p-4 flex flex-col gap-4">
                  {activeLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* RIGHT: Quick Links */}
                <div className="w-1/4 p-4 space-y-4 bg-fuchsia-100">
                  <h4 className="font-semibold text-gray-700">Quick Links</h4>
                  {quickLinks.map((item, i) => (
                    <div
                      key={i}
                      className="bg-indigo-100 px-4 py-2 rounded text-sm"
                    >
                      <div className="text-gray-500">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  ))}
                  <Button
                  variant={"link"} className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full">
                    Book Appointment <span>→</span>
                  </Button>
                  <Button
                  variant={"link"} className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full">
                    Find Doctors <span>→</span>
                  </Button>
                  <Button
                  variant={"link"} className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full">
                    Contact Us <span>→</span>
                  </Button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* More menu triggers */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2  uppercase font-semibold font-display text-base">
              Medical Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-screen !min-w-screen bg-fuchsia-50 p-0 border-none !rounded-none">
                <div className="flex w-full">
                    {/* LEFT: Page Names (e.g. departments, categories) */}
                    <div className="w-1/4 border-r border-gray-300 p-4 flex flex-col space-y-2">
                    {discoverSynergyPages.map((page, index) => (
                        <Button
                        variant={"ghost"}
                        key={index}
                        onMouseEnter={() => setActivePageIndex(index)}
                        className={`text-left hover:text-indigo-600 ${
                            activePageIndex === index ? "text-indigo-600 font-semibold" : ""
                        }`}
                        >
                        {page.name}
                        </Button>
                    ))}
                    </div>

                    {/* CENTER: Links Grid */}
                    <div className="w-3/4 p-4 flex flex-col gap-4">
                    {activeLinks.map((link, index) => (
                        <Link key={index} href={link.href} className="hover:underline">
                        {link.label}
                        </Link>
                    ))}
                    </div>
                </div>
                </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Center: Logo & Brand */}
         <NavigationMenuLink href="/" className="w-[160px] h-[68px] !p-0 rounded-none  !m-0 ">
            <Image src="/LOGO.svg" alt="Logo" height={40} width={50} className="size-full rounded-none  " />
         </NavigationMenuLink>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2  uppercase font-semibold font-display text-base">
              Health Library
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-screen !min-w-screen bg-fuchsia-50 p-0 border-none !rounded-none">
              <p>Health Library content here</p>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2  uppercase font-semibold font-display text-base">
              Cancer Survivors
            </NavigationMenuTrigger>
            <NavigationMenuContent className="max-w-screen !min-w-screen bg-fuchsia-50 p-0 border-none !rounded-none">
              <p>Cancer Survivors content here</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
