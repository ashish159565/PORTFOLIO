"use client";

import {
  ExternalLink,
  Github,
  X,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/config/projects";

// Show only first 3 projects as featured
const featuredProjects = projects.slice(0, 3);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View all
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <Dialog.Root
              key={index}
              open={selectedProject === index}
              onOpenChange={(open) => setSelectedProject(open ? index : null)}
            >
              <Dialog.Trigger asChild>
                <div className="group border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 animate-in fade-in backdrop-blur-sm" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[90vw] max-h-[90vh] max-w-2xl translate-x-[-50%] translate-y-[-50%] border border-border bg-background rounded-xl shadow-2xl animate-in zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] overflow-hidden flex flex-col">
                  {/* Header with Gradient Background */}
                  <div className="relative flex items-start justify-between gap-4 p-6 border-b border-border/50 bg-gradient-to-r from-accent/5 to-transparent">
                    <div className="flex-1 pr-4">
                      <Dialog.Title className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                        {project.title}
                      </Dialog.Title>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted transition-all duration-200 flex-shrink-0 hover:scale-110"
                        aria-label="Close dialog"
                        title="Close (Esc)"
                      >
                        <X size={18} />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Content - Scrollable */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Zap size={16} className="text-accent" />
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Key Achievements
                          </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {project.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 hover:bg-accent/10 hover:border-accent/20 transition-all duration-200 group"
                              style={{
                                animation: `slideInLeft 0.4s ease-out ${
                                  index * 0.1
                                }s both`,
                              }}
                            >
                              <CheckCircle
                                size={18}
                                className="text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                              />
                              <span className="text-sm text-muted-foreground font-medium">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 text-xs font-semibold bg-accent/10 text-accent rounded-full border border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:shadow-md transition-all duration-200 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer with Actions */}
                  <div className="border-t border-border/50 p-6 bg-gradient-to-r from-muted/50 to-transparent">
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg transition-all duration-200 font-medium border border-accent/20 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-200 text-accent font-medium border border-accent/30 hover:border-accent/50 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
}
