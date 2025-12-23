"use client";

import { Download, FileText, ExternalLink, Sparkles } from "lucide-react";

export function ResumeViewer() {
  return (
    <section id="resume" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-accent" size={28} />
            <h2 className="text-4xl font-bold">Resume</h2>
          </div>
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-200 font-semibold border border-accent/30 hover:border-accent/50"
            >
              <ExternalLink
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
              View Online
            </a>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <Download
                size={18}
                className="group-hover:animate-bounce"
                style={{ animationDuration: "1s" }}
              />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Viewer Container */}
        <div className="rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent/5 to-transparent">
          {/* Info Banner */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border/50 p-5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <FileText size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  Professional Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  View my complete resume below. For the best experience,{" "}
                  <a
                    href="/resume.pdf"
                    download
                    className="text-accent font-semibold hover:underline"
                  >
                    download the PDF
                  </a>{" "}
                  or open it in your browser's viewer.
                </p>
              </div>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-background w-full h-[600px] md:h-[800px] flex items-center justify-center relative overflow-hidden">
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-full border-none"
              title="Resume PDF"
              loading="lazy"
            />
            {/* Loading overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none opacity-0 hover:opacity-0 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
