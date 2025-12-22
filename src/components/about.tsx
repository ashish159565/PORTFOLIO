"use client";

import { useEffect, useState } from "react";
import { Sparkles, Code2, Brain, Zap, GraduationCap } from "lucide-react";

export function About() {
  const [visibleStats, setVisibleStats] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats([true, true, true, true]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-accent" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>

          {/* Bio with better styling */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <div className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300 py-4">
              <div className="absolute -left-3 top-4 w-5 h-5 rounded-full bg-accent border-2 border-background" />
              <p className="text-base leading-relaxed hover:text-foreground transition-colors">
                I'm an AI/ML engineer and Master's student at Northeastern
                University (MS AI, 4.0 GPA) with extensive experience in
                building production-grade machine learning systems. My expertise
                spans Transformers, LLMs, Agentic AI, and distributed systems.
                Previously, I designed time-series fusion transformers and Graph
                Attention Networks as an ML intern at Eizen (Rakuten
                SixthSense), improving anomaly detection accuracy by 18% and
                reducing root cause analysis time by 60%.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300 py-4">
              <div className="absolute -left-3 top-4 w-5 h-5 rounded-full bg-accent border-2 border-background" />
              <p className="text-base leading-relaxed hover:text-foreground transition-colors">
                As Co-founder & CTO of Twinly, I architected distributed
                microservices using FastAPI, Kubernetes, and AWS, orchestrating
                AI workers to automate task management across Gmail, Notion, and
                Slack. I'm passionate about building systems that bridge AI
                research and real-world impact—from edge-based multimodal
                assistants to production MLOps pipelines that scale to 100K+
                daily evaluations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats with icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "ML Projects",
              value: "5+",
              icon: Brain,
              color: "from-blue-500/20 to-blue-600/10",
            },
            {
              label: "Production Systems",
              value: "3",
              icon: Code2,
              color: "from-purple-500/20 to-purple-600/10",
            },
            {
              label: "Accuracy Improvements",
              value: "18%",
              icon: Zap,
              color: "from-amber-500/20 to-amber-600/10",
            },
            {
              label: "GPA (MS AI)",
              value: "4.0",
              icon: GraduationCap,
              color: "from-green-500/20 to-green-600/10",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative p-5 border border-border rounded-xl bg-gradient-to-br ${
                  stat.color
                } hover:border-accent hover:shadow-lg transition-all duration-500 transform cursor-default overflow-hidden ${
                  visibleStats[idx]
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                    <Icon
                      className="text-accent/60 group-hover:text-accent group-hover:scale-125 transition-all duration-300 flex-shrink-0"
                      size={24}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        {/* Quick highlights */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            Key Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Building production-grade ML systems",
              "LLMs & Agentic AI architectures",
              "Distributed systems & cloud infrastructure",
              "Cross-functional team leadership",
              "MLOps & scalable pipelines",
              "Full-stack AI applications",
            ].map((strength, idx) => (
              <div
                key={strength}
                className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 border border-accent/20 hover:border-accent/40 transition-all duration-200 group"
                style={{
                  animation: `slideInLeft 0.3s ease-out ${idx * 0.05}s both`,
                }}
              >
                <span className="text-accent font-bold text-lg">▸</span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {strength}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
