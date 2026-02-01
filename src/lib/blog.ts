import React from "react";
import { BlogPostModule } from "@/types/blog";

// Type-safe blog post registry
const blogPosts: Record<string, () => Promise<BlogPostModule>> = {
  "stateful-ai-agents-memory-pillar": () =>
    import("@/app/blog/posts/stateful-ai-agents-memory-pillar").then((m) => ({
      metadata: m.metadata,
      default: m.default,
    })),
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  readingTime: number;
  tags: string[];
  content: React.ReactNode;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for (const [slug, loader] of Object.entries(blogPosts)) {
    try {
      const module = await loader();
      const { metadata } = module;

      posts.push({
        slug: metadata.slug,
        title: metadata.title,
        date: metadata.date,
        author: metadata.author,
        excerpt: metadata.excerpt,
        readingTime: metadata.readingTime,
        tags: metadata.tags,
        content: React.createElement(module.default),
      });
    } catch (error) {
      console.error(`Failed to load blog post: ${slug}`, error);
    }
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const loader = blogPosts[slug];

  if (!loader) {
    return null;
  }

  try {
    const module = await loader();
    const { metadata } = module;

    return {
      slug: metadata.slug,
      title: metadata.title,
      date: metadata.date,
      author: metadata.author,
      excerpt: metadata.excerpt,
      readingTime: metadata.readingTime,
      tags: metadata.tags,
      content: React.createElement(module.default),
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}
