"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-32 h-8">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center space-x-10">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Achievement", "/achievement"],
              ["Project", "/project"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200
                  ${pathname === href 
                    ? "text-red-400 underline underline-offset-4" 
                    : "text-white hover:text-red-400"
                  }`}
              >
                {label}
              </Link>
            ))}
            <Button className="bg-red-500 hover:bg-red-600 transition-all duration-200 px-6 py-2 text-sm font-medium shadow-lg hover:shadow-red-500/30">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;