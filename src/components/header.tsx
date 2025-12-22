"use client";

import Link from "next/link";
import { Menu, Moon, Sun, Sparkles } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(isDarkMode);

      // Handle scroll event for better sticky styling
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof document !== "undefined") {
      if (isDark) {
        document.documentElement.style.colorScheme = "light";
      } else {
        document.documentElement.style.colorScheme = "dark";
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-[1000] w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/50 bg-background/85 shadow-lg backdrop-blur-xl"
          : "border-border/30 bg-background/60 shadow-sm backdrop-blur-md"
      } supports-[backdrop-filter]:bg-background/60`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
        >
          <div className="p-1.5 bg-gradient-to-br from-accent to-accent/80 rounded-lg group-hover:scale-110 transition-transform duration-200">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="hidden sm:inline">AG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="#about"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            Skills
          </Link>
          <Link
            href="#resume"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="px-3 py-2 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
          >
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 hover:bg-accent/10 rounded-lg transition-all duration-200 text-muted-foreground hover:text-accent"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-accent/10 rounded-lg transition-all duration-200 text-muted-foreground hover:text-accent"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <button className="p-2 hover:bg-accent/10 rounded-lg transition-all duration-200">
                <Menu size={24} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 md:hidden" />
              <Dialog.Content className="fixed top-16 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden animate-in slide-in-from-top">
                <div className="container mx-auto px-4 py-6 flex flex-col gap-2 max-w-4xl">
                  <Dialog.Close asChild>
                    <Link
                      href="#about"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      About
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#experience"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      Experience
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#projects"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      Projects
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#skills"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      Skills
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#resume"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      Resume
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#contact"
                      className="px-4 py-2.5 text-sm font-medium hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200 block"
                    >
                      Contact
                    </Link>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}
