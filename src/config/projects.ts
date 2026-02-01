export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "ADK Driven Multi-Agent Conversational AI System",
    description:
      "Architected a modular agentic conversational system using ADK, enabling structured multi-agent coordination, contextual memory routing, and adaptive tool invocation. Integrated the Qwen large language model into multi-agent reasoning and tool-augmented workflows, improving dialogue accuracy by 25%.",
    tags: ["Python", "ADK", "Qwen", "Multi-Agent Systems", "LLMs"],
    github: "https://github.com/originHub-pvt/",
    highlights: [
      "25% improvement in dialogue accuracy",
      "Multi-agent coordination system",
      "Adaptive tool invocation framework",
    ],
  },
  {
    title: "Edge Based Multimodal Smart Lock System",
    description:
      "Constructed a FaceNet-powered facial recognition module on Raspberry Pi, achieving 92% accuracy across 1,000+ real-world edge authentications. Integrated gesture recognition with OpenCV and multimodal fusion, improving lock reliability by 28% under varying lighting and occlusion conditions.",
    tags: ["TensorFlow Lite", "Raspberry Pi", "OpenCV", "FaceNet", "Edge AI"],
    github: "https://github.com/ashish159565/gesture-facial-unlock-system",
    highlights: [
      "92% accuracy on 1,000+ authentications",
      "Edge AI implementation on Raspberry Pi",
      "28% improvement in lock reliability",
    ],
  },
  {
    title: "Multimodal Voice & Sign Language Personal Assistant",
    description:
      "Built a voice and sign-language assistant achieving 87% command accuracy across 2,000+ test trials using TensorFlow and OpenCV. Automated 15+ system workflows for scheduling, application launching, and OS control, improving task completion efficiency by 25%.",
    tags: ["TensorFlow", "Porcupine", "OpenCV", "NLP", "Computer Vision"],
    github: "https://github.com/ashish159565/Sign-Based-Personal-Assistant",
    highlights: [
      "87% command accuracy across 2,000+ trials",
      "15+ automated system workflows",
      "25% improvement in task efficiency",
    ],
  },
];
