"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                About
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI/ML engineer building intelligent systems at the intersection
                of research and real-world impact.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#projects"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                Connect
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ashish159565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-200 text-muted-foreground hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/ashish-gajjela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-200 text-muted-foreground hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:gajjela.a@northeastern.edu"
                  className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-200 text-muted-foreground hover:text-accent"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright and bottom info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                © {currentYear} Ashish Gajjela. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Built with{" "}
                <span className="text-accent font-semibold">Next.js</span>,{" "}
                <span className="text-accent font-semibold">TypeScript</span>,
                and{" "}
                <span className="text-accent font-semibold">Tailwind CSS</span>
              </p>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-200 text-muted-foreground hover:text-accent w-fit sm:w-auto justify-center"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <span className="text-xs font-medium">Back to Top</span>
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
