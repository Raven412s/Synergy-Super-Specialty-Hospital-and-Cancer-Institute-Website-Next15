"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuItems, quickLinks } from "@/data";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [outerOpen, setOuterOpen] = useState(false);
  const [innerOpen, setInnerOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<typeof menuItems[0] | null>(null);

  // Function to handle scroll events
  const handleScroll = () => {
    // Calculate the scroll percentage
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
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
  const result: boolean = isHovered || isScrolled || pathname !== "/";

  return (
    <div className={cn("h-16 xl:h-20 fixed w-full top-0 z-50  transition-all duration-300 m-0 p-0 space-y-0", result ? "bg-white shadow-md" : "bg-transparent",)} onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}>
      {/* desktop menu/navbar */}
      <NavigationMenu
  aria-label="Main navigation"
  role="navigation"
  className={cn(
    "hidden md:flex h-full font-display items-center transition-all duration-300",
    result ? "text-black" : "text-white"
  )}
>
  <NavigationMenuList className="w-full flex items-center justify-evenly lg:space-x-4 space-x-0">
    {menuItems.map((item, index) => (
      <React.Fragment key={item.label}>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onMouseEnter={() => setActivePageIndex(0)} // optional: reset to first page
            className="xl:px-4 md:px-2 !px-0 py-2 uppercase font-bold font-display  lg:text-sm text-xs"
          >
            {item.label}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="max-w-screen !min-w-screen bg-fuchsia-50 p-0 border-none !rounded-none min-h-[428px] h-full">
            <div className="flex w-full min-h-full">
              {item.pages[0]?.name ? (
                <>
                  {/* LEFT: Page Names */}
                  <div className="w-1/6 p-4 flex flex-col space-y-2 items-start min-h-full">
                    {item.pages.map((page) => (
                      <Button
                        key={page.name}
                        variant="ghost"
                        onMouseEnter={() => setActivePageIndex(item.pages.indexOf(page))}
                        className={cn(
                          "text-left hover:text-indigo-600 w-full items-start justify-start text-lg",
                          {
                            "text-indigo-600 font-semibold":
                              activePageIndex === item.pages.indexOf(page),
                          }
                        )}
                      >
                        {page.name}
                      </Button>
                    ))}
                  </div>

                  {/* CENTER: Links */}
                <div className="w-4/6 border-x border-gray-300 p-4 min-h-full overflow-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {Array.from({
                        length: Math.ceil(item.pages[activePageIndex]?.links.length / 10),
                      }).map((_, colIndex) => {
                        const start = colIndex * 10;
                        const columnLinks = item.pages[activePageIndex]?.links.slice(
                          start,
                          start + 10
                        );

                        return (
                          <div key={colIndex} className="flex flex-col gap-2">
                            {columnLinks.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="hover:underline w-max block"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* RIGHT: Quick Links */}
                  <div className="w-1/6 p-4 space-y-4 bg-fuchsia-50 overflow-y-auto max-h-[428px]">
                    <h4 className="font-semibold text-gray-700">Quick Links</h4>

                    {quickLinks.map((qLink) => (
                      <div
                        key={qLink.label}
                        className="bg-white px-4 py-2 rounded-lg text-sm border border-neutral-300"
                      >
                        <div className="text-gray-500">{qLink.label}</div>
                        <div className="font-medium">{qLink.value}</div>
                      </div>
                    ))}

                    <Button
                      variant="link"
                      className="bg-fuchsia-200 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                      title="Book an Appointment"
                    >
                      Book Appointment <span>→</span>
                    </Button>

                    <Button
                      variant="link"
                      className="bg-fuchsia-200 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                      title="Search for available doctors"
                    >
                      Find Doctors <span>→</span>
                    </Button>

                    <Button
                      variant="link"
                      className="bg-fuchsia-200 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                      title="Get in touch with us"
                    >
                      Contact Us <span>→</span>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="w-full p-4">
                  <p>{item.label} content here</p>
                </div>
              )}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Logo Insert after 2nd item */}
        {index === 1 && (
  <NavigationMenuItem>
    <NavigationMenuLink
      href="/"
      className="w-[100px] h-[48px] py-2 xl:!p-0 rounded-none !m-0"
    >
      <Image src="/LOGO.svg" alt="Logo" height={40} width={50} className="size-full rounded-none" priority />
    </NavigationMenuLink>
  </NavigationMenuItem>
)}

      </React.Fragment>
    ))}
  </NavigationMenuList>
</NavigationMenu>



{/* Mobile Menu/Navbar */}
<div className="w-full md:hidden flex h-full relative">
  <Link href={"/"} className="w-[160px] h-[68px] !py-2 rounded-none !m-0">
    <Image src="/LOGO.svg" alt="Logo" height={40} width={50} className="size-full rounded-none" priority />
  </Link>
  <div className="absolute right-10 top-1/2 -translate-y-1/2">
    <Sheet open={outerOpen} onOpenChange={setOuterOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" onClick={() => setOuterOpen(true)}>
          <MenuIcon className={cn(result ? "text-primary" : "text-background")} />
        </Button>
      </SheetTrigger>
      <SheetContent className="!w-full !max-w-screen h-full">
        <SheetHeader>
          <SheetTitle className="text-heading sr-only">
            Synergy Super Speciality Hospital & Cancer Institute
          </SheetTitle>
          <SheetDescription className="text-gray-700 sr-only">Menu</SheetDescription>
        </SheetHeader>

        <div className="px-4 h-full flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="uppercase text-primary font-display hover:text-primary w-max"
              onClick={() => {
                setActivePageIndex(0);
                setSelectedMenuItem(item);
                setInnerOpen(true);
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Inner Sheet */}
        <Sheet open={innerOpen} onOpenChange={(val) => {
          setInnerOpen(val);
          if (!val) {
            // setOuterOpen(false);
            setSelectedMenuItem(null); // optional reset
          }
        }}>
          <SheetContent className="!w-full !max-w-screen">
            <SheetHeader>
              <SheetTitle className="text-heading sr-only">
                {selectedMenuItem?.label}
              </SheetTitle>
              <SheetDescription className="text-gray-700 sr-only">
                {selectedMenuItem?.label} Menu
              </SheetDescription>
            </SheetHeader>

            {selectedMenuItem && (
              <div className="flex">
                {/* Page Names */}
                <div className="w-full p-4 flex flex-col space-x-2 items-start">
                  {selectedMenuItem.pages.map((page, pageIndex) => (
                    <Button
                      key={pageIndex}
                      variant="ghost"
                      onMouseEnter={() => setActivePageIndex(pageIndex)}
                      className={cn(
                        "text-left hover:text-indigo-600 w-full items-start justify-start",
                        {
                          "text-indigo-600 font-semibold":
                            activePageIndex === pageIndex,
                        }
                      )}
                    >
                      {page.name}
                    </Button>
                  ))}
                </div>

                {/* Page Links */}
                <ScrollArea className="h-[calc(100vh-4rem)] w-full pr-4">
                  <div className="flex flex-col space-y-4 mt-4">
                    {selectedMenuItem.pages[activePageIndex]?.links.map(
                      (link, index) => (
                        <SheetClose key={index} asChild>
                          <Link
                            href={link.href}
                            className="text-base hover:text-fuchsia-600"
                            onClick={() => {
                              setInnerOpen(false);
                              setOuterOpen(false);
                              setSelectedMenuItem(null);
                            }}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </div>
                </ScrollArea>
              </div>
            )}
          </SheetContent>
        </Sheet>

        {/* Quick Links */}
        <div className="w-full max-w-lg p-2 space-y-4 min-h-max absolute bottom-0 right-0">
          <h4 className="font-semibold text-gray-700">Quick Links</h4>
          {quickLinks.map((item, i) => (
            <div key={i} className="bg-indigo-100 px-2 py-1 rounded text-sm">
              <div className="text-gray-500">{item.label}</div>
              <div className="font-medium">{item.value}</div>
            </div>
          ))}
          <Button
            variant={"link"}
            className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
          >
            Book Appointment <span>→</span>
          </Button>
          <Button
            variant={"link"}
            className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
          >
            Find Doctors <span>→</span>
          </Button>
          <Button
            variant={"link"}
            className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
          >
            Contact Us <span>→</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  </div>
</div>

    </div>
  );
}
