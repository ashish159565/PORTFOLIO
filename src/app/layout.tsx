import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Gajjela - AI/ML Engineer",
  description:
    "AI/ML Engineer and MS AI student at Northeastern (4.0 GPA). Specialized in Transformers, LLMs, Agentic AI, and production MLOps. Co-founder of Twinly. Expertise in PyTorch, FastAPI, Kubernetes, and AWS.",
  keywords: [
    "AI",
    "ML Engineer",
    "Machine Learning",
    "Transformers",
    "LLMs",
    "Agentic AI",
    "MLOps",
    "PyTorch",
    "FastAPI",
    "Kubernetes",
  ],
  openGraph: {
    title: "Ashish Gajjela - Developer Portfolio",
    description: "Exploring my projects and experience in web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
