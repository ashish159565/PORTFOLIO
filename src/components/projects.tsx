"use client";

import { ExternalLink, Github, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "ADK Driven Multi-Agent Conversational AI System",
    description:
      "Architected a modular agentic conversational system using ADK, enabling structured multi-agent coordination, contextual memory routing, and adaptive tool invocation. Integrated the Qwen large language model into multi-agent reasoning and tool-augmented workflows, improving dialogue accuracy by 25%.",
    tags: ["Python", "ADK", "Qwen", "Multi-Agent Systems", "LLMs"],
    github: "https://github.com/originHub-pvt/",
  },
  {
    title: "Edge Based Multimodal Smart Lock System",
    description:
      "Constructed a FaceNet-powered facial recognition module on Raspberry Pi, achieving 92% accuracy across 1,000+ real-world edge authentications. Integrated gesture recognition with OpenCV and multimodal fusion, improving lock reliability by 28% under varying lighting and occlusion conditions.",
    tags: ["TensorFlow Lite", "Raspberry Pi", "OpenCV", "FaceNet", "Edge AI"],
    github: "https://github.com/ashish159565/gesture-facial-unlock-system",
  },
  {
    title: "Multimodal Voice & Sign Language Personal Assistant",
    description:
      "Built a voice and sign-language assistant achieving 87% command accuracy across 2,000+ test trials using TensorFlow and OpenCV. Automated 15+ system workflows for scheduling, application launching, and OS control, improving task completion efficiency by 25%.",
    tags: ["TensorFlow", "Porcupine", "OpenCV", "NLP", "Computer Vision"],
    github: "https://github.com/ashish159565/Sign-Based-Personal-Assistant",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>

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
                <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 animate-in fade-in" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg rounded-lg animate-in zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Dialog.Title className="text-2xl font-bold mb-2">
                        {project.title}
                      </Dialog.Title>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <Dialog.Close asChild>
                      <button className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted transition-colors">
                        <X size={16} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-accent"
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
                        className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-accent"
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
      </div>
    </section>
  );
}
