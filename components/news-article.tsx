"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import {
  categoryLabel,
  formatDate,
  localizePost,
  type NewsPost,
} from "@/lib/news";
import { siteConfig } from "@/lib/site-config";

const copy = {
  vi: {
    home: "Trang chủ",
    news: "Tin tức & Sự kiện",
    testDrive: "Đăng ký lái thử",
    call: "Gọi",
    otherPosts: "Bài viết khác",
  },
  en: {
    home: "Home",
    news: "News & Events",
    testDrive: "Book a test drive",
    call: "Call",
    otherPosts: "More articles",
  },
};

export function NewsArticle({
  post,
  related,
}: {
  post: NewsPost;
  related: NewsPost[];
}) {
  const { lang } = useLang();
  const t = copy[lang];
  const p = localizePost(post, lang);

  return (
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
                {t.home}
              </Link>
              <ChevronRight className="size-3.5" />
              <Link href="/#tin-tuc" className="hover:text-white">
                {t.news}
              </Link>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="rounded-full bg-white text-neutral-950 hover:bg-white">
                {categoryLabel(p.category, lang)}
              </Badge>
              <p className="flex items-center gap-1.5 text-sm text-white/60">
                <CalendarDays className="size-4" />
                {formatDate(p.date, lang)}
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {p.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Nội dung */}
      <article className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {p.image && (
            <FadeIn>
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
                <Image
                  src={p.image}
                  alt={p.title}
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
              {p.content.map((paragraph) => (
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
                {t.testDrive}
              </Button>
              <Button
                render={<a href={`tel:${siteConfig.hotline}`} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 rounded-full px-7 text-base font-semibold"
              >
                {t.call} {siteConfig.hotlineDisplay}
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
              {t.otherPosts}
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => {
              const r = localizePost(item, lang);
              return (
                <FadeIn key={item.slug} delay={index * 0.06}>
                  <Link
                    href={`/tin-tuc/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background transition-shadow hover:shadow-xl hover:shadow-neutral-900/10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {r.image && (
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <Badge className="absolute left-4 top-4 rounded-full bg-white text-neutral-950 hover:bg-white">
                        {categoryLabel(r.category, lang)}
                      </Badge>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs text-muted-foreground">
                        {formatDate(r.date, lang)}
                      </p>
                      <h3 className="mt-2 line-clamp-2 font-bold leading-snug">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
