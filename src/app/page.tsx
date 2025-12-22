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
    <main className="min-h-screen bg-background text-foreground relative">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -40px) rotate(120deg); }
          66% { transform: translate(-20px, 30px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(180deg); }
          33% { transform: translate(-40px, 30px) rotate(300deg); }
          66% { transform: translate(25px, -35px) rotate(60deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(90deg); }
          33% { transform: translate(35px, 25px) rotate(210deg); }
          66% { transform: translate(-30px, -25px) rotate(330deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          33% { transform: translate(-25px, 35px) rotate(165deg); }
          66% { transform: translate(30px, -20px) rotate(285deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(270deg); }
          33% { transform: translate(40px, -25px) rotate(30deg); }
          66% { transform: translate(-35px, 30px) rotate(150deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) rotate(135deg); }
          33% { transform: translate(-30px, -30px) rotate(255deg); }
          66% { transform: translate(35px, 25px) rotate(15deg); }
        }
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) rotate(225deg); }
          33% { transform: translate(25px, 35px) rotate(345deg); }
          66% { transform: translate(-25px, -30px) rotate(105deg); }
        }
        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) rotate(315deg); }
          33% { transform: translate(-35px, 20px) rotate(75deg); }
          66% { transform: translate(30px, -30px) rotate(195deg); }
        }
        @keyframes float9 {
          0%, 100% { transform: translate(0, 0) rotate(60deg); }
          33% { transform: translate(20px, -30px) rotate(180deg); }
          66% { transform: translate(-25px, 20px) rotate(300deg); }
        }
        @keyframes float10 {
          0%, 100% { transform: translate(0, 0) rotate(120deg); }
          33% { transform: translate(-30px, 25px) rotate(240deg); }
          66% { transform: translate(30px, -25px) rotate(360deg); }
        }
        @keyframes float11 {
          0%, 100% { transform: translate(0, 0) rotate(180deg); }
          33% { transform: translate(25px, 30px) rotate(300deg); }
          66% { transform: translate(-35px, -20px) rotate(60deg); }
        }
        @keyframes float12 {
          0%, 100% { transform: translate(0, 0) rotate(240deg); }
          33% { transform: translate(-20px, -35px) rotate(0deg); }
          66% { transform: translate(35px, 20px) rotate(120deg); }
        }
        @keyframes float13 {
          0%, 100% { transform: translate(0, 0) rotate(300deg); }
          33% { transform: translate(35px, -20px) rotate(120deg); }
          66% { transform: translate(-30px, 30px) rotate(240deg); }
        }
        @keyframes float14 {
          0%, 100% { transform: translate(0, 0) rotate(30deg); }
          33% { transform: translate(-25px, -25px) rotate(150deg); }
          66% { transform: translate(25px, 35px) rotate(270deg); }
        }
        @keyframes float15 {
          0%, 100% { transform: translate(0, 0) rotate(150deg); }
          33% { transform: translate(30px, 20px) rotate(270deg); }
          66% { transform: translate(-20px, -30px) rotate(30deg); }
        }
      `}</style>
      {/* Animated gradient blobs - Premium background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Ultra-smooth gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-40" />

        {/* Top left - Accent blob */}
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/30 via-accent/15 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float1 16s ease-in-out infinite",
            filter: "drop-shadow(0 0 20px rgba(240, 84, 60, 0.1))",
          }}
        />

        {/* Bottom right - Accent blob */}
        <div
          className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tl from-accent/25 via-accent/12 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float2 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 15px rgba(240, 84, 60, 0.08))",
          }}
        />

        {/* Center-right - Blue blob */}
        <div
          className="absolute top-1/3 -right-20 w-64 h-64 bg-gradient-to-l from-blue-500/20 via-blue-500/8 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float3 18s ease-in-out infinite",
            filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.08))",
          }}
        />

        {/* Center - Purple blob */}
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/12 via-purple-500/6 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float4 16s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(168, 85, 247, 0.06))",
          }}
        />

        {/* Top right - Indigo blob */}
        <div
          className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-b from-indigo-500/12 via-indigo-500/6 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float5 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(99, 102, 241, 0.06))",
          }}
        />

        {/* Bottom left - Accent blob */}
        <div
          className="absolute bottom-1/4 left-10 w-56 h-56 bg-gradient-to-tr from-accent/15 via-accent/8 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float6 18s ease-in-out infinite",
            filter: "drop-shadow(0 0 12px rgba(240, 84, 60, 0.06))",
          }}
        />

        {/* Center - Cyan blob */}
        <div
          className="absolute top-2/3 left-1/2 w-60 h-60 bg-gradient-to-tl from-cyan-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float7 15s ease-in-out infinite",
            filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.05))",
          }}
        />

        {/* Top center - Pink blob */}
        <div
          className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-b from-pink-500/8 via-pink-500/4 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float8 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.05))",
          }}
        />

        {/* Right side - Accent accent blob */}
        <div
          className="absolute top-1/4 right-20 w-56 h-56 bg-gradient-to-l from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float9 15s ease-in-out infinite",
            filter: "drop-shadow(0 0 10px rgba(240, 84, 60, 0.06))",
          }}
        />

        {/* Left side - Blue blob */}
        <div
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl"
          style={{
            animation: "float10 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.05))",
          }}
        />

        {/* Bottom center - Purple blob */}
        <div
          className="absolute bottom-1/3 left-1/3 w-52 h-52 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl"
          style={{
            animation: "float11 16s ease-in-out infinite",
            filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.04))",
          }}
        />

        {/* Top left - Cyan blob */}
        <div
          className="absolute top-40 left-1/4 w-56 h-56 bg-gradient-to-br from-cyan-500/8 via-cyan-500/4 to-transparent rounded-full blur-2xl"
          style={{
            animation: "float12 18s ease-in-out infinite",
            filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.04))",
          }}
        />

        {/* Right center - Pink blob */}
        <div
          className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-l from-pink-500/9 via-pink-500/4 to-transparent rounded-full blur-2xl"
          style={{
            animation: "float13 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.04))",
          }}
        />

        {/* Center top - Indigo blob */}
        <div
          className="absolute top-1/3 left-2/3 w-52 h-52 bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent rounded-full blur-2xl"
          style={{
            animation: "float14 15s ease-in-out infinite",
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.04))",
          }}
        />

        {/* Bottom right center - Accent blob */}
        <div
          className="absolute bottom-1/2 right-1/4 w-56 h-56 bg-gradient-to-tl from-accent/12 via-accent/6 to-transparent rounded-full blur-3xl"
          style={{
            animation: "float15 17s ease-in-out infinite",
            filter: "drop-shadow(0 0 10px rgba(240, 84, 60, 0.05))",
          }}
        />

        {/* Refined grid overlay with reduced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent-rgb),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent-rgb),0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-15" />

        {/* Radial gradient vignette overlay */}
        <div
          className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/20 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 100% at 50% 0%, transparent 0%, rgba(var(--background-rgb), 0.1) 100%)",
          }}
        />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeViewer />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
