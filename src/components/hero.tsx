"use client";

import { Github, Linkedin, Mail, ArrowRight, ChevronDown, Sparkles, Zap } from "lucide-react";
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
      <section className="container mx-auto px-4 py-20 md:py-40 max-w-4xl relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none opacity-50 animate-pulse animation-delay-2000" />

        <div className="space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 w-fit hover:bg-accent/20 transition-colors duration-300 animate-in fade-in slide-in-from-top-5 duration-500">
            <Sparkles size={16} className="text-accent animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm font-semibold text-accent">AI Engineer & ML Architect</span>
          </div>

          {/* Main heading with gradient */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent animate-in fade-in duration-1000 delay-200">
                Ashish
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
          </div>

          {/* Description with better typography */}
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Building intelligent systems at the intersection of machine learning research and real-world impact.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              <span className="font-semibold text-foreground">MS in Artificial Intelligence</span> at Northeastern University (4.0 GPA) | 
              <span className="font-semibold text-foreground"> Co-founder & CTO</span> at Twinly | 
              <span className="font-semibold text-foreground"> Specializing in</span> Transformers, LLMs, Agentic AI & Production MLOps
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-8 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-500">
            <a
              href="#projects"
              className="group px-6 py-3 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              onMouseEnter={() => setHoveredBtn("work")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <Zap size={18} className="group-hover:animate-pulse" />
              View My Work
              <ArrowRight
                size={18}
                className={`transition-transform duration-300 ${
                  hoveredBtn === "work" ? "translate-x-2" : ""
                }`}
              />
            </a>
            <a
              href="#contact"
              className="group px-6 py-3 border-2 border-accent rounded-lg hover:bg-accent hover:text-white text-accent transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 active:scale-95"
              onMouseEnter={() => setHoveredBtn("contact")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Get In Touch
              <ArrowRight
                size={18}
                className={`transition-transform duration-300 ${
                  hoveredBtn === "contact" ? "translate-x-2" : ""
                }`}
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-700">
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://github.com/ashish159565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded-lg text-sm z-50 font-semibold">
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
                  className="group p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded-lg text-sm z-50 font-semibold">
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
                      <button className="group p-3 border-2 border-border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center gap-2 hover:scale-110 active:scale-95">
                        <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-300 ${
                            emailOpen ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-background border-2 border-border rounded-lg shadow-xl z-50 p-2 animate-in fade-in zoom-in-95 duration-200">
                        {emails.map((item, idx) => (
                          <DropdownMenu.Item key={idx} asChild>
                            <a
                              href={`mailto:${item.email}`}
                              className="px-4 py-2.5 text-sm rounded hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer block font-medium"
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
                <Tooltip.Content className="bg-accent text-white px-3 py-2 rounded-lg text-sm z-50 font-semibold">
                  Choose an email
                  <Tooltip.Arrow className="fill-accent" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 flex justify-center animate-bounce">
            <ChevronDown size={24} className="text-accent/50" />
          </div>
        </div>
      </section>
    </Tooltip.Provider>
  );
}
