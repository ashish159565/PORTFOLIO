"use client";

import { projects } from "@/config/projects";
import { Header } from "@/components/header";
import { ExternalLink, Github, Zap, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground relative">
        {/* Header Background */}
        <div className="absolute inset-0 -z-10 h-[400px] overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of my work in AI, edge computing, and full-stack
              development. Each project represents a journey of innovation and
              problem-solving.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid gap-6">
            {projects.map((project, index) => (
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

                    <p className="text-muted-foreground mb-4 line-clamp-3">
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

                    <div className="mt-4 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform">
                      View details →
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

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                            <Zap size={16} className="text-accent" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map(
                              (highlight, highlightIndex) => (
                                <li
                                  key={highlightIndex}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <CheckCircle
                                    size={16}
                                    className="text-accent flex-shrink-0 mt-0.5"
                                  />
                                  <span>{highlight}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer with Links */}
                    <div className="flex gap-2 p-6 border-t border-border/50 bg-gradient-to-r from-accent/5 to-transparent">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-105"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-200"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16 max-w-4xl border-t border-border/50">
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">
                {projects.length}
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                Featured Projects
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">
                {new Set(projects.flatMap((p) => p.tags)).size}
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                Technologies Used
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">100%</div>
              <p className="text-muted-foreground text-sm mt-2">Completed</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
