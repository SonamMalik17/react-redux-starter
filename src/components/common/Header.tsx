'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/common/Button";
import userData from '@/data/userData.json';

interface HeaderProps {
  // Add any props if needed in the future
}

const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
         {/* Optional: Add a small logo or initial */}
         {/* <span className="text-accent">A</span> */}
         {userData.personalInfo.name}
        </Link>
        <nav className="hidden items-center space-x-1 md:flex">
          {userData.navigation.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={`relative px-3 py-2 transition-colors ${
                pathname === item.href ? "text-accent font-semibold" : "text-foreground/80"
              }`}
            >
              <Link href={item.href}>
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {/* Add Mobile Menu Trigger here if needed */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
 