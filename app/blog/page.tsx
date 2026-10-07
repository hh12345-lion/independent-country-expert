import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Blog | Independent Country Expert",
  description:
    "Articles for practitioners on assessing digital open source country information, source currency and scope, and instructing independent country experts.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    inLanguage: "en",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={blogLd} />
      <PageShell
        title="Independent Country Expert Blog"
        subtitle="Practitioner-facing articles on country evidence, digital open source material, and instructing independent country experts."
        breadcrumbs={crumbs}
      >
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center bg-[#171D1E] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#EFECE4] hover:bg-[#406383]"
          >
            Route a case
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-[44px] items-center justify-center border border-[#171D1E] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#171D1E] hover:border-[#406383] hover:text-[#406383]"
          >
            Browse guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-[#364142]">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="overflow-hidden border border-[#D0CFC9] bg-[#EFECE4]">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#406383]">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span className="normal-case tracking-normal">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl text-[#171D1E]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#406383]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#364142]">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[#406383] hover:underline"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
