"use client";

import {
  Briefcase,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  website?: string;
}

const experiences: Experience[] = [
  {
    title: "Co-Founder & CTO",
    company: "Twinly",
    website: "https://twinly.net/",
    period: "March 2025 – July 2025",
    location: "Boston, MA",
    highlights: [
      "Co-founded an AI-powered productivity platform automating task management across Gmail, Notion, and Slack using secure API integrations",
      "Architected distributed microservices using FastAPI, PostgreSQL, AWS EC2/Lambda/S3, and asynchronous event-driven workflows, achieving 98% uptime",
      "Configured OAuth2 and JWT-based authentication with CI/CD-enforced security checks, audit logging, and telemetry dashboards (Prometheus/Grafana)",
      "Orchestrated and fine-tuned Phi-3 agentic AI workers with telemetry-driven feedback loops, improving task relevance and multi-step action reliability by 30%",
      "Led cross-functional team of four engineers and designers through agile sprints, delivering MVP three weeks early",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Eizen (Contractor for Rakuten SixthSense Cognitive AI)",
    website: "https://eizen.ai/",
    period: "January 2024 – November 2024",
    location: "Hyderabad, India",
    highlights: [
      "Designed and trained a time-series fusion transformer enhanced with Neural Architecture Search (NAS), improving anomaly detection accuracy by 18%",
      "Developed a Graph Attention Network (GAT) to model cross-entity dependencies, reducing root cause analysis time by 60%",
      "Assembled containerized inference services using FastAPI and Kubernetes on GCP, enabling 100K+ anomaly evaluations/day with robust CI/CD pipelines",
      "Architected a multi-agent conversational system using LangGraph, orchestrating tool-using agents to retrieve and reason over real-time observability data",
    ],
  },
  {
    title: "Admin & Digital Lead",
    company: "TEDxVBIT",
    period: "December 2023 – March 2024",
    location: "Hyderabad, India",
    highlights: [
      "Led end-to-end event operations for TEDxVBIT, coordinating logistics, marketing, and speaker management for an audience of 100+ attendees",
      "Designed and launched the official TEDxVBIT website from scratch using HTML, CSS, JavaScript, achieving a 25% increase in online registrations",
      "Managed website content, implemented SEO best practices, and integrated event ticketing/payment systems",
      "Collaborated with design and media teams to deliver branded digital assets, ensuring consistent visual identity across online and offline platforms",
    ],
  },
  {
    title: "Programming Lead",
    company: "coding.Studio( ); (Student Club)",
    website: "https://www.codingstudio.co.in/",
    period: "June 2023 – May 2024",
    location: "Hyderabad, India",
    highlights: [
      "Led a team of 11 developers to design and build scalable web applications using TypeScript, React, and RESTful APIs",
      "Guided architecture decisions and applied best practices in Git version control, code reviews, and CI/CD pipelines, improving code quality and deployment stability by 30%",
      "Managed project planning, sprint execution, and stakeholder communication under Agile workflows, delivering features on time and meeting client requirements",
      "Mentored junior developers in full-stack development and advanced debugging, strengthening team capability and collaboration",
      "Directed codebase refactoring efforts, cutting technical debt by 25% and improving maintainability",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Digital Motives Technologies",
    period: "February 2023 – June 2023",
    location: "Hyderabad, India",
    highlights: [
      "Identified and curated high-quality training datasets through targeted online searches, ensuring data relevance and diversity",
      "Implemented and trained 3 ML algorithms (Random Forest, Support Vector Machine, XGBoost), achieving F1 scores above 0.85",
      "Enhanced existing ML frameworks and optimized model pipelines to improve accuracy and reduce training time",
      "Performed model testing, validation, and tuning to ensure robust and reliable deployment-ready systems",
    ],
  },
  {
    title: "SDE II | Full-Stack Development",
    company: "coding.Studio( ); (Student Club)",
    website: "https://www.codingstudio.co.in/",
    period: "August 2022 – June 2023",
    location: "Hyderabad, India",
    highlights: [
      "Designed, developed, and deployed scalable web applications using TypeScript, React, Node.js, and SQL, serving 7,500+ active users",
      "Managed the full software development lifecycle — from feature planning and architecture to production deployment — achieving 95% on-time delivery across sprints",
      "Implemented unit and integration testing strategies, improving pre-deployment bug detection by 30%",
      "Optimized backend data processing logic and SQL queries, cutting data fetch latency by 40% in high-traffic modules",
      "Collaborated with product managers and UI/UX designers in an Agile environment to deliver user-focused features with rapid feedback cycles",
    ],
  },
  {
    title: "Generative AI Developer",
    company: "EpsilonPi (Student Club)",
    period: "August 2022 – June 2023",
    location: "Hyderabad, India",
    highlights: [
      "Prototyped and benchmarked LLM-driven conversational AI systems using FLAN-T5 and HuggingFace Transformers, improving assistant usability by 20%",
      "Systematized reusable pipelines for data preprocessing, fine-tuning, and deployment using Python and NLTK, reducing end-to-end prototyping time by 30%",
      "Investigated dialogue generation behavior in LLMs, uncovering hallucination patterns and fine-tuning constraints",
    ],
  },
  {
    title: "Penetration Testing Intern",
    company: "TalaKunchi Networks Pvt Ltd",
    period: "January 2022 – May 2022",
    location: "Hyderabad, India",
    highlights: [
      "Conducted vulnerability scans on client systems, identifying and documenting 50+ security weaknesses for remediation",
      "Performed penetration testing on networks and web applications to assess exploitable vulnerabilities",
      "Analyzed scan results, prioritized security gaps based on severity, and worked with engineering teams to implement fixes",
      "Utilized tools such as Nmap, Burp Suite, OWASP ZAP, and Metasploit to test security controls and strengthen system defenses",
    ],
  },
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-accent" size={24} />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-4 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden sm:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="group relative sm:pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform duration-300 hidden sm:block" />

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left p-6 border border-border rounded-xl bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.02] hover:from-accent/[0.08] hover:to-accent/[0.05] hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon - visible on mobile */}
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 flex-shrink-0 sm:hidden">
                    <Briefcase size={20} className="text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title and Company */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h3>
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent font-semibold hover:underline flex items-center gap-1 w-fit group/link text-sm sm:text-base"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                            <ExternalLink
                              size={14}
                              className="group-hover/link:translate-x-0.5 transition-transform"
                            />
                          </a>
                        ) : (
                          <p className="text-accent font-semibold text-sm sm:text-base">
                            {exp.company}
                          </p>
                        )}
                      </div>

                      {/* Meta info - Period and Location */}
                      <div className="text-xs sm:text-sm text-muted-foreground flex flex-col gap-1.5 sm:text-right flex-shrink-0">
                        <div className="flex items-center gap-1.5 sm:justify-end">
                          <Calendar size={14} className="text-accent/70" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:justify-end">
                          <MapPin size={14} className="text-accent/70" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Preview - First highlight */}
                    <div className="flex items-start gap-2 mt-2 p-3 rounded-lg bg-accent/5 group-hover:bg-accent/10 transition-colors">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0 text-lg">
                        ▸
                      </span>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                        {exp.highlights[0]}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    {exp.highlights.length > 1 && (
                      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            expandedIndex === index ? "rotate-180" : ""
                          }`}
                        />
                        <span className="font-medium">
                          {expandedIndex === index
                            ? "Show less"
                            : `Show ${exp.highlights.length - 1} more`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {expandedIndex === index && exp.highlights.length > 1 && (
                <div className="mt-2 mx-6 px-4 py-4 border border-accent/20 rounded-lg bg-gradient-to-b from-accent/[0.05] to-transparent space-y-3 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-3">
                    {exp.highlights.slice(1).map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 group/item"
                        style={{
                          animation: `slideInLeft 0.3s ease-out ${
                            (idx + 1) * 0.05
                          }s both`,
                        }}
                      >
                        <span className="text-accent font-bold flex-shrink-0 text-lg pt-0.5">
                          ▸
                        </span>
                        <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
