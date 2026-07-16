"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/fade-in";
import { useLang } from "@/components/language-provider";
import { categoryLabel, formatDate, localizePost, newsPosts } from "@/lib/news";

const copy = {
  vi: {
    eyebrow: "Cập nhật mới nhất",
    heading: "Tin tức & Sự kiện",
    readMore: "Đọc tiếp",
  },
  en: {
    eyebrow: "Latest updates",
    heading: "News & Events",
    readMore: "Read more",
  },
};

export function NewsSection() {
  const { lang } = useLang();
  const t = copy[lang];
  const posts = newsPosts.slice(0, 3).map((post) => localizePost(post, lang));

  return (
    <section id="tin-tuc" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`/tin-tuc/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/40">
                      <Newspaper className="size-10" strokeWidth={1.5} />
                    </div>
                  )}
                  <Badge className="absolute left-4 top-4 rounded-full bg-white text-neutral-950 hover:bg-white">
                    {categoryLabel(post.category, lang)}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {formatDate(post.date, lang)}
                  </p>
                  <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold">
                    {t.readMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
