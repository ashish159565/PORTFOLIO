import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { ResumeViewer } from "@/components/resume-viewer";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top left blob */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Bottom right blob */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Center floating blob */}
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Additional accent blob */}
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ResumeViewer />
      <Contact />
      <Footer />
    </main>
  );
}
