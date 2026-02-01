import { getAllBlogPosts } from "@/lib/blog";
import { Header } from "@/components/header";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Blog | Ashish G",
  description: "Thoughts on AI, edge computing, and full-stack development",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground relative">
        {/* Header Background */}
        <div className="absolute inset-0 -z-10 h-[400px] overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-accent">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Exploring AI, edge computing, full-stack development, and insights
              from building innovative projects.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="space-y-6">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 hover:bg-accent/5">
                    {/* Header */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold group-hover:text-accent transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <time dateTime={post.date}>
                            {(() => {
                              const [year, month, day] = post.date
                                .split("-")
                                .map(Number);
                              return new Date(
                                year,
                                month - 1,
                                day,
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              });
                            })()}
                          </time>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{post.readingTime} min read</span>
                        </div>

                        <div className="text-xs">by {post.author}</div>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent hover:bg-accent/20 transition-colors"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 text-sm font-medium text-accent group-hover:translate-x-1 transition-transform duration-200">
                      Read more →
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 max-w-4xl border-t border-border/50">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">More to come</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm constantly writing about new projects and insights. Follow
              along as I share my journey in AI and software development.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
