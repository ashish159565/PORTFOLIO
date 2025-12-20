"use client";

import { useEffect, useState } from "react";

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
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm an AI/ML engineer and Master's student at Northeastern
              University (MS AI, 4.0 GPA) with extensive experience in building
              production-grade machine learning systems. My expertise spans
              Transformers, LLMs, Agentic AI, and distributed systems.
              Previously, I designed time-series fusion transformers and Graph
              Attention Networks as an ML intern at Eizen (Rakuten SixthSense),
              improving anomaly detection accuracy by 18% and reducing root
              cause analysis time by 60%.
            </p>
            <p>
              As Co-founder & CTO of Twinly, I architected distributed
              microservices using FastAPI, Kubernetes, and AWS, orchestrating AI
              workers to automate task management across Gmail, Notion, and
              Slack. I'm passionate about building systems that bridge AI
              research and real-world impact—from edge-based multimodal
              assistants to production MLOps pipelines that scale to 100K+ daily
              evaluations.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {[
            { label: "ML Projects", value: "5+" },
            { label: "Production Systems", value: "3" },
            { label: "Accuracy Improvements", value: "18%" },
            { label: "GPA (MS AI)", value: "4.0" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-4 border border-border rounded-lg bg-muted/30 hover:border-accent hover:bg-muted/50 transition-all duration-500 transform ${
                visibleStats[idx]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="text-2xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
