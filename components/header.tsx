"use client"

import { FluxlyLogo } from "./fluxly-logo"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <FluxlyLogo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-sm font-medium text-[#333333] hover:text-[#4ABDAC] transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-[#333333] hover:text-[#4ABDAC] transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium text-[#333333] hover:text-[#4ABDAC] transition-colors duration-200"
              >
                About
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-[#333333] hover:text-[#4ABDAC] hover:bg-[#4ABDAC]/10 transition-all duration-200"
              >
                Sign in
              </Button>
              <Button className="bg-[#4ABDAC] hover:bg-[#4ABDAC]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                Try for free
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ABDAC]/20"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-[#333333] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-[#333333] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-[#333333] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <nav className="px-6 py-8">
            {/* Navigation Links */}
            <div className="space-y-1 mb-8">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#", label: "About" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 text-lg font-medium text-[#333333] hover:text-[#4ABDAC] hover:bg-[#4ABDAC]/5 rounded-xl transition-all duration-200 transform hover:translate-x-1 ${
                    isMenuOpen ? "animate-slide-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className={`space-y-4 ${isMenuOpen ? "animate-slide-in" : ""}`} style={{ animationDelay: "300ms" }}>
              <Button
                variant="ghost"
                className="w-full justify-center text-[#333333] hover:text-[#4ABDAC] hover:bg-[#4ABDAC]/10 transition-all duration-200 py-3 text-base font-medium rounded-xl"
                onClick={toggleMenu}
              >
                Sign in
              </Button>
              <Button
                className="w-full bg-[#4ABDAC] hover:bg-[#4ABDAC]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-3 text-base font-medium rounded-xl transform hover:scale-[1.02]"
                onClick={toggleMenu}
              >
                Try for free
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-[#4ABDAC] rounded-full animate-pulse"></div>
                <span>Ready to flow with us?</span>
                <div className="w-2 h-2 bg-[#4ABDAC] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
