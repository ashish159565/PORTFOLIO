"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center text-muted-foreground text-sm">
          <p>© {currentYear} Ashish Gajjela. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Radix UI</p>
        </div>
      </div>
    </footer>
  );
}
