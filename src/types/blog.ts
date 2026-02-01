import React from "react";

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD format
  author: string;
  excerpt: string;
  readingTime: number;
  tags: string[];
}

export interface BlogPost extends BlogMetadata {
  content: React.ReactNode;
}

export interface BlogPostModule {
  metadata: BlogMetadata;
  default: React.ComponentType<{}>;
}
