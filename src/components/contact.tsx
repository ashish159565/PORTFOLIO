"use client";

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
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
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl">
            I'm always interested in collaborating on AI/ML projects, discussing
            research, or exploring opportunities to build impactful systems.
            Feel free to reach out via email or connect with me on LinkedIn to
            discuss ideas!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 pt-8">
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
                    className="group border border-border rounded-lg p-6 hover:border-accent hover:bg-muted/50 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content className="w-64 rounded-lg border border-border bg-muted p-4 shadow-lg z-50">
                    <p className="text-sm text-foreground mb-3">
                      {contact.hint}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <span>
                        Click to {contact.title === "Email" ? "email" : "visit"}
                      </span>
                      <ExternalLink size={12} />
                    </div>
                    <HoverCard.Arrow className="fill-border" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="border border-border rounded-lg p-8 bg-muted/30 mt-12">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
