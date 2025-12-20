"use client";

import { Briefcase, ExternalLink } from "lucide-react";

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
  return (
    <section id="experience" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg mt-1">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent font-medium hover:underline flex items-center gap-1 w-fit"
                        >
                          {exp.company}
                          <ExternalLink size={16} className="text-accent" />
                        </a>
                      ) : (
                        <p className="text-accent font-medium">{exp.company}</p>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
