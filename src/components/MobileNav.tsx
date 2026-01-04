"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

interface MobileNavProps {
  currentPage?: string;
  variant?: "light" | "dark";
}

export default function MobileNav({ currentPage, variant = "dark" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/brokerage", label: "Brokerage" },
    { href: "/yacht-search", label: "AI Yacht Search" },
    { href: "/bali", label: "New Bali" },
    { href: "/bali/compare", label: "Compare Bali Models" },
    { href: "/charter", label: "Yacht Charters" },
    { href: "/training", label: "Training" },
    { href: "/try-before-buy", label: "Try Before You Buy" },
    { href: "/charter-ownership", label: "Charter Ownership" },
    { href: "/program-guide", label: "Program Guide & PDFs" },
    { href: "/charter-calculator", label: "ROI Calculator" },
    { href: "/bonus-depreciation", label: "Bonus Depreciation" },
    { href: "/resources", label: "Resources & Downloads" },
    { href: "/#contact", label: "Contact" },
  ];

  const iconColor = variant === "light" ? "text-foreground" : "text-white";
  const hoverBg = variant === "light" ? "hover:bg-muted" : "hover:bg-white/10";

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className={`flex items-center justify-center rounded-lg p-2 ${iconColor} transition-colors ${hoverBg} md:hidden`}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[280px] transform bg-primary shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <Link href="/" onClick={closeMenu}>
              <div className="scale-90">
                <Logo variant="dark" />
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-all ${
                      currentPage === link.label
                        ? "bg-secondary text-primary"
                        : "text-white hover:bg-white/10 hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 p-6">
            <Button
              variant="secondary"
              className="w-full"
              onClick={closeMenu}
              asChild
            >
              <Link href="/#contact">Request an Enquiry</Link>
            </Button>
            <div className="mt-4 space-y-2 text-center text-sm text-white/70">
              <p>+1 786 246 0809</p>
              <p>info@virginislandsyachtbroker.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
