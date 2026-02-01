import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { Header } from "@/components/header";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background text-foreground">
          <section className="container mx-auto px-4 py-20 max-w-4xl">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Post not found</h1>
              <p className="text-muted-foreground">
                The blog post you're looking for doesn't exist.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground relative">
        {/* Header Background */}
        <div className="absolute inset-0 -z-10 h-[500px] overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>

        {/* Hero Section - Title Centered Full Width */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-center break-words">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Meta Information */}
        <section className="container mx-auto px-4 py-8 max-w-4xl">
          <article className="space-y-6">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={post.date}>
                  {(() => {
                    const [year, month, day] = post.date.split("-").map(Number);
                    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
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

              <div className="text-xs font-medium">by {post.author}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="prose prose-invert max-w-none space-y-6 text-base leading-relaxed">
            {post.content}
          </article>
        </section>

        {/* Related Posts */}
        <RelatedPosts currentSlug={slug} />

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 max-w-4xl border-t border-border/50">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Want to read more?</h3>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-105"
            >
              View all posts
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const posts = (await getAllBlogPosts())
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 2);

  if (posts.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl border-t border-border/50">
      <h3 className="text-2xl font-bold mb-6">More Articles</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="border border-border rounded-lg p-4 hover:border-accent hover:bg-accent/5 transition-all duration-300">
              <h4 className="font-semibold group-hover:text-accent transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
