"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

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
    if (proficiency === 5) return "bg-accent";
    if (proficiency === 4) return "bg-accent/80";
    if (proficiency === 3) return "bg-accent/60";
    return "bg-accent/40";
  };

  return (
    <section id="skills" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <p className="text-muted-foreground">
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
              className="group border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300"
            >
              <Accordion.Trigger className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-all duration-300 data-[state=open]:bg-muted/30">
                <div
                  className={`text-3xl p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}
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
                  className="text-accent transition-transform duration-300"
                />
              </Accordion.Trigger>

              {/* Expanded Content */}
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="p-6 border border-t-0 border-border rounded-b-lg bg-muted/30 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2 group/skill">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground group-hover/skill:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.proficiency}/5
                          </span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getProficiencyColor(
                              skill.proficiency
                            )} transition-all duration-500 rounded-full`}
                            style={{
                              width: `${(skill.proficiency / 5) * 100}%`,
                            }}
                          ></div>
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
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">48+</div>
            <div className="text-sm text-muted-foreground">Core Skills</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">4</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">5+</div>
            <div className="text-sm text-muted-foreground">Advanced Areas</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
