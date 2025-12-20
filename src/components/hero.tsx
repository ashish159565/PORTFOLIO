"use client";

import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [emailOpen, setEmailOpen] = useState(false);

  const emails = [
    { label: "Northeastern", email: "gajjela.a@northeastern.edu" },
    { label: "Personal", email: "gajjela.ash@gmail.com" },
  ];

  return (
    <Tooltip.Provider>
      <section className="container mx-auto px-4 py-20 md:py-32 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-accent">Ashish</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              ML Engineer & AI Systems Architect. Currently pursuing an MS in
              Artificial Intelligence at Northeastern University (4.0 GPA).
              Specialized in Transformers, LLMs, Agentic AI, and production
              MLOps. Co-founder of Twinly, an AI productivity platform. Building
              intelligent systems that impact at scale.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium flex items-center gap-2 group"
              onMouseEnter={() => setHoveredBtn("work")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              View My Work
              <ArrowRight
                size={18}
                className={`transition-transform duration-300 ${
                  hoveredBtn === "work" ? "translate-x-1" : ""
                }`}
              />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 font-medium flex items-center gap-2"
              onMouseEnter={() => setHoveredBtn("contact")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Get In Touch
              <ArrowRight
                size={18}
                className={`transition-transform duration-300 ${
                  hoveredBtn === "contact" ? "translate-x-1" : ""
                }`}
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://github.com/ashish159565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded text-sm z-50">
                  View my GitHub
                  <Tooltip.Arrow className="fill-accent" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://linkedin.com/in/ashish-gajjela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded text-sm z-50">
                  Connect on LinkedIn
                  <Tooltip.Arrow className="fill-accent" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div>
                  <DropdownMenu.Root
                    open={emailOpen}
                    onOpenChange={setEmailOpen}
                  >
                    <DropdownMenu.Trigger asChild>
                      <button className="p-3 border border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all flex items-center gap-2">
                        <Mail size={20} />
                        <ChevronDown size={14} className="opacity-60" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-muted border border-border rounded-lg shadow-lg z-50 p-2">
                        {emails.map((item, idx) => (
                          <DropdownMenu.Item key={idx} asChild>
                            <a
                              href={`mailto:${item.email}`}
                              className="px-4 py-2 text-sm rounded hover:bg-accent hover:text-white transition-colors cursor-pointer block"
                            >
                              {item.label}
                            </a>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded text-sm z-50">
                  Choose an email to contact
                  <Tooltip.Arrow className="fill-accent" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </div>
      </section>
    </Tooltip.Provider>
  );
}
