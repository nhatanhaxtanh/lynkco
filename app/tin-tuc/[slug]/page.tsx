import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { FloatingContact } from "@/components/floating-contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatDate, getPost, newsPosts } from "@/lib/news";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/tin-tuc/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `${siteConfig.url}/tin-tuc/${post.slug}`,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: post.image ? [`${siteConfig.url}${post.image}`] : undefined,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/tin-tuc/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main>
        {/* Header bài viết */}
        <section className="bg-neutral-950 text-white">
          <div className="mx-auto max-w-3xl px-4 pb-14 pt-28 sm:px-6 md:pt-36">
            <FadeIn>
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-1.5 text-sm text-white/50"
              >
                <Link href="/" className="hover:text-white">
                  Trang chủ
                </Link>
                <ChevronRight className="size-3.5" />
                <Link href="/#tin-tuc" className="hover:text-white">
                  Tin tức &amp; Sự kiện
                </Link>
              </nav>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge className="rounded-full bg-white text-neutral-950 hover:bg-white">
                  {post.category}
                </Badge>
                <p className="flex items-center gap-1.5 text-sm text-white/60">
                  <CalendarDays className="size-4" />
                  {formatDate(post.date)}
                </p>
              </div>

              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Nội dung */}
        <article className="bg-background py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {post.image && (
              <FadeIn>
                <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 48rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.05}>
              <div className="space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
                {post.content.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-8">
                <Button
                  render={<Link href="/#lai-thu" />}
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-full px-7 text-base font-semibold"
                >
                  Đăng ký lái thử
                </Button>
                <Button
                  render={<a href={`tel:${siteConfig.hotline}`} />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-7 text-base font-semibold"
                >
                  Gọi {siteConfig.hotlineDisplay}
                </Button>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Bài viết khác */}
        <section className="border-t border-border bg-muted/50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Bài viết khác
              </h2>
            </FadeIn>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item, index) => (
                <FadeIn key={item.slug} delay={index * 0.06}>
                  <Link
                    href={`/tin-tuc/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background transition-shadow hover:shadow-xl hover:shadow-neutral-900/10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <Badge className="absolute left-4 top-4 rounded-full bg-white text-neutral-950 hover:bg-white">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs text-muted-foreground">
                        {formatDate(item.date)}
                      </p>
                      <h3 className="mt-2 line-clamp-2 font-bold leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
