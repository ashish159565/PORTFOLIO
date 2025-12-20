"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(isDarkMode);
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-4xl">
        <Link
          href="/"
          className="font-semibold text-lg hover:text-accent transition-colors"
        >
          AG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm hover:text-accent transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm hover:text-accent transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#resume"
            className="text-sm hover:text-accent transition-colors"
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="text-sm hover:text-accent transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Menu size={24} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 md:hidden" />
              <Dialog.Content className="fixed top-16 left-0 right-0 z-50 border-t border-border bg-background md:hidden animate-in slide-in-from-top">
                <div className="container mx-auto px-4 py-4 flex flex-col gap-4 max-w-4xl">
                  <Dialog.Close asChild>
                    <Link
                      href="#about"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      About
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#experience"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      Experience
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#projects"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      Projects
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#skills"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      Skills
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#resume"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      Resume
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link
                      href="#contact"
                      className="text-sm hover:text-accent transition-colors"
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
