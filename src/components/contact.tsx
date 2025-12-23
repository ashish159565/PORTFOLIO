"use client";

import { Mail, Linkedin, Github, Sparkles, ArrowRight } from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { ContactForm } from "./contact-form";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      title: "Email (Northeastern)",
      value: "gajjela.a@northeastern.edu",
      href: "mailto:gajjela.a@northeastern.edu",
      hint: "Send me a direct message about collaboration or opportunities",
    },
    {
      icon: Mail,
      title: "Email (Personal)",
      value: "gajjela.ash@gmail.com",
      href: "mailto:gajjela.ash@gmail.com",
      hint: "Reach out via personal email for general inquiries",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/ashish-gajjela",
      href: "https://linkedin.com/in/ashish-gajjela",
      hint: "Connect with me to stay updated on my latest projects and insights",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ashish159565",
      href: "https://github.com/ashish159565",
      hint: "Check out my projects, contributions, and open-source work",
    },
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="flex items-center gap-3">
            <Sparkles className="text-accent" size={28} />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            I'm always interested in collaborating on AI/ML projects, discussing
            research, or exploring opportunities to build impactful systems.
            Feel free to reach out via email or connect with me on LinkedIn!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-5 pt-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <HoverCard.Root key={index}>
                <HoverCard.Trigger asChild>
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-accent/[0.03] to-transparent hover:from-accent/[0.08] hover:to-accent/[0.02] overflow-hidden"
                  >
                    {/* Animated gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                        <Icon
                          size={24}
                          className="text-accent group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100"
                      />
                    </div>
                  </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content className="w-64 rounded-lg border border-border bg-background p-4 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
                    <p className="text-sm text-foreground mb-3 font-medium">
                      {contact.hint}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-accent font-semibold">
                      <span>
                        Click to{" "}
                        {contact.title.includes("Email") ? "email" : "visit"}
                      </span>
                      <ArrowRight size={14} />
                    </div>
                    <HoverCard.Arrow className="fill-border" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="border-2 border-accent/30 rounded-xl p-8 bg-gradient-to-br from-accent/[0.08] via-accent/[0.04] to-transparent mt-12 hover:border-accent/50 transition-all duration-300">
          <div className="space-y-2 mb-6">
            <h3 className="text-3xl font-bold">Send me a message</h3>
            <p className="text-sm text-muted-foreground">
              I'll get back to you as soon as possible
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
