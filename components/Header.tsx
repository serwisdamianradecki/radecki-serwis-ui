"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

const navigation = [
  { name: "Start", href: "#start" },
  { name: "Usługi", href: "#uslugi" },
  { name: "Cennik", href: "#cennik" },
  { name: "O mnie", href: "#o-mnie" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phone = process.env.NEXT_PUBLIC_PHONE || "+48 123 456 789";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="section-container py-4" aria-label="Nawigacja główna">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#start"
            className="text-xl font-bold text-primary"
            onClick={(e) => handleNavClick(e, "#start")}
          >
            Damian Radecki - Serwis IT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-main hover:text-primary transition-colors duration-200"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${phone}`}
              className="text-primary hover:text-primary-600 transition-colors duration-200"
              aria-label="Zadzwoń"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <Button href="#kontakt" size="sm">
              Umów serwis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-main hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border-soft pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-main hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 btn-hover bg-primary text-button-text hover:bg-primary-600 active:bg-primary-700 focus:ring-primary shadow-md px-6 py-3 text-base w-full"
                onClick={(e) => handleNavClick(e, "#kontakt")}
              >
                Umów serwis
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
