"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Sparkles, TrendingUp } from "lucide-react";

interface Skill {
  name: string;
  proficiency: number; // 1-5
}

interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "ML & AI Frameworks",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PyTorch", proficiency: 5 },
        { name: "TensorFlow", proficiency: 5 },
        { name: "Transformers", proficiency: 5 },
        { name: "LangGraph", proficiency: 4 },
        { name: "LangChain", proficiency: 4 },
        { name: "Google ADK", proficiency: 4 },
        { name: "scikit-learn", proficiency: 4 },
        { name: "Keras", proficiency: 4 },
        { name: "ONNX", proficiency: 3 },
        { name: "TensorFlow Lite", proficiency: 4 },
      ],
    },
    {
      category: "Specialized ML Techniques",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Transformers & LLMs", proficiency: 5 },
        { name: "Agentic AI", proficiency: 5 },
        { name: "Embedding Models", proficiency: 4 },
        { name: "Time-Series Modeling", proficiency: 4 },
        { name: "Graph Neural Networks", proficiency: 4 },
        { name: "Neural Architecture Search", proficiency: 4 },
        { name: "PEFT/LoRA", proficiency: 4 },
        { name: "RAG Pipelines", proficiency: 4 },
        { name: "Prompt Engineering", proficiency: 5 },
        { name: "Multi-Agent Systems", proficiency: 5 },
      ],
    },
    {
      category: "MLOps & Cloud Infrastructure",
      icon: "☁️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Docker", proficiency: 5 },
        { name: "Kubernetes", proficiency: 4 },
        { name: "AWS (EC2, Lambda, S3)", proficiency: 4 },
        { name: "Google Cloud (GKE, Cloud Run)", proficiency: 4 },
        { name: "FastAPI", proficiency: 5 },
        { name: "Flask", proficiency: 4 },
        { name: "CI/CD", proficiency: 4 },
        { name: "MLflow", proficiency: 3 },
        { name: "Model Serving", proficiency: 4 },
        { name: "Redis", proficiency: 3 },
        { name: "Cassandra", proficiency: 3 },
        { name: "PySpark", proficiency: 3 },
        { name: "GCP Pub/Sub", proficiency: 3 },
        { name: "Prometheus/Grafana", proficiency: 3 },
      ],
    },
    {
      category: "Data & Core Programming",
      icon: "💻",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", proficiency: 5 },
        { name: "SQL", proficiency: 4 },
        { name: "Bash", proficiency: 4 },
        { name: "TypeScript", proficiency: 3 },
        { name: "Pandas", proficiency: 5 },
        { name: "NumPy", proficiency: 5 },
        { name: "OpenCV", proficiency: 4 },
        { name: "Git", proficiency: 5 },
        { name: "API Design", proficiency: 4 },
        { name: "Agile/Scrum", proficiency: 3 },
      ],
    },
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency === 5) return "from-accent to-accent/80";
    if (proficiency === 4) return "from-accent/80 to-accent/60";
    if (proficiency === 3) return "from-accent/60 to-accent/40";
    return "from-accent/40 to-accent/20";
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency === 5) return "Expert";
    if (proficiency === 4) return "Advanced";
    if (proficiency === 3) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Sparkles className="text-accent" size={28} />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Specialized expertise in AI/ML systems, production infrastructure,
            and advanced techniques
          </p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue="0"
          className="space-y-4"
        >
          {skillCategories.map((category, index) => (
            <Accordion.Item
              key={index}
              value={String(index)}
              className="group border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-accent/[0.02] to-transparent"
            >
              <Accordion.Trigger className="w-full flex items-center gap-4 p-6 hover:bg-accent/5 transition-all duration-300 data-[state=open]:bg-accent/5">
                <div
                  className={`text-3xl p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-15 group-hover:bg-opacity-25 transition-all duration-300`}
                >
                  {category.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.skills.length} core skills
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className="text-accent transition-transform duration-300 group-hover:scale-125"
                />
              </Accordion.Trigger>

              {/* Expanded Content */}
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="p-6 border-t border-border/50 bg-gradient-to-b from-accent/5 to-transparent space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill space-y-3 p-4 rounded-lg border border-accent/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                        style={{
                          animation: `slideInLeft 0.3s ease-out ${
                            skillIndex * 0.05
                          }s both`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-foreground group-hover/skill:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                            {getProficiencyLabel(skill.proficiency)}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden border border-accent/20">
                            <div
                              className={`h-full bg-gradient-to-r ${getProficiencyColor(
                                skill.proficiency
                              )} transition-all duration-700 rounded-full shadow-lg`}
                              style={{
                                width: `${(skill.proficiency / 5) * 100}%`,
                              }}
                            />
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">
                              {skill.proficiency}/5
                            </span>
                            <div className="flex gap-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    i < skill.proficiency
                                      ? "bg-accent"
                                      : "bg-accent/20"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
          {[
            { value: "48+", label: "Core Skills", icon: TrendingUp },
            { value: "4", label: "Categories", icon: Sparkles },
            { value: "5+", label: "Advanced Areas", icon: TrendingUp },
            { value: "15+", label: "Platforms", icon: Sparkles },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative p-5 rounded-lg border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent hover:bg-accent/10 transition-all duration-300 group text-center"
              >
                <div className="flex justify-center mb-2">
                  <Icon
                    className="text-accent/50 group-hover:text-accent group-hover:scale-125 transition-all duration-300"
                    size={20}
                  />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
