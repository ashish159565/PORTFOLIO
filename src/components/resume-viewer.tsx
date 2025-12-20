"use client";

import { Download } from "lucide-react";

export function ResumeViewer() {
  return (
    <section id="resume" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-3xl font-bold">Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium w-fit"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* Resume Viewer - Embedded PDF */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              📄 Download my resume to view it, or open it in your browser's PDF
              viewer below.
            </p>
          </div>
          <div className="bg-background w-full h-[600px] md:h-[800px] flex items-center justify-center">
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-full"
              title="Resume PDF"
            ></iframe>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          💡 Tip: Click the download button above to save a copy of my resume to
          your device.
        </p>
      </div>
    </section>
  );
}
